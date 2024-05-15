"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[6851],{85580:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=t(85893),a=t(11151);const r={},o="Identity NFTs",s={id:"learn/dapps/identity-verification/identity-nfts",title:"Identity NFTs",description:"Why NFTs are Ideal for Identity Verification on Provenance Blockchain",source:"@site/docs/learn/dapps/identity-verification/identity-nfts.md",sourceDirName:"learn/dapps/identity-verification",slug:"/learn/dapps/identity-verification/identity-nfts",permalink:"/docs/learn/dapps/identity-verification/identity-nfts",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"dappsSidebar",previous:{title:"Identity Attribute Values",permalink:"/docs/learn/dapps/identity-verification/attribute-values"}},c={},d=[{value:"Why NFTs are Ideal for Identity Verification on Provenance Blockchain",id:"why-nfts-are-ideal-for-identity-verification-on-provenance-blockchain",level:2},{value:"Understanding Provenance NFTs and Their Construction",id:"understanding-provenance-nfts-and-their-construction",level:2},{value:"Accessing Data from Identity Verification NFTs",id:"accessing-data-from-identity-verification-nfts",level:2},{value:"Example Identity NFT",id:"example-identity-nft",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"identity-nfts",children:"Identity NFTs"}),"\n",(0,i.jsx)(n.h2,{id:"why-nfts-are-ideal-for-identity-verification-on-provenance-blockchain",children:"Why NFTs are Ideal for Identity Verification on Provenance Blockchain"}),"\n",(0,i.jsx)(n.p,{children:"Identity Verification NFTs on Provenance Blockchain offer a secure and user-centric solution for managing digital\nidentities within the decentralized ecosystem. By leveraging the Scope data structure and Protobuf Records, Identity\nProviders can create NFTs that represent a user's identity verification status while maintaining privacy and control.\nNFTs on Provenance Blockchain are well-suited for representing identity verification processes because they were\ndesigned to coordinate private, off-chain data with an on-chain asset that can be held in a user wallet. This allows the\nuser to have control over their identity data and decide which decentralized applications (dApps) can access the NFT\ndata."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"identity verification check",src:t(25542).Z+"",width:"4750",height:"1056"})}),"\n",(0,i.jsx)(n.h2,{id:"understanding-provenance-nfts-and-their-construction",children:"Understanding Provenance NFTs and Their Construction"}),"\n",(0,i.jsxs)(n.p,{children:["Provenance NFTs are defined by the ",(0,i.jsx)(n.a,{href:"/docs/sdk/metadata/",children:"Metadata Module"})," using the\n",(0,i.jsx)(n.a,{href:"https://github.com/provenance-io/provenance/blob/main/docs/proto-docs.md#provenance.metadata.v1.Scope",children:"Scope data structure"}),"\n. To understand how Identity\nVerification NFTs are constructed on Provenance Blockchain, it's essential to review ",(0,i.jsx)(n.a,{href:"/docs/learn/asset-lifecycle/nfts",children:"how NFTs are designed"}),"\non this platform."]}),"\n",(0,i.jsxs)(n.p,{children:["The Scope data structure encapsulates the NFT, containing information like the NFT's owner, data access control, and\nassociated metadata Records. Each metadata Record within the Scope is defined using ",(0,i.jsx)(n.a,{href:"https://protobuf.dev/",children:"Google Protobufs"}),", a language- and\nplatform-neutral mechanism for serializing structured data."]}),"\n",(0,i.jsx)(n.p,{children:"When creating an Identity Verification NFT, an Identity Provider will define one or more Protobuf Records included in\nthe Scope. These Records will store the user's identity verification data, such as the verification level, verification\ndate, and other relevant information."}),"\n",(0,i.jsx)(n.p,{children:"The Identity Provider will then create the NFT on the Provenance Blockchain, associating it with the user's account. Once\nthe NFT is minted, the user will have ownership and control over their identity data."}),"\n",(0,i.jsx)(n.h2,{id:"accessing-data-from-identity-verification-nfts",children:"Accessing Data from Identity Verification NFTs"}),"\n",(0,i.jsx)(n.p,{children:"To access the data stored within an Identity Verification NFT, a third-party dApp or service must first request\npermission from the user. Upon receiving the user's consent, the dApp can then access the relevant Protobuf Records in\nthe NFT's Scope data structure."}),"\n",(0,i.jsx)(n.p,{children:"Depending on the Identity Provider's implementation, the data can be accessed through an API provided by the Identity\nProvider or an EOS Gateway that directly interfaces with the off-chain encrypted object store holding the identity data."}),"\n",(0,i.jsx)(n.h2,{id:"example-identity-nft",children:"Example Identity NFT"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-protobuf",metastring:'title="Example NFT Protobuf (partial) representing investor accreditation data" showLineNumbers',children:'syntax = "proto3";\n\npackage identity;\n\nmessage InvestorAccreditation {\n\n  UUID accreditation_uuid = 1; // Id for this accreditation process\n  string creator_address = 2;  // Identity provider Id (blockchain address)\n  string owner_address = 3;    // Customer Id (blockchain address)\n  Profile profile = 4;         // Customer information and consents\n  KycData kyc_data = 5;        // Customer identity data\n  AttestationData attestation_data =\n      6; // Accredited investor attestations (e.g. 506b)\n  VerificationData verification_data =\n      7; // Verified investor accreditation (e.g. 506c)\n}\n\nmessage Profile {\n  string name = 1;               // Customer name\n  string email = 2;              // Customer contact email\n  string phone_number = 3;       // Customer contact phone\n  repeated Consent consents = 4; // Consent agreements customer has signed\n}\n\nmessage Consent {\n\n  enum Type {\n    UNKNOWN_CONSENT = 0;\n    TERMS_OF_SERVICE = 1;\n    PRIVACY_POLICY = 2;\n    ELECTRONIC_COMMUNICATIONS = 3;\n    INVESTOR_LIABILITY_DISCLOSURE = 4;\n    INVESTOR_AND_SPOUSE_LIABILITY_DISCLOSURE = 5;\n    INVESTOR_INCOME_EXPECTATION = 6;\n    INVESTOR_AND_SPOUSE_INCOME_EXPECTATION = 7;\n    ADDITIONAL_VERIFICATION_INFO_CONSENT = 8;\n  }\n\n  UUID uuid = 1;     // ID for this signed consent\n  Type type = 2;     // Which form\n  int32 version = 3; // Which version of this form\n}\n\nmessage KycData {\n  oneof kyc_oneof {\n    IndividualKycData individual = 1; // For individuals\n    EntityKycData entity = 2;         // For companies\n    TrustKycData trust = 3;           // For trusts\n  }\n}\n'})})]})}function l(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},25542:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/identity-badge-963cde3f4dc11b718bc4f96ee5eaf7c6.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>o});var i=t(67294);const a={},r=i.createContext(a);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);