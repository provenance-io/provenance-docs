"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[3306],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(f,l(l({ref:t},s),{},{components:a})):n.createElement(f,l({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2995:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={},l="Tutorials",i={unversionedId:"build/tutorials/tutorials",id:"build/tutorials/tutorials",title:"Tutorials",description:"Getting Started",source:"@site/docs/build/tutorials/tutorials.md",sourceDirName:"build/tutorials",slug:"/build/tutorials/",permalink:"/provenance-docs/docs/build/tutorials/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"buildSidebar",previous:{title:"Libraries and APIs",permalink:"/provenance-docs/docs/build/libraries"}},c={},p=[{value:"Getting Started",id:"getting-started",level:2},{value:"Building dApps",id:"building-dapps",level:2},{value:"Smart Contracts",id:"smart-contracts",level:2},{value:"The CEE and Off-Chain Data",id:"the-cee-and-off-chain-data",level:2},{value:"Governance",id:"governance",level:2}],s={toc:p};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tutorials"},"Tutorials"),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://medium.com/provenanceblockchain/hands-on-testnet-accounts-wallets-and-coin-transfer-452ee1f343cd"},"Hands on Testnet: Accounts, Wallets, and Coin Transfers"),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"Learn how to use ",(0,r.kt)("inlineCode",{parentName:"em"},"provenaned")," on the command line to talk to ",(0,r.kt)("inlineCode",{parentName:"em"},"testnet")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://medium.com/provenanceblockchain/building-your-first-dapp-5679c07d1983"},"Building Your First dApp"),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"How to build a simple, front-end-only webapp using ",(0,r.kt)("a",{parentName:"em",href:"docs/discover/wallets"},"WalletConnect"))))),(0,r.kt)("h2",{id:"building-dapps"},"Building dApps"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/provenanceblockchain/creating-dapps-via-walletconnect-js-658268c8d549"},"Creating React dApps via WalletConnect-JS"))),(0,r.kt)("h2",{id:"smart-contracts"},"Smart Contracts"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/provenance-io/provwasm/blob/22c90c89900f53859c55112909217174f2e910c4/docs/tutorial/01-overview.md"},"Provwasm Smart Contracts"),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"li"},"Learn how to write a smart contract for Provenance Blockchain"))),(0,r.kt)("h2",{id:"the-cee-and-off-chain-data"},"The CEE and Off-Chain Data"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://medium.com/provenanceblockchain/confidential-compute-and-validation-oracles-caff2f6a5b60"},"Confidential Compute and Validation Oracles"),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},"Overview of design and data flows for using ",(0,r.kt)("a",{parentName:"em",href:"/docs/pb/p8e/overview/"},"CEE")," and EOS"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://medium.com/provenanceblockchain/off-chain-p8e-contracts-sdk-ac313e40c9c7"},"Off-Chain P8e (CEE) Contracts & SDK"),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"p"},'How to run a "smart contract" over data that isn\'t on chain.')))),(0,r.kt)("h1",{id:"data-analysis"},"Data Analysis"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/provenanceblockchain/aggregating-provenance-blockchain-data-a-developers-story-a23972971287"},"Aggregating Provenance Blockchain Data: A Developer\u2019s Story"),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"li"},"Libraries for blockchain data aggregation"))),(0,r.kt)("h1",{id:"validators"},"Validators"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/provenanceblockchain/nitro-enclave-based-provenance-validator-882122714415"},"Nitro Enclave-Based Provenance Validator"),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"li"},"Example of running a validator node on AWS"))),(0,r.kt)("h2",{id:"governance"},"Governance"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://medium.com/provenanceblockchain/how-to-propose-to-your-true-love-blockchain-proposals-and-why-they-matter-c1ba61271991"},"How to Propose to Your True Love \u2014 Blockchain Proposals and Why They Matter"),(0,r.kt)("br",null),(0,r.kt)("em",{parentName:"li"},"How to submit a governance proposal through Provenance Explorer"))))}u.isMDXComponent=!0}}]);