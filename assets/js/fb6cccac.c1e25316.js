"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[9523],{8978:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var o=n(5893),i=n(1151);const r={description:"Practical implementations of BlockVault"},a="BlockVault Contract Execution Environment (formerly nicknamed \u201cP8e\u201d)",c={id:"pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/index",title:"BlockVault Contract Execution Environment (formerly nicknamed \u201cP8e\u201d)",description:"Practical implementations of BlockVault",source:"@site/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/index.md",sourceDirName:"pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e",slug:"/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/",permalink:"/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{description:"Practical implementations of BlockVault"},sidebar:"documentationSidebar",previous:{title:"Data Mapping",permalink:"/docs/pb/integrating/integrating-with-p8e/lending-ecosystem/data-mapping"},next:{title:"Deploying the Encrypted Object Store",permalink:"/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/deploying-the-encrypted-object-store/"}},s={},l=[{value:"Participation Models",id:"participation-models",level:2},{value:"To Host or Not to Host",id:"to-host-or-not-to-host",level:2}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"blockvault-contract-execution-environment-formerly-nicknamed-p8e",children:"BlockVault Contract Execution Environment (formerly nicknamed \u201cP8e\u201d)"}),"\n",(0,o.jsxs)(t.p,{children:["While the components and key concepts of BlockVault and BlockVault contracts are covered in the ",(0,o.jsx)(t.a,{href:"https://developer.provenance.io/docs/pb/p8e/overview",children:"BlockVault Overview"}),", this guide will focus on how to deploy your own BlockVault environment and put it to use."]}),"\n",(0,o.jsx)(t.p,{children:"By the end of this guide, you will feel comfortable spinning up and configuring your own development environment, writing and publishing your own BlockVault contracts, and executing them. Whether it's to build a new use case or integrate with an existing one, you will gain an understanding of where your data lives and who has access to it."}),"\n",(0,o.jsx)(t.h2,{id:"participation-models",children:"Participation Models"}),"\n",(0,o.jsxs)(t.p,{children:["There is more than one way to participate in the Provenance Blockchain ecosystem. Some participants will want to simply send data to a technology service provider (such as Figure Tech) and allow them to orchestrate the process of pushing data to the Encrypted Object Store and Provenance Blockchain ledger. In this model, the technology service provider likely also hosts and operates the BlockVault Contract Execution Environment and/or ",(0,o.jsx)(t.a,{href:"https://developer.provenance.io/docs/blockchain/introduction/major-components#provenance-blockchain-node",children:"Provenance Blockchain Nodes"})," used to store loan data and record transactions, respectively."]}),"\n",(0,o.jsx)(t.p,{children:"Other participants will want full control over their data and will choose to operate their own interfaces, middleware (including Object Stores), or Provenance Blockchain Nodes. Ultimately, each participant can decide which components they are comfortable operating. The more control over the running applications and data stores, the more flexibility the participant has to build out new use cases with business partners within the ecosystem, extending the loan data model as needed."}),"\n",(0,o.jsx)(t.p,{children:"To support these choices, Figure Tech has both deployed a white-label asset onboarding service, where orchestration including key management is completely handled on behalf of loan originators, and published an open-source API that implements the open-source Provenance Software Development Kit (SDK) and can be extended by any asset originator."}),"\n",(0,o.jsx)(t.h2,{id:"to-host-or-not-to-host",children:"To Host or Not to Host"}),"\n",(0,o.jsx)(t.p,{children:"Here lies the first major decision any asset originator needs to make: to deploy and host your own BlockVault Contract Execution Environment or not. That's sounds binary, but there are actually more than two choices:"}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Integrators can operate each component on their own."}),"\n",(0,o.jsx)(t.li,{children:"Integrators can operate their own API to orchestrate the execution of BlockVault contracts, while pointing to an object store hosted by a business partner or technology service provider."}),"\n",(0,o.jsx)(t.li,{children:"Integrators can simply send data to a partner that operates the components."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"This guide will walk you through everything you need to know to go with option #1. That said, Figure Tech is available as a partner to integrators that want to go with option #2 or #3."}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["If you are solely looking for information related to the white-label approach, feel free to skip down to the ",(0,o.jsx)(t.a,{href:"./#sandbox-environment",children:"Sandbox Environment"})," section."]})}),"\n",(0,o.jsx)(t.p,{children:"Remember to consider data isolation when making the decision of what to host or who to work with as a technology servicer provider. Ensure that you understand whether or not your data is stored in a shared object store or isolated in its own environment."})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>a});var o=n(7294);const i={},r=o.createContext(i);function a(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);