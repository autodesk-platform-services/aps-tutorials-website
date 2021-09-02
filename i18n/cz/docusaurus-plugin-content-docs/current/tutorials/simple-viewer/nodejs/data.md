---
sidebar_position: 3
---

# Správa souborů

V dalším kroku rozšíříme náš server, abychom s jeho pomocí mohli získávat seznam modelů
připravených k prohlížení, nahrávat nové modely a také spouštět jejich překlad do formátu
potřebného pro prohlížení v komponentě Forge Viewer.

## Příprava adresáře

Nejprve musíme zajistit, aby naše aplikace měla "adresář" ve službě Data Management, kde by
mohla ukládat svá data. Tento adresář by obvykle byl vytvořen pouze jednou během zakládání
nového projektu, ale v této ukázkové aplikaci vytvoříme pomocnou funkci, která zajistí, že
je konkrétní adresář vždy k dispozici. Upravte vyznačené části kódu v souboru `services/forge.js`:

```js {1,8,29-40} title="services/forge.js"
const { AuthClientTwoLegged, BucketsApi } = require('forge-apis');

const { FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_BUCKET } = process.env;
if (!FORGE_CLIENT_ID || !FORGE_CLIENT_SECRET) {
    console.warn('Missing some of the environment variables.');
    process.exit(1);
}
const BUCKET = FORGE_BUCKET || `${FORGE_CLIENT_ID.toLowerCase()}-basic-app`;
const INTERNAL_TOKEN_SCOPES = ['bucket:read', 'bucket:create', 'data:read', 'data:write', 'data:create'];
const PUBLIC_TOKEN_SCOPES = ['viewables:read'];

let internalAuthClient = new AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, INTERNAL_TOKEN_SCOPES, true);
let publicAuthClient = new AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, PUBLIC_TOKEN_SCOPES, true);

async function getInternalToken() {
    if (!internalAuthClient.isAuthorized()) {
        await internalAuthClient.authenticate();
    }
    return internalAuthClient.getCredentials();
}

async function getPublicToken() {
    if (!publicAuthClient.isAuthorized()) {
        await publicAuthClient.authenticate();
    }
    return publicAuthClient.getCredentials();
}

async function ensureBucketExists() {
    const token = await getInternalToken();
    try {
        await new BucketsApi().getBucketDetails(BUCKET, null, token);
    } catch (err) {
        if (err.statusCode === 404) {
            await new BucketsApi().createBucket({ bucketKey: BUCKET, policyKey: 'temporary' }, {}, null, token);
        } else {
            throw err;
        }
    }
}

module.exports = {
    getPublicToken
};
```

Funkce `ensureBucketExists` se jednoduše pokusí zjistit další informace o konkrétním adresáři
a pokud bude odpovědí z platformy Forge `404 Not Found`, pokusí se tento adresář vytvořit.

## Výčet modelů

Nyní můžeme do souboru `services/forge.js` vložit další pomocnou funkci, která poskytne výčet
všech modelů, které jsou k dispozici v našem přednastaveném adresáři:

```js {1,15,44-58,62} title="services/forge.js"
const { AuthClientTwoLegged, BucketsApi, ObjectsApi } = require('forge-apis');

const { FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_BUCKET } = process.env;
const { FORGE_CLIENT_ID, FORGE_CLIENT_SECRET } = process.env;
if (!FORGE_CLIENT_ID || !FORGE_CLIENT_SECRET) {
    console.warn('Missing some of the environment variables.');
    process.exit(1);
}
const INTERNAL_TOKEN_SCOPES = ['bucket:read', 'bucket:create', 'data:read', 'data:write', 'data:create'];
const PUBLIC_TOKEN_SCOPES = ['viewables:read'];

let internalAuthClient = new AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, INTERNAL_TOKEN_SCOPES, true);
let publicAuthClient = new AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, PUBLIC_TOKEN_SCOPES, true);

const urnify = (id) => Buffer.from(id).toString('base64').replace(/=/g, '');

async function getInternalToken() {
    if (!internalAuthClient.isAuthorized()) {
        await internalAuthClient.authenticate();
    }
    return internalAuthClient.getCredentials();
}

async function getPublicToken() {
    if (!publicAuthClient.isAuthorized()) {
        await publicAuthClient.authenticate();
    }
    return publicAuthClient.getCredentials();
}

async function ensureBucketExists() {
    const token = await getInternalToken();
    try {
        await new BucketsApi().getBucketDetails(BUCKET, null, token);
    } catch (err) {
        if (err.statusCode === 404) {
            await new BucketsApi().createBucket({ bucketKey: BUCKET, policyKey: 'temporary' }, {}, null, token);
        } else {
            throw err;
        }
    }
}

async function listModels() {
    await ensureBucketExists(); // Remove this if we can assume the bucket to exist
    const token = await getInternalToken();
    let response = await new ObjectsApi().getObjects(BUCKET, { limit: 64 }, null, token);
    let objects = response.body.items;
    while (response.body.next) {
        const startAt = new URL(response.body.next).searchParams.get('startAt');
        response = await new ObjectsApi().getObjects(BUCKET, { limit: 64, startAt }, null, token);
        objects = objects.concat(response.body.items);
    }
    return objects.map(obj => ({
        name: obj.objectKey,
        urn: urnify(obj.objectId)
    }));
}

module.exports = {
    getPublicToken,
    listModels
};
```

Funkce `listModels` postupně projde veškeré soubory a vráti jejich názvy a URN
(base64-enkódované ID, které bude později použito při komunikaci se službou Model Derivative).

## Nahrávání a konverze modelů

Poslední pomocná funkce, kterou přidáme do souboru `services/forge.js`, bude zajišťovat nahrávání
nových modelů do služby Data Management a jejich konverzi do formátu, který můžeme později načíst
do Forge Vieweru:

```js {1,2,61-79,84} title="services/forge.js"
const fs = require('fs');
const { AuthClientTwoLegged, BucketsApi, ObjectsApi, DerivativesApi } = require('forge-apis');

const { FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, FORGE_BUCKET } = process.env;
if (!FORGE_CLIENT_ID || !FORGE_CLIENT_SECRET) {
    console.warn('Missing some of the environment variables.');
    process.exit(1);
}
const BUCKET = FORGE_BUCKET || `${FORGE_CLIENT_ID.toLowerCase()}-basic-app`;
const INTERNAL_TOKEN_SCOPES = ['bucket:read', 'bucket:create', 'data:read', 'data:write', 'data:create'];
const PUBLIC_TOKEN_SCOPES = ['viewables:read'];

let internalAuthClient = new AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, INTERNAL_TOKEN_SCOPES, true);
let publicAuthClient = new AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, PUBLIC_TOKEN_SCOPES, true);

const urnify = (id) => Buffer.from(id).toString('base64').replace(/=/g, '');

async function getInternalToken() {
    if (!internalAuthClient.isAuthorized()) {
        await internalAuthClient.authenticate();
    }
    return internalAuthClient.getCredentials();
}

async function getPublicToken() {
    if (!publicAuthClient.isAuthorized()) {
        await publicAuthClient.authenticate();
    }
    return publicAuthClient.getCredentials();
}

async function ensureBucketExists() {
    const token = await getInternalToken();
    try {
        await new BucketsApi().getBucketDetails(BUCKET, null, token);
    } catch (err) {
        if (err.statusCode === 404) {
            await new BucketsApi().createBucket({ bucketKey: BUCKET, policyKey: 'temporary' }, {}, null, token);
        } else {
            throw err;
        }
    }
}

async function listModels() {
    await ensureBucketExists(); // Remove this if we can assume the bucket to exist
    const token = await getInternalToken();
    let response = await new ObjectsApi().getObjects(BUCKET, { limit: 64 }, null, token);
    let objects = response.body.items;
    while (response.body.next) {
        const startAt = new URL(response.body.next).searchParams.get('startAt');
        response = await new ObjectsApi().getObjects(BUCKET, { limit: 64, startAt }, null, token);
        objects = objects.concat(response.body.items);
    }
    return objects.map(obj => ({
        name: obj.objectKey,
        urn: urnify(obj.objectId)
    }));
}

async function uploadModel(objectName, filePath, rootFilename) {
    await ensureBucketExists(); // Remove this if we can assume the bucket to exist
    const token = await getInternalToken();
    const buffer = fs.readFileSync(filePath);
    const response = await new ObjectsApi().uploadObject(BUCKET, objectName, buffer.byteLength, buffer, {}, null, token);
    const job = {
        input: {
            urn: urnify(response.body.objectId)
        },
        output: {
            formats: [{ type: 'svf', views: ['2d', '3d'] }]
        }
    };
    if (rootFilename) {
        job.input.compressedUrn = true;
        job.input.rootFilename = rootFilename;
    }
    await new DerivativesApi().translate(job, {}, null, token);
}

module.exports = {
    getPublicToken,
    listModels,
    uploadModel
};
```

## Serverové adresy

Nakonec ještě musíme veškerou novou funkcionalitu zpřístupnit naší budoucí webové aplikaci
skrze další Express.js router. Vytvořte soubor `models.js` v adresáři `routes` a vložte
do něj následující kód:

```js title="routes/models.js"
const express = require('express');
const formidable = require('express-formidable');
const { listModels, uploadModel } = require('../services/forge.js');

let router = express.Router();

router.get('/', async function (req, res, next) {
    try {
        res.json(await listModels());
    } catch (err) {
        next(err);
    }
});

router.post('/', formidable(), async function (req, res, next) {
    const file = req.files['model-file'];
    if (!file) {
        res.status(400).send('The required field ("model-file") is missing.');
        return;
    }
    try {
        await uploadModel(file.name, file.path, req.fields['model-zip-entrypoint']);
        res.status(200).end();
    } catch (err) {
        next(err);
    }
});

module.exports = router;
```

Tento router bude zajišťovat dva druhy požadavků - `GET` požadavek v případech, kdy klient bude
chtít získat výčet všech modelů připravených k prohlížení, a `POST` požadavek v případech,
kdy klient bude chtít nahrát a zkonvertovat nové modely. Funkce `formidable()` použitá
pro `POST` požadavky zajistí, že veškeré požadavky s obsahem ve formátu `multipart/form-data`
budou správně přečteny, a že v nich uložené informace budou k dispozici v objektech `req.files`
a `req.fields`.

Nezapomeňme opět připojit nový router k naší serverové aplikaci pomocí následující úpravy
kódu v souboru `server.js`:

```js {7} title="server.js"
const express = require('express');
const PORT = process.env.PORT || 3000;

let app = express();
app.use(express.static('public'));
app.use('/api/auth', require('./routes/auth.js'));
app.use('/api/models', require('./routes/models.js'));
app.use(function (err, req, res, next) {
    console.error(err);
    res.status(500).send(err.message);
});
app.listen(PORT, function () { console.log(`Server listening on port ${PORT}...`); });
```

Jak můžete vidět, nový router bude obstarávat `GET` a `POST` požadavky přicházející na adresu
`/api/models`.

## Zkouška

Čas vyzkoušet naší vylepšenou serverovou aplikaci. Tentokrát můžete kromě nastavení Forge autentikačních
údajů definovat také konkrétní adresáře v proměnné prostředí `FORGE_BUCKET`:

```bash
export FORGE_CLIENT_ID=your-own-forge-client-id
export FORGE_CLIENT_SECRET=your-own-forge-client-secret
export FORGE_BUCKET=your-custom-bucket-name
npm start
```

Pokud není jméno adresáře definováno, náš kód v souburu `services/forge.js` vygeneruje své vlastní
připojením `-basic-app` za Vaše Forge client ID.

> Služba Data Management vyžaduje, aby názvy adresářů byly **globálně unikátní**,
> a pokusy o vytvořní adresáře, jehož jméno již používá jiný vývojář, skončí s chybou `409 Conflict`.
> Více informací najdete v oficiální [dokumentaci](https://forge.autodesk.com/en/docs/data/v2/reference/http/buckets-POST).

Pokud nyní otevřete adresu http://localhost:3000/api/models v prohlížeči, server by měl odpovědět
s výčtem všech objektů ve Vašem adresáři ve formátu JSON.

![Server Response](./data-response.png)
