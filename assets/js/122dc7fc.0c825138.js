"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[298],{79703:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var i=t(85893),r=t(11151);const o={},c="Architecture",a={id:"pb/p8e/p8e-usage/architecture",title:"Architecture",description:"Diagrams",source:"@site/docs/pb/p8e/p8e-usage/architecture.md",sourceDirName:"pb/p8e/p8e-usage",slug:"/pb/p8e/p8e-usage/architecture",permalink:"/docs/pb/p8e/p8e-usage/architecture",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"DIME (Encryption Envelope Specification)",permalink:"/docs/pb/p8e/overview/encrypted-object-store/dime-encryption-envelope-specification"},next:{title:"Specifications",permalink:"/docs/pb/p8e/p8e-usage/specifications"}},s={},l=[{value:"Diagrams",id:"diagrams",level:2},{value:"Port Mappings",id:"port-mappings",level:3},{value:"Logical Description",id:"logical-description",level:2},{value:"Encrypted Object Store (EOS)",id:"encrypted-object-store-eos",level:3},{value:"Provenance Blockchain Node",id:"provenance-blockchain-node",level:3},{value:"Postgres 13",id:"postgres-13",level:4}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"architecture",children:"Architecture"}),"\n",(0,i.jsx)(n.h2,{id:"diagrams",children:"Diagrams"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.img,{alt:"BlockVault Execution Environment",src:t(22808).Z+"",width:"800",height:"880"})," (formerly nicknamed \u201cP8e\u201d)"]}),"\n",(0,i.jsx)(n.h3,{id:"port-mappings",children:"Port Mappings"}),"\n",(0,i.jsx)(n.p,{children:"Encrypted Object Store does not currently contain any authentication mechanism. If you have a desire to publicly expose your instance, authentication and authorization should be provided externally, for instance with an API gateway."}),"\n",(0,i.jsx)(n.p,{children:"Default port mappings (NOTE: these are all configurable and can be changed):"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Encrypted Object Store","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"ingress - tcp:80"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Provenance Blockchain Node","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"internet egress - tcp:26656"}),"\n",(0,i.jsx)(n.li,{children:"ingress - tcp:26656-26657, tcp:9090, tcp:1317"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"logical-description",children:"Logical Description"}),"\n",(0,i.jsx)(n.h3,{id:"encrypted-object-store-eos",children:"Encrypted Object Store (EOS)"}),"\n",(0,i.jsx)(n.p,{children:"Object store can run in a few different configurations based on the needs of your BlockVault environment."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"No external multi-parties - If your BlockVault environment will strictly be handling single party contracts, or multi-party contracts where all parties are within your BlockVault execution environment, a single, privately addressable object store node may be used. The replication feature can be disabled."}),"\n",(0,i.jsxs)(n.li,{children:["External multi-parties - If your BlockVault execution environment needs to execute multi-party contracts with some parties that exist outside of your EOS, the following are required:","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"An EOS for your own BlockVault execution environment"}),"\n",(0,i.jsx)(n.li,{children:"Replication feature enabled"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"provenance-blockchain-node",children:"Provenance Blockchain Node"}),"\n",(0,i.jsxs)(n.p,{children:["A Provenance Blockchain node provides your BlockVault execution environment with a means to read events and send transactions to the distributed Provenance Blockchain network. See ",(0,i.jsx)(n.a,{href:"../../blockchain/running-a-node/running-a-node-1/",children:"here"})," for setup."]}),"\n",(0,i.jsx)(n.h4,{id:"postgres-13",children:"Postgres 13"}),"\n",(0,i.jsx)(n.p,{children:"EOS requires postgres for persisting data. The cpu and memory requirements will largely depend on the amount of data EOS environment will support."})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},22808:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/p8e-execution-environment-d2d0ededd26cc6e5db2e55c3714fad76.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>c});var i=t(67294);const r={},o=i.createContext(r);function c(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);