"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[3612],{22586:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=s(74848),t=s(28453);const o={description:"Querying blockchain state."},c="Query Lifecycle",i={id:"pb/blockchain/basics/query-lifecycle",title:"Query Lifecycle",description:"Querying blockchain state.",source:"@site/docs/pb/blockchain/basics/query-lifecycle.md",sourceDirName:"pb/blockchain/basics",slug:"/pb/blockchain/basics/query-lifecycle",permalink:"/docs/pb/blockchain/basics/query-lifecycle",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{description:"Querying blockchain state."},sidebar:"documentationSidebar",previous:{title:"Transaction Lifecycle",permalink:"/docs/pb/blockchain/basics/transaction-lifecycle"},next:{title:"Accounts",permalink:"/docs/pb/blockchain/basics/accounts"}},a={},l=[{value:"Query Endpoints",id:"query-endpoints",level:3},{value:"CLI",id:"cli",level:4},{value:"gRPC",id:"grpc",level:4},{value:"REST",id:"rest",level:4}];function d(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",header:"header",p:"p",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"query-lifecycle",children:"Query Lifecycle"})}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.a,{href:"https://docs.cosmos.network/main/building-modules/messages-and-queries.html#queries",children:(0,r.jsx)(n.strong,{children:"query"})})," is a request for information made by end-users of applications through an interface and processed by a full-node. Users can query information about the network, the blockchain itself, and blockchain state directly from the blockchain's stores or modules.  Queries differ from transactions in that they do not require consensus to be processed and therefore do not change state.  Queries can be fully handled by a single full-node."]}),"\n",(0,r.jsxs)(n.p,{children:["Refer to ",(0,r.jsx)(n.a,{href:"../using-provenance/",children:"Using Provenanced"})," for hands-on queries."]}),"\n",(0,r.jsx)(n.h3,{id:"query-endpoints",children:"Query Endpoints"}),"\n",(0,r.jsx)(n.p,{children:"There are multiple interfaces to submit transactions to the blockchain."}),"\n",(0,r.jsx)(n.h4,{id:"cli",children:"CLI"}),"\n",(0,r.jsx)(n.p,{children:"The main interface for an application is the command-line interface. Users connect to a full-node and run the CLI directly from their machines - the CLI interacts directly with the full-node."}),"\n",(0,r.jsx)(n.h4,{id:"grpc",children:"gRPC"}),"\n",(0,r.jsxs)(n.p,{children:["Users and applications can submit queries using ",(0,r.jsx)(n.a,{href:"https://grpc.io/",children:"gRPC"})," requests to a ",(0,r.jsx)(n.a,{href:"https://docs.cosmos.network/main/core/grpc_rest.html#grpc-server",children:"gRPC server"}),". The ",(0,r.jsx)(n.code,{children:"provenanced"})," daemon process is bundled with gRPC endpoints by default. The endpoints are defined as ",(0,r.jsx)(n.a,{href:"https://developers.google.com/protocol-buffers",children:"Protocol Buffers "}),"service methods inside ",(0,r.jsx)(n.code,{children:".proto"})," files, written in Protobuf's own language-agnostic interface definition language (IDL). The Protobuf ecosystem developed tools for code-generation from ",(0,r.jsx)(n.code,{children:"*.proto"})," files into various languages. These tools allow to build gRPC clients easily."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://github.com/fullstorydev/grpcurl",children:"gRPCurl"})," is an excellent command-line tool that can be used to interact with blockchain gRPC endpoints."]}),"\n",(0,r.jsx)(n.h4,{id:"rest",children:"REST"}),"\n",(0,r.jsxs)(n.p,{children:["Users and applications can submit queries through HTTP Requests to a ",(0,r.jsx)(n.a,{href:"https://docs.cosmos.network/main/core/grpc_rest.html#rest-server",children:"REST server"}),". The REST server is fully auto-generated from Protobuf services, using ",(0,r.jsx)(n.a,{href:"https://github.com/grpc-ecosystem/grpc-gateway",children:"gRPC-gateway"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>i});var r=s(96540);const t={},o=r.createContext(t);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);