Next, let's add a first endpoint to our server. Create an `auth.js` file under the `routes` subfolder
with the following content:

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

Here we implement a new [Express Router](http://expressjs.com/en/4x/api.html#router) that will handle
requests coming to our server, with the URL ending with `/token`, by generating a public access token
and sending it back to the client as a JSON response.

Let's "mount" the router to our server application by modifying the `server.js`:

```js title="server.js"
const express = require('express');
const { PORT } = require('./config.js');

let app = express();
app.use(express.static('wwwroot'));
// highlight-start
app.use('/api/auth', require('./routes/auth.js'));
// highlight-end
app.listen(PORT, function () { console.log(`Server listening on port ${PORT}...`); });
```

:::info
Since the router has been attached to the `/api/auth` prefix, it will now handle all requests
coming to the endpoint `/api/auth/token`.
:::
