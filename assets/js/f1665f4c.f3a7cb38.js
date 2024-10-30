"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[8562],{55528:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var t=i(74848),a=i(28453),r=i(41306);const c={},o="Application Architecture",s={id:"pb/blockchain/introduction/application-architecture",title:"Application Architecture",description:"When developing applications on Provenance Blockchain it is important to understand the underlying application architecture.",source:"@site/docs/pb/blockchain/introduction/application-architecture.md",sourceDirName:"pb/blockchain/introduction",slug:"/pb/blockchain/introduction/application-architecture",permalink:"/docs/pb/blockchain/introduction/application-architecture",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Introduction",permalink:"/docs/pb/blockchain/introduction/"},next:{title:"Major Components",permalink:"/docs/pb/blockchain/introduction/major-components"}},l={},d=[{value:"High Level Architectural Components",id:"high-level-architectural-components",level:2},{value:"Interface Layer",id:"interface-layer",level:3},{value:"Middleware",id:"middleware",level:3},{value:"Provenance Blockchain",id:"provenance-blockchain",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"application-architecture",children:"Application Architecture"})}),"\n","\n",(0,t.jsx)(r.Y,{text:"Provenance Blockchain is an ecosystem for application-specific financial services blockchain implementations."}),"\n",(0,t.jsx)(n.p,{children:"When developing applications on Provenance Blockchain it is important to understand the underlying application architecture."}),"\n",(0,t.jsx)(n.h2,{id:"high-level-architectural-components",children:"High Level Architectural Components"}),"\n",(0,t.jsx)(n.p,{children:"As is typical with most application architectures there are 3 well-defined layers: a user-facing interface, middleware to implement the application business components, and a foundational blockchain network infrastructure that supports the sophisticated requirements of the higher layers."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"architecture pyramid",src:i(65963).A+"",width:"1238",height:"1010"})}),"\n",(0,t.jsx)(n.h3,{id:"interface-layer",children:"Interface Layer"}),"\n",(0,t.jsx)(n.p,{children:'This layer provides the traditional user interface for interacting with Provenance Blockchain-based applications. Marketplaces and Exchanges are typical use cases where users buy, sell, and trade things of value. These "things of value" include asset-backed securities, cryptocurrency, or tokenized assets.'}),"\n",(0,t.jsxs)(n.p,{children:["An important component of the interface layer is the ",(0,t.jsx)(n.a,{href:"/docs/pb/contributing/adr/blockchain-configuration-and-concepts/hd-wallets-key-pairs-addresses",children:"Wallet"}),". Entities (organizations, systems, or users) must have an ",(0,t.jsx)(n.em,{children:"account"})," to conduct business on the Provenance Blockchain. An account is represented by the public key portion of a public and private key-pair. Accounts contain a uniquely identified address, which simply a string value derived from the entity\u2019s public key following the ",(0,t.jsx)(n.a,{href:"https://en.bitcoin.it/wiki/Bech32",children:"Bech32"})," format, thus providing standard blockchain pseudonymity."]}),"\n",(0,t.jsxs)(n.p,{children:["Consider a Hash transfer transaction where Alice is a Hash holder and Bob is the recipient. Alice holds 100 Hash at address ",(0,t.jsx)(n.code,{children:"tp1kaczxflvhq4700r0ntdnqlxpu80xdp869seh9e"})," (again, address is derived from the public key portion of a key pair that Alice holds). Bob also has generated a key pair and an address from the public key portion of the key pair ",(0,t.jsx)(n.code,{children:"tp18839rhfk0ql7mdqgn27eeaesmfr9ckpajssuc4"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Before Alice can send a transfer transaction request to the Provenance Blockchain she must sign the transfer transaction. Alice uses the private key portion of her key pair to sign the transaction and submits the transaction to the blockchain. Provenance Blockchain validates the transfer transaction signature against Alice's public key, verifies that she has an account on Provenance Blockchain, and that the address holds enough Hash to pay transaction fees and to transfer to Bob."}),"\n",(0,t.jsxs)(n.p,{children:["A Wallet is where Alice and Bob store their key pairs. The Wallet is used to manage key pairs, addresses, and the token-values the addresses hold. Typically, and when using the Provenance Blockchain Wallet, ",(0,t.jsx)(n.a,{href:"https://en.bitcoin.it/wiki/BIP_0032",children:"HD Wallets"})," are used. HD Wallets allow entities to create a root mnemonic seed and then derive child keys from the root that can be used to hold value on Provenance Blockchain. For example, Alice's address ",(0,t.jsx)(n.code,{children:"tp1kaczxflvhq4700r0ntdnqlxpu80xdp869seh9e"})," is one of many keys in her HD Wallet. Entities can import, export, or regenerate their Wallet (and any subsequent derived addresses) using the root mnemonic seed. The root mnemonic seed is a secret value that the entity controls and never exposes to the Provenance Blockchain ecosystem."]}),"\n",(0,t.jsx)(n.h3,{id:"middleware",children:"Middleware"}),"\n",(0,t.jsx)(n.p,{children:"The middleware layer is where organizational business processes are defined. These business processes include the establishment and orchestration of business value. For example, originating a loan is an action that creates a value marker. Utilizing a stable coin marker for a payment application also creates and uses value markers."}),"\n",(0,t.jsx)(n.p,{children:"The middleware layer is the bridge between the Provenance Blockchain and the financial services business logic. The middleware layer connects directly to a Provenance Blockchain node to invoke transactions, query transactions, and listen for events."}),"\n",(0,t.jsxs)(n.p,{children:["The middleware layer is also where entities leverage the Provenance Blockchain client-side ",(0,t.jsx)(n.a,{href:"../../p8e/overview/",children:"Contract Execution Environment"})," for the onboarding and management of private and sensitive information. The Contract Execution Environment is a client-side solution that provides the ability for entities to exchange private data yet still leverage the ownership, immutability and value benefits provides by the Provenance Blockchain."]}),"\n",(0,t.jsx)(n.h3,{id:"provenance-blockchain",children:"Provenance Blockchain"}),"\n",(0,t.jsx)(n.p,{children:"The Provenance Blockchain layer is the Provenance Blockchain network and provides:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"A persistent, distributed, immutable, and replicated deterministic state machine"}),"\n",(0,t.jsx)(n.li,{children:"The networking and consensus layers of the Provenance Blockchain including transaction ordering and consensus"}),"\n",(0,t.jsx)(n.li,{children:"Value and ownership markers leveraged middleware business applications including coins, cryptocurrency, and tokenization"}),"\n",(0,t.jsx)(n.li,{children:"Exchange, trading, and settlement of value markers and bridges to fiat currency"}),"\n",(0,t.jsx)(n.li,{children:"Bi-lateral exchange implementations using Smart Contracts"}),"\n",(0,t.jsx)(n.li,{children:"Blockchain primitives such as account authorization, governance, staking, voting, gas and fee processing, telemetry, and node configuration."}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},41306:(e,n,i)=>{i.d(n,{Y:()=>a});i(96540);var t=i(74848);const a=e=>{let{text:n}=e;return(0,t.jsx)("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500",children:n})}},65963:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/application-architecture-6c4aae69d7f2a84ed67adb2ed23eeb0d.png"},28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>o});var t=i(96540);const a={},r=t.createContext(a);function c(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);