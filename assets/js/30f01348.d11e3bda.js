"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5426],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(r),f=a,d=u["".concat(s,".").concat(f)]||u[f]||h[f]||n;return r?o.createElement(d,i(i({ref:t},p),{},{components:r})):o.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<n;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4808:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=r(7462),a=(r(7294),r(3905));const n={},i="Data Sharing with Portfolio Manager",l={unversionedId:"learn/provenance-applications/loan-origination-system-los/data-sharing-with-portfolio-manager",id:"learn/provenance-applications/loan-origination-system-los/data-sharing-with-portfolio-manager",title:"Data Sharing with Portfolio Manager",description:"Figure manages and trades its loans on the Figure Portfolio Manager and Marketplace. To allow these applications to read the loan data in the LOS BlockVault object store, the LOS has to \u201cshare\u201d the data by permissioning the public keys for the other applications. When BlockVault scopes are permissioned to another public key, the BlockVault environment takes care of replicating the data to the encrypted object store of the other application. Future mutations of the scope through contract execution will also be replicated to keys that are permissioned to read the scope.",source:"@site/docs/learn/provenance-applications/loan-origination-system-los/data-sharing-with-portfolio-manager.md",sourceDirName:"learn/provenance-applications/loan-origination-system-los",slug:"/learn/provenance-applications/loan-origination-system-los/data-sharing-with-portfolio-manager",permalink:"/docs/learn/provenance-applications/loan-origination-system-los/data-sharing-with-portfolio-manager",draft:!1,tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c};function h(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"data-sharing-with-portfolio-manager"},"Data Sharing with Portfolio Manager"),(0,a.kt)("p",null,"Figure manages and trades its loans on the ",(0,a.kt)("a",{parentName:"p",href:"https://figure.com/portfolio"},"Figure Portfolio Manager")," and Marketplace. To allow these applications to read the loan data in the LOS BlockVault object store, the LOS has to \u201cshare\u201d the data by permissioning the public keys for the other applications. When BlockVault scopes are permissioned to another public key, the BlockVault environment takes care of replicating the data to the encrypted object store of the other application. Future mutations of the scope through contract execution will also be replicated to keys that are permissioned to read the scope."))}h.isMDXComponent=!0}}]);