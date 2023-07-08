(self.webpackChunk=self.webpackChunk||[]).push([[3578],{4757:(e,t,n)=>{const r=n(7294);const a=r.forwardRef((function({title:e,titleId:t,...n},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94a3.75 3.75 0 105.304 5.303l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a5.25 5.25 0 11-7.424-7.424l10.939-10.94a3.75 3.75 0 115.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 015.91 15.66l7.81-7.81a.75.75 0 011.061 1.06l-7.81 7.81a.75.75 0 001.054 1.068L18.97 6.84a2.25 2.25 0 000-3.182z",clipRule:"evenodd"}))}));e.exports=a},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),f=a,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8380:(e,t,n)=>{"use strict";n.d(t,{P:()=>i});var r=n(7294),a=n(4757);const o=()=>r.createElement("div",{className:"bg-gray-200 w-8 h-5 rounded-sm animate-pulse"}),i=e=>{let{text:t,url:n}=e;const[i,l]=(0,r.useState)(null),[c,p]=(0,r.useState)(null);return(0,r.useEffect)((()=>{fetch(n).then((e=>e.blob())).then((e=>{let t=`${e.size} bytes`;e.size>1e3&&(t=`${Math.round(e.size/1e3)}KB`),e.size>1e6&&(t=`${Math.round(e.size/1e6)}MB`),e.size>1e9&&(t=`${Math.round(e.size/1e9)}GB`),e.size>1e9&&(t=`${Math.round(e.size/1e12)}TB`),l(t),p(e.type.replace(/(application|audio|font|example|image|message|model|multipart|text|video)\//,""))}))}),[n]),r.createElement("a",{className:"pagination-nav__link text-gray-500 hover:text-gray-500",href:n,target:"_blank",rel:"noreferrer"},r.createElement("div",{className:"flex items-center gap-2"},r.createElement(a,{className:"w-10 h-10 bg-gray-100 p-2 rounded-sm"}),r.createElement("div",{className:"flex flex-col"},r.createElement("div",{className:"flex gap-4"},r.createElement("span",{className:"text-gray-900"},t),r.createElement("span",null,i||r.createElement(o,null))),r.createElement("span",{className:"uppercase"},c||r.createElement(o,null)))))}},7895:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),a=(n(7294),n(3905)),o=n(8380);const i={},l="Loan Participation On Provenance",c={unversionedId:"learn/whitepapers/loan-participation-on-provenance",id:"learn/whitepapers/loan-participation-on-provenance",title:"Loan Participation On Provenance",description:"<FileLink",source:"@site/docs/learn/whitepapers/loan-participation-on-provenance.md",sourceDirName:"learn/whitepapers",slug:"/learn/whitepapers/loan-participation-on-provenance",permalink:"/docs/learn/whitepapers/loan-participation-on-provenance",draft:!1,tags:[],version:"current",frontMatter:{}},p={},s=[],u={toc:s},m="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"loan-participation-on-provenance"},"Loan Participation On Provenance"),(0,a.kt)(o.P,{text:"Loan Participation On Provenance.pdf",url:"/whitepapers/Loan%20Participation%20On%20Provenance.pdf",mdxType:"FileLink"}))}f.isMDXComponent=!0}}]);