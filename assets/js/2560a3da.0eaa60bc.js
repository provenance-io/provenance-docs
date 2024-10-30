"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[283],{9897:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>x,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=i(74848),n=i(28453),l=i(41306);const r={},a="Fees/Distribution",o={id:"pb/ecosystem/financial-services-blockchain/distribution",title:"Fees/Distribution",description:"What is gas?",source:"@site/docs/pb/ecosystem/financial-services-blockchain/distribution.md",sourceDirName:"pb/ecosystem/financial-services-blockchain",slug:"/pb/ecosystem/financial-services-blockchain/distribution",permalink:"/docs/pb/ecosystem/financial-services-blockchain/distribution",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Financial Services Blockchain",permalink:"/docs/pb/ecosystem/financial-services-blockchain/"},next:{title:"Governance",permalink:"/docs/pb/ecosystem/governance/"}},d={},c=[{value:"What is gas?",id:"what-is-gas",level:2},{value:"Meter",id:"meter",level:3},{value:"Price",id:"price",level:3},{value:"Operation Gas Estimates",id:"operation-gas-estimates",level:3},{value:"Fees",id:"fees",level:2},{value:"Distribution",id:"distribution",level:2},{value:"Voting Validators",id:"voting-validators",level:3},{value:"Proposing Validator Bonus",id:"proposing-validator-bonus",level:3},{value:"Delegates",id:"delegates",level:3},{value:"Stake At Risk",id:"stake-at-risk",level:3},{value:"Fee Distribution Hierarchy",id:"fee-distribution-hierarchy",level:3},{value:"Current Fees",id:"current-fees",level:3},{value:"Example",id:"example",level:3}];function h(e){const t={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.header,{children:(0,s.jsx)(t.h1,{id:"feesdistribution",children:"Fees/Distribution"})}),"\n","\n",(0,s.jsx)(l.Y,{text:"Explanation of how fees are collected and distributed among the many network participants."}),"\n",(0,s.jsx)(t.h2,{id:"what-is-gas",children:"What is gas?"}),"\n",(0,s.jsx)(t.p,{children:"Gas is a consumable that is used to power the Provenance blockchain. Each execution of the blockchain requires enough gas to complete the requires reads, writes, and computation encompassed by the submitted transaction(s). When using gas you need to know two things:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"How much gas do I need to process my transaction?"}),"\n",(0,s.jsx)(t.li,{children:"What is the current price of gas?"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Before each transaction invoked on Provenance an estimate of the amount gas you need is made. The estimated gas needed is the maximum you'll pay for the given transaction. Over estimating will lead to purchasing more gas than needed and under estimating will cause the submitted transaction to fail due to running out of gas."}),"\n",(0,s.jsx)(t.h3,{id:"meter",children:"Meter"}),"\n",(0,s.jsx)(t.p,{children:"When a transaction starts processing the meter is set at to the estimated amount of gas and the measurement of usage decreases the amount of available gas for the transaction based on network usage. If the transaction completes without running out the meter it will be committed to the blockchain. If the meter arrives at zero before the transaction is complete the blockchain will reject the transaction and the gas has been consumed. In this case it is beneficial to be slightly higher on gas estimates to avoid paying for a transaction that is rejected."}),"\n",(0,s.jsx)(t.h3,{id:"price",children:"Price"}),"\n",(0,s.jsx)(t.p,{children:"Gas is purchased with Hash, the Provenance utility token."}),"\n",(0,s.jsx)(t.h3,{id:"operation-gas-estimates",children:"Operation Gas Estimates"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Operation"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Low"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"High"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"transfer coins"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"70000"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"70000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"name_bound"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"64000"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"64000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"account_attribute_added"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"70000"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"70000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"account_attribute_deleted"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"55000"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"55000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"contract spec loaded"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"2800000"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"3600000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"scope created"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"233000"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1000000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"scope updated"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"90000"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"110000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"scope change owner"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"75000"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"75000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"marker created"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"75000"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"75000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"marker supply"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"60000"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"60000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"marker permissions"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"60000"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"60000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"marker finalize"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"60000"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"60000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"marker activate"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"100000"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"100000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"marker mint"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"85000"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"90000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"marker burn"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"85000"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"90000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"bilateral exchange"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"105000"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"105000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"multilateral exchange"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"105000"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1050000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"smart contract create (Require governance vote)"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"6320000"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"20000000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"smart contract init"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1000000"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1000000"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"smart contract exec"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"140000"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"140000"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"fees",children:"Fees"}),"\n",(0,s.jsxs)(t.p,{children:["Fees are the total amount of Hash collected for consumed gas during the processing and minting of a block on Provenance. ",(0,s.jsx)(t.strong,{children:"Community"})," and ",(0,s.jsx)(t.strong,{children:"Block Proposer"})," fees are set by governance proposals allowing Hash holders to vote to adjust these fee percentages as necessary. Delegators can choose validators that have a lower commission to optimize the amount of fees collected from the network."]}),"\n",(0,s.jsx)(t.h2,{id:"distribution",children:"Distribution"}),"\n",(0,s.jsxs)(t.p,{children:["All fees that are collected by the validator network are distributed to rewarding Provenance ",(0,s.jsx)(t.a,{href:"../community/participants.md",children:"participants"})," for providing value in the various roles."]}),"\n",(0,s.jsx)(t.h3,{id:"voting-validators",children:"Voting Validators"}),"\n",(0,s.jsx)(t.p,{children:"All validators that vote on the proposed block are assigned a portion of the fees. Each validator receives a portion equivalent to their percentage of the overall voting power minus the Community Tax."}),"\n",(0,s.jsx)(t.h3,{id:"proposing-validator-bonus",children:"Proposing Validator Bonus"}),"\n",(0,s.jsx)(t.p,{children:"A node that is part of the active validator set will eventually be selected to handle proposing a new block to the chain. During this process the validator is responsible for collecting transactions and cutting a proposed block for other validators to vote on. As a reward for performing these functions the proposing validator is allocated an additional share of the fees that is calculated based on the [base_reward + bonus_amount*validators_overall_percentage_of_voting_power]."}),"\n",(0,s.jsx)(t.h3,{id:"delegates",children:"Delegates"}),"\n",(0,s.jsx)(t.p,{children:"The validator's pool of fees is further broken down during distribution with a percentage reserved for the validator node operator (the commission), and the remaining amount distributed among all stakeholders according to their delegation percentage of the overall amount assigned to the validator. This means that if an account has delegated 25% of the total stake (aka the voting power for the validator) then they are entitled to 25% of the fees awarded to the validator for cutting a block (less commission)."}),"\n",(0,s.jsx)(t.h3,{id:"stake-at-risk",children:"Stake At Risk"}),"\n",(0,s.jsx)(t.p,{children:'Delegation of stake against a validator node is considered "at risk" meaning that if a validator performs a network fault the stake assigned to the validator node will be slashed (meaning a percentage is forfeit). This currently can happen in two ways. The first is if a validator node is a member of the active set of validators and the node fails to sign enough blocks within a given window (for example of the server is offline). This will result in a minor penalty and the removal of the validator node from the active set. A more serious error is the double signing infraction. This occurs if the validator submits more than one signature for a block. When this infraction is detected the validator is assessed a very serious penalty and banned from the network. This is because this behavior has very severe consequences for the network stability.'}),"\n",(0,s.jsx)(t.h3,{id:"fee-distribution-hierarchy",children:"Fee Distribution Hierarchy"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Community - pool of Hash that can be used to enhance and maintain Provenance"}),"\n",(0,s.jsx)(t.li,{children:"Block Proposer - an additional bonus given to the validator that proposed the block"}),"\n",(0,s.jsx)(t.li,{children:"Validator Commission - percentage of the fee that is taken as commission by a validator"}),"\n",(0,s.jsx)(t.li,{children:"Delegators"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"current-fees",children:"Current Fees"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(t.th,{style:{textAlign:"left"},children:"Percentage"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Community"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"2%"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Block Proposer"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"1% to 6%"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Validator Commission"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"5% to 100%"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Delegators"}),(0,s.jsx)(t.td,{style:{textAlign:"left"},children:"Remaining"})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"Here is an example distribution of Hash collected during a transaction."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"Validators:"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Validator A - 20% commission"}),"\n",(0,s.jsx)(t.li,{children:"Validator B - 50% commission"}),"\n",(0,s.jsx)(t.li,{children:"Validator C - 1% commission"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"A proposed transaction uses 1000 gas and each unit of gas costs 0.5 Hash. In this scenario we can expect the network to collect 500 Hash in fees that need to be distributed. When the distribution takes place it goes through the fee distribution process and allocates:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Community"})," would receive 5% of the total transaction fees (500 x .05) or 25 Hash."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Validator A"})," proposed the block and receives a 6% bonus because all validator signatures were collected. The remaining Hash available after the community pool allocation was 475 Hash. ",(0,s.jsx)(t.strong,{children:"Validator A"})," would collect (475 * .06) or 28.5 Hash."]}),"\n",(0,s.jsx)(t.li,{children:"Validators now receive the remaining 446.5 Hash split among them or 148.333 Hash each."}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Validator A"})," charges a commission of 20% - (148.333 * .2) or 29.6666 Hash"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Validator B"})," charges a commission of 50% - (148.333 * .5) or 74.1665 Hash"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Validator C"})," charges a commission of 1% - (148.333 * .01) or 1.48333 Hash"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Delegators"})," receive the remaining portion of Hash after commission on the validator they have delegated to on a pro rata basis."]}),"\n"]})]})}function x(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},41306:(e,t,i)=>{i.d(t,{Y:()=>n});i(96540);var s=i(74848);const n=e=>{let{text:t}=e;return(0,s.jsx)("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500",children:t})}},28453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var s=i(96540);const n={},l=s.createContext(n);function r(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);