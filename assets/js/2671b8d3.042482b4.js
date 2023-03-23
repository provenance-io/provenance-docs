"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4571],{3905:(e,t,o)=>{o.d(t,{Zo:()=>i,kt:()=>p});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var u=r.createContext({}),c=function(e){var t=r.useContext(u),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},i=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),d=c(o),p=n,f=d["".concat(u,".").concat(p)]||d[p]||m[p]||a;return o?r.createElement(f,l(l({ref:t},i),{},{components:o})):r.createElement(f,l({ref:t},i))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,l=new Array(a);l[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<a;c++)l[c]=o[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},8677:(e,t,o)=>{o.d(t,{Y:()=>n});var r=o(7294);const n=e=>{let{text:t}=e;return r.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},t)}},5765:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>i});var r=o(7462),n=(o(7294),o(3905)),a=o(8677);const l={},s="Provenance Modules",u={unversionedId:"pb/modules/modules",id:"pb/modules/modules",title:"Provenance Modules",description:"Modules are the code components of the Provenance Blockchain that execute the majority of the business logic for our applications. The Cosmos SDK enables developers to build modules that utilize the core structure of the SDK to allow the modules to function together. To read more about creating modules, refer to the Cosmos documentation on modules.",source:"@site/docs/pb/modules/modules.md",sourceDirName:"pb/modules",slug:"/pb/modules/",permalink:"/docs/pb/modules/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Running a mainnet node",permalink:"/docs/pb/blockchain/running-a-node/running-a-node-1/running-a-mainnet-node"},next:{title:"Cosmos Modules",permalink:"/docs/pb/modules/cosmos-modules"}},c={},i=[],m={toc:i};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"provenance-modules"},"Provenance Modules"),(0,n.kt)(a.Y,{text:"Powering the logic of applications.",mdxType:"DocSubheader"}),(0,n.kt)("p",null,"Modules are the code components of the Provenance Blockchain that execute the majority of the business logic for our applications. The ",(0,n.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main"},"Cosmos SDK")," enables developers to build modules that utilize the core structure of the SDK to allow the modules to function together. To read more about creating modules, refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/building-modules/intro"},"Cosmos documentation on modules"),"."),(0,n.kt)("p",null,"Provenance uses inherited modules from the Cosmos SDK, and has also developed modules that are specific to Provenance."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/pb/modules/inherited-modules"},"Inherited modules")),(0,n.kt)("li",{parentName:"ul"},"Provenance specific modules:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/pb/modules/metadata-module"},"Metadata")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/pb/modules/marker-module"},"Marker")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/pb/modules/account"},"Attribute")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/pb/modules/name-module"},"Name"))))))}d.isMDXComponent=!0}}]);