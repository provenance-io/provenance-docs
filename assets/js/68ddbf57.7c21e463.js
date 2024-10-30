"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[4385],{90537:(e,t,c)=>{c.r(t),c.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=c(74848),s=c(28453);const i={},l="Metadata Events",o={id:"sdk/metadata/telemetry",title:"Metadata Events",description:"The metadata module emits the following events and telemetry information.",source:"@site/docs/sdk/metadata/07_telemetry.md",sourceDirName:"sdk/metadata",slug:"/sdk/metadata/telemetry",permalink:"/docs/sdk/metadata/telemetry",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:7,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Metadata Events",permalink:"/docs/sdk/metadata/events"},next:{title:"Metadata Parameters",permalink:"/docs/sdk/metadata/params"}},r={},d=[{value:"Counters",id:"counters",level:2},{value:"Stored Objects",id:"stored-objects",level:3},{value:"Stored Object: Keys",id:"stored-object-keys",level:4},{value:"Stored Object: Labels",id:"stored-object-labels",level:4},{value:"Stored Object: Label: Category",id:"stored-object-label-category",level:5},{value:"Stored Object: Label: Object Type",id:"stored-object-label-object-type",level:5},{value:"Object Actions",id:"object-actions",level:3},{value:"Object Action: Keys",id:"object-action-keys",level:4},{value:"Object Action: Labels",id:"object-action-labels",level:4},{value:"Object Action: Label: Category",id:"object-action-label-category",level:5},{value:"Object Action: Label: Object Type",id:"object-action-label-object-type",level:5},{value:"Object Action: Label: Action",id:"object-action-label-action",level:5},{value:"Timers",id:"timers",level:2},{value:"TX Keys",id:"tx-keys",level:3},{value:"Query Keys",id:"query-keys",level:3}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",header:"header",hr:"hr",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"metadata-events",children:"Metadata Events"})}),"\n",(0,n.jsx)(t.p,{children:"The metadata module emits the following events and telemetry information."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#counters",children:"Counters"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#stored-objects",children:"Stored Objects"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#stored-object-keys",children:"Stored Object: Keys"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#stored-object-labels",children:"Stored Object: Labels"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#stored-object-label-category",children:"Stored Object: Label: Category"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#stored-object-label-object-type",children:"Stored Object: Label: Object Type"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#object-actions",children:"Object Actions"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#object-action-keys",children:"Object Action: Keys"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#object-action-labels",children:"Object Action: Labels"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#object-action-label-category",children:"Object Action: Label: Category"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#object-action-label-object-type",children:"Object Action: Label: Object Type"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#object-action-label-action",children:"Object Action: Label: Action"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"#timers",children:"Timers"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#tx-keys",children:"TX Keys"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#query-keys",children:"Query Keys"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"counters",children:"Counters"}),"\n",(0,n.jsx)(t.h3,{id:"stored-objects",children:"Stored Objects"}),"\n",(0,n.jsx)(t.p,{children:"This counter is used to get counts of things stored on the chain."}),"\n",(0,n.jsx)(t.p,{children:"When this module writes a new object to the chain, this counter is incremented by 1.\nWhen this module deletes an object from the chain, this counter is decremented by 1.\nWhen this module updates an object on the chain, this counter is not updated."}),"\n",(0,n.jsx)(t.h4,{id:"stored-object-keys",children:"Stored Object: Keys"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:'"metadata"'}),", ",(0,n.jsx)(t.code,{children:'"stored-object"'})]}),"\n",(0,n.jsx)(t.h4,{id:"stored-object-labels",children:"Stored Object: Labels"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:'"category"'}),", ",(0,n.jsx)(t.code,{children:'"object-type"'})]}),"\n",(0,n.jsx)(t.h5,{id:"stored-object-label-category",children:"Stored Object: Label: Category"}),"\n",(0,n.jsx)(t.p,{children:"This label groups the objects into a general type."}),"\n",(0,n.jsxs)(t.p,{children:["The string for this label is ",(0,n.jsx)(t.code,{children:'"category"'}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Possible values:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:'"entry"'})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:'"specification"'})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:'"object-store-locator"'})}),"\n"]}),"\n",(0,n.jsx)(t.h5,{id:"stored-object-label-object-type",children:"Stored Object: Label: Object Type"}),"\n",(0,n.jsx)(t.p,{children:'This label specifically identifies objects.\nEach value belongs to exactly one "category" label.'}),"\n",(0,n.jsxs)(t.p,{children:["The string for this label is ",(0,n.jsx)(t.code,{children:'"object-type"'}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Possible values:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:'"scope"'})," (is an ",(0,n.jsx)(t.code,{children:'"entry"'}),")"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:'"session"'})," (is an ",(0,n.jsx)(t.code,{children:'"entry"'}),")"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:'"record"'})," (is an ",(0,n.jsx)(t.code,{children:'"entry"'}),")"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:'"scope-specification"'})," (is a ",(0,n.jsx)(t.code,{children:'"specification"'}),")"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:'"contract-specification"'})," (is a ",(0,n.jsx)(t.code,{children:'"specification"'}),")"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:'"record-specification"'})," (is a ",(0,n.jsx)(t.code,{children:'"specification"'}),")"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:'"object-store-locator"'})," (is an ",(0,n.jsx)(t.code,{children:'"object-store-locator"'}),")"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"object-actions",children:"Object Actions"}),"\n",(0,n.jsx)(t.p,{children:"This counter is used to get counts of actions taken on the chain."}),"\n",(0,n.jsx)(t.p,{children:"Every time this module writes to or deletes from the chain, this counter is incremented."}),"\n",(0,n.jsx)(t.h4,{id:"object-action-keys",children:"Object Action: Keys"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:'"metadata"'}),", ",(0,n.jsx)(t.code,{children:'"object-action"'})]}),"\n",(0,n.jsx)(t.h4,{id:"object-action-labels",children:"Object Action: Labels"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:'"category"'}),", ",(0,n.jsx)(t.code,{children:'"object-type"'}),", ",(0,n.jsx)(t.code,{children:'"action"'})]}),"\n",(0,n.jsx)(t.h5,{id:"object-action-label-category",children:"Object Action: Label: Category"}),"\n",(0,n.jsxs)(t.p,{children:["This is the same label used by the stored object counter: ",(0,n.jsx)(t.a,{href:"#stored-object-label-category",children:"Stored Object: Label: Category"})]}),"\n",(0,n.jsx)(t.h5,{id:"object-action-label-object-type",children:"Object Action: Label: Object Type"}),"\n",(0,n.jsxs)(t.p,{children:["This is the same label used by the stored object counter: ",(0,n.jsx)(t.a,{href:"#stored-object-label-object-type",children:"Stored Object: Label: Object Type"})]}),"\n",(0,n.jsx)(t.h5,{id:"object-action-label-action",children:"Object Action: Label: Action"}),"\n",(0,n.jsx)(t.p,{children:"This label defines the actions taken with respects to the various objects."}),"\n",(0,n.jsxs)(t.p,{children:["The string for this label is ",(0,n.jsx)(t.code,{children:'"action"'}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Possible values:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:'"created"'})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:'"updated"'})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.code,{children:'"deleted"'})}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"timers",children:"Timers"}),"\n",(0,n.jsx)(t.p,{children:"All TX and Query endpoints have related timing metrics."}),"\n",(0,n.jsx)(t.h3,{id:"tx-keys",children:"TX Keys"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:'"metadata"'}),", ",(0,n.jsx)(t.code,{children:'"tx"'}),", ",(0,n.jsx)(t.code,{children:"{endpoint}"})]}),"\n",(0,n.jsxs)(t.p,{children:["Example ",(0,n.jsx)(t.code,{children:"{endpoint}"})," values: ",(0,n.jsx)(t.code,{children:'"WriteScope"'}),", ",(0,n.jsx)(t.code,{children:'"DeleteContractSpecification"'}),", ",(0,n.jsx)(t.code,{children:'"ModifyOSLocator"'}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"query-keys",children:"Query Keys"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:'"metadata"'}),", ",(0,n.jsx)(t.code,{children:'"query"'}),", ",(0,n.jsx)(t.code,{children:"{endpoint}"})]}),"\n",(0,n.jsxs)(t.p,{children:["Example ",(0,n.jsx)(t.code,{children:"{endpoint}"})," values: ",(0,n.jsx)(t.code,{children:'"Scope"'}),", ",(0,n.jsx)(t.code,{children:'"ContractSpecificationsAll"'}),", ",(0,n.jsx)(t.code,{children:'"OSLocatorsByScope"'}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,t,c)=>{c.d(t,{R:()=>l,x:()=>o});var n=c(96540);const s={},i=n.createContext(s);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);