"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9523],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(m,i(i({ref:t},s),{},{components:n})):o.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},3050:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const a={description:"Practical implementations of p8e"},i="BlockVault Contract Execution Environment (p8e)",c={unversionedId:"pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/index",id:"pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/index",title:"BlockVault Contract Execution Environment (p8e)",description:"Practical implementations of p8e",source:"@site/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/index.md",sourceDirName:"pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e",slug:"/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/",permalink:"/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/",draft:!1,tags:[],version:"current",frontMatter:{description:"Practical implementations of p8e"},sidebar:"documentationSidebar",previous:{title:"Data Mapping",permalink:"/docs/pb/integrating/integrating-with-p8e/lending-ecosystem/data-mapping"},next:{title:"Deploying the Encrypted Object Store",permalink:"/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/deploying-the-encrypted-object-store/"}},l={},p=[{value:"Participation Models",id:"participation-models",level:2},{value:"To Host or Not to Host",id:"to-host-or-not-to-host",level:2}],s={toc:p},d="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"blockvault-contract-execution-environment-p8e"},"BlockVault Contract Execution Environment (p8e)"),(0,r.kt)("p",null,"While the components and key concepts of BlockVault and BlockVault contracts are covered in the ",(0,r.kt)("a",{parentName:"p",href:"https://developer.provenance.io/docs/pb/p8e/overview"},"p8e Overview"),", this guide will focus on how to deploy your own BlockVault environment and put it to use."),(0,r.kt)("p",null,"By the end of this guide, you will feel comfortable spinning up and configuring your own development environment, writing and publishing your own BlockVault contracts, and executing them. Whether it's to build a new use case or integrate with an existing one, you will gain an understanding of where your data lives and who has access to it."),(0,r.kt)("h2",{id:"participation-models"},"Participation Models"),(0,r.kt)("p",null,"There is more than one way to participate in the Provenance Blockchain ecosystem. Some participants will want to simply send data to a technology service provider (such as Figure Tech) and allow them to orchestrate the process of pushing data to the Encrypted Object Store and Provenance Blockchain ledger. In this model, the technology service provider likely also hosts and operates the BlockVault Contract Execution Environment and/or ",(0,r.kt)("a",{parentName:"p",href:"https://developer.provenance.io/docs/blockchain/introduction/major-components#provenance-blockchain-node"},"Provenance Blockchain Nodes")," used to store loan data and record transactions, respectively."),(0,r.kt)("p",null,"Other participants will want full control over their data and will choose to operate their own interfaces, middleware (including Object Stores), or Provenance Blockchain Nodes. Ultimately, each participant can decide which components they are comfortable operating. The more control over the running applications and data stores, the more flexibility the participant has to build out new use cases with business partners within the ecosystem, extending the loan data model as needed."),(0,r.kt)("p",null,"To support these choices, Figure Tech has both deployed a white-label asset onboarding service, where orchestration including key management is completely handled on behalf of loan originators, and published an open-source API that implements the open-source Provenance Software Development Kit (SDK) and can be extended by any asset originator."),(0,r.kt)("h2",{id:"to-host-or-not-to-host"},"To Host or Not to Host"),(0,r.kt)("p",null,"Here lies the first major decision any asset originator needs to make: to deploy and host your own BlockVault Contract Execution Environment or not. That's sounds binary, but there are actually more than two choices:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Integrators can operate each component on their own."),(0,r.kt)("li",{parentName:"ol"},"Integrators can operate their own API to orchestrate the execution of BlockVault contracts, while pointing to an object store hosted by a business partner or technology service provider."),(0,r.kt)("li",{parentName:"ol"},"Integrators can simply send data to a partner that operates the components.")),(0,r.kt)("p",null,"This guide will walk you through everything you need to know to go with option #1. That said, Figure Tech is available as a partner to integrators that want to go with option #2 or #3."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you are solely looking for information related to the white-label approach, feel free to skip down to the ",(0,r.kt)("a",{parentName:"p",href:"./#sandbox-environment"},"Sandbox Environment")," section.")),(0,r.kt)("p",null,"Remember to consider data isolation when making the decision of what to host or who to work with as a technology servicer provider. Ensure that you understand whether or not your data is stored in a shared object store or isolated in its own environment."))}u.isMDXComponent=!0}}]);