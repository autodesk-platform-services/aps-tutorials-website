---
sidebar_position: 2
---

# Autentikace

V tomto kroku rozšíříme náš server, abychom se s jeho pomocí mohli autentikovat platformě Forge
a vytvářet autentikační tokeny pro různé účely.

> Je dobrým zvykem generovat "interní" token s více právy (například,
> umožňující majiteli vytvářet nebo mazat soubory ve službě Data Management), který bude používán
> pouze serverem, a "veřejný" token s méně právy, který pak může být zaslán do prohlížeče.

## Správa tokenů

Vytvořte soubor `forge.js` pod adresářem `services`. Zde budeme implementova veškerou logiku
týkající se služby Forge, kterou pak budeme využívat v dalších oblastech naší serverové aplikace.
Začněme přidáním následujícího kódu:

```js title="services/forge.js"
const { AuthClientTwoLegged } = require('forge-apis');

const { FORGE_CLIENT_ID, FORGE_CLIENT_SECRET } = process.env;
if (!FORGE_CLIENT_ID || !FORGE_CLIENT_SECRET) {
    console.warn('Missing some of the environment variables.');
    process.exit(1);
}
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

module.exports = {
    getPublicToken
};
```

Tento kód očekává, že mu budou poskytnuty autentikační údaje Forge aplikace pomocí proměnných prostředí
`FORGE_CLIENT_ID` a `FORGE_CLIENT_SECRET`. Jde o _Client ID_ a _Client Secret_ hodnoty, které získáte
při [vytváření Forge aplikace](../../../intro#create-an-app). S těmito údaji jsou pak vytvořeny dvě
instance autentikačních klientů, jeden pro vnitřní použití (zajišťující read/write přístup k datům
ve službě Data Management), a jeden pro veřejné použití (umožňující pouze prohlížení výsledků konverze
našich souborů ve službě Model Derivative), a dvě pomocné funkce pro generování odpovídajících tokenů.

## Autentikační serverové adresy

Nyní můžeme vytvořit první serverovou adresu. Vytvořte soubor `auth.js` v adresáři `routes` a vložte
do něj následující kód:

```js title="routes/auth.js"
const express = require('express');
const { getPublicToken } = require('../services/forge.js');

let router = express.Router();

router.get('/token', async function (req, res, next) {
    try {
        res.json(await getPublicToken());
    } catch (err) {
        next(err);
    }
});

module.exports = router;
```

Tento kód definuje nový [Express Router](http://expressjs.com/en/4x/api.html#router), který bude
odpovídat na dotazy přicházející na adresu končící `/token`, generovat veřejné autektikační tokeny
a posílat je zpět prohlížeči ve formátu JSON.

Nově definovaný router ještě musíme "připojit" k našemu serveru pomocí následující úpravy
souboru `server.js`:

```js {6} title="server.js"
const express = require('express');
const PORT = process.env.PORT || 3000;

let app = express();
app.use(express.static('public'));
app.use('/api/auth', require('./routes/auth.js'));
app.use(function (err, req, res, next) {
    console.error(err);
    res.status(500).send(err.message);
});
app.listen(PORT, function () { console.log(`Server listening on port ${PORT}...`); });
```

Jelikož jsme router připojili k adresové předponě `/api/auth`, bude jeho logika odpovídat
na veškeré požadavky přicházející na serverovou adresu `/api/auth/token`.

## Zkouška

Vyzkoušejme, zda naše nová serverová adresa funguje. Nastavte Vaše Forge client ID a client secret
jako proměnné prostředí `FORGE_CLIENT_ID` a `FORGE_CLIENT_SECRET`, a spusťte aplikaci z příkazové
řádky:

```bash
export FORGE_CLIENT_ID=your-own-forge-client-id
export FORGE_CLIENT_SECRET=your-own-forge-client-secret
npm start
```

Pokud otevřete stránku http://localhost:3000/api/auth/token v prohlížeči,
server by měl v odpovědi zaslat autentikační token ve formátu JSON.

![Server Response](./auth-response.png)
