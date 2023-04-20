"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9909],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(t),h=r,u=d["".concat(c,".").concat(h)]||d[h]||m[h]||o;return t?a.createElement(u,s(s({ref:n},p),{},{components:t})):a.createElement(u,s({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=h;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[d]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},8677:(e,n,t)=>{t.d(n,{Y:()=>r});var a=t(7294);const r=e=>{let{text:n}=e;return a.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},n)}},7411:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var a=t(7462),r=(t(7294),t(3905)),o=t(8677);const s={},i="Tx Command",c={unversionedId:"pb/blockchain/using-provenance/tx-command",id:"pb/blockchain/using-provenance/tx-command",title:"Tx Command",description:"This section uses the provenanced application to connect to the Provenance Blockchain testnet. Follow the installation instructions in the Using Provenanced section.",source:"@site/docs/pb/blockchain/using-provenance/tx-command.md",sourceDirName:"pb/blockchain/using-provenance",slug:"/pb/blockchain/using-provenance/tx-command",permalink:"/docs/pb/blockchain/using-provenance/tx-command",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Query Command",permalink:"/docs/pb/blockchain/using-provenance/query-command"},next:{title:"Running a Node",permalink:"/docs/pb/blockchain/running-a-node/running-a-node-1/"}},l={},p=[{value:"Create and Submit a Transaction",id:"create-and-submit-a-transaction",level:2}],d={toc:p},m="wrapper";function h(e){let{components:n,...t}=e;return(0,r.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tx-command"},"Tx Command"),(0,r.kt)(o.Y,{text:"Submit transactions using the `provenanced` transaction command.",mdxType:"DocSubheader"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This section uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"provenanced")," application to connect to the Provenance Blockchain testnet. Follow the installation instructions in the ",(0,r.kt)("a",{parentName:"p",href:"./"},"Using Provenanced")," section."),(0,r.kt)("p",{parentName:"admonition"},"You will need a key pair stored in the local Keyring to run the transaction commands in this section.")),(0,r.kt)("h2",{id:"create-and-submit-a-transaction"},"Create and Submit a Transaction"),(0,r.kt)("p",null,"With a key pair and address we can submit transactions to the blockchain."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"provenanced tx --help")," to view the types of transactions supported by Provenance Blockchain."),(0,r.kt)("p",{parentName:"admonition"},"Transaction requests from the command-line follow the form:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"provenanced tx [moduleName] [command] <arguments> --flag <flagArg>\n"))),(0,r.kt)("p",null,"First find an existing Hash holder address that we can transfer some of our Hash to. Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"provenanced")," query commands and the Marker module, we can list everyone holding Hash:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"provenanced --testnet q marker holding nhash --node=https://rpc.test.provenance.io:443\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'balances:\n- address: tp1qgjnuqnrqwhg2kfl0dk9rhkcga5lehns2hdycm\n  coins:\n  - amount: "963530000"\n    denom: nhash\n- address: tp1pr93cqdh4kfnmrknhwa87a5qrwxw9k3dhkszp0\n  coins:\n  - amount: "99089999999600000000"\n    denom: nhash\n- address: tp1pmc6v4p8rak0lmzcrsm9t2hzm9vnzwy2a5xyhv\n  coins:\n  - amount: "866545000"\n    denom: nhash\n- address: tp1zk3qvk6dvpk6394chmvq5gtrw5arqzsag072h5\n')),(0,r.kt)("p",null,"Let's pick someone with a small amount of Hash, like the first address in our list ",(0,r.kt)("inlineCode",{parentName:"p"},"tp1qgjnuqnrqwhg2kfl0dk9rhkcga5lehns2hdycm")," ","(","note, the list may be different when you run this command",")","."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"What is ",(0,r.kt)("inlineCode",{parentName:"p"},"nhash"),"? ",(0,r.kt)("inlineCode",{parentName:"p"},"nhash")," is the smallet unit of Hash, a nano-Hash, where 1 Hash = 1,000,000,000 ",(0,r.kt)("inlineCode",{parentName:"p"},"nhash"),".")),(0,r.kt)("p",null,"Now, let's transfer 1",(0,r.kt)("inlineCode",{parentName:"p"},"nhash")," to the other address:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"provenanced --testnet tx bank send tp1cuknswnphchtkwe68t4nshcaj4l4azv9ml2qhs tp1qgjnuqnrqwhg2kfl0dk9rhkcga5lehns2hdycm 1nhash \\\n --node=https://rpc.test.provenance.io:443 \\\n --chain-id pio-testnet-1 \\\n --gas 65000\n --gas-prices 1nhash\n")),(0,r.kt)("p",null,"The CLI will prompt us to confirm our transaction request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'{"body":{"messages":[{"@type":"/cosmos.bank.v1beta1.MsgSend","from_address":"tp1cuknswnphchtkwe68t4nshcaj4l4azv9ml2qhs","to_address":"tp1qgjnuqnrqwhg2kfl0dk9rhkcga5lehns2hdycm","amount":[{"denom":"nhash","amount":"1"}]}],"memo":"","timeout_height":"0","extension_options":[],"non_critical_extension_options":[]},"auth_info":{"signer_infos":[],"fee":{"amount":[{"denom":"nhash","amount":"60000"}],"gas_limit":"200000","payer":"","granter":""}},"signatures":[]}\n\nconfirm transaction before signing and broadcasting [y/N]:\n')),(0,r.kt)("p",null,"Once confirmed, the transaction will be signed using the private key portion of our key pair associated to address ",(0,r.kt)("inlineCode",{parentName:"p"},"tp1cuknswnphchtkwe68t4nshcaj4l4azv9ml2qhs")," ","(","remember we stored our key in a local keyring",")"," and submitted to the blockchain:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "height": "211721",\n  "txhash": "903A2DFC2E3178D4AB078306E357C28A7B6167F01181AC1A17F1CCC857202D13",\n  "codespace": "",\n  "code": 0,\n  "data": "0A060A0473656E64",\n  "raw_log": "[{\\"events\\":[{\\"type\\":\\"message\\",\\"attributes\\":[{\\"key\\":\\"action\\",\\"value\\":\\"send\\"},{\\"key\\":\\"sender\\",\\"value\\":\\"tp1cuknswnphchtkwe68t4nshcaj4l4azv9ml2qhs\\"},{\\"key\\":\\"module\\",\\"value\\":\\"bank\\"}]},{\\"type\\":\\"transfer\\",\\"attributes\\":[{\\"key\\":\\"recipient\\",\\"value\\":\\"tp1qgjnuqnrqwhg2kfl0dk9rhkcga5lehns2hdycm\\"},{\\"key\\":\\"sender\\",\\"value\\":\\"tp1cuknswnphchtkwe68t4nshcaj4l4azv9ml2qhs\\"},{\\"key\\":\\"amount\\",\\"value\\":\\"1nhash\\"}]}]}]",\n  "logs": [\n    {\n      "msg_index": 0,\n      "log": "",\n      "events": [\n        {\n          "type": "message",\n          "attributes": [\n            {\n              "key": "action",\n              "value": "send"\n            },\n            {\n              "key": "sender",\n              "value": "tp1cuknswnphchtkwe68t4nshcaj4l4azv9ml2qhs"\n            },\n            {\n              "key": "module",\n              "value": "bank"\n            }\n          ]\n        },\n        {\n          "type": "transfer",\n          "attributes": [\n            {\n              "key": "recipient",\n              "value": "tp1qgjnuqnrqwhg2kfl0dk9rhkcga5lehns2hdycm"\n            },\n            {\n              "key": "sender",\n              "value": "tp1cuknswnphchtkwe68t4nshcaj4l4azv9ml2qhs"\n            },\n            {\n              "key": "amount",\n              "value": "1nhash"\n            }\n          ]\n        }\n      ]\n    }\n  ],\n  "info": "",\n  "gas_wanted": "65000",\n  "gas_used": "61579",\n  "tx": null,\n  "timestamp": ""\n}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Gas, gas, and more gas: notice that the transaction response includes ",(0,r.kt)("inlineCode",{parentName:"p"},"gas_wanted")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"gas_used")," values. When we submitted our transaction we indicated we were willing to pay 65,000 units of gas ","(",(0,r.kt)("inlineCode",{parentName:"p"},"--gas 65000"),")"," at 1 nhash per unit ","(",(0,r.kt)("inlineCode",{parentName:"p"},"--gas-prices 1nhash"),")",". The actual cost of the transaction was 61,579 units of gas at our 1 nhash per unit price. Refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/basics/gas-fees.html"},"Cosmos Introduction to Gas and Fees")," and the ",(0,r.kt)("a",{parentName:"p",href:"/docs/pb/blockchain/basics/gas-and-fees"},"Provenance Blockchain Gas and Fees "),"section.")),(0,r.kt)("p",null,"Of note in the transaction response are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"height")," is the block number our transaction was included in"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"txhash")," is a unique identifier for our transfer transaction ","(","it is a crypto hash of the transaction request",")"),(0,r.kt)("li",{parentName:"ul"},"A zero value ",(0,r.kt)("inlineCode",{parentName:"li"},"code")," indicates the transaction was successful.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"--node=https://rpc.test.provenance.io:443")," flag is not necessary when running against a locally installed node.")))}h.isMDXComponent=!0}}]);