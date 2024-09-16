"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[8510],{8917:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var i=n(74848),r=n(28453);const o={},s="Configuration Endpoints",c={id:"pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/configuration-endpoints",title:"Configuration Endpoints",description:"Enable Replication Across Object Stores",source:"@site/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/configuration-endpoints.md",sourceDirName:"pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification",slug:"/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/configuration-endpoints",permalink:"/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/configuration-endpoints",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"API Specification",permalink:"/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/"},next:{title:"Object Store Endpoints",permalink:"/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/"}},a={},d=[{value:"Enable Replication Across Object Stores",id:"enable-replication-across-object-stores",level:2}];function l(e){const t={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"configuration-endpoints",children:"Configuration Endpoints"}),"\n",(0,i.jsx)(t.h2,{id:"enable-replication-across-object-stores",children:"Enable Replication Across Object Stores"}),"\n",(0,i.jsx)(t.p,{children:'Some situations arise where you want the data written to one BlockVault Object Store to be replicated to another BlockVault Object Store. This is commonly required to allow desired assets to be shared across parties with parties sharing only public information and not having to expose their private secrets. This results in all objects stored into the specified source object store into the target object store with the same object hash. That allows both the source and target object store to retrieve that object using their own URI "object:/<Object Store URL>/<hash>".'}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"URL"}),": ",(0,i.jsx)(t.code,{children:"https://{host}/api/v1/config/replication/enable"})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Method:"})," POST"]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Request Body:"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'{\n    "sourceObjectStoreAddress": "grpc://object-store-v2.p8e:80",\n    "targetObjectStoreAddress": "grpc://object-store-2-v2.p8e:80",\n    "targetSigningPublicKey": "<target signing public key>"\n    "targetEncryptionPublicKey": "<target encryption public key>"\n}\n'})}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Field"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Data Type"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"sourceObjectStoreAddress"}),(0,i.jsx)(t.td,{children:"The URL to the encrypted object store to that object will be replicated from."}),(0,i.jsx)(t.td,{children:"String"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"targetObjectStoreAddress"}),(0,i.jsx)(t.td,{children:"The URL to the encrypted object store to that object will be replicated to."}),(0,i.jsx)(t.td,{children:"String"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"targetSigningPublicKey"}),(0,i.jsx)(t.td,{children:"The signing public key of the affiliate to register"}),(0,i.jsx)(t.td,{children:"String"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"targetEncryptionPublicKey"}),(0,i.jsx)(t.td,{children:"The public key that the source encrypted object store will use to write to the target encrypted object store."}),(0,i.jsx)(t.td,{})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Response:"})}),"\n",(0,i.jsx)(t.p,{children:"204 represents a success replication request."})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var i=n(96540);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);