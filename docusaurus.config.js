// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Provenance Blockchain',
    tagline:
        'A distributed, proof-of-stake blockchain designed for financial service industries.',
    url: 'https://docs.provenance.io',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/circle-logo.png',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'provenance-io', // Usually your GitHub org/user name.
    projectName: 'docs', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/provenance-io/docs/tree/main/',
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/provenance-io/blog/tree/main/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css'),
                },
            }),
        ],
    ],

    plugins: [
        async function myPlugin(context, options) {
            return {
                name: 'docusaurus-tailwindcss',
                configurePostCss(postcssOptions) {
                    // Appends TailwindCSS and AutoPrefixer.
                    postcssOptions.plugins.push(require('tailwindcss'));
                    postcssOptions.plugins.push(require('autoprefixer'));
                    return postcssOptions;
                },
            };
        },
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'Provenance Blockchain',
                logo: {
                    alt: 'Provenance Blockchain Logo',
                    src: 'img/circle-logo.png',
                },
                items: [

                    {
                        type: 'dropdown',
                        position: 'left',
                        label: 'Quick Start',
                        items: [
                            {
                                label: 'Start Here',
                                to: 'docs/quick-start/start-here',
                            },
                            {
                                label: 'Get a Wallet & Hash',
                                to: 'docs/quick-start/wallet-and-hash',
                            },
                            {
                                label: 'Run a Node',
                                to: 'docs/quick-start/run-a-node',
                            },
                            {
                                label: 'Become a Validator',
                                to: 'docs/quick-start/become-a-validator',
                            },
                            {
                                label: 'Build a dApp',
                                to: 'docs/quick-start/build-a-dapp',
                            },
                            {
                                label: 'Write a Smart Contract',
                                to: 'docs/quick-start/write-a-smart-contract',
                            },

                        ]
                    },
                    {
                        label: 'Learn',
                        to: 'docs/learn/learn-about',
                        position: 'left',
                    },
                    {
                        label: 'Build',
                        type: 'dropdown',
                        position: 'left',
                        items: [

                            {
                                label: 'Dev Environment',
                                to: 'docs/quick-start/start-here',
                            },
                            {
                                label: 'Clients',
                                to: 'docs/quick-start/start-here',
                            },

                            {
                                label: 'Libraries',
                                to: 'docs/quick-start/start-here',
                            },
                            {
                                label: 'Tutorials',
                                to: 'docs/quick-start/start-here',
                            },
                        ],
                    },
                    {
                        label: 'Discover',
                        type: 'dropdown',
                        position: 'left',
                        items: [
                            {
                                label: 'Provenance Explorer',
                                to: 'docs/quick-start/start-here',
                            },
                            {
                                label: 'Wallets',
                                to: 'docs/quick-start/start-here',
                            },

                            {
                                label: 'Solutions',
                                to: 'docs/quick-start/start-here',
                            },
                            {
                                label: 'Grants Program',
                                to: 'docs/quick-start/start-here',
                            },

                            {
                                label: 'Resources',
                                to: 'docs/quick-start/start-here',
                            },
                        ],
                    },
                    {
                        label: 'Connect',
                        type: 'dropdown',
                        position: 'left',
                        items: [
                            {
                                label: 'GitHub',
                                to: 'docs/quick-start/start-here',
                            },
                            {
                                label: 'Discord',
                                to: 'docs/quick-start/start-here',
                            },

                            {
                                label: 'LinkedIn',
                                to: 'docs/quick-start/start-here',
                            },

                            {
                                label: 'Twitter',
                                to: 'docs/quick-start/start-here',
                            },
                            {
                                label: 'Blog',
                                to: 'https://medium.com/provenanceblockchain',
                            },

                        ],
                    },
                    {
                        type: 'doc',
                        docId: 'provenance-blockchain',
                        position: 'left',
                        label: 'Docs',
                    },
                    {
                        href: 'https://github.com/provenance-io',
                        label: 'GitHub',
                        position: 'right',
                    },
                ],
            },
            footer: {
                style: 'dark',
                links: [
                    {
                        title: 'Contact',
                        items: [
                            {
                                label: 'inbound@provenance.io',
                                href: 'mailto:inbound@provenance.io',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Discord',
                                href: 'https://discord.gg/kNZC8nwCFP',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/provenancefdn',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                href: 'https://medium.com/provenanceblockchain',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/provenance-io',
                            },
                        ],
                    },
                ],
                copyright: `Copyright © ${new Date().getFullYear()} Provenance Blockchain Foundation`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
