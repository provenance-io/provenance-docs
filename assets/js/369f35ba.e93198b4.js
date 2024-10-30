"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[7358],{11723:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>d});var a=n(74848),o=n(28453);const s={},r="Asset Creators",i={id:"pb/ecosystem/community/asset-originators",title:"Asset Creators",description:"Overview",source:"@site/docs/pb/ecosystem/community/asset-originators.md",sourceDirName:"pb/ecosystem/community",slug:"/pb/ecosystem/community/asset-originators",permalink:"/docs/pb/ecosystem/community/asset-originators",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Delegator",permalink:"/docs/pb/ecosystem/community/delegator"},next:{title:"Introduction",permalink:"/docs/pb/blockchain/introduction/"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Boarding Assets",id:"boarding-assets",level:2},{value:"Asset Ownership",id:"asset-ownership",level:2},{value:"Value Operations",id:"value-operations",level:2}];function h(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",p:"p",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"asset-creators",children:"Asset Creators"})}),"\n",(0,a.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsxs)(t.p,{children:["Provenance Blockchain acts as ledger, registry and exchange for digital assets. Asset creators can register and custody digital assets on the Provenance Blockchain through the use of ",(0,a.jsx)(t.a,{href:"../../p8e/overview/",children:"client-side contracts"}),". Asset value-related operations may be achieved by using a stablecoin backed by an Omnibus Bank. Provenance Blockchain client-side contracts take encrypted data from the asset creator and transform that information to encrypted data in the creator's own private ",(0,a.jsx)(t.a,{href:"../../p8e/overview/encrypted-object-store/",children:"object store"})," with object hashes recorded on the blockchain through the ",(0,a.jsx)(t.a,{href:"/docs/sdk/metadata",children:"metadata"})," module. In addition to boarding digital assets, asset creators may fund, finance, sell, and service assets on the blockchain."]}),"\n",(0,a.jsx)(t.h2,{id:"boarding-assets",children:"Boarding Assets"}),"\n",(0,a.jsxs)(t.p,{children:['Digital assets are "boarded to the blockchain" by the execution of contracts that the originator writes to take origination data, verify its completeness, and output data as recorded facts in an encrypted object store private to and hosted by the originator. The ',(0,a.jsx)(t.a,{href:"../../p8e/overview/",children:"Contract Execution Environment"})," creates hashed representations of all documents, data, transactions and client-side contract executions that are recorded to the blockchain. Modification or updates of the data only occur through further contract execution on the data, with checks on the input hash of data from the object store against the blockchain to ensure no external data modification has taken place. In this way, the truth of the data is verified without the need for trust in the individual originator's data store."]}),"\n",(0,a.jsx)(t.h2,{id:"asset-ownership",children:"Asset Ownership"}),"\n",(0,a.jsxs)(t.p,{children:["Ownership of a digital asset on Provenance Blockchain is defined by a ",(0,a.jsx)(t.a,{href:"/docs/sdk/marker",children:"Marker"}),' structure on chain. During the creation of a scope by the Contract Execution Environment, a default address is created to represent ownership of the asset by the asset creator. Provenance Blockchain distinguishes between the "data owner(s)" and the "value owner(s)" of any scope. Data owners have permission to perform read/write operations on the scope. Value owners hold rights to the actual ownership of the asset and any value the digital asset holds. Data owners and value owners may or may not be the same entities. For example, a digital loan asset may have data owners including the originator and servicer while the value owner may be an investor who has purchased the loan.']}),"\n",(0,a.jsx)(t.h2,{id:"value-operations",children:"Value Operations"}),"\n",(0,a.jsxs)(t.p,{children:["Value-related operations for digital assets can be achieved using ",(0,a.jsx)(t.a,{href:"/docs/pb/blockchain/basics/stablecoin",children:"coins"}),". For example, originators can funds their loans at time of boarding using stablecoin issued by an Omnibus Bank. When the Omnibus Bank receives funds from the originator, it mints a corresponding amount of stablecoin using the ",(0,a.jsx)(t.a,{href:"/docs/sdk/marker",children:"Marker Module"})," and an ",(0,a.jsx)(t.a,{href:"/docs/pb/blockchain/basics/accounts",children:"account"})," representing the originator\u2019s funding source. Loans are funded by transferring coin to the Omnibus Bank's blockchain address. When instructed by the originator, the Omnibus Bank will convert the borrower\u2019s coin to fiat and send funds to the borrower\u2019s bank account. The coin used is burned in the process of conversion to fiat."]})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var a=n(96540);const o={},s=a.createContext(o);function r(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);