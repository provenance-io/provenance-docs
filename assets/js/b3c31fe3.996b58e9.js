"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[3889],{67542:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var t=o(85893),a=o(11151);const i={description:"running a mainnet node for pio-mainnet-1"},r="Running a mainnet node",c={id:"pb/blockchain/running-a-node/running-a-node-1/running-a-mainnet-node",title:"Running a mainnet node",description:"running a mainnet node for pio-mainnet-1",source:"@site/docs/pb/blockchain/running-a-node/running-a-node-1/running-a-mainnet-node.md",sourceDirName:"pb/blockchain/running-a-node/running-a-node-1",slug:"/pb/blockchain/running-a-node/running-a-node-1/running-a-mainnet-node",permalink:"/docs/pb/blockchain/running-a-node/running-a-node-1/running-a-mainnet-node",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{description:"running a mainnet node for pio-mainnet-1"},sidebar:"documentationSidebar",previous:{title:"Configure a Sentry",permalink:"/docs/pb/blockchain/running-a-node/running-a-node-1/configure-a-sentry"},next:{title:"Provenance IBC",permalink:"/docs/pb/modules/ibc-and-zones"}},s={},d=[];function p(n){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"running-a-mainnet-node",children:"Running a mainnet node"}),"\n",(0,t.jsxs)(e.p,{children:["The steps for running mainnet are for the most part, the same as testnet except that the github repo is here\n",(0,t.jsx)(e.a,{href:"https://github.com/provenance-io/mainnet",children:"https://github.com/provenance-io/mainnet"})," and the chain id is ",(0,t.jsx)(e.code,{children:"pio-mainnet-1"})]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-markup",children:"Step 1:download the latest quickysync via https://provenance.io/quicksync and latest provenanced version.\nAt the time of writing this document latest version on mainnet was v1.16.0.\nDownload release from https://github.com/provenance-io/provenance/releases/\nFor e.g for version v1.16.0 url is https://github.com/provenance-io/provenance/releases/tag/v1.16.0\nStep 2:Untar data directory from the quicksync download and replacing the untarred data directory to $PIO_HOME/data\nStep 3: Run the below commands\nexport PIO_HOME=~/.provenanced // or directory of your choosing.\nprovenanced init choose-a-moniker --chain-id pio-mainnet-1\ncurl https://raw.githubusercontent.com/provenance-io/mainnet/main/pio-mainnet-1/genesis.json> genesis.json\nmv genesis.json $PIO_HOME/config\nStep 4: provenanced start --p2p.seeds 40f9493fa7ab4259159240e9a8ba12f90743079b@seed.provenance.io:26656 --x-crisis-skip-assert-invariants\n"})})]})}function u(n={}){const{wrapper:e}={...(0,a.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(p,{...n})}):p(n)}},11151:(n,e,o)=>{o.d(e,{Z:()=>c,a:()=>r});var t=o(67294);const a={},i=t.createContext(a);function r(n){const e=t.useContext(i);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(a):n.components||a:r(n.components),t.createElement(i.Provider,{value:e},n.children)}}}]);