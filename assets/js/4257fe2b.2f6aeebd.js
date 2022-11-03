"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[3897],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>u});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),p=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),v=p(o),u=n,h=v["".concat(l,".").concat(u)]||v[u]||d[u]||a;return o?r.createElement(h,s(s({ref:t},c),{},{components:o})):r.createElement(h,s({ref:t},c))}));function u(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=v;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var p=2;p<a;p++)s[p]=o[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}v.displayName="MDXCreateElement"},1954:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=o(7462),n=(o(7294),o(3905));const a={},s="Voting",i={unversionedId:"pb/ecosystem/governance/voting",id:"pb/ecosystem/governance/voting",title:"Voting",description:"Proposals are initiatives put to vote by stake holders to perform actions using a consensus of votes. This process is called governance. The proposals themselves may be simple statements (text proposals) or initiatives to change configuration parameters (configuration change proposals), software upgrades, and more.",source:"@site/docs/pb/ecosystem/governance/voting.md",sourceDirName:"pb/ecosystem/governance",slug:"/pb/ecosystem/governance/voting",permalink:"/provenance-docs/docs/pb/ecosystem/governance/voting",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Governance",permalink:"/provenance-docs/docs/pb/ecosystem/governance/"},next:{title:"Software Upgrade Proposals",permalink:"/provenance-docs/docs/pb/ecosystem/governance/software-upgrade-proposal"}},l={},p=[{value:"Deposit",id:"deposit",level:2},{value:"Voting Period",id:"voting-period",level:2},{value:"Tallying Votes",id:"tallying-votes",level:2}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"voting"},"Voting"),(0,n.kt)("p",null,"Proposals are initiatives put to vote by stake holders to perform actions using a consensus of votes. This process is called governance. The proposals themselves may be simple statements (text proposals) or initiatives to change configuration parameters (configuration change proposals), software upgrades, and more."),(0,n.kt)("p",null,"Voting is the process of assigning active stake to one of the four different states for a proposal ","[","yes, no, abstain, veto]. Only actively staked hash can be used for a vote. Each actively staked Hash corresponds to one vote.\\\n\\\nThe governance voting process is broken down into three stages; Deposit, Voting, and Tallying results. Proposals must clear the deposit stage before they can proceed to voting and finally have their results tallied."),(0,n.kt)("h2",{id:"deposit"},"Deposit"),(0,n.kt)("p",null,"Anyone can submit a proposal to the Provenance network for stake holders to review. In order for the proposal to proceed to a vote it must meet the minimum required deposit. The minimum deposit required is 1,000 HASH. A proposal has up to 48 hours to collect enough deposits to become eligible for voting. A proposal will immediately proceed to voting when the threshold is met. If the proposal does not achieve quorum or the proposal is vetoed the deposits are forfeit."),(0,n.kt)("h2",{id:"voting-period"},"Voting Period"),(0,n.kt)("p",null,"The voting period for a governance proposal is fixed at 48 hours. During this time delegators and validators may place their votes of Yes, No, Abstain, or No with Veto. When a validator votes the total of their delegations is applied as weight to their choice. Their individual delegators can accept the vote of the validator they have staked against or explicitly vote their intention which will take precedence over the validator's vote."),(0,n.kt)("h2",{id:"tallying-votes"},"Tallying Votes"),(0,n.kt)("p",null,"At the end of the voting period the cast votes are tallied according to the following thresholds to determine if a proposal passes or not."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Quorum: At least 33.3% of the active state in the network must vote on a proposal for the vote to be considered valid. If quorum is not reached the proposal fails"),(0,n.kt)("li",{parentName:"ul"},"Threshold: Of the votes cast, at least 50% must be ",(0,n.kt)("inlineCode",{parentName:"li"},"Yes")," votes for the proposal to pass"),(0,n.kt)("li",{parentName:"ul"},"No with Veto: If more than 33.3% of the votes are cast as a No with Veto the measure fails regardless of if over 50% of the votes were",(0,n.kt)("inlineCode",{parentName:"li"},"Yes"),". This last option allows a minority stakeholder to prevent a measure from passing even if the majority endorses it.")),(0,n.kt)("p",null,"If the majority of a proposal vote exceeds quorum and is not vetoed then the proposal is passed at the end of the voting period. For certain proposals such as software upgrades their effects are applied at this time."))}d.isMDXComponent=!0}}]);