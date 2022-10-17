"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[9663],{3905:(n,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>d});var t=r(7294);function o(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function a(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function i(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function l(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}var s=t.createContext({}),c=function(n){var e=t.useContext(s),r=e;return n&&(r="function"==typeof n?n(e):i(i({},e),n)),r},p=function(n){var e=c(n.components);return t.createElement(s.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return t.createElement(t.Fragment,{},e)}},y=t.forwardRef((function(n,e){var r=n.components,o=n.mdxType,a=n.originalType,s=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),y=c(r),d=o,f=y["".concat(s,".").concat(d)]||y[d]||u[d]||a;return r?t.createElement(f,i(i({ref:e},p),{},{components:r})):t.createElement(f,i({ref:e},p))}));function d(n,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=r.length,i=new Array(a);i[0]=y;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=n,l.mdxType="string"==typeof n?n:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}y.displayName="MDXCreateElement"},8761:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var t=r(7462),o=(r(7294),r(3905));const a={},i="Onboarding",l={unversionedId:"learn/provenance-applications/loan-origination-system-los/onboarding-contract",id:"learn/provenance-applications/loan-origination-system-los/onboarding-contract",title:"Onboarding",description:"Please refer to the Figure Loan Model.",source:"@site/docs/learn/provenance-applications/loan-origination-system-los/onboarding-contract.md",sourceDirName:"learn/provenance-applications/loan-origination-system-los",slug:"/learn/provenance-applications/loan-origination-system-los/onboarding-contract",permalink:"/docs/learn/provenance-applications/loan-origination-system-los/onboarding-contract",draft:!1,tags:[],version:"current",frontMatter:{}},s={},c=[],p={toc:c};function u(n){let{components:e,...r}=n;return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"onboarding"},"Onboarding"),(0,o.kt)("p",null,"Please refer to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn/provenance-applications/loan-origination-system-los/assets"},"Figure Loan Model"),"."),(0,o.kt)("p",null,"Figure executes a loan onboarding contract for each loan. Every onboarding contract creates a new scope in the P8e EOS, with the loan UUID as the scope UUID. The onboarding contract also establishes the initial values for the facts in the scope. Not all facts will be established during this onboarding process; for example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"validation_results")," fact will be populated only after the initial run of a loan validation contract. Additionally, not all facts will be established for every loan type; for example, a HELOC loan scope will include the ",(0,o.kt)("inlineCode",{parentName:"p"},"lien_property")," fact, but a personal loan will not."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Participants([ORIGINATOR])\nopen class OnboardFigureHELOCContract() : P8eContract() {\n\n    @Function(ORIGINATOR)\n    @Fact("loan")\n    open fun loan(@Input("input_loan") loan: LoanProtos.Loan) =\n            loan.also {\n                require(loan.uuid.isValid()) { "loan.uuid is missing" }\n                require(loan.loanType.isNotBlank()) { "loan.loanType is missing" }\n                require(loan.originatorUuid.isValid()) { "loan.originatorUuid is missing" }\n                require(loan.originatorName.isNotBlank()) { "loan.originatorName is missing" }\n            }\n\n    @Function(ORIGINATOR)\n    @Fact("primary_party")\n    open fun primaryParty(@Input("input_primary_party") primaryParty: CustomerProtos.Party) =\n            primaryParty.also {\n                require(primaryParty.uuid.isValid()) { "primaryParty.uuid is missing" }\n            }\n\n    @Function(ORIGINATOR)\n    @Fact("lien_property")\n    fun lienProperty(@Input("input_lien_property") lienProperty: PropertyProtos.LienProperty) =\n           lienProperty.also {\n                require(lienProperty.uuid.isValid()) { "lienProperty.uuid is missing" }\n            }\n\n    // Truncated example\n}\n')))}u.isMDXComponent=!0}}]);