"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[4545],{5037:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var o=t(74848),a=t(28453);const i={description:"Digital Loan NFT"},r="Data Mapping",s={id:"pb/integrating/integrating-with-p8e/lending-ecosystem/data-mapping",title:"Data Mapping",description:"Digital Loan NFT",source:"@site/docs/pb/integrating/integrating-with-p8e/lending-ecosystem/data-mapping.md",sourceDirName:"pb/integrating/integrating-with-p8e/lending-ecosystem",slug:"/pb/integrating/integrating-with-p8e/lending-ecosystem/data-mapping",permalink:"/docs/pb/integrating/integrating-with-p8e/lending-ecosystem/data-mapping",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{description:"Digital Loan NFT"},sidebar:"documentationSidebar",previous:{title:"Life Cycle of a Loan",permalink:"/docs/pb/integrating/integrating-with-p8e/lending-ecosystem/life-cycle-of-a-loan"},next:{title:"BlockVault Contract Execution Environment (formerly nicknamed \u201cP8e\u201d)",permalink:"/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/"}},d={},l=[{value:"Loan Package",id:"loan-package",level:2},{value:"Proto Definitions",id:"proto-definitions",level:3},{value:"Examples",id:"examples",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"data-mapping",children:"Data Mapping"})}),"\n",(0,o.jsx)(n.p,{children:"NFT stands for \u201cNon-Fungible Token\u201d and is used in blockchain ecosystems to represent a unique (non-fungible) digital asset (token) whose ownership is registered and tracked on a blockchain. When it comes to the data model, an NFT can take any shape or form, as long as it provides value to the parties that own or share ownership of the asset throughout its life."}),"\n",(0,o.jsx)(n.p,{children:"It can be as simple as the metadata associated with a JPEG, as it is in the digital art world. It can be locked down to a few specific fields, or provide space for each unique asset to grow, as needed."}),"\n",(0,o.jsx)(n.p,{children:"Provenance NFTs are typically financial assets, such as loans or funds. However, the type of asset on Provenance is not restricted, allowing for innovation in the financial services industry."}),"\n",(0,o.jsxs)(n.p,{children:["Figure Tech has created an open-source ",(0,o.jsx)(n.a,{href:"https://github.com/provenance-io/metadata-asset-model",children:"metadata-asset-model"})," to provide a highly extensible ",(0,o.jsx)(n.a,{href:"https://developers.google.com/protocol-buffers",children:"Google Protocol Buffer"})," representation of an ",(0,o.jsx)(n.a,{href:"https://github.com/provenance-io/metadata-asset-model/blob/main/docs/asset.md",children:"Asset"}),". Using this model, groups of participants can model just about any use case, storing however much data they need to produce value."]}),"\n",(0,o.jsx)(n.p,{children:"When approaching a use case, it's important to balance the needs of each participant type. The model should provide space to store information that is valuable to all parties, even when that value doesn't overlap."}),"\n",(0,o.jsx)(n.p,{children:"On the flip side, the model does not need to cover information that one single party finds useful. That information is better kept off-chain and combined with the shared asset client-side. On the same note, keeping size to a minimum is best because the object can be replicated across several Object Stores. Whenever files are involved, it can be best to store the files by themselves, and add a pointer to the file to the asset data model. You will see this pattern multiple times within the Loan Package data model."}),"\n",(0,o.jsxs)(n.p,{children:["As you will see below, the Figure Tech team has extended the base Asset data model to put together a Loan Package data model that balances the needs of loan originators, validators, servicers, investors, and eNote controllers. It's a model that has worked for Figure Lending as they record and sell loans to existing investors in the network. The model remains highly extensible and allows mortgage originators to choose whether to map each field in their own data model to the ",(0,o.jsx)(n.a,{href:"https://github.com/provenance-io/metadata-asset-model/blob/main/src/main/proto/tech/figure/loan/v1beta1/loan.proto#L29",children:"Loan Proto"}),", or simply onboard loan data in a MISMO XML format."]}),"\n",(0,o.jsx)(n.h2,{id:"loan-package",children:"Loan Package"}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["This section builds on the ",(0,o.jsx)(n.a,{href:"/docs/sdk/metadata",children:"Metadata Module"})," documentation. Revisit that page for definitions of the four core state objects in BlockVault: Contracts, Records, Sessions, and Scopes."]})}),"\n",(0,o.jsx)(n.p,{children:"Asset originators must understand the structure of the scope they are going to onboard to Provenance Blockchain, also known as the Record Specification. We will stick to the mortgage as an example of an asset that we want to represent as an asset in Provenance. The Loan Package Record Specification is one scope that includes the following six records:"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Record"}),(0,o.jsx)(n.th,{children:"Description"}),(0,o.jsx)(n.th,{children:"Nullable"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Asset"}),(0,o.jsx)(n.td,{children:"Core information about the loan that should not change throughout the life cycle of the loan after the loan is funded"}),(0,o.jsx)(n.td,{children:"No"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Servicing Rights"}),(0,o.jsx)(n.td,{children:"Identifies the servicer and optional sub-servicer"}),(0,o.jsx)(n.td,{children:"No"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Documents"}),(0,o.jsx)(n.td,{children:"List of loan documents (metadata with pointers to their actual storage location)"}),(0,o.jsx)(n.td,{children:"Yes"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Loan States"}),(0,o.jsx)(n.td,{children:"List of loan states from servicing"}),(0,o.jsx)(n.td,{children:"Yes"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Validation"}),(0,o.jsx)(n.td,{children:"List of validation requests and validation results (a.k.a. validation iterations in the model)"}),(0,o.jsx)(n.td,{children:"Yes"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"eNote"}),(0,o.jsx)(n.td,{children:"Metadata belonging to the authoritative copy of the eNote, as well as identifiers for the controller and custodian"}),(0,o.jsx)(n.td,{children:"Yes (only used when eNote is to be registered with DART)"})]})]})]}),"\n",(0,o.jsx)(n.p,{children:"To remain flexible the Asset record is quite loosely defined, however, the intention is for loan originators to choose from one of two options:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["Map their own data model to the ",(0,o.jsx)(n.a,{href:"https://github.com/provenance-io/metadata-asset-model/blob/main/src/main/proto/tech/figure/loan/v1beta1/loan.proto#L29",children:"Loan Proto"}),", which includes all of the fields needed to re-underwrite the loan and space to add custom fields in each section, or"]}),"\n",(0,o.jsxs)(n.li,{children:["Use the ",(0,o.jsx)(n.a,{href:"https://github.com/provenance-io/metadata-asset-model/blob/main/src/main/proto/tech/figure/loan/v1beta1/mismo_loan.proto#L19",children:"MISMOLoan Proto"})," or ",(0,o.jsx)(n.a,{href:"https://github.com/provenance-io/metadata-asset-model/blob/main/src/main/proto/tech/figure/loan/v1beta1/mismo_loan.proto#L30",children:"MISMOLoanMetadata Proto"}),", which simply require a Universal Loan Identifier (ULI) and MISMO XML file (or pointer to that file) while allowing loan originators to extend the model as needed"]}),"\n"]}),"\n",(0,o.jsxs)(n.admonition,{type:"info",children:[(0,o.jsx)(n.p,{children:"To help you choose, consider which format your business partners can handle. For example, if you intend to have your loan(s) validated by a third party that can handle version 3.4 of the MISMO Reference Model, then use the MISMOLoan Proto."}),(0,o.jsx)(n.p,{children:"Both DART and Portfolio Manager can work off of either format."})]}),"\n",(0,o.jsxs)(n.p,{children:["See the ",(0,o.jsx)(n.a,{href:"../loan-onboarding-service/api-usage-guide/",children:"API Usage Guide"})," for a detailed, practical description of how each record can get generated and memorialized throughout the loan application, closing, validation, and servicing processes. It is also not uncommon for loan originators to work with document preparation vendors that may integrate directly with Figure Tech to onboard and register eNotes with DART on closing day. A separate guide is available for onboarding eNotes separately from the rest of the loan package, to ensure direct transfer between eVaults."]}),"\n",(0,o.jsx)(n.h3,{id:"proto-definitions",children:"Proto Definitions"}),"\n",(0,o.jsxs)(n.p,{children:["Each ",(0,o.jsx)(n.a,{href:"../../../p8e/overview/",children:"Record"})," in a ",(0,o.jsx)(n.a,{href:"../../../p8e/overview/#scopes",children:"Scope"})," is a key-value pair, where the key is a String and the value is a Protocol Buffer object. ",(0,o.jsx)(n.a,{href:"https://developers.google.com/protocol-buffers",children:"Google Protocol Buffers"})," support code generation in many languages. The table below lists the record names and links to the Protocol Buffer definitions and documentation for each proto used in the loan scope."]}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Record Name"}),(0,o.jsx)(n.th,{children:"Proto Definition"}),(0,o.jsx)(n.th,{children:"Proto Documentation"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Asset"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://github.com/provenance-io/metadata-asset-model/blob/main/src/main/proto/tech/figure/asset/v1beta1/asset.proto#L19",children:"asset.proto"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://github.com/provenance-io/metadata-asset-model/blob/main/docs/asset.md",children:"asset.md"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Servicing Rights"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://github.com/provenance-io/metadata-asset-model/blob/main/src/main/proto/tech/figure/servicing/v1beta1/servicing_rights.proto#L12",children:"servicing_rights.proto"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://github.com/provenance-io/metadata-asset-model/blob/main/docs/servicing.md",children:"servicing.md"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Documents"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://github.com/provenance-io/metadata-asset-model/blob/main/src/main/proto/tech/figure/util/v1beta1/document.proto#L27",children:"document.proto"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://github.com/provenance-io/metadata-asset-model/blob/main/docs/util.md",children:"util.md"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Loan States"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://github.com/provenance-io/metadata-asset-model/blob/main/src/main/proto/tech/figure/servicing/v1beta1/loan_state.proto#L23",children:"loan_state.proto"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://github.com/provenance-io/metadata-asset-model/blob/main/docs/servicing.md",children:"servicing.md"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Validation"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://github.com/provenance-io/metadata-asset-model/blob/main/src/main/proto/tech/figure/validation/v1beta1/validation.proto#L13",children:"validation.proto"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://github.com/provenance-io/metadata-asset-model/blob/main/docs/validation.md",children:"validation.md"})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"eNote"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://github.com/provenance-io/metadata-asset-model/blob/main/src/main/proto/io/dartinc/registry/v1beta1/registry.proto#L14",children:"registry.proto"})}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://github.com/provenance-io/metadata-asset-model/blob/main/docs/regis.md",children:"registry.md"})})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"examples",children:"Examples"}),"\n",(0,o.jsx)(n.p,{children:"The following examples assume the loan being recorded is a mortgage and that at the time of recording, the originator has a list of documents and eNote metadata, but has not requested validation or started servicing the loan, yet."}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Example with Loan Proto"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-kotlin",children:'{\n    "asset" : {\n        "id": "c6978d46-3c3e-4175-a0d2-8f8ce47e8bb6",\n        "type": "LOAN",\n        "description": "MORTGAGE LOAN-1234",\n        "kv": {\n            "loan": {\n                "typeUrl": "/tech.figure.asset.loan.Loan",\n                "id": "c6978d46-3c3e-4175-a0d2-8f8ce47e8bb6",\n                "originatorName": "Figure Lending",\n                "originatorLoanId": "LOAN-1234",\n                "borrowers": {\n                    "primary": {\n                        "partyType": "PRIMARY_BORROWER",\n                        "name": {\n                            "firstName": "FirstName",\n                            "lastName": "LastName",\n                            "middleName": "MiddleName",\n                            "suffix": "NameSuffix"\n                        }\n                    }\n                },\n                "loanType": "MORTGAGE",\n                "terms": {\n                    "principalAmount": {\n                        "amount": 1000000,\n                        "currency": "USD"\n                    },\n                    "termInMonths": "360",\n                    "rateType": "FIXED",\n                    "interestRate": {\n                        "value": "0.045"\n                    },\n                    "interestRateCap": {\n                        "value": "0.045"\n                    },\n                    "payment": {\n                        "firstPaymentAmount": {\n                            "amount": 3000,\n                            "currency": "USD"\n                        },\n                        "monthlyPaymentAmount": {\n                            "amount": 3000,\n                            "currency": "USD"\n                        }\n                    },\n                    "dates": {\n                        "initialOfferDate": {\n                            "value": "2022-02-01"\n                        },\n                        "originationDate": {\n                            "value": "2022-02-07"\n                        },\n                        "signedDate": {\n                            "value": "2022-03-01"\n                        },\n                        "fundingDate": {\n                            "value": "2022-03-06"\n                        }\n                    }\n                },\n                "funding": {\n                    "status": "FUNDED",\n                    "started": "2022-03-05T11:30:15.01Z",\n                    "completed": "2022-03-06T04:30:15.01Z",\n                    "disbursements": {\n                        "id": {\n                            "value": "<UUID>"\n                        },\n                        "amount": {\n                            "amount": "1000000",\n                            "currency": "USD"\n                        },\n                        "account": {\n                            ...\n                        },\n                        "status": "COMPLETED",\n                        "started": "2022-03-05T11:30:15.01Z",\n                        "completed": "2022-03-06T04:30:15.01Z"\n                    }\n                },\n                "mortgage": {\n                    "lienProperty": {\n                        "address": {\n                            "street": "123 Main St",\n                            "city": "City",\n                            "state": "FL",\n                            "zip": "33000"\n                        }\n                    },\n                    "lienPosition": 1,\n                    ...\n                }\n            }\n        }\n    },\n    "servicingRights": {\n        "servicerUuid": "<Servicer ID>",\n        "servicerName": "Loan Servicing, Inc."\n    },\n    "documents": [\n        {\n            "id": "<UUID>",\n            "uri": "EOS URI",\n            "fileName": "Electronic Promissory Note (eNote)",\n            "ContentType": "application/xml",\n            "documentType": "MISMO_ENOTE_SMART_DOC_XML",\n            "checksum": "<File sha512 Hash>"\n        },\n        ...\n    ],\n    "loanStates": null,\n    "validation": null,\n    "eNote": {\n        "controllerId": {\n            "controllerUuid": {\n                "value": "<Controller ID>"\n            },\n            "controllerName": "<Controller Name>"\n        },\n        "eNote": {\n            "id": "<UUID>",\n            "uri": "EOS URI",\n            "fileName": "Electronic Promissory Note (eNote)",\n            "ContentType": "application/xml",\n            "documentType": "MISMO_ENOTE_SMART_DOC_XML",\n            "checksum": "<File sha512 Hash>"\n        },\n        "signedDate": {\n            "value": "2022-03-01"\n        },\n        "vaultName": "DART eVault"\n    }\n}\n'})})]}),"\n",(0,o.jsxs)(t,{children:[(0,o.jsx)("summary",{children:"Example with MISMOLoan Proto"}),(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{\n    "asset" : {\n        "id": "<uri>",\n        "type": "MORTGAGE",\n        "description": "MORTGAGE LOAN-1234",\n        "kv": {\n            "loan": {\n                "typeUrl": "<mismo loan type>",\n                "uri": "<uri>",\n                "data": "<base64 encoded byte array>"\n            }\n        }\n    },\n    "servicingRights": {\n        "servicerUuid": "<Servicer ID>",\n        "servicerName": "Loan Servicing, Inc."\n    },\n    "documents": [\n        {\n            "id": "<UUID>",\n            "uri": "EOS URI",\n            "fileName": "Electronic Promissory Note (eNote)",\n            "ContentType": "application/xml",\n            "documentType": "MISMO_ENOTE_SMART_DOC_XML",\n            "checksum": "<File sha512 Hash>"\n        },\n        ...remaining documents\n    ],\n    "loanStates": null,\n    "validation": null,\n    "eNote": {\n        "controllerId": {\n            "controllerUuid": {\n                "value": "<Controller ID>"\n            },\n            "controllerName": "<Controller Name>"\n        },\n        "eNote": {\n            "id": "<UUID>",\n            "uri": "EOS URI",\n            "fileName": "Electronic Promissory Note (eNote)",\n            "ContentType": "application/xml",\n            "documentType": "MISMO_ENOTE_SMART_DOC_XML",\n            "checksum": "<sha512 Hash>"\n        },\n        "signedDate": {\n            "value": "2022-03-01"\n        },\n        "vaultName": "DART eVault"\n    }\n}\n'})})]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>s});var o=t(96540);const a={},i=o.createContext(a);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);