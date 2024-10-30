// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// To enable syntax highlighting
import { themes as prismThemes } from 'prism-react-renderer'

// To enable LaTex
const math = require('remark-math')
const katex = require('rehype-katex')

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Provenance Blockchain Developer Portal',
  tagline:
    'A distributed, proof-of-stake blockchain designed for financial service industries.',
  url: 'https://developer.provenance.io',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/prov-logo.svg',

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
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-J8X4N657D9',
          anonymizeIP: true,
        },
      }),
    ],
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: 'openapi/swagger.yaml',
            route: '/api/',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#18367C',
        },
      },
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: '5NLCC7K64G',
        apiKey: 'b9b681f8cda531803db53d5636b77ca3',
        indexName: 'developer-provenance',
      },
      navbar: {
        logo: {
          alt: 'Provenance Blockchain Logo',
          src: 'img/prov-logo-full-color.png',
        },
        items: [
          {
            label: 'Build',
            type: 'dropdown',
            position: 'left',
            items: [
              {
                label: 'Dev Environment',
                to: 'docs/build/dev-environment',
              },
              {
                label: 'Clients',
                to: 'docs/build/clients',
              },
              {
                label: 'Libraries and APIs',
                to: 'docs/build/libraries',
              },
              {
                label: 'Smart Contract Catalog',
                to: 'docs/discover/smart-contract-catalog',
              },
              {
                label: 'CONNECT dApps',
                to: 'https://provenance.io/connect',
              },
              {
                label: 'Wallets',
                to: 'https://www.provenance.io/connect/?tag=wallets',
              },
              {
                label: 'HASH',
                to: 'https://www.provenance.io/ecosystem/HASH/',
              },
            ],
          },
          {
            label: 'Tutorials',
            type: 'dropdown',
            position: 'left',
            items: [
              {
                label: 'Asset Lifecycle Guide',
                to: 'docs/learn/asset-lifecycle/assets-overview',
              },
              {
                label: 'dApps Builder Guide',
                to: 'docs/learn/dapps/dapps-overview',
              },

              {
                label: 'More Tutorials and Guides',
                to: 'docs/learn/learn-about',
              },
            ],
          },
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Documentation',
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
        theme: prismThemes.dracula,
        additionalLanguages: ['bash', 'json', 'kotlin', 'protobuf'],
      },
    }),

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: 'docusaurus-tailwindcss',
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require('tailwindcss'))
          postcssOptions.plugins.push(require('autoprefixer'))
          return postcssOptions
        },
      }
    },
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            from: '/docs/quick-start/run-a-node',
            to: '/docs/pb/blockchain/running-a-node/running-a-node-1/',
          },
          {
            from: '/docs/pb/ecosystem/financial-services-blockchain/token-economics',
            to: 'https://provenance.io/ecosystem/HASH/tokenomics/',
          },
          {
            from: '/docs/discover/dapps',
            to: 'https://provenance.io/connect',
          },
        ],
      },
    ],
  ],
}

module.exports = config
