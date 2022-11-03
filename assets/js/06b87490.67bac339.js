"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[7002],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=d(n),u=o,h=m["".concat(s,".").concat(u)]||m[u]||c[u]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4729:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const r={description:"Digital Loan NFT"},i="Data Mapping",l={unversionedId:"pb/integrating/integrating-with-p8e/lending-ecosystem/data-mapping",id:"pb/integrating/integrating-with-p8e/lending-ecosystem/data-mapping",title:"Data Mapping",description:"Digital Loan NFT",source:"@site/docs/pb/integrating/integrating-with-p8e/lending-ecosystem/data-mapping.md",sourceDirName:"pb/integrating/integrating-with-p8e/lending-ecosystem",slug:"/pb/integrating/integrating-with-p8e/lending-ecosystem/data-mapping",permalink:"/provenance-docs/docs/pb/integrating/integrating-with-p8e/lending-ecosystem/data-mapping",draft:!1,tags:[],version:"current",frontMatter:{description:"Digital Loan NFT"},sidebar:"docs",previous:{title:"Life Cycle of a Loan",permalink:"/provenance-docs/docs/pb/integrating/integrating-with-p8e/lending-ecosystem/life-cycle-of-a-loan"},next:{title:"P8e Contract Execution Environment (p8e)",permalink:"/provenance-docs/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/"}},s={},d=[{value:"Loan Package",id:"loan-package",level:2},{value:"Proto Definitions",id:"proto-definitions",level:3},{value:"Examples",id:"examples",level:3}],p={toc:d};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"data-mapping"},"Data Mapping"),(0,o.kt)("p",null,"NFT stands for \u201cNon-Fungible Token\u201d and is used in blockchain ecosystems to represent a unique (non-fungible) digital asset (token) whose ownership is registered and tracked on a blockchain. When it comes to the data model, an NFT can take any shape or form, as long as it provides value to the parties that own or share ownership of the asset throughout its life."),(0,o.kt)("p",null,"It can be as simple as the metadata associated with a JPEG, as it is in the digital art world. It can be locked down to a few specific fields, or provide space for each unique asset to grow, as needed."),(0,o.kt)("p",null,"Provenance NFTs are typically financial assets, such as loans or funds. However, the type of asset on Provenance is not restricted, allowing for innovation in the financial services industry."),(0,o.kt)("p",null,"Figure Tech has created an open-source ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/metadata-asset-model"},"metadata-asset-model")," to provide a highly extensible ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers"},"Google Protocol Buffer")," representation of an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/metadata-asset-model/blob/main/docs/asset.md"},"Asset"),". Using this model, groups of participants can model just about any use case, storing however much data they need to produce value."),(0,o.kt)("p",null,"When approaching a use case, it's important to balance the needs of each participant type. The model should provide space to store information that is valuable to all parties, even when that value doesn't overlap."),(0,o.kt)("p",null,"On the flip side, the model does not need to cover information that one single party finds useful. That information is better kept off-chain and combined with the shared asset client-side. On the same note, keeping size to a minimum is best because the object can be replicated across several Object Stores. Whenever files are involved, it can be best to store the files by themselves, and add a pointer to the file to the asset data model. You will see this pattern multiple times within the Loan Package data model."),(0,o.kt)("p",null,"As you will see below, the Figure Tech team has extended the base Asset data model to put together a Loan Package data model that balances the needs of loan originators, validators, servicers, investors, and eNote controllers. It's a model that has worked for Figure Lending as they record and sell loans to existing investors in the network. The model remains highly extensible and allows mortgage originators to choose whether to map each field in their own data model to the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/metadata-asset-model/blob/main/src/main/proto/tech/figure/loan/v1beta1/loan.proto#L29"},"Loan Proto"),", or simply onboard loan data in a MISMO XML format."),(0,o.kt)("h2",{id:"loan-package"},"Loan Package"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"This section builds on the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.provenance.io/modules/metadata-module"},"Metadata Module")," documentation. Revisit that page for definitions of the four core state objects in p8e: Contracts, Records, Sessions, and Scopes.")),(0,o.kt)("p",null,"Asset originators must understand the structure of the scope they are going to onboard to Provenance Blockchain, also known as the Record Specification. We will stick to the mortgage as an example of an asset that we want to represent as an asset in Provenance. The Loan Package Record Specification is one scope that includes the following six records:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Record"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Nullable"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Asset"),(0,o.kt)("td",{parentName:"tr",align:null},"Core information about the loan that should not change throughout the life cycle of the loan after the loan is funded"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Servicing Rights"),(0,o.kt)("td",{parentName:"tr",align:null},"Identifies the servicer and optional sub-servicer"),(0,o.kt)("td",{parentName:"tr",align:null},"No")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Documents"),(0,o.kt)("td",{parentName:"tr",align:null},"List of loan documents (metadata with pointers to their actual storage location)"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Loan States"),(0,o.kt)("td",{parentName:"tr",align:null},"List of loan states from servicing"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Validation"),(0,o.kt)("td",{parentName:"tr",align:null},"List of validation requests and validation results (a.k.a. validation iterations in the model)"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"eNote"),(0,o.kt)("td",{parentName:"tr",align:null},"Metadata belonging to the authoritative copy of the eNote, as well as identifiers for the controller and custodian"),(0,o.kt)("td",{parentName:"tr",align:null},"Yes (only used when eNote is to be registered with DART)")))),(0,o.kt)("p",null,"To remain flexible the Asset record is quite loosely defined, however, the intention is for loan originators to choose from one of two options:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Map their own data model to the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/provenance-io/metadata-asset-model/blob/main/src/main/proto/tech/figure/loan/v1beta1/loan.proto#L29"},"Loan Proto"),", which includes all of the fields needed to re-underwrite the loan and space to add custom fields in each section, or"),(0,o.kt)("li",{parentName:"ol"},"Use the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/provenance-io/metadata-asset-model/blob/main/src/main/proto/tech/figure/loan/v1beta1/mismo_loan.proto#L19"},"MISMOLoan Proto")," or ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/provenance-io/metadata-asset-model/blob/main/src/main/proto/tech/figure/loan/v1beta1/mismo_loan.proto#L30"},"MISMOLoanMetadata Proto"),", which simply require a Universal Loan Identifier (ULI) and MISMO XML file (or pointer to that file) while allowing loan originators to extend the model as needed")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"To help you choose, consider which format your business partners can handle. For example, if you intend to have your loan(s) validated by a third party that can handle version 3.4 of the MISMO Reference Model, then use the MISMOLoan Proto."),(0,o.kt)("p",{parentName:"admonition"},"Both DART and Portfolio Manager can work off of either format.")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"../loan-onboarding-service/api-usage-guide/"},"API Usage Guide")," for a detailed, practical description of how each record can get generated and memorialized throughout the loan application, closing, validation, and servicing processes. It is also not uncommon for loan originators to work with document preparation vendors that may integrate directly with Figure Tech to onboard and register eNotes with DART on closing day. A separate guide is available for onboarding eNotes separately from the rest of the loan package, to ensure direct transfer between eVaults."),(0,o.kt)("h3",{id:"proto-definitions"},"Proto Definitions"),(0,o.kt)("p",null,"Each ",(0,o.kt)("a",{parentName:"p",href:"../../../p8e/overview/"},"Record")," in a ",(0,o.kt)("a",{parentName:"p",href:"../../../p8e/overview/#scopes"},"Scope")," is a key-value pair, where the key is a String and the value is a Protocol Buffer object. ",(0,o.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers"},"Google Protocol Buffers")," support code generation in many languages. The table below lists the record names and links to the Protocol Buffer definitions and documentation for each proto used in the loan scope."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Record Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Proto Definition"),(0,o.kt)("th",{parentName:"tr",align:null},"Proto Documentation"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Asset"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/provenance-io/metadata-asset-model/blob/main/src/main/proto/tech/figure/asset/v1beta1/asset.proto#L19"},"asset.proto")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/provenance-io/metadata-asset-model/blob/main/docs/asset.md"},"asset.md"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Servicing Rights"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/provenance-io/metadata-asset-model/blob/main/src/main/proto/tech/figure/servicing/v1beta1/servicing_rights.proto#L12"},"servicing_rights.proto")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/provenance-io/metadata-asset-model/blob/main/docs/servicing.md"},"servicing.md"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Documents"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/provenance-io/metadata-asset-model/blob/main/src/main/proto/tech/figure/util/v1beta1/document.proto#L27"},"document.proto")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/provenance-io/metadata-asset-model/blob/main/docs/util.md"},"util.md"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Loan States"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/provenance-io/metadata-asset-model/blob/main/src/main/proto/tech/figure/servicing/v1beta1/loan_state.proto#L23"},"loan_state.proto")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/provenance-io/metadata-asset-model/blob/main/docs/servicing.md"},"servicing.md"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Validation"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/provenance-io/metadata-asset-model/blob/main/src/main/proto/tech/figure/validation/v1beta1/validation.proto#L13"},"validation.proto")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/provenance-io/metadata-asset-model/blob/main/docs/validation.md"},"validation.md"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"eNote"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/provenance-io/metadata-asset-model/blob/main/src/main/proto/io/dartinc/registry/v1beta1/registry.proto#L14"},"registry.proto")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/provenance-io/metadata-asset-model/blob/main/docs/regis.md"},"registry.md"))))),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("p",null,"The following examples assume the loan being recorded is a mortgage and that at the time of recording, the originator has a list of documents and eNote metadata, but has not requested validation or started servicing the loan, yet."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example with Loan Proto"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-kotlin"},'{\n    "asset" : {\n        "id": "c6978d46-3c3e-4175-a0d2-8f8ce47e8bb6",\n        "type": "LOAN",\n        "description": "MORTGAGE LOAN-1234",\n        "kv": {\n            "loan": {\n                "typeUrl": "/tech.figure.asset.loan.Loan",\n                "id": "c6978d46-3c3e-4175-a0d2-8f8ce47e8bb6",\n                "originatorName": "Figure Lending",\n                "originatorLoanId": "LOAN-1234",\n                "borrowers": {\n                    "primary": {\n                        "partyType": "PRIMARY_BORROWER",\n                        "name": {\n                            "firstName": "FirstName",\n                            "lastName": "LastName",\n                            "middleName": "MiddleName",\n                            "suffix": "NameSuffix"\n                        }\n                    }\n                },\n                "loanType": "MORTGAGE",\n                "terms": {\n                    "principalAmount": {\n                        "amount": 1000000,\n                        "currency": "USD"\n                    },\n                    "termInMonths": "360",\n                    "rateType": "FIXED",\n                    "interestRate": {\n                        "value": "0.045"\n                    },\n                    "interestRateCap": {\n                        "value": "0.045"\n                    },\n                    "payment": {\n                        "firstPaymentAmount": {\n                            "amount": 3000,\n                            "currency": "USD"\n                        },\n                        "monthlyPaymentAmount": {\n                            "amount": 3000,\n                            "currency": "USD"\n                        }\n                    },\n                    "dates": {\n                        "initialOfferDate": {\n                            "value": "2022-02-01"\n                        },\n                        "originationDate": {\n                            "value": "2022-02-07"\n                        },\n                        "signedDate": {\n                            "value": "2022-03-01"\n                        },\n                        "fundingDate": {\n                            "value": "2022-03-06"\n                        }\n                    }\n                },\n                "funding": {\n                    "status": "FUNDED",\n                    "started": "2022-03-05T11:30:15.01Z",\n                    "completed": "2022-03-06T04:30:15.01Z",\n                    "disbursements": {\n                        "id": {\n                            "value": "<UUID>"\n                        },\n                        "amount": {\n                            "amount": "1000000",\n                            "currency": "USD"\n                        },\n                        "account": {\n                            ...\n                        },\n                        "status": "COMPLETED",\n                        "started": "2022-03-05T11:30:15.01Z",\n                        "completed": "2022-03-06T04:30:15.01Z"\n                    }\n                },\n                "mortgage": {\n                    "lienProperty": {\n                        "address": {\n                            "street": "123 Main St",\n                            "city": "City",\n                            "state": "FL",\n                            "zip": "33000"\n                        }\n                    },\n                    "lienPosition": 1,\n                    ...\n                }\n            }\n        }\n    },\n    "servicingRights": {\n        "servicerUuid": "<Servicer ID>",\n        "servicerName": "Loan Servicing, Inc."\n    },\n    "documents": [\n        {\n            "id": "<UUID>",\n            "uri": "EOS URI",\n            "fileName": "Electronic Promissory Note (eNote)",\n            "ContentType": "application/xml",\n            "documentType": "MISMO_ENOTE_SMART_DOC_XML",\n            "checksum": "<File sha512 Hash>"\n        },\n        ...\n    ],\n    "loanStates": null,\n    "validation": null,\n    "eNote": {\n        "controllerId": {\n            "controllerUuid": {\n                "value": "<Controller ID>"\n            },\n            "controllerName": "<Controller Name>"\n        },\n        "eNote": {\n            "id": "<UUID>",\n            "uri": "EOS URI",\n            "fileName": "Electronic Promissory Note (eNote)",\n            "ContentType": "application/xml",\n            "documentType": "MISMO_ENOTE_SMART_DOC_XML",\n            "checksum": "<File sha512 Hash>"\n        },\n        "signedDate": {\n            "value": "2022-03-01"\n        },\n        "vaultName": "DART eVault"\n    }\n}\n'))),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Example with MISMOLoan Proto"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n    "asset" : {\n        "id": "<uri>",\n        "type": "MORTGAGE",\n        "description": "MORTGAGE LOAN-1234",\n        "kv": {\n            "loan": {\n                "typeUrl": "<mismo loan type>",\n                "uri": "<uri>",\n                "data": "<base64 encoded byte array>"\n            }\n        }\n    },\n    "servicingRights": {\n        "servicerUuid": "<Servicer ID>",\n        "servicerName": "Loan Servicing, Inc."\n    },\n    "documents": [\n        {\n            "id": "<UUID>",\n            "uri": "EOS URI",\n            "fileName": "Electronic Promissory Note (eNote)",\n            "ContentType": "application/xml",\n            "documentType": "MISMO_ENOTE_SMART_DOC_XML",\n            "checksum": "<File sha512 Hash>"\n        },\n        ...remaining documents\n    ],\n    "loanStates": null,\n    "validation": null,\n    "eNote": {\n        "controllerId": {\n            "controllerUuid": {\n                "value": "<Controller ID>"\n            },\n            "controllerName": "<Controller Name>"\n        },\n        "eNote": {\n            "id": "<UUID>",\n            "uri": "EOS URI",\n            "fileName": "Electronic Promissory Note (eNote)",\n            "ContentType": "application/xml",\n            "documentType": "MISMO_ENOTE_SMART_DOC_XML",\n            "checksum": "<sha512 Hash>"\n        },\n        "signedDate": {\n            "value": "2022-03-01"\n        },\n        "vaultName": "DART eVault"\n    }\n}\n'))))}c.isMDXComponent=!0}}]);