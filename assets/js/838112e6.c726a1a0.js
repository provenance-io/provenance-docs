"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[3923],{8541:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var s=t(5893),o=t(1151),r=t(8677);const i={},a="Ingestion",c={id:"discover/explorer/explorer-as-a-service/ingestion",title:"Ingestion",description:"The CosmosSDK does have event streaming for results of transaction processing, but they lose the correlation between event and transaction. Currently there is only one way to ingest all points of data from the blockchain without losing those correlating data points that make the data useful.&#x20;",source:"@site/docs/discover/explorer/explorer-as-a-service/ingestion.md",sourceDirName:"discover/explorer/explorer-as-a-service",slug:"/discover/explorer/explorer-as-a-service/ingestion",permalink:"/docs/discover/explorer/explorer-as-a-service/ingestion",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},l={},d=[{value:"How it starts",id:"how-it-starts",level:2}];function h(e){const n={a:"a",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"ingestion",children:"Ingestion"}),"\n","\n","\n",(0,s.jsx)(r.Y,{text:"How EaaS ingests data from the blockchain"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://github.com/cosmos/cosmos-sdk",children:"CosmosSDK"})," does have event streaming for results of transaction processing, but they lose the correlation between event and transaction. Currently there is only one way to ingest all points of data from the blockchain without losing those correlating data points that make the data useful. "]}),"\n",(0,s.jsxs)(n.p,{children:["The SDK supports the use of ",(0,s.jsx)(n.a,{href:"https://developers.google.com/protocol-buffers",children:"Google Protobuf"})," for managing transactions, queries, and the objects used for both. Protobuf message objects have the ability to define whats called ",(0,s.jsx)(n.strong,{children:"gRPC"})," - an API layer that allows for seamless integration with any client."]}),"\n",(0,s.jsx)(n.p,{children:"EaaS leverages the given gRPC APIs to quickly query the blockchain for any piece of data it might need. "}),"\n",(0,s.jsx)(n.h2,{id:"how-it-starts",children:"How it starts"}),"\n",(0,s.jsxs)(n.p,{children:["As everything on a blockchain begins with a ",(0,s.jsx)(n.strong,{children:"block"}),", so must the ingestion process."]}),"\n",(0,s.jsx)(n.p,{children:"Block"}),"\n",(0,s.jsx)(n.p,{children:"Proposer"}),"\n",(0,s.jsx)(n.p,{children:"Validator Set"}),"\n",(0,s.jsx)(n.p,{children:"Missed Blocks"}),"\n",(0,s.jsx)(n.p,{children:"Transactions"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Transaction"}),"\n",(0,s.jsx)(n.li,{children:"Gas fees"}),"\n",(0,s.jsx)(n.li,{children:"Messages, message types"}),"\n",(0,s.jsx)(n.li,{children:"Addresses"}),"\n",(0,s.jsx)(n.li,{children:"Markers/Denoms"}),"\n",(0,s.jsx)(n.li,{children:"NFTs"}),"\n",(0,s.jsx)(n.li,{children:"Governance"}),"\n",(0,s.jsx)(n.li,{children:"IBC"}),"\n",(0,s.jsx)(n.li,{children:"Smart Contracts"}),"\n",(0,s.jsx)(n.li,{children:"Transaction signatures"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Update assets/denoms"}),"\n",(0,s.jsx)(n.p,{children:"Update validator records"}),"\n",(0,s.jsx)(n.p,{children:"Update cached tx counts"}),"\n",(0,s.jsx)(n.p,{children:"Update block latency"})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8677:(e,n,t)=>{t.d(n,{Y:()=>o});t(7294);var s=t(5893);const o=e=>{let{text:n}=e;return(0,s.jsx)("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500",children:n})}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var s=t(7294);const o={},r=s.createContext(o);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);