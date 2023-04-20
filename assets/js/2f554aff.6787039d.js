(self.webpackChunk=self.webpackChunk||[]).push([[2e3],{4757:(e,t,n)=>{const r=n(7294);const a=r.forwardRef((function({title:e,titleId:t,...n},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":t},n),e?r.createElement("title",{id:t},e):null,r.createElement("path",{fillRule:"evenodd",d:"M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94a3.75 3.75 0 105.304 5.303l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a5.25 5.25 0 11-7.424-7.424l10.939-10.94a3.75 3.75 0 115.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 015.91 15.66l7.81-7.81a.75.75 0 011.061 1.06l-7.81 7.81a.75.75 0 001.054 1.068L18.97 6.84a2.25 2.25 0 000-3.182z",clipRule:"evenodd"}))}));e.exports=a},3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=i(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8380:(e,t,n)=>{"use strict";n.d(t,{P:()=>l});var r=n(7294),a=n(4757);const o=()=>r.createElement("div",{className:"bg-gray-200 w-8 h-5 rounded-sm animate-pulse"}),l=e=>{let{text:t,url:n}=e;const[l,c]=(0,r.useState)(null),[s,i]=(0,r.useState)(null);return(0,r.useEffect)((()=>{fetch(n).then((e=>e.blob())).then((e=>{let t=`${e.size} bytes`;e.size>1e3&&(t=`${Math.round(e.size/1e3)}KB`),e.size>1e6&&(t=`${Math.round(e.size/1e6)}MB`),e.size>1e9&&(t=`${Math.round(e.size/1e9)}GB`),e.size>1e9&&(t=`${Math.round(e.size/1e12)}TB`),c(t),i(e.type.replace(/(application|audio|font|example|image|message|model|multipart|text|video)\//,""))}))}),[n]),r.createElement("a",{className:"pagination-nav__link text-gray-500 hover:text-gray-500",href:n,target:"_blank",rel:"noreferrer"},r.createElement("div",{className:"flex items-center gap-2"},r.createElement(a,{className:"w-10 h-10 bg-gray-100 p-2 rounded-sm"}),r.createElement("div",{className:"flex flex-col"},r.createElement("div",{className:"flex gap-4"},r.createElement("span",{className:"text-gray-900"},t),r.createElement("span",null,l||r.createElement(o,null))),r.createElement("span",{className:"uppercase"},s||r.createElement(o,null)))))}},4:(e,t,n)=>{"use strict";n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),o=n(8380);const l={},c="Investment Fund Services on Provenance",s={unversionedId:"learn/whitepapers/investment-fund-services-on-provenance",id:"learn/whitepapers/investment-fund-services-on-provenance",title:"Investment Fund Services on Provenance",description:"<FileLink",source:"@site/docs/learn/whitepapers/investment-fund-services-on-provenance.md",sourceDirName:"learn/whitepapers",slug:"/learn/whitepapers/investment-fund-services-on-provenance",permalink:"/docs/learn/whitepapers/investment-fund-services-on-provenance",draft:!1,tags:[],version:"current",frontMatter:{}},i={},p=[],u={toc:p},m="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"investment-fund-services-on-provenance"},"Investment Fund Services on Provenance"),(0,a.kt)(o.P,{text:"Investment Fund Services on Provenance.pdf",url:"/whitepapers/Investment%20Fund%20Services%20on%20Provenance.pdf",mdxType:"FileLink"}))}d.isMDXComponent=!0}}]);