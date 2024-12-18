# Contributing Guidelines

Below you'll find some guidelines and tips for contributing to this Docusaurus project.
If you haven't worked with Docusaurus before, I'd also suggest checking out its
[docs](https://docusaurus.io/docs) as well.

## Adding New Tutorials

> Tip: look at the structure of existing tutorials under `docs/tutorials` for reference.

1. Create a new folder for your tutorial under `docs/tutorials`. The name of the folder
   should be short, with comma-separated words (it will appear in the URL), and it should
   be prefixed with a number (used to control the ordering in the UI). For example,
   `04-my-cool-tutorial` would be the 4th tutorial in the sidebar accessible via the following
   URL: https://tutorials.autodesk.io/tutorials/my-cool-tutorial/.

2. Inside the new folder, create a file called `_category_.json`, and populate it with
   a JSON specifying the display name of the tutorial, for example:

```json
{
  "label": "My Cool Tutorial"
}
```

3. Create an `index.md` or `index.mdx` (Markdown with JSX syntax) file in the new folder.
   This will be the main page of your tutorial. Use it to describe what the tutorial is about,
   which parts of the platform it's using, etc. Consider adding a screenshot or a video
   showing the result of the tutorial as well.

4. Create an `*.md` or `*.mdx` file for each step of the tutorial. The name of the file
   should be short, with comma-separated words (it will appear in the URL), and it should
   be prefixed with a number (used to control the ordering in the UI). For example,
   `02-basic-server.md` would be the 2nd step in the sidebar accessible via the following
   URL: https://tutorials.autodesk.io/tutorials/my-cool-tutorial/basic-server.

5. Add a [front matter](https://docusaurus.io/docs/markdown-features#front-matter) header
   at the beginning of each tutorial step Markdown to control the display name in the UI,
   for example:

```
---
title: Basic Server Setup
---
```

6. Start writing the content of your tutorial. Follow the steps in the [README.md](./README.md) file
   to build and preview the Docusaurus website locally.

## Suggestions

- Try structuring your tutorial so that the user can test their application at the end of each step,
  not just at the very end.

- If there are any assets (images, MDX files, etc.) that you want to share across multiple pages,
  store them in a `_shared` subfolder.

- Whenever you are referring to a code element (class, variable, etc.), file, or folder, use the
  backtick notation. For example:

```
Let's define a new class called `Authorizer`.
```

```
Create a new file in the `source/foo` subfolder.
```

- Whenever you are referring to some UI element (button, input field, etc.), use the underscore
  notation. For example:

```
Click the _Sign Up_ button in the bottom-left corner.
```

## Docusaurus Tips & Tricks

### Markdown vs MDX

You can either use standard Markdown syntax (with some additional Docusaurus features
such as [admonitions](https://docusaurus.io/docs/markdown-features/admonitions) or
[front matter](https://docusaurus.io/docs/markdown-features#front-matter)), or
[MDX](https://mdxjs.com) which is basically Markdown with embedded JSX syntax. The latter
is useful when you need to use some React components like [tabs](https://docusaurus.io/docs/markdown-features/tabs).

### Importing Markdown

In Docusaurus you can import an `*.md` or `*.mdx` file as a React component into another `*.mdx` file:

```mdx
import SomeMarkdownPiece from "./_shared/some/other.mdx";

...

<SomeMarkdownPiece />

...
```

For more info, see https://docusaurus.io/docs/markdown-features/react#importing-markdown.

### Tabs

Docusaurus provides a `<Tabs>` component that you can use to generate tabbed content
([docs](https://docusaurus.io/docs/markdown-features/tabs)).

In this project we also have a specialized component called `<EnvTabs>` that is used
specifically to show 3 predefined tabs for the following "environments":

- Node.js + Visual Studio Code
- .NET 8 + Visual Studio Code
- .NET 8 + Visual Studio 2022

To use it, import the Markdown content for individual tabs as separate React components,
and insert them into the `<EnvTabs>` component like so:

```mdx
import EnvTabs from "@site/src/components/EnvTabs.js";
import SomeMarkdown1 from "./_shared/foo/node-vscode.mdx";
import SomeMarkdown2 from "./_shared/foo/dotnet-vscode.mdx";
import SomeMarkdown3 from "./_shared/foo/dotnet-vs2022.mdx";

...

<EnvTabs
  NodeJsVsCode={SomeMarkdown1}
  DotNetVsCode={SomeMarkdown2}
  DotNetVs2022={SomeMarkdown3}
/>

...
```

### Code Blocks

Use the standard "triple-tick" syntax for adding code blocks. You can also specify the name
of the file the code block is related to:

    ```csharp title="Startup.cs"
        using System;
        using Microsoft.AspNetCore.Builder;
        using Microsoft.AspNetCore.Hosting;
        using Microsoft.Extensions.Configuration;
        using Microsoft.Extensions.DependencyInjection;
        using Microsoft.Extensions.Hosting;

        public class Startup
        {
            public Startup(IConfiguration configuration)
            {
                Configuration = configuration;
            }
        }
    ```

You can also [highlight](https://docusaurus.io/docs/markdown-features/code-blocks#highlighting-with-comments)
specific lines in the code block using the special `// highlight-start` and `// highlight-end` comments:

    ```csharp title="Startup.cs"
        using System;
        using Microsoft.AspNetCore.Builder;
        using Microsoft.AspNetCore.Hosting;
        using Microsoft.Extensions.Configuration;
        using Microsoft.Extensions.DependencyInjection;
        using Microsoft.Extensions.Hosting;

        public class Startup
        {
            // highlight-start
            public Startup(IConfiguration configuration)
            {
                Configuration = configuration;
            }
            // highlight-end
        }
    ```

### Admonitions

Where appropriate, use [admonitions](https://docusaurus.io/docs/markdown-features/admonitions),
for example:

```md
:::tip
This is a tip.
:::

:::caution
Be careful!
:::
```

### Images

The standard Markdown syntax for images is supported but these images are not optimized in any way.
Consider using the `<Image>` component from `@theme/IdealImage` which supports lazy loading, automated
generation of lower-res images, etc.:

```mdx
import Image from "@theme/IdealImage";

...

<Image img={require("./_shared/developer-portal-logged-out.png")} />

...
```

> Note that currently the `<Image>` component only supports PNG and JPEG formats. Other formats (for example, WEBP)
> will be rendered as a regular `<img>` element without any optimizations.

To learn more about this React component, check out https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-ideal-image.

### Videos

There's a `<ResponsiveVideo>` React component you can use to embed static videos:

```mdx
import ResponsiveVideo from "@site/src/components/ResponsiveVideo.js";
import PreviewUrl from "@site/static/videos/simple-viewer.mp4";
import PreviewUrl1 from "@site/static/videos/premium-reporting.gif";

...

<ResponsiveVideo src={PreviewUrl} />

...
```
