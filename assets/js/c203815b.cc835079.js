"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[6105],{59457:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var n=s(85893),d=s(11151);const i={},r="Events",l={id:"sdk/msgfees/events",title:"events",description:"\x3c!--",source:"@site/docs/sdk/msgfees/05_events.md",sourceDirName:"sdk/msgfees",slug:"/sdk/msgfees/events",permalink:"/docs/sdk/msgfees/events",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"queries",permalink:"/docs/sdk/msgfees/queries"},next:{title:"params",permalink:"/docs/sdk/msgfees/params"}},c={},a=[{value:"Any Tx",id:"any-tx",level:2},{value:"Tx with Additional Fee",id:"tx-with-additional-fee",level:2},{value:"Tx Summary Event",id:"tx-summary-event",level:2},{value:"Add/Update/Remove Proposal",id:"addupdateremove-proposal",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"events",children:"Events"}),"\n",(0,n.jsx)(t.p,{children:"Existing fee event continue to show total fee charged"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#any-tx",children:"Any Tx"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#tx-with-additional-fee",children:"Tx with Additional Fee"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#tx-summary-event",children:"Tx Summary Event"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#addupdateremove-proposal",children:"Add/Update/Remove Proposal"})}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"any-tx",children:"Any Tx"}),"\n",(0,n.jsx)(t.p,{children:"If a Tx was successful, or if it failed, but the min fee was charged, these two events are emitted:"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Attribute Key"}),(0,n.jsx)(t.th,{children:"Attribute Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"tx"}),(0,n.jsx)(t.td,{children:"fee"}),(0,n.jsx)(t.td,{children:"total fee (coins)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"tx"}),(0,n.jsx)(t.td,{children:"min_fee_charged"}),(0,n.jsx)(t.td,{children:"floor gas price * gas (coins)"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"tx-with-additional-fee",children:"Tx with Additional Fee"}),"\n",(0,n.jsx)(t.p,{children:"If there are tx msgs that have additional fees, and those fees were successfully charged, a breakdown event will be emitted."}),"\n",(0,n.jsx)(t.p,{children:"Type: tx"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Attribute Key"}),(0,n.jsx)(t.th,{children:"Attribute Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"additionalfee"}),(0,n.jsx)(t.td,{children:"additional fee charged (coins)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"basefee"}),(0,n.jsx)(t.td,{children:"total fee - additional fee, should always cover gas costs (coins)"})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"tx-summary-event",children:"Tx Summary Event"}),"\n",(0,n.jsx)(t.p,{children:"If there are tx msgs that have additional fees, and those fees were successfully charged, a summary event will be emitted."}),"\n",(0,n.jsx)(t.p,{children:"Type: provenance.msgfees.v1.EventMsgFees"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Attribute Key"}),(0,n.jsx)(t.th,{children:"Attribute Value"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"EventMsgFees"}),(0,n.jsx)(t.td,{children:"MsgFees"}),(0,n.jsx)(t.td,{children:"A JSON list of EventMsgFee entries summarizing each msg type and recipient."})]})})]}),"\n",(0,n.jsxs)(t.p,{children:["Each ",(0,n.jsx)(t.code,{children:"EventMsgFee"})," has the following fields:"]}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Field Name"}),(0,n.jsx)(t.th,{children:"Field Value"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"type_url"}),(0,n.jsx)(t.td,{children:"The type url for the tx msg that has a msg fee."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"count"}),(0,n.jsx)(t.td,{children:"A count of txs with this msg type."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"total"}),(0,n.jsx)(t.td,{children:"The total amount of additional fees for this msg type and recipient (type_url count * msg fee = total)"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"recipient"}),(0,n.jsx)(t.td,{children:"the bech32 address that the fee was sent to. An empty string indicates the module is the recipient."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"addupdateremove-proposal",children:"Add/Update/Remove Proposal"}),"\n",(0,n.jsxs)(t.p,{children:["Governance proposals events(for proposed msg fees) will continue to be emitted by cosmos sdk.\n(",(0,n.jsx)(t.a,{href:"https://github.com/cosmos/cosmos-sdk/blob/master/x/gov/spec/04_events.md",children:"https://github.com/cosmos/cosmos-sdk/blob/master/x/gov/spec/04_events.md"}),")"]})]})}function o(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,t,s)=>{s.d(t,{Z:()=>l,a:()=>r});var n=s(67294);const d={},i=n.createContext(d);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);