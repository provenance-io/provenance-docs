"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[7067],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(a),h=r,f=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return a?n.createElement(f,i(i({ref:t},p),{},{components:a})):n.createElement(f,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3047:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const o={},i="Financial NFTs",s={unversionedId:"learn/asset-lifecycle/nfts",id:"learn/asset-lifecycle/nfts",title:"Financial NFTs",description:"Single-asset NFTs are represented on Provenance Blockchain using the Metadata module.",source:"@site/docs/learn/asset-lifecycle/02-nfts.md",sourceDirName:"learn/asset-lifecycle",slug:"/learn/asset-lifecycle/nfts",permalink:"/provenance-docs/docs/learn/asset-lifecycle/nfts",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"assetLifecycleSidebar",previous:{title:"Blockchain-Native Assets",permalink:"/provenance-docs/docs/learn/asset-lifecycle/assets-overview"},next:{title:"Tokenized Assets",permalink:"/provenance-docs/docs/learn/asset-lifecycle/markers"}},l={},c=[{value:"Anatomy of an NFT",id:"anatomy-of-an-nft",level:2},{value:"Data Privacy",id:"data-privacy",level:2},{value:"Data Structures",id:"data-structures",level:2}],p={toc:c};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"financial-nfts"},"Financial NFTs"),(0,r.kt)("p",null,"Single-asset NFTs are represented on Provenance Blockchain using the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.provenance.io/modules/metadata-module"},"Metadata module"),"."),(0,r.kt)("p",null,"The Metadata module was designed to work in conjunction with Provenance Blockchain\u2019s ",(0,r.kt)("a",{parentName:"p",href:"https://docs.provenance.io/p8e/overview"},"Client Execution Environment")," (CEE), whose purpose is to control and reason about asset-specific data off-chain while using the blockchain for recording an immutable history of the asset data and metadata on-chain. This powerful capability provides data privacy for Personally Identifying Information (PII) and other Non-Public Information (NPI)."),(0,r.kt)("p",null,"Usage of the CEE is an optional extension to the Provenance Blockchain, and asset NFTs may be minted directly on-chain without using the CEE."),(0,r.kt)("h2",{id:"anatomy-of-an-nft"},"Anatomy of an NFT"),(0,r.kt)("p",null,"An NFT on Provenance Blockchain is defined by the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.provenance.io/modules/metadata-module#scope-data-structures"},"Scope")," data structure."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"nft",src:a(7121).Z,width:"4730",height:"2464"})),(0,r.kt)("br",null),(0,r.kt)("p",null,"Two unique aspects of Provenance NFTs include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Extensible Record Container "),"- Multiple data records can be associated with a Provenance NFT, including individual record evolution and permissioning."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Multi-party Ownership")," - allowing a distinction between the Value Owner of an NFT, the party entitled to the financial value of the asset, and one or more Data Owners who may have the right or obligation to maintain the data backing the NFT. This nuance allows NFTs to have multiple participants in the roles of investors, controllers, and servicers, for example. Further parties can be permissioned with read-only data access, for example granting data viewing to another party or dApp, such as an exchange.")),(0,r.kt)("h2",{id:"data-privacy"},"Data Privacy"),(0,r.kt)("p",null,"The goals of having publicly-readable blockchain data while maintaining data privacy may at first seem incompatible. In transacting with other parties using our data, and cannot assume other parties will just \u201ctrust\u201d the data we show them. We need to be able to prove that the asset data is the truth."),(0,r.kt)("p",null,"The Provenance Blockchain Contract Execution Environment (CEE) was created to be able to reason about private data in an off-chain, smart contract-like way without leaking data publicly. We achieve this magic trick by \u201cfingerprinting\u201d the asset data using well-known ",(0,r.kt)("a",{parentName:"p",href:"https://www.investopedia.com/terms/h/hash.asp"},"hashing algorithms")," and recording the resulting hash (checksum or fingerprint) of the data directly on the blockchain. This allows any party to later independently verify that the data they were given has not been altered in any way since the data fingerprint was recorded on-chain."),(0,r.kt)("p",null,"Provenance Blockchain\u2019s NFT structure allows one to record not only the fingerprints of multiple data records associated with the NFT, but can also record the details of a CEE contract execution mutating the NFT data. This means that the blockchain will record the fingerprint of the data prior to the code execution, the fingerprints of additional input data to the contract code, the fingerprint of the output data records, and the unique fingerprint signature of the code that was executed."),(0,r.kt)("p",null,"Having all these hashes recorded on the blockchain for the NFT can allow anyone to later prove exactly what the data was, how it mutated, and what code was executed to change the NFT data, without disclosing the data publicly."),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"nft",src:a(5707).Z,width:"4562",height:"2562"})),(0,r.kt)("p",null,"The CEE is particularly powerful when contract execution involves multiple parties that may prefer verification of truth over trust (ie. parties no longer require explicit trust or third-party participation to ensure trust). During the contract execution, each party\u2019s CEE can independently verify that the copy of the data it holds matches the hash of the data last recorded on-chain. If the hashes don\u2019t match what is on the blockchain, the contract execution will fail."),(0,r.kt)("h2",{id:"data-structures"},"Data Structures"),(0,r.kt)("p",null,"On the Provenance Blockchain, data structures are encoded as ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers"},"Google Protocol Buffers"),". The onboarding API consumes a generic ",(0,r.kt)("inlineCode",{parentName:"p"},"Asset")," protobuf, which can contain any type of NFT or digital asset. The components parts of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Asset")," are:"),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"id")),(0,r.kt)("td",null,"An unique identifier in the ",(0,r.kt)("a",{href:"https://en.wikipedia.org/wiki/Universally_unique_identifier#:~:text=A%20universally%20unique%20identifier%20(UUID,%2C%20for%20practical%20purposes%2C%20unique."},"UUID format"))),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"type")),(0,r.kt)("td",null,"A broadly-generic \u201ctype\u201d of the asset, such as \u201cLOAN\u201d, \u201cFUND\u201d, or \u201cTITLE\u201d. This field is typically used to identify the type of asset to Provenance-based applications.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"description")),(0,r.kt)("td",null,"A brief description of the asset")),(0,r.kt)("tr",null,(0,r.kt)("td",null,(0,r.kt)("code",null,"key-value map")),(0,r.kt)("td",null,"A dictionary of string-value pairs, mapping a field name to its data value. The data value is encoded as a ",(0,r.kt)("a",{href:"https://developers.google.com/protocol-buffers/docs/proto3#any"},"protobuf Any"),", allowing for any type of data structure."))),(0,r.kt)("br",null),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-protobuf",metastring:'title="Asset proto definition"',title:'"Asset',proto:!0,'definition"':!0},'syntax = "proto3";\n\npackage tech.figure.asset;\n\nimport "google/protobuf/any.proto";\n\nmessage Asset {\n\n  string                           id          = 1; // Required UUID identifier for this asset\n  string                           type        = 2; // Optional user-defined type (e.g. LOAN, ART, FUND, SHARE CLASS)\n  string                           description = 3; // Optional user-defined description, title, name, etc. for display\n  map<string, google.protobuf.Any> kv          = 4; // Key-value store of asset data\n\n}\n')),(0,r.kt)("p",null,"The NFT Onboarding API consumes protobufs serialized to ",(0,r.kt)("a",{parentName:"p",href:"https://www.json.org/json-en.html"},"JSON")," format. Note in particular that the ",(0,r.kt)("inlineCode",{parentName:"p"},"Any")," protobuf JSON representation consists of a ",(0,r.kt)("inlineCode",{parentName:"p"},"typeUrl")," followed by the normal JSON representation of the data proto ",(0,r.kt)("inlineCode",{parentName:"p"},"Message"),"."),(0,r.kt)("p",null,"Example of a Loan Asset (truncated):"))}d.isMDXComponent=!0},5707:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cee-1a88ebfe4835581ca7e67e18f9ec5e29.png"},7121:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/nft-bd8a18bdaa824c7cb3929a92452a6a15.png"}}]);