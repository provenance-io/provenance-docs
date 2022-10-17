"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[857],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>u});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),d=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(p.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),g=d(t),u=o,h=g["".concat(p,".").concat(u)]||g[u]||l[u]||a;return t?r.createElement(h,i(i({ref:n},s),{},{components:t})):r.createElement(h,i({ref:n},s))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=g;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var d=2;d<a;d++)i[d]=t[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},8677:(e,n,t)=>{t.d(n,{Y:()=>o});var r=t(7294);const o=e=>{let{text:n}=e;return r.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},n)}},1174:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var r=t(7462),o=(t(7294),t(3905)),a=t(8677);const i={},c="API Usage Guide",p={unversionedId:"pb/integrating/integrating-with-p8e/loan-onboarding-service/api-usage-guide/index",id:"pb/integrating/integrating-with-p8e/loan-onboarding-service/api-usage-guide/index",title:"API Usage Guide",description:'<DocSubheader text="How to onboard a loan"',source:"@site/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-usage-guide/index.md",sourceDirName:"pb/integrating/integrating-with-p8e/loan-onboarding-service/api-usage-guide",slug:"/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-usage-guide/",permalink:"/provenance-docs/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-usage-guide/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"p8e CEE API",permalink:"/provenance-docs/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/"},next:{title:"Loan Onboarding",permalink:"/provenance-docs/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-usage-guide/loan-onboarding"}},d={},s=[],l={toc:s};function g(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"api-usage-guide"},"API Usage Guide"),(0,o.kt)(a.Y,{text:"How to onboard a loan",mdxType:"DocSubheader"}),(0,o.kt)("p",null,"At this point you've hopefully looked under the covers at the Loan Package data model and some of the p8e contract specifications. Whether you're operating your own p8e Contract Execution Environment locally, playing around in the sandbox environment, or ready to onboard a loan to mainnet, the following pages will help connect the dots and point you in the right direction."),(0,o.kt)("p",null,"Loan Originators, or their Loan Origination System providers, should read about Loan Onboarding and making a Validation Request. The first page will walk through the steps of recording a loan to Provenance Blockchain for the first time, while the second will cover an update to the Loan Package where data and documents are shared with a third-party validation services provider."),(0,o.kt)("p",null,"Third-Party Validators should read the second and third page to both understand what data the validation requester is putting on p8e and how to respond with results, respectively."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Executing a transaction on any blockchain network is an asynchronous process, and Provenance Blockchain is no different. There will be time between sending a transaction proposal to the memory pool and that transaction being picked up and inserted into a block that gets written to the Provenance Blockchain chain. Be sure to check out the Error Handling page for more information on common"," ")))}g.isMDXComponent=!0}}]);