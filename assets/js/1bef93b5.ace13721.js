"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9242],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(a),h=r,g=m["".concat(l,".").concat(h)]||m[h]||d[h]||s;return a?n.createElement(g,o(o({ref:t},p),{},{components:a})):n.createElement(g,o({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<s;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8677:(e,t,a)=>{a.d(t,{Y:()=>r});var n=a(7294);const r=e=>{let{text:t}=e;return n.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},t)}},7803:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),s=a(8677);const o={},i="Lending Ecosystem",l={unversionedId:"pb/integrating/integrating-with-p8e/lending-ecosystem/index",id:"pb/integrating/integrating-with-p8e/lending-ecosystem/index",title:"Lending Ecosystem",description:"<DocSubheader text='The guide uses the lending ecosystem as a very real example of building out a use case on top of Provenance Blockchain'",source:"@site/docs/pb/integrating/integrating-with-p8e/lending-ecosystem/index.md",sourceDirName:"pb/integrating/integrating-with-p8e/lending-ecosystem",slug:"/pb/integrating/integrating-with-p8e/lending-ecosystem/",permalink:"/docs/pb/integrating/integrating-with-p8e/lending-ecosystem/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Integrating with p8e",permalink:"/docs/pb/integrating/integrating-with-p8e/"},next:{title:"Life Cycle of a Loan",permalink:"/docs/pb/integrating/integrating-with-p8e/lending-ecosystem/life-cycle-of-a-loan"}},c={},p=[{value:"Why Onboard Loans to Provenance?",id:"why-onboard-loans-to-provenance",level:2},{value:"Explore the Lending Ecosystem Use Case",id:"explore-the-lending-ecosystem-use-case",level:2}],m={toc:p},d="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"lending-ecosystem"},"Lending Ecosystem"),(0,r.kt)(s.Y,{text:"The guide uses the lending ecosystem as a very real example of building out a use case on top of Provenance Blockchain",mdxType:"DocSubheader"}),(0,r.kt)("p",null,"The lending industry has been looking at distributed ledger technology for a while now. A quick search for uses of blockchain technology in the lending industry brings up a laundry list of great ideas. Tamper resistant loan files, title registries, bilateral settlement of Mortgage Backed Securities to name a few."),(0,r.kt)("p",null,"The Provenance Blockchain is purpose-built for all of these use cases and so much more."),(0,r.kt)("h2",{id:"why-onboard-loans-to-provenance"},"Why Onboard Loans to Provenance?"),(0,r.kt)("p",null,"If you've read the ",(0,r.kt)("a",{parentName:"p",href:"/docs/pb/ecosystem/financial-services-blockchain/"},"Intro"),", you know that Provenance Blockchain performs three key functions: ledger, registry, and exchange. Together these functions can reduce the cost and risk of participating in the lending industry. By onboarding loans to Provenance, originators gain access to a suite of tools that make recording, funding, tracking, validating, and transferring control and/or ownership of loans frictionless."),(0,r.kt)("p",null,"Here are some examples:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Portfolio Manager")," - Manage and see the real-time performance of loans on Provenance Blockchain. Allows users to list, pool, pledge and sell loans to an ever-growing group of warehouse lenders and accredited investors. The user interface allows buyers and sellers to review up-to-date loan data and documents, and perform bi-lateral exchange of assets, reducing counter-party risk and time to close deals."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Digital Asset Registry Technologies (DART)")," - Allows owners, servicers, and eNote controllers to track and update loan ownership, servicing rights, and control of eNotes associated with mortgages registered on Provenance. Any changes made by other decentralized applications, such as Portfolio Manager, are automatically captured because they all share one source of truth: the Provenance Blockchain ledger. This eliminates the need to update a separate, centralized registry after pledging or selling loans to investors or warehouse lenders."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Validation Oracle")," - Request and receive third-party loan validation services. The Validation Oracle service helps originators and investors manage permissions to loan data and loan validation results, sharing it with trusted third-party validation service providers and select buyers. Validation results become part of the digital asset for the remainder of its life."),(0,r.kt)("p",null,"Due to the decentralized nature of the Provenance Blockchain ecosystem, this suite of tools is ever-expanding. New decentralized applications can be built and operated by anyone, giving participants choices in how they manage their assets."),(0,r.kt)("p",null,"On top of this suite of tools, the Provenance Blockchain ecosystem opens loan originators to the USDF payment rails. Imagine that each party in a loan sale has an account funded with USDF, the USD-backed stablecoin minted on Provenance by the USDF consortium of omnibus banks. A seller uses Portfolio Manager to create a pool of mortgages represented as a ",(0,r.kt)("a",{parentName:"p",href:"/docs/pb/modules/marker-module"},"Marker")," on Provenance and proposes the sale of that Marker to an investor. The investor uses Portfolio Manager to review loans in the pool, accessing third-party validators through the use of Validation Oracle, if needed. If the investor agrees to the seller's terms, the buyer and seller sign and submit a transaction proposal to the Provenance Blockchain network for validation. As the transaction proposal gets executed, the loan pool Marker is transferred to the buyer's account and USDF is transferred to the seller's account. Assuming these loan were registered with DART, the records of who controls the eNote and who services the loans are automatically picked up and reflected to all parties involved."),(0,r.kt)("p",null,"The entire transaction takes place in one block recorded to the Provenance Blockchain ledger. No waiting for a wire transfer. No waiting for loan documents to show up in the mail. No notifying a centralized eNote registry of the sale. Just ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mo",{parentName:"mrow"},"+"),(0,r.kt)("mn",{parentName:"mrow"},"0")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"t+0")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6984em",verticalAlign:"-0.0833em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.kt)("span",{parentName:"span",className:"mbin"},"+"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2222em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6444em"}}),(0,r.kt)("span",{parentName:"span",className:"mord"},"0")))))," bi-lateral settlement, where ",(0,r.kt)("span",{parentName:"p",className:"math math-inline"},(0,r.kt)("span",{parentName:"span",className:"katex"},(0,r.kt)("span",{parentName:"span",className:"katex-mathml"},(0,r.kt)("math",{parentName:"span",xmlns:"http://www.w3.org/1998/Math/MathML"},(0,r.kt)("semantics",{parentName:"math"},(0,r.kt)("mrow",{parentName:"semantics"},(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mo",{parentName:"mrow"},"="),(0,r.kt)("mi",{parentName:"mrow"},"t"),(0,r.kt)("mi",{parentName:"mrow"},"i"),(0,r.kt)("mi",{parentName:"mrow"},"m"),(0,r.kt)("mi",{parentName:"mrow"},"e")),(0,r.kt)("annotation",{parentName:"semantics",encoding:"application/x-tex"},"t=time")))),(0,r.kt)("span",{parentName:"span",className:"katex-html","aria-hidden":"true"},(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6151em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}}),(0,r.kt)("span",{parentName:"span",className:"mrel"},"="),(0,r.kt)("span",{parentName:"span",className:"mspace",style:{marginRight:"0.2778em"}})),(0,r.kt)("span",{parentName:"span",className:"base"},(0,r.kt)("span",{parentName:"span",className:"strut",style:{height:"0.6595em"}}),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"t"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"im"),(0,r.kt)("span",{parentName:"span",className:"mord mathnormal"},"e"))))),"."),(0,r.kt)("p",null,"Combine bi-lateral settlement with a suite of tools for managing your assets, and you've got a fully digital lending ecosystem with zero counter-party risk."),(0,r.kt)("h2",{id:"explore-the-lending-ecosystem-use-case"},"Explore the Lending Ecosystem Use Case"),(0,r.kt)("p",null,"On the following pages, we will explore how the Figure Tech team translated the typical post-close events to a blockchain-enabled world. By understanding those activities, you can quickly see how the products mentioned above came to fruition."),(0,r.kt)("p",null,"After that, we will dive into the Loan Package data model. Understanding the data model is step one in integrating with the Provenance Blockchain network as a loan originator or other data provider."))}h.isMDXComponent=!0}}]);