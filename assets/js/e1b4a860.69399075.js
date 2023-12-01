"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[1081],{96420:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var t=s(85893),d=s(11151);const o={},r="State",i={id:"sdk/hold/state",title:"State",description:"The x/hold module uses key/value pairs to store hold-related data in state.",source:"@site/docs/sdk/hold/02_state.md",sourceDirName:"sdk/hold",slug:"/sdk/hold/state",permalink:"/docs/sdk/hold/state",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Concepts",permalink:"/docs/sdk/hold/concepts"},next:{title:"Events",permalink:"/docs/sdk/hold/events"}},a={},c=[{value:"Holds",id:"holds",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"state",children:"State"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"x/hold"})," module uses key/value pairs to store hold-related data in state."]}),"\n",(0,t.jsx)(n.h2,{id:"holds",children:"Holds"}),"\n",(0,t.jsx)(n.p,{children:"Holds on funds are recorded by address and denom using the following record format:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"0x00 | len(<address>) | <address> | <denom> -> <amount>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Where:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"0x00"})," is the type byte, and has a value of ",(0,t.jsx)(n.code,{children:"0"})," for these records."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"len(<address>)"})," is a single byte containing the length of the ",(0,t.jsx)(n.code,{children:"<address>"})," as an 8-bit byte in big-endian order."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<address>"})," is the raw bytes of the address of the account that the funds are in."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<denom>"})," is the denomination string of the coin being held."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"<amount>"})," is a string representation of the numerical amount being held."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Records are created, increased and decreased as needed.\nIf the ",(0,t.jsx)(n.code,{children:"<amount>"})," is reduced to zero, the record is deleted."]})]})}function h(e={}){const{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>r});var t=s(67294);const d={},o=t.createContext(d);function r(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);