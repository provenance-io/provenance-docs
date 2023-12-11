"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[5479],{18265:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>a});var r=t(85893),o=t(11151);const c={},s="Concepts",i={id:"sdk/oracle/concepts",title:"concepts",description:"\x3c!--",source:"@site/docs/sdk/oracle/01_concepts.md",sourceDirName:"sdk/oracle",slug:"/sdk/oracle/concepts",permalink:"/docs/sdk/oracle/concepts",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"x/oracle",permalink:"/docs/sdk/oracle/"},next:{title:"state",permalink:"/docs/sdk/oracle/state"}},l={},a=[{value:"Oracle",id:"oracle",level:2},{value:"Interchain Queries (ICQ)",id:"interchain-queries-icq",level:2},{value:"Note",id:"note",level:3}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"concepts",children:"Concepts"}),"\n",(0,r.jsxs)(n.p,{children:["The oracle module is very minimal, but users should understand what the ",(0,r.jsx)(n.code,{children:"Oracle"})," is and how it interacts with ",(0,r.jsx)(n.code,{children:"ICQ"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#oracle",children:"Oracle"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#interchain-queries-icq",children:"Interchain Queries (ICQ)"})}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"oracle",children:"Oracle"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"Oracle"})," is a custom built CosmWasm smart contract that the chain queries for data. Chain users can update the address with a proposal."]}),"\n",(0,r.jsx)(n.h2,{id:"interchain-queries-icq",children:"Interchain Queries (ICQ)"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"ICQ"})," is heavily leveraged in order to allow one Provenance Blockcahin to query another Provenance Blockchain's ",(0,r.jsx)(n.code,{children:"Oracle"}),". This module acts as both the ",(0,r.jsx)(n.code,{children:"Controller"})," and receiver of the ",(0,r.jsx)(n.code,{children:"Host"})," in the ",(0,r.jsx)(n.code,{children:"ICQ"})," realm."]}),"\n",(0,r.jsxs)(n.p,{children:["When a user intends to query another chain, they initiate the process by submitting a query through a transaction on the ",(0,r.jsx)(n.code,{children:"ICQ Controller"}),". This ",(0,r.jsx)(n.code,{children:"Controller"})," delivers the query from the transaction to the ",(0,r.jsx)(n.code,{children:"ICQ Host"})," module of the destination chain via ",(0,r.jsx)(n.code,{children:"IBC"}),". Subsequently, the received query is routed by the ",(0,r.jsx)(n.code,{children:"ICQ Host"})," to this module. Upon receipt, the module queries the ",(0,r.jsx)(n.code,{children:"Oracle"})," using the provided input, and the resulting information is then transmitted back to the ",(0,r.jsx)(n.code,{children:"ICQ Controller"})," in the form of an ",(0,r.jsx)(n.code,{children:"ACK"})," message."]}),"\n",(0,r.jsxs)(n.p,{children:["It should be noted that responses, which arrive in the form of the ",(0,r.jsx)(n.code,{children:"ACK"}),", indicate that queries operate asynchronously. Consequently, these results will not be immediately accessible, requiring the user to wait for an emitted event on the response. For additional details, you can refer to the ",(0,r.jsx)(n.a,{href:"https://github.com/cosmos/ibc-apps/tree/main/modules/async-icq",children:"Async ICQ Module"})," developed by strangelove-ventures."]}),"\n",(0,r.jsx)(n.h3,{id:"note",children:"Note"}),"\n",(0,r.jsxs)(n.p,{children:["For ",(0,r.jsx)(n.code,{children:"ICQ"})," to function correctly, it is essential to establish an ",(0,r.jsx)(n.code,{children:"unordered channel"})," connecting the two chains. This channel should be configured utilizing the ",(0,r.jsx)(n.code,{children:"oracle"})," and ",(0,r.jsx)(n.code,{children:"icqhost"})," ports on the ",(0,r.jsx)(n.code,{children:"ICQ Controller"})," and ",(0,r.jsx)(n.code,{children:"ICQ Host"})," correspondingly. The ",(0,r.jsx)(n.code,{children:"version"})," should be designated as ",(0,r.jsx)(n.code,{children:"icq-1"}),". Moreover, it is crucial to ensure that the ",(0,r.jsx)(n.code,{children:"HostEnabled"})," parameter is enabled with a value of ",(0,r.jsx)(n.code,{children:"true"}),", while the ",(0,r.jsx)(n.code,{children:"AllowQueries"})," parameter should encompass the path ",(0,r.jsx)(n.code,{children:'"/provenance.oracle.v1.Query/Oracle"'}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>s});var r=t(67294);const o={},c=r.createContext(o);function s(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);