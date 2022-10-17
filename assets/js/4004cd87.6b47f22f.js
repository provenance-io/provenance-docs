"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[8718],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>m});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return t?o.createElement(h,i(i({ref:n},l),{},{components:t})):o.createElement(h,i({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8677:(e,n,t)=>{t.d(n,{Y:()=>a});var o=t(7294);const a=e=>{let{text:n}=e;return o.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},n)}},8084:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=t(7462),a=(t(7294),t(3905)),r=t(8677);const i={},c="Onboard Loan Contract",s={unversionedId:"pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/p8e-contracts/example-loan-contracts",id:"pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/p8e-contracts/example-loan-contracts",title:"Onboard Loan Contract",description:'<DocSubheader text="Establishing the loan in the Encrypted Object Store and Blockchain"',source:"@site/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/p8e-contracts/example-loan-contracts.md",sourceDirName:"pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/p8e-contracts",slug:"/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/p8e-contracts/example-loan-contracts",permalink:"/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/p8e-contracts/example-loan-contracts",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"P8e Contracts",permalink:"/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/p8e-contracts/"},next:{title:"Key Management",permalink:"/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/key-management/"}},p={},l=[{value:"Sample Contract - Record Loan Contract",id:"sample-contract---record-loan-contract",level:2},{value:"Result",id:"result",level:2},{value:"What does it look like on Provenance?",id:"what-does-it-look-like-on-provenance",level:2},{value:"Example P8e Scope (Truncated):",id:"example-p8e-scope-truncated",level:3}],u={toc:l};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"onboard-loan-contract"},"Onboard Loan Contract"),(0,a.kt)(r.Y,{text:"Establishing the loan in the Encrypted Object Store and Blockchain",mdxType:"DocSubheader"}),(0,a.kt)("p",null,'In our example, "onboarding a loan" is the process to establish a scope for a loan and save the loan data to the Encrypted Object Store (EOS). Each function (annotated with ',(0,a.kt)("inlineCode",{parentName:"p"},"@Function"),") establishes one of the records in the scope. For each function, the contract author should add input checks based on their own data model. For any check that does not pass, an ",(0,a.kt)("inlineCode",{parentName:"p"},"Exception")," should be thrown, and the contract execution will fail. (Loan scope will not be established or recorded on-chain.) In the example below, only a few functions have examples of input checks."),(0,a.kt)("h2",{id:"sample-contract---record-loan-contract"},"Sample Contract - Record Loan Contract"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'import io.dartinc.v1beta1.ENote\nimport io.provenance.scope.contract.annotations.Record\nimport io.provenance.scope.contract.annotations.Function\nimport io.provenance.scope.contract.annotations.Input\nimport io.provenance.scope.contract.annotations.Participants\niimport io.provenance.scope.contract.proto.Specifications.PartyType.ORIGINATOR\nimport io.provenance.scope.contract.spec.P8eContract\nimport tech.figure.asset.v1beta1.Asset\nimport tech.figure.loan.LoanScopeFacts\nimport tech.figure.servicing.v1beta1.LoanStateList\nimport tech.figure.servicing.v1beta1.ServicingRights\nimport tech.figure.util.v1beta1.DocumentList\nimport tech.figure.validation.v1beta1.ValidationResults\n\n\n@Participants([OWNER])\n@ScopeSpecification(["tech.figure.loan"])\nopen class RecordLoanContract(\n    @Record(LoanScopeFacts.asset) val existingAsset: Asset,\n    @Record(LoanScopeFacts.eNote) val existingENote: ENote,\n) : P8eContract() {\n\n    @Function(OWNER)\n    @Record(LoanScopeFacts.asset)\n    open fun recordAsset(@Input(LoanScopeFacts.asset) asset: Asset) = asset\n            .also {\n                if (existingAsset != null) {\n                    require(existingAsset.kv.loan.isENote.isFalse()) { "asset cannot be updated" }\n                    // optional: make sure nothing important changed\n                    // examples:\n                    require(existingAsset.id == asset.id) { "cannot change asset ID" }\n                    require(existingAsset.type == asset.type) { "cannot change asset type" }\n                    require(existingAsset.kv.loan.originatorUuid == asset.kv.loan.originatorUuid) { "cannot change loan originator UUID" }\n                    require(existingAsset.kv.loan.originatorName == asset.kv.loan.originatorName) { "cannot change loan originator name" }\n                } else {\n                    // other validation rules, such as:\n                    require(asset.id.isValid()) { "asset.id is missing" }\n                    require(asset.type.isNotBlank()) { "asset.type is missing" }\n                    require(asset.kv.loan.originatorUuid.isValid()) { "asset.kv.loan.originatorUuid is missing" }\n                    require(asset.kv.loan.originatorName.isNotBlank()) { "asset.kv.loan.originatorName is missing" }\n                }\n            }\n\n    @Function(OWNER)\n    @Record(LoanScopeFacts.servicingRights)\n    open fun recordServicingRights(@Input(LoanScopeFacts.servicingRights) servicingRights: ServicingRights) = servicingRights\n\n    @Function(OWNER)\n    @Record(LoanScopeFacts.documents)\n    open fun recordDocuments(@Input(LoanScopeFacts.documents) documents: DocumentList) = documents\n\n    @Function(OWNER)\n    @Record(LoanScopeFacts.loanStates)\n    open fun recordLoanStates(@Input(LoanScopeFacts.loanStates) loanStates: LoanStateList) = loanStates\n\n    @Function(OWNER)\n    @Record(LoanScopeFacts.validationResults)\n    open fun recordValidationResults(@Input(LoanScopeFacts.validationResults) validationResults: ValidationResults) = validationResults\n\n    @Function(OWNER)\n    @Record(LoanScopeFacts.eNote)\n    open fun recordENote(@Input(LoanScopeFacts.eNote) eNote: ENote) = eNote?\n            .also {\n                if (existingENote != null) {\n                    require(existingENote.checksum == eNote.checksum) { "cannot modify or remove eNote during loan onboarding" } // use specific contract instead\n                }\n                // TODO: Decide which fields should only be required if DART is listed as mortgagee of record/active custodian\n                require(eNote.controller.controllerUuid.isValid()) { "ENote missing controller UUID" }\n                require(eNote.controller.controllerName.isNotBlank()) { "ENote missing controller Name" }\n                require(eNote.eNote.id.isValid()) { "ENote missing ID" }\n                require(eNote.eNote.uri.isNotBlank()) { "ENote missing uri" }\n                require(eNote.eNote.content_type.isNotBlank()) { "ENote missing content type" }\n                require(eNote.eNote.document_type.isNotBlank()) { "ENote missing document type" }\n                require(eNote.eNote.checksum.isNotBlank()) { "ENote missing checksum" }\n                require(eNote.signedDate.isNotBlank()) { "ENote missing signed date" }\n                require(eNote.vaultName.isNotBlank()) { "ENote missing vault name" }\n            }\n\n}\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"Input")," names are independent of (output)",(0,a.kt)("inlineCode",{parentName:"p"},"Record")," names. In our example, it is merely convenient to use the same String label as the object input. In our example, the input is the same object we expect to store as a record. In other contracts, one might calculate or construct the object in the body of the function instead, and inputs to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Function")," might be different types entirely.")),(0,a.kt)("h2",{id:"result"},"Result"),(0,a.kt)("p",null,"Upon execution of this contract:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/provenance-io/p8e/blob/main/simple-client/src/main/proto/contract/scope.proto#L33"},"P8e Scope")," object is established in the EOS, containing the full record of the execution of this Contract and the head state of the records (data output by this contract) in the scope."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/provenance-io/provenance/blob/main/proto/provenance/metadata/v1/scope.proto"},"Provenance Blockchain Scope")," object is established on the blockchain. The originator, who acts as OWNER in the contract, is designated as the value owner of the asset in the scope."),(0,a.kt)("li",{parentName:"ul"},"A ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/provenance-io/provenance/blob/main/proto/provenance/marker/v1/marker.proto"},"Provenance Blockchain MarkerAccount")," object is established on the blockchain.")),(0,a.kt)("h2",{id:"what-does-it-look-like-on-provenance"},"What does it look like on Provenance?"),(0,a.kt)("h3",{id:"example-p8e-scope-truncated"},"Example P8e Scope (Truncated):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "blocknumber": 5191103,\n  "blocktransactionindex": 0,\n  "scope": {\n    "uuid": {\n      "value": "6e1632bd-2016-47fe-a35b-1eb09b8535c7"\n    },\n    "parties": [\n      {\n        "signerRole": "OWNER",\n        "signer": {\n          "signingPublicKey": {\n            "publicKeyBytes": "BOMGXlqov...",\n            "type": "ELLIPTIC",\n            "curve": "SECP256K1",\n            "compressed": false\n          },\n          "encryptionPublicKey": {\n            "publicKeyBytes": "BOMGXlqove6...",\n            "type": "ELLIPTIC",\n            "curve": "SECP256K1",\n            "compressed": false\n          }\n        },\n        "address": "GOrX55pQULrlronarLFe8U4U3bc="\n      }\n    ],\n    "recordGroup": [\n      {\n        "specification": "t/OyOQF/kRfJHV1kB6JxiB...",\n        "groupUuid": {\n          "value": "23fb0e7d-a07a-4be4-b6d0-a6b844c443c7"\n        },\n        "executor": {\n          "signingPublicKey": {\n            "publicKeyBytes": "BOMGXlqov...",\n            "type": "ELLIPTIC",\n            "curve": "SECP256K1",\n            "compressed": false\n          },\n          "encryptionPublicKey": {\n            "publicKeyBytes": "BOMGXlqove...",\n            "type": "ELLIPTIC",\n            "curve": "SECP256K1",\n            "compressed": false\n          }\n        },\n        "parties": [\n          {\n            "signerRole": "OWNER",\n            "signer": {\n              "signingPublicKey": {\n                "publicKeyBytes": "BOMGXlqove...",\n                "type": "ELLIPTIC",\n                "curve": "SECP256K1",\n                "compressed": false\n              },\n              "encryptionPublicKey": {\n                "publicKeyBytes": "BOMGXlqove6...",\n                "type": "ELLIPTIC",\n                "curve": "SECP256K1",\n                "compressed": false\n              }\n            },\n            "address": "GOrX55pQULrlronarLFe8U4U3bc="\n          }\n        ],\n        "records": [\n          {\n            "name": "asset",\n            "hash": "qqwX2VwAgG1Z+SVswX4aqH1HqriY1pDTOBnlOwbJjb13FPq/N1iCUIbRe7kH2pT78Gc3vR/Bdu87zWHOjsXFCg==",\n            "classname": "tech.figure.asset.v1beta1$Asset",\n            "inputs": [\n              {\n                "name": "perform_input_checks",\n                "hash": "IEMjS35lfhIjmdLCpDCbk5j/QmxrorZr6Pua2MaULLEkzGoye51oewwl2yDplvi0HWuzieH/1wGfglhLGe7iTw==",\n                "classname": "io.p8e.proto.Common$BooleanResult",\n                "type": "NO_DEF_TYPE"\n              },\n              {\n                "name": "asset",\n                "hash": "y9Dh0IIIoFeMdYl2VDDHw7iPxTgWbJHgiGO06LauLTscKrI0faHJXKgZKpjz33Qf7arQv3HK3dBpNAxSXmWJQw==",\n                "classname": "tech.figure.asset.v1beta1$Asset",\n                "type": "NO_DEF_TYPE"\n              }\n            ],\n            "result": "PASS",\n            "resultName": "asset",\n            "resultHash": "y9Dh0IIIoFeMdYl2VDDHw7iPxTgWbJHgiGO06LauLTscKrI0faHJXKgZKpjz33Qf7arQv3HK3dBpNAxSXmWJQw=="\n          },\n          {\n            "name": "servicingRights",\n            "hash": "qqwX2VwAgG1Z+SVswX4aqH1HqriY1pDTOBnlOwbJjb13FPq/N1iCUIbRe7kH2pT78Gc3vR/Bdu87zWHOjsXFCg==",\n            "classname": "tech.figure.servicing.v1beta1$ServicingRights",\n            "inputs": [\n              {\n                "name": "perform_input_checks",\n                "hash": "IEMjS35lfhIjmdLCpDCbk5j/QmxrorZr6Pua2MaULLEkzGoye51oewwl2yDplvi0HWuzieH/1wGfglhLGe7iTw==",\n                "classname": "io.p8e.proto.Common$BooleanResult",\n                "type": "NO_DEF_TYPE"\n              },\n              {\n                "name": "servicingRights",\n                "hash": "7nWMRI8o5/7Q+8FhNVVxal4TMd+t12ra3KzIKAuFTdK+Se+ym8etviPCkpbI5I29KEnkhhfBjhwzrQEVChLYQA==",\n                "classname": "tech.figure.servicing.v1beta1$ServicingRights",\n                "type": "NO_DEF_TYPE"\n              }\n            ],\n            "result": "PASS",\n            "resultName": "servicingRights",\n            "resultHash": "7nWMRI8o5/7Q+8FhNVVxal4TMd+t12ra3KzIKAuFTdK+Se+ym8etviPCkpbI5I29KEnkhhfBjhwzrQEVChLYQA=="\n          },\n          ... Other Records ...\n        ],\n        "classname": "tech.figure.contracts.RecordLoanContract",\n        "audit": {\n          "createdDate": "2022-03-29T00:01:11Z",\n          "createdBy": "tp1rr4d0eu62pgt4edw38d2ev27798pfhdhp5ttha",\n          "updatedBy": "",\n          "version": 1,\n          "message": ""\n        }\n      }\n    ],\n    "lastEvent": {\n      "groupUuid": {\n        "value": "579291a8-b062-4a54-86dc-b175a2e70950"\n      },\n      "executionUuid": {\n        "value": "e8069fc7-178a-4b49-88c4-2d7848908b03"\n      }\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);