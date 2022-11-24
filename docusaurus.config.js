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
        navbar: {
            logo: {
                alt: 'Autodesk Platform Services',
                src: 'https://developer.static.autodesk.com/forgeunified/releases/current/1.0.0.20220404193108/images/autodesk-logo-primary-rgb-black.svg'
            },
            items: [
                {
                    href: 'https://forge.autodesk.com/platform-vision',
                    label: 'Platform Vision',
                    position: 'left'
                },
                {
                    href: 'https://forge.autodesk.com/developer/documentation',
                    label: 'Solutions',
                    position: 'left',
                    type: 'dropdown',
                    items: [
                        {
                            label: 'Online Viewer',
                            href: 'https://forge.autodesk.com/developer/idea/viewer-app',
                        },
                        {
                            label: 'Photo to 3D',
                            href: 'https://forge.autodesk.com/developer/idea/recap-app',
                        },
                        {
                            label: 'Autodesk Construction Cloud',
                            href: 'https://forge.autodesk.com/acc-cover-page',
                        },
                        {
                            label: 'BIM 360',
                            href: 'https://forge.autodesk.com/api/bim-360-cover-page/',
                        },
                        {
                            label: 'Data Exchange (New)',
                            href: 'https://forge.autodesk.com/data-exchange-cover-page',
                        },
                        {
                            label: 'Data Management',
                            href: 'https://forge.autodesk.com/api/data-management-cover-page/',
                        },
                        {
                            label: 'Data Visualization',
                            href: 'https://forge.autodesk.com/data-visualization-cover-page',
                        },
                        {
                            label: 'Design Automation',
                            href: 'https://forge.autodesk.com/api/design-automation-cover-page/',
                        },
                        {
                            label: 'Fusion Data (New)',
                            href: 'https://forge.autodesk.com/fusion-data-cover-page',
                        },
                        {
                            label: 'Model Derivative',
                            href: 'https://forge.autodesk.com/api/model-derivative-cover-page/',
                        },
                        {
                            label: 'Reality Capture',
                            href: 'https://forge.autodesk.com/api/reality-capture-cover-page/',
                        },
                        {
                            label: 'Token Flex',
                            href: 'https://forge.autodesk.com/api/token-flex-cover-page/',
                        },
                        {
                            label: 'Viewer',
                            href: 'https://forge.autodesk.com/api/viewer-cover-page/',
                        },
                        {
                            label: 'Webhooks',
                            href: 'https://forge.autodesk.com/api/webhooks-cover-page/',
                        }
                    ]
                },
                {
                    href: 'https://forge.autodesk.com/developer/getting-started',
                    label: 'Getting Started',
                    position: 'left'
                },
                {
                    href: 'https://forge.autodesk.com/developer/documentation',
                    label: 'Documentation',
                    position: 'left'
                },
                {
                    href: 'https://forge.autodesk.com/developer/documentation',
                    label: 'Commnunity',
                    position: 'left',
                    type: 'dropdown',
                    items: [
                        {
                            label: 'Success Stories',
                            href: 'https://forge.autodesk.com/customers',
                        },
                        {
                            label: 'Solution Showcase',
                            href: 'https://forge.autodesk.com/solution-showcase',
                        },
                        {
                            label: 'Blog',
                            href: 'https://forge.autodesk.com/blog',
                        },
                        {
                            label: 'System Integrators',
                            href: 'https://forge.autodesk.com/systemsintegrators',
                        },
                        {
                            label: 'Partnerships',
                            href: 'https://forge.autodesk.com/partnerships',
                        },
                        {
                            label: 'All Events',
                            href: 'https://forge.autodesk.com/events',
                        },
                        {
                            label: 'Forge Data Days',
                            href: 'https://forge.autodesk.com/forge-data-days',
                        },
                        {
                            label: 'Accelerator',
                            href: 'https://forge.autodesk.com/accelerator-program',
                        },
                        {
                            label: 'Lightning Talks',
                            href: 'https://forge.autodesk.com/lightning-talks',
                        }
                    ]
                },
                {
                    href: 'https://forge.autodesk.com/developer/documentation',
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
                            href: 'https://forge.autodesk.com/en/support/get-help',
                        },
                        {
                            label: 'FAQ',
                            href: 'https://forge.autodesk.com/FAQ',
                        }
                        // ... more items
                    ]

                },
                {
                    href: 'https://forge.autodesk.com/pricing',
                    label: 'Pricing',
                    position: 'left'
                }
                // {
                //     type: 'localeDropdown',
                //     position: 'right',
                // },
                // {
                //     href: 'https://github.com/autodesk-platform-services/aps-tutorials-website',
                //     label: 'GitHub',
                //     position: 'right'
                // }
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
                            href: 'https://learnforge.autodesk.io'
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
                    editUrl: 'https://github.com/autodesk-platform-services/aps-tutorials-website/edit/master/'
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
