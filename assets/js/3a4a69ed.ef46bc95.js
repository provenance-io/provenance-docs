"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8121],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),h=l(a),d=o,k=h["".concat(i,".").concat(d)]||h[d]||p[d]||r;return a?n.createElement(k,s(s({ref:t},u),{},{components:a})):n.createElement(k,s({ref:t},u))}));function k(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[h]="string"==typeof e?e:o,s[1]=c;for(var l=2;l<r;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},8926:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=a(7462),o=(a(7294),a(3905));const r={},s="Quick Start: Get a Wallet & Hash",c={unversionedId:"quick-start/wallet-and-hash",id:"quick-start/wallet-and-hash",title:"Quick Start: Get a Wallet & Hash",description:"As a Provenance developer, you'll need to set up an account holding Hash, utility token of Provenance Blockchain,",source:"@site/docs/quick-start/wallet-and-hash.md",sourceDirName:"quick-start",slug:"/quick-start/wallet-and-hash",permalink:"/docs/quick-start/wallet-and-hash",draft:!1,tags:[],version:"current",frontMatter:{}},i={},l=[{value:"What is a Wallet?",id:"what-is-a-wallet",level:2},{value:"What is Hash?",id:"what-is-hash",level:2},{value:"How do I get set up?",id:"how-do-i-get-set-up",level:2},{value:"Step 1: Select which Wallet you&#39;ll use and set up a new account",id:"step-1-select-which-wallet-youll-use-and-set-up-a-new-account",level:3},{value:"Step 2: Obtain Hash for your account",id:"step-2-obtain-hash-for-your-account",level:3},{value:"Next?",id:"next",level:3}],u={toc:l},h="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-start-get-a-wallet--hash"},"Quick Start: Get a Wallet & Hash"),(0,o.kt)("p",null,"As a Provenance developer, you'll need to set up an account holding ",(0,o.kt)("a",{parentName:"p",href:"/docs/discover/hash"},"Hash"),", utility token of Provenance Blockchain,\nin order to transact on the Blockchain. You'll use Hash to pay for the fees associated with submitting a\ntransaction to the blockchain. (You don't need any Hash to query or view the blockchain.)"),(0,o.kt)("h2",{id:"what-is-a-wallet"},"What is a Wallet?"),(0,o.kt)("p",null,"Everyone who transacts on Provenance Blockchain has their own ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"https://docs.cosmos.network/main/basics/accounts.html"},"Account")),"\non the blockchain. Analogous to a bank account, your blockchain account holds your on-chain assets, like\n",(0,o.kt)("a",{parentName:"p",href:"docs/discover/hash"},"Hash")," or ",(0,o.kt)("a",{parentName:"p",href:"https://www.usdfconsortium.com/"},"USDF"),"."),(0,o.kt)("p",null,"You are the only entity that has access to your account. Your account is secured using a cryptographic key pair.\nYou don't necessarily need to know the details about cryptography to use Provenance Blockchain, but you need to keep the Private Key\nportion of your key pair safe, and a special app called a ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/docs/discover/wallets"},"Wallet"))," does that for you."),(0,o.kt)("admonition",{title:"A Wallet app helps you use a blockchain in three ways:",type:"info"},(0,o.kt)("ol",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ol"},"Helps you set up your account, and keeps your private key safe and secure."),(0,o.kt)("li",{parentName:"ol"},"Shows you what assets your hold in your account."),(0,o.kt)("li",{parentName:"ol"},"Allows you to perform actions with your account, like transferring funds or signing (approving) blockchain transactions."))),(0,o.kt)("br",null),(0,o.kt)("p",null,"As a ",(0,o.kt)("strong",{parentName:"p"},"dApp")," developer, in most cases your users will connect their own wallets to your dApp, and pay for transactions\nwith their own Hash. For some use cases, you may need a ",(0,o.kt)("strong",{parentName:"p"},"service account")," to hold Hash in order execute transactions\nor perhaps to be a fee granter for your users. In those cases, you'll need to consider your strategy for\n",(0,o.kt)("a",{parentName:"p",href:"/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/key-management/"},"server-side key management"),"\nand will likely make use of an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/FigureTechnologies/hdwallet"},"HD wallet library"),"."),(0,o.kt)("h2",{id:"what-is-hash"},"What is Hash?"),(0,o.kt)("p",null,"Hash is the ",(0,o.kt)("a",{parentName:"p",href:"/docs/discover/hash"},"utility token of Provenance Blockchain"),". As a utility token, Hash helps keep\nProvenance Blockchain secure through its Proof of Stake consensus mechanism. You can participate in securing the\nnetwork by purchasing Hash and staking it by delegating your Hash to one of the Validators."),(0,o.kt)("p",null,"Hash is also used to pay fees for transacting on the blockchain. All operations on Provenance Blockchain, from minting\nan NFT to sending a payment incur a small fee paid for in Hash. The fees are collected and distributed to the\nValidators as a reward for securing the network."),(0,o.kt)("p",null,"Holding Hash also gives you the right to participating in the Governance process for Provenance Blockchain.\nYou have one vote for every Hash token you have staked."),(0,o.kt)("h2",{id:"how-do-i-get-set-up"},"How do I get set up?"),(0,o.kt)("h3",{id:"step-1-select-which-wallet-youll-use-and-set-up-a-new-account"},"Step 1: ",(0,o.kt)("a",{parentName:"h3",href:"/docs/discover/wallets"},"Select which Wallet")," you'll use and set up a new account"),(0,o.kt)("h3",{id:"step-2-obtain-hash-for-your-account"},"Step 2: Obtain Hash for your account"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"For testnet:")," You can get Hash from the ",(0,o.kt)("a",{parentName:"li",href:"https://explorer.test.provenance.io/faucet"},"Faucet")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"For mainnet:")," Purchase Hash from  ",(0,o.kt)("a",{parentName:"li",href:"https://provenance.io/purchase-hash"},"dlob.io"))),(0,o.kt)("h3",{id:"next"},"Next?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://medium.com/provenanceblockchain/hands-on-testnet-accounts-wallets-and-coin-transfer-452ee1f343cd"},"Learn how to submit a transaction to testnet"))))}p.isMDXComponent=!0}}]);