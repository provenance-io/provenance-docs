"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[5642],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),y=p(n),u=i,f=y["".concat(s,".").concat(u)]||y[u]||d[u]||a;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},1531:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={},o="Signing and Encryption",c={unversionedId:"pb/p8e/overview/api/signing-and-encryption",id:"pb/p8e/overview/api/signing-and-encryption",title:"Signing and Encryption",description:"Signing and Encryption is a critical part of P8e's way of managing data signing and safe data transactions between the client's data, Object Store and the Blockchain. The current P8e architecture now allows for easier integration of any new key custody provider via a Factory and class implementation by implementing abstract methods from the interface base class.",source:"@site/docs/pb/p8e/overview/api/signing-and-encryption.md",sourceDirName:"pb/p8e/overview/api",slug:"/pb/p8e/overview/api/signing-and-encryption",permalink:"/provenance-docs/docs/pb/p8e/overview/api/signing-and-encryption",draft:!1,tags:[],version:"current",frontMatter:{}},s={},p=[{value:"Signing",id:"signing",level:2},{value:"Pen",id:"pen",level:3},{value:"SmartKey",id:"smartkey",level:3},{value:"Encryption",id:"encryption",level:2}],l={toc:p};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"signing-and-encryption"},"Signing and Encryption"),(0,i.kt)("p",null,"Signing and Encryption is a critical part of P8e's way of managing data signing and safe data transactions between the client's data, Object Store and the Blockchain. The current P8e architecture now allows for easier integration of any new key custody provider via a Factory and class implementation by implementing abstract methods from the interface base class."),(0,i.kt)("h2",{id:"signing"},"Signing"),(0,i.kt)("p",null,"Signing is based off of the way the client has decided to store their affiliate signing key pair. "),(0,i.kt)("h3",{id:"pen"},"Pen"),(0,i.kt)("p",null,"The Pen class uses the standard java security Signature implementation to sign data given that the affiliate key pair is stored within P8e's affiliate database."),(0,i.kt)("h3",{id:"smartkey"},"SmartKey"),(0,i.kt)("p",null,"SmartKey (",(0,i.kt)("a",{parentName:"p",href:"https://www.equinix.com/services/edge-services/smartkey"},"https://www.equinix.com/services/edge-services/smartkey"),") is a key custody service provider that stores an affiliate's private key within an HSM (Hardware Security Module). P8e leverages the signing API provided from SmartKey to sign data before being sent to Object Store and the data verification process uses the java security Signature amongst all key custody providers."),(0,i.kt)("h2",{id:"encryption"},"Encryption"),(0,i.kt)("p",null,"P8E uses an ECIES public key authentication schema to encrypt and decrypt data, based on the affiliate's type, it would either retrieve the encryption key pair from either the P8e local database or from the specified key custody provider. There are only minor deviation in computing the KDF involving the respective key custody provider's API, but will continue to decrypt at a common manner, using the HKDF-SHA256 derivation function."))}d.isMDXComponent=!0}}]);