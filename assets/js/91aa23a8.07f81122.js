"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[2653],{86518:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var o=n(74848),a=n(28453);const c={},r="BlockVault Contract Execution Environment",i={id:"pb/p8e/overview/index",title:"BlockVault Contract Execution Environment",description:"Overview",source:"@site/docs/pb/p8e/overview/index.md",sourceDirName:"pb/p8e/overview",slug:"/pb/p8e/overview/",permalink:"/docs/pb/p8e/overview/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Provenance IBC",permalink:"/docs/pb/modules/ibc-and-zones"},next:{title:"SDK",permalink:"/docs/pb/p8e/overview/api"}},s={},l=[{value:"Overview",id:"overview",level:3},{value:"Records",id:"records",level:3},{value:"Scopes",id:"scopes",level:3},{value:"Scopes are NFTs",id:"scopes-are-nfts",level:3},{value:"BlockVault Client-Side Contracts",id:"blockvault-client-side-contracts",level:3}];function d(e){const t={a:"a",h1:"h1",h3:"h3",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"blockvault-contract-execution-environment",children:"BlockVault Contract Execution Environment"})}),"\n",(0,o.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,o.jsx)(t.p,{children:"The BlockVault Contact Execution Environment (formerly nicknamed \u201cP8e\u201d) is an optional layer on top of the Provenance Blockchain to allow single-party and multi-party client-side contract execution while preserving data privacy. Provenance Blockchain client-side contracts take data from the user (client) and transform the information into encrypted data in the user\u2019s own private object store with object hashes recorded on the blockchain."}),"\n",(0,o.jsx)(t.p,{children:"Components of the BlockVault environment include a client-side contract execution engine, an encrypted object store (EOS) which can be run in your infrastructure or be purchased as a managed solution. The EOS doubles as a communication exchange for orchestrating multi-party contract execution with other parties\u2019 own BlockVault environments."}),"\n",(0,o.jsx)(t.p,{children:"To make use of the existing BlockVault contract execution libraries, Contracts must be written in a JVM based language and make use of the annotation structure that currently exists. Likewise for contract execution. That being said, the collection of libraries published, or software development kit (SDK), could be mimicked in any language that supports gRPC clients."}),"\n",(0,o.jsx)(t.h3,{id:"records",children:"Records"}),"\n",(0,o.jsx)(t.p,{children:"In the construct of the BlockVault contract environment, a \u201crecord\u201d is any data object stored in the EOS whose hash sum has been recorded in a transaction on the Provenance Blockchain. All inputs and outputs to contract functions have their hash calculated and stored on-chain and become records. However, the input hash facts are merely part of the contract execution record in the scope, and are not part of the head-state of \u201crecords in the scope\u201d."}),"\n",(0,o.jsx)(t.p,{children:"As the records evolve through subsequent contract execution, each execution record is added to the list of record groups in the scope. In this way, the history of the evolution of data in the scope is preserved and queryable."}),"\n",(0,o.jsx)(t.h3,{id:"scopes",children:"Scopes"}),"\n",(0,o.jsxs)(t.p,{children:["The BlockVault contract environment leverages the ",(0,o.jsx)(t.a,{href:"/docs/sdk/metadata",children:"Provenance Blockchain Metadata module"}),'. Scopes are used as containers to represent the outputs produced from contract executions. Each contract execution on a scope generates a "session", which encapsulates one or more "records". Once memorialized, the session and records are immutably recorded to Provenance Blockchain.']}),"\n",(0,o.jsx)(t.h3,{id:"scopes-are-nfts",children:"Scopes are NFTs"}),"\n",(0,o.jsx)(t.p,{children:"A scope consists of a unique set of records and the history of record evolution in the scope through contract executions. Each scope is globally unique. Value ownership of a scope is recorded on the Provenance Blockchain through a Marker established on-chain. The Marker may be tokenized, allowing for fractional ownership of the scope. In this way, Provenance Blockchain scopes are non-fungible tokens (NFTs) and may be traded on any Provenance Blockchain-based trading platform."}),"\n",(0,o.jsx)(t.h3,{id:"blockvault-client-side-contracts",children:"BlockVault Client-Side Contracts"}),"\n",(0,o.jsxs)(t.p,{children:["BlockVault contracts are distinct from blockchain-based smart contracts. BlockVault contracts execute only in the contract execution environment of the parties participating in the contract, and operate only on data stored in the EOS. A record of the contract execution is memorialized to the blockchain using the ",(0,o.jsx)(t.a,{href:"/docs/sdk/metadata",children:"Provenance Blockchain Metadata Module"})," which, in turn, records the metadata to chain through the use of blockchain-based smart contracts."]}),"\n",(0,o.jsx)(t.p,{children:"Client side contracts differ from smart contracts in that they keep your data private between parties off chain and allow a structure to record agreed upon state data to the blockchain. Smart contracts in comparison are running on the blockchain and require the validators to have access to the data which can be problematic for most consumer-based transactions due to data privacy laws."})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var o=n(96540);const a={},c=o.createContext(a);function r(e){const t=o.useContext(c);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(c.Provider,{value:t},e.children)}}}]);