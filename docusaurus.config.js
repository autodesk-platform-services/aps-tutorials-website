const lazyImages = require('rehype-plugin-image-native-lazy-loading');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
    title: 'Autodesk Platform Services Tutorials',
    tagline: 'Getting started with Autodesk Platform Services',
    url: 'https://tutorials.autodesk.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'https://cdn.autodesk.io/favicon.ico',
    organizationName: 'autodesk-platform-services',
    projectName: 'aps-tutorials-website',
    plugins: [
        [
            '@docusaurus/plugin-ideal-image',
            {
              quality: 90,
              sizes: [500, 1000, 1500],
              disableInDev: false
            },
        ],
        [
            require.resolve('@easyops-cn/docusaurus-search-local'),
            {
                docsRouteBasePath: '/',
                indexDocs: true,
                indexBlog: false,
                indexPages: false,
                hashed: true
            }
        ]
    ],
    themeConfig: {
        useDefaultNavbar: false, // Enable the original Docusaurus navbar
        colorMode: {
            defaultMode: 'light',
            disableSwitch: true,
            respectPrefersColorScheme: false,
        },
        navbar: {
            title: 'Tutorials',
            logo: {
                alt: 'Autodesk Platform Services',
                src: 'https://cdn.autodesk.io/logo/black/stacked.png'
            },
            items: [
                /*
                {
                    href: 'https://aps.autodesk.com/platform-vision',
                    label: 'Platform Vision',
                    position: 'left'
                },
                {
                    href: 'https://aps.autodesk.com/developer/documentation',
                    label: 'Solutions',
                    position: 'left',
                    type: 'dropdown',
                    items: [
                        {
                            label: 'Online Viewer',
                            href: 'https://aps.autodesk.com/developer/idea/viewer-app',
                        },
                        {
                            label: 'Photo to 3D',
                            href: 'https://aps.autodesk.com/developer/idea/recap-app',
                        },
                        {
                            label: 'Autodesk Construction Cloud',
                            href: 'https://aps.autodesk.com/acc-cover-page',
                        },
                        {
                            label: 'BIM 360',
                            href: 'https://aps.autodesk.com/api/bim-360-cover-page/',
                        },
                        {
                            label: 'Data Exchange (New)',
                            href: 'https://aps.autodesk.com/data-exchange-cover-page',
                        },
                        {
                            label: 'Data Management',
                            href: 'https://aps.autodesk.com/api/data-management-cover-page/',
                        },
                        {
                            label: 'Data Visualization',
                            href: 'https://aps.autodesk.com/data-visualization-cover-page',
                        },
                        {
                            label: 'Design Automation',
                            href: 'https://aps.autodesk.com/api/design-automation-cover-page/',
                        },
                        {
                            label: 'Fusion Data (New)',
                            href: 'https://aps.autodesk.com/fusion-data-cover-page',
                        },
                        {
                            label: 'Model Derivative',
                            href: 'https://aps.autodesk.com/api/model-derivative-cover-page/',
                        },
                        {
                            label: 'Reality Capture',
                            href: 'https://aps.autodesk.com/api/reality-capture-cover-page/',
                        },
                        {
                            label: 'Token Flex',
                            href: 'https://aps.autodesk.com/api/token-flex-cover-page/',
                        },
                        {
                            label: 'Viewer',
                            href: 'https://aps.autodesk.com/api/viewer-cover-page/',
                        },
                        {
                            label: 'Webhooks',
                            href: 'https://aps.autodesk.com/api/webhooks-cover-page/',
                        }
                    ]
                },
                {
                    href: 'https://aps.autodesk.com/developer/getting-started',
                    label: 'Getting Started',
                    position: 'left'
                },
                {
                    href: 'https://aps.autodesk.com/developer/documentation',
                    label: 'Documentation',
                    position: 'left'
                },
                {
                    href: 'https://aps.autodesk.com/developer/documentation',
                    label: 'Commnunity',
                    position: 'left',
                    type: 'dropdown',
                    items: [
                        {
                            label: 'Success Stories',
                            href: 'https://aps.autodesk.com/customers',
                        },
                        {
                            label: 'Solution Showcase',
                            href: 'https://aps.autodesk.com/solution-showcase',
                        },
                        {
                            label: 'Blog',
                            href: 'https://aps.autodesk.com/blog',
                        },
                        {
                            label: 'System Integrators',
                            href: 'https://aps.autodesk.com/systemsintegrators',
                        },
                        {
                            label: 'Partnerships',
                            href: 'https://aps.autodesk.com/partnerships',
                        },
                        {
                            label: 'All Events',
                            href: 'https://aps.autodesk.com/events',
                        },
                        {
                            label: 'APS Data Days',
                            href: 'https://aps.autodesk.com/aps-data-days',
                        },
                        {
                            label: 'Accelerator',
                            href: 'https://aps.autodesk.com/accelerator-program',
                        },
                        {
                            label: 'Lightning Talks',
                            href: 'https://aps.autodesk.com/lightning-talks',
                        }
                    ]
                },
                {
                    href: 'https://aps.autodesk.com/developer/documentation',
                    label: 'Support',
                    position: 'left',
                    type: 'dropdown',
                    items: [
                        {
                            label: 'API Status',
                            href: 'https://health.autodesk.com/',
                        },
                        {
                            label: 'Get Help',
                            href: 'https://aps.autodesk.com/en/support/get-help',
                        },
                        {
                            label: 'FAQ',
                            href: 'https://aps.autodesk.com/FAQ',
                        }
                        // ... more items
                    ]
                },
                {
                    href: 'https://aps.autodesk.com/pricing',
                    label: 'Pricing',
                    position: 'left'
                },
                */
                {
                    type: 'localeDropdown',
                    position: 'right',
                },
                {
                    href: 'https://github.com/autodesk-platform-services/aps-tutorials-website',
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
                            to: '/'
                        }
                    ]
                },
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Stack Overflow',
                            href: 'https://stackoverflow.com/questions/tagged/autodesk-platform-services'
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/autodeskaps'
                        }
                    ]
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'Developer Portal',
                            href: 'https://aps.autodesk.com'
                        },
                        {
                            label: 'GitHub',
                            href: 'https://github.com/autodesk-platform-services'
                        },
                        {
                            label: 'Showroom',
                            href: 'https://forge-showroom.autodesk.io'
                        },
                        {
                            label: 'Learn APS v1',
                            href: 'https://tutorials.autodesk.io'
                        }
                    ]
                }
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Autodesk, Inc. Built with Docusaurus.`
        },
        prism: {
            additionalLanguages: ['csharp']
        },
        docs: {
            sidebar: {
                hideable: true
            }
        }
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/autodesk-platform-services/aps-tutorials-website/edit/master/',
                    rehypePlugins: [lazyImages]
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                },
                gtag: {
                    trackingID: 'G-5DQ48W5MB1',
                    anonymizeIP: true
                },
                blog: false
            }
        ]
    ],
    i18n: {
        defaultLocale: 'en',
        locales: ['en']
    }
};
