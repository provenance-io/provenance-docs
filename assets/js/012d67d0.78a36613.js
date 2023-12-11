"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[7276],{71410:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>l,frontMatter:()=>d,metadata:()=>r,toc:()=>a});var s=t(85893),i=t(11151);const d={},c="BlockVault Endpoints",r={id:"pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/p8e-endpoints",title:"BlockVault Endpoints",description:"Generate Scope Transaction",source:"@site/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/p8e-endpoints.md",sourceDirName:"pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification",slug:"/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/p8e-endpoints",permalink:"/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/p8e-endpoints",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Retrieve File",permalink:"/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/retrieve-file"},next:{title:"Contract Execution Endpoints",permalink:"/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/contract-execution-endpoints/"}},o={},a=[{value:"Generate Scope Transaction",id:"generate-scope-transaction",level:2},{value:"Execute Transaction on Provenance",id:"execute-transaction-on-provenance",level:2}];function h(e){const n={code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"blockvault-endpoints",children:"BlockVault Endpoints"}),"\n",(0,s.jsx)(n.h2,{id:"generate-scope-transaction",children:"Generate Scope Transaction"}),"\n",(0,s.jsx)(n.p,{children:"Used to generate a Provenance Blockchain scope transaction message without submitting it."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"URL"}),": ",(0,s.jsx)(n.code,{children:"https://{host}/api/v1/p8e/tx/generate"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Method"}),": POST"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Request Body"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n   "account": {\n     "keyRingIndex": "0",\n     "keyIndex": "0",\n     "partyType": "OWNER",\n   },\n   "permissions": {\n     "audiences": [],\n     "permissionDart": false,\n     "permissionPortfolioManager": false\n   },\n   "contractSpecId": "f97ecc5d-c580-478d-be02-6c1b0c32235f",\n   "scopeSpecId": "551b5eca-921d-4ba7-aded-3966b224f44b",\n   "scopeId": <scope uuid>,\n   "contractInput": <string of contract input>\n}\n'})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Data Type"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"account/keyRingIndex"}),(0,s.jsx)(n.td,{children:"The key ring index. Used to identify the provenance account."}),(0,s.jsx)(n.td,{children:"String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"account/keyIndex"}),(0,s.jsx)(n.td,{children:"The key index. Used to identify the provenance account."}),(0,s.jsx)(n.td,{children:"String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"permissions/audiences"}),(0,s.jsx)(n.td,{children:"Additional audiences that should be allowed permission to query against the saved data in EOS"}),(0,s.jsx)(n.td,{children:"List<Base64EncodedPublicKey>"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"permissions/permissionDart"}),(0,s.jsx)(n.td,{children:"If the dart product should be allowed permission against the saved data in EOS."}),(0,s.jsx)(n.td,{children:"Bool"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"permissions/permissionPortfolioManager"}),(0,s.jsx)(n.td,{children:"If the portfolio manager product should be allowed permission against the saved data in EOS."}),(0,s.jsx)(n.td,{children:"Bool"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"contractSpecId"}),(0,s.jsx)(n.td,{children:"The contract specification id. denote the Contracts/Processes that will be used to manage the data within a scope."}),(0,s.jsx)(n.td,{children:"String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"scopeSpecId"}),(0,s.jsx)(n.td,{children:"The scope specification id. indicates a set of allowed Contract Specifications that are allowed to be used against a given scope to perform updates."}),(0,s.jsx)(n.td,{children:"String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"scopeId"}),(0,s.jsx)(n.td,{children:"The scope id that defines the set of records"}),(0,s.jsx)(n.td,{children:"String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"contractInput"}),(0,s.jsx)(n.td,{children:"The string representation of the input to the contract to run"}),(0,s.jsx)(n.td,{children:"String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"account/isTestNet"}),(0,s.jsx)(n.td,{children:"If true, testnet shall be used, otherwise mainnet"}),(0,s.jsx)(n.td,{children:"Bool"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Response"})}),"\n",(0,s.jsxs)(t,{children:[(0,s.jsx)("summary",{children:(0,s.jsx)("strong",{children:"Sample Response"})}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "json": {\n        "messages": [\n            {\n                "@type": "/provenance.metadata.v1.MsgWriteScopeRequest",\n                "scope": {\n                    "scopeId": "AHEfrPPaWTcghQJo34ZE0gU=",\n                    "specificationId": "BFUbXsqSHUunre05ZrIk9Es=",\n                    "owners": [\n                        {\n                            "address": "tp156pvc8f338504us55nwxujt29f7948mcgz8xm9",\n                            "role": "PARTY_TYPE_OWNER"\n                        }\n                    ],\n                    "dataAccess": [\n                        "tp156pvc8f338504us55nwxujt29f7948mcgz8xm9"\n                    ],\n                    "valueOwnerAddress": "tp156pvc8f338504us55nwxujt29f7948mcgz8xm9"\n                },\n                "signers": [\n                    "tp156pvc8f338504us55nwxujt29f7948mcgz8xm9"\n                ],\n                "scopeUuid": "711facf3-da59-3720-8502-68df8644d205",\n                "specUuid": "551b5eca-921d-4ba7-aded-3966b224f44b"\n            },\n            {\n                "@type": "/provenance.metadata.v1.MsgWriteSessionRequest",\n                "session": {\n                    "sessionId": "AXEfrPPaWTcghQJo34ZE0gV8DiP9meZGe4NmWke85QBp",\n                    "specificationId": "A/l+zF3FgEeNvgJsGwwyI18=",\n                    "parties": [\n                        {\n                            "address": "tp156pvc8f338504us55nwxujt29f7948mcgz8xm9",\n                            "role": "PARTY_TYPE_OWNER"\n                        }\n                    ],\n                    "audit": {\n                        "createdBy": "tp156pvc8f338504us55nwxujt29f7948mcgz8xm9",\n                        "updatedBy": "tp156pvc8f338504us55nwxujt29f7948mcgz8xm9"\n                    }\n                },\n                "signers": [\n                    "tp156pvc8f338504us55nwxujt29f7948mcgz8xm9"\n                ],\n                "sessionIdComponents": {\n                    "scopeUuid": "711facf3-da59-3720-8502-68df8644d205",\n                    "sessionUuid": "7c0e23fd-99e6-467b-8366-5a47bce50069"\n                }\n            },\n            {\n                "@type": "/provenance.metadata.v1.MsgWriteRecordRequest",\n                "record": {\n                    "name": "Asset",\n                    "sessionId": "AXEfrPPaWTcghQJo34ZE0gV8DiP9meZGe4NmWke85QBp",\n                    "process": {\n                        "hash": "32D60974A2B2E9A9D9E93D9956E3A7D2BD226E1511D64D1EA39F86CBED62CE78",\n                        "name": "OnboardAssetProcess",\n                        "method": "OnboardAsset"\n                    },\n                    "inputs": [\n                        {\n                            "name": "AssetHash",\n                            "hash": "u8wa+g8aogt0Z1cIAYnoT4Y/ahEv+OBylpuzrYLO1Hc=",\n                            "typeName": "String",\n                            "status": "RECORD_INPUT_STATUS_PROPOSED"\n                        }\n                    ],\n                    "outputs": [\n                        {\n                            "hash": "u8wa+g8aogt0Z1cIAYnoT4Y/ahEv+OBylpuzrYLO1Hc=",\n                            "status": "RESULT_STATUS_PASS"\n                        }\n                    ],\n                    "specificationId": "Bfl+zF3FgEeNvgJsGwwyI1/Vk4bgrkNeKS++DrzblUt1"\n                },\n                "signers": [\n                    "tp156pvc8f338504us55nwxujt29f7948mcgz8xm9"\n                ],\n                "contractSpecUuid": "f97ecc5d-c580-478d-be02-6c1b0c32235f"\n            }\n        ]\n    },\n    "base64": [\n        "CiwvcHJvdmVuYW5jZS5tZXRhZGF0YS52MS5Nc2dXcml0ZVNjb3BlUmVxdWVzdBKlAgqrAQoRAHEfrPPaWTcghQJo34ZE0gUSEQRVG17Kkh1Lp63tOWayJPRLGi0KKXRwMTU2cHZjOGYzMzg1MDR1czU1bnd4dWp0MjlmNzk0OG1jZ3o4eG05EAUiKXRwMTU2cHZjOGYzMzg1MDR1czU1bnd4dWp0MjlmNzk0OG1jZ3o4eG05Kil0cDE1NnB2YzhmMzM4NTA0dXM1NW53eHVqdDI5Zjc5NDhtY2d6OHhtORIpdHAxNTZwdmM4ZjMzODUwNHVzNTVud3h1anQyOWY3OTQ4bWNnejh4bTkaJDcxMWZhY2YzLWRhNTktMzcyMC04NTAyLTY4ZGY4NjQ0ZDIwNSIkNTUxYjVlY2EtOTIxZC00YmE3LWFkZWQtMzk2NmIyMjRmNDRi",\n        "Ci4vcHJvdmVuYW5jZS5tZXRhZGF0YS52MS5Nc2dXcml0ZVNlc3Npb25SZXF1ZXN0EroCCr4BCiEBcR+s89pZNyCFAmjfhkTSBXwOI/2Z5kZ7g2ZaR7zlAGkSEQP5fsxdxYBHjb4CbBsMMiNfGi0KKXRwMTU2cHZjOGYzMzg1MDR1czU1bnd4dWp0MjlmNzk0OG1jZ3o4eG05EAWaBlYSKXRwMTU2cHZjOGYzMzg1MDR1czU1bnd4dWp0MjlmNzk0OG1jZ3o4eG05Iil0cDE1NnB2YzhmMzM4NTA0dXM1NW53eHVqdDI5Zjc5NDhtY2d6OHhtORIpdHAxNTZwdmM4ZjMzODUwNHVzNTVud3h1anQyOWY3OTQ4bWNnejh4bTkaTAokNzExZmFjZjMtZGE1OS0zNzIwLTg1MDItNjhkZjg2NDRkMjA1GiQ3YzBlMjNmZC05OWU2LTQ2N2ItODM2Ni01YTQ3YmNlNTAwNjk=",\n        "Ci0vcHJvdmVuYW5jZS5tZXRhZGF0YS52MS5Nc2dXcml0ZVJlY29yZFJlcXVlc3QS/wIKqwIKBUFzc2V0EiEBcR+s89pZNyCFAmjfhkTSBXwOI/2Z5kZ7g2ZaR7zlAGkaZRJAMzJENjA5NzRBMkIyRTlBOUQ5RTkzRDk5NTZFM0E3RDJCRDIyNkUxNTExRDY0RDFFQTM5Rjg2Q0JFRDYyQ0U3OBoTT25ib2FyZEFzc2V0UHJvY2VzcyIMT25ib2FyZEFzc2V0IkMKCUFzc2V0SGFzaBosdTh3YStnOGFvZ3QwWjFjSUFZbm9UNFkvYWhFditPQnlscHV6cllMTzFIYz0iBlN0cmluZygBKjAKLHU4d2ErZzhhb2d0MFoxY0lBWW5vVDRZL2FoRXYrT0J5bHB1enJZTE8xSGM9EAEyIQX5fsxdxYBHjb4CbBsMMiNf1ZOG4K5DXikvvg6825VLdRIpdHAxNTZwdmM4ZjMzODUwNHVzNTVud3h1anQyOWY3OTQ4bWNnejh4bTkiJGY5N2VjYzVkLWM1ODAtNDc4ZC1iZTAyLTZjMWIwYzMyMjM1Zg=="\n    ]\n}\n'})})]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Data Type"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"json"}),(0,s.jsx)(n.td,{children:"JSON object containing the fully formed set of messages to be sent to Provenance for contract execution"}),(0,s.jsx)(n.td,{children:"JSON Object"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"base64"}),(0,s.jsx)(n.td,{children:"Base 64 encoded versions of those same messages provided as JSON above"}),(0,s.jsx)(n.td,{children:"String"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"execute-transaction-on-provenance",children:"Execute Transaction on Provenance"}),"\n",(0,s.jsx)(n.p,{children:"Used to send a transaction proposal message to be executed by the Provenance Blockchain network."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"URL"}),": ",(0,s.jsx)(n.code,{children:"https://{host}/api/v1/p8e/tx/execute"})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Method"}),": POST"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Request Body:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n   "chainId": "pio-testnet-1",\n   "nodeEndpoint": "grpc://192.168.1.242:9090",\n   "tx": <tx body>,\n   "account": {\n      "keyRingIndex": "0",\n      "keyIndex": "0",\n      "partyType": "OWNER",\n    },\n}\n'})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Data Type"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"chainId"}),(0,s.jsx)(n.td,{children:"The blockchain identifier"}),(0,s.jsx)(n.td,{children:"String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nodeEndpoint"}),(0,s.jsx)(n.td,{children:"The url to the provenance node to run against"}),(0,s.jsx)(n.td,{children:"String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tx"}),(0,s.jsx)(n.td,{children:"The tx body that should be broadcast to provenance"}),(0,s.jsx)(n.td,{children:"String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"account/keyRingIndex"}),(0,s.jsx)(n.td,{children:"The key ring index. Used to identify the provenance account."}),(0,s.jsx)(n.td,{children:"String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"account/keyIndex"}),(0,s.jsx)(n.td,{children:"The key index. Used to identify the provenance account."}),(0,s.jsx)(n.td,{children:"String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"account/isTestNet"}),(0,s.jsx)(n.td,{children:"If true, testnet shall be used, otherwise mainnet"}),(0,s.jsx)(n.td,{children:"Bool"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Response"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "hash": <result of the contract execution provided as a hash>,\n    "gasWanted": <nhash value>,\n    "gasUsed": <nhash value>,\n    "height": <block height>\n}\n'})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Field"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Data Type"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"hash"}),(0,s.jsx)(n.td,{children:"The returned hash of the record stored on the Provenance ledger"}),(0,s.jsx)(n.td,{children:"String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"gasWanted"}),(0,s.jsx)(n.td,{children:"The gas estimated and supplied for contract execution"}),(0,s.jsx)(n.td,{children:"String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"gasUsed"}),(0,s.jsx)(n.td,{children:"The gas used during contract execution"}),(0,s.jsx)(n.td,{children:"String"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"height"}),(0,s.jsx)(n.td,{children:"The block height when the transaction was committed to the ledger"}),(0,s.jsx)(n.td,{children:"String"})]})]})]})]})}function l(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>c});var s=t(67294);const i={},d=s.createContext(i);function c(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);