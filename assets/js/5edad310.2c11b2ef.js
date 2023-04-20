"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4986],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function r(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=a.createContext({}),l=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(s.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},h=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=r(e,["components","mdxType","originalType","parentName"]),d=l(t),h=o,u=d["".concat(s,".").concat(h)]||d[h]||m[h]||i;return t?a.createElement(u,c(c({ref:n},p),{},{components:t})):a.createElement(u,c({ref:n},p))}));function u(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=h;var r={};for(var s in n)hasOwnProperty.call(n,s)&&(r[s]=n[s]);r.originalType=e,r[d]="string"==typeof e?e:o,c[1]=r;for(var l=2;l<i;l++)c[l]=t[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},8677:(e,n,t)=>{t.d(n,{Y:()=>o});var a=t(7294);const o=e=>{let{text:n}=e;return a.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},n)}},1144:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var a=t(7462),o=(t(7294),t(3905)),i=t(8677);const c={},r="Anatomy of the Provenance Blockchain Application",s={unversionedId:"pb/blockchain/basics/anatomy-of-a-provenance-application",id:"pb/blockchain/basics/anatomy-of-a-provenance-application",title:"Anatomy of the Provenance Blockchain Application",description:"In it's simplest form, Provenance Blockchain is an application-specific blockchain built on the Cosmos SDK. Thus, the anatomy described in this section is a derivative of the Cosmos Anatomy of an SDK Application document.",source:"@site/docs/pb/blockchain/basics/anatomy-of-a-provenance-application.md",sourceDirName:"pb/blockchain/basics",slug:"/pb/blockchain/basics/anatomy-of-a-provenance-application",permalink:"/docs/pb/blockchain/basics/anatomy-of-a-provenance-application",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Major Components",permalink:"/docs/pb/blockchain/introduction/major-components"},next:{title:"Transaction Lifecycle",permalink:"/docs/pb/blockchain/basics/transaction-lifecycle"}},l={},p=[{value:"Core Application",id:"core-application",level:2},{value:"Core State Machine Components",id:"core-state-machine-components",level:3},{value:"Node Resources",id:"node-resources",level:3},{value:"External Application Interfaces",id:"external-application-interfaces",level:3}],d={toc:p},m="wrapper";function h(e){let{components:n,...c}=e;return(0,o.kt)(m,(0,a.Z)({},d,c,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"anatomy-of-the-provenance-blockchain-application"},"Anatomy of the Provenance Blockchain Application"),(0,o.kt)(i.Y,{text:"Provenance Blockchain is an ecosystem for application-specific financial services blockchain applications.",mdxType:"DocSubheader"}),(0,o.kt)("p",null,"In it's simplest form, Provenance Blockchain is an ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/intro/why-app-specific.html"},"application-specific blockchain")," built on the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/intro/overview.html"},"Cosmos SDK.")," Thus, the anatomy described in this section is a derivative of the Cosmos ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/basics/app-anatomy.html"},"Anatomy of an SDK Application")," document."),(0,o.kt)("p",null,"The Provenance Blockchain SDK enables developers to build modules that implement the business logic of a financial services blockchain. In other words, SDK modules implement the bulk of the logic of the blockchain, while the core does the wiring and enables modules to be composed together. The end goal is to build a robust ecosystem of open-source SDK modules, making it increasingly easier to build complex blockchain applications."),(0,o.kt)("p",null,"While the Cosmos SDK documentation does a good job explaining the concepts of an application-specific blockchain, it is helpful to drill down into the core concepts and get hands-on. That's what this section aims to do."),(0,o.kt)("h2",{id:"core-application"},"Core Application"),(0,o.kt)("p",null,"The Provenance Blockchain core application-specific blockchain is effectively encompassed by the ",(0,o.kt)("inlineCode",{parentName:"p"},"provenanced")," binary - which is both a client and a daemon process. It is the core process of the Provenance Blockchain. Participants in the network run this process to host a node (initialize their state-machine), connect with other nodes, and update their state-machine as new blocks come in."),(0,o.kt)("p",null,"As shown in the Provenance Blockchain Node Components diagram, the Provenance Blockchain application-specific blockchain is composed of multiple components all running a single binary (",(0,o.kt)("inlineCode",{parentName:"p"},"provenanced"),") on a machine (node):"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Provenance Blockchain Node Components",src:t(9333).Z,width:"1354",height:"1072"})),(0,o.kt)("h3",{id:"core-state-machine-components"},"Core State Machine Components"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Tendermint BFT State Machine Replication")," component (again, compiled into the ",(0,o.kt)("inlineCode",{parentName:"p"},"provenanced")," binary) handles state machine replication, distribution, consensus, and networking."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"Provenance Blockchain SDK"),", built on top of the Cosmos SDK, manages a state-machine and key-value store. The Provenanced SDK ",(0,o.kt)("a",{parentName:"p",href:"/docs/pb/modules/cosmos-modules"},"includes base modules from the Cosmos SDK")," as well as custom modules like ",(0,o.kt)("a",{parentName:"p",href:"/docs/pb/modules/metadata-module"},"Metadata")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/pb/modules/marker-module"},"Marker")," for financial-services related functionality. The Provenance Blockchain SDK component communicates with ",(0,o.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/master/spec/abci/#abci"},"Tendermint using the ABCI"),". ABCI is a Tendermint construct and serves as the interface between Tendermint (a state-machine replication engine) and the Provenance Blockchain application (the actual state machine and blockchain implementation)."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"provenanced")," binary encapsulates the Provenance Blockchain SDK (and inheritied Cosmos SDK) and Tendermint engine. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/run-node/cosmovisor.html"},"Cosmovisor")," is a small process manager around ",(0,o.kt)("inlineCode",{parentName:"p"},"provenanced")," that monitors the governance module via stdout to see if there's a chain upgrade proposal coming in. If it sees a proposal that gets approved it can be run manually or automatically to download the new code, stop the node, run the migration script, replace the node binary, and start with the new genesis file."),(0,o.kt)("h3",{id:"node-resources"},"Node Resources"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"provenanced")," binary also communicates with and manages external (to the binary) components on the node including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"Keyring"),' backend which holds the private/public keypairs used to interact with a node. For instance, a validator key needs to be set up before running the blockchain node so that blocks can be correctly signed. The private key can be stored in different locations, called "backends". Backends may include a file, the operating system\'s own key storage, or a Hardware Security Module (preferred for Validators).'),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Config Files")," and ",(0,o.kt)("strong",{parentName:"li"},"Genesis App")," files that define the specific configuration settings of the node and genesis data consumed and stored as part of the blockchain node during initial startup."),(0,o.kt)("li",{parentName:"ul"},"An ",(0,o.kt)("strong",{parentName:"li"},"Upgrades")," directory used by the ",(0,o.kt)("inlineCode",{parentName:"li"},"cosmovisor")," process manager during chain upgrades."),(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("strong",{parentName:"li"},"Data")," directory where blockchain state is stored. This is effectively the key-value storage used by the core application and modules.")),(0,o.kt)("h3",{id:"external-application-interfaces"},"External Application Interfaces"),(0,o.kt)("p",null,"External applications communicate with a ",(0,o.kt)("inlineCode",{parentName:"p"},"provenanced")," node instance using ",(0,o.kt)("inlineCode",{parentName:"p"},"gRPC"),". The ",(0,o.kt)("inlineCode",{parentName:"p"},"gRPC")," layer of the ",(0,o.kt)("inlineCode",{parentName:"p"},"provenanced")," application exposes the Provenance Blockchain modules to external applications. Thus, the core blockchain modules that implement the business logic of the blockchain are available via the ",(0,o.kt)("inlineCode",{parentName:"p"},"gRPC")," interface."),(0,o.kt)("p",null,"Where the ",(0,o.kt)("inlineCode",{parentName:"p"},"gRPC")," interface provides access to the Provenance Blockchain modules, the Event Manager dispatches blockchain transaction events. External applications can subscribe to events like token or coin transfers, metadata updates, and governance proposals."))}h.isMDXComponent=!0},9333:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/node-components-c79b3bd9c77a865538ba5221ab90b8ae.png"}}]);