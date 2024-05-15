"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[1727],{76089:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var i=t(85893),r=t(11151),o=t(98677);const a={},s="Permissioning Others",c={id:"pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/key-management/permissioning-others",title:"Permissioning Others",description:'<DocSubheader text="When to use each key"',source:"@site/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/key-management/permissioning-others.md",sourceDirName:"pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/key-management",slug:"/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/key-management/permissioning-others",permalink:"/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/key-management/permissioning-others",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Key Management",permalink:"/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/key-management/"},next:{title:"Summary",permalink:"/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/summary"}},d={},p=[{value:"Replication and Decryption",id:"replication-and-decryption",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"permissioning-others",children:"Permissioning Others"}),"\n","\n",(0,i.jsx)(o.Y,{text:"When to use each key"}),"\n",(0,i.jsx)(n.p,{children:"When storing data in the Encrypted Object Store, asset originators have to the choice to encrypt that data with one or more keys. First and foremost, you will want to encrypt your own data with your own public encryption key. After that, the choice is yours to permission other entities such as your business partners or various down stream applications like Portfolio Manager and DART."}),"\n",(0,i.jsxs)(n.p,{children:["The primary mechanism for providing this support is done by adding additional audience members to stored assets. Please reference ",(0,i.jsx)(n.a,{href:"/docs/pb/p8e/overview/encrypted-object-store/dime-encryption-envelope-specification#dime-encryptionenvelopespecification-retrievalcontext",children:"DIME (Encryption Envelope Specification)"})," for additional information on how data is encrypted."]}),"\n",(0,i.jsxs)(n.p,{children:["When storing objects in the Object Store or executing BlockVault contracts, additional audiences can be specified in a ",(0,i.jsx)(n.code,{children:"permissions"})," object using the ",(0,i.jsx)(n.code,{children:"PermissionInfo"})," schema:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"PermissionInfo {\n    audiences: [\n        Audience {\n            uuid: UUID?\n            keys: AudienceKeyPair? {\n                encryptionKey: String\n                signingKey: String\n            }\n        }\n    ]\n    permissionDart: Boolean\n    permissionPortfolioManager: Boolean\n}\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["The API checks for and Audience by UUID first and will fail if there is no matching entity found in the Key Management solution. If you want to include and audience by supplying their public keys, omit the ",(0,i.jsx)(n.code,{children:"uuid"})," in the ",(0,i.jsx)(n.code,{children:"Audience"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"For example, adding a business partner can take one of two shapes:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'// 1. Using UUID (assumes partner\'s keys are stored in the connected KMS under the UUID supplied)\n"permissions": {\n  "audiences": [\n    {\n      "uuid": <partner\'s_uuid>\n    }\n  ],\n  ...\n}\n\n// 2. Using an AudienceKeyPair\n"permissions": {\n  "audiences": [\n    {\n      "keys": {\n        "encryptionKey": <Base64EncodedPublicKey>,\n        "signingKey: <Base64EncodedPublicKey>\n      }\n    }\n  ],\n  ...\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"To make onboarding loan data in such a way that it is accessible to DART and/or Portfolio Manager, the API has two additional parameters that turn those decisions into a binary decision."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'{\n  ...\n  "permissionDart": true,\n  "permissionPortfolioManager": true,\n  ...\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Passing those two values as ",(0,i.jsx)(n.code,{children:"true"})," will add the public keys for each service to the audiences list that gets submitted to BlockVault. Asset originators can decide for themselves which services they want to permission on an asset-by-asset basis."]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["All three ",(0,i.jsx)(n.code,{children:"PermissionInfo"})," attributes and as many ",(0,i.jsx)(n.code,{children:"Audience"})," members as needed can be included in each request."]})}),"\n",(0,i.jsx)(n.h2,{id:"replication-and-decryption",children:"Replication and Decryption"}),"\n",(0,i.jsx)(n.p,{children:"If you haven't already, check out the section on Configuring Replication between two object stores. Replication is the primary method for sharing data with business partners. When configured correctly, encrypting data with your partner's public key will automatically trigger replication and allow that partner to decrypt your data. Conversely, failing to add a partner as an additional audience will prevent them from receiver and decrypting the data."})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},98677:(e,n,t)=>{t.d(n,{Y:()=>r});t(67294);var i=t(85893);const r=e=>{let{text:n}=e;return(0,i.jsx)("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500",children:n})}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>a});var i=t(67294);const r={},o=i.createContext(r);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);