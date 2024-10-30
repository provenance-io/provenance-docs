"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[8756],{97218:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var a=o(74848),r=o(28453);const t={},i="Onboarding",s={id:"learn/provenance-applications/loan-origination-system-los/onboarding-contract",title:"Onboarding",description:"Please refer to the Figure Loan Model.",source:"@site/docs/learn/provenance-applications/loan-origination-system-los/onboarding-contract.md",sourceDirName:"learn/provenance-applications/loan-origination-system-los",slug:"/learn/provenance-applications/loan-origination-system-los/onboarding-contract",permalink:"/docs/learn/provenance-applications/loan-origination-system-los/onboarding-contract",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},l={},c=[];function p(n){const e={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.header,{children:(0,a.jsx)(e.h1,{id:"onboarding",children:"Onboarding"})}),"\n",(0,a.jsxs)(e.p,{children:["Please refer to the ",(0,a.jsx)(e.a,{href:"/docs/learn/provenance-applications/loan-origination-system-los/assets",children:"Figure Loan Model"}),"."]}),"\n",(0,a.jsxs)(e.p,{children:["Figure executes a loan onboarding contract for each loan. Every onboarding contract creates a new scope in the BlockVault EOS, with the loan UUID as the scope UUID. The onboarding contract also establishes the initial values for the facts in the scope. Not all facts will be established during this onboarding process; for example, the ",(0,a.jsx)(e.code,{children:"validation_results"})," fact will be populated only after the initial run of a loan validation contract. Additionally, not all facts will be established for every loan type; for example, a HELOC loan scope will include the ",(0,a.jsx)(e.code,{children:"lien_property"})," fact, but a personal loan will not."]}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-kotlin",children:'@Participants([ORIGINATOR])\nopen class OnboardFigureHELOCContract() : P8eContract() {\n\n    @Function(ORIGINATOR)\n    @Fact("loan")\n    open fun loan(@Input("input_loan") loan: LoanProtos.Loan) =\n            loan.also {\n                require(loan.uuid.isValid()) { "loan.uuid is missing" }\n                require(loan.loanType.isNotBlank()) { "loan.loanType is missing" }\n                require(loan.originatorUuid.isValid()) { "loan.originatorUuid is missing" }\n                require(loan.originatorName.isNotBlank()) { "loan.originatorName is missing" }\n            }\n\n    @Function(ORIGINATOR)\n    @Fact("primary_party")\n    open fun primaryParty(@Input("input_primary_party") primaryParty: CustomerProtos.Party) =\n            primaryParty.also {\n                require(primaryParty.uuid.isValid()) { "primaryParty.uuid is missing" }\n            }\n\n    @Function(ORIGINATOR)\n    @Fact("lien_property")\n    fun lienProperty(@Input("input_lien_property") lienProperty: PropertyProtos.LienProperty) =\n           lienProperty.also {\n                require(lienProperty.uuid.isValid()) { "lienProperty.uuid is missing" }\n            }\n\n    // Truncated example\n}\n'})})]})}function d(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,a.jsx)(e,{...n,children:(0,a.jsx)(p,{...n})}):p(n)}},28453:(n,e,o)=>{o.d(e,{R:()=>i,x:()=>s});var a=o(96540);const r={},t=a.createContext(r);function i(n){const e=a.useContext(t);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function s(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),a.createElement(t.Provider,{value:e},n.children)}}}]);