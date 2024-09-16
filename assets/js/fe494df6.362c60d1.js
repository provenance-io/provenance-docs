"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[4585],{23242:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>d});var s=t(74848),r=t(28453),o=t(41306);const a={},i="ProvWasm Smart Contracts",c={id:"sdk/z-smart-contracts/README",title:"ProvWasm Smart Contracts",description:"Overview",source:"@site/docs/sdk/z-smart-contracts/README.md",sourceDirName:"sdk/z-smart-contracts",slug:"/sdk/z-smart-contracts/",permalink:"/docs/sdk/z-smart-contracts/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"genesis",permalink:"/docs/sdk/trigger/genesis"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Blockchain Extensions",id:"blockchain-extensions",level:3},{value:"Rust Bindings",id:"rust-bindings",level:2},{value:"Parameters",id:"parameters",level:3},{value:"API",id:"api",level:3},{value:"Mocks",id:"mocks",level:3},{value:"Integrations",id:"integrations",level:3},{value:"References",id:"references",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"provwasm-smart-contracts",children:"ProvWasm Smart Contracts"}),"\n","\n",(0,s.jsx)(o.Y,{text:"Web assembly (Wasm) smart contracts for the Provenance Blockchain."}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"ProvWasm contains extensions for a third party blockchain module. These extensions, combined with a library, provide developers the ability to create web assembly smart contracts for the Provenance Blockchain using the Rust programming language."}),"\n",(0,s.jsx)(n.h3,{id:"blockchain-extensions",children:"Blockchain Extensions"}),"\n",(0,s.jsxs)(n.p,{children:["The CosmWasm VM only integrates with the ",(0,s.jsx)(n.code,{children:"banking"})," and ",(0,s.jsx)(n.code,{children:"staking"})," modules by default. However, it allows for adding custom encoders and queriers. A package was added in the Provenance Blockchain that contain extensions for the following Provenance Blockchain modules:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"attribute-module.md",children:"Attribute"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"marker-module.md",children:"Marker"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"name-module.md",children:"Name"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"metadata-module.md",children:"Metadata"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"These extensions are compiled into the blockchain at build time."}),"\n",(0,s.jsx)(n.h2,{id:"rust-bindings",children:"Rust Bindings"}),"\n",(0,s.jsxs)(n.p,{children:["In order to provide a high quality smart contract developer experience, a Rust ",(0,s.jsx)(n.a,{href:"https://github.com/provenance-io/provwasm",children:"library"})," was created to simplify calls to the Provenance Blockchain extensions."]}),"\n",(0,s.jsx)(n.p,{children:"The library can be broken down into the following components."}),"\n",(0,s.jsx)(n.h3,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsx)(n.p,{children:"The core of the rust library contains types that are passed to and received from Provenance Blockchain encoders and queriers. Special care must be taken to ensure the Rust types are compatible with Go types in the queriers and encoders. To support this, a semantic data format version is passed through with each message. This enables backward compatability in the blockchain extensions."}),"\n",(0,s.jsx)(n.h3,{id:"api",children:"API"}),"\n",(0,s.jsx)(n.p,{children:"A number of high-level functions and types were added to on top of the core parameters to simplify contract development. This will also provide a compatability layer - minimizing changes required to smart contracts when breaking changes are required in the blockchain extensions and core types."}),"\n",(0,s.jsx)(n.h3,{id:"mocks",children:"Mocks"}),"\n",(0,s.jsx)(n.p,{children:"One of the benefits of ProvWasm is that it allows for robust unit testing of smart contracts before deployment to the Provenance Blockchain. Using the types described above, a mock environment can be created so unit tests can run as if they are executing against a running blockchain. This allows developers to ensure their contracts are correct before having to pay fees to deploy to a network."}),"\n",(0,s.jsx)(n.h3,{id:"integrations",children:"Integrations"}),"\n",(0,s.jsx)(n.p,{children:"To ensure the library code works correctly with the blockchain extensions, smart contracts were developed for each custom module in provenance. These contracts can be deployed to a localnet (or the testnet) for integration testing."}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,s.jsx)(n.p,{children:"Smart contract technical reference documentation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.cosmwasm.com/",children:"CosmWasm"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/CosmWasm/wasmd/blob/master/INTEGRATION.md",children:"CosmWasm CosmosSDK Integration"}),"."]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/CosmWasm/cosmwasm/blob/master/README.md",children:"WebAssembly Smart Contracts for the Cosmos SDK"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/CosmWasm/go-cosmwasm/blob/master/spec/Index.md",children:"Go-CosmWasm Spec"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/CosmWasm/wasmd/tree/master/x/wasm",children:"CosmWasm Module Source"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://github.com/CosmWasm/cosmwasm/blob/master/EntryPoints.md",children:"Defining WASM Entry Points"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},41306:(e,n,t)=>{t.d(n,{Y:()=>r});t(96540);var s=t(74848);const r=e=>{let{text:n}=e;return(0,s.jsx)("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500",children:n})}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var s=t(96540);const r={},o=s.createContext(r);function a(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);