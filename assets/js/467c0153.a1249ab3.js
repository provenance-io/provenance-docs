"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[9909],{58303:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>h,contentTitle:()=>i,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var a=s(85893),t=s(11151),o=s(98677);const c={},i="Tx Command",r={id:"pb/blockchain/using-provenance/tx-command",title:"Tx Command",description:"This section uses the provenanced application to connect to the Provenance Blockchain testnet. Follow the installation instructions in the Using Provenanced section.",source:"@site/docs/pb/blockchain/using-provenance/tx-command.md",sourceDirName:"pb/blockchain/using-provenance",slug:"/pb/blockchain/using-provenance/tx-command",permalink:"/docs/pb/blockchain/using-provenance/tx-command",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Query Command",permalink:"/docs/pb/blockchain/using-provenance/query-command"},next:{title:"Running a Node",permalink:"/docs/pb/blockchain/running-a-node/running-a-node-1/"}},h={},d=[{value:"Create and Submit a Transaction",id:"create-and-submit-a-transaction",level:2}];function l(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"tx-command",children:"Tx Command"}),"\n","\n","\n",(0,a.jsx)(o.Y,{text:"Submit transactions using the `provenanced` transaction command."}),"\n",(0,a.jsxs)(e.admonition,{type:"info",children:[(0,a.jsxs)(e.p,{children:["This section uses the ",(0,a.jsx)(e.code,{children:"provenanced"})," application to connect to the Provenance Blockchain testnet. Follow the installation instructions in the ",(0,a.jsx)(e.a,{href:"./",children:"Using Provenanced"})," section."]}),(0,a.jsx)(e.p,{children:"You will need a key pair stored in the local Keyring to run the transaction commands in this section."})]}),"\n",(0,a.jsx)(e.h2,{id:"create-and-submit-a-transaction",children:"Create and Submit a Transaction"}),"\n",(0,a.jsx)(e.p,{children:"With a key pair and address we can submit transactions to the blockchain."}),"\n",(0,a.jsxs)(e.admonition,{type:"info",children:[(0,a.jsxs)(e.p,{children:["Use ",(0,a.jsx)(e.code,{children:"provenanced tx --help"})," to view the types of transactions supported by Provenance Blockchain."]}),(0,a.jsx)(e.p,{children:"Transaction requests from the command-line follow the form:"}),(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"provenanced tx [moduleName] [command] <arguments> --flag <flagArg>\n"})})]}),"\n",(0,a.jsxs)(e.p,{children:["First find an existing Hash holder address that we can transfer some of our Hash to. Using the ",(0,a.jsx)(e.code,{children:"provenanced"})," query commands and the Marker module, we can list everyone holding Hash:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"provenanced --testnet q marker holding nhash --node=https://rpc.test.provenance.io:443\n"})}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:'balances:\n- address: tp1qgjnuqnrqwhg2kfl0dk9rhkcga5lehns2hdycm\n  coins:\n  - amount: "963530000"\n    denom: nhash\n- address: tp1pr93cqdh4kfnmrknhwa87a5qrwxw9k3dhkszp0\n  coins:\n  - amount: "99089999999600000000"\n    denom: nhash\n- address: tp1pmc6v4p8rak0lmzcrsm9t2hzm9vnzwy2a5xyhv\n  coins:\n  - amount: "866545000"\n    denom: nhash\n- address: tp1zk3qvk6dvpk6394chmvq5gtrw5arqzsag072h5\n'})}),"\n",(0,a.jsxs)(e.p,{children:["Let's pick someone with a small amount of Hash, like the first address in our list ",(0,a.jsx)(e.code,{children:"tp1qgjnuqnrqwhg2kfl0dk9rhkcga5lehns2hdycm"})," (note, the list may be different when you run this command)."]}),"\n",(0,a.jsx)(e.admonition,{type:"info",children:(0,a.jsxs)(e.p,{children:["What is ",(0,a.jsx)(e.code,{children:"nhash"}),"? ",(0,a.jsx)(e.code,{children:"nhash"})," is the smallet unit of Hash, a nano-Hash, where 1 Hash = 1,000,000,000 ",(0,a.jsx)(e.code,{children:"nhash"}),"."]})}),"\n",(0,a.jsxs)(e.p,{children:["Now, let's transfer 1",(0,a.jsx)(e.code,{children:"nhash"})," to the other address:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:"provenanced --testnet tx bank send tp1cuknswnphchtkwe68t4nshcaj4l4azv9ml2qhs tp1qgjnuqnrqwhg2kfl0dk9rhkcga5lehns2hdycm 1nhash \\\n --node=https://rpc.test.provenance.io:443 \\\n --chain-id pio-testnet-1 \\\n --gas 65000\n --gas-prices 1nhash\n"})}),"\n",(0,a.jsx)(e.p,{children:"The CLI will prompt us to confirm our transaction request:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-bash",children:'{"body":{"messages":[{"@type":"/cosmos.bank.v1beta1.MsgSend","from_address":"tp1cuknswnphchtkwe68t4nshcaj4l4azv9ml2qhs","to_address":"tp1qgjnuqnrqwhg2kfl0dk9rhkcga5lehns2hdycm","amount":[{"denom":"nhash","amount":"1"}]}],"memo":"","timeout_height":"0","extension_options":[],"non_critical_extension_options":[]},"auth_info":{"signer_infos":[],"fee":{"amount":[{"denom":"nhash","amount":"60000"}],"gas_limit":"200000","payer":"","granter":""}},"signatures":[]}\n\nconfirm transaction before signing and broadcasting [y/N]:\n'})}),"\n",(0,a.jsxs)(e.p,{children:["Once confirmed, the transaction will be signed using the private key portion of our key pair associated to address ",(0,a.jsx)(e.code,{children:"tp1cuknswnphchtkwe68t4nshcaj4l4azv9ml2qhs"})," (remember we stored our key in a local keyring) and submitted to the blockchain:"]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:'{\n  "height": "211721",\n  "txhash": "903A2DFC2E3178D4AB078306E357C28A7B6167F01181AC1A17F1CCC857202D13",\n  "codespace": "",\n  "code": 0,\n  "data": "0A060A0473656E64",\n  "raw_log": "[{\\"events\\":[{\\"type\\":\\"message\\",\\"attributes\\":[{\\"key\\":\\"action\\",\\"value\\":\\"send\\"},{\\"key\\":\\"sender\\",\\"value\\":\\"tp1cuknswnphchtkwe68t4nshcaj4l4azv9ml2qhs\\"},{\\"key\\":\\"module\\",\\"value\\":\\"bank\\"}]},{\\"type\\":\\"transfer\\",\\"attributes\\":[{\\"key\\":\\"recipient\\",\\"value\\":\\"tp1qgjnuqnrqwhg2kfl0dk9rhkcga5lehns2hdycm\\"},{\\"key\\":\\"sender\\",\\"value\\":\\"tp1cuknswnphchtkwe68t4nshcaj4l4azv9ml2qhs\\"},{\\"key\\":\\"amount\\",\\"value\\":\\"1nhash\\"}]}]}]",\n  "logs": [\n    {\n      "msg_index": 0,\n      "log": "",\n      "events": [\n        {\n          "type": "message",\n          "attributes": [\n            {\n              "key": "action",\n              "value": "send"\n            },\n            {\n              "key": "sender",\n              "value": "tp1cuknswnphchtkwe68t4nshcaj4l4azv9ml2qhs"\n            },\n            {\n              "key": "module",\n              "value": "bank"\n            }\n          ]\n        },\n        {\n          "type": "transfer",\n          "attributes": [\n            {\n              "key": "recipient",\n              "value": "tp1qgjnuqnrqwhg2kfl0dk9rhkcga5lehns2hdycm"\n            },\n            {\n              "key": "sender",\n              "value": "tp1cuknswnphchtkwe68t4nshcaj4l4azv9ml2qhs"\n            },\n            {\n              "key": "amount",\n              "value": "1nhash"\n            }\n          ]\n        }\n      ]\n    }\n  ],\n  "info": "",\n  "gas_wanted": "65000",\n  "gas_used": "61579",\n  "tx": null,\n  "timestamp": ""\n}\n'})}),"\n",(0,a.jsx)(e.admonition,{type:"info",children:(0,a.jsxs)(e.p,{children:["Gas, gas, and more gas: notice that the transaction response includes ",(0,a.jsx)(e.code,{children:"gas_wanted"})," and a ",(0,a.jsx)(e.code,{children:"gas_used"})," values. When we submitted our transaction we indicated we were willing to pay 65,000 units of gas (",(0,a.jsx)(e.code,{children:"--gas 65000"}),") at 1 nhash per unit (",(0,a.jsx)(e.code,{children:"--gas-prices 1nhash"}),"). The actual cost of the transaction was 61,579 units of gas at our 1 nhash per unit price. Refer to the ",(0,a.jsx)(e.a,{href:"https://docs.cosmos.network/main/basics/gas-fees.html",children:"Cosmos Introduction to Gas and Fees"})," and the ",(0,a.jsx)(e.a,{href:"/docs/pb/blockchain/basics/gas-and-fees",children:"Provenance Blockchain Gas and Fees "}),"section."]})}),"\n",(0,a.jsx)(e.p,{children:"Of note in the transaction response are:"}),"\n",(0,a.jsxs)(e.ul,{children:["\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"height"})," is the block number our transaction was included in"]}),"\n",(0,a.jsxs)(e.li,{children:[(0,a.jsx)(e.code,{children:"txhash"})," is a unique identifier for our transfer transaction (it is a crypto hash of the transaction request)"]}),"\n",(0,a.jsxs)(e.li,{children:["A zero value ",(0,a.jsx)(e.code,{children:"code"})," indicates the transaction was successful."]}),"\n"]}),"\n",(0,a.jsx)(e.admonition,{type:"info",children:(0,a.jsxs)(e.p,{children:["The ",(0,a.jsx)(e.code,{children:"--node=https://rpc.test.provenance.io:443"})," flag is not necessary when running against a locally installed node."]})})]})}function p(n={}){const{wrapper:e}={...(0,t.a)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(l,{...n})}):l(n)}},98677:(n,e,s)=>{s.d(e,{Y:()=>t});s(67294);var a=s(85893);const t=n=>{let{text:e}=n;return(0,a.jsx)("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500",children:e})}},11151:(n,e,s)=>{s.d(e,{Z:()=>i,a:()=>c});var a=s(67294);const t={},o=a.createContext(t);function c(n){const e=a.useContext(o);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function i(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:c(n.components),a.createElement(o.Provider,{value:e},n.children)}}}]);