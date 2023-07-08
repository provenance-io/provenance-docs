"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[586],{3905:(e,t,i)=>{i.d(t,{Zo:()=>l,kt:()=>h});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var c=n.createContext({}),p=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(i),f=r,h=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return i?n.createElement(h,o(o({ref:t},l),{},{components:i})):n.createElement(h,o({ref:t},l))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<a;p++)o[p]=i[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}f.displayName="MDXCreateElement"},3308:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=i(7462),r=(i(7294),i(3905));const a={title:"Verification Flow"},o="Identity Verification Flow",s={unversionedId:"learn/dapps/identity-verification/flow",id:"learn/dapps/identity-verification/flow",title:"Verification Flow",description:"The process of performing identity verification using Attributes on Provenance Blockchain is a crucial aspect of",source:"@site/docs/learn/dapps/identity-verification/flow.md",sourceDirName:"learn/dapps/identity-verification",slug:"/learn/dapps/identity-verification/flow",permalink:"/docs/learn/dapps/identity-verification/flow",draft:!1,tags:[],version:"current",frontMatter:{title:"Verification Flow"},sidebar:"dappsSidebar",previous:{title:"Identity Verification",permalink:"/docs/learn/dapps/identity-verification"},next:{title:"Identity Attribute Names",permalink:"/docs/learn/dapps/identity-verification/attribute-names"}},c={},p=[{value:"Step 1: User Undergoes KYC",id:"step-1-user-undergoes-kyc",level:2},{value:"Step 2: User Grants dApp Permission to Read KYC",id:"step-2-user-grants-dapp-permission-to-read-kyc",level:2}],l={toc:p},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"identity-verification-flow"},"Identity Verification Flow"),(0,r.kt)("p",null,"The process of performing identity verification using Attributes on Provenance Blockchain is a crucial aspect of\nensuring security and trust within the ecosystem. This process can be broken down into two main steps: obtaining a\ncredential from an Identity Provider and presenting the credential from the user's wallet to any decentralized\napplication (dApp)."),(0,r.kt)("h2",{id:"step-1-user-undergoes-kyc"},"Step 1: User Undergoes KYC"),(0,r.kt)("p",null,"The user is typically directed to an Identity Provider from an application (dApp)."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"To initiate the process, the user must visit an identity verification provider company."),(0,r.kt)("li",{parentName:"ol"},"The identity verification process involves the user providing personal information (name, date of birth, address) and\nsubmitting relevant documentation to confirm their identity. Documentation requirements may vary based on the level\nof verification needed by the application or service. or example, some services may require a government-issued ID,\nwhile others may require additional documents such as proof of address or proof of income."),(0,r.kt)("li",{parentName:"ol"},"Upon completing the verification process, the provider writes an Attribute to the user's account on the Provenance\nBlockchain, indicating that the user has passed the verification requirements. This Attribute serves as proof of\ncompletion and can grant access to specific features or services within the Provenance ecosystem."),(0,r.kt)("li",{parentName:"ol"},"The identity verification provider stores the verification data in the Encrypted Object Store (EOS), which\ncoordinates with Provenance Blockchain NFT records. By storing the data in the EOS, the provider ensures data\nsecurity and immutability."),(0,r.kt)("li",{parentName:"ol"},"The provider also creates a unique NFT (non-fungible token) representing the verification data on the blockchain.\nThis NFT allows the user to own their verification data as an asset in their account or wallet, ensuring the security\nand privacy of sensitive information.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"identity verification check",src:i(3371).Z,width:"3904",height:"1966"})),(0,r.kt)("h2",{id:"step-2-user-grants-dapp-permission-to-read-kyc"},"Step 2: User Grants dApp Permission to Read KYC"),(0,r.kt)("p",null,"User KYC Attributes can be utilized in two ways:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"The dApp or smart contract can make decisions based on the Attribute's presence or absence and name. If the Attribute\nexists, it means the user has met the requirements for the credential. In many cases, this check is sufficient to\ncomplete the business process."),(0,r.kt)("li",{parentName:"ol"},"If the credential use case requires the full identity verification data, the dApp can request permission from the\nuser to read the data stored in the EOS.")),(0,r.kt)("p",null,"The method for accessing NFT identity data depends on the Identity Provider. The provider could make the EOS Gateway\navailable to application users or provide an API to fetch the data. For more information on the design and availability\nof Identity NFTs, refer to the ",(0,r.kt)("a",{parentName:"p",href:"identity-nfts"},"Identity NFTs")," section."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"identity verification check",src:i(4514).Z,width:"3910",height:"1992"})))}u.isMDXComponent=!0},3371:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/verification-flow-1-288bf8810d85a02e42ce118f383813c8.png"},4514:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/verification-flow-2-2231b0b8eeace824dc85511437292b5f.png"}}]);