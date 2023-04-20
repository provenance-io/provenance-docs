"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4731],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,f=d["".concat(s,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5402:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},i="dApp Architecture",c={unversionedId:"learn/dapps/dapps-overview",id:"learn/dapps/dapps-overview",title:"dApp Architecture",description:"Full-Stack dApp",source:"@site/docs/learn/dapps/dapps-overview.md",sourceDirName:"learn/dapps",slug:"/learn/dapps/dapps-overview",permalink:"/docs/learn/dapps/dapps-overview",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"dappsSidebar",next:{title:"Identity Verification",permalink:"/docs/learn/dapps/identity-verification"}},s={},l=[{value:"Full-Stack dApp",id:"full-stack-dapp",level:2}],p={toc:l},d="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"dapp-architecture"},"dApp Architecture"),(0,a.kt)("h2",{id:"full-stack-dapp"},"Full-Stack dApp"),(0,a.kt)("p",null,"A full-stack dApp (web or mobile app) using Provenance Blockchain typically consists of several layers and components\nthat work together to provide a seamless and secure experience for users. Here is a high-level overview of the\narchitecture:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dapp architecture",src:n(4968).Z,width:"2412",height:"1514"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Frontend Layer"),": The frontend layer is responsible for rendering the user interface and handling user interactions.\nIt is usually built using modern web or mobile app technologies like React, React Native, Vue, Angular, or Swift for\ncreating responsive and interactive interfaces. This layer communicates with the backend layer through APIs to perform\nvarious tasks."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Backend Layer"),": The backend layer manages the business logic and data processing of the dApp. It often includes a\nserver or serverless architecture, built using technologies like Node.js, Python, or Java, which exposes RESTful or\nGraphQL APIs for the frontend to consume. The backend layer communicates with the Provenance Blockchain to read and\nwrite data, interact with smart contracts, and perform other blockchain-related tasks."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"BlockVault and EOS (Encrypted Object Store)"),": BlockVault provides a secure and privacy-preserving storage solution for\nyour dApp by leveraging the Encrypted Object Store (EOS). EOS is a storage system that enables the\nencryption of sensitive data before storing it on the Provenance Blockchain. By integrating with BlockVault and EOS,\nyour dApp can benefit from an added layer of security, ensuring that user data remains protected and confidential while\nmaintaining the integrity of the information stored on the blockchain."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Provenance Blockchain"),": The Provenance Blockchain forms the core of the dApp, providing a decentralized and secure\nledger for storing and managing data. The blockchain ensures data integrity and security. Smart contracts are deployed\non the Provenance Blockchain to define and enforce the rules of the dApp, such as token issuance, trading, and\ncompliance."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Smart Contracts"),": Smart contracts are programs that run on the Provenance Blockchain. They are written in Rust and\nare used to automate processes, enforce rules, and manage data in a transparent and decentralized manner. Smart\ncontracts can be used to define the logic for token issuance, transfer restrictions, investor accreditation, and other\nregulatory requirements."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Wallet"),": The wallet is an important component in the architecture, enabling users to securely manage their digital\nassets and interact with the dApp. Wallet: As a dApp builder, you don't need to create a new wallet for your\napplication. Instead, you can leverage any of the available ecosystem wallets that support WalletConnect. This allows\nusers to securely connect their wallets to your dApp, enabling seamless transactions and interactions with the\nProvenance Blockchain. By integrating with existing wallets, you can focus on building your dApp's core functionalities\nand enhance the user experience."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"External Services"),": dApps may also integrate with external services to enhance their functionality, such as identity\nverification providers for KYC/AML checks, oracles for real-time data feeds, and payment gateways for fiat currency\ntransactions."),(0,a.kt)("p",null,"In summary, a full-stack dApp using the Provenance Blockchain combines a frontend layer, backend layer, smart contracts,\nand a wallet to provide a secure, transparent, and efficient experience for users. The architecture is designed to\nfacilitate seamless interaction between the various components, leveraging the power of the Provenance Blockchain and\nexternal services to deliver a comprehensive and innovative solution."))}u.isMDXComponent=!0},4968:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/dapp-architecture-cbe4b48d018d03c996b087994ee0d746.png"}}]);