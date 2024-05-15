"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[1763],{65059:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>o});var r=s(85893),i=s(11151);const a={},d="Client",t={id:"sdk/sanction/client",title:"Client",description:"A user can interact with the x/sanction module using gRPC, CLI, or REST.",source:"@site/docs/sdk/sanction/06_client.md",sourceDirName:"sdk/sanction",slug:"/sdk/sanction/client",permalink:"/docs/sdk/sanction/client",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"gRPC Queries",permalink:"/docs/sdk/sanction/queries"},next:{title:"x/trigger",permalink:"/docs/sdk/trigger/"}},c={},o=[{value:"gRPC",id:"grpc",level:2},{value:"CLI",id:"cli",level:2},{value:"Transactions",id:"transactions",level:3},{value:"Queries",id:"queries",level:3},{value:"IsSanctioned",id:"issanctioned",level:4},{value:"SanctionedAddresses",id:"sanctionedaddresses",level:4},{value:"TemporaryEntries",id:"temporaryentries",level:4},{value:"Params",id:"params",level:4},{value:"REST",id:"rest",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"client",children:"Client"}),"\n",(0,r.jsxs)(n.p,{children:["A user can interact with the ",(0,r.jsx)(n.code,{children:"x/sanction"})," module using ",(0,r.jsx)(n.code,{children:"gRPC"}),", ",(0,r.jsx)(n.code,{children:"CLI"}),", or ",(0,r.jsx)(n.code,{children:"REST"}),"."]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#grpc",children:"gRPC"})}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"#cli",children:"CLI"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#transactions",children:"Transactions"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#queries",children:"Queries"})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"#rest",children:"REST"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"grpc",children:"gRPC"}),"\n",(0,r.jsxs)(n.p,{children:["A user can interact with and query the ",(0,r.jsx)(n.code,{children:"x/sanction"})," module using ",(0,r.jsx)(n.code,{children:"gRPC"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["For details see ",(0,r.jsx)(n.a,{href:"/docs/sdk/sanction/messages",children:"Msg Service"})," or ",(0,r.jsx)(n.a,{href:"/docs/sdk/sanction/queries",children:"gRPC Queries"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"cli",children:"CLI"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"gRPC"})," transaction and query endpoints are made available through CLI helpers."]}),"\n",(0,r.jsx)(n.h3,{id:"transactions",children:"Transactions"}),"\n",(0,r.jsxs)(n.p,{children:["The transaction endpoints are only for use with governance proposals.\nAs such, the CLI's ",(0,r.jsx)(n.code,{children:"tx gov"})," commands can be used to interact with them."]}),"\n",(0,r.jsx)(n.h3,{id:"queries",children:"Queries"}),"\n",(0,r.jsxs)(n.p,{children:["Each of these commands facilitates running a ",(0,r.jsx)(n.code,{children:"gRPC"})," query.\nStandard ",(0,r.jsx)(n.code,{children:"query"})," flags are available unless otherwise noted."]}),"\n",(0,r.jsx)(n.h4,{id:"issanctioned",children:"IsSanctioned"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ simd query sanction is-sanctioned --help\nCheck if an address is sanctioned.\n\nExamples:\n  $ simd query sanction is-sanctioned cosmos1v4uxzmtsd3j4zat9wfu5zerywgc47h6luruvdf\n  $ simd query sanction is cosmos1v4uxzmtsd3j4zat9wfu5zerywgc47h6luruvdf\n  $ simd query sanction check cosmos1v4uxzmtsd3j4zat9wfu5zerywgc47h6luruvdf\n\nUsage:\n  simd query sanction is-sanctioned <address> [flags]\n\nAliases:\n  is-sanctioned, is, check, is-sanction\n"})}),"\n",(0,r.jsx)(n.h4,{id:"sanctionedaddresses",children:"SanctionedAddresses"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ simd query sanction sanctioned-addresses --help\nList all the sanctioned addresses.\n\nExamples:\n  $ simd query sanction sanctioned-addresses\n  $ simd query sanction addresses\n  $ simd query sanction all\n\nUsage:\n  simd query sanction sanctioned-addresses [flags]\n\nAliases:\n  sanctioned-addresses, addresses, all\n"})}),"\n",(0,r.jsx)(n.p,{children:"Standard pagination flags are also available for this command."}),"\n",(0,r.jsx)(n.h4,{id:"temporaryentries",children:"TemporaryEntries"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"simd query sanction temporary-entries --help\nList all temporarily sanctioned/unsanctioned addresses.\nIf an address is provided, only temporary entries for that address are returned.\nOtherwise, all temporary entries are returned.\n\nExamples:\n  $ simd query sanction temporary-entries\n  $ simd query sanction temporary-entries cosmos1v4uxzmtsd3j4zat9wfu5zerywgc47h6luruvdf\n  $ simd query sanction temp-entries\n  $ simd query sanction temp-entries cosmos1v4uxzmtsd3j4zat9wfu5zerywgc47h6luruvdf\n  $ simd query sanction temp\n  $ simd query sanction temp cosmos1v4uxzmtsd3j4zat9wfu5zerywgc47h6luruvdf\n\nUsage:\n  simd query sanction temporary-entries [<address>] [flags]\n\nAliases:\n  temporary-entries, temp-entries, temp\n"})}),"\n",(0,r.jsx)(n.p,{children:"Standard pagination flags are also available for this command."}),"\n",(0,r.jsx)(n.h4,{id:"params",children:"Params"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-shell",children:"$ simd query sanction params --help\nGet the sanction module params.\n\nExample:\n  $ simd query sanction params\n\nUsage:\n  simd query sanction params [flags]\n"})}),"\n",(0,r.jsx)(n.h2,{id:"rest",children:"REST"}),"\n",(0,r.jsxs)(n.p,{children:["Each of the sanction ",(0,r.jsx)(n.code,{children:"gRPC"})," query endpoints is also available through one or more ",(0,r.jsx)(n.code,{children:"REST"})," endpoints."]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"URL"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"IsSanctioned"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/cosmos/sanction/v1beta1/check/{address}"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SanctionedAddresses"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/cosmos/sanction/v1beta1/all"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"TemporaryEntries - all"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/cosmos/sanction/v1beta1/temp"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"TemporaryEntries - specific"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/cosmos/sanction/v1beta1/temp?address={address}"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Params"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"/cosmos/sanction/v1beta1/params"})})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["For ",(0,r.jsx)(n.code,{children:"SanctionedAddresses"})," and ",(0,r.jsx)(n.code,{children:"TemporaryEntries"}),", pagination parameters can be provided using the standard pagination query parameters."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,s)=>{s.d(n,{Z:()=>t,a:()=>d});var r=s(67294);const i={},a=r.createContext(i);function d(e){const n=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);