(self.webpackChunk=self.webpackChunk||[]).push([[8071],{4757:(e,t,r)=>{const n=r(7294);const a=n.forwardRef((function({title:e,titleId:t,...r},a){return n.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},r),e?n.createElement("title",{id:t},e):null,n.createElement("path",{fillRule:"evenodd",d:"M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94a3.75 3.75 0 105.304 5.303l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a5.25 5.25 0 11-7.424-7.424l10.939-10.94a3.75 3.75 0 115.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 015.91 15.66l7.81-7.81a.75.75 0 011.061 1.06l-7.81 7.81a.75.75 0 001.054 1.068L18.97 6.84a2.25 2.25 0 000-3.182z",clipRule:"evenodd"}))}));e.exports=a},3905:(e,t,r)=>{"use strict";r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,f=u["".concat(o,".").concat(d)]||u[d]||m[d]||c;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<c;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8380:(e,t,r)=>{"use strict";r.d(t,{P:()=>i});var n=r(7294),a=r(4757);const c=()=>n.createElement("div",{className:"bg-gray-200 w-8 h-5 rounded-sm animate-pulse"}),i=e=>{let{text:t,url:r}=e;const[i,l]=(0,n.useState)(null),[o,s]=(0,n.useState)(null);return(0,n.useEffect)((()=>{fetch(r).then((e=>e.blob())).then((e=>{let t=`${e.size} bytes`;e.size>1e3&&(t=`${Math.round(e.size/1e3)}KB`),e.size>1e6&&(t=`${Math.round(e.size/1e6)}MB`),e.size>1e9&&(t=`${Math.round(e.size/1e9)}GB`),e.size>1e9&&(t=`${Math.round(e.size/1e12)}TB`),l(t),s(e.type.replace(/(application|audio|font|example|image|message|model|multipart|text|video)\//,""))}))}),[r]),n.createElement("a",{className:"pagination-nav__link text-gray-500 hover:text-gray-500",href:r,target:"_blank",rel:"noreferrer"},n.createElement("div",{className:"flex items-center gap-2"},n.createElement(a,{className:"w-10 h-10 bg-gray-100 p-2 rounded-sm"}),n.createElement("div",{className:"flex flex-col"},n.createElement("div",{className:"flex gap-4"},n.createElement("span",{className:"text-gray-900"},t),n.createElement("span",null,i||n.createElement(c,null))),n.createElement("span",{className:"uppercase"},o||n.createElement(c,null)))))}},2758:(e,t,r)=>{"use strict";r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),c=r(8380);const i={},l="Blockchain Impact On Credit Ratings",o={unversionedId:"learn/whitepapers/blockchain-impact-on-credit-ratings",id:"learn/whitepapers/blockchain-impact-on-credit-ratings",title:"Blockchain Impact On Credit Ratings",description:"<FileLink",source:"@site/docs/learn/whitepapers/blockchain-impact-on-credit-ratings.md",sourceDirName:"learn/whitepapers",slug:"/learn/whitepapers/blockchain-impact-on-credit-ratings",permalink:"/docs/learn/whitepapers/blockchain-impact-on-credit-ratings",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[],u={toc:p},m="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(m,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"blockchain-impact-on-credit-ratings"},"Blockchain Impact On Credit Ratings"),(0,a.kt)(c.P,{text:"Investment Fund Services on Provenance.pdf",url:"/whitepapers/Blockchain Impact On Credit Ratings.pdf",mdxType:"FileLink"}))}d.isMDXComponent=!0}}]);