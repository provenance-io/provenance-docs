"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[673],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(n),p=o,m=h["".concat(l,".").concat(p)]||h[p]||u[p]||r;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const r={},i="Delegator",s={unversionedId:"pb/ecosystem/community/delegator",id:"pb/ecosystem/community/delegator",title:"Delegator",description:"To understand delegation it's important to understand the difference between Hash ownership and Hash staked on the Provenance Blockchain network.",source:"@site/docs/pb/ecosystem/community/delegator.md",sourceDirName:"pb/ecosystem/community",slug:"/pb/ecosystem/community/delegator",permalink:"/docs/pb/ecosystem/community/delegator",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Validators",permalink:"/docs/pb/ecosystem/community/validator"},next:{title:"Asset Creators",permalink:"/docs/pb/ecosystem/community/asset-originators"}},l={},d=[{value:"Rewards",id:"rewards",level:3},{value:"Commission",id:"commission",level:4},{value:"Voting",id:"voting",level:4},{value:"Fee Distributions",id:"fee-distributions",level:4},{value:"Risks",id:"risks",level:3},{value:"Unbonding",id:"unbonding",level:4},{value:"Slashing",id:"slashing",level:4}],c={toc:d};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"delegator"},"Delegator"),(0,o.kt)("p",null,"To understand delegation it's important to understand the difference between Hash ownership and Hash staked on the Provenance Blockchain network."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Hash")," - Utility token used by Provenance Blockchain for staking and transaction fee payment. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Stake")," - Hash that has been delegated to a validator to share in the risks and rewards of participating in the PoS consensus mechanism on the blockchain network. "),(0,o.kt)("p",null,"Hash will become stake at the point in time that it is delegated to a validator to be used as voting power on the network. "),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Delegation")," - staking Hash with a validator to be used by that validator as voting power. For most holders of Hash delegation is an easy and relatively safe method of sharing in the ownership and rewards of the network."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"See")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/pb/ecosystem/governance/voting"},(0,o.kt)("em",{parentName:"a"},"Voting"))," ",(0,o.kt)("em",{parentName:"p"},"for more information on how to vote on")," ",(0,o.kt)("a",{parentName:"p",href:"../governance/"},(0,o.kt)("em",{parentName:"a"},"Governance"))," ",(0,o.kt)("em",{parentName:"p"},"proposals.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Bonded")," - The state of your Hash at the time when it is delegated to a validator. All bonded Hash is required to go through a 21 day unbonding period that locks the usage of the portion of Hash that has been removed from delegation. During this lock-up period:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"you won't share in the risks or rewards of the network"),(0,o.kt)("li",{parentName:"ul"},"your Hash won't be available for transacting"),(0,o.kt)("li",{parentName:"ul"},"your Hash will be safe from malfeasance by a bad acting validator.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Re-delegation")," - Re-delegation of Hash to a different validator occurs immediately, without incurring the 21 day unbonding period. This is incredibly important because it allows the Hash holder to secure their Hash with a trusted validator if the current one has been deemed untrusted."),(0,o.kt)("p",null,"Re-delegation is also the recommended way to move your stake from a validator that has or is going off line for extended maintenance to avoid an availability penalty being assessed against your stake."),(0,o.kt)("h3",{id:"rewards"},"Rewards"),(0,o.kt)("h4",{id:"commission"},"Commission"),(0,o.kt)("p",null,"Validators are able to set a commission percentage that directly impacts the amount of rewards you are able to collect from delegating to that validator. "),(0,o.kt)("h4",{id:"voting"},"Voting"),(0,o.kt)("p",null,"Once you have staked Hash you are able to vote on Governance proposals that ultimately determine the direction of the network's development, usage, security, etc... It can't be stressed enough how important staking Hash is to the Provenance Blockchain network. This is the true power of a proof-of-stake blockchain and allows the the network to operate independent of any controlling entity."),(0,o.kt)("h4",{id:"fee-distributions"},"Fee Distributions"),(0,o.kt)("p",null,"Staked Hash entitles you to a portion of the fees collected by the network. Care should be taken to delegate to a secure validator and understanding the commission rate that the validator charges since it will directly impact the amount of rewards that you are able receive. See ",(0,o.kt)("a",{parentName:"p",href:"/docs/pb/ecosystem/financial-services-blockchain/distribution"},"Distribution")," for more information on how fees are collected and distributed."),(0,o.kt)("h3",{id:"risks"},"Risks"),(0,o.kt)("h4",{id:"unbonding"},"Unbonding"),(0,o.kt)("p",null,"Bonded Hash can't be immediately transacted due to the unbonding period. When Hash is unbonded from a validator it is held by the network until the unbonding period ","(","21 days",")"," has completed. Hash can be re-delegated to a different validator immediately to mitigate the risk of a bad-actor validator causing slashing of your stake."),(0,o.kt)("h4",{id:"slashing"},"Slashing"),(0,o.kt)("p",null,"In order to keep validators accountable for running the blockchain securely the network will slash stake in certain scenarios. It is good to note that delegators share in this risk because they too have Hash staked on Provenance Blockchain."))}u.isMDXComponent=!0}}]);