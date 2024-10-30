"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[3034],{51185:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var n=t(74848),s=t(28453);const r={},i="Governance",a={id:"pb/ecosystem/governance/voting",title:"Governance",description:"Provenance Blockchain provides a governance system through which stakeholders can participate in network decisions.",source:"@site/docs/pb/ecosystem/governance/voting.md",sourceDirName:"pb/ecosystem/governance",slug:"/pb/ecosystem/governance/voting",permalink:"/docs/pb/ecosystem/governance/voting",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Governance",permalink:"/docs/pb/ecosystem/governance/"},next:{title:"Software Upgrade Proposals",permalink:"/docs/pb/ecosystem/governance/software-upgrade-proposal"}},c={},l=[{value:"Deposit Stage",id:"deposit-stage",level:2},{value:"Voting Period",id:"voting-period",level:2},{value:"Tallying Results",id:"tallying-results",level:2},{value:"Governance Configuration",id:"governance-configuration",level:2}];function d(e){const o={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.header,{children:(0,n.jsx)(o.h1,{id:"governance",children:"Governance"})}),"\n",(0,n.jsx)(o.p,{children:"Provenance Blockchain provides a governance system through which stakeholders can participate in network decisions.\nProposals can be simple statements or initiatives to change network configuration, perform software upgrades, and more."}),"\n",(0,n.jsxs)(o.p,{children:["Voting is the process of assigning active stake to one of four different states for a proposal: ",(0,n.jsx)(o.code,{children:"yes"}),", ",(0,n.jsx)(o.code,{children:"no"}),", ",(0,n.jsx)(o.code,{children:"abstain"}),",\nor\n",(0,n.jsx)(o.code,{children:"veto"}),". Each actively staked Hash corresponds to one vote. The governance voting process is broken down into three\nstages:\nDeposit, Voting, and Tallying results."]}),"\n",(0,n.jsx)(o.h2,{id:"deposit-stage",children:"Deposit Stage"}),"\n",(0,n.jsx)(o.p,{children:"Anyone can submit a proposal to the Provenance network for stake holders to review. Proposals must meet the minimum\nrequired deposit of 50,000 HASH to proceed to the voting stage. A proposal has up to 48 hours to collect enough deposits\nto become eligible for voting. If the proposal does not achieve quorum or the proposal is vetoed, the deposits are\nforfeit."}),"\n",(0,n.jsx)(o.h2,{id:"voting-period",children:"Voting Period"}),"\n",(0,n.jsx)(o.p,{children:"During the 48-hour voting period, validators and delegators may place their votes of Yes, No, Abstain, or No with Veto.\nWhen a validator votes, the total of their delegations is applied as weight to their choice. Their individual delegators\ncan accept the vote of the validator they have staked against or explicitly vote their intention, which will take\nprecedence over the validator's vote."}),"\n",(0,n.jsx)(o.h2,{id:"tallying-results",children:"Tallying Results"}),"\n",(0,n.jsx)(o.p,{children:"At the end of the voting period, the cast votes are tallied according to the following thresholds to determine if a\nproposal passes or not:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Quorum"}),": At least ",(0,n.jsx)(o.strong,{children:"33.4%"})," of the active state in the network must vote on a proposal for the vote to be\nconsidered valid. If quorum is not reached, the proposal fails."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"Threshold"}),": Of the votes cast, at least ",(0,n.jsx)(o.strong,{children:"50%"})," must be Yes votes for the proposal to pass."]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"No with Veto"}),": If more than ",(0,n.jsx)(o.strong,{children:"33.4%"})," of the votes are cast as a No with Veto, The measure fails, regardless of if over\n50% of the votes were Yes. This last option allows a minority stakeholder to prevent a measure from passing even if\nthe majority endorses it."]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:"If the majority of a proposal vote exceeds quorum and is not vetoed, the proposal is passed at the end of the voting\nperiod. Certain proposals such as software upgrades have their effects applied at this time."}),"\n",(0,n.jsx)(o.h2,{id:"governance-configuration",children:"Governance Configuration"}),"\n",(0,n.jsxs)(o.p,{children:["Current governance configuration parameters can be viewed on the\n",(0,n.jsx)(o.a,{href:"https://explorer.provenance.io/network/params",children:"Explorer"})," (see the ",(0,n.jsx)(o.code,{children:"Gov"})," configuration section)."]})]})}function h(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,o,t)=>{t.d(o,{R:()=>i,x:()=>a});var n=t(96540);const s={},r=n.createContext(s);function i(e){const o=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);