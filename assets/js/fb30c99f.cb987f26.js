"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7787],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>h});var n=a(7294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,s=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var a=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(a),f=s,h=p["".concat(l,".").concat(f)]||p[f]||u[f]||r;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function h(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=a.length,o=new Array(r);o[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:s,o[1]=i;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}f.displayName="MDXCreateElement"},6865:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var n=a(7462),s=(a(7294),a(3905));const r={},o="Assets on Provenance Blockchain",i={unversionedId:"learn/asset-lifecycle/assets-overview",id:"learn/asset-lifecycle/assets-overview",title:"Assets on Provenance Blockchain",description:"Read more about the Benefits of Real-World Financial Asset Tokenization",source:"@site/docs/learn/asset-lifecycle/01-assets-overview.md",sourceDirName:"learn/asset-lifecycle",slug:"/learn/asset-lifecycle/assets-overview",permalink:"/docs/learn/asset-lifecycle/assets-overview",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"assetLifecycleSidebar",next:{title:"Financial NFTs",permalink:"/docs/learn/asset-lifecycle/nfts"}},l={},c=[{value:"Types of Assets",id:"types-of-assets",level:2},{value:"Asset NFTs",id:"asset-nfts",level:3},{value:"Tokenized Assets",id:"tokenized-assets",level:3},{value:"Pooled Assets",id:"pooled-assets",level:3},{value:"The Digital Asset Lifecycle",id:"the-digital-asset-lifecycle",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...r}=e;return(0,s.kt)(p,(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"assets-on-provenance-blockchain"},"Assets on Provenance Blockchain"),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Read more about the ",(0,s.kt)("a",{parentName:"em",href:"https://provenance.io/learn/posts/basics-of-real-world-financial-a"},"Benefits of Real-World Financial Asset Tokenization"))),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Financial digital assets")," are unique, digital representations of valuable assets with defined ownership or\nusage rights. Unlike traditional physical assets, financial digital assets exist solely in digital form and\ntheir associated data and documents are all in digital format, such as PDF, without the need for paper copies."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Provenance Blockchain")," is a platform designed to support the entire ",(0,s.kt)("strong",{parentName:"p"},"lifecycle")," of financial digital assets, from\ncreation to financing, funding, and trading. This platform is specifically designed to accommodate a wide range of\nasset classes, including debt, equity, derivatives, and payments, and can be used across multiple financial markets.\nThe platform offers a streamlined, secure, and efficient way to manage financial digital assets, providing\nend-to-end support from origination to trading."),(0,s.kt)("hr",null),(0,s.kt)("h2",{id:"types-of-assets"},"Types of Assets"),(0,s.kt)("p",null,"Assets can be broadly classified into two categories: unique or singular assets and divisible assets. Unique\nassets, such as loans, are one-of-a-kind and cannot be divided into smaller units or replaced by equivalent\nunits. On the other hand, divisible assets, such as shares of stock in a particular class, can be divided into\nequivalent parts."),(0,s.kt)("p",null,'The web3 community has popularized the use of specific terminology to distinguish between these two types of\nassets. "',(0,s.kt)("strong",{parentName:"p"},"Non-Fungible Tokens"),'" (NFTs) are used to describe unique and singular assets, while the generic term "',(0,s.kt)("strong",{parentName:"p"},"token"),'" is\nused to refer to divisible and fungible assets, such as cryptocurrencies like Bitcoin. We\'ll use the term "',(0,s.kt)("strong",{parentName:"p"},"tokenized asset"),'"\nhere to represent an asset whose ownership is represented by a corresponding token, allowing fractionalized ownership\nof the asset.'),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"asset types",src:a(4762).Z,width:"4550",height:"1644"})),(0,s.kt)("h3",{id:"asset-nfts"},"Asset NFTs"),(0,s.kt)("p",null,"On Provenance Blockchain, individual assets such as loans are recorded as NFTs using the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/provenance/blob/main/proto/provenance/metadata/v1/scope.proto#L70"},(0,s.kt)("strong",{parentName:"a"},"Scope")),"\ndata structure defined by the ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/provenance/tree/main/x/metadata/spec"},(0,s.kt)("strong",{parentName:"a"},"Metadata module")),".\nOf course, Personally-Identifying Information (PII) and other sensitive data about a customer's loan should not be\nrecorded on a public blockchain. Provenance Blockchain provides a solution for keeping detailed asset data ",(0,s.kt)("a",{parentName:"p",href:"/docs/pb/p8e/overview/"},"safely\noff-chain and encrypted"),", while recording asset ownership, metadata, and history on-chain."),(0,s.kt)("h3",{id:"tokenized-assets"},"Tokenized Assets"),(0,s.kt)("p",null,"Fungible assets, such as shares of stock, are represented on Provenance Blockchain by a special type of account called\na ",(0,s.kt)("a",{parentName:"p",href:"/docs/pb/modules/marker-module"},(0,s.kt)("strong",{parentName:"a"},"Marker")),". The Marker module provides an ownership structure for managing tokenized value backed by assets or other tokenized units of value."),(0,s.kt)("h3",{id:"pooled-assets"},"Pooled Assets"),(0,s.kt)("p",null,"Asset NFTs can be aggregated into pools or structures using the ",(0,s.kt)("a",{parentName:"p",href:"/docs/pb/modules/marker-module"},(0,s.kt)("strong",{parentName:"a"},"Marker"))," construct.\nThe entire pool of assets can be managed or sold as a single entity, such as for a whole loan sales, or the pool\ncan be further tokenized to represent fractional ownership in the pool, such as for a securitization."),(0,s.kt)("h2",{id:"the-digital-asset-lifecycle"},"The Digital Asset Lifecycle"),(0,s.kt)("p",null,"Every type of financial asset has a unique lifecycle, but the phases of digital assets can be broadly categorized into\nthree areas: asset issuance, asset management, and asset trading. "),(0,s.kt)("p",null,(0,s.kt)("img",{alt:"asset lifecycle",src:a(294).Z,width:"2684",height:"1130"})))}u.isMDXComponent=!0},4762:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/asset-types-1f7d7a70749685969e0354269ec5d89f.png"},294:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/lifecycle-2d2ec8e3b411560088c3edbfc562128d.png"}}]);