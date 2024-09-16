"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[5801],{59157:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var n=t(74848),a=t(28453);const i={},o="Validator Details",r={id:"discover/explorer/ui-walkthrough/staking-validators/validator-details",title:"Validator Details",description:"Details",source:"@site/docs/discover/explorer/ui-walkthrough/staking-validators/validator-details.md",sourceDirName:"discover/explorer/ui-walkthrough/staking-validators",slug:"/discover/explorer/ui-walkthrough/staking-validators/validator-details",permalink:"/docs/discover/explorer/ui-walkthrough/staking-validators/validator-details",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},d={},l=[{value:"Details",id:"details",level:2},{value:"Commission",id:"commission",level:2},{value:"Delegations",id:"delegations",level:2},{value:"Unbonding Delegations",id:"unbonding-delegations",level:2},{value:"Delegation Transactions",id:"delegation-transactions",level:2},{value:"Validation Transactions",id:"validation-transactions",level:2},{value:"Governance",id:"governance",level:2}];function c(e){const s={a:"a",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"validator-details",children:"Validator Details"}),"\n",(0,n.jsx)(s.h2,{id:"details",children:"Details"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Main Validator details",src:t(67718).A+"",width:"2726",height:"636"})}),"\n",(0,n.jsx)(s.p,{children:"The validator can be created with any name desired, as well as an icon image. These are then displayed to distinguish the validator from others similar to it."}),"\n",(0,n.jsx)(s.p,{children:"Information to note:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Operator Address"}),": the address associated with the validator itself"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Owner Address"}),': the address of the creating account. This address created the validator, and thus is considered its "Owner". It holds the keys to the validator, and thus submits all validator transactions on behalf of the validator']}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Withdraw Address"}),": the address that any commissions are withdrawn to. Initially set to the ",(0,n.jsx)(s.strong,{children:"Owner Address"}),", it can be updated to a different address."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Voting Power"}),": percentage of the latest validator set's total voting power"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Uptime"})," & ",(0,n.jsx)(s.strong,{children:"Missed Blocks"}),": missed blocks shows how many blocks the validator has missed consensus for since they were added to the blockchain as part of the active validator set. Uptime is the percentage representation of the ",(0,n.jsx)(s.strong,{children:"Missed Blocks"})," count"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Bond Height"}),": the block at which the validator was added to the blockchain"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Consensus Pubkey"}),": the address the validator uses in signing consensus for a block"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"commission",children:"Commission"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Validator Commission information",src:t(49701).A+"",width:"2740",height:"498"})}),"\n",(0,n.jsxs)(s.p,{children:["The validator can be created with a specified ",(0,n.jsx)(s.strong,{children:"Commission"})," rate, which can then be updated as the owner account deems necessary. "]}),"\n",(0,n.jsx)(s.p,{children:"Information to note:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Bonded Tokens"}),": the total Hash delegated to the validator. Comprised of ",(0,n.jsx)(s.strong,{children:"Self-Bonded"})," and ",(0,n.jsx)(s.strong,{children:"Delegator"})," shares"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Total Shares"}),": total Hash held by the validator's delegators"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Commission Rewards"}),": total rewards earned by the validator as commission "]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Commission Rate Range"}),": a range of values that the commission rate can be set to. Defined at validator creation, the maximum rate cannot be changed"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"Max Change Rate"}),": the maximum daily increase of the validator commission rate"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"delegations",children:"Delegations"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(72277).A+"",width:"1394",height:"838"})}),"\n",(0,n.jsx)(s.p,{children:"A list of delegations made to the validator. They are all active delegations."}),"\n",(0,n.jsx)(s.h2,{id:"unbonding-delegations",children:"Unbonding Delegations"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(42718).A+"",width:"1362",height:"830"})}),"\n",(0,n.jsx)(s.p,{children:"A list of unbonding delegations made against the validator. These are transactions where the delegator has decided to unbond from the validator. These are active unbonding actions."}),"\n",(0,n.jsx)(s.h2,{id:"delegation-transactions",children:"Delegation Transactions"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(91807).A+"",width:"2744",height:"1110"})}),"\n",(0,n.jsx)(s.p,{children:"A list of transactions affecting the validator's delegation spread. "}),"\n",(0,n.jsx)(s.h2,{id:"validation-transactions",children:"Validation Transactions"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{src:t(37171).A+"",width:"2736",height:"1116"})}),"\n",(0,n.jsx)(s.p,{children:"A list of transactions affecting the validator itself, ie. commission updates or unjailing requests. "}),"\n",(0,n.jsx)(s.h2,{id:"governance",children:"Governance"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"A list of transactions affecting governance proposals",src:t(19566).A+"",width:"2754",height:"506"})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"A list of proposals the validator has voted upon",src:t(51441).A+"",width:"2752",height:"490"})}),"\n",(0,n.jsxs)(s.p,{children:["A validator holds the ability submit and deposit on a ",(0,n.jsx)(s.a,{href:"/docs/pb/ecosystem/governance/",children:(0,n.jsx)(s.strong,{children:"Governance Proposal"})}),". It also has the ability to vote on ",(0,n.jsx)(s.strong,{children:"Governance Proposals"})," on behalf of its delegators."]})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},37171:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/validation-tx-5878a788b696257876c8124d0f363ba5.png"},49701:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/validator-commission-0022d06d82d8412d00166df3da49961e.png"},91807:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/validator-delegation-tx-855dc10319ca9eea507980f09754e907.png"},42718:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/validator-delegations-unbond-b8a2c3e7b6a8d78ce7368cb3515a6043.png"},72277:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/validator-delegations-18d3dec10874dc22ec9900879be7f8e1.png"},67718:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/validator-details-c48743080c8f035247ccef905016e4e1.png"},19566:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/validator-governance-3f2a829a854f78ccc20aa53c3157ce4f.png"},51441:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/validator-proposals-b1c07fe65c9d92b3e40247887076e6ca.png"},28453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>r});var n=t(96540);const a={},i=n.createContext(a);function o(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);