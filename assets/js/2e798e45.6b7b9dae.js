"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[2641],{451:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>t,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var a=n(85893),o=n(11151);const i={},s="Rewards Queries",d={id:"sdk/reward/queries",title:"queries",description:"\x3c!--",source:"@site/docs/sdk/reward/05_queries.md",sourceDirName:"sdk/reward",slug:"/sdk/reward/queries",permalink:"/docs/sdk/reward/queries",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"messages",permalink:"/docs/sdk/reward/messages"},next:{title:"events",permalink:"/docs/sdk/reward/events"}},t={},c=[{value:"Query Reward Program By ID",id:"query-reward-program-by-id",level:2},{value:"Request",id:"request",level:3},{value:"Response",id:"response",level:3},{value:"Query Reward Programs",id:"query-reward-programs",level:2},{value:"Request",id:"request-1",level:3},{value:"Response",id:"response-1",level:3},{value:"Query Claim Period Reward Distribution By ID",id:"query-claim-period-reward-distribution-by-id",level:2},{value:"Request",id:"request-2",level:3},{value:"Response",id:"response-2",level:3},{value:"Query Claim Period Reward Distributions",id:"query-claim-period-reward-distributions",level:2},{value:"Request",id:"request-3",level:3},{value:"Response",id:"response-3",level:3},{value:"Query Rewards By Address",id:"query-rewards-by-address",level:2},{value:"Request",id:"request-4",level:3},{value:"Response",id:"response-4",level:3}];function l(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.h1,{id:"rewards-queries",children:"Rewards Queries"}),"\n",(0,a.jsx)(r.p,{children:"In this section we describe the queries available for looking up rewards information."}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"#query-reward-program-by-id",children:"Query Reward Program By ID"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"#query-reward-programs",children:"Query Reward Programs"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"#query-claim-period-reward-distribution-by-id",children:"Query Claim Period Reward Distribution By ID"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"#query-claim-period-reward-distributions",children:"Query Claim Period Reward Distributions"})}),"\n",(0,a.jsx)(r.li,{children:(0,a.jsx)(r.a,{href:"#query-rewards-by-address",children:"Query Rewards By Address"})}),"\n"]}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h2,{id:"query-reward-program-by-id",children:"Query Reward Program By ID"}),"\n",(0,a.jsxs)(r.p,{children:["The ",(0,a.jsx)(r.code,{children:"QueryRewardProgramByID"})," query is used to obtain the content of a specific Reward Program."]}),"\n",(0,a.jsx)(r.h3,{id:"request",children:"Request"}),"\n",(0,a.jsxs)(r.p,{children:["+++ ",(0,a.jsx)(r.a,{href:"https://github.com/provenance-io/provenance/blob/243a89c76378bb5af8a8017e099ee04ac22e99ce/proto/provenance/reward/v1/query.proto#L47-L51",children:"https://github.com/provenance-io/provenance/blob/243a89c76378bb5af8a8017e099ee04ac22e99ce/proto/provenance/reward/v1/query.proto#L47-L51"})]}),"\n",(0,a.jsxs)(r.p,{children:["The ",(0,a.jsx)(r.code,{children:"id"})," is the unique identifier for the Reward Program."]}),"\n",(0,a.jsx)(r.h3,{id:"response",children:"Response"}),"\n",(0,a.jsxs)(r.p,{children:["+++ ",(0,a.jsx)(r.a,{href:"https://github.com/provenance-io/provenance/blob/243a89c76378bb5af8a8017e099ee04ac22e99ce/proto/provenance/reward/v1/query.proto#L53-L57",children:"https://github.com/provenance-io/provenance/blob/243a89c76378bb5af8a8017e099ee04ac22e99ce/proto/provenance/reward/v1/query.proto#L53-L57"})]}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h2,{id:"query-reward-programs",children:"Query Reward Programs"}),"\n",(0,a.jsxs)(r.p,{children:["The ",(0,a.jsx)(r.code,{children:"QueryRewardPrograms"})," query is used to obtain the content of all Reward Programs matching the supplied ",(0,a.jsx)(r.code,{children:"query_type"}),"."]}),"\n",(0,a.jsx)(r.h3,{id:"request-1",children:"Request"}),"\n",(0,a.jsxs)(r.p,{children:["+++ ",(0,a.jsx)(r.a,{href:"https://github.com/provenance-io/provenance/blob/243a89c76378bb5af8a8017e099ee04ac22e99ce/proto/provenance/reward/v1/query.proto#L59-L80",children:"https://github.com/provenance-io/provenance/blob/243a89c76378bb5af8a8017e099ee04ac22e99ce/proto/provenance/reward/v1/query.proto#L59-L80"})]}),"\n",(0,a.jsxs)(r.p,{children:["The ",(0,a.jsx)(r.code,{children:"query_type"})," is used to filter on the Reward Program state. The following are a list of ",(0,a.jsx)(r.code,{children:"query_types"}),"."]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"ALL - All Reward Programs will be returned."}),"\n",(0,a.jsxs)(r.li,{children:["PENDING - All Reward Programs that are in the ",(0,a.jsx)(r.code,{children:"PENDING"})," state will be returned."]}),"\n",(0,a.jsxs)(r.li,{children:["ACTIVE - All Reward Programs that are in the ",(0,a.jsx)(r.code,{children:"STARTED"})," state will be returned."]}),"\n",(0,a.jsxs)(r.li,{children:["OUTSTANDING - All Reward Programs that are either in the ",(0,a.jsx)(r.code,{children:"PENDING"})," or ",(0,a.jsx)(r.code,{children:"STARTED"})," state will be returned."]}),"\n",(0,a.jsxs)(r.li,{children:["FINISHED - All Reward Programs that are in the ",(0,a.jsx)(r.code,{children:"FINISHED"})," or ",(0,a.jsx)(r.code,{children:"EXPIRED"})," state will be returned."]}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"response-1",children:"Response"}),"\n",(0,a.jsxs)(r.p,{children:["+++ ",(0,a.jsx)(r.a,{href:"https://github.com/provenance-io/provenance/blob/243a89c76378bb5af8a8017e099ee04ac22e99ce/proto/provenance/reward/v1/query.proto#L82-L88",children:"https://github.com/provenance-io/provenance/blob/243a89c76378bb5af8a8017e099ee04ac22e99ce/proto/provenance/reward/v1/query.proto#L82-L88"})]}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h2,{id:"query-claim-period-reward-distribution-by-id",children:"Query Claim Period Reward Distribution By ID"}),"\n",(0,a.jsxs)(r.p,{children:["The ",(0,a.jsx)(r.code,{children:"QueryClaimPeriodRewardDistributionByID"})," query is used to obtain the content of a specific ",(0,a.jsx)(r.code,{children:"Claim Period Reward Distribution"}),"."]}),"\n",(0,a.jsx)(r.h3,{id:"request-2",children:"Request"}),"\n",(0,a.jsxs)(r.p,{children:["+++ ",(0,a.jsx)(r.a,{href:"https://github.com/provenance-io/provenance/blob/243a89c76378bb5af8a8017e099ee04ac22e99ce/proto/provenance/reward/v1/query.proto#L104-L110",children:"https://github.com/provenance-io/provenance/blob/243a89c76378bb5af8a8017e099ee04ac22e99ce/proto/provenance/reward/v1/query.proto#L104-L110"})]}),"\n",(0,a.jsxs)(r.p,{children:["The ",(0,a.jsx)(r.code,{children:"reward_id"})," is a unique identifier for the Reward Program and the ",(0,a.jsx)(r.code,{children:"claim_id"})," is a unique identifier for the Reward Program's Claim Period."]}),"\n",(0,a.jsx)(r.h3,{id:"response-2",children:"Response"}),"\n",(0,a.jsxs)(r.p,{children:["+++ ",(0,a.jsx)(r.a,{href:"https://github.com/provenance-io/provenance/blob/243a89c76378bb5af8a8017e099ee04ac22e99ce/proto/provenance/reward/v1/query.proto#L112-L116",children:"https://github.com/provenance-io/provenance/blob/243a89c76378bb5af8a8017e099ee04ac22e99ce/proto/provenance/reward/v1/query.proto#L112-L116"})]}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h2,{id:"query-claim-period-reward-distributions",children:"Query Claim Period Reward Distributions"}),"\n",(0,a.jsxs)(r.p,{children:["The ",(0,a.jsx)(r.code,{children:"QueryClaimPeriodRewardDistributions"})," query is used to obtain the content of all ",(0,a.jsx)(r.code,{children:"Claim Period Reward Distributions"})," matching the supplied ",(0,a.jsx)(r.code,{children:"query_type"}),"."]}),"\n",(0,a.jsx)(r.h3,{id:"request-3",children:"Request"}),"\n",(0,a.jsxs)(r.p,{children:["+++ ",(0,a.jsx)(r.a,{href:"https://github.com/provenance-io/provenance/blob/243a89c76378bb5af8a8017e099ee04ac22e99ce/proto/provenance/reward/v1/query.proto#L90-L94",children:"https://github.com/provenance-io/provenance/blob/243a89c76378bb5af8a8017e099ee04ac22e99ce/proto/provenance/reward/v1/query.proto#L90-L94"})]}),"\n",(0,a.jsxs)(r.p,{children:["The ",(0,a.jsx)(r.code,{children:"pagination"})," field is used to help limit the number of results."]}),"\n",(0,a.jsx)(r.h3,{id:"response-3",children:"Response"}),"\n",(0,a.jsxs)(r.p,{children:["+++ ",(0,a.jsx)(r.a,{href:"https://github.com/provenance-io/provenance/blob/243a89c76378bb5af8a8017e099ee04ac22e99ce/proto/provenance/reward/v1/query.proto#L96-L102",children:"https://github.com/provenance-io/provenance/blob/243a89c76378bb5af8a8017e099ee04ac22e99ce/proto/provenance/reward/v1/query.proto#L96-L102"})]}),"\n",(0,a.jsx)(r.hr,{}),"\n",(0,a.jsx)(r.h2,{id:"query-rewards-by-address",children:"Query Rewards By Address"}),"\n",(0,a.jsxs)(r.p,{children:["The ",(0,a.jsx)(r.code,{children:"QueryRewardsByAddress"})," query is used to obtain the status of the address' Reward Claims."]}),"\n",(0,a.jsx)(r.h3,{id:"request-4",children:"Request"}),"\n",(0,a.jsxs)(r.p,{children:["+++ ",(0,a.jsx)(r.a,{href:"https://github.com/provenance-io/provenance/blob/243a89c76378bb5af8a8017e099ee04ac22e99ce/proto/provenance/reward/v1/query.proto#L118-L126",children:"https://github.com/provenance-io/provenance/blob/243a89c76378bb5af8a8017e099ee04ac22e99ce/proto/provenance/reward/v1/query.proto#L118-L126"})]}),"\n",(0,a.jsxs)(r.p,{children:["The ",(0,a.jsx)(r.code,{children:"address"})," field is the bech32 address of the user to list Reward Claims for. The ",(0,a.jsx)(r.code,{children:"claim_status"})," is used to filter on the Reward Claim. The following are a list of ",(0,a.jsx)(r.code,{children:"claim_status"}),"."]}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsx)(r.li,{children:"ALL - All Reward Claims are returned."}),"\n",(0,a.jsx)(r.li,{children:"UNCLAIMABLE - All Reward Claims that are not yet eligible to be claimed."}),"\n",(0,a.jsx)(r.li,{children:"CLAIMABLE - All Reward Claims that are still eligible to be claimed."}),"\n",(0,a.jsx)(r.li,{children:"CLAIMED - All Reward Claims that have been claimed."}),"\n",(0,a.jsx)(r.li,{children:"EXPIRED - All Reward Claims that have expired."}),"\n"]}),"\n",(0,a.jsx)(r.h3,{id:"response-4",children:"Response"}),"\n",(0,a.jsxs)(r.p,{children:["+++ ",(0,a.jsx)(r.a,{href:"https://github.com/provenance-io/provenance/blob/243a89c76378bb5af8a8017e099ee04ac22e99ce/proto/provenance/reward/v1/query.proto#L128-L136",children:"https://github.com/provenance-io/provenance/blob/243a89c76378bb5af8a8017e099ee04ac22e99ce/proto/provenance/reward/v1/query.proto#L128-L136"})]})]})}function h(e={}){const{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,r,n)=>{n.d(r,{Z:()=>d,a:()=>s});var a=n(67294);const o={},i=a.createContext(o);function s(e){const r=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:r},e.children)}}}]);