"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[7807],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),m=r,d=u["".concat(l,".").concat(m)]||u[m]||h[m]||o;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1442:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={},i="Transactions",s={unversionedId:"discover/explorer/ui-walkthrough/transactions",id:"discover/explorer/ui-walkthrough/transactions",title:"Transactions",description:"A transaction is how everything gets committed to the blockchain. From transfers of Hash to Smart Contract executions, it all gets recorded to the blockchain ledger via transactions.",source:"@site/docs/discover/explorer/ui-walkthrough/transactions.md",sourceDirName:"discover/explorer/ui-walkthrough",slug:"/discover/explorer/ui-walkthrough/transactions",permalink:"/provenance-docs/docs/discover/explorer/ui-walkthrough/transactions",draft:!1,tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Listview",id:"listview",level:2},{value:"Detail",id:"detail",level:2},{value:"Forthcoming",id:"forthcoming",level:2}],p={toc:c};function h(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transactions"},"Transactions"),(0,r.kt)("p",null,"A transaction is how everything gets committed to the blockchain. From transfers of Hash to ",(0,r.kt)("a",{parentName:"p",href:"/provenance-docs/docs/pb/modules/provwasm-smart-contracts"},"Smart Contract")," executions, it all gets recorded to the blockchain ledger via transactions."),(0,r.kt)("h2",{id:"listview"},"Listview"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"A list of the most recent transactions committed to the blockchain",src:a(5071).Z,width:"2742",height:"1182"})),(0,r.kt)("p",null,"A transaction can contain many messages within, all considered applied to the blockchain with the success of the transaction as a whole. The submitter of the transaction must have permissions to sign for all messages within the transaction, and either pay the gas fees to commit it to the blockchain, or have a fee grant that applies to the transaction."),(0,r.kt)("p",null,"Filters exist to make finding certain transactions easier."," "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Type"),": this is the message type for a submitted transaction. They are grouped by generally accepted criteria. Select a single type to filter"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Status"),": Success or Failed"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"From")," & ",(0,r.kt)("strong",{parentName:"li"},"To"),": specify a date range to filter transactions down to a time period. Can include one or both")),(0,r.kt)("p",null,"Information to note:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tx Hash"),": the unique hash of the transaction. Can be used as a reliable identifier"," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tx Type"),": a list of message types contained within the transaction. Can be any combination of message types"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Fee"),": the fee paid to submit the transaction to the blockchain. The higher the fee, the more data was processed for the transaction to be successful"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Signer"),": one or more addresses that submit the transaction, and sign off on the changes that take place. If no feepayer grant is present, then the first signer pays the fee"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Status"),": ",(0,r.kt)("strong",{parentName:"li"},"Success")," if no errors occurred processing the transaction, or ",(0,r.kt)("strong",{parentName:"li"},"Failed")," if an error occurred processing the transaction"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Timestamp"),": the timestamp taken from the block that holds the transaction")),(0,r.kt)("h2",{id:"detail"},"Detail"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Transaction Detail overview",src:a(988).Z,width:"2736",height:"1436"})),(0,r.kt)("p",null,"Each transaction row in the listview links through to a detail page. Here you will see more information about the transaction, including additional signers, memo information, and message details."),(0,r.kt)("p",null,"Information to note:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Messages"),": the messages are an infinite scrolling listview. Each message shows the messgae object as it was submitted with the transaction."," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Tx Type"),": a filter exists to show only specific message types within the transaction, as a transaction can have one to many messages"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},'"Show full transaction JSON"'),": this is a clickable message that opens a window showing the full JSON for the transaction. Here you can dive deeper into the resulting logs of a transaction. Example:")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Collapsible box showing the full JSON for a transaction",src:a(3889).Z,width:"2752",height:"1272"})),(0,r.kt)("h2",{id:"forthcoming"},"Forthcoming"),(0,r.kt)("p",null,"As we glean more information from the blockchain, additional features may include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A feepayer field to show who actually paid the transaction fee"),(0,r.kt)("li",{parentName:"ul"},"Resulting event logs to show results of a transaction message")))}h.isMDXComponent=!0},988:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tx-detail-9de551a7d6503edd66fb3ef5a2ae1bbd.png"},5071:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tx-list-74e829e8cc1715fd7dc5ffce8aff60dc.png"},3889:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tx-raw-details-625370db80715e9bc43ab6272ca1cd1f.png"}}]);