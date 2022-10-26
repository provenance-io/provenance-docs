"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[2985],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>b});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},l=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=p(t),b=o,f=l["".concat(s,".").concat(b)]||l[b]||d[b]||a;return t?r.createElement(f,c(c({ref:n},u),{},{components:t})):r.createElement(f,c({ref:n},u))}));function b(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=l;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}l.displayName="MDXCreateElement"},8677:(e,n,t)=>{t.d(n,{Y:()=>o});var r=t(7294);const o=e=>{let{text:n}=e;return r.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},n)}},8685:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>l,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var r=t(7462),o=(t(7294),t(3905)),a=t(8677);const c={},i="103 - Transaction Fees and Gas",s={unversionedId:"pb/contributing/adr/blockchain-configuration-and-concepts/transaction-fees-and-gas",id:"pb/contributing/adr/blockchain-configuration-and-concepts/transaction-fees-and-gas",title:"103 - Transaction Fees and Gas",description:'<DocSubheader text= "The controls associated with submitting a transaction to the network. Outlines how transaction fees are accrued in Gas, pricing controls, distribution of credits."',source:"@site/docs/pb/contributing/adr/100-blockchain-configuration-and-concepts/103-transaction-fees-and-gas.md",sourceDirName:"pb/contributing/adr/100-blockchain-configuration-and-concepts",slug:"/pb/contributing/adr/blockchain-configuration-and-concepts/transaction-fees-and-gas",permalink:"/provenance-docs/docs/pb/contributing/adr/blockchain-configuration-and-concepts/transaction-fees-and-gas",draft:!1,tags:[],version:"current",sidebarPosition:103,frontMatter:{},sidebar:"docs",previous:{title:"102 - Markers, Tokens, and Coins",permalink:"/provenance-docs/docs/pb/contributing/adr/blockchain-configuration-and-concepts/markers-tokens-and-coins"},next:{title:"200 Base Infrastructure",permalink:"/provenance-docs/docs/pb/contributing/adr/base-infrastructure/"}},p={},u=[],d={toc:u};function l(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"103---transaction-fees-and-gas"},"103 - Transaction Fees and Gas"),(0,o.kt)(a.Y,{text:"The controls associated with submitting a transaction to the network. Outlines how transaction fees are accrued in Gas, pricing controls, distribution of credits.",mdxType:"DocSubheader"}))}l.isMDXComponent=!0}}]);