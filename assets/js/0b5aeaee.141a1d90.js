"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[5325],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,b=u["".concat(p,".").concat(h)]||u[h]||d[h]||i;return n?o.createElement(b,a(a({ref:t},s),{},{components:n})):o.createElement(b,a({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8677:(e,t,n)=>{n.d(t,{Y:()=>r});var o=n(7294);const r=e=>{let{text:t}=e;return o.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},t)}},1415:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var o=n(7462),r=(n(7294),n(3905)),i=n(8677);const a={},c="Configuring Replication",p={unversionedId:"pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/deploying-the-encrypted-object-store/configuring-replication",id:"pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/deploying-the-encrypted-object-store/configuring-replication",title:"Configuring Replication",description:'<DocSubheader text="How to replicate data from one Object Store to another"',source:"@site/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/deploying-the-encrypted-object-store/configuring-replication.md",sourceDirName:"pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/deploying-the-encrypted-object-store",slug:"/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/deploying-the-encrypted-object-store/configuring-replication",permalink:"/provenance-docs/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/deploying-the-encrypted-object-store/configuring-replication",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Deploying the Encrypted Object Store",permalink:"/provenance-docs/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/deploying-the-encrypted-object-store/"},next:{title:"P8e Contracts",permalink:"/provenance-docs/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/p8e-contracts/"}},l={},s=[{value:"Controlling Replication",id:"controlling-replication",level:2},{value:"Practical Use",id:"practical-use",level:2},{value:"Security Considerations",id:"security-considerations",level:2}],d={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuring-replication"},"Configuring Replication"),(0,r.kt)(i.Y,{text:"How to replicate data from one Object Store to another",mdxType:"DocSubheader"}),(0,r.kt)("p",null,"Provenance Blockchain Object Stores have the ability to replicate encrypted data between themselves. While the feature is not enabled by default, it is easy to turn on and configure."),(0,r.kt)("p",null,"Replication is managed by the owner of the Object Store. When deploying the Object Store, an owner will need to enable replication at the global level with an environment variable."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Replication is enabled by default in the configuration provided by the local deployment script. See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/p8e-cee-api/blob/main/service/docker/common-object-store-1.env#L4"},"ENV")," file for each object store for the variable name.")),(0,r.kt)("h2",{id:"controlling-replication"},"Controlling Replication"),(0,r.kt)("p",null,"Replication is then controlled by mapping public encryption keys to Object Stores. The idea is that when one party maps another party's public encryption key to that same third-party's object store, data encrypted with that public encryption key will automatically be replicated to the third-party's object store."),(0,r.kt)("p",null,"Each party that owns their own object store must enable replication in the other direction to properly set up bi-directional replication. This is designed to keep control in the hands of the object store owner."),(0,r.kt)("p",null,"To make configuration easier, the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/p8e-cee-api"},"p8e Contract Execution Environment API")," includes an endpoint to help object store owners map public encryption keys to third-party object stores. The following curl command shows this endpoint in action."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl --location \\\n--request POST \'${HOST}/api/v1/config/replication/enable\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "sourceObjectStoreAddress": "grpc://object-store-v2.p8e:80",\n    "targetObjectStoreAddress": "grpc://object-store-2-v2.p8e:80",\n    "targetPublicKey":"<target party/system public key>"\n}\'\n')),(0,r.kt)("p",null,"As you can see, the user supplies three data points:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Source Object Store Address: This is the address of the object store where this configuration will be applied"),(0,r.kt)("li",{parentName:"ul"},"Target Object Store Address: This is the address of the object store where encrypted data will be replicated each time the public encryption key provided in this request is used to encrypt data in the source object store"),(0,r.kt)("li",{parentName:"ul"},"Target Public Key: This is the key that will be mapped to the target object store. Any time this key is used for encryption in the source object store, data is automatically replicated to the target object store.")),(0,r.kt)("h2",{id:"practical-use"},"Practical Use"),(0,r.kt)("p",null,"After replication is enabled and public encryption keys are mapped to the appropriate target object store, users can control which object get replicated by choosing when to use that third-party's public encryption key."),(0,r.kt)("p",null,"When creating an object using the p8e Contract Execution Environment API, clients can specify one of more Additional Audiences. This is where they can choose to pass as many public encryption keys as necessary for their use case. For each encryption key, the object store will automatically check to see if replication is configured and automatically replicate that particular object."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"It does not automatically replicate every object in the Object Store.")),(0,r.kt)("h2",{id:"security-considerations"},"Security Considerations"),(0,r.kt)("p",null,"Developers need to consider how traffic is managed between object stores and who can access the endpoint used to configure replication. Whitelisting IP addresses and/or using API keys for communication between objects stores in two separate environments is recommended. Additionally, the p8e Contract Execution Environment API should be extended so that only the owner of an object store can call the configuration endpoint in a test or production environment."))}u.isMDXComponent=!0}}]);