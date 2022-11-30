"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[2234],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=c(n),u=r,g=h["".concat(s,".").concat(u)]||h[u]||p[u]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8677:(e,t,n)=>{n.d(t,{Y:()=>r});var a=n(7294);const r=e=>{let{text:t}=e;return a.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},t)}},9987:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(8677);const i={},l="Life Cycle of a Loan",s={unversionedId:"pb/integrating/integrating-with-p8e/lending-ecosystem/life-cycle-of-a-loan",id:"pb/integrating/integrating-with-p8e/lending-ecosystem/life-cycle-of-a-loan",title:"Life Cycle of a Loan",description:"<DocSubheader text='Translating the traditional life cycle of a loan to a blockchain-enabled world'",source:"@site/docs/pb/integrating/integrating-with-p8e/lending-ecosystem/life-cycle-of-a-loan.md",sourceDirName:"pb/integrating/integrating-with-p8e/lending-ecosystem",slug:"/pb/integrating/integrating-with-p8e/lending-ecosystem/life-cycle-of-a-loan",permalink:"/provenance-docs/docs/pb/integrating/integrating-with-p8e/lending-ecosystem/life-cycle-of-a-loan",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Lending Ecosystem",permalink:"/provenance-docs/docs/pb/integrating/integrating-with-p8e/lending-ecosystem/"},next:{title:"Data Mapping",permalink:"/provenance-docs/docs/pb/integrating/integrating-with-p8e/lending-ecosystem/data-mapping"}},c={},d=[{value:"Blockchain Translation",id:"blockchain-translation",level:2}],p={toc:d};function h(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"life-cycle-of-a-loan"},"Life Cycle of a Loan"),(0,r.kt)(o.Y,{text:"Translating the traditional life cycle of a loan to a blockchain-enabled world",mdxType:"DocSubheader"}),(0,r.kt)("p",null,"In order to build the suite of products mentioned on the previous page in such a way that they share one single source of truth, the development team needed to understand the life cycle of the asset from the point of view of each participant that touches it along the way."),(0,r.kt)("p",null,"There are many paths a loan can take after closing. Here is a sample of events that may take place along that route:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Register eNote")," - Assuming the signed promissory note was digitally signed by the borrower, loan originators are required to store the authoritative copy of the document in an eVault that complies with several regulatory statutes. The eVault must provide security and track control of the document. Control of the document can then be reassigned by the appropriate parties."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Funding")," - As a loan is closed, disbursements are made to the borrower. These funds may come from the lender themselves or in combination with funds from a warehouse lender. Traditionally, funds are disbursed over the ACH network."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Servicing")," - After closing, loans are serviced by companies that specialize in interacting with borrowers to collect repayments or take any adverse actions should the borrower fail to repay on time. Servicing companies have the latest up-to-date information investors need to value loans."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pledge to Warehouse Lenders")," - If they weren't involved pre-funding, loan originators can pledge the loan repayments to a warehouse lender in exchange for control over the eNote. This exchange could mean waiting for the signed promissory note to arrive in the mail while a wire transfer takes place."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Pool Loans for Sale")," - Loan originators typically do not hold loans on their books for the entire duration of the payback period. Instead they sell loans to investors and continue the cycle of originating new loans with the money they get back. Loans can be sold in pools containing hundreds of loans."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Third-Party Validation")," - As part of the loan sale process, investors perform due diligence which may include a third-party audit of loan data and documents. Third-party validators will validate loans against a myriad of rules, ensuring the underwriting process met certain criteria required by the investor and/or credit rating agencies."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Loan Sale")," - Finally, loans are sold to investors and can be resold any number of times. Again, money changes hands via wire transfer while documents arrive in the mail.")),(0,r.kt)("p",null,"As you can imagine, the participants in this ecosystem traditionally communicate directly with each other and store data in their own personally-tailored data models. Integrating with a new partner, no matter how technically capable both sides are, takes significant development time."),(0,r.kt)("h2",{id:"blockchain-translation"},"Blockchain Translation"),(0,r.kt)("p",null,"In a blockchain connected world, participants share a semi-flexible data model that leans on industry standards wherever possible. While each participant will likely integrate an existing system with the network, they adopt a mutually beneficial data model for data that gets shared with other participants. By sharing one common data model, participants don't need to integrate with each additional participant that joins the consortium."),(0,r.kt)("p",null,"Furthermore, participants in a blockchain network agree to rules for changing the state of an asset, which get codified in smart contracts. In the lending example, you will see several examples of contracts that get called at each stage in the asset life cycle to update the distributed world state of the Loan Package. These contracts are invoked by the party that has the data the rest of the network needs. For example, when recording validation results, a third-party validator can invoke a contract that will update the ",(0,r.kt)("inlineCode",{parentName:"p"},"Validation")," Record with the results of their off-chain work. Those results then live with the Loan Package for the remainder of its life."),(0,r.kt)("p",null,"Let's explore the Loan Package data model in more detail on the next page."))}h.isMDXComponent=!0}}]);