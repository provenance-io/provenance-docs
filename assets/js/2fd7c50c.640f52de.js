"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[8792],{97262:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(85893),i=n(11151);const o={},r="Provenance Blockchain (BlockVault) Contract Execution Environment",c={id:"pb/p8e/index",title:"Provenance Blockchain \\(BlockVault\\) Contract Execution Environment",description:"BlockVault was designed to directly integrate with the Provenance Blockchain Metadata Module to simplify generating signed records of an asset\u2019s Provenance Blockchain as either a single party or in conjunction with multiple interacting parties. At its core, BlockVault is a GRPC API that is invoked using a Kotlin SDK. The API processes data through a deterministic client side process that can be shared with other parties to transform data into a hashable format.",source:"@site/docs/pb/p8e/index.md",sourceDirName:"pb/p8e",slug:"/pb/p8e/",permalink:"/docs/pb/p8e/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},s={},l=[{value:"Client Contracts",id:"client-contracts",level:2},{value:"<strong>Transaction Flow</strong>",id:"transaction-flow",level:2}];function h(t){const e={h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"provenance-blockchain-blockvault-contract-execution-environment",children:"Provenance Blockchain (BlockVault) Contract Execution Environment"}),"\n",(0,a.jsx)(e.p,{children:"BlockVault was designed to directly integrate with the Provenance Blockchain Metadata Module to simplify generating signed records of an asset\u2019s Provenance Blockchain as either a single party or in conjunction with multiple interacting parties. At its core, BlockVault is a GRPC API that is invoked using a Kotlin SDK. The API processes data through a deterministic client side process that can be shared with other parties to transform data into a hashable format."}),"\n",(0,a.jsx)(e.p,{children:"Assets can be directly defined against the Metadata module, but the execution environment assists in the complex hashing of data, maintenance of immutable objects, and signature orchestration between multiple parties."}),"\n",(0,a.jsx)(e.h2,{id:"client-contracts",children:"Client Contracts"}),"\n",(0,a.jsx)(e.p,{children:"Client side contracts differ from Smart Contracts in that they keep your data private between parties off chain and allow a structure to record agreed upon state data to the blockchain. Smart contracts in comparison are running on the blockchain and require the validators to have access to the data which isn\u2019t a great solution for most consumer based transactions due to data privacy laws."}),"\n",(0,a.jsx)(e.h2,{id:"transaction-flow",children:(0,a.jsx)(e.strong,{children:"Transaction Flow"})}),"\n",(0,a.jsx)(e.p,{children:"The following diagram outlines the flow of data for typical transactions proposed to Provenance Blockchain."}),"\n",(0,a.jsx)(e.p,{children:(0,a.jsx)(e.img,{alt:"tx-data-flow",src:n(65120).Z+"",width:"662",height:"800"})}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsx)(e.li,{children:"Affiliates utilize the Contract Execution Environment to submit contracts to create single or multi-party agreements."}),"\n",(0,a.jsx)(e.li,{children:"The contracts and asset data are forwarded to all affiliates participating in the contract."}),"\n",(0,a.jsx)(e.li,{children:"Each affiliate\u2019s Encrypted Object Store is updated with the encrypted asset data resulting in each participating affiliate having a copy of the asset data."}),"\n",(0,a.jsx)(e.li,{children:"Using their copy of the asset data, each affiliate participating in the transaction executes the contracts."}),"\n",(0,a.jsx)(e.li,{children:"The hashed results of the contract executions are returned to the submitting affiliate\u2019s execution environment."}),"\n",(0,a.jsx)(e.li,{children:"All hashed execution results are sent to Provenance Blockchain."}),"\n",(0,a.jsx)(e.li,{children:"The hashed results are validated by the validators. If the majority agree, the transaction is proposed to the blockchain."}),"\n",(0,a.jsx)(e.li,{children:"Provenance Blockchain emits events notifying affiliates the contract has been committed on the blockchain."}),"\n",(0,a.jsx)(e.li,{children:"The index is updated with the new contract information. This information is used later for searching and querying the data."}),"\n",(0,a.jsx)(e.li,{children:"Affiliates acknowledge the completion event."}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"For certain transactions, affiliates can also interact directly with Provenance Blockchain without utilizing or even needing a Contract Execution Environment. For example, markers are managed by directly interacting with Provenance Blockchain instead of executing contracts."})]})}function d(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(h,{...t})}):h(t)}},65120:(t,e,n)=>{n.d(e,{Z:()=>a});const a=n.p+"assets/images/provenance-p8e-txn-data-flow-dfc34d49faabae900880ba861e79825c.png"},11151:(t,e,n)=>{n.d(e,{Z:()=>c,a:()=>r});var a=n(67294);const i={},o=a.createContext(i);function r(t){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:r(t.components),a.createElement(o.Provider,{value:e},t.children)}}}]);