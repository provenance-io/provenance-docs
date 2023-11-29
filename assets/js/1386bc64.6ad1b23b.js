"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[3233],{44552:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>d});var a=o(85893),t=o(11151);const c={},r="Query Command",i={id:"pb/blockchain/using-provenance/query-command",title:"Query Command",description:"See Using Provenanced for basic information about the provenanced command.",source:"@site/docs/pb/blockchain/using-provenance/query-command.md",sourceDirName:"pb/blockchain/using-provenance",slug:"/pb/blockchain/using-provenance/query-command",permalink:"/docs/pb/blockchain/using-provenance/query-command",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Using Provenanced",permalink:"/docs/pb/blockchain/using-provenance/"},next:{title:"Tx Command",permalink:"/docs/pb/blockchain/using-provenance/tx-command"}},s={},d=[{value:"Command",id:"command",level:2},{value:"Current Block Height",id:"current-block-height",level:3},{value:"Account Balances",id:"account-balances",level:3}];function l(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,t.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"query-command",children:"Query Command"}),"\n",(0,a.jsx)(e.admonition,{type:"info",children:(0,a.jsxs)(e.p,{children:["See ",(0,a.jsx)(e.a,{href:"./",children:"Using Provenanced"})," for basic information about the ",(0,a.jsx)(e.code,{children:"provenanced"})," command."]})}),"\n",(0,a.jsx)(e.admonition,{type:"info",children:(0,a.jsxs)(e.p,{children:["This section uses the ",(0,a.jsx)(e.code,{children:"provenanced"})," application to connect to the Provenance Blockchain testnet. Follow the installation instructions in the ",(0,a.jsx)(e.a,{href:"../running-a-node/",children:"Installing Provenance Blockchain section"})," before continuing with this section."]})}),"\n",(0,a.jsx)(e.h2,{id:"command",children:"Command"}),"\n",(0,a.jsxs)(e.p,{children:["Querying the Provenance Blockchain is one of the simplest use cases for ",(0,a.jsx)(e.code,{children:"provenanced"}),"."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"~$ provenanced query --help\nQuerying subcommands\n\nUsage:\n  provenanced query [flags]\n  provenanced query [command]\n\nAliases:\n  query, q\n\nAvailable Commands:\n  account                  Query for account by address\n  attribute                Querying commands for the account metadata module\n  auth                     Querying commands for the auth module\n  bank                     Querying commands for the bank module\n  block                    Get verified data for a the block at given height\n  distribution             Querying commands for the distribution module\n  evidence                 Query for evidence by hash or for all (paginated) submitted evidence\n  gov                      Querying commands for the governance module\n  ibc                      Querying commands for the IBC module\n  ibc-transfer             IBC fungible token transfer query subcommands\n  marker                   Querying commands for the marker module\n  metadata                 Querying commands for the metadata module\n  mint                     Querying commands for the minting module\n  name                     Querying commands for the name module\n  params                   Querying commands for the params module\n  slashing                 Querying commands for the slashing module\n  staking                  Querying commands for the staking module\n  tendermint-validator-set Get the full tendermint validator set at given height\n  tx                       Query for a transaction by hash in a committed block\n  txs                      Query for paginated transactions that match a set of events\n  upgrade                  Querying commands for the upgrade module\n  wasm                     Querying commands for the wasm module\n"})}),"\n",(0,a.jsx)(e.h3,{id:"current-block-height",children:"Current Block Height"}),"\n",(0,a.jsx)(e.p,{children:"Query the block height using a remote public node:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:'provenanced --testnet q block \\\n    --node=https://rpc.test.provenance.io:443 \\\n| jq ".block.last_commit.height"\n'})}),"\n",(0,a.jsx)(e.h3,{id:"account-balances",children:"Account Balances"}),"\n",(0,a.jsx)(e.p,{children:"Query account balance using a remote public node:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-text",children:"provenanced --testnet q bank balances tp19fn5mlntyxafugetc8lyzzre6nnyqsq95449gt \\\n --node=https://rpc.test.provenance.io:443\n"})}),"\n",(0,a.jsx)(e.admonition,{type:"info",children:(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"--node=https://rpc.test.provenance.io:443"})," flag is not necessary when running against a locally installed node."]})})]})}function m(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(l,{...n})}):l(n)}},11151:(n,e,o)=>{o.d(e,{Z:()=>i,a:()=>r});var a=o(67294);const t={},c=a.createContext(t);function r(n){const e=a.useContext(c);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:r(n.components),a.createElement(c.Provider,{value:e},n.children)}}}]);