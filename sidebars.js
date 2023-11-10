// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  dappsSidebar: [
    {
      type: 'category',
      label: 'dApp Guide',
      className: 'section-heading',
      collapsible: false,
      items: [
        'learn/dapps/dapps-overview',
        {
          type: 'category',
          label: 'Asset Design & Lifecycle',
          className: 'section-heading',
          collapsible: false,
          items: [
            {
              type: 'ref',
              label: 'Asset Design',
              id: 'learn/asset-lifecycle/assets-overview',
            },
            // {
            //   type: 'ref',
            //   id: 'learn/asset-lifecycle/asset-lifecycle'
            // }
          ],
        },
        {
          type: 'category',
          label: 'User Experience',
          className: 'section-heading',
          collapsible: false,
          collapsed: true,
          items: [
            // 'discover/wallets',
            // 'learn/dapps/fiat-ramps',
            {
              type: 'category',
              label: 'Identity Verification',
              collapsible: true,
              link: {
                type: 'doc',
                id: 'learn/dapps/identity-verification',
              },
              items: [
                'learn/dapps/identity-verification/flow',
                'learn/dapps/identity-verification/attribute-names',
                'learn/dapps/identity-verification/attribute-values',
                'learn/dapps/identity-verification/identity-nfts',
              ],
            },
            // 'learn/dapps/organization-management',
          ],
        },
        /*
        {
          type: 'category',
          label: 'Architecture',
          className: 'section-heading',
          collapsible: false,
          items: [
            'learn/dapps/dapp-architecture',
            'learn/dapps/ui-ux',
            'learn/dapps/blockchain-communication',
            'learn/dapps/data-privacy',
          ],
        },
           */
      ],
    },
  ],
  assetLifecycleSidebar: [
    {
      type: 'category',
      label: 'Asset Guide',
      className: 'section-heading',
      collapsible: false,
      items: [
        'learn/asset-lifecycle/assets-overview',
        'learn/asset-lifecycle/nfts',
        'learn/asset-lifecycle/markers',
        // 'learn/asset-lifecycle/asset-lifecycle',
        // 'learn/asset-lifecycle/issue',
        // 'learn/asset-lifecycle/manage',
        // 'learn/asset-lifecycle/trade',
        'learn/asset-lifecycle/lending-example',
        'learn/asset-lifecycle/capital-raise-example',
      ],
    },
  ],
  buildSidebar: [{ type: 'autogenerated', dirName: 'build' }],
  documentationSidebar: [
    'index',
    {
      type: 'category',
      label: 'Ecosystem',
      className: 'section-heading',
      collapsible: true,
      collapsed: true,
      items: [
        'pb/ecosystem/financial-services-blockchain/index',
        'pb/ecosystem/financial-services-blockchain/token-economics',
        'pb/ecosystem/financial-services-blockchain/distribution',
        {
          type: 'category',
          label: 'Governance',
          link: {
            type: 'doc',
            id: 'pb/ecosystem/governance/index',
          },
          items: [
            'pb/ecosystem/governance/voting',
            'pb/ecosystem/governance/software-upgrade-proposal',
          ],
        },
        {
          type: 'category',
          label: 'Participants',
          items: [
            'pb/ecosystem/community/validator',
            'pb/ecosystem/community/delegator',
            'pb/ecosystem/community/asset-originators',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Blockchain',
      className: 'section-heading',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'Introduction',
          link: {
            type: 'doc',
            id: 'pb/blockchain/introduction/index',
          },
          items: [
            'pb/blockchain/introduction/application-architecture',
            'pb/blockchain/introduction/major-components',
          ],
        },
        {
          type: 'category',
          label: 'Basics',
          items: [
            'pb/blockchain/basics/anatomy-of-a-provenance-application',
            'pb/blockchain/basics/transaction-lifecycle',
            'pb/blockchain/basics/query-lifecycle',
            'pb/blockchain/basics/accounts',
            'pb/blockchain/basics/stablecoin',
            'pb/blockchain/basics/gas-and-fees',
          ],
        },
        'pb/blockchain/running-a-node/index',
        {
          type: 'category',
          label: 'Using Provenanced',
          link: {
            type: 'doc',
            id: 'pb/blockchain/using-provenance/index',
          },
          items: [
            'pb/blockchain/using-provenance/query-command',
            'pb/blockchain/using-provenance/tx-command',
          ],
        },
        {
          type: 'category',
          label: 'Running a Node',
          link: {
            type: 'doc',
            id: 'pb/blockchain/running-a-node/running-a-node-1/index',
          },
          items: [
            {
              type: 'category',
              label: 'Joining Testnet',
              link: {
                type: 'doc',
                id: 'pb/blockchain/running-a-node/running-a-node-1/join-provenance-testnet/index',
              },
              items: [
                'pb/blockchain/running-a-node/running-a-node-1/join-provenance-testnet/running-a-testnet-node-from-quicksync',
              ],
            },
            'pb/blockchain/running-a-node/running-a-node-1/become-a-validator',
            'pb/blockchain/running-a-node/running-a-node-1/configure-a-sentry',
            'pb/blockchain/running-a-node/running-a-node-1/running-a-mainnet-node',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Modules',
      className: 'section-heading',
      collapsible: true,
      collapsed: true,
      link: {
        type: 'doc',
        id: 'pb/modules/modules',
      },
      items: [
        'pb/modules/cosmos-modules',
        'pb/modules/metadata-module',
        'pb/modules/marker-module',
        // 'pb/modules/attribute-module',
        'pb/modules/name-module',
        'pb/modules/provwasm-smart-contracts',
      ],
    },
    {
      type: 'category',
      label: 'IBC and Zones',
      className: 'section-heading',
      collapsible: true,
      collapsed: true,
      items: ['pb/modules/ibc-and-zones'],
    },
    {
      type: 'category',
      label: 'BlockVault',
      className: 'section-heading',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'BlockVault Contract Execution Environment',
          link: {
            type: 'doc',
            id: 'pb/p8e/overview/index',
          },
          items: [
            'pb/p8e/overview/api',
            {
              type: 'category',
              label: 'Encrypted Object Store',
              link: {
                type: 'doc',
                id: 'pb/p8e/overview/encrypted-object-store/index',
              },
              items: [
                'pb/p8e/overview/encrypted-object-store/encryption-scheme',
                'pb/p8e/overview/encrypted-object-store/dime-encryption-envelope-specification',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: 'BlockVault Usage',
          items: [
            'pb/p8e/p8e-usage/architecture',
            'pb/p8e/p8e-usage/specifications',
            'pb/p8e/p8e-usage/building-new-contracts',
            'pb/p8e/p8e-usage/data-retrieval',
            'pb/p8e/p8e-usage/cross-scope-contract-example',
            'pb/p8e/p8e-usage/multi-contract-example',
            'pb/p8e/p8e-usage/multi-step-contract-example',
            'pb/p8e/p8e-usage/next-steps',
          ],
        },
        {
          type: 'category',
          label: 'Integrating with BlockVault',
          className: 'section-heading',
          collapsible: true,
          collapsed: true,
          items: [
            {
              type: 'category',
              label: 'Integrating with p8e',
              link: {
                type: 'doc',
                id: 'pb/integrating/integrating-with-p8e/index',
              },
              items: [
                {
                  type: 'category',
                  label: 'Lending Ecosystem',
                  link: {
                    type: 'doc',
                    id: 'pb/integrating/integrating-with-p8e/lending-ecosystem/index',
                  },
                  items: [
                    'pb/integrating/integrating-with-p8e/lending-ecosystem/life-cycle-of-a-loan',
                    'pb/integrating/integrating-with-p8e/lending-ecosystem/data-mapping',
                  ],
                },
                {
                  type: 'category',
                  label: 'BlockVault Contract Execution Environment',
                  link: {
                    type: 'doc',
                    id: 'pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/index',
                  },
                  items: [
                    {
                      type: 'category',
                      label: 'Deploying the Encrypted Object Store',
                      link: {
                        type: 'doc',
                        id: 'pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/deploying-the-encrypted-object-store/index',
                      },
                      items: [
                        'pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/deploying-the-encrypted-object-store/configuring-replication',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'P8e Contracts',
                      link: {
                        type: 'doc',
                        id: 'pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/p8e-contracts/index',
                      },
                      items: [
                        'pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/p8e-contracts/example-loan-contracts',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'Key Management',
                      link: {
                        type: 'doc',
                        id: 'pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/key-management/index',
                      },
                      items: [
                        'pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/key-management/permissioning-others',
                      ],
                    },
                    'pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/summary',
                  ],
                },
                {
                  type: 'category',
                  label: 'BlockVault CEE API',
                  link: {
                    type: 'doc',
                    id: 'pb/integrating/integrating-with-p8e/loan-onboarding-service/index',
                  },
                  items: [
                    {
                      type: 'category',
                      label: 'API Usage Guide',
                      link: {
                        type: 'doc',
                        id: 'pb/integrating/integrating-with-p8e/loan-onboarding-service/api-usage-guide/index',
                      },
                      items: [
                        'pb/integrating/integrating-with-p8e/loan-onboarding-service/api-usage-guide/loan-onboarding',
                        'pb/integrating/integrating-with-p8e/loan-onboarding-service/api-usage-guide/validation-request',
                        'pb/integrating/integrating-with-p8e/loan-onboarding-service/api-usage-guide/validation-response',
                        'pb/integrating/integrating-with-p8e/loan-onboarding-service/api-usage-guide/error-handling',
                      ],
                    },
                    {
                      type: 'category',
                      label: 'API Specification',
                      link: {
                        type: 'doc',
                        id: 'pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/index',
                      },
                      items: [
                        'pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/configuration-endpoints',
                        {
                          type: 'category',
                          label: 'Object Store Endpoints',
                          link: {
                            type: 'doc',
                            id: 'pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/index',
                          },
                          items: [
                            'pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/store-object',
                            'pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/retrieve-object',
                            'pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/store-file',
                            'pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/retrieve-file',
                          ],
                        },
                        'pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/p8e-endpoints',
                        {
                          type: 'category',
                          label: 'Contract Execution Endpoints',
                          link: {
                            type: 'doc',
                            id: 'pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/contract-execution-endpoints/index',
                          },
                          items: [
                            'pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/contract-execution-endpoints/execute-contract',
                            'pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/contract-execution-endpoints/approve-contract',
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'Contributing',
      className: 'section-heading',
      collapsible: true,
      collapsed: true,
      items: [
        {
          type: 'category',
          label: 'ADR',
          link: {
            type: 'doc',
            id: 'pb/contributing/adr/index',
          },
          items: [
            'pb/contributing/adr/template',
            {
              type: 'category',
              label: '100 Blockchain Configuration and Concepts',
              link: {
                type: 'doc',
                id: 'pb/contributing/adr/blockchain-configuration-and-concepts/index',
              },
              items: [
                'pb/contributing/adr/blockchain-configuration-and-concepts/genesis-network-configuration',
                'pb/contributing/adr/blockchain-configuration-and-concepts/hd-wallets-key-pairs-addresses',
                'pb/contributing/adr/blockchain-configuration-and-concepts/markers-tokens-and-coins',
                'pb/contributing/adr/blockchain-configuration-and-concepts/transaction-fees-and-gas',
              ],
            },
            {
              type: 'category',
              label: '200 Base Infrastructure',
              link: {
                type: 'doc',
                id: 'pb/contributing/adr/base-infrastructure/index',
              },
              items: [
                'pb/contributing/adr/base-infrastructure/name-service',
                'pb/contributing/adr/base-infrastructure/account-metadata',
              ],
            },
            {
              type: 'category',
              label: '300 Core Concepts',
              link: {
                type: 'doc',
                id: 'pb/contributing/adr/core-concepts/index',
              },
              items: [
                'pb/contributing/adr/core-concepts/identity',
                'pb/contributing/adr/core-concepts/hash',
              ],
            },
            {
              type: 'category',
              label: '400 Smart Contracts',
              link: {
                type: 'doc',
                id: 'pb/contributing/adr/smart-contracts/index',
              },
              items: [
                'pb/contributing/adr/smart-contracts/smart-contracts-1',
                'pb/contributing/adr/smart-contracts/p8e-metadata',
                'pb/contributing/adr/smart-contracts/p8e-specifications',
                'pb/contributing/adr/smart-contracts/p8e-smart-contracts',
                'pb/contributing/adr/smart-contracts/omnibus',
                'pb/contributing/adr/smart-contracts/upgrading',
              ],
            },
            'pb/contributing/adr/administration',
            'pb/contributing/adr/governance',
            'pb/contributing/adr/business-applications',
            'pb/contributing/adr/system-migration',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: 'FAQ',
      className: 'section-heading',
      collapsible: true,
      collapsed: true,
      items: [
        'pb/faq/validator-faq',
        'pb/faq/delegator-faq',
        'pb/faq/transactions-error-codes',
      ],
    },
    {
      type: 'category',
      label: 'License',
      className: 'section-heading',
      collapsible: false,
      items: [
        {
          type: 'link',
          label: 'Apache 2.0',
          href: 'https://www.apache.org/licenses/LICENSE-2.0',
        },
      ],
    },
  ],
};

module.exports = sidebars;
