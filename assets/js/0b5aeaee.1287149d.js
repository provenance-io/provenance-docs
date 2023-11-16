"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[5325],{5736:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>s,toc:()=>p});var i=n(5893),o=n(1151),r=n(8677);const c={},a="Configuring Replication",s={id:"pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/deploying-the-encrypted-object-store/configuring-replication",title:"Configuring Replication",description:'<DocSubheader text="How to replicate data from one Object Store to another"',source:"@site/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/deploying-the-encrypted-object-store/configuring-replication.md",sourceDirName:"pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/deploying-the-encrypted-object-store",slug:"/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/deploying-the-encrypted-object-store/configuring-replication",permalink:"/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/deploying-the-encrypted-object-store/configuring-replication",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Deploying the Encrypted Object Store",permalink:"/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/deploying-the-encrypted-object-store/"},next:{title:"BlockVault Contracts",permalink:"/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/p8e-contracts/"}},l={},p=[{value:"Controlling Replication",id:"controlling-replication",level:2},{value:"Practical Use",id:"practical-use",level:2},{value:"Security Considerations",id:"security-considerations",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"configuring-replication",children:"Configuring Replication"}),"\n","\n","\n",(0,i.jsx)(r.Y,{text:"How to replicate data from one Object Store to another"}),"\n",(0,i.jsx)(t.p,{children:"Provenance Blockchain Object Stores have the ability to replicate encrypted data between themselves. While the feature is not enabled by default, it is easy to turn on and configure."}),"\n",(0,i.jsx)(t.p,{children:"Replication is managed by the owner of the Object Store. When deploying the Object Store, an owner will need to enable replication at the global level with an environment variable."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["Replication is enabled by default in the configuration provided by the local deployment script. See the ",(0,i.jsx)(t.a,{href:"https://github.com/provenance-io/p8e-cee-api/blob/main/service/docker/common-object-store-1.env#L4",children:"ENV"})," file for each object store for the variable name."]})}),"\n",(0,i.jsx)(t.h2,{id:"controlling-replication",children:"Controlling Replication"}),"\n",(0,i.jsx)(t.p,{children:"Replication is then controlled by mapping public encryption keys to Object Stores. The idea is that when one party maps another party's public encryption key to that same third-party's object store, data encrypted with that public encryption key will automatically be replicated to the third-party's object store."}),"\n",(0,i.jsx)(t.p,{children:"Each party that owns their own object store must enable replication in the other direction to properly set up bi-directional replication. This is designed to keep control in the hands of the object store owner."}),"\n",(0,i.jsxs)(t.p,{children:["To make configuration easier, the ",(0,i.jsx)(t.a,{href:"https://github.com/provenance-io/p8e-cee-api",children:"BlockVault Contract Execution Environment API"})," includes an endpoint to help object store owners map public encryption keys to third-party object stores. The following curl command shows this endpoint in action."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'curl --location \\\n--request POST \'${HOST}/api/v1/config/replication/enable\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "sourceObjectStoreAddress": "grpc://object-store-v2.p8e:80",\n    "targetObjectStoreAddress": "grpc://object-store-2-v2.p8e:80",\n    "targetPublicKey":"<target party/system public key>"\n}\'\n'})}),"\n",(0,i.jsx)(t.p,{children:"As you can see, the user supplies three data points:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Source Object Store Address: This is the address of the object store where this configuration will be applied"}),"\n",(0,i.jsx)(t.li,{children:"Target Object Store Address: This is the address of the object store where encrypted data will be replicated each time the public encryption key provided in this request is used to encrypt data in the source object store"}),"\n",(0,i.jsx)(t.li,{children:"Target Public Key: This is the key that will be mapped to the target object store. Any time this key is used for encryption in the source object store, data is automatically replicated to the target object store."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"practical-use",children:"Practical Use"}),"\n",(0,i.jsx)(t.p,{children:"After replication is enabled and public encryption keys are mapped to the appropriate target object store, users can control which object get replicated by choosing when to use that third-party's public encryption key."}),"\n",(0,i.jsx)(t.p,{children:"When creating an object using the BlockVault Contract Execution Environment API, clients can specify one of more Additional Audiences. This is where they can choose to pass as many public encryption keys as necessary for their use case. For each encryption key, the object store will automatically check to see if replication is configured and automatically replicate that particular object."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"It does not automatically replicate every object in the Object Store."})}),"\n",(0,i.jsx)(t.h2,{id:"security-considerations",children:"Security Considerations"}),"\n",(0,i.jsx)(t.p,{children:"Developers need to consider how traffic is managed between object stores and who can access the endpoint used to configure replication. Whitelisting IP addresses and/or using API keys for communication between objects stores in two separate environments is recommended. Additionally, the BlockVault Contract Execution Environment API should be extended so that only the owner of an object store can call the configuration endpoint in a test or production environment."})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8677:(e,t,n)=>{n.d(t,{Y:()=>o});n(7294);var i=n(5893);const o=e=>{let{text:t}=e;return(0,i.jsx)("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500",children:t})}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>c});var i=n(7294);const o={},r=i.createContext(o);function c(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);