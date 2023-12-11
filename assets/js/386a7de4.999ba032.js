"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[5757],{65905:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var o=t(85893),r=t(11151),i=t(98677);const a={},s="Running a testnet node from quicksync",c={id:"pb/blockchain/running-a-node/running-a-node-1/join-provenance-testnet/running-a-testnet-node-from-quicksync",title:"Running a testnet node from quicksync",description:"The steps for running testnet are for the most part the same as mainnet except that the github repo is here",source:"@site/docs/pb/blockchain/running-a-node/running-a-node-1/join-provenance-testnet/running-a-testnet-node-from-quicksync.md",sourceDirName:"pb/blockchain/running-a-node/running-a-node-1/join-provenance-testnet",slug:"/pb/blockchain/running-a-node/running-a-node-1/join-provenance-testnet/running-a-testnet-node-from-quicksync",permalink:"/docs/pb/blockchain/running-a-node/running-a-node-1/join-provenance-testnet/running-a-testnet-node-from-quicksync",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Joining Testnet",permalink:"/docs/pb/blockchain/running-a-node/running-a-node-1/join-provenance-testnet/"},next:{title:"Become a Validator",permalink:"/docs/pb/blockchain/running-a-node/running-a-node-1/become-a-validator"}},d={},p=[];function u(n){const e={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,r.a)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h1,{id:"running-a-testnet-node-from-quicksync",children:"Running a testnet node from quicksync"}),"\n","\n","\n",(0,o.jsx)(i.Y,{text:"Running a testnet node for pio-testnet-1 from a quicksync file."}),"\n",(0,o.jsxs)(e.p,{children:["The steps for running testnet are for the most part the same as mainnet except that the github repo is here\n",(0,o.jsx)(e.a,{href:"https://github.com/provenance-io/testnet",children:"https://github.com/provenance-io/testnet"}),", the ",(0,o.jsx)(e.code,{children:"-t"})," flag is required to\nset the key prefix from 505 to 1 (putting the binary in testnet mode)and the chain id is ",(0,o.jsx)(e.code,{children:"pio-testnet-1"})]}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-markup",children:"Step 1: download the latest quickysync via https://test.provenance.io/quicksync.\nStep 2: Note down the provenance version required for the quicksync file downloaded in step 1.\nStep 3: Download appropriate release from https://github.com/provenance-io/provenance/releases/ noted from step 2.\nStep 4: Untar data directory from the quicksync download and replacing the untarred data directory to $PIO_HOME/data\nStep 5: Run the below commands\nexport PIO_HOME=~/.provenanced // or directory of your choosing.\nprovenanced init -t choose-a-moniker --chain-id pio-testnet-1\ncurl https://raw.githubusercontent.com/provenance-io/testnet/main/pio-testnet-1/genesis.json> genesis.json\nmv genesis.json $PIO_HOME/config\nStep 6: provenanced start --testnet --p2p.seeds 4403e0e55fa4e43a454c4bf7922c8a93a51fb12d@seed.test.provenance.io:26656 --x-crisis-skip-assert-invariants\n"})})]})}function h(n={}){const{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(u,{...n})}):u(n)}},98677:(n,e,t)=>{t.d(e,{Y:()=>r});t(67294);var o=t(85893);const r=n=>{let{text:e}=n;return(0,o.jsx)("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500",children:e})}},11151:(n,e,t)=>{t.d(e,{Z:()=>s,a:()=>a});var o=t(67294);const r={},i=o.createContext(r);function a(n){const e=o.useContext(i);return o.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:a(n.components),o.createElement(i.Provider,{value:e},n.children)}}}]);