"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[1884],{32959:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>o});var s=r(74848),d=r(28453);const t={},a="State",i={id:"sdk/quarantine/state",title:"State",description:"The x/quarantine module uses key/value pairs to store quarantine-related data in state.",source:"@site/docs/sdk/quarantine/02_state.md",sourceDirName:"sdk/quarantine",slug:"/sdk/quarantine/state",permalink:"/docs/sdk/quarantine/state",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Concepts",permalink:"/docs/sdk/quarantine/concepts"},next:{title:"Msg Service",permalink:"/docs/sdk/quarantine/messages"}},c={},o=[{value:"Quarantined Accounts",id:"quarantined-accounts",level:2},{value:"Auto-Responses",id:"auto-responses",level:2},{value:"Quarantine Records",id:"quarantine-records",level:2},{value:"Quarantine Records Suffix Index",id:"quarantine-records-suffix-index",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"state",children:"State"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"x/quarantine"})," module uses key/value pairs to store quarantine-related data in state."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#quarantined-accounts",children:"Quarantined Accounts"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#auto-responses",children:"Auto-Responses"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#quarantine-records",children:"Quarantine Records"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#quarantine-records-suffix-index",children:"Quarantine Records Suffix Index"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"quarantined-accounts",children:"Quarantined Accounts"}),"\n",(0,s.jsx)(n.p,{children:"When an account opts into quarantine, the following record is made:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"0x00 | len([]byte(<account address>)) | []byte(<account address>) -> 0x00\n"})}),"\n",(0,s.jsx)(n.p,{children:"When an account opts out of quarantine, that record is deleted."}),"\n",(0,s.jsx)(n.h2,{id:"auto-responses",children:"Auto-Responses"}),"\n",(0,s.jsx)(n.p,{children:"Auto-Responses are stored using the following format:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"0x01 | len([]byte(<receiver address>)) | []byte(<receiver address>) | len([]byte(<sender address>)) | []byte(<sender address>) -> <response> \n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<response>"})," values:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"0x01"})," = ",(0,s.jsx)(n.code,{children:"AUTO_RESPONSE_ACCEPT"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"0x02"})," = ",(0,s.jsx)(n.code,{children:"AUTO_RESPONSE_DECLINE"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Instead of storing ",(0,s.jsx)(n.code,{children:"AUTO_RESPONSE_UNSPECIFIED"})," the record is deleted."]}),"\n",(0,s.jsx)(n.h2,{id:"quarantine-records",children:"Quarantine Records"}),"\n",(0,s.jsx)(n.p,{children:"Records of quarantined funds are stored using the following format:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"0x02 | len([]byte(<receiver address>)) | []byte(<receiver address>) | len([]byte(<record suffix>)) | []byte(<record suffix>) -> ProtocolBuffer(QuarantineRecord) \n"})}),"\n",(0,s.jsxs)(n.p,{children:["When there is a single sender, the ",(0,s.jsx)(n.code,{children:"<record suffix>"})," is the ",(0,s.jsx)(n.code,{children:"<sender address>"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["When there are multiple senders, the ",(0,s.jsx)(n.code,{children:"<record suffix>"})," is a function of all sender addresses combined.\nSpecifically, all involved sender addresses are sorted and concatenated into a single ",(0,s.jsx)(n.code,{children:"[]byte"}),", then provided to a ",(0,s.jsx)(n.code,{children:"sha256"})," checksum generator."]}),"\n",(0,s.jsx)(n.p,{children:"Once quarantined funds are accepted and released, this record is deleted."}),"\n",(0,s.jsx)(n.h2,{id:"quarantine-records-suffix-index",children:"Quarantine Records Suffix Index"}),"\n",(0,s.jsx)(n.p,{children:"When there are multiple senders, an index entry is made for each sender.\nThese entries use the following format:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"0x03 | len([]byte(<receiver address>)) | []byte(<receiver address>) | len([]byte(<sender address>)) | []byte(<sender address>) -> ProtocolBuffer(QuarantineRecordSuffixIndex)\n"})}),"\n",(0,s.jsx)(n.p,{children:"These entries allow multi-sender quarantine records to be located based on a single sender.\nThey are not needed for single-sender records; as such, they are only made for multi-sender records."}),"\n",(0,s.jsx)(n.p,{children:"Once a quarantine record is deleted, its suffix index entries are also deleted."})]})}function u(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>i});var s=r(96540);const d={},t=s.createContext(d);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);