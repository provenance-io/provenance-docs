"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2268],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>h});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},f=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=s(t),f=r,h=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return t?o.createElement(h,i(i({ref:n},l),{},{components:t})):o.createElement(h,i({ref:n},l))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=f;var d={};for(var c in n)hasOwnProperty.call(n,c)&&(d[c]=n[c]);d.originalType=e,d[p]="string"==typeof e?e:r,i[1]=d;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},8677:(e,n,t)=>{t.d(n,{Y:()=>r});var o=t(7294);const r=e=>{let{text:n}=e;return o.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},n)}},8210:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>d,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=t(7462),r=(t(7294),t(3905)),a=t(8677);const i={},d="Running a Node",c={unversionedId:"pb/blockchain/running-a-node/running-a-node-1/index",id:"pb/blockchain/running-a-node/running-a-node-1/index",title:"Running a Node",description:"Nodes on the Provenance Blockchain network are simply servers started by the provenanced executable with a specific configuration. There are several types of configurations such as seeding, data archival, or validation that may be used to assist in application development. These configuration types may be helpful in deciding what type of node is best suited for the different use cases.",source:"@site/docs/pb/blockchain/running-a-node/running-a-node-1/index.md",sourceDirName:"pb/blockchain/running-a-node/running-a-node-1",slug:"/pb/blockchain/running-a-node/running-a-node-1/",permalink:"/docs/pb/blockchain/running-a-node/running-a-node-1/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Tx Command",permalink:"/docs/pb/blockchain/using-provenance/tx-command"},next:{title:"Joining Testnet",permalink:"/docs/pb/blockchain/running-a-node/running-a-node-1/join-provenance-testnet/"}},s={},l=[{value:"Node Configurations",id:"node-configurations",level:2},{value:"Seed Node",id:"seed-node",level:3},{value:"Sentry Node",id:"sentry-node",level:3},{value:"Validator Node",id:"validator-node",level:3},{value:"More Information",id:"more-information",level:3}],p={toc:l},u="wrapper";function f(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"running-a-node"},"Running a Node"),(0,r.kt)(a.Y,{text:"Hosting a node on Provenance Blockchain mainnet, testnet, or for local development.",mdxType:"DocSubheader"}),(0,r.kt)("p",null,"Nodes on the Provenance Blockchain network are simply servers started by the ",(0,r.kt)("inlineCode",{parentName:"p"},"provenanced")," executable with a specific configuration. There are several types of configurations such as seeding, data archival, or validation that may be used to assist in application development. These configuration types may be helpful in deciding what type of node is best suited for the different use cases."),(0,r.kt)("h2",{id:"node-configurations"},"Node Configurations"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"provenanced")," is an all-encompassing command that may operate as any type of node, depending on how it has been configured. When determining how a particular node should be configured, it is necessary to take a deeper look at Provenance Blockchain and how it is structured."),(0,r.kt)("h3",{id:"seed-node"},"Seed Node"),(0,r.kt)("p",null,"A seed node is configured to provide an IP/port address book for other nodes to initially find and connect to peers. This node acts as a service directory for connections to sentry nodes on the network."),(0,r.kt)("h3",{id:"sentry-node"},"Sentry Node"),(0,r.kt)("p",null,"A sentry node is configured to provide data and connectivity to the mesh network. Sentries may be configured to provide RPC-based p2p communication to other network participants, archive blockchain data, query access to blockchain data, and provide a secured gateway that can communicate with and protect a validator node. This is the most used node type and will be the first node with which most network participants will interact."),(0,r.kt)("h3",{id:"validator-node"},"Validator Node"),(0,r.kt)("p",null,"A validator node is configured to participate in the consensus algorithm and is responsible for signing and proposing blocks to commit to the blockchain. It also holds Hash as stake, and receives Hash for its services."),(0,r.kt)("h3",{id:"more-information"},"More Information"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://tendermint.com/"},"Tendermint")," is an excellent resource for information regarding node configuration and details. For a detailed overview of the different types of nodes supported, see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/master/nodes/"},"Tendermint Node Types"),"."))}f.isMDXComponent=!0}}]);