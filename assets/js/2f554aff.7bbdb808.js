"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[2e3],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),i=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=i(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=i(t),d=a,v=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return t?r.createElement(v,l(l({ref:n},p),{},{components:t})):r.createElement(v,l({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=t[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4630:(e,n,t)=>{t.d(n,{P:()=>l});var r=t(7294);const a=r.forwardRef((function({title:e,titleId:n,...t},a){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true",ref:a,"aria-labelledby":n},t),e?r.createElement("title",{id:n},e):null,r.createElement("path",{fillRule:"evenodd",d:"M18.97 3.659a2.25 2.25 0 00-3.182 0l-10.94 10.94a3.75 3.75 0 105.304 5.303l7.693-7.693a.75.75 0 011.06 1.06l-7.693 7.693a5.25 5.25 0 11-7.424-7.424l10.939-10.94a3.75 3.75 0 115.303 5.304L9.097 18.835l-.008.008-.007.007-.002.002-.003.002A2.25 2.25 0 015.91 15.66l7.81-7.81a.75.75 0 011.061 1.06l-7.81 7.81a.75.75 0 001.054 1.068L18.97 6.84a2.25 2.25 0 000-3.182z",clipRule:"evenodd"}))})),o=()=>r.createElement("div",{className:"bg-gray-200 w-8 h-5 rounded-sm animate-pulse"}),l=e=>{let{text:n,url:t}=e;const[l,c]=(0,r.useState)(null),[s,i]=(0,r.useState)(null);return(0,r.useEffect)((()=>{fetch(t).then((e=>e.blob())).then((e=>{let n=e.size+" bytes";e.size>1e3&&(n=Math.round(e.size/1e3)+"KB"),e.size>1e6&&(n=Math.round(e.size/1e6)+"MB"),e.size>1e9&&(n=Math.round(e.size/1e9)+"GB"),e.size>1e9&&(n=Math.round(e.size/1e12)+"TB"),c(n),i(e.type.replace(/(application|audio|font|example|image|message|model|multipart|text|video)\//,""))}))}),[t]),r.createElement("a",{className:"pagination-nav__link text-gray-500 hover:text-gray-500",href:t,target:"_blank",rel:"noreferrer"},r.createElement("div",{className:"flex items-center gap-2"},r.createElement(a,{className:"w-10 h-10 bg-gray-100 p-2 rounded-sm"}),r.createElement("div",{className:"flex flex-col"},r.createElement("div",{className:"flex gap-4"},r.createElement("span",{className:"text-gray-900"},n),r.createElement("span",null,l||r.createElement(o,null))),r.createElement("span",{className:"uppercase"},s||r.createElement(o,null)))))}},4:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var r=t(7462),a=(t(7294),t(3905)),o=t(4630);const l={},c="Investment Fund Services on Provenance",s={unversionedId:"learn/whitepapers/investment-fund-services-on-provenance",id:"learn/whitepapers/investment-fund-services-on-provenance",title:"Investment Fund Services on Provenance",description:"<FileLink",source:"@site/docs/learn/whitepapers/investment-fund-services-on-provenance.md",sourceDirName:"learn/whitepapers",slug:"/learn/whitepapers/investment-fund-services-on-provenance",permalink:"/provenance-docs/docs/learn/whitepapers/investment-fund-services-on-provenance",draft:!1,tags:[],version:"current",frontMatter:{}},i={},p=[],u={toc:p};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"investment-fund-services-on-provenance"},"Investment Fund Services on Provenance"),(0,a.kt)(o.P,{text:"Investment Fund Services on Provenance.pdf",url:"/whitepapers/Investment%20Fund%20Services%20on%20Provenance.pdf",mdxType:"FileLink"}))}m.isMDXComponent=!0}}]);