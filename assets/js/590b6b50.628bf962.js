"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[270],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>b});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,s=e.parentName,d=a(e,["components","mdxType","originalType","parentName"]),u=p(r),b=o,f=u["".concat(s,".").concat(b)]||u[b]||l[b]||c;return r?n.createElement(f,i(i({ref:t},d),{},{components:r})):n.createElement(f,i({ref:t},d))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=u;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,i[1]=a;for(var p=2;p<c;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8677:(e,t,r)=>{r.d(t,{Y:()=>o});var n=r(7294);const o=e=>{let{text:t}=e;return n.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},t)}},3668:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(7462),o=(r(7294),r(3905)),c=r(8677);const i={},a="300 - Identity",s={unversionedId:"pb/contributing/adr/core-concepts/identity",id:"pb/contributing/adr/core-concepts/identity",title:"300 - Identity",description:'<DocSubheader text= "An overview of the concept of identities in the blockchain including system, user, organization, etc. Based on the concepts of Wallets, addresses, name service, etc defined previously."',source:"@site/docs/pb/contributing/adr/300-core-concepts/300-identity.md",sourceDirName:"pb/contributing/adr/300-core-concepts",slug:"/pb/contributing/adr/core-concepts/identity",permalink:"/docs/pb/contributing/adr/core-concepts/identity",draft:!1,tags:[],version:"current",sidebarPosition:300,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"300 Core Concepts",permalink:"/docs/pb/contributing/adr/core-concepts/"},next:{title:"301 - Hash",permalink:"/docs/pb/contributing/adr/core-concepts/hash"}},p={},d=[],l={toc:d};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"300---identity"},"300 - Identity"),(0,o.kt)(c.Y,{text:"An overview of the concept of identities in the blockchain including system, user, organization, etc. Based on the concepts of Wallets, addresses, name service, etc defined previously.",mdxType:"DocSubheader"}))}u.isMDXComponent=!0}}]);