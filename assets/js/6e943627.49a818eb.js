"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[9604],{36179:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var o=s(85893),t=s(11151);const a={},r="Msg Service",i={id:"sdk/sanction/messages",title:"Msg Service",description:"All Msg Service endpoints in the x/sanction module are for use with governance proposals.",source:"@site/docs/sdk/sanction/03_messages.md",sourceDirName:"sdk/sanction",slug:"/sdk/sanction/messages",permalink:"/docs/sdk/sanction/messages",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"State",permalink:"/docs/sdk/sanction/state"},next:{title:"Events",permalink:"/docs/sdk/sanction/events"}},c={},d=[{value:"Msg/Sanction",id:"msgsanction",level:2},{value:"Msg/Unsanction",id:"msgunsanction",level:2},{value:"Msg/UpdateParams",id:"msgupdateparams",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"msg-service",children:"Msg Service"}),"\n",(0,o.jsxs)(n.p,{children:["All Msg Service endpoints in the ",(0,o.jsx)(n.code,{children:"x/sanction"})," module are for use with governance proposals."]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#msgsanction",children:"Msg/Sanction"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#msgunsanction",children:"Msg/Unsanction"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"#msgupdateparams",children:"Msg/UpdateParams"})}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"msgsanction",children:"Msg/Sanction"}),"\n",(0,o.jsxs)(n.p,{children:["A user can request that accounts be sanctioned by submitting a governance proposal containing a ",(0,o.jsx)(n.code,{children:"MsgSanction"}),".\nIt contains the list of ",(0,o.jsx)(n.code,{children:"addresses"})," of accounts to be sanctioned and the ",(0,o.jsx)(n.code,{children:"authority"})," able to do it."]}),"\n",(0,o.jsxs)(n.p,{children:["+++ ",(0,o.jsx)(n.a,{href:"https://github.com/provenance-io/provenance/blob/v1.19.0/proto/cosmos/sanction/v1beta1/tx.proto#L22-L32",children:"https://github.com/provenance-io/provenance/blob/v1.19.0/proto/cosmos/sanction/v1beta1/tx.proto#L22-L32"})]}),"\n",(0,o.jsx)(n.p,{children:"If the proposal ever has enough total deposit (defined in params), immediate temporary sanctions are issued for each address.\nTemporary sanctions expire at the completion of the governance proposal regardless of outcome."}),"\n",(0,o.jsx)(n.p,{children:"If the proposal passes, permanent sanctions are enacted for each address and temporary entries for each address are removed.\nOtherwise, any temporary entries associated with the governance proposal are removed."}),"\n",(0,o.jsx)(n.p,{children:"It is expected to fail if:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"authority"})," provided does not equal the authority defined for the ",(0,o.jsx)(n.code,{children:"x/sanction"})," module's keeper.\nThis is most often the address of the ",(0,o.jsx)(n.code,{children:"x/gov"})," module's account."]}),"\n",(0,o.jsxs)(n.li,{children:["Any ",(0,o.jsx)(n.code,{children:"addresses"})," are not valid bech32 encoded address strings."]}),"\n",(0,o.jsxs)(n.li,{children:["Any ",(0,o.jsx)(n.code,{children:"addresses"})," are unsanctionable."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"msgunsanction",children:"Msg/Unsanction"}),"\n",(0,o.jsxs)(n.p,{children:["A user can request that accounts be unsanctioned by submitting a governance proposal containing a ",(0,o.jsx)(n.code,{children:"MsgUnsanction"}),".\nIt contains the list of ",(0,o.jsx)(n.code,{children:"addresses"})," of accounts to be unsanctioned and the ",(0,o.jsx)(n.code,{children:"authority"})," able to do it."]}),"\n",(0,o.jsxs)(n.p,{children:["+++ ",(0,o.jsx)(n.a,{href:"https://github.com/provenance-io/provenance/blob/v1.19.0/proto/cosmos/sanction/v1beta1/tx.proto#L37-L47",children:"https://github.com/provenance-io/provenance/blob/v1.19.0/proto/cosmos/sanction/v1beta1/tx.proto#L37-L47"})]}),"\n",(0,o.jsx)(n.p,{children:"If the proposal ever has enough total deposit (defined in params), immediate temporary unsanctions are issued for each address.\nTemporary unsanctions expire at the completion of the governance proposal regardless of outcome."}),"\n",(0,o.jsx)(n.p,{children:"If the proposal passes, permanent sanctions are removed for each address and temporary entries for each address are also removed.\nOtherwise, any temporary entries associated with the governance proposal are removed."}),"\n",(0,o.jsx)(n.p,{children:"It is expected to fail if:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"authority"})," provided does not equal the authority defined for the ",(0,o.jsx)(n.code,{children:"x/sanction"})," module's keeper.\nThis is most often the address of the ",(0,o.jsx)(n.code,{children:"x/gov"})," module's account."]}),"\n",(0,o.jsxs)(n.li,{children:["Any ",(0,o.jsx)(n.code,{children:"addresses"})," are not valid bech32 encoded address strings."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"msgupdateparams",children:"Msg/UpdateParams"}),"\n",(0,o.jsxs)(n.p,{children:["The sanction module params can be updated by submitting a governance proposal containing a ",(0,o.jsx)(n.code,{children:"MsgUpdateParams"}),".\nIt contains the desired new ",(0,o.jsx)(n.code,{children:"params"})," and the ",(0,o.jsx)(n.code,{children:"authority"})," able to update them."]}),"\n",(0,o.jsxs)(n.p,{children:["+++ ",(0,o.jsx)(n.a,{href:"https://github.com/provenance-io/provenance/blob/v1.19.0/proto/cosmos/sanction/v1beta1/tx.proto#L52-L62",children:"https://github.com/provenance-io/provenance/blob/v1.19.0/proto/cosmos/sanction/v1beta1/tx.proto#L52-L62"})]}),"\n",(0,o.jsxs)(n.p,{children:["If ",(0,o.jsx)(n.code,{children:"params"})," is ",(0,o.jsx)(n.code,{children:"null"}),", they will be deleted from state, reverting them to their code-defined defaults.\nIf a field in ",(0,o.jsx)(n.code,{children:"params"})," is ",(0,o.jsx)(n.code,{children:"null"})," or empty, the record in state will reflect that."]}),"\n",(0,o.jsx)(n.p,{children:"It is expected to fail if:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["The ",(0,o.jsx)(n.code,{children:"authority"})," provided does not equal the authority defined for the ",(0,o.jsx)(n.code,{children:"x/sanction"})," module's keeper.\nThis is most often the address of the ",(0,o.jsx)(n.code,{children:"x/gov"})," module's account."]}),"\n",(0,o.jsx)(n.li,{children:"Any params are invalid."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>r});var o=s(67294);const t={},a=o.createContext(t);function r(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);