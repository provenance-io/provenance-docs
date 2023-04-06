"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1335],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=n,h=u["".concat(l,".").concat(d)]||u[d]||p[d]||o;return r?a.createElement(h,s(s({ref:t},m),{},{components:r})):a.createElement(h,s({ref:t},m))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8677:(e,t,r)=>{r.d(t,{Y:()=>n});var a=r(7294);const n=e=>{let{text:t}=e;return a.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},t)}},9681:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var a=r(7462),n=(r(7294),r(3905)),o=r(8677);const s={},i="Smart Contracts (ProvWasm)",l={unversionedId:"pb/modules/provwasm-smart-contracts",id:"pb/modules/provwasm-smart-contracts",title:"Smart Contracts (ProvWasm)",description:"Overview",source:"@site/docs/pb/modules/provwasm-smart-contracts.md",sourceDirName:"pb/modules",slug:"/pb/modules/provwasm-smart-contracts",permalink:"/docs/pb/modules/provwasm-smart-contracts",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Name",permalink:"/docs/pb/modules/name-module"},next:{title:"Provenance IBC",permalink:"/docs/pb/modules/ibc-and-zones"}},c={},m=[{value:"Overview",id:"overview",level:2},{value:"Blockchain Extensions",id:"blockchain-extensions",level:3},{value:"Rust Bindings",id:"rust-bindings",level:2},{value:"Parameters",id:"parameters",level:3},{value:"API",id:"api",level:3},{value:"Mocks",id:"mocks",level:3},{value:"Integrations",id:"integrations",level:3},{value:"References",id:"references",level:2}],p={toc:m};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"smart-contracts-provwasm"},"Smart Contracts (ProvWasm)"),(0,n.kt)(o.Y,{text:"Web assembly (Wasm) smart contracts for the Provenance Blockchain.",mdxType:"DocSubheader"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"ProvWasm contains extensions for a third party blockchain module. These extensions, combined with a library, provide developers the ability to create web assembly smart contracts for the Provenance Blockchain using the Rust programming language."),(0,n.kt)("h3",{id:"blockchain-extensions"},"Blockchain Extensions"),(0,n.kt)("p",null,"The CosmWasm VM only integrates with the ",(0,n.kt)("inlineCode",{parentName:"p"},"banking")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"staking")," modules by default. However, it allows for adding custom encoders and queriers. A package was added in the Provenance Blockchain that contain extensions for the following Provenance Blockchain modules:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/pb/modules/attribute-module"},"Attribute")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/pb/modules/marker-module"},"Marker")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/pb/modules/name-module"},"Name")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/pb/modules/metadata-module"},"Metadata"))),(0,n.kt)("p",null,"These extensions are compiled into the blockchain at build time."),(0,n.kt)("h2",{id:"rust-bindings"},"Rust Bindings"),(0,n.kt)("p",null,"In order to provide a high quality smart contract developer experience, a Rust ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/provwasm"},"library")," was created to simplify calls to the Provenance Blockchain extensions."),(0,n.kt)("p",null,"The library can be broken down into the following components."),(0,n.kt)("h3",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,"The core of the rust library contains types that are passed to and received from Provenance Blockchain encoders and queriers. Special care must be taken to ensure the Rust types are compatible with Go types in the queriers and encoders. To support this, a semantic data format version is passed through with each message. This enables backward compatability in the blockchain extensions."),(0,n.kt)("h3",{id:"api"},"API"),(0,n.kt)("p",null,"A number of high-level functions and types were added to on top of the core parameters to simplify contract development. This will also provide a compatability layer - minimizing changes required to smart contracts when breaking changes are required in the blockchain extensions and core types."),(0,n.kt)("h3",{id:"mocks"},"Mocks"),(0,n.kt)("p",null,"One of the benefits of ProvWasm is that it allows for robust unit testing of smart contracts before deployment to the Provenance Blockchain. Using the types described above, a mock environment can be created so unit tests can run as if they are executing against a running blockchain. This allows developers to ensure their contracts are correct before having to pay fees to deploy to a network."),(0,n.kt)("h3",{id:"integrations"},"Integrations"),(0,n.kt)("p",null,"To ensure the library code works correctly with the blockchain extensions, smart contracts were developed for each custom module in provenance. These contracts can be deployed to a localnet ","(","or the testnet",")"," for integration testing."),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("p",null,"Smart contract technical reference documentation"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.cosmwasm.com/"},"CosmWasm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/wasmd/blob/master/INTEGRATION.md"},"CosmWasm CosmosSDK Integration"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/cosmwasm/blob/master/README.md"},"WebAssembly Smart Contracts for the Cosmos SDK")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/go-cosmwasm/blob/master/spec/Index.md"},"Go-CosmWasm Spec")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/wasmd/tree/master/x/wasm"},"CosmWasm Module Source")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/CosmWasm/cosmwasm/blob/master/EntryPoints.md"},"Defining WASM Entry Points"))))}u.isMDXComponent=!0}}]);