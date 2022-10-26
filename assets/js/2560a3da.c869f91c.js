"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[9934],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>h});var r=a(7294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function l(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},i=Object.keys(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)a=i[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var s=r.createContext({}),d=function(t){var e=r.useContext(s),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},c=function(t){var e=d(t.components);return r.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,i=t.originalType,s=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),m=d(a),h=n,u=m["".concat(s,".").concat(h)]||m[h]||p[h]||i;return a?r.createElement(u,o(o({ref:e},c),{},{components:a})):r.createElement(u,o({ref:e},c))}));function h(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=t,l.mdxType="string"==typeof t?t:n,o[1]=l;for(var d=2;d<i;d++)o[d]=a[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8677:(t,e,a)=>{a.d(e,{Y:()=>n});var r=a(7294);const n=t=>{let{text:e}=t;return r.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},e)}},4407:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=a(7462),n=(a(7294),a(3905)),i=a(8677);const o={},l="Fees/Distribution",s={unversionedId:"pb/ecosystem/financial-services-blockchain/distribution",id:"pb/ecosystem/financial-services-blockchain/distribution",title:"Fees/Distribution",description:"What is gas?",source:"@site/docs/pb/ecosystem/financial-services-blockchain/distribution.md",sourceDirName:"pb/ecosystem/financial-services-blockchain",slug:"/pb/ecosystem/financial-services-blockchain/distribution",permalink:"/provenance-docs/docs/pb/ecosystem/financial-services-blockchain/distribution",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Token Economics",permalink:"/provenance-docs/docs/pb/ecosystem/financial-services-blockchain/token-economics"},next:{title:"Governance",permalink:"/provenance-docs/docs/pb/ecosystem/governance/"}},d={},c=[{value:"What is gas?",id:"what-is-gas",level:2},{value:"Meter",id:"meter",level:3},{value:"Price",id:"price",level:3},{value:"Operation Gas Estimates",id:"operation-gas-estimates",level:3},{value:"Fees",id:"fees",level:2},{value:"Distribution",id:"distribution",level:2},{value:"Voting Validators",id:"voting-validators",level:3},{value:"Proposing Validator Bonus",id:"proposing-validator-bonus",level:3},{value:"Delegates",id:"delegates",level:3},{value:"Stake At Risk",id:"stake-at-risk",level:3},{value:"Fee Distribution Hierarchy",id:"fee-distribution-hierarchy",level:3},{value:"Current Fees",id:"current-fees",level:3},{value:"Example",id:"example",level:3}],p={toc:c};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"feesdistribution"},"Fees/Distribution"),(0,n.kt)(i.Y,{text:"Explanation of how fees are collected and distributed among the many network participants.",mdxType:"DocSubheader"}),(0,n.kt)("h2",{id:"what-is-gas"},"What is gas?"),(0,n.kt)("p",null,"Gas is a consumable that is used to power the Provenance blockchain. Each execution of the blockchain requires enough gas to complete the requires reads, writes, and computation encompassed by the submitted transaction","(","s",")",". When using gas you need to know two things:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"How much gas do I need to process my transaction?"),(0,n.kt)("li",{parentName:"ul"},"What is the current price of gas?")),(0,n.kt)("p",null,"Before each transaction invoked on Provenance an estimate of the amount gas you need is made. The estimated gas needed is the maximum you'll pay for the given transaction. Over estimating will lead to purchasing more gas than needed and under estimating will cause the submitted transaction to fail due to running out of gas."),(0,n.kt)("h3",{id:"meter"},"Meter"),(0,n.kt)("p",null,"When a transaction starts processing the meter is set at to the estimated amount of gas and the measurement of usage decreases the amount of available gas for the transaction based on network usage. If the transaction completes without running out the meter it will be committed to the blockchain. If the meter arrives at zero before the transaction is complete the blockchain will reject the transaction and the gas has been consumed. In this case it is beneficial to be slightly higher on gas estimates to avoid paying for a transaction that is rejected."),(0,n.kt)("h3",{id:"price"},"Price"),(0,n.kt)("p",null,"Gas is purchased with Hash, the Provenance utility token."),(0,n.kt)("h3",{id:"operation-gas-estimates"},"Operation Gas Estimates"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Operation"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Low"),(0,n.kt)("th",{parentName:"tr",align:"left"},"High"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"transfer coins"),(0,n.kt)("td",{parentName:"tr",align:"left"},"70000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"70000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"name_bound"),(0,n.kt)("td",{parentName:"tr",align:"left"},"64000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"64000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"account_attribute_added"),(0,n.kt)("td",{parentName:"tr",align:"left"},"70000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"70000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"account_attribute_deleted"),(0,n.kt)("td",{parentName:"tr",align:"left"},"55000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"55000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"contract spec loaded"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2800000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3600000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"scope created"),(0,n.kt)("td",{parentName:"tr",align:"left"},"233000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1000000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"scope updated"),(0,n.kt)("td",{parentName:"tr",align:"left"},"90000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"110000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"scope change owner"),(0,n.kt)("td",{parentName:"tr",align:"left"},"75000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"75000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"marker created"),(0,n.kt)("td",{parentName:"tr",align:"left"},"75000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"75000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"marker supply"),(0,n.kt)("td",{parentName:"tr",align:"left"},"60000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"60000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"marker permissions"),(0,n.kt)("td",{parentName:"tr",align:"left"},"60000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"60000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"marker finalize"),(0,n.kt)("td",{parentName:"tr",align:"left"},"60000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"60000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"marker activate"),(0,n.kt)("td",{parentName:"tr",align:"left"},"100000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"100000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"marker mint"),(0,n.kt)("td",{parentName:"tr",align:"left"},"85000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"90000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"marker burn"),(0,n.kt)("td",{parentName:"tr",align:"left"},"85000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"90000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"bilateral exchange"),(0,n.kt)("td",{parentName:"tr",align:"left"},"105000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"105000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"multilateral exchange"),(0,n.kt)("td",{parentName:"tr",align:"left"},"105000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1050000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"smart contract create ","(","Require governance vote",")"),(0,n.kt)("td",{parentName:"tr",align:"left"},"6320000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"20000000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"smart contract init"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1000000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1000000")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"smart contract exec"),(0,n.kt)("td",{parentName:"tr",align:"left"},"140000"),(0,n.kt)("td",{parentName:"tr",align:"left"},"140000")))),(0,n.kt)("h2",{id:"fees"},"Fees"),(0,n.kt)("p",null,"Fees are the total amount of Hash collected for consumed gas during the processing and minting of a block on Provenance. ",(0,n.kt)("strong",{parentName:"p"},"Community")," and ",(0,n.kt)("strong",{parentName:"p"},"Block Proposer")," fees are set by governance proposals allowing Hash holders to vote to adjust these fee percentages as necessary. Delegators can choose validators that have a lower commission to optimize the amount of fees collected from the network."),(0,n.kt)("h2",{id:"distribution"},"Distribution"),(0,n.kt)("p",null,"All fees that are collected by the validator network are distributed to rewarding Provenance ",(0,n.kt)("a",{parentName:"p",href:"/provenance-docs/docs/pb/ecosystem/community/participants"},"participants")," for providing value in the various roles."),(0,n.kt)("h3",{id:"voting-validators"},"Voting Validators"),(0,n.kt)("p",null,"All validators that vote on the proposed block are assigned a portion of the fees. Each validator receives a portion equivalent to their percentage of the overall voting power minus the Community Tax."),(0,n.kt)("h3",{id:"proposing-validator-bonus"},"Proposing Validator Bonus"),(0,n.kt)("p",null,"A node that is part of the active validator set will eventually be selected to handle proposing a new block to the chain. During this process the validator is responsible for collecting transactions and cutting a proposed block for other validators to vote on. As a reward for performing these functions the proposing validator is allocated an additional share of the fees that is calculated based on the ","[","base_reward + bonus_amount","*","validators_overall_percentage_of_voting_power","]","."),(0,n.kt)("h3",{id:"delegates"},"Delegates"),(0,n.kt)("p",null,"The validator's pool of fees is further broken down during distribution with a percentage reserved for the validator node operator ","(","the commission",")",", and the remaining amount distributed among all stakeholders according to their delegation percentage of the overall amount assigned to the validator. This means that if an account has delegated 25% of the total stake ","(","aka the voting power for the validator",")"," then they are entitled to 25% of the fees awarded to the validator for cutting a block ","(","less commission",")","."),(0,n.kt)("h3",{id:"stake-at-risk"},"Stake At Risk"),(0,n.kt)("p",null,'Delegation of stake against a validator node is considered "at risk" meaning that if a validator performs a network fault the stake assigned to the validator node will be slashed ',"(","meaning a percentage is forfeit",")",". This currently can happen in two ways. The first is if a validator node is a member of the active set of validators and the node fails to sign enough blocks within a given window ","(","for example of the server is offline",")",". This will result in a minor penalty and the removal of the validator node from the active set. A more serious error is the double signing infraction. This occurs if the validator submits more than one signature for a block. When this infraction is detected the validator is assessed a very serious penalty and banned from the network. This is because this behavior has very severe consequences for the network stability."),(0,n.kt)("h3",{id:"fee-distribution-hierarchy"},"Fee Distribution Hierarchy"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Community - pool of Hash that can be used to enhance and maintain Provenance"),(0,n.kt)("li",{parentName:"ul"},"Block Proposer - an additional bonus given to the validator that proposed the block"),(0,n.kt)("li",{parentName:"ul"},"Validator Commission - percentage of the fee that is taken as commission by a validator"),(0,n.kt)("li",{parentName:"ul"},"Delegators")),(0,n.kt)("h3",{id:"current-fees"},"Current Fees"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Percentage"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Community"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Block Proposer"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1% to 6%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Validator Commission"),(0,n.kt)("td",{parentName:"tr",align:"left"},"5% to 100%")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Delegators"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Remaining")))),(0,n.kt)("h3",{id:"example"},"Example"),(0,n.kt)("p",null,"Here is an example distribution of Hash collected during a transaction."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Validators:")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Validator A - 20% commission"),(0,n.kt)("li",{parentName:"ul"},"Validator B - 50% commission"),(0,n.kt)("li",{parentName:"ul"},"Validator C - 1% commission")),(0,n.kt)("p",null,"A proposed transaction uses 1000 gas and each unit of gas costs 0.5 Hash. In this scenario we can expect the network to collect 500 Hash in fees that need to be distributed. When the distribution takes place it goes through the fee distribution process and allocates:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Community")," would receive 5% of the total transaction fees ","(","500 x .05",")"," or 25 Hash."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Validator A")," proposed the block and receives a 6% bonus because all validator signatures were collected. The remaining Hash available after the community pool allocation was 475 Hash. ",(0,n.kt)("strong",{parentName:"li"},"Validator A")," would collect ","(","475 ","*"," .06",")"," or 28.5 Hash."),(0,n.kt)("li",{parentName:"ul"},"Validators now receive the remaining 446.5 Hash split among them or 148.333 Hash each."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Validator A")," charges a commission of 20% - ","(","148.333 ","*"," .2",")"," or 29.6666 Hash"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Validator B")," charges a commission of 50% - ","(","148.333 ","*"," .5",")"," or 74.1665 Hash"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Validator C")," charges a commission of 1% - ","(","148.333 ","*"," .01",")"," or 1.48333 Hash"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Delegators")," receive the remaining portion of Hash after commission on the validator they have delegated to on a pro rata basis.")))}m.isMDXComponent=!0}}]);