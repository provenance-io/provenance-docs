"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[586],{51454:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var n=t(85893),r=t(11151);const s={title:"Verification Flow"},o="Identity Verification Flow",a={id:"learn/dapps/identity-verification/flow",title:"Verification Flow",description:"The process of performing identity verification using Attributes on Provenance Blockchain is a crucial aspect of",source:"@site/docs/learn/dapps/identity-verification/flow.md",sourceDirName:"learn/dapps/identity-verification",slug:"/learn/dapps/identity-verification/flow",permalink:"/docs/learn/dapps/identity-verification/flow",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Verification Flow"},sidebar:"dappsSidebar",previous:{title:"Identity Verification",permalink:"/docs/learn/dapps/identity-verification"},next:{title:"Identity Attribute Names",permalink:"/docs/learn/dapps/identity-verification/attribute-names"}},c={},d=[{value:"Step 1: User Undergoes KYC",id:"step-1-user-undergoes-kyc",level:2},{value:"Step 2: User Grants dApp Permission to Read KYC",id:"step-2-user-grants-dapp-permission-to-read-kyc",level:2}];function l(e){const i={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"identity-verification-flow",children:"Identity Verification Flow"}),"\n",(0,n.jsx)(i.p,{children:"The process of performing identity verification using Attributes on Provenance Blockchain is a crucial aspect of\nensuring security and trust within the ecosystem. This process can be broken down into two main steps: obtaining a\ncredential from an Identity Provider and presenting the credential from the user's wallet to any decentralized\napplication (dApp)."}),"\n",(0,n.jsx)(i.h2,{id:"step-1-user-undergoes-kyc",children:"Step 1: User Undergoes KYC"}),"\n",(0,n.jsx)(i.p,{children:"The user is typically directed to an Identity Provider from an application (dApp)."}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"To initiate the process, the user must visit an identity verification provider company."}),"\n",(0,n.jsx)(i.li,{children:"The identity verification process involves the user providing personal information (name, date of birth, address) and\nsubmitting relevant documentation to confirm their identity. Documentation requirements may vary based on the level\nof verification needed by the application or service. or example, some services may require a government-issued ID,\nwhile others may require additional documents such as proof of address or proof of income."}),"\n",(0,n.jsx)(i.li,{children:"Upon completing the verification process, the provider writes an Attribute to the user's account on the Provenance\nBlockchain, indicating that the user has passed the verification requirements. This Attribute serves as proof of\ncompletion and can grant access to specific features or services within the Provenance ecosystem."}),"\n",(0,n.jsx)(i.li,{children:"The identity verification provider stores the verification data in the Encrypted Object Store (EOS), which\ncoordinates with Provenance Blockchain NFT records. By storing the data in the EOS, the provider ensures data\nsecurity and immutability."}),"\n",(0,n.jsx)(i.li,{children:"The provider also creates a unique NFT (non-fungible token) representing the verification data on the blockchain.\nThis NFT allows the user to own their verification data as an asset in their account or wallet, ensuring the security\nand privacy of sensitive information."}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"identity verification check",src:t(3371).Z+"",width:"3904",height:"1966"})}),"\n",(0,n.jsx)(i.h2,{id:"step-2-user-grants-dapp-permission-to-read-kyc",children:"Step 2: User Grants dApp Permission to Read KYC"}),"\n",(0,n.jsx)(i.p,{children:"User KYC Attributes can be utilized in two ways:"}),"\n",(0,n.jsxs)(i.ol,{children:["\n",(0,n.jsx)(i.li,{children:"The dApp or smart contract can make decisions based on the Attribute's presence or absence and name. If the Attribute\nexists, it means the user has met the requirements for the credential. In many cases, this check is sufficient to\ncomplete the business process."}),"\n",(0,n.jsx)(i.li,{children:"If the credential use case requires the full identity verification data, the dApp can request permission from the\nuser to read the data stored in the EOS."}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["The method for accessing NFT identity data depends on the Identity Provider. The provider could make the EOS Gateway\navailable to application users or provide an API to fetch the data. For more information on the design and availability\nof Identity NFTs, refer to the ",(0,n.jsx)(i.a,{href:"identity-nfts",children:"Identity NFTs"})," section."]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{alt:"identity verification check",src:t(54514).Z+"",width:"3910",height:"1992"})})]})}function p(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},3371:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/verification-flow-1-288bf8810d85a02e42ce118f383813c8.png"},54514:(e,i,t)=>{t.d(i,{Z:()=>n});const n=t.p+"assets/images/verification-flow-2-2231b0b8eeace824dc85511437292b5f.png"},11151:(e,i,t)=>{t.d(i,{Z:()=>a,a:()=>o});var n=t(67294);const r={},s=n.createContext(r);function o(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);