"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[2206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return n?o.createElement(h,s(s({ref:t},p),{},{components:n})):o.createElement(h,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8677:(e,t,n)=>{n.d(t,{Y:()=>r});var o=n(7294);const r=e=>{let{text:t}=e;return o.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},t)}},8466:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(3905)),a=n(8677);const s={},i="Inherited Modules",l={unversionedId:"pb/modules/inherited-modules",id:"pb/modules/inherited-modules",title:"Inherited Modules",description:"The Cosmos SDK, on which the Provenance Blockchain application is based, provides several core modules. Those modules define most of the logic of blockchain applications. Developers compose modules together using the Cosmos SDK to build their custom application-specific blockchains - our Provenance Blockchain is such an application-specific blockchain.",source:"@site/docs/pb/modules/inherited-modules.md",sourceDirName:"pb/modules",slug:"/pb/modules/inherited-modules",permalink:"/provenance-docs/docs/pb/modules/inherited-modules",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"modules",permalink:"/provenance-docs/docs/pb/modules/"},next:{title:"Metadata",permalink:"/provenance-docs/docs/pb/modules/metadata-module"}},c={},p=[],m={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"inherited-modules"},"Inherited Modules"),(0,r.kt)(a.Y,{text:"Modules inherited from the community",mdxType:"DocSubheader"}),(0,r.kt)("p",null,"The Cosmos SDK, on which the Provenance Blockchain application is based, provides several core modules. Those modules define most of the logic of blockchain applications. Developers compose modules together using the Cosmos SDK to build their custom application-specific blockchains - our Provenance Blockchain is such an application-specific blockchain."),(0,r.kt)("p",null,"The Provenance Blockchain inherits the following core Cosmos SDK Modules:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/master/modules/auth/"},(0,r.kt)("strong",{parentName:"a"},"Auth"))," - Authentication of accounts and transactions."),(0,r.kt)("li",{parentName:"ul"},"*","*","*","*",(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/master/modules/bank/"},(0,r.kt)("strong",{parentName:"a"},"Bank"))," - Token transfer functionalities."),(0,r.kt)("li",{parentName:"ul"},"*","*","*","*",(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/master/modules/capability/"},(0,r.kt)("strong",{parentName:"a"},"Capability"))," - Object capability implementation."),(0,r.kt)("li",{parentName:"ul"},"*","*","*","*",(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/master/modules/crisis/"},(0,r.kt)("strong",{parentName:"a"},"Crisis"))," - Halting the blockchain under certain circumstances ","(","e.g. if an invariant is broken",")","."),(0,r.kt)("li",{parentName:"ul"},"*","*","*","*",(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/master/modules/distribution/"},(0,r.kt)("strong",{parentName:"a"},"Distribution"))," - Fee distribution, and staking token provision distribution."),(0,r.kt)("li",{parentName:"ul"},"*","*","*","*",(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/master/modules/evidence/"},(0,r.kt)("strong",{parentName:"a"},"Evidence"))," - Evidence handling for double signing, misbehavior, etc."),(0,r.kt)("li",{parentName:"ul"},"*","*","*","*",(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/master/modules/gov/"},(0,r.kt)("strong",{parentName:"a"},"Governance"))," - On-chain proposals and voting."),(0,r.kt)("li",{parentName:"ul"},"*","*","*","*",(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/master/modules/ibc/"},(0,r.kt)("strong",{parentName:"a"},"IBC"))," - IBC protocol for transport, authentication and ordering."),(0,r.kt)("li",{parentName:"ul"},"*","*","*","*",(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/master/modules/ibc/"},(0,r.kt)("strong",{parentName:"a"},"IBC Transfer"))," - Cross-chain fungible token transfer implementation through IBC."),(0,r.kt)("li",{parentName:"ul"},"*","*","*","*",(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/master/modules/mint/"},(0,r.kt)("strong",{parentName:"a"},"Mint"))," - Creation of new units of staking token ","(","currently set to 0% inflation",")","."),(0,r.kt)("li",{parentName:"ul"},"*","*","*","*",(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/master/modules/params/"},(0,r.kt)("strong",{parentName:"a"},"Params"))," - Globally available parameter store for modules that supports Governance based configuration and management."),(0,r.kt)("li",{parentName:"ul"},"*","*","*","*",(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/master/modules/slashing/"},(0,r.kt)("strong",{parentName:"a"},"Slashing"))," - Validator punishment mechanisms."),(0,r.kt)("li",{parentName:"ul"},"*","*","*","*",(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/master/modules/staking/"},(0,r.kt)("strong",{parentName:"a"},"Staking"))," - Proof-of-Stake layer for public blockchains."),(0,r.kt)("li",{parentName:"ul"},"*","*","*","*",(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/master/modules/upgrade/"},(0,r.kt)("strong",{parentName:"a"},"Upgrade"))," - Software upgrades handling and coordination.")))}u.isMDXComponent=!0}}]);