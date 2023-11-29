"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[9785],{73042:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>h,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(85893),t=a(11151),i=a(98677);const r={},o="Token Economics",l={id:"pb/ecosystem/financial-services-blockchain/token-economics",title:"Token Economics",description:"The Hash Token and Fees",source:"@site/docs/pb/ecosystem/financial-services-blockchain/token-economics.md",sourceDirName:"pb/ecosystem/financial-services-blockchain",slug:"/pb/ecosystem/financial-services-blockchain/token-economics",permalink:"/docs/pb/ecosystem/financial-services-blockchain/token-economics",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Financial Services Blockchain",permalink:"/docs/pb/ecosystem/financial-services-blockchain/"},next:{title:"Fees/Distribution",permalink:"/docs/pb/ecosystem/financial-services-blockchain/distribution"}},h={},c=[{value:"The Hash Token and Fees",id:"the-hash-token-and-fees",level:2},{value:"Staking Hash",id:"staking-hash",level:2},{value:"Validator Rewards",id:"validator-rewards",level:2},{value:"Validator Commission",id:"validator-commission",level:2},{value:"Validator earned fees",id:"validator-earned-fees",level:2},{value:"Provenance Blockchain slashing policy",id:"provenance-blockchain-slashing-policy",level:2},{value:"Fee calculation example",id:"fee-calculation-example",level:2},{value:"Initial validator incentive",id:"initial-validator-incentive",level:2},{value:"Gas and transaction fees",id:"gas-and-transaction-fees",level:2}];function d(e){const s={a:"a",annotation:"annotation",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",math:"math",mi:"mi",mo:"mo",mrow:"mrow",msub:"msub",p:"p",semantics:"semantics",span:"span",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"token-economics",children:"Token Economics"}),"\n","\n","\n",(0,n.jsx)(i.Y,{text:"Provenance Blockchain - Foundationally transforming financial services"}),"\n",(0,n.jsx)(s.h2,{id:"the-hash-token-and-fees",children:"The Hash Token and Fees"}),"\n",(0,n.jsxs)(s.p,{children:["Provenance Blockchain's utility token is called ",(0,n.jsx)(s.strong,{children:"Hash"}),'. There are 100 billion Hash tokens in circulation, and no new\ntokens can be created or destroyed. However, Hash can be "slashed" during staking[^1].']}),"\n",(0,n.jsx)(s.p,{children:"Hash has three use cases: as a spam-prevention mechanism, as a staking token, and as a voting mechanism in governance."}),"\n",(0,n.jsx)(s.p,{children:"Transactions and activities on the Provenance Blockchain platform incur gas fees, community fees, and smart contract\nfees, all of which are paid in Hash. While community and smart contract fees may be quoted in fiat, all fee distribution\nis ultimately in Hash."}),"\n",(0,n.jsx)(s.p,{children:"Gas fees are paid to validators and their delegates, while community fees are currently distributed to all delegated\nHash holders. This incentivizes delegation and network participation. Smart contract fees, on the other hand, go to\nsmart contract owners or designated recipients."}),"\n",(0,n.jsx)(s.p,{children:"It's worth noting that all fees are paid in Hash. This means that participants must pay fees directly in Hash."}),"\n",(0,n.jsx)(s.p,{children:"The number of minted Hash remains constant, and no new Hash is minted as reward for work. As a result, there is no\ninflation of the Hash value through the new influx of Hash."}),"\n",(0,n.jsxs)(s.p,{children:["To learn more about acquiring Hash, please refer\nto ",(0,n.jsx)(s.a,{href:"https://provenance.io/purchase-hash",children:"Provenance's guide on acquiring Hash"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["[^1] ",(0,n.jsx)(s.em,{children:'Validators on the Provenance Blockchain network are responsible for adding new blocks to the chain and ensuring\nthe validity of transactions. If a validator is found to be acting in bad faith or not following the network\'s rules,\nthey may be "slashed", which means that a portion of their staked tokens (including the tokens staked by their\ndelegators)\nwill be locked up for a certain period of time. This is intended to disincentivize bad behavior and promote network\nsecurity and stability.'})]}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Token Type"}),(0,n.jsx)(s.th,{children:"Hash"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Total Supply"}),(0,n.jsx)(s.td,{children:"100 Billion"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Total Planned Inflation"}),(0,n.jsx)(s.td,{children:"None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Inflation Rate"}),(0,n.jsx)(s.td,{children:"None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Maximum Stake"}),(0,n.jsx)(s.td,{children:"None"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Minimum Stake"}),(0,n.jsx)(s.td,{children:"1 Hash"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Unbonding/Undelegating period"}),(0,n.jsx)(s.td,{children:"21 days"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Initial Active Set Size"}),(0,n.jsx)(s.td,{children:"100 validators"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"Community pool"}),(0,n.jsx)(s.td,{children:"7%"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:"TODO add initial allocation"}),"\n",(0,n.jsx)(s.h2,{id:"staking-hash",children:"Staking Hash"}),"\n",(0,n.jsx)(s.p,{children:"The Provenance Blockchain network is a public Proof-Of-Stake (PoS) blockchain. Validators on the network are weighted\nbased on the amount of staking tokens (Hash) bonded to them as collateral. These tokens can be self-delegated directly\nby the validator or delegated to them by other Hash holders."}),"\n",(0,n.jsx)(s.p,{children:"Any Hash holder can delegate some or all of their tokens to any number of validators in order to stake their tokens. If\na Hash holder wants to become a validator, they can send a create-validator transaction to the network, at which point\nthey become a validator candidate."}),"\n",(0,n.jsxs)(s.p,{children:["The voting power of a validator determines whether or not they are an active validator. Only the top ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsxs)(s.msub,{children:[(0,n.jsx)(s.mi,{children:"N"}),(0,n.jsx)(s.mi,{children:"v"})]})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"N_v"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10903em"},children:"N"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(s.span,{className:"vlist-r",children:[(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.1514em"},children:(0,n.jsxs)(s.span,{style:{top:"-2.55em",marginLeft:"-0.109em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mathnormal mtight",style:{marginRight:"0.03588em"},children:"v"})})]})}),(0,n.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(s.span,{})})})]})})]})]})})]})," validators\nwith the most voting power will be active validators, known as the Active Set. Only validators in the Active Set, and by\nassociation those who delegated to them, receive rewards and have the right to participate in governance."]}),"\n",(0,n.jsx)(s.p,{children:"If a validator or a delegator wishes to remove part or all of their deposit from the staking pool, they send an\nunbonding transaction to the Provenance Blockchain. The unbonding process takes three weeks, during which time the owner\nof the staking tokens can still earn transaction fees and participate in governance. However, they are still liable to\nbeing penalized for potential misbehaviors committed by the validator before the unbonding process started."}),"\n",(0,n.jsx)(s.p,{children:"If a delegator wishes to move their stake between validators but not remove it from the staking pool, they may issue a\nredelegation. A redelegation is an instant transfer in voting power from one validator to another, but it does not have\nany impact on the required three-week unbonding period."}),"\n",(0,n.jsx)(s.h2,{id:"validator-rewards",children:"Validator Rewards"}),"\n",(0,n.jsxs)(s.p,{children:["Validators are rewarded for their work on the Provenance Blockchain. The validator that proposes the next block on the\nchain is called the ",(0,n.jsx)(s.strong,{children:"proposer"}),". The frequency of being chosen as a proposer is proportional to the amount of staked Hash\ntokens, known as ",(0,n.jsx)(s.strong,{children:"voting power"}),", of the validator. For example, if a validator has 10% of the total staked Hash tokens\nacross all validators, then they will be the proposer for approximately 10% of the blocks."]}),"\n",(0,n.jsx)(s.p,{children:"Validators earn transaction fees in Hash tokens. The total fee for each transaction is divided among all validators'\nstaking pools based on each validator's weight. The revenue is further divided among delegators in proportion to each\ndelegator's stake. Before the revenue is distributed, the validator may apply a commission on the part of the revenue\nthat goes to their delegators. The commission is set as a percentage and can only change after the validator is\nestablished."}),"\n",(0,n.jsx)(s.h2,{id:"validator-commission",children:"Validator Commission"}),"\n",(0,n.jsx)(s.p,{children:"A validator's revenue is split between the validator and their delegators, and the validator can apply a commission on\nthe part of the revenue that goes to their delegators. Each validator is free to set their initial commission, maximum\ndaily commission change rate and maximum commission. Once established, only the commission rate can change. The\nProvenance Blockchain network enforces the parameters that each validator sets."}),"\n",(0,n.jsxs)(s.p,{children:["The commission-rate value ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsx)(s.mrow,{children:(0,n.jsxs)(s.msub,{children:[(0,n.jsx)(s.mi,{children:"C"}),(0,n.jsx)(s.mi,{children:"i"})]})}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"C_i"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(s.span,{className:"vlist-r",children:[(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(s.span,{style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,n.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(s.span,{})})})]})})]})]})})]}),":"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Must be between 0 and the validator's commission-max-rate ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsxs)(s.msub,{children:[(0,n.jsx)(s.mi,{children:"C"}),(0,n.jsx)(s.mi,{children:"i"})]}),(0,n.jsx)(s.mi,{children:"m"}),(0,n.jsx)(s.mi,{children:"a"}),(0,n.jsx)(s.mi,{children:"x"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"C_i max"})]})})}),(0,n.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(s.span,{className:"vlist-r",children:[(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(s.span,{style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,n.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(s.span,{})})})]})})]}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"ma"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"x"})]})})]})]}),"\n",(0,n.jsxs)(s.li,{children:["Must not exceed the validator's ",(0,n.jsxs)(s.span,{className:"katex",children:[(0,n.jsx)(s.span,{className:"katex-mathml",children:(0,n.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,n.jsxs)(s.semantics,{children:[(0,n.jsxs)(s.mrow,{children:[(0,n.jsxs)(s.msub,{children:[(0,n.jsx)(s.mi,{children:"C"}),(0,n.jsx)(s.mi,{children:"i"})]}),(0,n.jsx)(s.mi,{children:"m"}),(0,n.jsx)(s.mi,{children:"a"}),(0,n.jsx)(s.mi,{children:"x"}),(0,n.jsx)(s.mo,{children:"\u2212"}),(0,n.jsx)(s.mi,{children:"c"}),(0,n.jsx)(s.mi,{children:"h"}),(0,n.jsx)(s.mi,{children:"a"}),(0,n.jsx)(s.mi,{children:"n"}),(0,n.jsx)(s.mi,{children:"g"}),(0,n.jsx)(s.mi,{children:"e"})]}),(0,n.jsx)(s.annotation,{encoding:"application/x-tex",children:"C_i max-change"})]})})}),(0,n.jsxs)(s.span,{className:"katex-html","aria-hidden":"true",children:[(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.8333em",verticalAlign:"-0.15em"}}),(0,n.jsxs)(s.span,{className:"mord",children:[(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.07153em"},children:"C"}),(0,n.jsx)(s.span,{className:"msupsub",children:(0,n.jsxs)(s.span,{className:"vlist-t vlist-t2",children:[(0,n.jsxs)(s.span,{className:"vlist-r",children:[(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.3117em"},children:(0,n.jsxs)(s.span,{style:{top:"-2.55em",marginLeft:"-0.0715em",marginRight:"0.05em"},children:[(0,n.jsx)(s.span,{className:"pstrut",style:{height:"2.7em"}}),(0,n.jsx)(s.span,{className:"sizing reset-size6 size3 mtight",children:(0,n.jsx)(s.span,{className:"mord mathnormal mtight",children:"i"})})]})}),(0,n.jsx)(s.span,{className:"vlist-s",children:"\u200b"})]}),(0,n.jsx)(s.span,{className:"vlist-r",children:(0,n.jsx)(s.span,{className:"vlist",style:{height:"0.15em"},children:(0,n.jsx)(s.span,{})})})]})})]}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"ma"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"x"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}}),(0,n.jsx)(s.span,{className:"mbin",children:"\u2212"}),(0,n.jsx)(s.span,{className:"mspace",style:{marginRight:"0.2222em"}})]}),(0,n.jsxs)(s.span,{className:"base",children:[(0,n.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"c"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"han"}),(0,n.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"g"}),(0,n.jsx)(s.span,{className:"mord mathnormal",children:"e"})]})]})]})," which is maximum percent change rate ",(0,n.jsx)(s.strong,{children:"per day"}),". In other words, a\nvalidator can only change its commission once per day and within commission-max-change-rate bounds."]}),"\n",(0,n.jsx)(s.li,{children:"Can be 100%, which implies that that validator is not welcoming outside delegators since it pockets all rewards based\non its bonded stake."}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"validator-earned-fees",children:"Validator earned fees"}),"\n",(0,n.jsx)(s.p,{children:"Fees are similarly distributed with the exception that the block proposer can get a bonus on the fees of the block they\npropose if they include more than the strict minimum of required precommits."}),"\n",(0,n.jsx)(s.p,{children:"When a validator is selected to propose the next block, they must include at least 2/3 precommits of the block. However,\nthere is an incentive to include more than 2/3 precommits in the form of a bonus. The bonus is linear: it ranges from 1%\nif the proposer includes 2/3 precommits (minimum for the block to be valid) to 5% if the proposer includes 100%\nprecommits. Of course the proposer should not wait too long or other validators may timeout and move on to the next\nproposer. As such, validators have to find a balance between wait-time to get the most signatures and risk of losing out\non proposing the next block. This mechanism aims to incentivize non-empty block proposals, create better networking\nbetween validators and mitigate censorship."}),"\n",(0,n.jsx)(s.p,{children:"To summarize earned fee rules:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"Proposer is deterministically chosen from validators in the Active Set with frequency proportional to its total\nstake"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"The proposer gets a 1-5% bonus of its normal share based on included extra precommiters above 2/3 voting power"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"All validators in the Active Set receive a share of the fee proportional to their total stake"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.strong,{children:"Validators takes commissions before distributing fees to their delegators"})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"provenance-blockchain-slashing-policy",children:"Provenance Blockchain slashing policy"}),"\n",(0,n.jsx)(s.p,{children:"Staking Hash can be thought of as a security deposit on validation activities. If a validator misbehaves, their\ndelegated stake will be partially slashed. This means that every delegator that bonded Hash to this validator gets\npenalized in proportion to their bonded stake. Delegators are therefore incentivized to delegate to validators that they\nanticipate will function safely."}),"\n",(0,n.jsx)(s.p,{children:"There are currently two faults that can result in slashing of funds for a validator and their delegators:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Double signing: If someone reports on chain A that a validator signed two blocks at the same height on chain A and\nchain B, and if chain A and chain B share a common ancestor, then this validator will get slashed by 5% on chain A."}),"\n",(0,n.jsx)(s.li,{children:"Downtime: If a validator misses more than 99% of the last 10.000 blocks, they will get slashed by 1%."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:'When a validator node is slashed for one of the above penalties it is immediately removed from the active validator set\nand placed in a "jailed" state. A node may remove itself from the "jailed" status after a minimum cooling off period\nelapses by submitting an unjail transaction. During the jailed status period any delegator may choose to redelegate\ntheir stake to another validator on the network with the exception of the validator operator who must maintain at least\ntheir minimum stake threshold in their node.'}),"\n",(0,n.jsx)(s.h2,{id:"fee-calculation-example",children:"Fee calculation example"}),"\n",(0,n.jsx)(s.p,{children:"To better illustrate how validator rewards work, let us assume there are 10 validators in the Active Set and all have an\nequal stake. Each of the validators applies a 10% commission rate and has 20% of self-delegated Hash. Assume there is a\nsuccessful block added to the chain and a total of 1080.6 Hash was collected in fees."}),"\n",(0,n.jsx)(s.p,{children:"For example, if 7% of the fee goes to the Provenance Blockchain Foundation's community pool (used to fund the\nfoundation's day-to-day operations as well as the grant program) you can calculate the fees this way:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"7% * 1080.6 = 75.6"})," Hash goes to the community pool. "]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Note: the current rate can be found in the ",(0,n.jsx)(s.a,{href:"https://explorer.provenance.io/network/params",children:"Explorer"}),"."]}),"\n",(0,n.jsx)(s.p,{children:"1005 Hash now remain. Assume that the proposer included 100% of the precommitters\u2019 signatures in its block. The proposer\nthus obtains the full bonus of 5%. The reward R for each validator in the Active Set is determined by this simple\nequation:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.code,{children:"9*R + R + R*5% = 1005 \u21d4 R = 1005/10.05 = 100"})}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"For the proposer validator:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"The pool for that proposer obtains R + R * 5%: 105 Hash"}),"\n",(0,n.jsxs)(s.li,{children:["Commission: 105 ",(0,n.jsx)(s.em,{children:"80%"})," 10% = 8.4 Hash"]}),"\n",(0,n.jsx)(s.li,{children:"Validator's reward: 105 * 20% + Commission = 29.4 Hash"}),"\n",(0,n.jsx)(s.li,{children:"Delegators' rewards: 105 * 80% - Commission = 75.6 Hash (each delegator will be able to claim its portion of these\nrewards in proportion to their stake)"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"For each of the other 9 non-proposer validators:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"The pool for the validator obtains R: 100 Hash"}),"\n",(0,n.jsxs)(s.li,{children:["Commission: 100 ",(0,n.jsx)(s.em,{children:"80%"})," 10% = 8 Hash"]}),"\n",(0,n.jsx)(s.li,{children:"Validator's reward: 100 * 20% + Commission = 28 Hash"}),"\n",(0,n.jsx)(s.li,{children:"Delegators' rewards: 100 * 80% - Commission = 72 Hash (each delegator will be able to claim their portion of these\nrewards in proportion to their stake)"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"initial-validator-incentive",children:"Initial validator incentive"}),"\n",(0,n.jsx)(s.p,{children:"The network will provide an additional incentive for validators for the first six months after mainnet launch. This\nincentive will be 5% of the transaction fee - generally increasing validator returns by 50% assuming an average\ncommission rate of 10%."}),"\n",(0,n.jsx)(s.p,{children:"The way this will be administered is the community pool charge in the first six months will be 7% rather than the normal\n2%. This 5% will then be distributed to all validators in the Active Set."}),"\n",(0,n.jsx)(s.h2,{id:"gas-and-transaction-fees",children:"Gas and transaction fees"}),"\n",(0,n.jsx)(s.p,{children:"The amount of gas needed depends on the transaction as different types of transactions (e.g. making a payment or loading\na loan) require different amounts of resources to process. The gas amount for a transaction is calculated as it is being\nprocessed, but there is a way to estimate it beforehand by using the auto value for the gas flag. Users can adjust this\nestimate with the flag --gas-adjustment (default 1.0) if they want to be sure to provide enough gas for the transaction."}),"\n",(0,n.jsx)(s.p,{children:"The gasPrice is the price of each unit of gas. Transaction fees are the product of gas and gasPrice. Users must include\nthe fee being paid and the rate the gas will be converted with each transaction they send to the network. Too low a\ngasPrice or gas could result in the transaction not being included at all."}),"\n",(0,n.jsxs)(s.p,{children:["Each validator sets a min-gas-price value, and will only include transactions that have a gasPrice greater than their\nmin-gas-price. These full-nodes keep unconfirmed transactions in their mempools. In order to protect nodes from spam, it\nis best for validators to set a min-gas-price that the transaction must meet in order to be accepted in their node's\nmempool. This parameter can be set as a flag in the file ",(0,n.jsx)(s.code,{children:"%USER_OS_CONFIG_DIR%/Provenance/config/app.toml"})," or as a\nparameter in the ",(0,n.jsx)(s.code,{children:"provenanced"})," process."]}),"\n",(0,n.jsx)(s.p,{children:"At mainnet launch the recommended gasPrice is 1904 nHash where 1Hash = 1,000,000,000nHash"}),"\n",(0,n.jsx)(s.p,{children:"More details about gas:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Validators set their own respective minimum gas prices. This value can range from infinitesimally small (inexpensive)\nto relatively large (expensive)."}),"\n",(0,n.jsx)(s.li,{children:"When a transaction is broadcast to a node, it is run through the given validator's CheckTx function. If this passes,\nthe transaction is added to the node\u2019s mempool and broadcast to other nodes and validators."}),"\n",(0,n.jsx)(s.li,{children:"This transaction will sit in the node\u2019s mempool until it is accepted by a proposer."}),"\n",(0,n.jsx)(s.li,{children:"The transaction will be accepted by a proposer if it meets the given proposer's minimum gas price."}),"\n",(0,n.jsx)(s.li,{children:"If the transaction\u2019s gas price is below the amount required by the current proposer, the transaction stays in the\nmempool until another proposer accepts it (in the worst case this would be the validator that initially accepted the\ntransaction when that validator is selected as the proposer)."}),"\n"]})]})}function m(e={}){const{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},98677:(e,s,a)=>{a.d(s,{Y:()=>t});a(67294);var n=a(85893);const t=e=>{let{text:s}=e;return(0,n.jsx)("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500",children:s})}},11151:(e,s,a)=>{a.d(s,{Z:()=>o,a:()=>r});var n=a(67294);const t={},i=n.createContext(t);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);