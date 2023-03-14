"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2253],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(a),h=i,m=u["".concat(o,".").concat(h)]||u[h]||d[h]||r;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),i=a(6010);const r="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,i.Z)(r,s),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(7462),i=a(7294),r=a(6010),s=a(2389),l=a(7392),o=a(7094),c=a(2466);const p="tabList__CuJ",d="tabItem_LNqP";function u(e){var t,a;const{lazy:s,block:u,defaultValue:h,values:m,groupId:f,className:b}=e,g=i.Children.map(e.children,(e=>{if((0,i.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:g.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,l.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===h?h:null!=(t=null!=h?h:null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)?t:g[0].props.value;if(null!==y&&!k.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:x,setTabGroupChoices:T}=(0,o.U)(),[w,N]=(0,i.useState)(y),C=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=f){const e=x[f];null!=e&&e!==w&&k.some((t=>t.value===e))&&N(e)}const P=e=>{const t=e.currentTarget,a=C.indexOf(t),n=k[a].value;n!==w&&(E(t),N(n),null!=f&&T(f,String(n)))},D=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{var n;const t=C.indexOf(e.currentTarget)+1;a=null!=(n=C[t])?n:C[0];break}case"ArrowLeft":{var i;const t=C.indexOf(e.currentTarget)-1;a=null!=(i=C[t])?i:C[C.length-1];break}}null==(t=a)||t.focus()};return i.createElement("div",{className:(0,r.Z)("tabs-container",p)},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":u},b)},k.map((e=>{let{value:t,label:a,attributes:s}=e;return i.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>C.push(e),onKeyDown:D,onFocus:P,onClick:P},s,{className:(0,r.Z)("tabs__item",d,null==s?void 0:s.className,{"tabs__item--active":w===t})}),null!=a?a:t)}))),s?(0,i.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):i.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function h(e){const t=(0,s.Z)();return i.createElement(u,(0,n.Z)({key:String(t)},e))}},8627:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var n=a(7462),i=(a(7294),a(3905)),r=a(5488),s=a(5162);const l={},o="Example: Raising Capital",c={unversionedId:"learn/asset-lifecycle/capital-raise-example",id:"learn/asset-lifecycle/capital-raise-example",title:"Example: Raising Capital",description:"A blockchain-native fund is one in which the issuance of fund interests, including capital commitments,",source:"@site/docs/learn/asset-lifecycle/08-capital-raise-example.md",sourceDirName:"learn/asset-lifecycle",slug:"/learn/asset-lifecycle/capital-raise-example",permalink:"/docs/learn/asset-lifecycle/capital-raise-example",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"assetLifecycleSidebar",previous:{title:"Example: Loan Pools",permalink:"/docs/learn/asset-lifecycle/lending-example"}},p={},d=[{value:"Fund Onboarding",id:"fund-onboarding",level:2},{value:"GP Configures Raise Contract",id:"gp-configures-raise-contract",level:3},{value:"Subscriptions",id:"subscriptions",level:2},{value:"LP Proposes Subscription",id:"lp-proposes-subscription",level:3},{value:"GP Accepts Subscription",id:"gp-accepts-subscription",level:3},{value:"Capital Calls",id:"capital-calls",level:2},{value:"GP Issues Capital Call",id:"gp-issues-capital-call",level:3},{value:"LP Deposits Fiat",id:"lp-deposits-fiat",level:3},{value:"Close Capital Call",id:"close-capital-call",level:3},{value:"Final Cap Table",id:"final-cap-table",level:2},{value:"Fund Asset Lifecycle",id:"fund-asset-lifecycle",level:2},{value:"Distributions",id:"distributions",level:3},{value:"Secondary Trading",id:"secondary-trading",level:3},{value:"Secondary Trading Process",id:"secondary-trading-process",level:3}],u={toc:d};function h(e){let{components:t,...l}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"example-raising-capital"},"Example: Raising Capital"),(0,i.kt)("p",null,"A blockchain-native fund is one in which the issuance of fund interests, including capital commitments,\ncontributions, distributions, and any future transfer of those interests, are recorded on a blockchain.\nThe record of the fund interest on the blockchain is designed to be a legally enforceable contract."),(0,i.kt)("p",null,"A cap table managed on-chain provides a real time record of ownership and eliminates the need for reconciliation.\nAdditionally, blockchain allows for certainty of assets on both sides of a trade (e.g. digital fund interest in a seller account,\ntokenized deposits in a buyer account) and a protocol that matches that trade, facilitates value transfer,\nand creates an immutable record of the transaction."),(0,i.kt)("p",null,'In this example, we\'ll show how a capital raise process for a private fund can be performed on Provenance through smart\ncontract administration. The fund raise process is administered primarily by a "Capital Raise" smart contract, which\nis instantiated and configured for this particular fund. Each fund on Provenance Blockchain has their own individual copy\nof the raise contract specific to its own unique processes. Subscriptions to the fund by investors are also governed by\nsmart contract, with a personalized "Subscription" smart contract instantiated for each investor.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"asset lifecycle",src:a(9524).Z,width:"2467",height:"468"})),(0,i.kt)("p",null,'Throughout this example, the "GP" (General Partner) refers to the fund issuer or fund manager, while "LP" (Limited\nPartner) represents the multiple individuals or entities subscribing (committing capital) to the fund. At the end of the\nprocess, the cap table for the fund will be established as an Investment ',(0,i.kt)("a",{parentName:"p",href:"/docs/pb/modules/marker-module"},"Marker"),"\nwith the token representing shares in the fund."),(0,i.kt)("h2",{id:"fund-onboarding"},"Fund Onboarding"),(0,i.kt)("h3",{id:"gp-configures-raise-contract"},"GP Configures Raise Contract"),(0,i.kt)("p",null,"Each fund's capital raise process is governed by a unique instance of the Provenance Blockchain ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FigureTechnologies/marketpalace-raise-contract"},(0,i.kt)("strong",{parentName:"a"},"Capital Raise smart contract")),".\nThe smart contract executable is loaded onto the blockchain through a ",(0,i.kt)("a",{parentName:"p",href:"/docs/pb/ecosystem/governance"},"governance proposal"),", which requires a vote from\nthe delegator community. Once the vote is passed, the contract's ",(0,i.kt)("a",{parentName:"p",href:"/docs/pb/modules/provwasm-smart-contracts"},"WASM")," binary is stored on the blockchain. Each time a fund\nwishes to use the contract for a capital raise, a new instance of the smart contract is instantiated by the GP with a\nconfiguration specific for the fund."),(0,i.kt)("p",null,"The Raise smart contract is used to manage investments in a fundraising campaign. It takes into account investor\neligibility criteria and target raise amount, and is administered by a specific address. The contract creates two\ndigital assets on the Provenance Blockchain: commitment coin and investment coin. Commitment coin represents a capital\nobligation from a subscription, while investment coin represents the final state of investment in the fund.\nThe contract is designed to handle fundraising campaigns where capital commitment and investment are\ndecoupled, and can track the entire lifecycle of an asset."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"asset lifecycle",src:a(7562).Z,width:"3698",height:"2326"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example Contract Configuration:")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"acceptable_accreditations")),(0,i.kt)("td",{parentName:"tr",align:null},"funds506c.passport.pb"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates LP required accreditations (506c qualified investor)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"subscription_code_id")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://explorer.provenance.io/code/12"},"12")),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates which smart contract to use for LP subscriptions")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"capital_denom")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://explorer.provenance.io/asset/cfigureomni"},"cfigureomni")," (USD cents)"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates which settlement token will be accepted as capital by the GP")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("strong",{parentName:"td"},"capital_per_share")),(0,i.kt)("td",{parentName:"tr",align:null},"1,000"),(0,i.kt)("td",{parentName:"tr",align:null},"Indicates price per share of fund in capital_denom currency (USD $10)")))),(0,i.kt)("br",null),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"2",label:"Contract Details",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Capital Raise smart contract ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/FigureTechnologies/marketpalace-raise-contract"},"source code")),(0,i.kt)("li",{parentName:"ul"},"Capital Raise smart contract ",(0,i.kt)("a",{parentName:"li",href:"https://explorer.provenance.io/proposal/41"},"governance proposal")),(0,i.kt)("li",{parentName:"ul"},"Capital Raise smart contract ",(0,i.kt)("a",{parentName:"li",href:"https://explorer.provenance.io/code/22"},"wasm code"))),(0,i.kt)("hr",null)),(0,i.kt)(s.Z,{value:"3",label:"Example Transactions",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example ",(0,i.kt)("a",{parentName:"li",href:"https://explorer.provenance.io/tx/8C3253C39A3A952486AF35A7C5263838A074C2A07102BDFE2D1BDE2AE2E819A1/5877851"},"contract instantiation tx")),(0,i.kt)("li",{parentName:"ul"},"Example ",(0,i.kt)("a",{parentName:"li",href:"https://explorer.provenance.io/contract/pb1ff3y36d8hhjxdvk0620z7j52hlpns0wnsmgvgydn0vqq5xx7lluq2hky4p"},"instantiated contract")," with configuration (see History tab)"),(0,i.kt)("li",{parentName:"ul"},"Example ",(0,i.kt)("a",{parentName:"li",href:"https://explorer.provenance.io/asset/pb1ff3y36d8hhjxdvk0620z7j52hlpns0wnsmgvgydn0vqq5xx7lluq2hky4p.commitment"},"commitment coin Marker")),(0,i.kt)("li",{parentName:"ul"},"Example ",(0,i.kt)("a",{parentName:"li",href:"https://explorer.provenance.io/asset/pb1ff3y36d8hhjxdvk0620z7j52hlpns0wnsmgvgydn0vqq5xx7lluq2hky4p.investment"},"investment coin Marker"))),(0,i.kt)("hr",null))),(0,i.kt)("h2",{id:"subscriptions"},"Subscriptions"),(0,i.kt)("h3",{id:"lp-proposes-subscription"},"LP Proposes Subscription"),(0,i.kt)("p",null,"The subscription smart contract is used in the process of investing in a fund.\nIt manages the investor's interaction with the raise and holds the commitment coin issued by the associated raise\ncontract. The subscription contract also verifies the investor's eligibility to participate in the raise and acts as\na smart wallet, facilitating the exchange of various types of coins (commitment, investment, and payment).\nThe contract also tracks and manages redemptions and distributions that may occur over the course of the investment."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"asset lifecycle",src:a(4572).Z,width:"3170",height:"1378"})),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"2",label:"Contract Details",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Raise contract ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/FigureTechnologies/marketpalace-raise-contract/blob/fb6735997247b96927b394e36570d09938301711/src/contract.rs#L94"},"propose subscription")," entry point"),(0,i.kt)("li",{parentName:"ul"},"Raise contract ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/FigureTechnologies/marketpalace-raise-contract/blob/fb6735997247b96927b394e36570d09938301711/src/subscribe.rs#L36"},"instantiate subscription contract")),(0,i.kt)("li",{parentName:"ul"},"Subscription smart contract ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/FigureTechnologies/marketpalace-subscription-contract"},"source code")),(0,i.kt)("li",{parentName:"ul"},"Subscription smart contract ",(0,i.kt)("a",{parentName:"li",href:"https://explorer.provenance.io/proposal/42"},"governance proposal")),(0,i.kt)("li",{parentName:"ul"},"Subscription smart contract ",(0,i.kt)("a",{parentName:"li",href:"https://explorer.provenance.io/code/23"},"wasm code"))),(0,i.kt)("hr",null)),(0,i.kt)(s.Z,{value:"3",label:"Example Transactions",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example ",(0,i.kt)("a",{parentName:"li",href:"https://explorer.provenance.io/contract/pb1fsr88cf0edxjfejhhhz90uqp7634ydvggea0n9thz74mcxn2mrxqahnuys"},"Subscription Contract instantiated")," for investor")),(0,i.kt)("hr",null))),(0,i.kt)("h3",{id:"gp-accepts-subscription"},"GP Accepts Subscription"),(0,i.kt)("p",null,"The issuer of the raise has the ability to accept proposed subscriptions through the raise contract. When a subscription is\naccepted, commitment coin is minted and transferred to the subscription smart contract (smart wallet) for the investor.\nThe commitment coin represents uncalled capital in the fund structure. It has immediate value for the raise."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"asset lifecycle",src:a(2995).Z,width:"3202",height:"1288"})),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"2",label:"Contract Details",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Raise contract ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/FigureTechnologies/marketpalace-raise-contract/blob/fb6735997247b96927b394e36570d09938301711/src/contract.rs#L100"},"accept submission")," entry point")),(0,i.kt)("hr",null)),(0,i.kt)(s.Z,{value:"3",label:"Example Transactions",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example of ",(0,i.kt)("a",{parentName:"li",href:"https://explorer.provenance.io/tx/D5921879CA11B3197D0E0D0298D51FC7DD4EF17EBAE24CBB872D024899F76093/5877856"},"GP accepting subscription"))),(0,i.kt)("hr",null))),(0,i.kt)("h2",{id:"capital-calls"},"Capital Calls"),(0,i.kt)("h3",{id:"gp-issues-capital-call"},"GP Issues Capital Call"),(0,i.kt)("p",null,"Capital calls notify Investors using Provenance Event Stream"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"asset lifecycle",src:a(1268).Z,width:"3666",height:"1912"})),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"2",label:"Contract Details",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Raise contract ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/FigureTechnologies/marketpalace-raise-contract/blob/fb6735997247b96927b394e36570d09938301711/src/contract.rs#L103"},"issue capital call")," entry point")),(0,i.kt)("hr",null)),(0,i.kt)(s.Z,{value:"3",label:"Example Transactions",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example of ",(0,i.kt)("a",{parentName:"li",href:"https://explorer.provenance.io/tx/ED4FCD20ABE8315B5BBC1A4CB3033DF1400C3A7BCB9B596FBD454DC953EE61AC/5877857"},"GP issuing capital call"))),(0,i.kt)("hr",null))),(0,i.kt)("h3",{id:"lp-deposits-fiat"},"LP Deposits Fiat"),(0,i.kt)("p",null,'When a GP makes a capital call, the investor in a digital fund will fund the capital call using USD represented on chain\nby a token representing the fiat deposit at an Omnibus Bank. (The stablecoin token is referred to as a "tokenized deposit" or\n"omnicoin"). '),(0,i.kt)("p",null,'Once the omnicoin is deposited in the investor\'s "smart wallet" (subscription contract), the\ncapital call is fulfilled.'),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"asset lifecycle",src:a(7800).Z,width:"3398",height:"1754"})),(0,i.kt)("h3",{id:"close-capital-call"},"Close Capital Call"),(0,i.kt)("p",null,"Upon receiving sufficient funds from limited partners to meet the requirements of a capital call, the fund manager may\nproceed with closing the call and assigning the investment tokens. This is the final stage of the subscription process\nand involves a T-0 bilateral exchange between the Capital Raise and Subscription smart contracts, whereby the capital\nin the form of a USD tokenized deposit or omnicoin is exchanged for shares of the tokenized asset. This exchange takes\nplace in a single, atomic blockchain transaction, which streamlines the process by removing intermediaries and the need\nfor manual reconciliation and data verification."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"asset lifecycle",src:a(9393).Z,width:"3218",height:"1490"})),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"2",label:"Contract Details",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Raise contract ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/FigureTechnologies/marketpalace-raise-contract/blob/fb6735997247b96927b394e36570d09938301711/src/contract.rs#L109"},"close capital call")," entry point")),(0,i.kt)("hr",null)),(0,i.kt)(s.Z,{value:"3",label:"Example Transactions",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example ",(0,i.kt)("a",{parentName:"li",href:"https://explorer.provenance.io/tx/7A021B17114AF3F5473BE5DF0EE0580544A402A566DF5EA118FC15D64672FF86/8144885"},"GP closes capital call"))),(0,i.kt)("hr",null))),(0,i.kt)("h2",{id:"final-cap-table"},"Final Cap Table"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://explorer.provenance.io/asset/pb1ff3y36d8hhjxdvk0620z7j52hlpns0wnsmgvgydn0vqq5xx7lluq2hky4p.investment"},"investment coin Marker"),"\n(click to see live example on Provenance Explorer)\nnow represents the final cap table for the tokenized asset."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Example cap table:"),"\n",(0,i.kt)("img",{alt:"asset lifecycle",src:a(4983).Z,width:"3577",height:"1464"})),(0,i.kt)("h2",{id:"fund-asset-lifecycle"},"Fund Asset Lifecycle"),(0,i.kt)("h3",{id:"distributions"},"Distributions"),(0,i.kt)("p",null,"The Capital Raise and Subscription smart contracts on Provenance Blockchain provide a secure and efficient way\nto execute  fund distributions. The smart\ncontract acts as a self-executing agreement between the fund and its investors, where the terms of the agreement\nare encoded into the contract. The contract automatically executes the distribution of funds according to the set\nconditions without the need for intermediaries. This not only reduces the risk of errors and fraud but also saves\ntime and costs associated with manual processes."),(0,i.kt)("p",null,"Furthermore, the decentralized nature of blockchain provides a high level of transparency and security to the\ndistribution process. Transactions and distribution details are recorded on a public ledger, providing a clear\nand tamper-proof record of the fund's activities and distributions. This allows investors to monitor their investments\nand track the fund's performance in real-time. The use of smart contracts in private fund distributions not only\nimproves operational efficiency but also enhances trust and confidence among investors."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"2",label:"Contract Details",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Raise contract ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/FigureTechnologies/marketpalace-raise-contract/blob/fb6735997247b96927b394e36570d09938301711/src/contract.rs#L103"},"distribution")," entry point")),(0,i.kt)("hr",null)),(0,i.kt)(s.Z,{value:"3",label:"Example Transactions",mdxType:"TabItem"},(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Example ",(0,i.kt)("a",{parentName:"li",href:"https://explorer.provenance.io/tx/68F824AEC9ABE771D04DB69EF1405248911E767C70035EC73510F36FD82F70D0/6615090"},"distribution"))),(0,i.kt)("hr",null))),(0,i.kt)("h3",{id:"secondary-trading"},"Secondary Trading"),(0,i.kt)("p",null,"Tokenization offers innovative approaches to managing, distributing, and trading private funds, reducing barriers, and\nincreasing accessibility. This results in lower administrative expenses and faster time to market through a\nimmutable source of truth. Secondary trading through bilateral exchange with T-0 settlement enables two parties\nto instantly settle a transaction without any delay. This type of settlement reduces the risk of counterparty\ndefault and increases efficiency by allowing for immediate transfer of funds and securities, providing a\nsignificant advantage over traditional T+n settlement systems."),(0,i.kt)("p",null,"Benefits of the Provenance Blockchain ecosystem include the ability to use digital fund interests as collateral for capital\ncalls and loans, as well as the use of other digital assets for funding purposes. The use of an Account Attribute-based\npassporting system allows for seamless movement of buyers across investments, with secondary trades self-clearing\nand settling instantly using digital money."),(0,i.kt)("p",null,"Assets can be made available for secondary trading through a regulated alternative trading system (ATS) on Provenance Blockchain,\nimproving the liquidity of previously illiquid funds and reducing search and transaction costs. Additionally,\ndigital funds allow investors to fund capital calls using tokenized assets as collateral and provide greater\nopportunities to use fund interests as collateral for loans due to the increased certainty of ownership and\nenhanced liquidity offered by secondary trading windows."),(0,i.kt)("p",null,"Overall, Provenance Blockchain funds provide easy access to secondary liquidity through exchange-based trading. The process of\naccessing secondary liquidity is significantly streamlined through fund\ndigitization and representation on Provenance Blockchain. Creating bids and asks\nagainst an exchange contract is all that is needed to open up secondary liquidity for a digital fund."),(0,i.kt)("h3",{id:"secondary-trading-process"},"Secondary Trading Process"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Smart Contract creation"),": A secondary trading smart contract is created on the blockchain to manage the\ntokenized fund. The contract contains the rules and conditions for buying, selling, and transferring the tokens,\nincluding required account attributes for the participants as well as accepted denominations for settlement, for example."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Token Listing"),": The tokenized fund is listed on a decentralized exchange that supports the blockchain where\nthe tokens are stored. The exchange, marketplace, or trading system will be a web site or mobile app where participants\ncan connect their wallets to participate in the decentralized trading algorithm."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Buy and Sell Orders"),": Buyers and sellers can place orders on the decentralized exchange for the tokenized fund.\nThe smart contract automatically executes the trade by transferring the tokens from the seller's wallet to the\nbuyer's wallet, based on the agreed price and the rules encoded in the contract."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Settlement"),": The settlement of the trade occurs in real-time as the tokens are transferred on the blockchain.\nThe smart contract updates the token ownership records, providing a transparent and tamper-proof record of the trade.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Example:")," ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/FigureTechnologies/ats-smart-contract"},"Alternative Trading System Smart Contract")))}h.isMDXComponent=!0},2995:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/funds-lifecycle-accept-425b693b651bde481b00d1a3705e288f.png"},4983:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/funds-lifecycle-cap-table-6b3bcae7b7d364f0aac56cc0d8e1a6e9.png"},7800:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/funds-lifecycle-capital-deposit-beb00a7abc5c7c68e70da70ce533e7a9.png"},9393:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/funds-lifecycle-close-cap-call-5d0c4cabd6c4969023d6b2d75f5a3a8b.png"},7562:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/funds-lifecycle-instantiate-aae0ec242736bd22042340f6439687d5.png"},1268:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/funds-lifecycle-issue-cap-call-6a96d6e49db4351022b1f8e9fa73cf8f.png"},4572:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/funds-lifecycle-propose-e06115f29941b0d793047b0b08242e9a.png"},9524:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/funds-lifecycle-roles-0f21f760957d5d10e8953f949b912a3c.png"}}]);