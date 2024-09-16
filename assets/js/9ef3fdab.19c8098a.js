"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[735],{7017:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var i=n(74848),a=n(28453);const o={},r="BlockVault Transition Flow",c={id:"pb/p8e/overview/p8e-transition-flow",title:"BlockVault Transition Flow",description:"The following diagram outlines the flow of data for typical transactions proposed to Provenance Blockchain.",source:"@site/docs/pb/p8e/overview/p8e-transition-flow.md",sourceDirName:"pb/p8e/overview",slug:"/pb/p8e/overview/p8e-transition-flow",permalink:"/docs/pb/p8e/overview/p8e-transition-flow",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},s={},l=[];function h(e){const t={a:"a",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"blockvault-transition-flow",children:"BlockVault Transition Flow"}),"\n",(0,i.jsx)(t.p,{children:"The following diagram outlines the flow of data for typical transactions proposed to Provenance Blockchain."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"tx-data-flow",src:n(17985).A+"",width:"662",height:"800"})}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Affiliates utilize the Contract Execution Environment to submit contracts to create single or multi-party agreements."}),"\n",(0,i.jsx)(t.li,{children:"The contracts and asset data are forwarded to all affiliates participating in the contract."}),"\n",(0,i.jsx)(t.li,{children:"Each affiliate\u2019s Encrypted Object Store is updated with the encrypted asset data resulting in each participating affiliate having a copy of the asset data."}),"\n",(0,i.jsx)(t.li,{children:"Using their copy of the asset data, each affiliate participating in the transaction executes the contracts."}),"\n",(0,i.jsx)(t.li,{children:"The hashed results of the contract executions are returned to the submitting affiliate\u2019s execution environment."}),"\n",(0,i.jsx)(t.li,{children:"All hashed execution results are sent to Provenance Blockchain."}),"\n",(0,i.jsx)(t.li,{children:"The hashed results are validated by the validators. If the majority agree, the transaction is proposed to the blockchain."}),"\n",(0,i.jsx)(t.li,{children:"Provenance Blockchain emits events notifying affiliates the contract has been committed on the blockchain."}),"\n",(0,i.jsx)(t.li,{children:"The index is updated with the new contract information. This information is used later for searching and querying the data."}),"\n",(0,i.jsx)(t.li,{children:"Affiliates acknowledge the completion event."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["For certain transactions, affiliates can also interact directly with Provenance Blockchain without utilizing or even needing a Contract Execution Environment. For example, ",(0,i.jsx)(t.a,{href:"/docs/sdk/marker",children:"markers"})," are managed by directly interacting with Provenance Blockchain instead of executing contracts."]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},17985:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/provenance-p8e-txn-data-flow-dfc34d49faabae900880ba861e79825c.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var i=n(96540);const a={},o=i.createContext(a);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);