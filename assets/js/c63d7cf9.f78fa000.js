"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5134],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},s),{},{components:n})):a.createElement(h,o({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8892:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},o="Clients",l={unversionedId:"build/clients",id:"build/clients",title:"Clients",description:"The following tools allow for transacting and querying the Provenance Blockchain",source:"@site/docs/build/clients.md",sourceDirName:"build",slug:"/build/clients",permalink:"/docs/build/clients",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"buildSidebar",previous:{title:"Dev Environment",permalink:"/docs/build/dev-environment"},next:{title:"Libraries and APIs",permalink:"/docs/build/libraries"}},c={},p=[{value:"CLI",id:"cli",level:2},{value:"Kotlin",id:"kotlin",level:2},{value:"Javascript",id:"javascript",level:2},{value:"GRPC clients in other languages",id:"grpc-clients-in-other-languages",level:2}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"clients"},"Clients"),(0,r.kt)("p",null,"The following tools allow for ",(0,r.kt)("a",{parentName:"p",href:"/docs/pb/blockchain/basics/transaction-lifecycle"},"transacting")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/pb/blockchain/basics/query-lifecycle"},"querying")," the Provenance Blockchain"),(0,r.kt)("h2",{id:"cli"},"CLI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/pb/blockchain/running-a-node/"},"provenanced")," Provenance Blockchain is wrapped into a single executable named ",(0,r.kt)("inlineCode",{parentName:"p"},"provenanced"),". All interaction (whether creating a node, querying, or invoking actions) with Provenance Blockchain can be accomplished using the ",(0,r.kt)("inlineCode",{parentName:"p"},"provenanced")," command. ",(0,r.kt)("a",{parentName:"p",href:"/docs/pb/blockchain/running-a-node/"},"Read more"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/fullstorydev/grpcurl"},"gRPCurl")," is an excellent command-line tool that can be used to interact with blockchain gRPC endpoints. Their ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fullstorydev/grpcurl#installation"},"installation")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fullstorydev/grpcurl#usage"},"usage")," documentation will help you get started quickly."))),(0,r.kt)("h2",{id:"kotlin"},"Kotlin"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/provenance-io/pb-grpc-client-kotlin"},"pb-grpc-client-kotlin")," is a client written in Kotlin and available for ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/provenance-io/pb-grpc-client-kotlin#installation"},"install")," via Maven or Gradle. The documentation includes help with ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/provenance-io/pb-grpc-client-kotlin#setup"},"setup"),", ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/provenance-io/pb-grpc-client-kotlin#query-usage"},"query usage")," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/provenance-io/pb-grpc-client-kotlin#transaction-usage"},"transaction usage"),".")),(0,r.kt)("h2",{id:"javascript"},"Javascript"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/wallet-utils"},"Wallet Utils")," Typescript Utilities for Provenance Blockchain Wallet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/provenance.js"},"Provenance.js")," The provenance.js library aims to be a complete and compact Javascript/TypeScript library for interacting with the Provenance Blockchain and its ecosystem."))),(0,r.kt)("h2",{id:"grpc-clients-in-other-languages"},"GRPC clients in other languages"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Using the ",(0,r.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/main/core/proto-docs.html"},"Cosmos")," and ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/provenance-io/provenance/blob/main/docs/proto-docs.md"},"Provenance")," protos you can build you own client in any language you want! Being a developer is kinda great that way. Go do it and let us know how it goes.")))}u.isMDXComponent=!0}}]);