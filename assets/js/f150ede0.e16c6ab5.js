"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[3406],{66790:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=n(85893),o=n(11151);const s={},i="Authorization",a={id:"sdk/marker/authorization",title:"Authorization",description:"The marker module supports granting authorizations for restricted coin transfers.  This is implemented using",source:"@site/docs/sdk/marker/11_authorization.md",sourceDirName:"sdk/marker",slug:"/sdk/marker/authorization",permalink:"/docs/sdk/marker/authorization",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:11,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Governance Proposal Control",permalink:"/docs/sdk/marker/governance"},next:{title:"Transfers",permalink:"/docs/sdk/marker/transfers"}},c={},d=[];function l(e){const t={code:"code",h1:"h1",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"authorization",children:"Authorization"}),"\n",(0,r.jsxs)(t.p,{children:["The marker module supports granting authorizations for restricted coin transfers.  This is implemented using\nthe ",(0,r.jsx)(t.code,{children:"authz"})," module's ",(0,r.jsx)(t.code,{children:"Authorization"})," interface."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'// MarkerTransferAuthorization gives the grantee permissions to execute\n// a restricted coin transfer on behalf of the granter\'s account.\nmessage MarkerTransferAuthorization {\n  option (cosmos_proto.implements_interface) = "Authorization";\n\n  // transfer_limit is the total amount the grantee can transfer\n  repeated cosmos.base.v1beta1.Coin transfer_limit = 1\n      [(gogoproto.nullable) = false, (gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];\n\n  // allow_list specifies an optional list of addresses to whom the grantee can send tokens on behalf of the\n  // granter. If omitted, any recipient is allowed.\n  repeated string allow_list = 2;\n}\n'})}),"\n",(0,r.jsxs)(t.p,{children:["With the ",(0,r.jsx)(t.code,{children:"MarkerTransferAuthorization"})," a ",(0,r.jsx)(t.code,{children:"granter"})," can allow a ",(0,r.jsx)(t.code,{children:"grantee"})," to do transfers on their behalf.\nA ",(0,r.jsx)(t.code,{children:"transfer_limit"})," is required to be set for the ",(0,r.jsx)(t.code,{children:"grantee"}),".\nThe ",(0,r.jsx)(t.code,{children:"allow_list"})," is optional.\nAn empty list means any destination address is allowed, otherwise, the destination must be in the ",(0,r.jsx)(t.code,{children:"allow_list"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var r=n(67294);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);