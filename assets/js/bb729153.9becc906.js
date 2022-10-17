"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[4814],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=o,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},6747:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(7462),o=(a(7294),a(3905));const r={},i="Governance",l={unversionedId:"pb/ecosystem/governance/index",id:"pb/ecosystem/governance/index",title:"Governance",description:"Overview",source:"@site/docs/pb/ecosystem/governance/index.md",sourceDirName:"pb/ecosystem/governance",slug:"/pb/ecosystem/governance/",permalink:"/docs/pb/ecosystem/governance/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Fees/Distribution",permalink:"/docs/pb/ecosystem/financial-services-blockchain/distribution"},next:{title:"Voting",permalink:"/docs/pb/ecosystem/governance/voting"}},s={},c=[{value:"Overview",id:"overview",level:2},{value:"Governance Proposal Types",id:"governance-proposal-types",level:2},{value:"Basic Proposals",id:"basic-proposals",level:3},{value:"Smart Contract Governance Proposals",id:"smart-contract-governance-proposals",level:3},{value:"Proposal Statuses",id:"proposal-statuses",level:3},{value:"Blockchain Parameters",id:"blockchain-parameters",level:2},{value:"Auth",id:"auth",level:3},{value:"Bank",id:"bank",level:3},{value:"Distribution",id:"distribution",level:3},{value:"Mint",id:"mint",level:3},{value:"Slashing",id:"slashing",level:3},{value:"Staking",id:"staking",level:3},{value:"Transfer (IBC)",id:"transfer-ibc",level:3},{value:"Smart Contracts",id:"smart-contracts",level:3}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"governance"},"Governance"),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"Provenance Blockchain includes an on-chain governance mechanism for managing software updates and improvements as well as for governing the use of the Provenance Blockchain community funds. Users holding staked Hash tokens can participate in voting on governance proposals which drive the evolving configuration of the blockchain."),(0,o.kt)("h2",{id:"governance-proposal-types"},"Governance Proposal Types"),(0,o.kt)("h3",{id:"basic-proposals"},"Basic Proposals"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Community Spend")," \u2013 a proposal for use of community funds, together with how many coins are proposed to be spent, and to which recipient account."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Text")," \u2013 a standard text proposal whose changes need to be manually updated in case of approval. Can be a simple document that is put to vote by the stake holders. An example from Cosmos would be the ADR ","(","architecture decision records",")"," which are voted in to show endorsement of high-impact changes or development initiatives."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Parameter Change")," defines a proposal to change one or more parameters ","(","see list of parameters below",")","."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Software Upgrade")," is a proposal for initiating a software upgrade. Include the specific version of the software to run and the blockheight when it takes effect. Used for coordinated network upgrades."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Client Update ","(","IBC",")")," the client is updated with the provided header. The update may fail if the header is not valid given certain conditions specified by the client implementation. A client is the interface between blockchains for IBC.")),(0,o.kt)("h3",{id:"smart-contract-governance-proposals"},"Smart Contract Governance Proposals"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Store Code")," - upload a smart contract build"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Instantiate Contract")," - instantiate a smart contract"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Migrate Contract")," - migrate a smart contract to a new code version"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Update Admin")," - set a new admin for a smart contract"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Clear Admin")," - remove admin from a smart contract to prevent further migrations")),(0,o.kt)("h3",{id:"proposal-statuses"},"Proposal Statuses"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},'enum ProposalStatus {\n  option (gogoproto.goproto_enum_prefix) = false;\n\n  // PROPOSAL_STATUS_UNSPECIFIED defines the default propopsal status.\n  PROPOSAL_STATUS_UNSPECIFIED = 0 [(gogoproto.enumvalue_customname) = "StatusNil"];\n  // PROPOSAL_STATUS_DEPOSIT_PERIOD defines a proposal status during the deposit\n  // period.\n  PROPOSAL_STATUS_DEPOSIT_PERIOD = 1 [(gogoproto.enumvalue_customname) = "StatusDepositPeriod"];\n  // PROPOSAL_STATUS_VOTING_PERIOD defines a proposal status during the voting\n  // period.\n  PROPOSAL_STATUS_VOTING_PERIOD = 2 [(gogoproto.enumvalue_customname) = "StatusVotingPeriod"];\n  // PROPOSAL_STATUS_PASSED defines a proposal status of a proposal that has\n  // passed.\n  PROPOSAL_STATUS_PASSED = 3 [(gogoproto.enumvalue_customname) = "StatusPassed"];\n  // PROPOSAL_STATUS_REJECTED defines a proposal status of a proposal that has\n  // been rejected.\n  PROPOSAL_STATUS_REJECTED = 4 [(gogoproto.enumvalue_customname) = "StatusRejected"];\n  // PROPOSAL_STATUS_FAILED defines a proposal status of a proposal that has\n  // failed.\n  PROPOSAL_STATUS_FAILED = 5 [(gogoproto.enumvalue_customname) = "StatusFailed"];\n}\n')),(0,o.kt)("h2",{id:"blockchain-parameters"},"Blockchain Parameters"),(0,o.kt)("p",null,"The following list of parameters exist in the blockchain and can be adjusted through governance parameter proposals"),(0,o.kt)("h3",{id:"auth"},"Auth"),(0,o.kt)("p",null,"These parameters control the gas rates used for the network as well as some limits on the size of transactions and transaction metadata."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Max memo field characters"),(0,o.kt)("li",{parentName:"ul"},"Maximum number of message signatures"),(0,o.kt)("li",{parentName:"ul"},"Transaction gas cost",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"per byte"),(0,o.kt)("li",{parentName:"ul"},"per ed25519 signature"),(0,o.kt)("li",{parentName:"ul"},"per secp256k1 signature")))),(0,o.kt)("h3",{id:"bank"},"Bank"),(0,o.kt)("p",null,"These parameters control if accounts are allowed to send certain denominations of coin ","(","or send any coins at all",")","."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Send Enabled ","(","general for all coin",")"),(0,o.kt)("li",{parentName:"ul"},"Send Enabled ","(","specific coin",")")),(0,o.kt)("h3",{id:"distribution"},"Distribution"),(0,o.kt)("p",null,"These parameter cover the distribution of gas fees paid into the network by users. The community tax rate is the amount of gas fees paid to take off the top and deposit into a network pool of funds that can be spent via governance proposal vote. Bonus rates are the amount of extra allocation given to the validator node when it is selected to cut the current block. The Bonus rate is an extra allocation given if the validator node collects signatures from all of the other active validators. This balances the cut early/wait for others in the network incentive."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Community Tax Rate"),(0,o.kt)("li",{parentName:"ul"},"Base Proposer Bonus Rate"),(0,o.kt)("li",{parentName:"ul"},"Bonus Proposer Bonus Rate")),(0,o.kt)("h3",{id:"mint"},"Mint"),(0,o.kt)("p",null,"The minting module controls inflation parameters for the staking currency. The inflation rate gives an annual yield for actively staked tokens within the network."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Denomination to Mint"),(0,o.kt)("li",{parentName:"ul"},"Inflation",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Annual Rate of Change"),(0,o.kt)("li",{parentName:"ul"},"Maximum Rate"),(0,o.kt)("li",{parentName:"ul"},"Minimum Rate"))),(0,o.kt)("li",{parentName:"ul"},"Bonded Token Target Percentage"),(0,o.kt)("li",{parentName:"ul"},"Estimated Blocks per Year")),(0,o.kt)("h3",{id:"slashing"},"Slashing"),(0,o.kt)("p",null,"These settings control the penalties assessed as a fraction of the delegated stake held by a validator. Window size and number of blocks required per window control the uptime requirements for an active validator."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Minimum signed blocks per Window"),(0,o.kt)("li",{parentName:"ul"},"Window Size"),(0,o.kt)("li",{parentName:"ul"},"Double Sign Penalty Fraction"),(0,o.kt)("li",{parentName:"ul"},"Downtime Penalty Fraction")),(0,o.kt)("h3",{id:"staking"},"Staking"),(0,o.kt)("p",null,"These settings control which currency is used for staking in the network as well as the number of total active validators allowed in the network. The unbonding period controls how long it takes for a bonded delegation to be released. This value must be long enough to keep stake at risk for slashing when bad behavior is detected ","(","21 days should be used presently",")"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Maximum Number of Active Validators"),(0,o.kt)("li",{parentName:"ul"},"Unbonding Period"),(0,o.kt)("li",{parentName:"ul"},"Max Entries"),(0,o.kt)("li",{parentName:"ul"},"Historical Entries"),(0,o.kt)("li",{parentName:"ul"},"Staking Currency Denomination")),(0,o.kt)("h3",{id:"transfer-ibc"},"Transfer ","(","IBC",")"),(0,o.kt)("p",null,"Controls if coins can flow into the network or out of the network over IBC. For control of specific coins the transfer parameters on the bank module are used to override the global settings defined here."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Send Enabled \u2013 sets global send enable for all denominations over IBC"),(0,o.kt)("li",{parentName:"ul"},"Receive Enabled \u2013 sets the global receive enabled for all denominations over IBC.")),(0,o.kt)("h3",{id:"smart-contracts"},"Smart Contracts"),(0,o.kt)("p",null,"There are a few parameters that can be set related to smart contracts running on the blockchain. These settings are support through a standard parameter change proposal and are in addition to the other governance proposals that are specific to the smart contracts module."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Code Upload Access - who can upload a smart contract binary: Nobody, Everybody, OnlyAddress"),(0,o.kt)("li",{parentName:"ul"},"Instantiate Default Permission - platform default, who can instantiate a wasm binary when the code owner has not set it")))}u.isMDXComponent=!0}}]);