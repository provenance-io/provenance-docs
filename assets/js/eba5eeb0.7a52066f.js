"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[1564],{3905:(e,r,t)=>{t.d(r,{Zo:()=>s,kt:()=>v});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=n.createContext({}),l=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(p.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=l(t),v=o,f=d["".concat(p,".").concat(v)]||d[v]||u[v]||a;return t?n.createElement(f,c(c({ref:r},s),{},{components:t})):n.createElement(f,c({ref:r},s))}));function v(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=d;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=t[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8677:(e,r,t)=>{t.d(r,{Y:()=>o});var n=t(7294);const o=e=>{let{text:r}=e;return n.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},r)}},5600:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>p,toc:()=>s});var n=t(7462),o=(t(7294),t(3905)),a=t(8677);const c={},i="Explorer as a Service",p={unversionedId:"discover/explorer/explorer-as-a-service/index",id:"discover/explorer/explorer-as-a-service/index",title:"Explorer as a Service",description:"Github repo//github.com/provenance-io/explorer-service",source:"@site/docs/discover/explorer/explorer-as-a-service/index.md",sourceDirName:"discover/explorer/explorer-as-a-service",slug:"/discover/explorer/explorer-as-a-service/",permalink:"/docs/discover/explorer/explorer-as-a-service/",draft:!1,tags:[],version:"current",frontMatter:{}},l={},s=[],u={toc:s};function d(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"explorer-as-a-service"},"Explorer as a Service"),(0,o.kt)(a.Y,{text:"EaaS: Explorer as a Service",mdxType:"DocSubheader"}),(0,o.kt)("p",null,"Github repo: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/explorer-service"},"https://github.com/provenance-io/explorer-service")),(0,o.kt)("p",null,"The service that sits behind the Explorer has 3 objectives:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"to ingest and process blockchain data;"),(0,o.kt)("li",{parentName:"ul"},"to aggregate and serve up responsive API queries;"),(0,o.kt)("li",{parentName:"ul"},"and to allow for correlation between data points as needed.")))}d.isMDXComponent=!0}}]);