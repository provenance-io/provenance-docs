"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[786],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),g=r,m=c["".concat(i,".").concat(g)]||c[g]||u[g]||o;return n?a.createElement(m,p(p({ref:t},d),{},{components:n})):a.createElement(m,p({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,p=new Array(o);p[0]=g;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:r,p[1]=l;for(var s=2;s<o;s++)p[s]=n[s];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},8677:(e,t,n)=>{n.d(t,{Y:()=>r});var a=n(7294);const r=e=>{let{text:t}=e;return a.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},t)}},9952:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>p,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),o=n(8677);const p={},l="Software Upgrade Proposals",i={unversionedId:"pb/ecosystem/governance/software-upgrade-proposal",id:"pb/ecosystem/governance/software-upgrade-proposal",title:"Software Upgrade Proposals",description:"Software upgrade proposals will occur when major upgrades are required on the Provenance Blockchain network. When this does occur a governance proposal will be made to request all validators vote on the new software upgrade. All software upgrades will be sourced from the provenance-io/provenance repository.",source:"@site/docs/pb/ecosystem/governance/software-upgrade-proposal.md",sourceDirName:"pb/ecosystem/governance",slug:"/pb/ecosystem/governance/software-upgrade-proposal",permalink:"/docs/pb/ecosystem/governance/software-upgrade-proposal",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Governance",permalink:"/docs/pb/ecosystem/governance/voting"},next:{title:"Validators",permalink:"/docs/pb/ecosystem/community/validator"}},s={},d=[{value:"Submit a software upgrade proposal",id:"submit-a-software-upgrade-proposal",level:2},{value:"Reviewing the newly created proposal",id:"reviewing-the-newly-created-proposal",level:2},{value:"Voting on the Proposal",id:"voting-on-the-proposal",level:2},{value:"Tally current vote",id:"tally-current-vote",level:2},{value:"End of Voting Period",id:"end-of-voting-period",level:2}],c={toc:d},u="wrapper";function g(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"software-upgrade-proposals"},"Software Upgrade Proposals"),(0,r.kt)(o.Y,{text:"Information on how to propose, vote, and track a software upgrade proposal",mdxType:"DocSubheader"}),(0,r.kt)("p",null,"Software upgrade proposals will occur when major upgrades are required on the Provenance Blockchain network. When this does occur a governance proposal will be made to request all validators vote on the new software upgrade. All software upgrades will be sourced from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/provenance"},"provenance-io/provenance")," repository."),(0,r.kt)("h2",{id:"submit-a-software-upgrade-proposal"},"Submit a software upgrade proposal"),(0,r.kt)("p",null,"Once a new release for the Provenance Blockchain binary has been created, a software upgrade proposal can be run. The proposal should have a name, title, a description of the changes, a url of the plan with the necessary binaries, upgrade block height, required deposit, and chain-id"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"home"),(0,r.kt)("td",{parentName:"tr",align:"left"},"home directory containing the blockchain data for the node")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"title"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Title of Software Upgrade")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"description"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Short description of what the upgrade is for")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"upgrade-info"),(0,r.kt)("td",{parentName:"tr",align:"left"},"url that points to the json upgrade plan")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"from"),(0,r.kt)("td",{parentName:"tr",align:"left"},"the account that holds the Hash to be delegated")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"upgrade-height"),(0,r.kt)("td",{parentName:"tr",align:"left"},"blockchain height of where the software upgrade should take place")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"deposit"),(0,r.kt)("td",{parentName:"tr",align:"left"},"required amount of nhash needed to create the proposal")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"chain-id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"name of the network you are connected to")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'export PIO_HOME=~/.provenanced\nprovenanced tx gov submit-proposal software-upgrade test1 \\\n--title "test1" \\\n--description "upgrade Provenance Blockchain to version test1" \\\n--upgrade-info  https://github.com/provenance-io/provenance/releases/download/test1/plan-test1.json\\\n--from <name_of_key> \\\n--upgrade-height 1000 \\\n--deposit 10000000nhash \\\n--chain-id pio-testnet-1 \\\n--testnet\n')),(0,r.kt)("h2",{id:"reviewing-the-newly-created-proposal"},"Reviewing the newly created proposal"),(0,r.kt)("p",null,"After submitting the software upgrade proposal you can review that proposal by running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"provenanced query gov proposal 1 --testing\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'content:\n  \'@type\': /cosmos.upgrade.v1beta1.SoftwareUpgradeProposal\n  description: upgrade Provenance Blockchain to version test1\n  plan:\n    height: "1000"\n    info: https://github.com/provenance-io/provenance/releases/download/test1/plan-test1.json\n    name: test1\n    time: "0001-01-01T00:00:00Z"\n    upgraded_client_state: null\n  title: test1\ndeposit_end_time: "2021-03-19T15:41:31.171271855Z"\nfinal_tally_result:\n  abstain: "0"\n  "no": "0"\n  no_with_veto: "0"\n  "yes": "0"\nproposal_id: "1"\nstatus: PROPOSAL_STATUS_VOTING_PERIOD\nsubmit_time: "2021-03-17T15:41:31.171271855Z"\ntotal_deposit:\n- amount: "10000000"\n  denom: nhash\nvoting_end_time: "2021-03-17T15:46:31.171271855Z"\nvoting_start_time: "2021-03-17T15:41:31.171271855Z"\n')),(0,r.kt)("p",null,"This shows that the proposal is live on the chain and the voting period has begun."),(0,r.kt)("h2",{id:"voting-on-the-proposal"},"Voting on the Proposal"),(0,r.kt)("p",null,"At this time the proposal is live on the Provenance Blockchain network and in order to pass will require a greater than 2/3 majority ",(0,r.kt)("inlineCode",{parentName:"p"},"yes")," vote. Voting has 4 different parameters ",(0,r.kt)("inlineCode",{parentName:"p"},"abstain, no, no_with_veto, and yes"),". To vote on the proposal you will run the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"provenanced tx gov vote 1 yes \\\n--from $KEY_NAME \\\n--chain-id pio-testnet-1 \\\n--fees 1395nhash \\\n--gas auto \\\n--testing\n")),(0,r.kt)("h2",{id:"tally-current-vote"},"Tally current vote"),(0,r.kt)("p",null,"You can review the current state of the governance proposal by running the following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"provenanced query gov tally 1 --testing\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'abstain: "0"\n"no": "0"\nno_with_veto: "0"\n"yes": "0"\n')),(0,r.kt)("h2",{id:"end-of-voting-period"},"End of Voting Period"),(0,r.kt)("p",null,"Once the voting period has expired the votes will be tallied and if the proposal was voted on in the affirmative it will pass and take affect on the agreed upon block height."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"provenanced query gov proposal 1 --testing\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},'content:\n  \'@type\': /cosmos.upgrade.v1beta1.SoftwareUpgradeProposal\n  description: upgrade Provenance Blockchain to version test1\n  plan:\n    height: "1000"\n    info: https://github.com/provenance-io/provenance/releases/download/test1/plan-test1.json\n    name: test1\n    time: "0001-01-01T00:00:00Z"\n    upgraded_client_state: null\n  title: test1\ndeposit_end_time: "2021-03-19T15:41:31.171271855Z"\nfinal_tally_result:\n  abstain: "0"\n  "no": "0"\n  no_with_veto: "0"\n  "yes": "10000000"\nproposal_id: "1"\nstatus: PROPOSAL_STATUS_VOTING_PASSED\nsubmit_time: "2021-03-17T15:41:31.171271855Z"\ntotal_deposit:\n- amount: "10000000"\n  denom: nhash\nvoting_end_time: "2021-03-17T15:46:31.171271855Z"\nvoting_start_time: "2021-03-17T15:41:31.171271855Z"\n')))}g.isMDXComponent=!0}}]);