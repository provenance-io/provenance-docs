"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[5426],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,d=u["".concat(c,".").concat(f)]||u[f]||h[f]||a;return r?n.createElement(d,i(i({ref:t},l),{},{components:r})):n.createElement(d,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4808:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},i="Data Sharing with Portfolio Manager",s={unversionedId:"learn/provenance-applications/loan-origination-system-los/data-sharing-with-portfolio-manager",id:"learn/provenance-applications/loan-origination-system-los/data-sharing-with-portfolio-manager",title:"Data Sharing with Portfolio Manager",description:"Figure manages and trades its loans on the Figure Portfolio Manager and Marketplace. To allow these applications to read the loan data in the LOS P8e object store, the LOS has to \u201cshare\u201d the data by permissioning the public keys for the other applications. When P8e scopes are permissioned to another public key, the P8e environment takes care of replicating the data to the encrypted object store of the other application. Future mutations of the scope through contract execution will also be replicated to keys that are permissioned to read the scope.",source:"@site/docs/learn/provenance-applications/loan-origination-system-los/data-sharing-with-portfolio-manager.md",sourceDirName:"learn/provenance-applications/loan-origination-system-los",slug:"/learn/provenance-applications/loan-origination-system-los/data-sharing-with-portfolio-manager",permalink:"/provenance-docs/docs/learn/provenance-applications/loan-origination-system-los/data-sharing-with-portfolio-manager",draft:!1,tags:[],version:"current",frontMatter:{}},c={},p=[],l={toc:p};function h(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-sharing-with-portfolio-manager"},"Data Sharing with Portfolio Manager"),(0,o.kt)("p",null,"Figure manages and trades its loans on the ",(0,o.kt)("a",{parentName:"p",href:"https://figure.com/portfolio"},"Figure Portfolio Manager")," and Marketplace. To allow these applications to read the loan data in the LOS P8e object store, the LOS has to \u201cshare\u201d the data by permissioning the public keys for the other applications. When P8e scopes are permissioned to another public key, the P8e environment takes care of replicating the data to the encrypted object store of the other application. Future mutations of the scope through contract execution will also be replicated to keys that are permissioned to read the scope."))}h.isMDXComponent=!0}}]);