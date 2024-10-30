"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[617],{53064:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>p});var o=t(74848),a=t(28453),i=t(41306);const s={},c="Onboard Loan Contract",r={id:"pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/p8e-contracts/example-loan-contracts",title:"Onboard Loan Contract",description:'<DocSubheader text="Establishing the loan in the Encrypted Object Store and Blockchain"',source:"@site/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/p8e-contracts/example-loan-contracts.md",sourceDirName:"pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/p8e-contracts",slug:"/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/p8e-contracts/example-loan-contracts",permalink:"/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/p8e-contracts/example-loan-contracts",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"BlockVault Contracts",permalink:"/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/p8e-contracts/"},next:{title:"Key Management",permalink:"/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/key-management/"}},l={},p=[{value:"Sample Contract - Record Loan Contract",id:"sample-contract---record-loan-contract",level:2},{value:"Result",id:"result",level:2},{value:"What does it look like on Provenance?",id:"what-does-it-look-like-on-provenance",level:2},{value:"Example BlockVault Scope (Truncated):",id:"example-blockvault-scope-truncated",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"onboard-loan-contract",children:"Onboard Loan Contract"})}),"\n","\n",(0,o.jsx)(i.Y,{text:"Establishing the loan in the Encrypted Object Store and Blockchain"}),"\n",(0,o.jsxs)(n.p,{children:['In our example, "onboarding a loan" is the process to establish a scope for a loan and save the loan data to the Encrypted Object Store (EOS). Each function (annotated with ',(0,o.jsx)(n.code,{children:"@Function"}),") establishes one of the records in the scope. For each function, the contract author should add input checks based on their own data model. For any check that does not pass, an ",(0,o.jsx)(n.code,{children:"Exception"})," should be thrown, and the contract execution will fail. (Loan scope will not be established or recorded on-chain.) In the example below, only a few functions have examples of input checks."]}),"\n",(0,o.jsx)(n.h2,{id:"sample-contract---record-loan-contract",children:"Sample Contract - Record Loan Contract"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'import io.dartinc.v1beta1.ENote\nimport io.provenance.scope.contract.annotations.Record\nimport io.provenance.scope.contract.annotations.Function\nimport io.provenance.scope.contract.annotations.Input\nimport io.provenance.scope.contract.annotations.Participants\niimport io.provenance.scope.contract.proto.Specifications.PartyType.ORIGINATOR\nimport io.provenance.scope.contract.spec.P8eContract\nimport tech.figure.asset.v1beta1.Asset\nimport tech.figure.loan.LoanScopeFacts\nimport tech.figure.servicing.v1beta1.LoanStateList\nimport tech.figure.servicing.v1beta1.ServicingRights\nimport tech.figure.util.v1beta1.DocumentList\nimport tech.figure.validation.v1beta1.ValidationResults\n\n\n@Participants([OWNER])\n@ScopeSpecification(["tech.figure.loan"])\nopen class RecordLoanContract(\n    @Record(LoanScopeFacts.asset) val existingAsset: Asset,\n    @Record(LoanScopeFacts.eNote) val existingENote: ENote,\n) : P8eContract() {\n\n    @Function(OWNER)\n    @Record(LoanScopeFacts.asset)\n    open fun recordAsset(@Input(LoanScopeFacts.asset) asset: Asset) = asset\n            .also {\n                if (existingAsset != null) {\n                    require(existingAsset.kv.loan.isENote.isFalse()) { "asset cannot be updated" }\n                    // optional: make sure nothing important changed\n                    // examples:\n                    require(existingAsset.id == asset.id) { "cannot change asset ID" }\n                    require(existingAsset.type == asset.type) { "cannot change asset type" }\n                    require(existingAsset.kv.loan.originatorUuid == asset.kv.loan.originatorUuid) { "cannot change loan originator UUID" }\n                    require(existingAsset.kv.loan.originatorName == asset.kv.loan.originatorName) { "cannot change loan originator name" }\n                } else {\n                    // other validation rules, such as:\n                    require(asset.id.isValid()) { "asset.id is missing" }\n                    require(asset.type.isNotBlank()) { "asset.type is missing" }\n                    require(asset.kv.loan.originatorUuid.isValid()) { "asset.kv.loan.originatorUuid is missing" }\n                    require(asset.kv.loan.originatorName.isNotBlank()) { "asset.kv.loan.originatorName is missing" }\n                }\n            }\n\n    @Function(OWNER)\n    @Record(LoanScopeFacts.servicingRights)\n    open fun recordServicingRights(@Input(LoanScopeFacts.servicingRights) servicingRights: ServicingRights) = servicingRights\n\n    @Function(OWNER)\n    @Record(LoanScopeFacts.documents)\n    open fun recordDocuments(@Input(LoanScopeFacts.documents) documents: DocumentList) = documents\n\n    @Function(OWNER)\n    @Record(LoanScopeFacts.loanStates)\n    open fun recordLoanStates(@Input(LoanScopeFacts.loanStates) loanStates: LoanStateList) = loanStates\n\n    @Function(OWNER)\n    @Record(LoanScopeFacts.validationResults)\n    open fun recordValidationResults(@Input(LoanScopeFacts.validationResults) validationResults: ValidationResults) = validationResults\n\n    @Function(OWNER)\n    @Record(LoanScopeFacts.eNote)\n    open fun recordENote(@Input(LoanScopeFacts.eNote) eNote: ENote) = eNote?\n            .also {\n                if (existingENote != null) {\n                    require(existingENote.checksum == eNote.checksum) { "cannot modify or remove eNote during loan onboarding" } // use specific contract instead\n                }\n                // TODO: Decide which fields should only be required if DART is listed as mortgagee of record/active custodian\n                require(eNote.controller.controllerUuid.isValid()) { "ENote missing controller UUID" }\n                require(eNote.controller.controllerName.isNotBlank()) { "ENote missing controller Name" }\n                require(eNote.eNote.id.isValid()) { "ENote missing ID" }\n                require(eNote.eNote.uri.isNotBlank()) { "ENote missing uri" }\n                require(eNote.eNote.content_type.isNotBlank()) { "ENote missing content type" }\n                require(eNote.eNote.document_type.isNotBlank()) { "ENote missing document type" }\n                require(eNote.eNote.checksum.isNotBlank()) { "ENote missing checksum" }\n                require(eNote.signedDate.isNotBlank()) { "ENote missing signed date" }\n                require(eNote.vaultName.isNotBlank()) { "ENote missing vault name" }\n            }\n\n}\n'})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.code,{children:"Input"})," names are independent of (output)",(0,o.jsx)(n.code,{children:"Record"})," names. In our example, it is merely convenient to use the same String label as the object input. In our example, the input is the same object we expect to store as a record. In other contracts, one might calculate or construct the object in the body of the function instead, and inputs to the ",(0,o.jsx)(n.code,{children:"Function"})," might be different types entirely."]})}),"\n",(0,o.jsx)(n.h2,{id:"result",children:"Result"}),"\n",(0,o.jsx)(n.p,{children:"Upon execution of this contract:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["A ",(0,o.jsx)(n.a,{href:"https://github.com/provenance-io/p8e/blob/main/simple-client/src/main/proto/contract/scope.proto#L33",children:"BlockVault Scope"})," object is established in the EOS, containing the full record of the execution of this Contract and the head state of the records (data output by this contract) in the scope."]}),"\n",(0,o.jsxs)(n.li,{children:["A ",(0,o.jsx)(n.a,{href:"https://github.com/provenance-io/provenance/blob/main/proto/provenance/metadata/v1/scope.proto",children:"Provenance Blockchain Scope"})," object is established on the blockchain. The originator, who acts as OWNER in the contract, is designated as the value owner of the asset in the scope."]}),"\n",(0,o.jsxs)(n.li,{children:["A ",(0,o.jsx)(n.a,{href:"https://github.com/provenance-io/provenance/blob/main/proto/provenance/marker/v1/marker.proto",children:"Provenance Blockchain MarkerAccount"})," object is established on the blockchain."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"what-does-it-look-like-on-provenance",children:"What does it look like on Provenance?"}),"\n",(0,o.jsx)(n.h3,{id:"example-blockvault-scope-truncated",children:"Example BlockVault Scope (Truncated):"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-js",children:'{\n  "blocknumber": 5191103,\n  "blocktransactionindex": 0,\n  "scope": {\n    "uuid": {\n      "value": "6e1632bd-2016-47fe-a35b-1eb09b8535c7"\n    },\n    "parties": [\n      {\n        "signerRole": "OWNER",\n        "signer": {\n          "signingPublicKey": {\n            "publicKeyBytes": "BOMGXlqov...",\n            "type": "ELLIPTIC",\n            "curve": "SECP256K1",\n            "compressed": false\n          },\n          "encryptionPublicKey": {\n            "publicKeyBytes": "BOMGXlqove6...",\n            "type": "ELLIPTIC",\n            "curve": "SECP256K1",\n            "compressed": false\n          }\n        },\n        "address": "GOrX55pQULrlronarLFe8U4U3bc="\n      }\n    ],\n    "recordGroup": [\n      {\n        "specification": "t/OyOQF/kRfJHV1kB6JxiB...",\n        "groupUuid": {\n          "value": "23fb0e7d-a07a-4be4-b6d0-a6b844c443c7"\n        },\n        "executor": {\n          "signingPublicKey": {\n            "publicKeyBytes": "BOMGXlqov...",\n            "type": "ELLIPTIC",\n            "curve": "SECP256K1",\n            "compressed": false\n          },\n          "encryptionPublicKey": {\n            "publicKeyBytes": "BOMGXlqove...",\n            "type": "ELLIPTIC",\n            "curve": "SECP256K1",\n            "compressed": false\n          }\n        },\n        "parties": [\n          {\n            "signerRole": "OWNER",\n            "signer": {\n              "signingPublicKey": {\n                "publicKeyBytes": "BOMGXlqove...",\n                "type": "ELLIPTIC",\n                "curve": "SECP256K1",\n                "compressed": false\n              },\n              "encryptionPublicKey": {\n                "publicKeyBytes": "BOMGXlqove6...",\n                "type": "ELLIPTIC",\n                "curve": "SECP256K1",\n                "compressed": false\n              }\n            },\n            "address": "GOrX55pQULrlronarLFe8U4U3bc="\n          }\n        ],\n        "records": [\n          {\n            "name": "asset",\n            "hash": "qqwX2VwAgG1Z+SVswX4aqH1HqriY1pDTOBnlOwbJjb13FPq/N1iCUIbRe7kH2pT78Gc3vR/Bdu87zWHOjsXFCg==",\n            "classname": "tech.figure.asset.v1beta1$Asset",\n            "inputs": [\n              {\n                "name": "perform_input_checks",\n                "hash": "IEMjS35lfhIjmdLCpDCbk5j/QmxrorZr6Pua2MaULLEkzGoye51oewwl2yDplvi0HWuzieH/1wGfglhLGe7iTw==",\n                "classname": "io.p8e.proto.Common$BooleanResult",\n                "type": "NO_DEF_TYPE"\n              },\n              {\n                "name": "asset",\n                "hash": "y9Dh0IIIoFeMdYl2VDDHw7iPxTgWbJHgiGO06LauLTscKrI0faHJXKgZKpjz33Qf7arQv3HK3dBpNAxSXmWJQw==",\n                "classname": "tech.figure.asset.v1beta1$Asset",\n                "type": "NO_DEF_TYPE"\n              }\n            ],\n            "result": "PASS",\n            "resultName": "asset",\n            "resultHash": "y9Dh0IIIoFeMdYl2VDDHw7iPxTgWbJHgiGO06LauLTscKrI0faHJXKgZKpjz33Qf7arQv3HK3dBpNAxSXmWJQw=="\n          },\n          {\n            "name": "servicingRights",\n            "hash": "qqwX2VwAgG1Z+SVswX4aqH1HqriY1pDTOBnlOwbJjb13FPq/N1iCUIbRe7kH2pT78Gc3vR/Bdu87zWHOjsXFCg==",\n            "classname": "tech.figure.servicing.v1beta1$ServicingRights",\n            "inputs": [\n              {\n                "name": "perform_input_checks",\n                "hash": "IEMjS35lfhIjmdLCpDCbk5j/QmxrorZr6Pua2MaULLEkzGoye51oewwl2yDplvi0HWuzieH/1wGfglhLGe7iTw==",\n                "classname": "io.p8e.proto.Common$BooleanResult",\n                "type": "NO_DEF_TYPE"\n              },\n              {\n                "name": "servicingRights",\n                "hash": "7nWMRI8o5/7Q+8FhNVVxal4TMd+t12ra3KzIKAuFTdK+Se+ym8etviPCkpbI5I29KEnkhhfBjhwzrQEVChLYQA==",\n                "classname": "tech.figure.servicing.v1beta1$ServicingRights",\n                "type": "NO_DEF_TYPE"\n              }\n            ],\n            "result": "PASS",\n            "resultName": "servicingRights",\n            "resultHash": "7nWMRI8o5/7Q+8FhNVVxal4TMd+t12ra3KzIKAuFTdK+Se+ym8etviPCkpbI5I29KEnkhhfBjhwzrQEVChLYQA=="\n          },\n          ... Other Records ...\n        ],\n        "classname": "tech.figure.contracts.RecordLoanContract",\n        "audit": {\n          "createdDate": "2022-03-29T00:01:11Z",\n          "createdBy": "tp1rr4d0eu62pgt4edw38d2ev27798pfhdhp5ttha",\n          "updatedBy": "",\n          "version": 1,\n          "message": ""\n        }\n      }\n    ],\n    "lastEvent": {\n      "groupUuid": {\n        "value": "579291a8-b062-4a54-86dc-b175a2e70950"\n      },\n      "executionUuid": {\n        "value": "e8069fc7-178a-4b49-88c4-2d7848908b03"\n      }\n    }\n  }\n}\n'})})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},41306:(e,n,t)=>{t.d(n,{Y:()=>a});t(96540);var o=t(74848);const a=e=>{let{text:n}=e;return(0,o.jsx)("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500",children:n})}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var o=t(96540);const a={},i=o.createContext(a);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);