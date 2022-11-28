"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[3233],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>p});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=a.createContext({}),l=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=l(e.components);return a.createElement(m.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(t),p=r,f=d["".concat(m,".").concat(p)]||d[p]||u[p]||o;return t?a.createElement(f,c(c({ref:n},s),{},{components:t})):a.createElement(f,c({ref:n},s))}));function p(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=d;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1879:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=t(7462),r=(t(7294),t(3905));const o={},c="Query Command",i={unversionedId:"pb/blockchain/using-provenance/query-command",id:"pb/blockchain/using-provenance/query-command",title:"Query Command",description:"See Using Provenanced for basic information about the provenanced command.",source:"@site/docs/pb/blockchain/using-provenance/query-command.md",sourceDirName:"pb/blockchain/using-provenance",slug:"/pb/blockchain/using-provenance/query-command",permalink:"/provenance-docs/docs/pb/blockchain/using-provenance/query-command",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Using Provenanced",permalink:"/provenance-docs/docs/pb/blockchain/using-provenance/"},next:{title:"Tx Command",permalink:"/provenance-docs/docs/pb/blockchain/using-provenance/tx-command"}},m={},l=[{value:"Command",id:"command",level:2},{value:"Current Block Height",id:"current-block-height",level:3},{value:"Account Balances",id:"account-balances",level:3}],s={toc:l};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"query-command"},"Query Command"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"./"},"Using Provenanced")," for basic information about the ",(0,r.kt)("inlineCode",{parentName:"p"},"provenanced")," command.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This section uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"provenanced")," application to connect to the Provenance Blockchain testnet. Follow the installation instructions in the ",(0,r.kt)("a",{parentName:"p",href:"../running-a-node/"},"Installing Provenance Blockchain section")," before continuing with this section.")),(0,r.kt)("h2",{id:"command"},"Command"),(0,r.kt)("p",null,"Querying the Provenance Blockchain is one of the simplest use cases for ",(0,r.kt)("inlineCode",{parentName:"p"},"provenanced"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"~$ provenanced query --help\nQuerying subcommands\n\nUsage:\n  provenanced query [flags]\n  provenanced query [command]\n\nAliases:\n  query, q\n\nAvailable Commands:\n  account                  Query for account by address\n  attribute                Querying commands for the account metadata module\n  auth                     Querying commands for the auth module\n  bank                     Querying commands for the bank module\n  block                    Get verified data for a the block at given height\n  distribution             Querying commands for the distribution module\n  evidence                 Query for evidence by hash or for all (paginated) submitted evidence\n  gov                      Querying commands for the governance module\n  ibc                      Querying commands for the IBC module\n  ibc-transfer             IBC fungible token transfer query subcommands\n  marker                   Querying commands for the marker module\n  metadata                 Querying commands for the metadata module\n  mint                     Querying commands for the minting module\n  name                     Querying commands for the name module\n  params                   Querying commands for the params module\n  slashing                 Querying commands for the slashing module\n  staking                  Querying commands for the staking module\n  tendermint-validator-set Get the full tendermint validator set at given height\n  tx                       Query for a transaction by hash in a committed block\n  txs                      Query for paginated transactions that match a set of events\n  upgrade                  Querying commands for the upgrade module\n  wasm                     Querying commands for the wasm module\n")),(0,r.kt)("h3",{id:"current-block-height"},"Current Block Height"),(0,r.kt)("p",null,"Query the block height using a remote public node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'provenanced --testnet q block \\\n    --node=https://rpc.test.provenance.io:443 \\\n| jq ".block.last_commit.height"\n')),(0,r.kt)("h3",{id:"account-balances"},"Account Balances"),(0,r.kt)("p",null,"Query account balance using a remote public node:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"provenanced --testnet q bank balances tp19fn5mlntyxafugetc8lyzzre6nnyqsq95449gt \\\n --node=https://rpc.test.provenance.io:443\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--node=https://rpc.test.provenance.io:443")," flag is not necessary when running against a locally installed node.")))}u.isMDXComponent=!0}}]);