"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[6379],{64960:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var t=o(74848),i=o(28453),a=o(41306);const r={},d="Running a Node",s={id:"pb/blockchain/running-a-node/running-a-node-1/index",title:"Running a Node",description:"Nodes on the Provenance Blockchain network are simply servers started by the provenanced executable with a specific configuration. There are several types of configurations such as seeding, data archival, or validation that may be used to assist in application development. These configuration types may be helpful in deciding what type of node is best suited for the different use cases.",source:"@site/docs/pb/blockchain/running-a-node/running-a-node-1/index.md",sourceDirName:"pb/blockchain/running-a-node/running-a-node-1",slug:"/pb/blockchain/running-a-node/running-a-node-1/",permalink:"/docs/pb/blockchain/running-a-node/running-a-node-1/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Tx Command",permalink:"/docs/pb/blockchain/using-provenance/tx-command"},next:{title:"Joining Testnet",permalink:"/docs/pb/blockchain/running-a-node/running-a-node-1/join-provenance-testnet/"}},c={},l=[{value:"Node Configurations",id:"node-configurations",level:2},{value:"Seed Node",id:"seed-node",level:3},{value:"Sentry Node",id:"sentry-node",level:3},{value:"Validator Node",id:"validator-node",level:3},{value:"More Information",id:"more-information",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"running-a-node",children:"Running a Node"}),"\n","\n",(0,t.jsx)(a.Y,{text:"Hosting a node on Provenance Blockchain mainnet, testnet, or for local development."}),"\n",(0,t.jsxs)(n.p,{children:["Nodes on the Provenance Blockchain network are simply servers started by the ",(0,t.jsx)(n.code,{children:"provenanced"})," executable with a specific configuration. There are several types of configurations such as seeding, data archival, or validation that may be used to assist in application development. These configuration types may be helpful in deciding what type of node is best suited for the different use cases."]}),"\n",(0,t.jsx)(n.h2,{id:"node-configurations",children:"Node Configurations"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"provenanced"})," is an all-encompassing command that may operate as any type of node, depending on how it has been configured. When determining how a particular node should be configured, it is necessary to take a deeper look at Provenance Blockchain and how it is structured."]}),"\n",(0,t.jsx)(n.h3,{id:"seed-node",children:"Seed Node"}),"\n",(0,t.jsx)(n.p,{children:"A seed node is configured to provide an IP/port address book for other nodes to initially find and connect to peers. This node acts as a service directory for connections to sentry nodes on the network."}),"\n",(0,t.jsx)(n.h3,{id:"sentry-node",children:"Sentry Node"}),"\n",(0,t.jsx)(n.p,{children:"A sentry node is configured to provide data and connectivity to the mesh network. Sentries may be configured to provide RPC-based p2p communication to other network participants, archive blockchain data, query access to blockchain data, and provide a secured gateway that can communicate with and protect a validator node. This is the most used node type and will be the first node with which most network participants will interact."}),"\n",(0,t.jsx)(n.h3,{id:"validator-node",children:"Validator Node"}),"\n",(0,t.jsx)(n.p,{children:"A validator node is configured to participate in the consensus algorithm and is responsible for signing and proposing blocks to commit to the blockchain. It also holds Hash as stake, and receives Hash for its services."}),"\n",(0,t.jsx)(n.h3,{id:"more-information",children:"More Information"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://tendermint.com/",children:"Tendermint"})," is an excellent resource for information regarding node configuration and details. For a detailed overview of the different types of nodes supported, see ",(0,t.jsx)(n.a,{href:"https://docs.tendermint.com/master/nodes/",children:"Tendermint Node Types"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},41306:(e,n,o)=>{o.d(n,{Y:()=>i});o(96540);var t=o(74848);const i=e=>{let{text:n}=e;return(0,t.jsx)("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500",children:n})}},28453:(e,n,o)=>{o.d(n,{R:()=>r,x:()=>d});var t=o(96540);const i={},a=t.createContext(i);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);