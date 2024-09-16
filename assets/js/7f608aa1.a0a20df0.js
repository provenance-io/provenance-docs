"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[1721],{36065:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>r,toc:()=>l});var s=n(74848),i=n(28453);const a={},o="Transactions",r={id:"discover/explorer/ui-walkthrough/transactions",title:"Transactions",description:"A transaction is how everything gets committed to the blockchain. From transfers of Hash to Smart Contract executions, it all gets recorded to the blockchain ledger via transactions.",source:"@site/docs/discover/explorer/ui-walkthrough/transactions.md",sourceDirName:"discover/explorer/ui-walkthrough",slug:"/discover/explorer/ui-walkthrough/transactions",permalink:"/docs/discover/explorer/ui-walkthrough/transactions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},c={},l=[{value:"Listview",id:"listview",level:2},{value:"Detail",id:"detail",level:2},{value:"Forthcoming",id:"forthcoming",level:2}];function h(e){const t={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"transactions",children:"Transactions"}),"\n",(0,s.jsxs)(t.p,{children:["A transaction is how everything gets committed to the blockchain. From transfers of Hash to ",(0,s.jsx)(t.a,{href:"/docs/sdk/z-smart-contracts/",children:"Smart Contract"})," executions, it all gets recorded to the blockchain ledger via transactions."]}),"\n",(0,s.jsx)(t.h2,{id:"listview",children:"Listview"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"A list of the most recent transactions committed to the blockchain",src:n(49324).A+"",width:"2742",height:"1182"})}),"\n",(0,s.jsx)(t.p,{children:"A transaction can contain many messages within, all considered applied to the blockchain with the success of the transaction as a whole. The submitter of the transaction must have permissions to sign for all messages within the transaction, and either pay the gas fees to commit it to the blockchain, or have a fee grant that applies to the transaction."}),"\n",(0,s.jsx)(t.p,{children:"Filters exist to make finding certain transactions easier. "}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Type"}),": this is the message type for a submitted transaction. They are grouped by generally accepted criteria. Select a single type to filter"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Status"}),": Success or Failed"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"From"})," & ",(0,s.jsx)(t.strong,{children:"To"}),": specify a date range to filter transactions down to a time period. Can include one or both"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Information to note:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Tx Hash"}),": the unique hash of the transaction. Can be used as a reliable identifier "]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Tx Type"}),": a list of message types contained within the transaction. Can be any combination of message types"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Fee"}),": the fee paid to submit the transaction to the blockchain. The higher the fee, the more data was processed for the transaction to be successful"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Signer"}),": one or more addresses that submit the transaction, and sign off on the changes that take place. If no feepayer grant is present, then the first signer pays the fee"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Status"}),": ",(0,s.jsx)(t.strong,{children:"Success"})," if no errors occurred processing the transaction, or ",(0,s.jsx)(t.strong,{children:"Failed"})," if an error occurred processing the transaction"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Timestamp"}),": the timestamp taken from the block that holds the transaction"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"detail",children:"Detail"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Transaction Detail overview",src:n(27203).A+"",width:"2736",height:"1436"})}),"\n",(0,s.jsx)(t.p,{children:"Each transaction row in the listview links through to a detail page. Here you will see more information about the transaction, including additional signers, memo information, and message details."}),"\n",(0,s.jsx)(t.p,{children:"Information to note:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Messages"}),": the messages are an infinite scrolling listview. Each message shows the messgae object as it was submitted with the transaction. "]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Tx Type"}),": a filter exists to show only specific message types within the transaction, as a transaction can have one to many messages"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:'"Show full transaction JSON"'}),": this is a clickable message that opens a window showing the full JSON for the transaction. Here you can dive deeper into the resulting logs of a transaction. Example:"]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Collapsible box showing the full JSON for a transaction",src:n(45353).A+"",width:"2752",height:"1272"})}),"\n",(0,s.jsx)(t.h2,{id:"forthcoming",children:"Forthcoming"}),"\n",(0,s.jsx)(t.p,{children:"As we glean more information from the blockchain, additional features may include:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"A feepayer field to show who actually paid the transaction fee"}),"\n",(0,s.jsx)(t.li,{children:"Resulting event logs to show results of a transaction message"}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},27203:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/tx-detail-9de551a7d6503edd66fb3ef5a2ae1bbd.png"},49324:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/tx-list-74e829e8cc1715fd7dc5ffce8aff60dc.png"},45353:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/tx-raw-details-625370db80715e9bc43ab6272ca1cd1f.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(96540);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);