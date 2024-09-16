"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[9450],{6975:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var a=t(74848),o=t(28453);const s={},r="Quick Start: Get a Wallet & Hash",c={id:"quick-start/wallet-and-hash",title:"Quick Start: Get a Wallet & Hash",description:"As a Provenance developer, you'll need to set up an account holding Hash, utility token of Provenance Blockchain,",source:"@site/docs/quick-start/wallet-and-hash.md",sourceDirName:"quick-start",slug:"/quick-start/wallet-and-hash",permalink:"/docs/quick-start/wallet-and-hash",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},i={},l=[{value:"What is a Wallet?",id:"what-is-a-wallet",level:2},{value:"What is Hash?",id:"what-is-hash",level:2},{value:"How do I get set up?",id:"how-do-i-get-set-up",level:2},{value:"Step 1: Select which Wallet you&#39;ll use and set up a new account",id:"step-1-select-which-wallet-youll-use-and-set-up-a-new-account",level:3},{value:"Step 2: Obtain Hash for your account",id:"step-2-obtain-hash-for-your-account",level:3},{value:"Next?",id:"next",level:3}];function h(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"quick-start-get-a-wallet--hash",children:"Quick Start: Get a Wallet & Hash"}),"\n",(0,a.jsxs)(n.p,{children:["As a Provenance developer, you'll need to set up an account holding ",(0,a.jsx)(n.a,{href:"/docs/discover/hash",children:"Hash"}),", utility token of Provenance Blockchain,\nin order to transact on the Blockchain. You'll use Hash to pay for the fees associated with submitting a\ntransaction to the blockchain. (You don't need any Hash to query or view the blockchain.)"]}),"\n",(0,a.jsx)(n.h2,{id:"what-is-a-wallet",children:"What is a Wallet?"}),"\n",(0,a.jsxs)(n.p,{children:["Everyone who transacts on Provenance Blockchain has their own ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"https://docs.cosmos.network/main/basics/accounts.html",children:"Account"})}),"\non the blockchain. Analogous to a bank account, your blockchain account holds your on-chain assets, like\n",(0,a.jsx)(n.a,{href:"/docs/discover/hash",children:"Hash"})," or ",(0,a.jsx)(n.a,{href:"https://www.usdfconsortium.com/",children:"USDF"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["You are the only entity that has access to your account. Your account is secured using a cryptographic key pair.\nYou don't necessarily need to know the details about cryptography to use Provenance Blockchain, but you need to keep the Private Key\nportion of your key pair safe, and a special app called a ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.a,{href:"/docs/discover/wallets",children:"Wallet"})})," does that for you."]}),"\n",(0,a.jsx)(n.admonition,{title:"A Wallet app helps you use a blockchain in three ways:",type:"info",children:(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Helps you set up your account, and keeps your private key safe and secure."}),"\n",(0,a.jsx)(n.li,{children:"Shows you what assets your hold in your account."}),"\n",(0,a.jsx)(n.li,{children:"Allows you to perform actions with your account, like transferring funds or signing (approving) blockchain transactions."}),"\n"]})}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(n.p,{children:["As a ",(0,a.jsx)(n.strong,{children:"dApp"})," developer, in most cases your users will connect their own wallets to your dApp, and pay for transactions\nwith their own Hash. For some use cases, you may need a ",(0,a.jsx)(n.strong,{children:"service account"})," to hold Hash in order execute transactions\nor perhaps to be a fee granter for your users. In those cases, you'll need to consider your strategy for\n",(0,a.jsx)(n.a,{href:"/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/key-management/",children:"server-side key management"}),"\nand will likely make use of an ",(0,a.jsx)(n.a,{href:"https://github.com/FigureTechnologies/hdwallet",children:"HD wallet library"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"what-is-hash",children:"What is Hash?"}),"\n",(0,a.jsxs)(n.p,{children:["Hash is the ",(0,a.jsx)(n.a,{href:"/docs/discover/hash",children:"utility token of Provenance Blockchain"}),". As a utility token, Hash helps keep\nProvenance Blockchain secure through its Proof of Stake consensus mechanism. You can participate in securing the\nnetwork by purchasing Hash and staking it by delegating your Hash to one of the Validators."]}),"\n",(0,a.jsx)(n.p,{children:"Hash is also used to pay fees for transacting on the blockchain. All operations on Provenance Blockchain, from minting\nan NFT to sending a payment incur a small fee paid for in Hash. The fees are collected and distributed to the\nValidators as a reward for securing the network."}),"\n",(0,a.jsx)(n.p,{children:"Holding Hash also gives you the right to participating in the Governance process for Provenance Blockchain.\nYou have one vote for every Hash token you have staked."}),"\n",(0,a.jsx)(n.h2,{id:"how-do-i-get-set-up",children:"How do I get set up?"}),"\n",(0,a.jsxs)(n.h3,{id:"step-1-select-which-wallet-youll-use-and-set-up-a-new-account",children:["Step 1: ",(0,a.jsx)(n.a,{href:"/docs/discover/wallets",children:"Select which Wallet"})," you'll use and set up a new account"]}),"\n",(0,a.jsx)(n.h3,{id:"step-2-obtain-hash-for-your-account",children:"Step 2: Obtain Hash for your account"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"For testnet:"})," You can get Hash from the ",(0,a.jsx)(n.a,{href:"https://explorer.test.provenance.io/faucet",children:"Faucet"})]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"For mainnet:"})," Purchase Hash from ",(0,a.jsx)(n.a,{href:"https://provenance.io/purchase-hash",children:"dlob.io"})]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"next",children:"Next?"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"https://medium.com/provenanceblockchain/hands-on-testnet-accounts-wallets-and-coin-transfer-452ee1f343cd",children:"Learn how to submit a transaction to testnet"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var a=t(96540);const o={},s=a.createContext(o);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);