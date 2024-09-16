"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[1632],{32354:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>h});var a=t(74848),s=t(28453),i=t(11470),r=t(19365);const c={},l="Example: Raising Capital",o={id:"learn/asset-lifecycle/capital-raise-example",title:"Example: Raising Capital",description:"A blockchain-native fund is one in which the issuance of fund interests, including capital commitments,",source:"@site/docs/learn/asset-lifecycle/08-capital-raise-example.md",sourceDirName:"learn/asset-lifecycle",slug:"/learn/asset-lifecycle/capital-raise-example",permalink:"/docs/learn/asset-lifecycle/capital-raise-example",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{},sidebar:"assetLifecycleSidebar",previous:{title:"Example: Loan Pools",permalink:"/docs/learn/asset-lifecycle/lending-example"}},d={},h=[{value:"Fund Onboarding",id:"fund-onboarding",level:2},{value:"GP Configures Raise Contract",id:"gp-configures-raise-contract",level:3},{value:"Subscriptions",id:"subscriptions",level:2},{value:"LP Proposes Subscription",id:"lp-proposes-subscription",level:3},{value:"GP Accepts Subscription",id:"gp-accepts-subscription",level:3},{value:"Capital Calls",id:"capital-calls",level:2},{value:"GP Issues Capital Call",id:"gp-issues-capital-call",level:3},{value:"LP Deposits Fiat",id:"lp-deposits-fiat",level:3},{value:"Close Capital Call",id:"close-capital-call",level:3},{value:"Final Cap Table",id:"final-cap-table",level:2},{value:"Fund Asset Lifecycle",id:"fund-asset-lifecycle",level:2},{value:"Distributions",id:"distributions",level:3},{value:"Secondary Trading",id:"secondary-trading",level:3},{value:"Secondary Trading Process",id:"secondary-trading-process",level:3}];function u(e){const n={a:"a",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"example-raising-capital",children:"Example: Raising Capital"}),"\n",(0,a.jsx)(n.p,{children:"A blockchain-native fund is one in which the issuance of fund interests, including capital commitments,\ncontributions, distributions, and any future transfer of those interests, are recorded on a blockchain.\nThe record of the fund interest on the blockchain is designed to be a legally enforceable contract."}),"\n",(0,a.jsx)(n.p,{children:"A cap table managed on-chain provides a real time record of ownership and eliminates the need for reconciliation.\nAdditionally, blockchain allows for certainty of assets on both sides of a trade (e.g. digital fund interest in a seller account,\ntokenized deposits in a buyer account) and a protocol that matches that trade, facilitates value transfer,\nand creates an immutable record of the transaction."}),"\n",(0,a.jsx)(n.p,{children:'In this example, we\'ll show how a capital raise process for a private fund can be performed on Provenance through smart\ncontract administration. The fund raise process is administered primarily by a "Capital Raise" smart contract, which\nis instantiated and configured for this particular fund. Each fund on Provenance Blockchain has their own individual copy\nof the raise contract specific to its own unique processes. Subscriptions to the fund by investors are also governed by\nsmart contract, with a personalized "Subscription" smart contract instantiated for each investor.'}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"asset lifecycle",src:t(21791).A+"",width:"2467",height:"468"})}),"\n",(0,a.jsxs)(n.p,{children:['Throughout this example, the "GP" (General Partner) refers to the fund issuer or fund manager, while "LP" (Limited\nPartner) represents the multiple individuals or entities subscribing (committing capital) to the fund. At the end of the\nprocess, the cap table for the fund will be established as an Investment ',(0,a.jsx)(n.a,{href:"/docs/sdk/marker/",children:"Marker"}),"\nwith the token representing shares in the fund."]}),"\n",(0,a.jsx)(n.h2,{id:"fund-onboarding",children:"Fund Onboarding"}),"\n",(0,a.jsx)(n.h3,{id:"gp-configures-raise-contract",children:"GP Configures Raise Contract"}),"\n",(0,a.jsxs)(n.p,{children:["Each fund's capital raise process is governed by a unique instance of the Provenance Blockchain ",(0,a.jsx)(n.a,{href:"https://github.com/FigureTechnologies/marketpalace-raise-contract",children:(0,a.jsx)(n.strong,{children:"Capital Raise smart contract"})}),".\nThe smart contract executable is loaded onto the blockchain through a ",(0,a.jsx)(n.a,{href:"/docs/pb/ecosystem/governance",children:"governance proposal"}),", which requires a vote from\nthe delegator community. Once the vote is passed, the contract's ",(0,a.jsx)(n.a,{href:"/docs/sdk/z-smart-contracts/",children:"WASM"})," binary is stored on the blockchain. Each time a fund\nwishes to use the contract for a capital raise, a new instance of the smart contract is instantiated by the GP with a\nconfiguration specific for the fund."]}),"\n",(0,a.jsx)(n.p,{children:"The Raise smart contract is used to manage investments in a fundraising campaign. It takes into account investor\neligibility criteria and target raise amount, and is administered by a specific address. The contract creates two\ndigital assets on the Provenance Blockchain: commitment coin and investment coin. Commitment coin represents a capital\nobligation from a subscription, while investment coin represents the final state of investment in the fund.\nThe contract is designed to handle fundraising campaigns where capital commitment and investment are\ndecoupled, and can track the entire lifecycle of an asset."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"asset lifecycle",src:t(60952).A+"",width:"3698",height:"2326"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example Contract Configuration:"})}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Value"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"acceptable_accreditations"})}),(0,a.jsx)(n.td,{children:"funds506c.passport.pb"}),(0,a.jsx)(n.td,{children:"Indicates LP required accreditations (506c qualified investor)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"subscription_code_id"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.a,{href:"https://explorer.provenance.io/code/12",children:"12"})}),(0,a.jsx)(n.td,{children:"Indicates which smart contract to use for LP subscriptions"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"capital_denom"})}),(0,a.jsxs)(n.td,{children:[(0,a.jsx)(n.a,{href:"https://explorer.provenance.io/asset/cfigureomni",children:"cfigureomni"})," (USD cents)"]}),(0,a.jsx)(n.td,{children:"Indicates which settlement token will be accepted as capital by the GP"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.strong,{children:"capital_per_share"})}),(0,a.jsx)(n.td,{children:"1,000"}),(0,a.jsx)(n.td,{children:"Indicates price per share of fund in capital_denom currency (USD $10)"})]})]})]}),"\n",(0,a.jsx)("br",{}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsxs)(r.A,{value:"2",label:"Contract Details",children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Capital Raise smart contract ",(0,a.jsx)(n.a,{href:"https://github.com/FigureTechnologies/marketpalace-raise-contract",children:"source code"})]}),"\n",(0,a.jsxs)(n.li,{children:["Capital Raise smart contract ",(0,a.jsx)(n.a,{href:"https://explorer.provenance.io/proposal/41",children:"governance proposal"})]}),"\n",(0,a.jsxs)(n.li,{children:["Capital Raise smart contract ",(0,a.jsx)(n.a,{href:"https://explorer.provenance.io/code/22",children:"wasm code"})]}),"\n"]}),(0,a.jsx)(n.hr,{})]}),(0,a.jsxs)(r.A,{value:"3",label:"Example Transactions",children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Example ",(0,a.jsx)(n.a,{href:"https://explorer.provenance.io/tx/8C3253C39A3A952486AF35A7C5263838A074C2A07102BDFE2D1BDE2AE2E819A1/5877851",children:"contract instantiation tx"})]}),"\n",(0,a.jsxs)(n.li,{children:["Example ",(0,a.jsx)(n.a,{href:"https://explorer.provenance.io/contract/pb1ff3y36d8hhjxdvk0620z7j52hlpns0wnsmgvgydn0vqq5xx7lluq2hky4p",children:"instantiated contract"})," with configuration (see History tab)"]}),"\n",(0,a.jsxs)(n.li,{children:["Example ",(0,a.jsx)(n.a,{href:"https://explorer.provenance.io/asset/pb1ff3y36d8hhjxdvk0620z7j52hlpns0wnsmgvgydn0vqq5xx7lluq2hky4p.commitment",children:"commitment coin Marker"})]}),"\n",(0,a.jsxs)(n.li,{children:["Example ",(0,a.jsx)(n.a,{href:"https://explorer.provenance.io/asset/pb1ff3y36d8hhjxdvk0620z7j52hlpns0wnsmgvgydn0vqq5xx7lluq2hky4p.investment",children:"investment coin Marker"})]}),"\n"]}),(0,a.jsx)(n.hr,{})]})]}),"\n",(0,a.jsx)(n.h2,{id:"subscriptions",children:"Subscriptions"}),"\n",(0,a.jsx)(n.h3,{id:"lp-proposes-subscription",children:"LP Proposes Subscription"}),"\n",(0,a.jsx)(n.p,{children:"The subscription smart contract is used in the process of investing in a fund.\nIt manages the investor's interaction with the raise and holds the commitment coin issued by the associated raise\ncontract. The subscription contract also verifies the investor's eligibility to participate in the raise and acts as\na smart wallet, facilitating the exchange of various types of coins (commitment, investment, and payment).\nThe contract also tracks and manages redemptions and distributions that may occur over the course of the investment."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"asset lifecycle",src:t(40182).A+"",width:"3170",height:"1378"})}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsxs)(r.A,{value:"2",label:"Contract Details",children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Raise contract ",(0,a.jsx)(n.a,{href:"https://github.com/FigureTechnologies/marketpalace-raise-contract/blob/fb6735997247b96927b394e36570d09938301711/src/contract.rs#L94",children:"propose subscription"})," entry point"]}),"\n",(0,a.jsxs)(n.li,{children:["Raise contract ",(0,a.jsx)(n.a,{href:"https://github.com/FigureTechnologies/marketpalace-raise-contract/blob/fb6735997247b96927b394e36570d09938301711/src/subscribe.rs#L36",children:"instantiate subscription contract"})]}),"\n",(0,a.jsxs)(n.li,{children:["Subscription smart contract ",(0,a.jsx)(n.a,{href:"https://github.com/FigureTechnologies/marketpalace-subscription-contract",children:"source code"})]}),"\n",(0,a.jsxs)(n.li,{children:["Subscription smart contract ",(0,a.jsx)(n.a,{href:"https://explorer.provenance.io/proposal/42",children:"governance proposal"})]}),"\n",(0,a.jsxs)(n.li,{children:["Subscription smart contract ",(0,a.jsx)(n.a,{href:"https://explorer.provenance.io/code/23",children:"wasm code"})]}),"\n"]}),(0,a.jsx)(n.hr,{})]}),(0,a.jsxs)(r.A,{value:"3",label:"Example Transactions",children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Example ",(0,a.jsx)(n.a,{href:"https://explorer.provenance.io/contract/pb1fsr88cf0edxjfejhhhz90uqp7634ydvggea0n9thz74mcxn2mrxqahnuys",children:"Subscription Contract instantiated"})," for investor"]}),"\n"]}),(0,a.jsx)(n.hr,{})]})]}),"\n",(0,a.jsx)(n.h3,{id:"gp-accepts-subscription",children:"GP Accepts Subscription"}),"\n",(0,a.jsx)(n.p,{children:"The issuer of the raise has the ability to accept proposed subscriptions through the raise contract. When a subscription is\naccepted, commitment coin is minted and transferred to the subscription smart contract (smart wallet) for the investor.\nThe commitment coin represents uncalled capital in the fund structure. It has immediate value for the raise."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"asset lifecycle",src:t(94942).A+"",width:"3202",height:"1288"})}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsxs)(r.A,{value:"2",label:"Contract Details",children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Raise contract ",(0,a.jsx)(n.a,{href:"https://github.com/FigureTechnologies/marketpalace-raise-contract/blob/fb6735997247b96927b394e36570d09938301711/src/contract.rs#L100",children:"accept submission"})," entry point"]}),"\n"]}),(0,a.jsx)(n.hr,{})]}),(0,a.jsxs)(r.A,{value:"3",label:"Example Transactions",children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Example of ",(0,a.jsx)(n.a,{href:"https://explorer.provenance.io/tx/D5921879CA11B3197D0E0D0298D51FC7DD4EF17EBAE24CBB872D024899F76093/5877856",children:"GP accepting subscription"})]}),"\n"]}),(0,a.jsx)(n.hr,{})]})]}),"\n",(0,a.jsx)(n.h2,{id:"capital-calls",children:"Capital Calls"}),"\n",(0,a.jsx)(n.h3,{id:"gp-issues-capital-call",children:"GP Issues Capital Call"}),"\n",(0,a.jsx)(n.p,{children:"Capital calls notify Investors using Provenance Event Stream"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"asset lifecycle",src:t(30161).A+"",width:"3666",height:"1912"})}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsxs)(r.A,{value:"2",label:"Contract Details",children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Raise contract ",(0,a.jsx)(n.a,{href:"https://github.com/FigureTechnologies/marketpalace-raise-contract/blob/fb6735997247b96927b394e36570d09938301711/src/contract.rs#L103",children:"issue capital call"})," entry point"]}),"\n"]}),(0,a.jsx)(n.hr,{})]}),(0,a.jsxs)(r.A,{value:"3",label:"Example Transactions",children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Example of ",(0,a.jsx)(n.a,{href:"https://explorer.provenance.io/tx/ED4FCD20ABE8315B5BBC1A4CB3033DF1400C3A7BCB9B596FBD454DC953EE61AC/5877857",children:"GP issuing capital call"})]}),"\n"]}),(0,a.jsx)(n.hr,{})]})]}),"\n",(0,a.jsx)(n.h3,{id:"lp-deposits-fiat",children:"LP Deposits Fiat"}),"\n",(0,a.jsx)(n.p,{children:'When a GP makes a capital call, the investor in a digital fund will fund the capital call using USD represented on chain\nby a token representing the fiat deposit at an Omnibus Bank. (The stablecoin token is referred to as a "tokenized deposit" or\n"omnicoin").'}),"\n",(0,a.jsx)(n.p,{children:'Once the omnicoin is deposited in the investor\'s "smart wallet" (subscription contract), the\ncapital call is fulfilled.'}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"asset lifecycle",src:t(53341).A+"",width:"3398",height:"1754"})}),"\n",(0,a.jsx)(n.h3,{id:"close-capital-call",children:"Close Capital Call"}),"\n",(0,a.jsx)(n.p,{children:"Upon receiving sufficient funds from limited partners to meet the requirements of a capital call, the fund manager may\nproceed with closing the call and assigning the investment tokens. This is the final stage of the subscription process\nand involves a T-0 bilateral exchange between the Capital Raise and Subscription smart contracts, whereby the capital\nin the form of a USD tokenized deposit or omnicoin is exchanged for shares of the tokenized asset. This exchange takes\nplace in a single, atomic blockchain transaction, which streamlines the process by removing intermediaries and the need\nfor manual reconciliation and data verification."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"asset lifecycle",src:t(11346).A+"",width:"3218",height:"1490"})}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsxs)(r.A,{value:"2",label:"Contract Details",children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Raise contract ",(0,a.jsx)(n.a,{href:"https://github.com/FigureTechnologies/marketpalace-raise-contract/blob/fb6735997247b96927b394e36570d09938301711/src/contract.rs#L109",children:"close capital call"})," entry point"]}),"\n"]}),(0,a.jsx)(n.hr,{})]}),(0,a.jsxs)(r.A,{value:"3",label:"Example Transactions",children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Example ",(0,a.jsx)(n.a,{href:"https://explorer.provenance.io/tx/7A021B17114AF3F5473BE5DF0EE0580544A402A566DF5EA118FC15D64672FF86/8144885",children:"GP closes capital call"})]}),"\n"]}),(0,a.jsx)(n.hr,{})]})]}),"\n",(0,a.jsx)(n.h2,{id:"final-cap-table",children:"Final Cap Table"}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.a,{href:"https://explorer.provenance.io/asset/pb1ff3y36d8hhjxdvk0620z7j52hlpns0wnsmgvgydn0vqq5xx7lluq2hky4p.investment",children:"investment coin Marker"}),"\n(click to see live example on Provenance Explorer)\nnow represents the final cap table for the tokenized asset."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"Example cap table:"}),"\n",(0,a.jsx)(n.img,{alt:"asset lifecycle",src:t(85963).A+"",width:"3577",height:"1464"})]}),"\n",(0,a.jsx)(n.h2,{id:"fund-asset-lifecycle",children:"Fund Asset Lifecycle"}),"\n",(0,a.jsx)(n.h3,{id:"distributions",children:"Distributions"}),"\n",(0,a.jsx)(n.p,{children:"The Capital Raise and Subscription smart contracts on Provenance Blockchain provide a secure and efficient way\nto execute fund distributions. The smart\ncontract acts as a self-executing agreement between the fund and its investors, where the terms of the agreement\nare encoded into the contract. The contract automatically executes the distribution of funds according to the set\nconditions without the need for intermediaries. This not only reduces the risk of errors and fraud but also saves\ntime and costs associated with manual processes."}),"\n",(0,a.jsx)(n.p,{children:"Furthermore, the decentralized nature of blockchain provides a high level of transparency and security to the\ndistribution process. Transactions and distribution details are recorded on a public ledger, providing a clear\nand tamper-proof record of the fund's activities and distributions. This allows investors to monitor their investments\nand track the fund's performance in real-time. The use of smart contracts in private fund distributions not only\nimproves operational efficiency but also enhances trust and confidence among investors."}),"\n",(0,a.jsxs)(i.A,{children:[(0,a.jsxs)(r.A,{value:"2",label:"Contract Details",children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Raise contract ",(0,a.jsx)(n.a,{href:"https://github.com/FigureTechnologies/marketpalace-raise-contract/blob/fb6735997247b96927b394e36570d09938301711/src/contract.rs#L103",children:"distribution"})," entry point"]}),"\n"]}),(0,a.jsx)(n.hr,{})]}),(0,a.jsxs)(r.A,{value:"3",label:"Example Transactions",children:[(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Example ",(0,a.jsx)(n.a,{href:"https://explorer.provenance.io/tx/68F824AEC9ABE771D04DB69EF1405248911E767C70035EC73510F36FD82F70D0/6615090",children:"distribution"})]}),"\n"]}),(0,a.jsx)(n.hr,{})]})]}),"\n",(0,a.jsx)(n.h3,{id:"secondary-trading",children:"Secondary Trading"}),"\n",(0,a.jsx)(n.p,{children:"Tokenization offers innovative approaches to managing, distributing, and trading private funds, reducing barriers, and\nincreasing accessibility. This results in lower administrative expenses and faster time to market through a\nimmutable source of truth. Secondary trading through bilateral exchange with T-0 settlement enables two parties\nto instantly settle a transaction without any delay. This type of settlement reduces the risk of counterparty\ndefault and increases efficiency by allowing for immediate transfer of funds and securities, providing a\nsignificant advantage over traditional T+n settlement systems."}),"\n",(0,a.jsx)(n.p,{children:"Benefits of the Provenance Blockchain ecosystem include the ability to use digital fund interests as collateral for capital\ncalls and loans, as well as the use of other digital assets for funding purposes. The use of an Account Attribute-based\npassporting system allows for seamless movement of buyers across investments, with secondary trades self-clearing\nand settling instantly using digital money."}),"\n",(0,a.jsx)(n.p,{children:"Assets can be made available for secondary trading through a regulated alternative trading system (ATS) on Provenance Blockchain,\nimproving the liquidity of previously illiquid funds and reducing search and transaction costs. Additionally,\ndigital funds allow investors to fund capital calls using tokenized assets as collateral and provide greater\nopportunities to use fund interests as collateral for loans due to the increased certainty of ownership and\nenhanced liquidity offered by secondary trading windows."}),"\n",(0,a.jsx)(n.p,{children:"Overall, Provenance Blockchain funds provide easy access to secondary liquidity through exchange-based trading. The process of\naccessing secondary liquidity is significantly streamlined through fund\ndigitization and representation on Provenance Blockchain. Creating bids and asks\nagainst an exchange contract is all that is needed to open up secondary liquidity for a digital fund."}),"\n",(0,a.jsx)(n.h3,{id:"secondary-trading-process",children:"Secondary Trading Process"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Smart Contract creation"}),": A secondary trading smart contract is created on the blockchain to manage the\ntokenized fund. The contract contains the rules and conditions for buying, selling, and transferring the tokens,\nincluding required account attributes for the participants as well as accepted denominations for settlement, for example."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Token Listing"}),": The tokenized fund is listed on a decentralized exchange that supports the blockchain where\nthe tokens are stored. The exchange, marketplace, or trading system will be a web site or mobile app where participants\ncan connect their wallets to participate in the decentralized trading algorithm."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Buy and Sell Orders"}),": Buyers and sellers can place orders on the decentralized exchange for the tokenized fund.\nThe smart contract automatically executes the trade by transferring the tokens from the seller's wallet to the\nbuyer's wallet, based on the agreed price and the rules encoded in the contract."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Settlement"}),": The settlement of the trade occurs in real-time as the tokens are transferred on the blockchain.\nThe smart contract updates the token ownership records, providing a transparent and tamper-proof record of the trade."]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Example:"})," ",(0,a.jsx)(n.a,{href:"https://github.com/FigureTechnologies/ats-smart-contract",children:"Alternative Trading System Smart Contract"})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},19365:(e,n,t)=>{t.d(n,{A:()=>r});t(96540);var a=t(34164);const s={tabItem:"tabItem_Ymn6"};var i=t(74848);function r(e){let{children:n,hidden:t,className:r}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,r),hidden:t,children:n})}},11470:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(96540),s=t(34164),i=t(23104),r=t(56347),c=t(205),l=t(57485),o=t(31682),d=t(89466);function h(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:t}=e;const s=(0,r.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=u(e),[r,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[o,h]=f({queryString:t,groupId:s}),[m,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,d.Dv)(t);return[s,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),x=(()=>{const e=o??m;return p({value:e,tabValues:i})?e:null})();(0,c.A)((()=>{x&&l(x)}),[x]);return{selectedValue:r,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),b(e)}),[h,b,i]),tabValues:i}}var b=t(92303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(74848);function v(e){let{className:n,block:t,selectedValue:a,selectValue:r,tabValues:c}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),s=c[t].value;s!==a&&(o(n),r(s))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:c.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...i,className:(0,s.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=m(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,g.jsx)(v,{...n,...e}),(0,g.jsx)(j,{...n,...e})]})}function w(e){const n=(0,b.A)();return(0,g.jsx)(y,{...e,children:h(e.children)},String(n))}},94942:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/funds-lifecycle-accept-425b693b651bde481b00d1a3705e288f.png"},85963:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/funds-lifecycle-cap-table-6b3bcae7b7d364f0aac56cc0d8e1a6e9.png"},53341:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/funds-lifecycle-capital-deposit-beb00a7abc5c7c68e70da70ce533e7a9.png"},11346:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/funds-lifecycle-close-cap-call-5d0c4cabd6c4969023d6b2d75f5a3a8b.png"},60952:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/funds-lifecycle-instantiate-aae0ec242736bd22042340f6439687d5.png"},30161:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/funds-lifecycle-issue-cap-call-6a96d6e49db4351022b1f8e9fa73cf8f.png"},40182:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/funds-lifecycle-propose-e06115f29941b0d793047b0b08242e9a.png"},21791:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/funds-lifecycle-roles-0f21f760957d5d10e8953f949b912a3c.png"},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>c});var a=t(96540);const s={},i=a.createContext(s);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);