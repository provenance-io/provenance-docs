// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

// To enable syntax highlighting
const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

// To enable LaTex
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Provenance Blockchain Developer Portal",
  tagline:
    "A distributed, proof-of-stake blockchain designed for financial service industries.",
  url: "https://vwagner.github.io",
  baseUrl: "/provenance-docs/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/prov-logo.svg",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "provenance-io", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          remarkPlugins: [math],
          rehypePlugins: [katex]
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),

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

  plugins: [
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },

  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        logo: {
          alt: "Provenance Blockchain Logo",
          src: "img/prov-logo-full-color.png",
        },
        items: [
          {
            type: "dropdown",
            position: "left",
            label: "Quick Start",
            items: [
              {
                label: "Start Here",
                to: "docs/quick-start/start-here",
              },
              {
                label: "Get a Wallet & Hash",
                to: "docs/quick-start/wallet-and-hash",
              },
              {
                label: "Run a Node",
                to: "docs/quick-start/run-a-node",
              },
              {
                label: "Become a Validator",
                to: "docs/quick-start/become-a-validator",
              },
              {
                label: "Tokenize an Asset",
                to: "docs/learn/asset-lifecycle/markers",
              },
              {
                label: "Build a dApp",
                to: "docs/quick-start/build-a-dapp",
              },
              {
                label: "Write a Smart Contract",
                to: "docs/quick-start/write-a-smart-contract",
              },
            ],
          },
          {
            label: "Learn",
            to: "docs/learn/learn-about",
            position: "left",
          },
          {
            label: "Build",
            type: "dropdown",
            position: "left",
            items: [
              {
                label: "Asset Lifecycle Guide",
                to: "docs/learn/asset-lifecycle/assets-overview",
              },
              {
                label: "Dev Environment",
                to: "docs/build/dev-environment",
              },
              {
                label: "Clients",
                to: "docs/build/clients",
              },

              {
                label: "Libraries and APIs",
                to: "docs/build/libraries",
              },
              {
                label: "Tutorials",
                to: "docs/build/tutorials",
              },
              {
                label: "Grants Program",
                to: "https://provenance.io/grants",
              },
            ],
          },
          {
            label: "Discover",
            type: "dropdown",
            position: "left",
            items: [
              {
                label: "Provenance Explorer",
                to: "docs/discover/explorer",
              },
              {
                label: "Wallets",
                to: "docs/discover/wallets",
              },
              {
                label: "Hash",
                to: "docs/discover/hash",
              },
              {
                label: "USDF",
                to: "docs/discover/usdf",
              },
              {
                label: "Smart Contract Catalog",
                to: "docs/discover/smart-contract-catalog",
              },
              {
                label: "dApps",
                to: "docs/discover/dapps",
              },
            ],
          },
          {
            label: "Connect",
            type: "dropdown",
            position: "left",
            items: [
              {
                label: "GitHub",
                to: "https://github.com/provenance-io/",
              },
              {
                label: "Discord",
                to: "https://discord.gg/kNZC8nwCFP",
              },

              {
                label: "LinkedIn",
                to: "https://www.linkedin.com/company/provenance-blockchain/",
              },

              {
                label: "Twitter",
                to: "https://twitter.com/provenancefdn",
              },
              {
                label: "Blog",
                to: "https://medium.com/provenanceblockchain",
              },
            ],
          },
          {
            type: "doc",
            docId: "introduction",
            position: "left",
            label: "Documentation",
          },
          {
            href: "https://github.com/provenance-io",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Contact",
            items: [
              {
                label: "inbound@provenance.io",
                href: "mailto:inbound@provenance.io",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/kNZC8nwCFP",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/provenancefdn",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                href: "https://medium.com/provenanceblockchain",
              },
              {
                label: "GitHub",
                href: "https://github.com/provenance-io",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Provenance Blockchain Foundation`,
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["kotlin", "protobuf"],
      },
    }),
};

module.exports = config;
