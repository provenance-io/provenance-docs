"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[2316],{44794:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var i=s(85893),r=s(11151);const t={},l="State Transitions",d={id:"sdk/marker/state_transitions",title:"State Transitions",description:"This document describes the state transition operations pertaining markers:",source:"@site/docs/sdk/marker/02_state_transitions.md",sourceDirName:"sdk/marker",slug:"/sdk/marker/state_transitions",permalink:"/docs/sdk/marker/state_transitions",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"State",permalink:"/docs/sdk/marker/state"},next:{title:"Messages",permalink:"/docs/sdk/marker/messages"}},a={},c=[{value:"Undefined",id:"undefined",level:2},{value:"Proposed",id:"proposed",level:2},{value:"Finalized",id:"finalized",level:2},{value:"Active",id:"active",level:2},{value:"Cancelled",id:"cancelled",level:2},{value:"Destroyed",id:"destroyed",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"state-transitions",children:"State Transitions"}),"\n",(0,i.jsx)(n.p,{children:"This document describes the state transition operations pertaining markers:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#undefined",children:"Undefined"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#proposed",children:"Proposed"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#finalized",children:"Finalized"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#active",children:"Active"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#cancelled",children:"Cancelled"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#destroyed",children:"Destroyed"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"undefined",children:"Undefined"}),"\n",(0,i.jsx)(n.p,{children:"The undefined status is not allowed and its use will be flagged as an error condition."}),"\n",(0,i.jsx)(n.h2,{id:"proposed",children:"Proposed"}),"\n",(0,i.jsxs)(n.p,{children:["The proposed status is the initial state of a marker.  A marker in the ",(0,i.jsx)(n.code,{children:"proposed"})," status will accept\nchanges to supply via the ",(0,i.jsx)(n.code,{children:"mint"}),"/",(0,i.jsx)(n.code,{children:"burn"})," methods, updates to the access list, and state transitions when\ncalled by the address set in the ",(0,i.jsx)(n.code,{children:"manager"})," property."]}),"\n",(0,i.jsx)(n.p,{children:"On Transition:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Proposed is the initial state of a marker by default.  It is not possible to transition to this state from any other."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Next Status:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Finalized"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Cancelled"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"finalized",children:"Finalized"}),"\n",(0,i.jsx)(n.p,{children:"The finalized state of the marker is used to verify the readiness of a marker before activating it."}),"\n",(0,i.jsx)(n.p,{children:"Requirements:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Marker must exist"}),"\n",(0,i.jsxs)(n.li,{children:["Caller address must match the ",(0,i.jsx)(n.code,{children:"manager"})," address on the marker"]}),"\n",(0,i.jsxs)(n.li,{children:["Current status of marker must be ",(0,i.jsx)(n.code,{children:"Proposed"})]}),"\n",(0,i.jsx)(n.li,{children:"Supply of the marker must meet or exceed the amount of any existing coin in circulation on the network of\nthe denom of the marker. (This will only apply )"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"On Transition:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Marker status is set to ",(0,i.jsx)(n.code,{children:"Finalized"})]}),"\n",(0,i.jsx)(n.li,{children:"A marker finalize typed event is dispatched"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Next Status:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Active"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Cancelled"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"active",children:"Active"}),"\n",(0,i.jsx)(n.p,{children:"An active marker is considered ready for use."}),"\n",(0,i.jsx)(n.p,{children:"On Transition:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Marker status is set to ",(0,i.jsx)(n.code,{children:"Active"})]}),"\n",(0,i.jsx)(n.li,{children:"Requested coin supply is minted and placed in the marker account"}),"\n",(0,i.jsxs)(n.li,{children:["For markers with a ",(0,i.jsx)(n.code,{children:"fixed_supply"})," the Invariant checks are performed in ",(0,i.jsx)(n.code,{children:"begin_block"})]}),"\n",(0,i.jsx)(n.li,{children:"Permissions as assigned in the access list are enforced for any management actions performed"}),"\n",(0,i.jsxs)(n.li,{children:["The ",(0,i.jsx)(n.code,{children:"manager"})," field is cleared.  All management actions require explicit permission grants."]}),"\n",(0,i.jsx)(n.li,{children:"A marker activate typed event is dispatched"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Next Status:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Cancelled"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"cancelled",children:"Cancelled"}),"\n",(0,i.jsxs)(n.p,{children:["A cancelled marker will have no coin supply in circulation.  Markers may remain in the Cancelled state long term to\nprevent their denom reuse by another future marker. If a marker is no longer needed at all then the ",(0,i.jsx)(n.strong,{children:"Destroyed"}),"\nstatus maybe appropriate."]}),"\n",(0,i.jsx)(n.p,{children:"Requirements:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Caller must have the ",(0,i.jsx)(n.code,{children:"delete"})," permission assigned to their address or"]}),"\n",(0,i.jsx)(n.li,{children:"Caller must be the manager of the marker (applies only to proposed markers that are Cancelled)"}),"\n",(0,i.jsx)(n.li,{children:"The supply of the coin in circulation outside of the marker account must be zero."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"On Transition:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Marker status is set to ",(0,i.jsx)(n.code,{children:"Cancelled"})]}),"\n",(0,i.jsx)(n.li,{children:"A marker Cancelled typed event is dispatched"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Next Status:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Destroyed"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"destroyed",children:"Destroyed"}),"\n",(0,i.jsx)(n.p,{children:"A destroyed marker is denoted as available for subsequent removal from the state store by clean up processes.  Markers\nin the destroyed status will be removed in the Begin Block ABCI handler at the beginning of the next block (v1.3.0+)."}),"\n",(0,i.jsx)(n.p,{children:"On Transition:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"All supply of the coin denom will be burned."}),"\n",(0,i.jsxs)(n.li,{children:["Marker status is set to ",(0,i.jsx)(n.code,{children:"Destroyed"})]}),"\n",(0,i.jsx)(n.li,{children:"Marker will ultimately be deleted from the KVStore during the next ABCI Begin Block (v1.3.0+)"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Next Status:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"None"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>d,a:()=>l});var i=s(67294);const r={},t=i.createContext(r);function l(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);