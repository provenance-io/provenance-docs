"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[4982],{9310:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>t,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var a=r(85893),i=r(11151);const d={},t="State Transitions",l={id:"sdk/reward/state_transitions",title:"state_transitions",description:"\x3c!--",source:"@site/docs/sdk/reward/03_state_transitions.md",sourceDirName:"sdk/reward",slug:"/sdk/reward/state_transitions",permalink:"/docs/sdk/reward/state_transitions",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"state",permalink:"/docs/sdk/reward/state"},next:{title:"messages",permalink:"/docs/sdk/reward/messages"}},s={},c=[{value:"Reward Programs",id:"reward-programs",level:2},{value:"Note",id:"note",level:4},{value:"Pending",id:"pending",level:3},{value:"Note",id:"note-1",level:4},{value:"Started",id:"started",level:3},{value:"Note",id:"note-2",level:4},{value:"Finished",id:"finished",level:3},{value:"Expired",id:"expired",level:3},{value:"Reward Claims",id:"reward-claims",level:2},{value:"Unclaimable",id:"unclaimable",level:3},{value:"Claimable",id:"claimable",level:3},{value:"Claimed",id:"claimed",level:3},{value:"Expired",id:"expired-1",level:3}];function o(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"state-transitions",children:"State Transitions"}),"\n",(0,a.jsx)(n.p,{children:"This document describes the state transition operations involved in the rewards module."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#reward-programs",children:"Reward Programs"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#pending",children:"Pending "})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#started",children:"Started "})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#finished",children:"Finished "})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#expired",children:"Expired"})}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"#reward-claims",children:"Reward Claims"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#unclaimable",children:"Unclaimable"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#claimable",children:"Claimable"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#claimed",children:"Claimed"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"#expired",children:"Expired"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"reward-programs",children:"Reward Programs"}),"\n",(0,a.jsxs)(n.p,{children:["State transition for Reward Programs happen on ",(0,a.jsx)(n.code,{children:"BeginBlock"})," and make use of the ",(0,a.jsx)(n.code,{children:"BlockTime"})," attribute."]}),"\n",(0,a.jsxs)(n.p,{children:["A Reward Program can be ",(0,a.jsx)(n.code,{children:"Pending"}),", ",(0,a.jsx)(n.code,{children:"Started"}),", ",(0,a.jsx)(n.code,{children:"Finished"}),", or ",(0,a.jsx)(n.code,{children:"Expired"}),". A Reward Program will move through all these states, and will initially be in the ",(0,a.jsx)(n.code,{children:"Pending"})," state."]}),"\n",(0,a.jsx)(n.h4,{id:"note",children:"Note"}),"\n",(0,a.jsxs)(n.p,{children:["A Reward Program creator may end a Reward Program early while it's in ",(0,a.jsx)(n.code,{children:"Pending"})," or ",(0,a.jsx)(n.code,{children:"Started"})," state. A Reward Program in the ",(0,a.jsx)(n.code,{children:"Pending"})," state will be deleted and not progress through all the states. Any program that is ended after it's in the ",(0,a.jsx)(n.code,{children:"Started"})," state will transition to the ",(0,a.jsx)(n.code,{children:"Finished"})," state on the next ",(0,a.jsx)(n.code,{children:"BeginBlock"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"pending",children:"Pending"}),"\n",(0,a.jsxs)(n.p,{children:["Reward program has ",(0,a.jsx)(n.em,{children:"not"})," started."]}),"\n",(0,a.jsx)(n.h4,{id:"note-1",children:"Note"}),"\n",(0,a.jsxs)(n.p,{children:["A user may force a Reward Program in this state to end with the ",(0,a.jsx)(n.code,{children:"end-reward-program"})," transaction. In this case the Reward Program will be deleted and not progress."]}),"\n",(0,a.jsx)(n.h3,{id:"started",children:"Started"}),"\n",(0,a.jsx)(n.p,{children:"The Reward Program has started, and users can participate by performing qualifying actions. Participants can claim their rewards at the end of the claim period that the qualifying action was performed in."}),"\n",(0,a.jsx)(n.h4,{id:"note-2",children:"Note"}),"\n",(0,a.jsxs)(n.p,{children:["A user may force a Reward Program in this state to end with the ",(0,a.jsx)(n.code,{children:"end-reward-program"})," transaction. The Reward Program will transition to the ",(0,a.jsx)(n.code,{children:"Finished"})," state on the next ",(0,a.jsx)(n.code,{children:"BeginBlock"}),"."]}),"\n",(0,a.jsx)(n.h3,{id:"finished",children:"Finished"}),"\n",(0,a.jsx)(n.p,{children:"The Reward Program has ended, and participants can no longer make qualifying actions. Participants have a limited amount of time to collect their remaining rewards."}),"\n",(0,a.jsx)(n.h3,{id:"expired",children:"Expired"}),"\n",(0,a.jsx)(n.p,{children:"Reward program has passed its expiration date, and participants can no longer claim rewards. The remaining balance and any unclaimed rewards will be returned to the creator."}),"\n",(0,a.jsx)("p",{align:"center",children:(0,a.jsx)("img",{src:"./diagrams/reward-program/RewardProgram.png"})}),"\n",(0,a.jsx)(n.h2,{id:"reward-claims",children:"Reward Claims"}),"\n",(0,a.jsxs)(n.p,{children:["State transitions for a Reward Claim happen on ",(0,a.jsx)(n.code,{children:"BeginBlock"})," and on claim transactions."]}),"\n",(0,a.jsxs)(n.p,{children:["A Reward Claim can be ",(0,a.jsx)(n.code,{children:"Unclaimable"}),", ",(0,a.jsx)(n.code,{children:"Claimable"}),", ",(0,a.jsx)(n.code,{children:"Claimed"}),", or ",(0,a.jsx)(n.code,{children:"Expired"}),". A Reward Claim will always start as ",(0,a.jsx)(n.code,{children:"Unclaimable"})," and eventually become ",(0,a.jsx)(n.code,{children:"Claimable"}),". If a participant claims their reward then the Reward Claim will become ",(0,a.jsx)(n.code,{children:"Claimed"}),", otherwise it will timeout and enter the ",(0,a.jsx)(n.code,{children:"Expired"})," state where they can no longer claim it."]}),"\n",(0,a.jsx)(n.h3,{id:"unclaimable",children:"Unclaimable"}),"\n",(0,a.jsx)(n.p,{children:"The reward has been granted to a participant, but it cannot be claimed until the current claim period ends."}),"\n",(0,a.jsx)(n.h3,{id:"claimable",children:"Claimable"}),"\n",(0,a.jsx)(n.p,{children:"The reward has been granted to the participant, and it's claimable by the participant via a transaction. If the reward is not claimed it will eventually expire."}),"\n",(0,a.jsx)(n.h3,{id:"claimed",children:"Claimed"}),"\n",(0,a.jsx)(n.p,{children:"The reward has been granted and received by the participant. A reward cannot be claimed more than once."}),"\n",(0,a.jsx)(n.h3,{id:"expired-1",children:"Expired"}),"\n",(0,a.jsx)(n.p,{children:"The reward has been cleaned up and the participant can no longer claim it. The funds attached to the reward claim are refunded back to the program creator."}),"\n",(0,a.jsx)("p",{align:"center",children:(0,a.jsx)("img",{src:"./diagrams/reward-claim/RewardClaim.png"})})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>l,a:()=>t});var a=r(67294);const i={},d=a.createContext(i);function t(e){const n=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);