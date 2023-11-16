"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[5147],{1958:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var n=i(5893),a=i(1151);const r={title:"Identity Verification"},o="Identity Verification on Provenance Blockchain",c={id:"learn/dapps/identity-verification",title:"Identity Verification",description:"Identity verification processes, such as Know Your Customer (KYC), Anti-Money Laundering (AML), and 506\\(c\\) investor",source:"@site/docs/learn/dapps/identity-verification.md",sourceDirName:"learn/dapps",slug:"/learn/dapps/identity-verification",permalink:"/docs/learn/dapps/identity-verification",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Identity Verification"},sidebar:"dappsSidebar",previous:{title:"dApp Architecture",permalink:"/docs/learn/dapps/dapps-overview"},next:{title:"Verification Flow",permalink:"/docs/learn/dapps/identity-verification/flow"}},s={},d=[{value:"Rich Verification Data",id:"rich-verification-data",level:2}];function h(e){const t={a:"a",h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"identity-verification-on-provenance-blockchain",children:"Identity Verification on Provenance Blockchain"}),"\n",(0,n.jsxs)(t.p,{children:["Identity verification processes, such as ",(0,n.jsx)(t.strong,{children:"Know Your Customer (KYC)"}),", ",(0,n.jsx)(t.strong,{children:"Anti-Money Laundering (AML)"}),", and ",(0,n.jsx)(t.strong,{children:"506(c) investor\naccreditation"}),", are critical for ensuring the security and integrity of financial and blockchain systems. However,\nmanaging these processes can be a complex and challenging task, requiring significant time and resources."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"identity verification check",src:i(5243).Z+"",width:"4742",height:"912"})}),"\n",(0,n.jsxs)(t.p,{children:["To simplify and streamline the identity verification process, Provenance Blockchain has developed a solution that uses\n",(0,n.jsx)(t.a,{href:"/docs/pb/modules/attribute-module",children:(0,n.jsx)(t.strong,{children:"Attributes"})}),", a name-value pair structure that allows for the storage and management of verified identity information on\nthe blockchain. Attributes are essentially metadata added to a blockchain account to indicate that an individual or\nentity has passed a specific verification process."]}),"\n",(0,n.jsxs)(t.p,{children:["For instance, an attribute might be used to verify that a person has completed a KYC process or that an entity is\naccredited to invest in a particular security. The data stored in the attribute value can be of\n",(0,n.jsx)(t.a,{href:"https://github.com/provenance-io/provenance/blob/main/proto/provenance/attribute/v1/attribute.proto#L32",children:"various types"}),", including\ntext, JSON, URL, UUID and other formats."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"identity verification check",src:i(2587).Z+"",width:"4042",height:"1450"})}),"\n",(0,n.jsx)(t.p,{children:"One of the main benefits of using attributes on Provenance Blockchain is that it allows for automatic verification of\nidentity. Smart contracts can verify that a participant has met specific criteria by checking the attribute values\nstored on the blockchain. This approach can significantly reduce the need for manual identity verification and improve\nthe accuracy of the process."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"attribute use in smart contracts",src:i(77).Z+"",width:"4694",height:"2436"})}),"\n",(0,n.jsx)(t.p,{children:"Attributes provide a standardized way to manage identity verification records across different financial applications.\nDifferent smart contracts and decentralized applications (dApps) can choose which identity verification providers they\naccept, either by using a wildcard expression or by requiring a specific attribute from a particular provider. This\nflexibility allows for a wide range of use cases, from simple one-time identity verification to more complex ongoing\nverification processes."}),"\n",(0,n.jsx)(t.h2,{id:"rich-verification-data",children:"Rich Verification Data"}),"\n",(0,n.jsx)(t.p,{children:"On Provenance Blockchain, smart contracts can read and analyze the data stored in the attribute value for an account.\nHowever, some applications may require a more comprehensive set of data, which can be shared by the verification\nprovider."}),"\n",(0,n.jsx)(t.p,{children:"One option for sharing this data securely with dApps is for the verification provider to store the data in a secured\nrelational database and make it available to dApps through REST API calls. However, this approach requires negotiation\nbetween each dApp and each verification provider (for example, establishing an API key for access), which can be time-consuming and cumbersome."}),"\n",(0,n.jsxs)(t.p,{children:["A better way to share user verification data is to create an ",(0,n.jsx)(t.a,{href:"/docs/learn/asset-lifecycle/nfts",children:"NFT"})," (",(0,n.jsx)(t.a,{href:"/docs/pb/modules/metadata-module",children:"Scope"}),") that represents the user's\ncredentials and is stored in their account on the blockchain. This way, the digital identity credential can be stored as\nan NFT in the user's wallet and can be easily shared with other dApps.\n",(0,n.jsx)(t.img,{alt:"identity verification check",src:i(850).Z+"",width:"4362",height:"1310"})]}),"\n",(0,n.jsx)(t.p,{children:"The verification data is stored in Provenance's Encrypted Object Store (EOS), which provides a secure and private location for\nthe data to be stored. The user can then permission their own EOS credential data to the dApp of their choosing,\nallowing them to share their identity information without compromising their privacy or security."})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},77:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/marker-transfer-approval-64443bcc9d9af2b27882f6f9218c6ef6.png"},5243:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/identity-verification-check-20e7f06e1cc6f74525a7b16f82fe404e.png"},2587:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/user-account-attributes-c604b080be5b4ca2b07d60a3493260a3.png"},850:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/wallet-with-identity-614e8293cd83f13b94cc6ab6e33eb7fc.png"},1151:(e,t,i)=>{i.d(t,{Z:()=>c,a:()=>o});var n=i(7294);const a={},r=n.createContext(a);function o(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);