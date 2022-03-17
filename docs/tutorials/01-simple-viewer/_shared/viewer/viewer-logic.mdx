Let's start by implementing the Forge Viewer functionality for our application.
Create a `viewer.js` file under the `wwwroot` subfolder with the following code:

```js title="wwwroot/viewer.js"
/// import * as Autodesk from "@types/forge-viewer";

async function getAccessToken(callback) {
    try {
        const resp = await fetch('/api/auth/token');
        if (!resp.ok) {
            throw new Error(await resp.text());
        }
        const { access_token, expires_in } = await resp.json();
        callback(access_token, expires_in);
    } catch (err) {
        alert('Could not obtain access token. See the console for more details.');
        console.error(err);
    }
}

export function initViewer(container) {
    return new Promise(function (resolve, reject) {
        Autodesk.Viewing.Initializer({ getAccessToken }, function () {
            const config = {
                extensions: ['Autodesk.DocumentBrowser']
            };
            const viewer = new Autodesk.Viewing.GuiViewer3D(container, config);
            viewer.start();
            viewer.setTheme('light-theme');
            resolve(viewer);
        });
    });
}

export function loadModel(viewer, urn) {
    return new Promise(function (resolve, reject) {
        function onDocumentLoadSuccess(doc) {
            resolve(viewer.loadDocumentNode(doc, doc.getRoot().getDefaultGeometry()));
        }
        function onDocumentLoadFailure(code, message, errors) {
            reject({ code, message, errors });
        }
        viewer.setLightPreset(0);
        Autodesk.Viewing.Document.load('urn:' + urn, onDocumentLoadSuccess, onDocumentLoadFailure);
    });
}
```

The script is an [ES6 module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
that exports two functions, `initViewer` that will create a new instance of Forge Viewer
in the specified DOM container, and `loadModel` which will load a specific model to the viewer.
When initializing the viewer we include a small helper function (`getAccessToken`) that
retrieves a public token from our server application. The viewer can then use this token
to start loading assets from the Model Derivative service.
