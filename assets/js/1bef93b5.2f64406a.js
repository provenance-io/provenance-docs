"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[2924],{80244:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var t=a(74848),s=a(28453),o=a(41306);const r={},i="Lending Ecosystem",l={id:"pb/integrating/integrating-with-p8e/lending-ecosystem/index",title:"Lending Ecosystem",description:"<DocSubheader text='The guide uses the lending ecosystem as a very real example of building out a use case on top of Provenance Blockchain'",source:"@site/docs/pb/integrating/integrating-with-p8e/lending-ecosystem/index.md",sourceDirName:"pb/integrating/integrating-with-p8e/lending-ecosystem",slug:"/pb/integrating/integrating-with-p8e/lending-ecosystem/",permalink:"/docs/pb/integrating/integrating-with-p8e/lending-ecosystem/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Integrating with BlockVault",permalink:"/docs/pb/integrating/integrating-with-p8e/"},next:{title:"Life Cycle of a Loan",permalink:"/docs/pb/integrating/integrating-with-p8e/lending-ecosystem/life-cycle-of-a-loan"}},c={},d=[{value:"Why Onboard Loans to Provenance?",id:"why-onboard-loans-to-provenance",level:2},{value:"Explore the Lending Ecosystem Use Case",id:"explore-the-lending-ecosystem-use-case",level:2}];function h(e){const n={a:"a",annotation:"annotation",h1:"h1",h2:"h2",header:"header",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"lending-ecosystem",children:"Lending Ecosystem"})}),"\n","\n",(0,t.jsx)(o.Y,{text:"The guide uses the lending ecosystem as a very real example of building out a use case on top of Provenance Blockchain"}),"\n",(0,t.jsx)(n.p,{children:"The lending industry has been looking at distributed ledger technology for a while now. A quick search for uses of blockchain technology in the lending industry brings up a laundry list of great ideas. Tamper resistant loan files, title registries, bilateral settlement of Mortgage Backed Securities to name a few."}),"\n",(0,t.jsx)(n.p,{children:"The Provenance Blockchain is purpose-built for all of these use cases and so much more."}),"\n",(0,t.jsx)(n.h2,{id:"why-onboard-loans-to-provenance",children:"Why Onboard Loans to Provenance?"}),"\n",(0,t.jsxs)(n.p,{children:["If you've read the ",(0,t.jsx)(n.a,{href:"/docs/pb/ecosystem/financial-services-blockchain/",children:"Intro"}),", you know that Provenance Blockchain performs three key functions: ledger, registry, and exchange. Together these functions can reduce the cost and risk of participating in the lending industry. By onboarding loans to Provenance, originators gain access to a suite of tools that make recording, funding, tracking, validating, and transferring control and/or ownership of loans frictionless."]}),"\n",(0,t.jsx)(n.p,{children:"Here are some examples:"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Portfolio Manager"})," - Manage and see the real-time performance of loans on Provenance Blockchain. Allows users to list, pool, pledge and sell loans to an ever-growing group of warehouse lenders and accredited investors. The user interface allows buyers and sellers to review up-to-date loan data and documents, and perform bi-lateral exchange of assets, reducing counter-party risk and time to close deals."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Digital Asset Registry Technologies (DART)"})," - Allows owners, servicers, and eNote controllers to track and update loan ownership, servicing rights, and control of eNotes associated with mortgages registered on Provenance. Any changes made by other decentralized applications, such as Portfolio Manager, are automatically captured because they all share one source of truth: the Provenance Blockchain ledger. This eliminates the need to update a separate, centralized registry after pledging or selling loans to investors or warehouse lenders."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Validation Oracle"})," - Request and receive third-party loan validation services. The Validation Oracle service helps originators and investors manage permissions to loan data and loan validation results, sharing it with trusted third-party validation service providers and select buyers. Validation results become part of the digital asset for the remainder of its life."]}),"\n",(0,t.jsx)(n.p,{children:"Due to the decentralized nature of the Provenance Blockchain ecosystem, this suite of tools is ever-expanding. New decentralized applications can be built and operated by anyone, giving participants choices in how they manage their assets."}),"\n",(0,t.jsxs)(n.p,{children:["On top of this suite of tools, the Provenance Blockchain ecosystem opens loan originators to the USDF payment rails. Imagine that each party in a loan sale has an account funded with USDF, the USD-backed stablecoin minted on Provenance by the USDF consortium of omnibus banks. A seller uses Portfolio Manager to create a pool of mortgages represented as a ",(0,t.jsx)(n.a,{href:"/docs/sdk/marker",children:"Marker"})," on Provenance and proposes the sale of that Marker to an investor. The investor uses Portfolio Manager to review loans in the pool, accessing third-party validators through the use of Validation Oracle, if needed. If the investor agrees to the seller's terms, the buyer and seller sign and submit a transaction proposal to the Provenance Blockchain network for validation. As the transaction proposal gets executed, the loan pool Marker is transferred to the buyer's account and USDF is transferred to the seller's account. Assuming these loan were registered with DART, the records of who controls the eNote and who services the loans are automatically picked up and reflected to all parties involved."]}),"\n",(0,t.jsxs)(n.p,{children:["The entire transaction takes place in one block recorded to the Provenance Blockchain ledger. No waiting for a wire transfer. No waiting for loan documents to show up in the mail. No notifying a centralized eNote registry of the sale. Just ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"t"}),(0,t.jsx)(n.mo,{children:"+"}),(0,t.jsx)(n.mn,{children:"0"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"t+0"})]})})}),(0,t.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6984em",verticalAlign:"-0.0833em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,t.jsx)(n.span,{className:"mbin",children:"+"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,t.jsx)(n.span,{className:"mord",children:"0"})]})]})]})," bi-lateral settlement, where ",(0,t.jsxs)(n.span,{className:"katex",children:[(0,t.jsx)(n.span,{className:"katex-mathml",children:(0,t.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,t.jsxs)(n.semantics,{children:[(0,t.jsxs)(n.mrow,{children:[(0,t.jsx)(n.mi,{children:"t"}),(0,t.jsx)(n.mo,{children:"="}),(0,t.jsx)(n.mi,{children:"t"}),(0,t.jsx)(n.mi,{children:"i"}),(0,t.jsx)(n.mi,{children:"m"}),(0,t.jsx)(n.mi,{children:"e"})]}),(0,t.jsx)(n.annotation,{encoding:"application/x-tex",children:"t=time"})]})})}),(0,t.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6151em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}}),(0,t.jsx)(n.span,{className:"mrel",children:"="}),(0,t.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,t.jsxs)(n.span,{className:"base",children:[(0,t.jsx)(n.span,{className:"strut",style:{height:"0.6595em"}}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"t"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"im"}),(0,t.jsx)(n.span,{className:"mord mathnormal",children:"e"})]})]})]}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Combine bi-lateral settlement with a suite of tools for managing your assets, and you've got a fully digital lending ecosystem with zero counter-party risk."}),"\n",(0,t.jsx)(n.h2,{id:"explore-the-lending-ecosystem-use-case",children:"Explore the Lending Ecosystem Use Case"}),"\n",(0,t.jsx)(n.p,{children:"On the following pages, we will explore how the Figure Tech team translated the typical post-close events to a blockchain-enabled world. By understanding those activities, you can quickly see how the products mentioned above came to fruition."}),"\n",(0,t.jsx)(n.p,{children:"After that, we will dive into the Loan Package data model. Understanding the data model is step one in integrating with the Provenance Blockchain network as a loan originator or other data provider."})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},41306:(e,n,a)=>{a.d(n,{Y:()=>s});a(96540);var t=a(74848);const s=e=>{let{text:n}=e;return(0,t.jsx)("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500",children:n})}},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>i});var t=a(96540);const s={},o=t.createContext(s);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);