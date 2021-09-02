const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Another Way to Learn Forge',
    tagline: 'Don\'t worry... This is just a working title :)',
    url: 'https://petrbroz.github.io',
    baseUrl: '/forge-samples-docs/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'petrbroz',
    projectName: 'forge-samples-docs',
    plugins: [
        require.resolve('@cmfcmf/docusaurus-search-local')
    ],
    themeConfig: {
        navbar: {
            title: 'Another Way to Learn Forge',
            logo: {
                alt: 'Autodesk Forge',
                src: 'img/logo.png'
            },
            items: [
                {
                    type: 'doc',
                    docId: 'intro',
                    position: 'left',
                    label: 'Tutorials'
                },
                {
                    type: 'localeDropdown',
                    position: 'right',
                },
                {
                    href: 'https://github.com/petrbroz/forge-samples-docs',
                    label: 'GitHub',
                    position: 'right'
                }
            ]
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        {
                            label: 'Tutorials',
                            to: '/docs/intro'
                        }
                    ]
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/autodesk-forge'
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/ipetrbroz'
                        }
                    ]
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/petrbroz/forge-samples-docs'
                        }
                    ]
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Autodesk, Inc. Built with Docusaurus.`
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
            additionalLanguages: ['csharp']
        },
        hideableSidebar: true
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    editUrl: 'https://github.com/petrbroz/forge-samples-docs/edit/main/website/'
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }
            }
        ]
    ],
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'cz']
    }
};
