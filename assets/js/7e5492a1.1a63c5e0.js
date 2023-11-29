"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[3072],{243:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=t(85893),a=t(11151);const r={},s="3rd Party Digital Signatures",o={id:"pb/p8e/untitled/3rd-party-digital-signatures",title:"3rd Party Digital Signatures",description:"Purpose",source:"@site/docs/pb/p8e/untitled/3rd-party-digital-signatures.md",sourceDirName:"pb/p8e/untitled",slug:"/pb/p8e/untitled/3rd-party-digital-signatures",permalink:"/docs/pb/p8e/untitled/3rd-party-digital-signatures",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Purpose",id:"purpose",level:3},{value:"Method",id:"method",level:3},{value:"<strong>Original Message</strong>",id:"original-message",level:4},{value:"<strong>Generate the Signature</strong>",id:"generate-the-signature",level:4},{value:"Signature Flow",id:"signature-flow",level:3}];function h(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"3rd-party-digital-signatures",children:"3rd Party Digital Signatures"}),"\n",(0,i.jsx)(n.h3,{id:"purpose",children:"Purpose"}),"\n",(0,i.jsx)(n.p,{children:"Data providers for Provenance Blockchain should be capable of providing digital signatures that allow for third-party validation and authentication. This allows entities other than the originators to confirm that the data used to underwrite the asset was generated from a trusted third party (such as a Credit Bureau) and remained unchanged to create the asset."}),"\n",(0,i.jsx)(n.h3,{id:"method",children:"Method"}),"\n",(0,i.jsx)(n.p,{children:"To meet the digital signature requirements, data providers must be capable of providing the following three pieces of information:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The entity's certificate. This allows any other third party to confirm the information was signed using a private key specific to the data provider. The entity will register their certificate with the Provenance Blockchain Certificate Registry. The certificate must include any required chain of trust to the certificate authority. The public key should be ASN1 OID: prime256v1 and NIST CURVE: P-256."}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.strong,{children:"canonicalized"})," original data. This is the original data package sent, in a standard canonical form."]}),"\n",(0,i.jsx)(n.li,{children:"The signature across the data. This is the outcome of the canonical original data sent through a checksum (for example, SHA256) and cryptographically signed with a private key."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"original-message",children:(0,i.jsx)(n.strong,{children:"Original Message"})}),"\n",(0,i.jsx)(n.p,{children:"As an example, assume the original message sent matches the below:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"<dataContent>\n    <content>\n        <any>any</any>\n    </content>\n</dataContent>\n"})}),"\n",(0,i.jsx)(n.h4,{id:"generate-the-signature",children:(0,i.jsx)(n.strong,{children:"Generate the Signature"})}),"\n",(0,i.jsx)(n.p,{children:"To generate a signature:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Canonicalize the message. For XML use ",(0,i.jsx)(n.a,{href:"https://www.w3.org/TR/xml-c14n2/",children:"https://www.w3.org/TR/xml-c14n2/"}),". For JSON use ",(0,i.jsx)(n.a,{href:"https://cyberphone.github.io/ietf-json-canon/",children:"https://cyberphone.github.io/ietf-json-canon/"})]}),"\n",(0,i.jsx)(n.li,{children:"Run the canonicalized message through a SHA256 checksum"}),"\n",(0,i.jsx)(n.li,{children:"Cryptographically sign the checksum with the certificate private key. The signature output must be in ASN.1 DER format."}),"\n",(0,i.jsx)(n.li,{children:"Base64 encode the signed checksum"}),"\n",(0,i.jsxs)(n.li,{children:["Insert the Base64 encoded signed checksum into the ",(0,i.jsx)(n.strong,{children:"x-provenance-signature"})," response header."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-text",children:"Validation\n"})}),"\n",(0,i.jsx)(n.p,{children:"To validate this signature, use the certificate's public key to view the original SHA256 checksum. Also, run a checksum on the data used and compare the result. Both checksums should be identical as long as the underlying data has not been changed. The act of using the certificate public key to view the checksum verifies the source of the data, and the act of comparing the checksums verifies the data sent from the source was used to generate the financial asset."}),"\n",(0,i.jsx)(n.h3,{id:"signature-flow",children:"Signature Flow"}),"\n",(0,i.jsx)(n.p,{children:"The following flow demonstrates how Figure Lending will integrate digital signatures into an existing service flow."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://figure.atlassian.net/wiki/download/attachments/578781188/DigSigFlow.jpg?version=2&modificationDate=1573583401126&cacheVersion=1&api=v2",alt:""})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Data Provider registers their certificate with the Provenance Blockchain Certificate Registry"}),"\n",(0,i.jsx)(n.li,{children:"Figure Service submits a request to the Data Provider as normal"}),"\n",(0,i.jsxs)(n.li,{children:["Data Provider processes the request as normal","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"In addition to the default response, the Data Provider canonicalizes the default response data"}),"\n",(0,i.jsx)(n.li,{children:"Then, the Data Provider creates a SHA256 checksum of the canonical data and signs it with their private key"}),"\n",(0,i.jsxs)(n.li,{children:["The signature is then Base64 encoded and returned in the ",(0,i.jsx)(n.strong,{children:"x-provenance-signature"})," response header."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Data Provider returns the default response and the signature created in step 3."}),"\n",(0,i.jsx)(n.li,{children:"Figure Service handles the default response as normal."}),"\n",(0,i.jsxs)(n.li,{children:["Figure Service creates a Signature Packet:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Create a canonical version of the default response"}),"\n",(0,i.jsx)(n.li,{children:"Combine canonical response and the signature into the Signature Packet"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"Figure Service sends the Signature Packet to FIDO and publishes a Signature Message to the Signature Topic keyed by the loan application/packet UUID."}),"\n",(0,i.jsxs)(n.li,{children:["Once a loan is ready for Provenance Blockchain on-boarding, DORF will consume and aggregate Data Provider signatures related to the loan:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The Signature Packet is copied to Provenance Blockchain, similar to existing documents."}),"\n",(0,i.jsx)(n.li,{children:"The Signature Packet is added to the loan packet documents section with a reference to the document location and a vendor type."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Signature validation is handled by Provenance Blockchain post on-boarding.","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Invalid signatures will not block the Figure Service flow in any manner."}),"\n",(0,i.jsx)(n.li,{children:"When invalid signatures are encountered, the Signature Validator process will be responsible for alerting and updating loan validation messages."}),"\n"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var i=t(67294);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);