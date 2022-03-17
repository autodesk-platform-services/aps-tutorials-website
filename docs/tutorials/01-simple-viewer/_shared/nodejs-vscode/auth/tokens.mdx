Create a `forge.js` file under the `services` subfolder. This is where we will be implementing
all the Forge-specific logic that will be used in different areas of our server application.
Let's start by adding the following code to the file:

```js title="services/forge.js"
const { AuthClientTwoLegged } = require('forge-apis');
const { FORGE_CLIENT_ID, FORGE_CLIENT_SECRET } = require('../config.js');

let internalAuthClient = new AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, ['bucket:read', 'bucket:create', 'data:read', 'data:write', 'data:create'], true);
let publicAuthClient = new AuthClientTwoLegged(FORGE_CLIENT_ID, FORGE_CLIENT_SECRET, ['viewables:read'], true);

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
    getPublicToken,
};
```

The code creates two authentication clients, one for generating tokens for internal use
(giving us read/write access to the Data Management buckets and objects), and one for generating
tokens for public use (only giving a read access to the translation outputs from the Model Derivative
service), and two helper methods to generate the corresponding tokens for us. The `getPublicToken` function
is exported from this script as we will use it in another part of our server application.
