"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[2206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=a,h=u["".concat(c,".").concat(d)]||u[d]||m[d]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8677:(e,t,n)=>{n.d(t,{Y:()=>a});var o=n(7294);const a=e=>{let{text:t}=e;return o.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},t)}},8466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var o=n(7462),a=(n(7294),n(3905)),r=n(8677);const i={},s="Inherited Modules",c={unversionedId:"pb/modules/inherited-modules",id:"pb/modules/inherited-modules",title:"Inherited Modules",description:"The Cosmos SDK, on which the Provenance Blockchain application is based, provides several core modules. Those modules define most of the logic of blockchain applications. Developers compose modules together using the Cosmos SDK to build their custom application-specific blockchains - our Provenance Blockchain is such an application-specific blockchain.",source:"@site/docs/pb/modules/inherited-modules.md",sourceDirName:"pb/modules",slug:"/pb/modules/inherited-modules",permalink:"/provenance-docs/docs/pb/modules/inherited-modules",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Provenance Modules",permalink:"/provenance-docs/docs/pb/modules/"},next:{title:"Metadata",permalink:"/provenance-docs/docs/pb/modules/metadata-module"}},l={},p=[],m={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"inherited-modules"},"Inherited Modules"),(0,a.kt)(r.Y,{text:"Modules inherited from the community",mdxType:"DocSubheader"}),(0,a.kt)("p",null,"The Cosmos SDK, on which the Provenance Blockchain application is based, provides several core modules. Those modules define most of the logic of blockchain applications. Developers compose modules together using the Cosmos SDK to build their custom application-specific blockchains - our Provenance Blockchain is such an application-specific blockchain."),(0,a.kt)("p",null,"The Provenance Blockchain inherits the following core Cosmos SDK Modules:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/modules/auth/"},(0,a.kt)("strong",{parentName:"a"},"Auth"))," - Authentication of accounts and transactions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/modules/bank/"},(0,a.kt)("strong",{parentName:"a"},"Bank"))," - Token transfer functionalities."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/modules/capability/"},(0,a.kt)("strong",{parentName:"a"},"Capability"))," - Object capability implementation."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/modules/crisis/"},(0,a.kt)("strong",{parentName:"a"},"Crisis"))," - Halting the blockchain under certain circumstances ","(","e.g. if an invariant is broken",")","."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/modules/distribution/"},(0,a.kt)("strong",{parentName:"a"},"Distribution"))," - Fee distribution, and staking token provision distribution."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/modules/evidence/"},(0,a.kt)("strong",{parentName:"a"},"Evidence"))," - Evidence handling for double signing, misbehavior, etc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/modules/gov/"},(0,a.kt)("strong",{parentName:"a"},"Governance"))," - On-chain proposals and voting."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/modules/ibc/"},(0,a.kt)("strong",{parentName:"a"},"IBC"))," - IBC protocol for transport, authentication and ordering."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/modules/ibc/"},(0,a.kt)("strong",{parentName:"a"},"IBC Transfer"))," - Cross-chain fungible token transfer implementation through IBC."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/modules/mint/"},(0,a.kt)("strong",{parentName:"a"},"Mint"))," - Creation of new units of staking token ","(","currently set to 0% inflation",")","."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/modules/params/"},(0,a.kt)("strong",{parentName:"a"},"Params"))," - Globally available parameter store for modules that supports Governance based configuration and management."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/modules/slashing/"},(0,a.kt)("strong",{parentName:"a"},"Slashing"))," - Validator punishment mechanisms."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/modules/staking/"},(0,a.kt)("strong",{parentName:"a"},"Staking"))," - Proof-of-Stake layer for public blockchains."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/modules/upgrade/"},(0,a.kt)("strong",{parentName:"a"},"Upgrade"))," - Software upgrades handling and coordination.")))}u.isMDXComponent=!0}}]);