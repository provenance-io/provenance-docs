"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[8256],{64795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(74848),a=n(28453);const o={},s="DIME (Encryption Envelope Specification)",r={id:"pb/p8e/overview/encrypted-object-store/dime-encryption-envelope-specification",title:"DIME (Encryption Envelope Specification)",description:"Dime (Data Instance with Metadata and Encryption)",source:"@site/docs/pb/p8e/overview/encrypted-object-store/dime-encryption-envelope-specification.md",sourceDirName:"pb/p8e/overview/encrypted-object-store",slug:"/pb/p8e/overview/encrypted-object-store/dime-encryption-envelope-specification",permalink:"/docs/pb/p8e/overview/encrypted-object-store/dime-encryption-envelope-specification",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"EOS Encryption Scheme",permalink:"/docs/pb/p8e/overview/encrypted-object-store/encryption-scheme"},next:{title:"Architecture",permalink:"/docs/pb/p8e/p8e-usage/architecture"}},c={},d=[{value:"Dime (Data Instance with Metadata and Encryption)",id:"dime-data-instance-with-metadata-and-encryption",level:2},{value:"Submission Context",id:"submission-context",level:3},{value:"Processing Context",id:"processing-context",level:3},{value:"Retrieval Context",id:"retrieval-context",level:3},{value:"Examples",id:"examples",level:2},{value:"Input Message",id:"input-message",level:3},{value:"Payload Output Block",id:"payload-output-block",level:3},{value:"DEK Output Block",id:"dek-output-block",level:3}];function l(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"dime-encryption-envelope-specification",children:"DIME (Encryption Envelope Specification)"})}),"\n",(0,i.jsx)(t.h2,{id:"dime-data-instance-with-metadata-and-encryption",children:"Dime (Data Instance with Metadata and Encryption)"}),"\n",(0,i.jsxs)(t.p,{children:["The purpose of end-to-end encryption within the Provenance Blockchain protocol is to strongly control the intended audience of information. Within the context of the protocol there are three areas to consider for information access. These three areas are ",(0,i.jsx)(t.em,{children:"Submission, Processing/Validation, and Retrieval."})," Submitted data will exist in each of these three context in an unencrypted/viewable state assigned to specified audience."]}),"\n",(0,i.jsx)(t.h3,{id:"submission-context",children:"Submission Context"}),"\n",(0,i.jsxs)(t.p,{children:["The submission context is always assigned to the creator who submits information to the system. While information may be transferred to another owner, it is impossible to submit data to the system and not be marked as the owner of it. To clarify, if an asset is changing ownership this is performed by the existing owner adding permission to the new owner followed by ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"the new owner retrieving the data and resubmitting it back to the system to finalize the change in ownership"})}),"."]}),"\n",(0,i.jsx)(t.p,{children:"The Submission context participant is able to maintain access to the information indefinitely by either recording the asset ID and the clear text data encryption key, or maintaining their own private key and adding themselves to the audience of the item. In the second case the owner would be able to either maintain the asset identifier with their private key or query the system for assets with a DEK assigned to their public key then restore the clear text DEK using their private key."}),"\n",(0,i.jsx)(t.h3,{id:"processing-context",children:"Processing Context"}),"\n",(0,i.jsx)(t.p,{children:"The processing context is similar to the final Retrieval context with the exception that the key and data handling practices are strongly defined by the smart contract and platform itself. The overriding goal of the Processing Context is to keep the time the data spends in this area as short as possible and to destroy all keys to access the data as soon as reasonable. In order to limit the scope of the processing context the first step is to only include the minimum number Smart Contract public keys required to successfully endorse a transaction. This means that in many cases only 3 to 5 total smart contract instances out of potentially dozens spread across the Provenance Blockchain Network will be selected for access to the information. During the smart contract execution output blocks are generated using a process that removes any DEKs assigned to the processing Context to eliminate any long term persistent smart contract access to the data. The last two areas to focus on for reducing access are the DEKs passed into the smart contract in the parameters and the handling of the symmetric payload encryption key. Frequent rotation of encryption keys by the smart contract reduces the time window when a DEK can be retrieved as old keys are permanently deleted. The symmetric encryption key is the last and most sensitive piece of information because it provides permanent access to the resource (as outlined in the submission and Retrieval contexts as an alternate access scheme). Due this sensitive nature of the key, it is decrypted right before any required use and immediately purged after use."}),"\n",(0,i.jsx)(t.p,{children:"Given a prime design goal of the Processing Context is to limit its duration and audience extensive technical controls and monitoring are used to ensure the process is followed correctly and that no unauthorized entities are party to the transaction."}),"\n",(0,i.jsx)(t.h3,{id:"retrieval-context",children:"Retrieval Context"}),"\n",(0,i.jsx)(t.p,{children:"The final state of all blocks added to the chain is the Retrieval context. Audience members (and their DEKs) are permanently committed to the chain ensuring a record of authorized access to each resource. A member can query the API for entries by ID or for DEK entries that are tied to their public key. The audience associated with the retrieval context is defined as the set of public keys that have a DEK recorded in the block chain. Strictly speaking the Retrieval context is assumed to include the owning member regardless of the presence of a DEK in the audience list as the source of the encryption secrets was the submitting member/owner. An entity from the Processing Context may be party to the retrieval context subject to policy and temporal constraints."}),"\n",(0,i.jsx)(t.h2,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(t.h3,{id:"input-message",children:"Input Message"}),"\n",(0,i.jsx)(t.p,{children:"A message payload submitted to Provenance Blockchain APIs has the following structure. Note that certain information is contained in cleartext form as part of the metadata including the sender, audience list, and basic identifiers. The payload is a cipher text block that contains member information and associated results from the execution of the smart contract."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"[\n    # Unencrypted data fields used for information lookup and retrieval. (Non-Sensitive information)\n    metadata: [\n        ownerId: [ guid ],\n        dataId: [ guid ],\n        sent: [ UTC ],\n        expires: [ UTC ],\n        # Additional key:value pairs as appropriate\n        key: [ value ]\n    ],\n\n    # The sender of the message includes their public key as well as a signature over the [metadata|audience|payload]\n    # in order to prove message integrity.\n    sender: [\n        publicKey,\n        digitalSignature\n    ],\n\n    audience: [\n        # DEK tags are built by the submitting member's SDK.  Each DEK is tagged with the associated audience context group\n        # Only 1 submission context DEK is allowed along with 'N' number processing and retrieval context DEKs\n        publicKey1: [ payloadId=1, context=submission, initializationVector, ephemeralPublicKey, messageAuthenticationCode, cipherTextDEK ]\n        ...\n        publicKeyN: [ payloadId=1, context=processing, initializationVector, ephemeralPublicKey, messageAuthenticationCode, cipherTextDEK ]\n    ]\n\n    # Payload is encrypted with AES in CTR mode using AES-GCM based on generated shared secret (DEK ciphertext above)\n    # Multiple payloads are supported for cases where their maybe different audiences for field level access.\n    payload: [\n        [\n           payloadId=1,\n           cypherText = mgmb662mIjTiKUwp0C9u/XZT04G0mqVpz4GWaIbGlcL5tdYZDJLY7MH0k9MHY9/LaPLoqIePPicBLtoM5pQ4KdVULJpJVV8nADEKS\n              6QL9YChWb+xoxQE2VXvjkdyS8Ezda5qV12k3lvst6ddtT6Unz0EqjKlAEy2TuPeWcOZK+r5n0Oyu9NRtagNU5uJ/3X/XfAMDZ9iVAhvL5ZnOZUf\n              qikAN13gKmfUOnM8malMcbrQBJP26BpAFPNzUYtKP7FSUkcqSEHTA8xW/dlj/FW9lBtm0M3vF2gFUaSIOU8J4Z7r40Ffn2Jkrn0ubGnJ2jLK4TK\n               [ ... ]\n              sCTdAdjg6OclpBbtn8MSv0qutxY6+CbJ6VUCNx7QX84ydAjRCc28a+H3iethnvK+IfMbKSrGlm6036GSCKlQfgLmMvXn7GA93ad1KXSs/Uasdgn\n              OUfC1SVlrTu7ufRk5oOmt41qyZkHAX/pxC8TEFtoXOtr5oIIDG5nGVWLtlX7HlHuv5lrrL54BZkwWY7CVuKqeI+Ybqwo=\n        ],\n        [\n           payloadId=n,\n           cypherText = mgmb662mIjTiKUwp0C9u/XZT04G0mqVpz4GWaIbGlcL5tdYZDJLY7MH0k9MHY9/LaPLoqIePPicBLtoM5pQ4KdVULJpJVV8nADEK\n             6QL9YChWb+xoxQE2VXvjkdyS8Ezda5qV12k3lvst6ddtT6Unz0EqjKlAEy2TuPeWcOZK+r5n0Oyu9NRtagNU5uJ/3X/XfAMDZ9iVAhvL5ZnOZUf\n             qikAN13gKmfUOnM8malMcbrQBJP26BpAFPNzUYtKP7FSUkcqSEHTA8xW/dlj/FW9lBtm0M3vF2gFUaSIOU8J4Z7r40Ffn2Jkrn0ubGnJ2jLK4TK\n              [ ... ]\n             sCTdAdjg6OclpBbtn8MSv0qutxY6+CbJ6VUCNx7QX84ydAjRCc28a+H3iethnvK+IfMbKSrGlm6036GSCKlQfgLmMvXn7GA93ad1KXSs/Uasdgn\n             OUfC1SVlrTu7ufRk5oOmt41qyZkHAX/pxC8TEFtoXOtr5oIIDG5nGVWLtlX7HlHuv5lrrL54BZkwWY7CVuKqeI+Ybqwo=\n        ]\n    ]\n]\n"})}),"\n",(0,i.jsx)(t.h3,{id:"payload-output-block",children:"Payload Output Block"}),"\n",(0,i.jsx)(t.p,{children:"The payload output block is the structure of elements created by smart contract and submitted for inclusion in the block chain. For the audience of this block and their associated DEKs see the DEK Output Block."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"[\n    metadata: [\n\n        dataId: [ guid ],\n        # The owner id points to the member who created this record. As part of committing the block to the chain the time this occurs is part of the permanent record.\n        owner: [ guid ],\n\n        attributes: [\n            chainCodeResultAttribute1: [ ... ]\n            [ ... ]\n            chainCodeResultAttributeN: [ ... ]\n        ]\n    ],\n\n    # Payload is encrypted with AES in CTR mode using AES-GCM\n    payload: [\n        [\n           payloadId=1,\n           cypherText = mgmb662mIjTiKUwp0C9u/XZT04G0mqVpz4GWaIbGlcL5tdYZDJLY7MH0k9MHY9/LaPLoqIePPicBLtoM5pQ4KdVULJpJVV8nADEKS\n              6QL9YChWb+xoxQE2VXvjkdyS8Ezda5qV12k3lvst6ddtT6Unz0EqjKlAEy2TuPeWcOZK+r5n0Oyu9NRtagNU5uJ/3X/XfAMDZ9iVAhvL5ZnOZUf\n              qikAN13gKmfUOnM8malMcbrQBJP26BpAFPNzUYtKP7FSUkcqSEHTA8xW/dlj/FW9lBtm0M3vF2gFUaSIOU8J4Z7r40Ffn2Jkrn0ubGnJ2jLK4TK\n               [ ... ]\n              sCTdAdjg6OclpBbtn8MSv0qutxY6+CbJ6VUCNx7QX84ydAjRCc28a+H3iethnvK+IfMbKSrGlm6036GSCKlQfgLmMvXn7GA93ad1KXSs/Uasdgn\n              OUfC1SVlrTu7ufRk5oOmt41qyZkHAX/pxC8TEFtoXOtr5oIIDG5nGVWLtlX7HlHuv5lrrL54BZkwWY7CVuKqeI+Ybqwo=\n        ],\n        [\n           payloadId=n,\n           cypherText = mgmb662mIjTiKUwp0C9u/XZT04G0mqVpz4GWaIbGlcL5tdYZDJLY7MH0k9MHY9/LaPLoqIePPicBLtoM5pQ4KdVULJpJVV8nADEKS\n             6QL9YChWb+xoxQE2VXvjkdyS8Ezda5qV12k3lvst6ddtT6Unz0EqjKlAEy2TuPeWcOZK+r5n0Oyu9NRtagNU5uJ/3X/XfAMDZ9iVAhvL5ZnOZUf\n             qikAN13gKmfUOnM8malMcbrQBJP26BpAFPNzUYtKP7FSUkcqSEHTA8xW/dlj/FW9lBtm0M3vF2gFUaSIOU8J4Z7r40Ffn2Jkrn0ubGnJ2jLK4TK\n              [ ... ]\n             sCTdAdjg6OclpBbtn8MSv0qutxY6+CbJ6VUCNx7QX84ydAjRCc28a+H3iethnvK+IfMbKSrGlm6036GSCKlQfgLmMvXn7GA93ad1KXSs/Uasdgn\n             OUfC1SVlrTu7ufRk5oOmt41qyZkHAX/pxC8TEFtoXOtr5oIIDG5nGVWLtlX7HlHuv5lrrL54BZkwWY7CVuKqeI+Ybqwo=\n        ]\n    ]\n\n]\n"})}),"\n",(0,i.jsx)(t.h3,{id:"dek-output-block",children:"DEK Output Block"}),"\n",(0,i.jsx)(t.p,{children:"A separate message from the payload blocks containing Data Encryption Keys that adds members to the intended audience. Each DEK Output Block contains a unique identity reference to the Payload Block associated with the key. A DEK Output Block can be committed at any time after the source block is added to the chain if additional audience members need to be given access to the data."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"[\n    metadata: [\n        dataId: [ guid ],\n        audience: [\n            # DEK tags are built by the data owner using the SDK when the request is submitted. (Only one submission with 'N' retrieval contexts are valid)\n            publicKey1: [ context=submission, initializationVector, ephemeralPublicKey, messageAuthenticationCode, cipherTextDEK ]\n            ...\n            publicKeyN: [ context=retrieval, initializationVector, ephemeralPublicKey, messageAuthenticationCode, cipherTextDEK ]\n        ]\n    ],\n]\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var i=n(96540);const a={},o=i.createContext(a);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);