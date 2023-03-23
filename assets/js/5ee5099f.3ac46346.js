"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5105],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||d[h]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8677:(e,t,n)=>{n.d(t,{Y:()=>a});var r=n(7294);const a=e=>{let{text:t}=e;return r.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},t)}},3236:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905)),o=n(8677);const i={},c="BlockVault CEE API",l={unversionedId:"pb/integrating/integrating-with-p8e/loan-onboarding-service/index",id:"pb/integrating/integrating-with-p8e/loan-onboarding-service/index",title:"BlockVault CEE API",description:'<DocSubheader text="A variation of the Asset Onboarding Service that implements the BlockVault Scope SDK"',source:"@site/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/index.md",sourceDirName:"pb/integrating/integrating-with-p8e/loan-onboarding-service",slug:"/pb/integrating/integrating-with-p8e/loan-onboarding-service/",permalink:"/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Summary",permalink:"/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/summary"},next:{title:"API Usage Guide",permalink:"/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-usage-guide/"}},p={},s=[{value:"Deploying Locally",id:"deploying-locally",level:2},{value:"Provenance Blockchain Member ID",id:"provenance-blockchain-member-id",level:3},{value:"API Key for Test or Production Environments",id:"api-key-for-test-or-production-environments",level:3}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"blockvault-cee-api"},"BlockVault CEE API"),(0,a.kt)(o.Y,{text:"A variation of the Asset Onboarding Service that implements the BlockVault Scope SDK",mdxType:"DocSubheader"}),(0,a.kt)("p",null,"In this section, you'll learn about a practical implementation of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/p8e-scope-sdk"},"p8e-scope-sdk"),", the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/p8e-gradle-plugin"},"p8e-gradle-plugin"),", and the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/metadata-asset-model"},"metadata-asset-model"),', which together can be used to register new BlockVault contract specifications ("smart contracts"), then execute those contracts to store data in the Encrypted Object Store and record assets on the Provenance Blockchain.'),(0,a.kt)("p",null,"We will cover the ",(0,a.kt)("a",{parentName:"p",href:"api-specification/"},"API Specification")," and walk through the proper execution order:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Publishing a new BlockVault contract,"),(0,a.kt)("li",{parentName:"ol"},"Storing data in p8e, and finally"),(0,a.kt)("li",{parentName:"ol"},"Recording a new asset on the Provenance Blockchain ledger.")),(0,a.kt)("h2",{id:"deploying-locally"},"Deploying Locally"),(0,a.kt)("p",null,"To run this service locally, be sure to have ",(0,a.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker")," and ",(0,a.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/"},"Vault by Hashicorp")," installed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew install docker\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"brew tap hashicorp/tap\nbrew install hashicorp/tap/vault\n")),(0,a.kt)("p",null,"once installed, all you need to do is run the included docker setup script"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./dc.sh up\n")),(0,a.kt)("p",null,"and run the service - either via an Intellij run configuration or via the command line with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"./gradlew bootRun\n")),(0,a.kt)("h3",{id:"provenance-blockchain-member-id"},"Provenance Blockchain Member ID"),(0,a.kt)("p",null,"With each request to the Contract Execution Environment endpoints, it's important to identify which Provenance Blockchain member is making the request to sign the transaction. To do this, the p8e-cee-api requires an ",(0,a.kt)("inlineCode",{parentName:"p"},"x-uuid")," header on every request."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"When testing locally, be sure to include the ",(0,a.kt)("inlineCode",{parentName:"p"},"x-uuid")," header with a value that correlates to one of the UUID's added as secrets to Vault in the ",(0,a.kt)("inlineCode",{parentName:"p"},"dc.sh up")," script.")),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"x-uuid")," header is automatically removed from requests made to the test or production environments and replaced with the UUID that matches the API Key used in the request. See next section for more detail.")),(0,a.kt)("h3",{id:"api-key-for-test-or-production-environments"},"API Key for Test or Production Environments"),(0,a.kt)("p",null,"Figure Tech uses ",(0,a.kt)("a",{parentName:"p",href:"https://konghq.com/kong"},"Kong API Gateway")," to handle ingress into its Kubernetes clusters. The Figure Tech hosted instances of the ",(0,a.kt)("inlineCode",{parentName:"p"},"p8e-cee-api")," are secured by specific API Keys for each participant in the Provenance Blockchain network."),(0,a.kt)("p",null,"When used, Kong will authenticate an API Key against an ACL, strip any provided ",(0,a.kt)("inlineCode",{parentName:"p"},"x-uuid")," header and add a new ",(0,a.kt)("inlineCode",{parentName:"p"},"x-uuid")," header with the appropriate UUID associated with the API Key."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"API Keys are available upon request.")))}u.isMDXComponent=!0}}]);