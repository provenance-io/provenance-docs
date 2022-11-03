"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[8006],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),d=i,b=u["".concat(p,".").concat(d)]||u[d]||g[d]||o;return n?r.createElement(b,a(a({ref:t},s),{},{components:n})):r.createElement(b,a({ref:t},s))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},522:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={},a="Configuration Endpoints",c={unversionedId:"pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/configuration-endpoints",id:"pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/configuration-endpoints",title:"Configuration Endpoints",description:"Enable Replication Across Object Stores",source:"@site/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/configuration-endpoints.md",sourceDirName:"pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification",slug:"/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/configuration-endpoints",permalink:"/provenance-docs/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/configuration-endpoints",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"API Specification",permalink:"/provenance-docs/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/"},next:{title:"Object Store Endpoints",permalink:"/provenance-docs/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/"}},p={},l=[{value:"Enable Replication Across Object Stores",id:"enable-replication-across-object-stores",level:2}],s={toc:l};function g(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuration-endpoints"},"Configuration Endpoints"),(0,i.kt)("h2",{id:"enable-replication-across-object-stores"},"Enable Replication Across Object Stores"),(0,i.kt)("p",null,'Some situations arise where you want the data written to one p8e Object Store to be replicated to another p8e Object Store. This is commonly required to allow desired assets to be shared across parties with parties sharing only public information and not having to expose their private secrets. This results in all objects stored into the specified source object store into the target object store with the same object hash. That allows both the source and target object store to retrieve that object using their own URI "object:/\\<Object Store URL',">","/\\<hash",">",'".'),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"URL"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"https://{host}/api/v1/config/replication/enable")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Method:")," POST"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Request Body:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n    "sourceObjectStoreAddress": "grpc://object-store-v2.p8e:80",\n    "targetObjectStoreAddress": "grpc://object-store-2-v2.p8e:80",\n    "targetSigningPublicKey": "<target signing public key>"\n    "targetEncryptionPublicKey": "<target encryption public key>"\n}\n')),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Data Type"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"sourceObjectStoreAddress"),(0,i.kt)("td",{parentName:"tr",align:null},"The URL to the encrypted object store to that object will be replicated from."),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"targetObjectStoreAddress"),(0,i.kt)("td",{parentName:"tr",align:null},"The URL to the encrypted object store to that object will be replicated to."),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"targetSigningPublicKey"),(0,i.kt)("td",{parentName:"tr",align:null},"The signing public key of the affiliate to register"),(0,i.kt)("td",{parentName:"tr",align:null},"String")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"targetEncryptionPublicKey"),(0,i.kt)("td",{parentName:"tr",align:null},"The public key that the source encrypted object store will use to write to the target encrypted object store."),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Response:")),(0,i.kt)("p",null,"204 represents a success replication request."))}g.isMDXComponent=!0}}]);