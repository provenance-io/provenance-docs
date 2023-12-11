"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[6828],{18287:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>d,contentTitle:()=>l,default:()=>o,frontMatter:()=>n,metadata:()=>t,toc:()=>m});var r=s(85893),a=s(11151);const n={},l="Concepts",t={id:"sdk/reward/concepts",title:"concepts",description:"\x3c!--",source:"@site/docs/sdk/reward/01_concepts.md",sourceDirName:"sdk/reward",slug:"/sdk/reward/concepts",permalink:"/docs/sdk/reward/concepts",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"x/rewards",permalink:"/docs/sdk/reward/"},next:{title:"state",permalink:"/docs/sdk/reward/state"}},d={},m=[{value:"Reward Program",id:"reward-program",level:2},{value:"Qualifying Actions and Eligibility Criteria",id:"qualifying-actions-and-eligibility-criteria",level:2},{value:"Claim Period",id:"claim-period",level:2},{value:"Reward Claim",id:"reward-claim",level:2},{value:"Rollover",id:"rollover",level:2},{value:"Refunding",id:"refunding",level:2}];function c(e){const i={a:"a",annotation:"annotation",code:"code",h1:"h1",h2:"h2",li:"li",math:"math",mfrac:"mfrac",mi:"mi",mo:"mo",mrow:"mrow",p:"p",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"concepts",children:"Concepts"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"#reward-program",children:"Reward Program"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"#qualifying-actions-and-eligibility-criteria",children:"Qualifying Actions and Eligibility Criteria"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"#claim-period",children:"Claim Period"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"#reward-claim",children:"Reward Claim"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"#rollover",children:"Rollover"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.a,{href:"#refunding",children:"Refunding"})}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"reward-program",children:"Reward Program"}),"\n",(0,r.jsx)(i.p,{children:"Reward Programs are configurable campaigns that encourage users to participate in the Provenance Blockchain. Entities interested in creating a Reward Program will supply their new program with funds, set the duration of their program, and provide the participation requirements."}),"\n",(0,r.jsx)(i.h2,{id:"qualifying-actions-and-eligibility-criteria",children:"Qualifying Actions and Eligibility Criteria"}),"\n",(0,r.jsxs)(i.p,{children:["A ",(0,r.jsx)(i.code,{children:"Qualifying Action"})," is one or more transactions that a user performs on the Provenance Blockchain that has been listed within the ",(0,r.jsx)(i.code,{children:"Reward Program"}),". These actions are then evaluated against a set of criteria that are also defined within the ",(0,r.jsx)(i.code,{children:"Reward Program"})," known as ",(0,r.jsx)(i.code,{children:"Eligiblity Criteria"}),". Users become participants in the Reward Program by performing a ",(0,r.jsx)(i.code,{children:"Qualifying Action"})," and meeting all conditions specified by its ",(0,r.jsx)(i.code,{children:"Eligiblity Criteria"}),"."]}),"\n",(0,r.jsx)(i.h2,{id:"claim-period",children:"Claim Period"}),"\n",(0,r.jsxs)(i.p,{children:["A ",(0,r.jsx)(i.code,{children:"Reward Program"})," is split into one or more time intervals known as ",(0,r.jsx)(i.code,{children:"Claim Periods"}),". Each of these ",(0,r.jsx)(i.code,{children:"Claim Periods"})," gets an equal portion of the ",(0,r.jsx)(i.code,{children:"Reward Program Reward Pool"})," known as the ",(0,r.jsx)(i.code,{children:"Claim Period Reward Pool"}),". Users can participate within these ",(0,r.jsx)(i.code,{children:"Claim Periods"})," and are rewarded for their actions."]}),"\n",(0,r.jsx)(i.h2,{id:"reward-claim",children:"Reward Claim"}),"\n",(0,r.jsxs)(i.p,{children:["When a user participates in a ",(0,r.jsx)(i.code,{children:"Reward Program"})," they are granted one or more shares of the ",(0,r.jsx)(i.code,{children:"Claim Period Reward Pool"}),". Once the",(0,r.jsx)(i.code,{children:"Claim Period"})," ends, the participant will be able to claim their reward by performing a claim transaction. The participant's reward is proportional to their activity compared to everyone else within a ",(0,r.jsx)(i.code,{children:"Claim Period"}),". Users must claim their rewards before the ",(0,r.jsx)(i.code,{children:"Reward Program"})," expires. Additionally, users will be limited to ",(0,r.jsx)(i.code,{children:"max_reward_per_address"})," of the ",(0,r.jsx)(i.code,{children:"Claim Period Reward Pool"}),"."]}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsx)(i.strong,{children:"Reward For Claim Period"})}),"\n",(0,r.jsx)(i.p,{children:(0,r.jsxs)(i.span,{className:"katex",children:[(0,r.jsx)(i.span,{className:"katex-mathml",children:(0,r.jsx)(i.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(i.semantics,{children:[(0,r.jsxs)(i.mrow,{children:[(0,r.jsxs)(i.mrow,{children:[(0,r.jsx)(i.mo,{fence:"true",children:"("}),(0,r.jsx)(i.mi,{children:"C"}),(0,r.jsx)(i.mi,{children:"l"}),(0,r.jsx)(i.mi,{children:"a"}),(0,r.jsx)(i.mi,{children:"i"}),(0,r.jsx)(i.mi,{children:"m"}),(0,r.jsx)(i.mi,{children:"P"}),(0,r.jsx)(i.mi,{children:"e"}),(0,r.jsx)(i.mi,{children:"r"}),(0,r.jsx)(i.mi,{children:"i"}),(0,r.jsx)(i.mi,{children:"o"}),(0,r.jsx)(i.mi,{children:"d"}),(0,r.jsx)(i.mi,{children:"R"}),(0,r.jsx)(i.mi,{children:"e"}),(0,r.jsx)(i.mi,{children:"w"}),(0,r.jsx)(i.mi,{children:"a"}),(0,r.jsx)(i.mi,{children:"r"}),(0,r.jsx)(i.mi,{children:"d"}),(0,r.jsx)(i.mi,{children:"P"}),(0,r.jsx)(i.mi,{children:"o"}),(0,r.jsx)(i.mi,{children:"o"}),(0,r.jsx)(i.mi,{children:"l"}),(0,r.jsx)(i.mo,{fence:"true",children:")"})]}),(0,r.jsx)(i.mo,{children:"\xd7"}),(0,r.jsxs)(i.mrow,{children:[(0,r.jsx)(i.mo,{fence:"true",children:"("}),(0,r.jsxs)(i.mfrac,{children:[(0,r.jsxs)(i.mrow,{children:[(0,r.jsx)(i.mi,{children:"E"}),(0,r.jsx)(i.mi,{children:"a"}),(0,r.jsx)(i.mi,{children:"r"}),(0,r.jsx)(i.mi,{children:"n"}),(0,r.jsx)(i.mi,{children:"e"}),(0,r.jsx)(i.mi,{children:"d"}),(0,r.jsx)(i.mi,{children:"S"}),(0,r.jsx)(i.mi,{children:"h"}),(0,r.jsx)(i.mi,{children:"a"}),(0,r.jsx)(i.mi,{children:"r"}),(0,r.jsx)(i.mi,{children:"e"}),(0,r.jsx)(i.mi,{children:"s"})]}),(0,r.jsxs)(i.mrow,{children:[(0,r.jsx)(i.mi,{children:"C"}),(0,r.jsx)(i.mi,{children:"l"}),(0,r.jsx)(i.mi,{children:"a"}),(0,r.jsx)(i.mi,{children:"i"}),(0,r.jsx)(i.mi,{children:"m"}),(0,r.jsx)(i.mi,{children:"P"}),(0,r.jsx)(i.mi,{children:"e"}),(0,r.jsx)(i.mi,{children:"r"}),(0,r.jsx)(i.mi,{children:"i"}),(0,r.jsx)(i.mi,{children:"o"}),(0,r.jsx)(i.mi,{children:"d"}),(0,r.jsx)(i.mi,{children:"S"}),(0,r.jsx)(i.mi,{children:"h"}),(0,r.jsx)(i.mi,{children:"a"}),(0,r.jsx)(i.mi,{children:"r"}),(0,r.jsx)(i.mi,{children:"e"}),(0,r.jsx)(i.mi,{children:"s"})]})]}),(0,r.jsx)(i.mo,{fence:"true",children:")"})]})]}),(0,r.jsx)(i.annotation,{encoding:"application/x-tex",children:"\\left( ClaimPeriodRewardPool \\right) \\times \\left( EarnedShares \\over ClaimPeriodShares \\right) "})]})})}),(0,r.jsxs)(i.span,{className:"katex-html","aria-hidden":"true",children:[(0,r.jsxs)(i.span,{className:"base",children:[(0,r.jsx)(i.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,r.jsxs)(i.span,{className:"minner",children:[(0,r.jsx)(i.span,{className:"mopen delimcenter",style:{top:"0em"},children:"("}),(0,r.jsx)(i.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"Cl"}),(0,r.jsx)(i.span,{className:"mord mathnormal",children:"aim"}),(0,r.jsx)(i.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,r.jsx)(i.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"er"}),(0,r.jsx)(i.span,{className:"mord mathnormal",children:"i"}),(0,r.jsx)(i.span,{className:"mord mathnormal",children:"o"}),(0,r.jsx)(i.span,{className:"mord mathnormal",children:"d"}),(0,r.jsx)(i.span,{className:"mord mathnormal",style:{marginRight:"0.00773em"},children:"R"}),(0,r.jsx)(i.span,{className:"mord mathnormal",children:"e"}),(0,r.jsx)(i.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,r.jsx)(i.span,{className:"mord mathnormal",children:"a"}),(0,r.jsx)(i.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,r.jsx)(i.span,{className:"mord mathnormal",children:"d"}),(0,r.jsx)(i.span,{className:"mord mathnormal",style:{marginRight:"0.13889em"},children:"P"}),(0,r.jsx)(i.span,{className:"mord mathnormal",children:"oo"}),(0,r.jsx)(i.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,r.jsx)(i.span,{className:"mclose delimcenter",style:{top:"0em"},children:")"})]}),(0,r.jsx)(i.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,r.jsx)(i.span,{className:"mbin",children:"\xd7"}),(0,r.jsx)(i.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,r.jsxs)(i.span,{className:"base",children:[(0,r.jsx)(i.span,{className:"strut",style:{height:"1.2301em",verticalAlign:"-0.35em"}}),(0,r.jsxs)(i.span,{className:"minner",children:[(0,r.jsx)(i.span,{className:"mopen delimcenter",style:{top:"0em"},children:(0,r.jsx)(i.span,{className:"delimsizing size1",children:"("})}),(0,r.jsxs)(i.span,{className:"mord",children:[(0,r.jsx)(i.span,{className:"mopen nulldelimiter"}),(0,r.jsx)(i.span,{className:"mfrac",children:(0,r.jsxs)(i.span,{className:"vlist-t vlist-t2",children:[(0,r.jsxs)(i.span,{className:"vlist-r",children:[(0,r.jsxs)(i.span,{className:"vlist",style:{height:"0.8801em"},children:[(0,r.jsxs)(i.span,{style:{top:"-2.655em"},children:[(0,r.jsx)(i.span,{className:"pstrut",style:{height:"3em"}}),(0,r.jsx)(i.span,{className:"sizing reset-size6 size3 mtight",children:(0,r.jsxs)(i.span,{className:"mord mtight",children:[(0,r.jsx)(i.span,{className:"mord mathnormal mtight",style:{marginRight:"0.01968em"},children:"Cl"}),(0,r.jsx)(i.span,{className:"mord mathnormal mtight",children:"aim"}),(0,r.jsx)(i.span,{className:"mord mathnormal mtight",style:{marginRight:"0.13889em"},children:"P"}),(0,r.jsx)(i.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02778em"},children:"er"}),(0,r.jsx)(i.span,{className:"mord mathnormal mtight",children:"i"}),(0,r.jsx)(i.span,{className:"mord mathnormal mtight",children:"o"}),(0,r.jsx)(i.span,{className:"mord mathnormal mtight",children:"d"}),(0,r.jsx)(i.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05764em"},children:"S"}),(0,r.jsx)(i.span,{className:"mord mathnormal mtight",children:"ha"}),(0,r.jsx)(i.span,{className:"mord mathnormal mtight",children:"res"})]})})]}),(0,r.jsxs)(i.span,{style:{top:"-3.23em"},children:[(0,r.jsx)(i.span,{className:"pstrut",style:{height:"3em"}}),(0,r.jsx)(i.span,{className:"frac-line",style:{borderBottomWidth:"0.04em"}})]}),(0,r.jsxs)(i.span,{style:{top:"-3.394em"},children:[(0,r.jsx)(i.span,{className:"pstrut",style:{height:"3em"}}),(0,r.jsx)(i.span,{className:"sizing reset-size6 size3 mtight",children:(0,r.jsxs)(i.span,{className:"mord mtight",children:[(0,r.jsx)(i.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05764em"},children:"E"}),(0,r.jsx)(i.span,{className:"mord mathnormal mtight",children:"a"}),(0,r.jsx)(i.span,{className:"mord mathnormal mtight",style:{marginRight:"0.02778em"},children:"r"}),(0,r.jsx)(i.span,{className:"mord mathnormal mtight",children:"n"}),(0,r.jsx)(i.span,{className:"mord mathnormal mtight",children:"e"}),(0,r.jsx)(i.span,{className:"mord mathnormal mtight",children:"d"}),(0,r.jsx)(i.span,{className:"mord mathnormal mtight",style:{marginRight:"0.05764em"},children:"S"}),(0,r.jsx)(i.span,{className:"mord mathnormal mtight",children:"ha"}),(0,r.jsx)(i.span,{className:"mord mathnormal mtight",children:"res"})]})})]})]}),(0,r.jsx)(i.span,{className:"vlist-s",children:"\u200b"})]}),(0,r.jsx)(i.span,{className:"vlist-r",children:(0,r.jsx)(i.span,{className:"vlist",style:{height:"0.345em"},children:(0,r.jsx)(i.span,{})})})]})}),(0,r.jsx)(i.span,{className:"mclose nulldelimiter"})]}),(0,r.jsx)(i.span,{className:"mclose delimcenter",style:{top:"0em"},children:(0,r.jsx)(i.span,{className:"delimsizing size1",children:")"})})]})]})]})]})}),"\n",(0,r.jsx)(i.h2,{id:"rollover",children:"Rollover"}),"\n",(0,r.jsxs)(i.p,{children:["It is possible that not all of the ",(0,r.jsx)(i.code,{children:"Claim Period Reward Pool"})," will be distributed. This can happen when there is not enough activity, and participants are gated by the ",(0,r.jsx)(i.code,{children:"max_reward_per_address"}),". The ",(0,r.jsx)(i.code,{children:"Reward Program"})," will attempt to move these funds into a ",(0,r.jsx)(i.code,{children:"Rollover Claim Period"}),". A ",(0,r.jsx)(i.code,{children:"Rollover Claim Period"})," behaves exactly like any other ",(0,r.jsx)(i.code,{children:"Claim Period"}),", but it is not guaranteed to have an equal portion of the original ",(0,r.jsx)(i.code,{children:"Reward Program Reward Pool"}),". A ",(0,r.jsx)(i.code,{children:"Reward Program"})," may run up to ",(0,r.jsx)(i.code,{children:"max_rollover_claim_periods"}),", but is not guaranteed to run any of them. This is dependent on user activity, ",(0,r.jsx)(i.code,{children:"program_end_time_max"})," field, and the ",(0,r.jsx)(i.code,{children:"minimum_rollover_amount"})," field. Currently, the ",(0,r.jsx)(i.code,{children:"minimum_rollover_amount"})," is set to 10% of the ",(0,r.jsx)(i.code,{children:"Claim Period Reward Pool"}),"."]}),"\n",(0,r.jsx)(i.h2,{id:"refunding",children:"Refunding"}),"\n",(0,r.jsxs)(i.p,{children:["When a ",(0,r.jsx)(i.code,{children:"Reward Program"})," ends it gives all participants ",(0,r.jsx)(i.code,{children:"expiration_offset"})," seconds to claim their rewards. After ",(0,r.jsx)(i.code,{children:"expiration_offset"})," seconds the ",(0,r.jsx)(i.code,{children:"Reward Program"})," expires and prevents participants from claiming. The unclaimed rewards and any funds still remaining within the ",(0,r.jsx)(i.code,{children:"Reward Program Reward Pool"})," will be given back to the creator."]})]})}function o(e={}){const{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},11151:(e,i,s)=>{s.d(i,{Z:()=>t,a:()=>l});var r=s(67294);const a={},n=r.createContext(a);function l(e){const i=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(n.Provider,{value:i},e.children)}}}]);