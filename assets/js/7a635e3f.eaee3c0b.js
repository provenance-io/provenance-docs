"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9346],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),l=s(r),h=n,f=l["".concat(p,".").concat(h)]||l[h]||u[h]||o;return r?a.createElement(f,c(c({ref:t},m),{},{components:r})):a.createElement(f,c({ref:t},m))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[l]="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},5890:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={},c="Quick Start: Write a Smart Contract",i={unversionedId:"quick-start/write-a-smart-contract",id:"quick-start/write-a-smart-contract",title:"Quick Start: Write a Smart Contract",description:"Smart Contracts on Provenance Blockchain are written in Rust and are executed using the",source:"@site/docs/quick-start/write-a-smart-contract.md",sourceDirName:"quick-start",slug:"/quick-start/write-a-smart-contract",permalink:"/docs/quick-start/write-a-smart-contract",draft:!1,tags:[],version:"current",frontMatter:{}},p={},s=[{value:"Get Started",id:"get-started",level:2}],m={toc:s},l="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(l,(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"quick-start-write-a-smart-contract"},"Quick Start: Write a Smart Contract"),(0,n.kt)("p",null,"Smart Contracts on Provenance Blockchain are written in ",(0,n.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/"},(0,n.kt)("strong",{parentName:"a"},"Rust"))," and are executed using the\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/provwasm"},(0,n.kt)("strong",{parentName:"a"},"ProvWasm"))," smart contracting platform. ProvWasm is an extension of the\n",(0,n.kt)("a",{parentName:"p",href:"https://cosmwasm.com/"},"CosmWasm")," environment and includes bindings for ",(0,n.kt)("a",{parentName:"p",href:"/docs/pb/modules"},"Provenance Modules"),".\nThe ProvWasm/CosmWasm platform allows smart contracts to be executed in\n",(0,n.kt)("a",{parentName:"p",href:"https://interchain-io.medium.com/virtual-machines-take-off-in-the-cosmos-3d11bd6ae942"},"WebAssembly (WASM) virtual machines (VMs) in the Cosmos SDK"),"."),(0,n.kt)("h2",{id:"get-started"},"Get Started"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"We recommend following the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/provwasm/blob/main/docs/tutorial/01-overview.md"},(0,n.kt)("strong",{parentName:"a"},"ProvWasm Tutorial")),",\nwhich will walk you through the process of building and deploying a smart contract step-by-step.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Read through the ",(0,n.kt)("a",{parentName:"p",href:"/docs/pb/modules/provwasm-smart-contracts"},(0,n.kt)("strong",{parentName:"a"},"ProvWasm Documentation")),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"If you are new to the Rust programming language, the ",(0,n.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/book/"},"Rust Book")," is an excellent resource.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Read about one developer's experience learning Provenance smart contracts in\n",(0,n.kt)("a",{parentName:"p",href:"https://medium.com/provenanceblockchain/going-from-zero-to-de-niro-building-a-provenance-smart-contract-when-you-know-nothing-19a676430bfb"},(0,n.kt)("em",{parentName:"a"},"Going from Zero to De Niro \u2014 Building a Provenance smart contract when you know NOTHING")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Browse the ",(0,n.kt)("a",{parentName:"p",href:"/docs/discover/smart-contract-catalog"},(0,n.kt)("strong",{parentName:"a"},"Provenance Smart Contract Catalog"))," for examples that may be\nsimilar to your use case.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/how-to-provenance"},"How-To-Provenance")," GitHub repo contains more useful\ncases, including examples of:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/provenance-io/how-to-provenance/tree/main/bilateral-trade-example"},"How to execute a contract")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/provenance-io/how-to-provenance/tree/main/provenance-smart-contract-example"},"How to build and deploy a contract")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/provenance-io/how-to-provenance/tree/main/provenance-contract-migration-example"},"How to migrate a contract for a blockchain upgrade"))))))}u.isMDXComponent=!0}}]);