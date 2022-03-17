Finally, let's make this new functionality available to the client through another
Express router. Create a `models.js` file under the `routes` subfolder with the following
content:

```js title="routes/models.js"
const express = require('express');
const formidable = require('express-formidable');
const { listObjects, uploadObject, translateObject, getManifest, urnify } = require('../services/forge.js');

let router = express.Router();

router.get('/', async function (req, res, next) {
    try {
        const objects = await listObjects();
        res.json(objects.map(o => ({
            name: o.objectKey,
            urn: urnify(o.objectId)
        })));
    } catch (err) {
        next(err);
    }
});

router.get('/:urn/status', async function (req, res, next) {
    try {
        const manifest = await getManifest(req.params.urn);
        if (manifest) {
            let messages = [];
            if (manifest.derivatives) {
                for (const derivative of manifest.derivatives) {
                    messages = messages.concat(derivative.messages || []);
                    if (derivative.children) {
                        for (const child of derivative.children) {
                            messages.concat(child.messages || []);
                        }
                    }
                }
            }
            res.json({ status: manifest.status, progress: manifest.progress, messages });
        } else {
            res.json({ status: 'n/a' });
        }
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
        const obj = await uploadObject(file.name, file.path);
        await translateObject(urnify(obj.objectId), req.fields['model-zip-entrypoint']);
        res.json({
            name: obj.objectKey,
            urn: urnify(obj.objectId)
        });
    } catch (err) {
        next(err);
    }
});

module.exports = router;
```

:::info
The `formidable()` middleware used in the `POST` request handler will make sure that
any `multipart/form-data` content coming with the request is parsed and available
in the `req.files` and `req.fields` properties.
:::

And mount the router to our server application by modifying `server.js`:

```js title="server.js"
const express = require('express');
const { PORT } = require('./config.js');

let app = express();
app.use(express.static('wwwroot'));
app.use('/api/auth', require('./routes/auth.js'));
// highlight-start
app.use('/api/models', require('./routes/models.js'));
// highlight-end
app.listen(PORT, function () { console.log(`Server listening on port ${PORT}...`); });
```

The router will handle 3 types of requests:

- `GET /api/models` - when the client wants to get the list of all models available for viewing
- `GET /api/models/:urn/status` - used to check the status of the conversion (incl. error messages if there are any)
- `POST /api/models` - when the client wants to upload a new model and start its translation
