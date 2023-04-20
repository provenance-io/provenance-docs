"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6195],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return n?r.createElement(f,s(s({ref:t},u),{},{components:n})):r.createElement(f,s({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[d]="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},898:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},s="Account (Address)",i={unversionedId:"discover/explorer/ui-walkthrough/account-address",id:"discover/explorer/ui-walkthrough/account-address",title:"Account (Address)",description:"An address is your identifier on the blockchain. You can think or it as an account number, but more difficult to guess. By searching for a specific address, you can view assets held by the address, proposals voted on, and delegations made.",source:"@site/docs/discover/explorer/ui-walkthrough/account-address.md",sourceDirName:"discover/explorer/ui-walkthrough",slug:"/discover/explorer/ui-walkthrough/account-address",permalink:"/docs/discover/explorer/ui-walkthrough/account-address",draft:!1,tags:[],version:"current",frontMatter:{}},c={},l=[{value:"Detail",id:"detail",level:2},{value:"Account Assets",id:"account-assets",level:2},{value:"Account Transactions",id:"account-transactions",level:2},{value:"Forthcoming",id:"forthcoming",level:2}],u={toc:l},d="wrapper";function p(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"account-address"},"Account (Address)"),(0,a.kt)("p",null,"An address is your identifier on the blockchain. You can think or it as an account number, but more difficult to guess. By searching for a specific address, you can view assets held by the address, proposals voted on, and delegations made."),(0,a.kt)("p",null,"Addresses are only searchable by specific address via the search function, or by following through a linked address."),(0,a.kt)("h2",{id:"detail"},"Detail"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(7510).Z,width:"2770",height:"580"})),(0,a.kt)("p",null,"Information to note:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Account Name"),": currently only applies to ",(0,a.kt)("strong",{parentName:"li"},"ModuleAccount")," types, this helps identify what the account is for"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Sequence"),": the current number of transactions the address has submitted to the blockchain. This helps maintain order of transactions and acts as a check when an address is submitting a lot of transactions in short order"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Fungible Tokens"),": the number of distinct tokens the address holds a balance for"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Non-Fungible Tokens"),": the number of NFTs the address holds. Currently seen as ",(0,a.kt)("a",{parentName:"li",href:"/docs/pb/modules/metadata-module"},"Scopes"))),(0,a.kt)("h2",{id:"account-assets"},"Account Assets"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(603).Z,width:"1724",height:"380"})),(0,a.kt)("p",null,"A list of fungible tokens held by the address."," "),(0,a.kt)("h2",{id:"account-transactions"},"Account Transactions"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(799).Z,width:"2768",height:"786"})),(0,a.kt)("p",null,"A list of transactions that involve the address, either as a party within the transaction, or as the signer on a transaction. The list is filterable by ",(0,a.kt)("strong",{parentName:"p"},"Tx Message Type")," and ",(0,a.kt)("strong",{parentName:"p"},"Status"),"."," "),(0,a.kt)("h2",{id:"forthcoming"},"Forthcoming"),(0,a.kt)("p",null,"As we glean more information from the blockchain, additional features may include:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Delegations"),(0,a.kt)("li",{parentName:"ul"},"Unbondings"),(0,a.kt)("li",{parentName:"ul"},"Rewards"),(0,a.kt)("li",{parentName:"ul"},"Attributes")))}p.isMDXComponent=!0},603:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/account-assets-0375dfc75d928e591630551daca458a6.png"},7510:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/account-detail-894184b6cbeec20e0e664ef53ba0e694.png"},799:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/account-tx-29acd8fc5f950faf3ea0288859593954.png"}}]);