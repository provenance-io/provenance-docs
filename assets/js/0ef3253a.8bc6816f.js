"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[6836],{52409:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=o(74848),r=o(28453);const i={},c="SDK",s={id:"pb/p8e/overview/api",title:"SDK",description:"Overview",source:"@site/docs/pb/p8e/overview/api.md",sourceDirName:"pb/p8e/overview",slug:"/pb/p8e/overview/api",permalink:"/docs/pb/p8e/overview/api",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"BlockVault Contract Execution Environment",permalink:"/docs/pb/p8e/overview/"},next:{title:"Encrypted Object Store",permalink:"/docs/pb/p8e/overview/encrypted-object-store/"}},a={},l=[{value:"Overview",id:"overview",level:3},{value:"Major Elements",id:"major-elements",level:3},{value:"Contract Execution",id:"contract-execution",level:4},{value:"Contract Bootstrapping",id:"contract-bootstrapping",level:4},{value:"Handling Execution Results",id:"handling-execution-results",level:4},{value:"Proto Indexer",id:"proto-indexer",level:4}];function p(e){const t={a:"a",h1:"h1",h3:"h3",h4:"h4",p:"p",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"sdk",children:"SDK"}),"\n",(0,n.jsx)(t.h3,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:'The BlockVault Contract Execution Software Development Kit (SDK) consists of a collection of JVM based libraries that help manage interactions with Provenance Blockchain, or more specifically, "scopes" as defined by the Metadata module.'}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"https://github.com/provenance-io/p8e-scope-sdk",children:"SDK"})," repository is the best source for more concrete descriptions and runnable examples. It also contains a docker-compose environment that allows for running a complete local stack."]}),"\n",(0,n.jsx)(t.h3,{id:"major-elements",children:"Major Elements"}),"\n",(0,n.jsx)(t.h4,{id:"contract-execution",children:"Contract Execution"}),"\n",(0,n.jsx)(t.p,{children:"At its core, the SDK is responsible for executing contracts amongst one or more participants. The remainder of the SDK documentation will expand on this component."}),"\n",(0,n.jsx)(t.h4,{id:"contract-bootstrapping",children:"Contract Bootstrapping"}),"\n",(0,n.jsx)(t.p,{children:"A gradle plugin is provided that manages the process of memorializing the declarative specifications needed for contract execution."}),"\n",(0,n.jsx)(t.h4,{id:"handling-execution-results",children:"Handling Execution Results"}),"\n",(0,n.jsx)(t.p,{children:"After successful contract execution, the result will be a collection of Provenance Blockchain protobuf messages. At this point all of the records have been encrypted and stored in EOS. At this stage messages can be memorialized to Provenance Blockchain with the Provenance Blockchain HTTP or gRPC interface. Optionally, the Provenance Blockchain event stream may be read to asynchronously detect changes made to scopes previously submitted."}),"\n",(0,n.jsx)(t.h4,{id:"proto-indexer",children:"Proto Indexer"}),"\n",(0,n.jsxs)(t.p,{children:["Post execution it might be required to persist the records in a system for easy search-ability at a later point in time. The protobuf indexer provides a way to accomplish this by converting the protobuf into an, optionally filtered, key-value JSON structure. A custom ",(0,n.jsx)(t.a,{href:"https://developers.google.com/protocol-buffers/docs/reference/cpp/google.protobuf.descriptor",children:"protobuf descriptor"})," is provided that supports a hierarchical whitelisting/blacklisting of nested protobuf messages."]})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,o)=>{o.d(t,{R:()=>c,x:()=>s});var n=o(96540);const r={},i=n.createContext(r);function c(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);