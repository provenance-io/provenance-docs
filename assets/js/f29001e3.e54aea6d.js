"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[1085],{66429:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});var t=s(85893),r=s(11151);const a={},c="Metadata Authz",i={id:"sdk/metadata/authz",title:"Metadata Authz",description:"The authz implementation in the metadata module checks for granted permission in cases when there are missing signatures.",source:"@site/docs/sdk/metadata/04_authz.md",sourceDirName:"sdk/metadata",slug:"/sdk/metadata/authz",permalink:"/docs/sdk/metadata/authz",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Metadata Messages",permalink:"/docs/sdk/metadata/messages"},next:{title:"Metadata Queries",permalink:"/docs/sdk/metadata/queries"}},o={},d=[{value:"Code",id:"code",level:2},{value:"CLI",id:"cli",level:2},{value:"Special allowances",id:"special-allowances",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"metadata-authz",children:"Metadata Authz"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"authz"})," implementation in the ",(0,t.jsx)(n.code,{children:"metadata"})," module checks for granted permission in cases when there are missing signatures."]}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.code,{children:"GenericAuthorization"})," should be used using the message type URLs now documented in ",(0,t.jsx)(n.a,{href:"/docs/sdk/metadata/messages",children:"03_messages.md"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#code",children:"Code"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#cli",children:"CLI"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#special-allowances",children:"Special allowances"})}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"code",children:"Code"}),"\n",(0,t.jsx)(n.p,{children:"Grant:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-golang",children:"granter := ... // Bech32 AccAddress\ngrantee := ... // Bech32 AccAddress\na := authz.NewGenericAuthorization(types.TypeURLMsgWriteScopeRequest)\nerr := s.app.AuthzKeeper.SaveGrant(s.ctx, grantee, granter, a, now.Add(time.Hour))\n"})}),"\n",(0,t.jsx)(n.p,{children:"Delete:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-golang",children:"err := s.app.AuthzKeeper.DeleteGrant(s.ctx, grantee, granter, types.TypeURLMsgWriteScopeRequest)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Revoke:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-golang",children:"granter := ... // Bech32 AccAddress\ngrantee := ... // Bech32 AccAddress\nmsgRevoke := authz.NewMsgRevoke(granter, grantee, types.TypeURLMsgWriteScopeRequest)\nres, err := s.app.AuthzKeeper.Revoke(s.ctx, msgRevoke)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"cli",children:"CLI"}),"\n",(0,t.jsx)(n.p,{children:"Grant:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"$ provenanced tx authz grant <grantee> <authorization_type> --from <granter>\n"})}),"\n",(0,t.jsx)(n.p,{children:"Revoke:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-console",children:"$ provenanced tx authz revoke <grantee> <msg-type-url> --from <granter>\n"})}),"\n",(0,t.jsxs)(n.p,{children:["See ",(0,t.jsx)(n.a,{href:"https://docs.cosmos.network/v0.47/build/modules/authz#genericauthorization",children:"GenericAuthorization"})," specification for more details."]}),"\n",(0,t.jsx)(n.h2,{id:"special-allowances",children:"Special allowances"}),"\n",(0,t.jsxs)(n.p,{children:["Some messages in the ",(0,t.jsx)(n.code,{children:"metadata"})," module have hierarchies. A grant on a parent message type will also work for any of\nits message subtypes, but not the other way around. Therefore, authorizations on these messages are ",(0,t.jsx)(n.code,{children:"one way"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["An authorization on ",(0,t.jsx)(n.code,{children:"MsgWriteScopeRequest"})," works for any of the listed message subtypes:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"MsgAddScopeDataAccessRequest"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"MsgAddScopeDataAccessRequest"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"MsgDeleteScopeDataAccessRequest"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"MsgAddScopeOwnerRequest"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"MsgDeleteScopeOwnerRequest"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["An authorization on ",(0,t.jsx)(n.code,{children:"MsgWriteSessionRequest"})," works for any of the listed message subtypes:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"MsgWriteRecordRequest"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["An authorization on ",(0,t.jsx)(n.code,{children:"MsgWriteScopeSpecificationRequest"})," works for any of the listed message subtypes:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"MsgAddContractSpecToScopeSpecRequest"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"MsgDeleteContractSpecFromScopeSpecRequest"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["An authorization on ",(0,t.jsx)(n.code,{children:"MsgWriteContractSpecificationRequest"})," works for any of the listed message subtypes:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"MsgWriteRecordSpecificationRequest"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["An authorization on ",(0,t.jsx)(n.code,{children:"MsgDeleteContractSpecificationRequest"})," works for any of the listed message subtypes:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"MsgDeleteRecordSpecificationRequest"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Notes:"}),"\n",(0,t.jsxs)(n.p,{children:["An authorization on a ",(0,t.jsx)(n.code,{children:"Write"})," endpoint for an entry/spec will NOT work for its ",(0,t.jsx)(n.code,{children:"Delete"})," endpoint."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>c});var t=s(67294);const r={},a=t.createContext(r);function c(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);