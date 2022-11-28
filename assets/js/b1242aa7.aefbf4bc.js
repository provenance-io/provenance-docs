"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[981],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=l(n),d=o,m=h["".concat(s,".").concat(d)]||h[d]||u[d]||i;return n?a.createElement(m,r(r({ref:t},p),{},{components:n})):a.createElement(m,r({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8677:(e,t,n)=>{n.d(t,{Y:()=>o});var a=n(7294);const o=e=>{let{text:t}=e;return a.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},t)}},8657:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=n(7462),o=(n(7294),n(3905)),i=n(8677);const r={},c="Key Management",s={unversionedId:"pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/key-management/index",id:"pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/key-management/index",title:"Key Management",description:'<DocSubheader text="Solutions to keeping your keys safe and organized"',source:"@site/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/key-management/index.md",sourceDirName:"pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/key-management",slug:"/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/key-management/",permalink:"/provenance-docs/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/key-management/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Onboard Loan Contract",permalink:"/provenance-docs/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/p8e-contracts/example-loan-contracts"},next:{title:"Permissioning Others",permalink:"/provenance-docs/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/key-management/permissioning-others"}},l={},p=[{value:"Provenance Key Access Library",id:"provenance-key-access-library",level:2},{value:"Storing Keys in Vault",id:"storing-keys-in-vault",level:2},{value:"Local Development",id:"local-development",level:3},{value:"Vault Token - No Authentication by Default",id:"vault-token---no-authentication-by-default",level:4},{value:"Test and Production Environments",id:"test-and-production-environments",level:3},{value:"Wallet Connect",id:"wallet-connect",level:2}],u={toc:p};function h(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"key-management"},"Key Management"),(0,o.kt)(i.Y,{text:"Solutions to keeping your keys safe and organized",mdxType:"DocSubheader"}),(0,o.kt)("p",null,"The Provenance Blockchain network relies on public key infrastructure on both the public and client-side layers. Like any blockchain network, the only thing stopping the value of assets stored on-chain from changing hands, or data from being decrypted in the Object Store is secure key management."),(0,o.kt)("h2",{id:"provenance-key-access-library"},"Provenance Key Access Library"),(0,o.kt)("p",null,"The p8e CEE API takes advantage of the Provenance Key Access Library, which provides a layer of abstraction between the API and Key Management System (KMS). Rather than sending keys in an API request, consumers of the API will send a token authorizing them to pull the key from the KMS, and an identifier for the particular key they wish to use."),(0,o.kt)("p",null,"There are many different KMS solutions on the market today, each providing their own methods for authentication and authorization. It is up to the entity hosting the API to decide which KMS to use and how best to authenticate users. By default, the library is configured to use ",(0,o.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/"},"Hashicorp Vault")," as a KMS. This guide will describe the default implementation, which is designed to be used locally during testing, as well as a solution for accessing keys in a test or production environment. To view the full source, please visit the Key Access Library ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/originator-key-access-lib"},"here"),"."),(0,o.kt)("h2",{id:"storing-keys-in-vault"},"Storing Keys in Vault"),(0,o.kt)("p",null,"Hashicorp Vault provides a solution for managing secrets and protecting sensitive data. It provides many authentication methods and many secrets engines for storing sensitive data. Access to a particular path in a secrets engine is governed by a policy that provides a declarative way to grant or forbid access to certain operations in Vault."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Vault concepts such as ",(0,o.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/docs/concepts/auth"},"Authentication"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/docs/concepts/identity"},"Identity"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/docs/concepts/tokens"},"Tokens"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/docs/concepts/policies"},"Policies"),", and each of the ",(0,o.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/docs/auth"},"Auth Methods")," and ",(0,o.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/docs/secrets"},"Secrets Engines")," are well documented.")),(0,o.kt)("h3",{id:"local-development"},"Local Development"),(0,o.kt)("p",null,"The script that launches the multi-party p8e environment locally in Docker includes a Vault instance that automatically unseals itself, creates a ",(0,o.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/docs/secrets/kv/kv-v2"},"Key-Value")," secrets engine called ",(0,o.kt)("inlineCode",{parentName:"p"},"kv2_originations"),", and copies the local test keys provided by the default network configuration as secrets in that engine. The secrets are organized by organization in a directory called ",(0,o.kt)("inlineCode",{parentName:"p"},"originators"),', meaning the "key" for the secret is the organization\'s provenance member ID and the "value" of the secret is a JSON object containing key-value pairs for each key or mnemonic belonging that that organization. By default, there are three key pairs: encryption, signing, and auth.'),(0,o.kt)("p",null,"Example path and naming convention:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'// Org <UUID> keys would be found at the path\n// http://127.0.0.1:8200/v1/kv2_originations/data/originators/<UUID>\n{\n    "public_encryption_key": "<value>",\n    "private_encryption_key": "<value>",\n    "public_signing_key": "<value>",\n    "private_signing_key": "<value>",\n    "public_auth_key": "<value>",\n    "private_auth_key": "<value>",\n    "private_mnemonic": "<value>"\n}\n')),(0,o.kt)("h4",{id:"vault-token---no-authentication-by-default"},"Vault Token - No Authentication by Default"),(0,o.kt)("p",null,"As Vault unseals itself, the script copies the root Vault token to a local file known to the API as the default location of the vault token to use with each request. For this reason, the API does not require the user to authenticate with Vault before each request, and instead simply requires the user to supply the ID of the organization that correlates to the key in the Key-Value pair."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This is not a secure solution and should not be used for anything other than local development.")),(0,o.kt)("h3",{id:"test-and-production-environments"},"Test and Production Environments"),(0,o.kt)("p",null,"In a test or production environment, authentication against the chosen KMS is a requirement. Ultimately it is up to the tech services provider that operates the API to implement the authentication and authorization method of their choosing."),(0,o.kt)("p",null,"If they choose to implement Vault, a policy mapping an authenticated user to a specific path in a secrets engine would grant or forbid access to keys."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Contact Figure Tech for information about the sandbox environment including the auth method of choice and how to get an API key.")),(0,o.kt)("h2",{id:"wallet-connect"},"Wallet Connect"),(0,o.kt)("p",null,"Coming soon!"))}h.isMDXComponent=!0}}]);