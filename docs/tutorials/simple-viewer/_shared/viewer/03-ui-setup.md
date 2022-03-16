Finally, let's define the UI of our application with a simple HTML markup and CSS.

Create an `index.html` file in the `wwwroot` subfolder with the following content:

```html title="wwwroot/index/html"
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/style.css">
    <link rel="stylesheet" href="/main.css">
    <title>Autodesk Forge: Simple Viewer</title>
</head>

<body>
    <div id="header">
        <img class="logo" src="/logo.png" alt="Autodesk Forge">
        <span class="title">Simple Viewer</span>
        <select name="models" id="models"></select>
        <button id="upload" title="Upload New Model">Upload</button>
        <input style="display: none" type="file" id="input">
    </div>
    <div id="preview"></div>
    <div id="overlay"></div>
    <script src="https://developer.api.autodesk.com/modelderivative/v2/viewers/7.*/viewer3D.js"></script>
    <script src="/main.js" type="module"></script>
</body>

</html>
```

The HTML markup simply uses a `<select>` element as the dropdown for listing the viewable models,
and an `<input type="file">` element with a `<button>` to handle the uploading of a new model.

Create a `main.css` file, also under the `wwwroot` subfolder, and populate it with these CSS rules:

```css title="wwwroot/main.css"
body, html {
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family: ArtifaktElement; /* Will be added by Forge Viewer */
}

#header, #preview, #overlay {
    position: absolute;
    width: 100%;
}

#header {
    height: 3em;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
}

#preview, #overlay {
    top: 3em;
    bottom: 0;
}

#overlay {
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 1em;
    display: none;
}

#overlay > .notification {
    margin: auto;
    padding: 1em;
    max-width: 50%;
    background: white;
}

#header > * {
    height: 2em;
    margin: 0 0.5em;
    font-size: 1em;
    font-family: ArtifaktElement;
}

#header .title {
    flex: 1 0 auto;
    height: auto;
}

#models {
    flex: 0 1 auto;
    min-width: 2em;
}
```

The application will look for `favicon.ico` and `logo.png` images under the `wwwroot` folder
to use as the website's icon and logo. If you don't have any images of your own, feel free
to download them from one of our samples:

- https://raw.githubusercontent.com/petrbroz/forge-simple-viewer-nodejs/develop/public/favicon.ico
- https://raw.githubusercontent.com/petrbroz/forge-simple-viewer-nodejs/develop/public/logo.png
