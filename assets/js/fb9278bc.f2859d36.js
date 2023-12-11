"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[3830],{63619:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=t(85893),o=t(11151);const i={},d="Configure a Sentry",s={id:"pb/blockchain/running-a-node/running-a-node-1/configure-a-sentry",title:"Configure a Sentry",description:"Sentry Nodes (Public and Private)",source:"@site/docs/pb/blockchain/running-a-node/running-a-node-1/configure-a-sentry.md",sourceDirName:"pb/blockchain/running-a-node/running-a-node-1",slug:"/pb/blockchain/running-a-node/running-a-node-1/configure-a-sentry",permalink:"/docs/pb/blockchain/running-a-node/running-a-node-1/configure-a-sentry",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Become a Validator",permalink:"/docs/pb/blockchain/running-a-node/running-a-node-1/become-a-validator"},next:{title:"Running a mainnet node",permalink:"/docs/pb/blockchain/running-a-node/running-a-node-1/running-a-mainnet-node"}},a={},l=[{value:"Sentry Nodes (Public and Private)",id:"sentry-nodes-public-and-private",level:2},{value:"<strong>Public Sentry Nodes</strong>",id:"public-sentry-nodes",level:3},{value:"<strong>Private Sentry Nodes</strong>",id:"private-sentry-nodes",level:3},{value:"<strong>Node Configuration</strong>",id:"node-configuration",level:3},{value:"Recommended Hardware Configuration",id:"recommended-hardware-configuration",level:3}];function c(e){const n={admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"configure-a-sentry",children:"Configure a Sentry"}),"\n",(0,r.jsx)(n.h2,{id:"sentry-nodes-public-and-private",children:"Sentry Nodes (Public and Private)"}),"\n",(0,r.jsx)(n.p,{children:"To best protect a validator node, the node should be on its own network front-ended by nodes called sentries. This is done to prevent network attacks(DDoS, brute force, etc.) from being launched directly against a validator network. A sentry node is simply a full node that connects to the Provenance Blockchain and relays the chain to the validator. This ensures that the validator network information remains hidden and is not accessible over the public internet."}),"\n",(0,r.jsx)(n.p,{children:"For the Provenance Blockchain network, two sets of sentry nodes are recommended. Both are essentially simple full nodes with some additional configuration. It is recommended that at least two of each type of sentry node be created to ensure high availability. Creating these nodes in separate regions/data centers is also recommended."}),"\n",(0,r.jsx)(n.h3,{id:"public-sentry-nodes",children:(0,r.jsx)(n.strong,{children:"Public Sentry Nodes"})}),"\n",(0,r.jsxs)(n.p,{children:["Public sentry nodes are accessible over the public internet and allow others to leverage nodes to connect to the Provenance Blockchain. The access should be limited to the p2p port of 26656 but allows any IP to connect. These nodes are recommended to have additional endpoints to connect to and strengthen the Provenance Blockchain. The public sentry will act as a sort of protection for the private sentry nodes. It will require that each private sentry node id be added to the ",(0,r.jsx)(n.strong,{children:"private_peer"}),(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"_"})}),(0,r.jsx)(n.strong,{children:"ids"})," in the ",(0,r.jsx)(n.code,{children:"config.toml"})," file to avoid them being gossiped about and found on the network. Additional recommended configurations are listed below."]}),"\n",(0,r.jsx)(n.h3,{id:"private-sentry-nodes",children:(0,r.jsx)(n.strong,{children:"Private Sentry Nodes"})}),"\n",(0,r.jsxs)(n.p,{children:["Private sentry nodes are the last line of network protection for the validator nodes. They will connect to the public sentries to continue to relay the Provenance Blockchain network, but additionally may be used to connect to specific partners. As an example, if you would like to partner with Company X, you could allow them to connect directly to this layer and whitelist their access via firewall rules. These nodes additionally would require you to add the validator node ids to the ",(0,r.jsx)(n.strong,{children:"private_peer"}),(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:"_"})}),(0,r.jsx)(n.strong,{children:"ids"})," in the ",(0,r.jsx)(n.code,{children:"config.toml"})," file. This will ensure they will not be gossiped about on the network. Additional recommended configurations are listed below."]}),"\n",(0,r.jsx)(n.h3,{id:"node-configuration",children:(0,r.jsx)(n.strong,{children:"Node Configuration"})}),"\n",(0,r.jsx)(n.p,{children:"The following configuration parameters are found in the config.toml file"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Configuration"}),(0,r.jsx)(n.th,{children:"Setting"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pex"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)("p",{children:"true (public sentry), false (private sentry)"}),(0,r.jsx)("ul",{children:(0,r.jsx)("li",{children:"This turns the peer exchange reactor on or off for a node."})})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"persistent-peers"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)("p",{children:"validator node ids, other sentry node ids"}),(0,r.jsx)("ul",{children:(0,r.jsxs)("li",{children:["a comma separated list of ",(0,r.jsxs)("code",{children:["nodeID@ip",":port"]})," values that define a list of peers that are expected to be online at all times"]})})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"private-peer-ids"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)("p",{children:"private sentry node ids, validator node ids"}),(0,r.jsx)("ul",{children:(0,r.jsx)("li",{children:"Comma separated list of peer IDs to keep private (will not be gossiped to other peers)"})})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"unconditional-peer-ids"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)("p",{children:"sentry node ids"}),(0,r.jsx)("ul",{children:(0,r.jsx)("li",{children:"List of node IDs, to which a connection will be (re)established ignoring any existing limits"})})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"addr-book-strict"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)("p",{children:"true (public sentry), false (private sentry)"}),(0,r.jsx)("ul",{children:(0,r.jsx)("li",{children:"By default nodes with a routable address will be considered for connection. If this setting is turned off (false), non-routable IP addresses, like addresses in a private network can be added to the address book."})})]})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"recommended-hardware-configuration",children:"Recommended Hardware Configuration"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"CPU/Memory/Storage is determined based on how you intend to use Provenance Blockchain and how the node is configured (type) and data retention periods. These are general use numbers and may be adjusted based on the desired performance."})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Node Type"}),(0,r.jsx)(n.th,{children:"CPU"}),(0,r.jsx)(n.th,{children:"Memory"}),(0,r.jsx)(n.th,{children:"Storage"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Public Sentry/Private Sentry"}),(0,r.jsx)(n.td,{children:"4 CPU"}),(0,r.jsx)(n.td,{children:"32GB"}),(0,r.jsx)(n.td,{children:"500GB"})]})})]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>d});var r=t(67294);const o={},i=r.createContext(o);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);