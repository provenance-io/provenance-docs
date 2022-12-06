"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[2409],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),h=o,g=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const r={description:"A suggested process for getting started with loading assets onto Provenance Blockchain"},i="Asset Originator's Guide",l={unversionedId:"pb/integrating/asset-originators-guide",id:"pb/integrating/asset-originators-guide",title:"Asset Originator's Guide",description:"A suggested process for getting started with loading assets onto Provenance Blockchain",source:"@site/docs/pb/integrating/asset-originators-guide.md",sourceDirName:"pb/integrating",slug:"/pb/integrating/asset-originators-guide",permalink:"/provenance-docs/docs/pb/integrating/asset-originators-guide",draft:!1,tags:[],version:"current",frontMatter:{description:"A suggested process for getting started with loading assets onto Provenance Blockchain"}},s={},c=[{value:"Example Application",id:"example-application",level:2},{value:"Development Process",id:"development-process",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"asset-originators-guide"},"Asset Originator's Guide"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This guide uses loans as the example digital asset, but the process can be applied to any type of asset.")),(0,o.kt)("p",null,"This guide walks through the steps necessary to create an application using Provenance Blockchain and the ",(0,o.kt)("a",{parentName:"p",href:"../p8e/overview/"},"P8e Contract Execution Environment "),"to load and fund digital assets on chain. In the example, digital loans are boarded to Provenance Blockchain, funded with stablecoin, and listed on the Figure Portfolio Manager ","(","PM",")","."),(0,o.kt)("h2",{id:"example-application"},"Example Application"),(0,o.kt)("p",null,"The application exists in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Interface")," layer of the ",(0,o.kt)("a",{parentName:"p",href:"/provenance-docs/docs/pb/blockchain/introduction/application-architecture"},"Application Architecture"),", and makes use of a ",(0,o.kt)("a",{parentName:"p",href:"/provenance-docs/docs/pb/blockchain/introduction/major-components"},"hybrid model "),"of on-chain and off-chain ","(","client-side",")"," data."),(0,o.kt)("p",null,"In our example, the borrower applies ","(","and is approved",")"," for a loan through the Originator's own Loan Origination System ","(","LOS",")",". The loan is boarded to Provenance Blockchain only when the loan is ready for immediate funding, at which point the application will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Record the loan data")," to the originator's private local Encrypted Object Store ","(","EOS",")"," through the execution of a ",(0,o.kt)("a",{parentName:"li",href:"../p8e/overview/#p-8-e-client-side-contracts"},"P8e Contract.")," This establishes a record of the assets and its ",(0,o.kt)("a",{parentName:"li",href:"/provenance-docs/docs/pb/modules/marker-module"},"ownership")," ","(","the originator",")"," on the blockchain, while preserving the privacy and security of the data under the originator's control."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"(","Optionally",")"," Fund the loan")," using stablecoin issued by an Omnibus Bank."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Run a validation P8e contract")," over the loan to ensure the loan was issued according to the rules and underwriting guidelines that the originator set."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Permission")," Figure's Portfolio Manager to read the loan data."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Provide loan tapes")," to the Portfolio Manager over the lifecycle of the loan through P8e contract execution.")),(0,o.kt)("p",null,"The guide will also outline the optional further steps of querying the loan data, updating or correcting data, and removing a loan from the system."),(0,o.kt)("h2",{id:"development-process"},"Development Process"),(0,o.kt)("p",null,"The development process for creating this loan boarding application will include:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Mapping the originator's loan data to the ",(0,o.kt)("a",{parentName:"li",href:"/provenance-docs/docs/learn/provenance-applications/loan-origination-system-los/assets"},"Figure Loan Data Model"),"."),(0,o.kt)("li",{parentName:"ol"},"Setting up the P8e environment, including a local node of the blockchain ","(","see below",")","."),(0,o.kt)("li",{parentName:"ol"},"If required, setting up an Omnibus Bank application to mint and burn stablecoin, as well as manage the associated fiat cash movement into and out of the system."),(0,o.kt)("li",{parentName:"ol"},"Writing P8e contracts:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"To record the initial loan data"),(0,o.kt)("li",{parentName:"ol"},"To track funding information during the stablecoin funding process"),(0,o.kt)("li",{parentName:"ol"},"To validate the loan data"),(0,o.kt)("li",{parentName:"ol"},"To update the loan tape for PM as needed"),(0,o.kt)("li",{parentName:"ol"},"To update ","(","or correct",")"," loan data ","(","optional",")"),(0,o.kt)("li",{parentName:"ol"},"To remove a loan from the system ","(","optional",")"))),(0,o.kt)("li",{parentName:"ol"},"Developing an application to orchestrate the execution of the P8e contracts and upload loan documents ","(","e.g. PDF of the signing note",")",", and to use the Provenance Blockchain SDK to manage the flow of stablecoin, asset ownership, and data sharing on the blockchain.")),(0,o.kt)("p",null,"A Provenance Blockchain application has several options for interfacing with the blockchain during development and for production usage:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"../blockchain/using-provenance/"},"Run a blockchain localnet")," in situ for easy local development;"),(0,o.kt)("li",{parentName:"ol"},"Connect to the Provenance Blockchain public ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/provenance-io/testnet"},"testnet"),";"),(0,o.kt)("li",{parentName:"ol"},"Connect to the public production Provenance Blockchain ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/provenance-io/mainnet"},"mainnet"),".")))}d.isMDXComponent=!0}}]);