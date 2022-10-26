"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[1984],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(h,r(r({ref:t},p),{},{components:n})):a.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,r[1]=c;for(var l=2;l<o;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=n(7462),i=(n(7294),n(3905));const o={},r="Onboard to Servicing",c={unversionedId:"learn/provenance-applications/loan-origination-system-los/loan-servicing",id:"learn/provenance-applications/loan-origination-system-los/loan-servicing",title:"Onboard to Servicing",description:"After the Figure loan is onboarded, funded, and validated, the loan is onboarded to the Figure Servicing system. Loans are onboarded to the servicing platform by jointly executing a multi-party P8e contract with Figure Servicing. The LOS provides the loan data to the contract and identifies which servicer it is using by specifying the servicing application\u2019s public key as the counter-party. The \u201cassign-to-servicer\u201d contract ensures that the requirements for servicing the loan are met. If the loan data is malformed in some way, the servicing application rejects the contract, and the onus is on the origination system to correct the issue.",source:"@site/docs/learn/provenance-applications/loan-origination-system-los/loan-servicing.md",sourceDirName:"learn/provenance-applications/loan-origination-system-los",slug:"/learn/provenance-applications/loan-origination-system-los/loan-servicing",permalink:"/provenance-docs/docs/learn/provenance-applications/loan-origination-system-los/loan-servicing",draft:!1,tags:[],version:"current",frontMatter:{}},s={},l=[],p={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"onboard-to-servicing"},"Onboard to Servicing"),(0,i.kt)("p",null,"After the Figure loan is onboarded, funded, and validated, the loan is onboarded to the Figure Servicing system. Loans are onboarded to the servicing platform by jointly executing a multi-party P8e contract with Figure Servicing. The LOS provides the loan data to the contract and identifies which servicer it is using by specifying the servicing application\u2019s public key as the counter-party. The \u201cassign-to-servicer\u201d contract ensures that the requirements for servicing the loan are met. If the loan data is malformed in some way, the servicing application rejects the contract, and the onus is on the origination system to correct the issue."),(0,i.kt)("p",null,"Partial example of an \u201cassign-to-servicing\u201d contract to onboard a loan into the servicing system:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'@Participants([ORIGINATOR, SERVICER])\nopen class AssignLoanToServicer(\n        // ------------------------------------\n        // These are Cross-Scope Facts coming from the loan scope. They do not become facts in the scope\n        // in which this contract is executed.\n        // ------------------------------------\n        // Facts are alphabetical by fact name:\n        @Fact(LoanScopeFacts.additionalParties) private val additionalParties: LoanProtos.PartiesList,\n        @Fact(LoanScopeFacts.blockchainCustody) private val blockchainCustody: LoanProtos.BlockchainCustody,\n        @Fact(LoanScopeFacts.creditReports) private val creditReports: LoanProtos.CreditReportsList,\n        @Fact(LoanScopeFacts.digitalSignaturePackets) private val digitalSignaturePackets: DocumentProtos.DocumentWithDataList,\n        @Fact(LoanScopeFacts.documents) private val documents: DocumentProtos.DocumentList,\n        @Fact(LoanScopeFacts.funding) private val funding: LoanProtos.Funding,\n        @Fact(LoanScopeFacts.incomeRecords) private val incomeRecords: LoanProtos.IncomeRecordsList,\n        @Fact(LoanScopeFacts.loan) private val loan: LoanProtos.Loan,\n        @Fact(LoanScopeFacts.primaryParty) private val primaryParty: CustomerProtos.Party,\n        @Fact(LoanScopeFacts.servicing) private val servicing: io.provenance.proto.asset.LoanProtos.LoanServicing,\n        @Fact(LoanScopeFacts.signedPromNote) private val signedPromNote: DocumentProtos.Disclosure,\n        @Fact(LoanScopeFacts.triMergeReports) private val triMergeReports: LoanProtos.TriMergeReportsList,\n        @Fact(LoanScopeFacts.underwritingPacket) private val underwritingPacket: UnderwritingProtos.UnderwritingPacket\n) : P8eContract() {\n\n    @Function(SERVICER)\n    @Fact(LoanScopeFacts.servicingScopeId)\n    fun validateServicingRequirements(@Input(LoanScopeFacts.servicingScopeId) servicingScopeId: Util.UUID ) : Util.UUID = servicingScopeId.also {\n\n        // "loan" fact validation\n        val selectedOffer = underwritingPacket.selectedOffer\n        ValidationUtil.validateMoneyField(selectedOffer, selectedOffer.amount, "amount")?.also { failure(it) }\n        ValidationUtil.validateMoneyField(selectedOffer, selectedOffer.drawAmount, "drawAmount")?.let { failure(it) }\n        ValidationUtil.validateMoneyField(loan, loan.monthlyPaymentAmount, "monthlyPaymentAmount")?.also { failure(it) }\n        if (selectedOffer.amount.isValidSrv() && selectedOffer.drawAmount.isValidSrv()) {\n            val originationFeeAmount = view.originationFeeAmount\n            groupedRule("Derived origination fee should be at least zero, but was [amount (${view.loanAmount}) - drawAmount (${view.drawAmount}) = origination fee ($originationFeeAmount)]", {\n                originationFeeAmount gte BigDecimal.ZERO\n            }, ONBOARDING to FATAL, UPDATE to WARN)\n            if (originationFeeAmount gt BigDecimal.ZERO) {\n                rule("Loans with an origination fee should have an origination fee type, but had type [${view.originationFeeType}]") {\n                    selectedOffer.origFeeType.let { it.isNotBlank() && it != NO_FEE }\n                }\n            }\n        }\n\n        // "primary_party" fact validation\n        rule("Primary borrower was missing uuid") {\n            primaryParty.hasUuid()\n        }\n        rule("Primary borrower was missing name details. First Name: [${primaryParty.name.firstName}] | Last Name: [${primaryParty.name.lastName}]") {\n            primaryParty.hasName() && primaryParty.name.firstName.isNotBlank() && primaryParty.name.lastName.isNotBlank()\n        }\n\n        // "funding" fact validation\n        rule("Funding must have valid start/complete") { funding.completedDate.isValidSrv() && funding.startedDate.isValidSrv() }\n        rule("Funding must be set true") { funding.complete }\n        rule("Funding block must be non-default") { funding.isValidSrv() }\n        rule("Funding start is too early") { funding.startedDate.toCSTLocalDateSrv().isAfterInclusiveSrv(ValidationUtil.EARLIEST_DATE_ALLOWABLE.toLocalDate()) }\n        rule("Funding complete is too early") { funding.completedDate.toCSTLocalDateSrv().isAfterInclusiveSrv(ValidationUtil.EARLIEST_DATE_ALLOWABLE.toLocalDate()) }\n        rule("Funding complete cannot be in the future") { funding.completedDate.toOffsetDateTimeProv().isBeforeInclusiveSrv(ServicingTimeUtil.getServerTime()) }\n')),(0,i.kt)("p",null,"The contract execution to handoff a loan to the servicer has several unique characteristics:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"@Participants")," annotation on the class indicates that two parties are required to execute this contract, one acting in the role of ORIGINATOR and the counter-party in the role of SERVICER."),(0,i.kt)("li",{parentName:"ol"},"This contract is executed in a unique scope, distinct from the loan scope."),(0,i.kt)("li",{parentName:"ol"},"The facts supplied in the contract constructor are pre-existing facts. However, the loan facts exist in the loan scope, not the new scope created for the servicing handoff. Nonetheless, the loan scope facts in their current state can be supplied as inputs to the ",(0,i.kt)("inlineCode",{parentName:"li"},"AssignLoanToServicerContract")," as cross-scope facts."),(0,i.kt)("li",{parentName:"ol"},"The ORIGINATOR initiates the contract execution and supplies the cross-scope loan facts."),(0,i.kt)("li",{parentName:"ol"},"The SERVICER supplies one additional input, the UUID of the new scope the servicer establishes in order to store loan servicing data."),(0,i.kt)("li",{parentName:"ol"},"If any of the servicing checks in this contract fail, they will throw an Exception and fail the contract execution."),(0,i.kt)("li",{parentName:"ol"},"Either party can terminate the contract execution at any time during the process. When the servicer receives the request to execute the contract, the servicing system can perform checks about whether it is willing to jointly execute the contract with the originator. The servicing system will check, for example, that the public key of the originator matches one or more of the keys expected by the set of originators handled by the system, or it might check that the ",(0,i.kt)("inlineCode",{parentName:"li"},"loan.loanType")," is one the system knows how to service.")))}u.isMDXComponent=!0}}]);