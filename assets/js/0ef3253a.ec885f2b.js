"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[1712],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),l=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),v=n,m=d["".concat(s,".").concat(v)]||d[v]||u[v]||i;return r?o.createElement(m,a(a({ref:t},p),{},{components:r})):o.createElement(m,a({ref:t},p))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<i;l++)a[l]=r[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1441:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const i={},a="SDK",c={unversionedId:"pb/p8e/overview/api",id:"pb/p8e/overview/api",title:"SDK",description:"Overview",source:"@site/docs/pb/p8e/overview/api.md",sourceDirName:"pb/p8e/overview",slug:"/pb/p8e/overview/api",permalink:"/provenance-docs/docs/pb/p8e/overview/api",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"P8e Contract Execution Environment",permalink:"/provenance-docs/docs/pb/p8e/overview/"},next:{title:"Encrypted Object Store",permalink:"/provenance-docs/docs/pb/p8e/overview/encrypted-object-store/"}},s={},l=[{value:"Overview",id:"overview",level:3},{value:"Major Elements",id:"major-elements",level:3},{value:"Contract Execution",id:"contract-execution",level:4},{value:"Contract Bootstrapping",id:"contract-bootstrapping",level:4},{value:"Handling Execution Results",id:"handling-execution-results",level:4},{value:"Proto Indexer",id:"proto-indexer",level:4}],p={toc:l};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"sdk"},"SDK"),(0,n.kt)("h3",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The P8e Contract Execution Software Development Kit ","(","SDK",")",' consists of a collection of JVM based libraries that help manage interactions with Provenance Blockchain, or more specifically, "scopes" as defined by the Metadata module.'),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/p8e-scope-sdk"},"SDK")," repository is the best source for more concrete descriptions and runnable examples. It also contains a docker-compose environment that allows for running a complete local stack."),(0,n.kt)("h3",{id:"major-elements"},"Major Elements"),(0,n.kt)("h4",{id:"contract-execution"},"Contract Execution"),(0,n.kt)("p",null,"At its core, the SDK is responsible for executing contracts amongst one or more participants. The remainder of the SDK documentation will expand on this component."),(0,n.kt)("h4",{id:"contract-bootstrapping"},"Contract Bootstrapping"),(0,n.kt)("p",null,"A gradle plugin is provided that manages the process of memorializing the declarative specifications needed for contract execution."),(0,n.kt)("h4",{id:"handling-execution-results"},"Handling Execution Results"),(0,n.kt)("p",null,"After successful contract execution, the result will be a collection of Provenance Blockchain protobuf messages. At this point all of the records have been encrypted and stored in EOS. At this stage messages can be memorialized to Provenance Blockchain with the Provenance Blockchain HTTP or gRPC interface. Optionally, the Provenance Blockchain event stream may be read to asynchronously detect changes made to scopes previously submitted."),(0,n.kt)("h4",{id:"proto-indexer"},"Proto Indexer"),(0,n.kt)("p",null,"Post execution it might be required to persist the records in a system for easy search-ability at a later point in time. The protobuf indexer provides a way to accomplish this by converting the protobuf into an, optionally filtered, key-value JSON structure. A custom ",(0,n.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/docs/reference/cpp/google.protobuf.descriptor"},"protobuf descriptor")," is provided that supports a hierarchical whitelisting/blacklisting of nested protobuf messages."))}u.isMDXComponent=!0}}]);