"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[4480],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),u=r,f=d["".concat(s,".").concat(u)]||d[u]||h[u]||o;return n?a.createElement(f,i(i({ref:t},p),{},{components:n})):a.createElement(f,i({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const o={},i="Provenance Blockchain (P8e) Contract Execution Environment",c={unversionedId:"pb/p8e/overview",id:"pb/p8e/overview",title:"Provenance Blockchain \\(P8e\\) Contract Execution Environment",description:"P8e was designed to directly integrate with the Provenance Blockchain Metadata Module to simplify generating signed records of an asset\u2019s Provenance Blockchain as either a single party or in conjunction with multiple interacting parties. At its core, P8e is a GRPC API that is invoked using a Kotlin SDK. The API processes data through a deterministic client side process that can be shared with other parties to transform data into a hashable format.",source:"@site/docs/pb/p8e/overview.md",sourceDirName:"pb/p8e",slug:"/pb/p8e/overview",permalink:"/docs/pb/p8e/overview",draft:!1,tags:[],version:"current",frontMatter:{}},s={},l=[{value:"Client Contracts",id:"client-contracts",level:2},{value:"<strong>Transaction Flow</strong>",id:"transaction-flow",level:2}],p={toc:l};function h(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"provenance-blockchain-p8e-contract-execution-environment"},"Provenance Blockchain ","(","P8e",")"," Contract Execution Environment"),(0,r.kt)("p",null,"P8e was designed to directly integrate with the Provenance Blockchain Metadata Module to simplify generating signed records of an asset\u2019s Provenance Blockchain as either a single party or in conjunction with multiple interacting parties. At its core, P8e is a GRPC API that is invoked using a Kotlin SDK. The API processes data through a deterministic client side process that can be shared with other parties to transform data into a hashable format."),(0,r.kt)("p",null,"Assets can be directly defined against the Metadata module, but the execution environment assists in the complex hashing of data, maintenance of immutable objects, and signature orchestration between multiple parties."),(0,r.kt)("h2",{id:"client-contracts"},"Client Contracts"),(0,r.kt)("p",null,"Client side contracts differ from Smart Contracts in that they keep your data private between parties off chain and allow a structure to record agreed upon state data to the blockchain. Smart contracts in comparison are running on the blockchain and require the validators to have access to the data which isn\u2019t a great solution for most consumer based transactions due to data privacy laws."),(0,r.kt)("h2",{id:"transaction-flow"},(0,r.kt)("strong",{parentName:"h2"},"Transaction Flow")),(0,r.kt)("p",null,"The following diagram outlines the flow of data for typical transactions proposed to Provenance Blockchain."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"tx-data-flow",src:n(5120).Z,width:"662",height:"800"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Affiliates utilize the Contract Execution Environment to submit contracts to create single or multi-party agreements."),(0,r.kt)("li",{parentName:"ol"},"The contracts and asset data are forwarded to all affiliates participating in the contract."),(0,r.kt)("li",{parentName:"ol"},"Each affiliate\u2019s Encrypted Object Store is updated with the encrypted asset data resulting in each participating affiliate having a copy of the asset data."),(0,r.kt)("li",{parentName:"ol"},"Using their copy of the asset data, each affiliate participating in the transaction executes the contracts."),(0,r.kt)("li",{parentName:"ol"},"The hashed results of the contract executions are returned to the submitting affiliate\u2019s execution environment."),(0,r.kt)("li",{parentName:"ol"},"All hashed execution results are sent to Provenance Blockchain."),(0,r.kt)("li",{parentName:"ol"},"The hashed results are validated by the validators. If the majority agree, the transaction is proposed to the blockchain."),(0,r.kt)("li",{parentName:"ol"},"Provenance Blockchain emits events notifying affiliates the contract has been committed on the blockchain."),(0,r.kt)("li",{parentName:"ol"},"The index is updated with the new contract information. This information is used later for searching and querying the data."),(0,r.kt)("li",{parentName:"ol"},"Affiliates acknowledge the completion event.")),(0,r.kt)("p",null,"For certain transactions, affiliates can also interact directly with Provenance Blockchain without utilizing or even needing a Contract Execution Environment. For example, markers are managed by directly interacting with Provenance Blockchain instead of executing contracts."))}h.isMDXComponent=!0},5120:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/provenance-p8e-txn-data-flow-dfc34d49faabae900880ba861e79825c.png"}}]);