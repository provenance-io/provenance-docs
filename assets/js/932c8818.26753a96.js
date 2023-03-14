"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5869],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>p});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),h=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=h(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=h(n),p=o,m=u["".concat(s,".").concat(p)]||u[p]||d[p]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var h=2;h<a;h++)i[h]=n[h];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9346:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var r=n(7462),o=(n(7294),n(3905));const a={},i="Client Contract Execution Environment (P8e) FAQ",c={unversionedId:"pb/p8e/client-contract-execution-environment-faq",id:"pb/p8e/client-contract-execution-environment-faq",title:"Client Contract Execution Environment \\(P8e\\) FAQ",description:"What is the Client Contract Execution Environment or CCEE or P8e?",source:"@site/docs/pb/p8e/client-contract-execution-environment-faq.md",sourceDirName:"pb/p8e",slug:"/pb/p8e/client-contract-execution-environment-faq",permalink:"/docs/pb/p8e/client-contract-execution-environment-faq",draft:!1,tags:[],version:"current",frontMatter:{}},s={},h=[{value:'What is the Client Contract Execution Environment or CCEE or P8e? <a id="what-is-the-client-contract-execution-environment-or-ccee-or-p-8-e"></a>',id:"what-is-the-client-contract-execution-environment-or-ccee-or-p8e-",level:2},{value:"What does P8e stand for?",id:"what-does-p8e-stand-for",level:2},{value:'What is a hash-id <a id="what-does-p-8-e-stand-for"></a>',id:"what-is-a-hash-id-",level:2},{value:"What is the EOS or Encrypted Object Store?",id:"what-is-the-eos-or-encrypted-object-store",level:2}],l={toc:h};function d(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"client-contract-execution-environment-p8e-faq"},"Client Contract Execution Environment ","(","P8e",")"," FAQ"),(0,o.kt)("h2",{id:"what-is-the-client-contract-execution-environment-or-ccee-or-p8e-"},"What is the Client Contract Execution Environment or CCEE or P8e? ",(0,o.kt)("a",{id:"what-is-the-client-contract-execution-environment-or-ccee-or-p-8-e"})),(0,o.kt)("p",null,"The Client Contract Environment ","(","CCEE or P8e",")"," is a framework that is part of the Provenance Blockchain ecosystem. The CCEE includes components that facilitate the management of contracts and its associated documents both on-chain and off-chain. One component deals with the secure communication between business partners to exchange information required to fulfill the contract. This communication flows through an asynchronous mail-box system where all messages are authenticated and encrypted by the two parties\u2019 keys."),(0,o.kt)("p",null,"In addition, the CCEE includes facilities to easily refer to documents by their hash-id, and to encrypt and store those docs in an Encrypted Object Store ","(","EOS",")",". Those encrypted documents are indexed by their hash-id and optionally by selected document attribute values. The latter allows one to aggregate documents based on common attributes without revealing their sensitive content."),(0,o.kt)("h2",{id:"what-does-p8e-stand-for"},"What does P8e stand for?"),(0,o.kt)("p",null,'P8e is the nickname for Provenance Blockchain\u2019s Client Contract Execution Environment. The abbreviation comes from the word "Provenance", which starts with a \u201cP\u201d, then skips 8 letters and ends with \u201ce\u201d - \u201cP8e\u201d.'),(0,o.kt)("h2",{id:"what-is-a-hash-id-"},"What is a hash-id ",(0,o.kt)("a",{id:"what-does-p-8-e-stand-for"})),(0,o.kt)("p",null,"When external documents are referred to by the cryptographic hash of their contents in on-chain, immutable transactions, it extends the immutability to that off-chain information. The hash value of a document\u2019s content is used as a globally unique identifier ","(","URI",")"," or name ","(","URN",")"," for that content and is typified by \u2018hash-id\u2019."),(0,o.kt)("h2",{id:"what-is-the-eos-or-encrypted-object-store"},"What is the EOS or Encrypted Object Store?"),(0,o.kt)("p",null,"For many financial applications, many of the relevant documents, data and contracts are confidential and private. To facilitate that requirement, the Provenance Blockchain ecosystem includes services that make it easy to refer to confidential documents by its hash-id, and encrypt and store those documents in a database where they are indexed by their hash-id. The encryption-key is specific for the owner or client of that document. When a contract requires the exchange of such a document, the service will re-encrypt the document with a key associated with the business partner receiving that document."))}d.isMDXComponent=!0}}]);