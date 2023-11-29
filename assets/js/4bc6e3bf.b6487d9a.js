"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[2409],{7280:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=t(85893),i=t(11151);const a={description:"A suggested process for getting started with loading assets onto Provenance Blockchain"},s="Asset Originator's Guide",r={id:"pb/integrating/asset-originators-guide",title:"Asset Originator's Guide",description:"A suggested process for getting started with loading assets onto Provenance Blockchain",source:"@site/docs/pb/integrating/asset-originators-guide.md",sourceDirName:"pb/integrating",slug:"/pb/integrating/asset-originators-guide",permalink:"/docs/pb/integrating/asset-originators-guide",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{description:"A suggested process for getting started with loading assets onto Provenance Blockchain"}},l={},c=[{value:"Example Application",id:"example-application",level:2},{value:"Development Process",id:"development-process",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"asset-originators-guide",children:"Asset Originator's Guide"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsx)(n.p,{children:"This guide uses loans as the example digital asset, but the process can be applied to any type of asset."})}),"\n",(0,o.jsxs)(n.p,{children:["This guide walks through the steps necessary to create an application using Provenance Blockchain and the ",(0,o.jsx)(n.a,{href:"../p8e/overview/",children:"BlockVault Contract Execution Environment "}),"to load and fund digital assets on chain. In the example, digital loans are boarded to Provenance Blockchain, funded with stablecoin, and listed on the Figure Portfolio Manager (PM)."]}),"\n",(0,o.jsx)(n.h2,{id:"example-application",children:"Example Application"}),"\n",(0,o.jsxs)(n.p,{children:["The application exists in the ",(0,o.jsx)(n.code,{children:"Interface"})," layer of the ",(0,o.jsx)(n.a,{href:"/docs/pb/blockchain/introduction/application-architecture",children:"Application Architecture"}),", and makes use of a ",(0,o.jsx)(n.a,{href:"/docs/pb/blockchain/introduction/major-components",children:"hybrid model "}),"of on-chain and off-chain (client-side) data."]}),"\n",(0,o.jsx)(n.p,{children:"In our example, the borrower applies (and is approved) for a loan through the Originator's own Loan Origination System (LOS). The loan is boarded to Provenance Blockchain only when the loan is ready for immediate funding, at which point the application will:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Record the loan data"})," to the originator's private local Encrypted Object Store (EOS) through the execution of a ",(0,o.jsx)(n.a,{href:"../p8e/overview/#p-8-e-client-side-contracts",children:"BlockVault Contract."})," This establishes a record of the assets and its ",(0,o.jsx)(n.a,{href:"/docs/pb/modules/marker-module",children:"ownership"})," (the originator) on the blockchain, while preserving the privacy and security of the data under the originator's control."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"(Optionally) Fund the loan"})," using stablecoin issued by an Omnibus Bank."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Run a validation BlockVault contract"})," over the loan to ensure the loan was issued according to the rules and underwriting guidelines that the originator set."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Permission"})," Figure's Portfolio Manager to read the loan data."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Provide loan tapes"})," to the Portfolio Manager over the lifecycle of the loan through BlockVault contract execution."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"The guide will also outline the optional further steps of querying the loan data, updating or correcting data, and removing a loan from the system."}),"\n",(0,o.jsx)(n.h2,{id:"development-process",children:"Development Process"}),"\n",(0,o.jsx)(n.p,{children:"The development process for creating this loan boarding application will include:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Mapping the originator's loan data to the ",(0,o.jsx)(n.a,{href:"/docs/learn/provenance-applications/loan-origination-system-los/assets",children:"Figure Loan Data Model"}),"."]}),"\n",(0,o.jsx)(n.li,{children:"Setting up the BlockVault environment, including a local node of the blockchain (see below)."}),"\n",(0,o.jsx)(n.li,{children:"If required, setting up an Omnibus Bank application to mint and burn stablecoin, as well as manage the associated fiat cash movement into and out of the system."}),"\n",(0,o.jsxs)(n.li,{children:["Writing BlockVault contracts:","\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsx)(n.li,{children:"To record the initial loan data"}),"\n",(0,o.jsx)(n.li,{children:"To track funding information during the stablecoin funding process"}),"\n",(0,o.jsx)(n.li,{children:"To validate the loan data"}),"\n",(0,o.jsx)(n.li,{children:"To update the loan tape for PM as needed"}),"\n",(0,o.jsx)(n.li,{children:"To update (or correct) loan data (optional)"}),"\n",(0,o.jsx)(n.li,{children:"To remove a loan from the system (optional)"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.li,{children:"Developing an application to orchestrate the execution of the BlockVault contracts and upload loan documents (e.g. PDF of the signing note), and to use the Provenance Blockchain SDK to manage the flow of stablecoin, asset ownership, and data sharing on the blockchain."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"A Provenance Blockchain application has several options for interfacing with the blockchain during development and for production usage:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"../blockchain/using-provenance/",children:"Run a blockchain localnet"})," in situ for easy local development;"]}),"\n",(0,o.jsxs)(n.li,{children:["Connect to the Provenance Blockchain public ",(0,o.jsx)(n.a,{href:"https://github.com/provenance-io/testnet",children:"testnet"}),";"]}),"\n",(0,o.jsxs)(n.li,{children:["Connect to the public production Provenance Blockchain ",(0,o.jsx)(n.a,{href:"https://github.com/provenance-io/mainnet",children:"mainnet"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var o=t(67294);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);