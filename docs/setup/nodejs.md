# Node.js

## Command-line interface

Command-line interface, a _CLI_, is an essential tool when developing Node.js applications.
It is used to initialize new projects, handle their dependencies, and often even to manage their
source code. Different operating systems have their own options (for example, in Windows there's
the [Command Prompt](https://en.wikipedia.org/wiki/Cmd.exe) and [PowerShell](https://en.wikipedia.org/wiki/PowerShell),
and Unix-based systems have all sorts of [shells](https://en.wikipedia.org/wiki/Unix_shell))
but in our case we're going to be using `bash` which is available _across_ platforms.

- On Unix-based systems, `bash` (or one of its flavors like `zsh`) is most likely available
already, and if not, you can get it from https://www.gnu.org/software/bash.
- On Windows, `bash` will be installed as part of `git`, the source code management tool
discussed in the next section.

## Source code management

Another essential part of the modern software development, especially for web, is the source code
management tool [git](https://git-scm.com). Go to the [Downloads](https://git-scm.com/downloads)
section, and install the latest release for your platform. As mentioned in the previous section,
the Windows installer comes with the `bash` CLI as well.

To check whether `git` is installed and available, try running the following command in `bash`:

```bash
git --version
```

You should see something like this:

![Checking git in terminal](git.png)

## Node.js runtime & NPM

We will also need the Node.js _runtime_ to run our code, and the Node.js package manager, _NPM_,
to manage 3rd party dependencies. You can get an installer for your platform on https://nodejs.org/en/download
which will install both.

To make sure the tools are available, try running the following two commands in `bash`:

```bash
node -v
npm -v
```

You should see something like this:

![Checking node in terminal](node.png)

## Editor

For the coding itself you're welcome to use whichever editor you like the most.
If you're open to suggestions, we recommend [Visual Studio Code](https://code.visualstudio.com)
which is free, cross-platform, and fast. Simply install the latest stable build
for your platform.

:::tip
We've also built an extension for Visual Studio Code that allows you to access
some of the Forge services and data directly from the editor:
[vscode-forge-tools](https://marketplace.visualstudio.com/items?itemName=petrbroz.vscode-forge-tools).
:::
