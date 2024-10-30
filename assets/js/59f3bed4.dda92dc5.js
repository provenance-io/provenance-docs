"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[4935],{65877:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>m,contentTitle:()=>t,default:()=>d,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var a=n(74848),r=n(28453),i=n(41306);const l={},t="100 - Genesis Network Configuration",c={id:"pb/contributing/adr/blockchain-configuration-and-concepts/genesis-network-configuration",title:"100 - Genesis Network Configuration",description:"Changelog",source:"@site/docs/pb/contributing/adr/100-blockchain-configuration-and-concepts/100-genesis-network-configuration.mdx",sourceDirName:"pb/contributing/adr/100-blockchain-configuration-and-concepts",slug:"/pb/contributing/adr/blockchain-configuration-and-concepts/genesis-network-configuration",permalink:"/docs/pb/contributing/adr/blockchain-configuration-and-concepts/genesis-network-configuration",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:100,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"100 Blockchain Configuration and Concepts",permalink:"/docs/pb/contributing/adr/blockchain-configuration-and-concepts/"},next:{title:"101 - HD Wallets, Key Pairs, Addresses",permalink:"/docs/pb/contributing/adr/blockchain-configuration-and-concepts/hd-wallets-key-pairs-addresses"}},m={},h=[{value:"Changelog",id:"changelog",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Consensus Parameters",id:"consensus-parameters",level:3},{value:"A Note on Gas and Fees",id:"a-note-on-gas-and-fees",level:4},{value:"Genesis Validators",id:"genesis-validators",level:3},{value:"Hash Auction (Gas Fee Conversion)",id:"hash-auction-gas-fee-conversion",level:3},{value:"Status",id:"status",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}];function o(e){const s={a:"a",annotation:"annotation",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",math:"math",mi:"mi",mn:"mn",mo:"mo",mrow:"mrow",mtext:"mtext",p:"p",pre:"pre",semantics:"semantics",span:"span",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.header,{children:(0,a.jsx)(s.h1,{id:"100---genesis-network-configuration",children:"100 - Genesis Network Configuration"})}),"\n","\n",(0,a.jsx)(i.Y,{text:"Description of the contents of the genesis block, mainnet, testnet, and related configuration for connecting to the networks."}),"\n",(0,a.jsx)(s.h2,{id:"changelog",children:"Changelog"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"20200202: Initial version"}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"context",children:"Context"}),"\n",(0,a.jsx)(s.p,{children:"There are many different settings and parameters that must be included in the initial genesis of the blockchain. These parameters range from Tendermint settings related to Consensus to the initial state of ledger applications."}),"\n",(0,a.jsx)(s.h2,{id:"decision",children:"Decision"}),"\n",(0,a.jsx)(s.p,{children:"The initial structure of the blockchain will be as follows."}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:(0,a.jsx)(s.a,{href:"broken-link",children:"Consensus Parameters"})}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"consensus-parameters",children:"Consensus Parameters"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-text",children:"ConsensusParams {\n    BlockSize {\n        MaxBytes int = 22020096\n        MaxGas int   = 10000000 // a huge amount... more than we need but a value so that Gas will be turned on\n        TimeIOTAms   = 1000     // default?  Perhaps 500ms is better as a floor if a block filled early under load...\n    }\n    TxSize {\n        MaxBytes int =\n        MaxGas int   =\n    }\n    BlockGossip {\n        BlockPartSizeBytes int\n    }\n}\n"})}),"\n",(0,a.jsxs)(s.p,{children:["The ",(0,a.jsx)(s.code,{children:"BlockPartSizeBytes"})," and the ",(0,a.jsx)(s.code,{children:"BlockSize.MaxBytes"})," are enforced to be greater than 0. The former because we need a part size, the latter so that we always have at least some sanity check over the size of blocks."]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"https://github.com/tendermint/tendermint/blob/master/docs/architecture/adr-005-consensus-params.md",children:"ADR-005-consensus-params"})," ",(0,a.jsx)(s.a,{href:"https://docs.tendermint.com/master/spec/abci/apps.html#consensus-parameters",children:"Tendermint Documentation"})]}),"\n",(0,a.jsx)(s.h4,{id:"a-note-on-gas-and-fees",children:"A Note on Gas and Fees"}),"\n",(0,a.jsxs)(s.p,{children:["For Provenance Blockchain the accepted denom for fees is ",(0,a.jsx)(s.code,{children:"vspn"})," :::"]}),"\n",(0,a.jsx)(s.p,{children:"Transactions on Provenance Blockchain need to include a transaction fee in order to be processed. This fee pays for the gas required to run the transaction. The formula is the following:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-text",children:"fees = ceil(gas * gasPrices)\n"})}),"\n",(0,a.jsxs)(s.p,{children:["The ",(0,a.jsx)(s.code,{children:"gas"})," is dependent on the transaction. Different transaction require different amount of ",(0,a.jsx)(s.code,{children:"gas"}),". The ",(0,a.jsx)(s.code,{children:"gas"})," amount for a transaction is calculated as it is being processed, but there is a way to estimate it beforehand by using the ",(0,a.jsx)(s.code,{children:"auto"})," value for the ",(0,a.jsx)(s.code,{children:"gas"})," flag. Of course, this only gives an estimate. You can adjust this estimate with the flag ",(0,a.jsx)(s.code,{children:"--gas-adjustment"})," (default ",(0,a.jsx)(s.code,{children:"1.0"}),") if you want to be sure you provide enough ",(0,a.jsx)(s.code,{children:"gas"})," for the transaction."]}),"\n",(0,a.jsxs)(s.p,{children:["The ",(0,a.jsx)(s.code,{children:"gasPrice"})," is the price of each unit of ",(0,a.jsx)(s.code,{children:"gas"}),". Each validator sets a ",(0,a.jsx)(s.code,{children:"min-gas-price"})," value, and will only include transactions that have a ",(0,a.jsx)(s.code,{children:"gasPrice"})," greater than their ",(0,a.jsx)(s.code,{children:"min-gas-price"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:["The transaction ",(0,a.jsx)(s.code,{children:"fees"})," are the product of ",(0,a.jsx)(s.code,{children:"gas"})," and ",(0,a.jsx)(s.code,{children:"gasPrice"}),". As a user, you have to input 2 out of 3. The higher the ",(0,a.jsx)(s.code,{children:"gasPrice"}),"/",(0,a.jsx)(s.code,{children:"fees"}),", the higher the chance that your transaction will get included in a block. You can use fee as a flat calculation for a transaction but the easiest method is to simply set a gas price and use ",(0,a.jsx)(s.code,{children:"auto"})," for the gas flag."]}),"\n",(0,a.jsx)(s.h3,{id:"genesis-validators",children:"Genesis Validators"}),"\n",(0,a.jsx)(s.p,{children:"Per Hash specifications each of the initial member banks that run a validator node must stake 500,000,000hash against their node. This amount combined with the total of 12 validator nodes ensures that the total voting power will be at least 6000000000hash with each of the validator nodes maintaining the minimum required delegation. Additional delegations from hash holder are expected to slightly increase this amount of over time."}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-text",children:"Validators [\n    GenesisValidator {\n        Address = // ...\n        PubKey  = // ...\n        Power   = 500000000 // 500 million minimum staking requirement\n        Name    = example   // colchis, dvone, ellington, experian, feb, kempner, lakestar, medalist, passport, prime, sandler, templeton\n    }\n]\n"})}),"\n",(0,a.jsx)(s.p,{children:"For the genesis validator set we will issue a single node per existing member node. Within the Provenance Blockchain namespace we will run 3 nodes which will not be validators but will serve as interface points for internal and external blockchain applications to connect to. These nodes will bridge the internal validator network supported by Figure/Provenance Blockchain with the external public network. It is acceptable for a validator to run their own configuration of a protected validator network separately."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"https://kb.certus.one/peers.html",children:"Peer and Validator Networking"})}),"\n",(0,a.jsx)(s.h3,{id:"hash-auction-gas-fee-conversion",children:"Hash Auction (Gas Fee Conversion)"}),"\n",(0,a.jsx)(s.p,{children:"Currently, accredited investors who are Provenance Blockchain members can trade Hash directly with other members. Soon, these members are able to sell their Hash to the administrator as part of the Dutch Auction for fee distribution (\u201cthe fee auction\u201d). Distributed fees are the primary driver of economic value of Hash."}),"\n",(0,a.jsxs)(s.p,{children:["In the fee auction, members set a reserve price for their Hash. For example, they may opt to sell 100 Hash at ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mi,{mathvariant:"normal",children:"/"}),(0,a.jsx)(s.mi,{children:"H"}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mi,{children:"h"}),(0,a.jsx)(s.mo,{separator:"true",children:","}),(0,a.jsx)(s.mn,{children:"200"}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"t"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"1/Hash, 200 at "})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"1em",verticalAlign:"-0.25em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1/"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.08125em"},children:"H"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"h"}),(0,a.jsx)(s.span,{className:"mpunct",children:","}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mord",children:"200"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"t"})]})})]}),"2, etc. Members are not obligated to set reserve prices. When a member pays a transaction fee on Provenance Blockchain, that fee is auctioned at the clearing reserve price. For example, if the fee was ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"d"}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mi,{children:"h"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"b"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mi,{children:"p"}),(0,a.jsx)(s.mi,{children:"r"}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mi,{children:"c"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"f"}),(0,a.jsx)(s.mi,{children:"o"}),(0,a.jsx)(s.mi,{children:"r"}),(0,a.jsx)(s.mi,{children:"H"}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mi,{children:"h"}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mi,{children:"s"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"1 and the best price for Hash is "})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"an"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"h"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"b"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"es"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"tp"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"ce"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.08125em"},children:"orH"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"hi"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"s"})]})})]}),"1/Hash, that offer would get filled. The seller then gets the $1, and the Hash is distributed to the stakeholders, the administrator and the other Hash holders."]}),"\n",(0,a.jsxs)(s.p,{children:["If the best offer cannot clear the auction, then the next best offer is taken and so on until the fee clears. For example, assume the fee is ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mo,{separator:"true",children:","}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"d"}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mi,{children:"h"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"r"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"o"}),(0,a.jsx)(s.mi,{children:"f"}),(0,a.jsx)(s.mi,{children:"f"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"r"}),(0,a.jsx)(s.mi,{children:"o"}),(0,a.jsx)(s.mi,{children:"f"}),(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mi,{children:"H"}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mi,{children:"h"}),(0,a.jsx)(s.mi,{children:"f"}),(0,a.jsx)(s.mi,{children:"o"}),(0,a.jsx)(s.mi,{children:"r"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"1, and there is an offer of 1 Hash for "})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mpunct",children:","}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"an"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"d"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"h"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"ere"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"an"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"ff"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"ero"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.08125em"},children:"H"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"h"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"or"})]})})]}),"0.50 and 1 Hash for ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mn,{children:"1"}),(0,a.jsx)(s.mi,{children:"b"}),(0,a.jsx)(s.mi,{children:"y"}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mi,{children:"w"}),(0,a.jsx)(s.mi,{children:"o"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"p"}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"r"}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"m"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"m"}),(0,a.jsx)(s.mi,{children:"b"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"r"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mi,{mathvariant:"normal",children:"."}),(0,a.jsx)(s.mi,{children:"I"}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mi,{children:"h"}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mi,{children:"c"}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mo,{separator:"true",children:","}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mi,{children:"h"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"f"}),(0,a.jsx)(s.mi,{children:"i"}),(0,a.jsx)(s.mi,{children:"r"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mi,{children:"o"}),(0,a.jsx)(s.mi,{children:"f"}),(0,a.jsx)(s.mi,{children:"f"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"r"}),(0,a.jsx)(s.mi,{children:"w"}),(0,a.jsx)(s.mi,{children:"o"}),(0,a.jsx)(s.mi,{children:"n"}),(0,a.jsx)(s.mtext,{children:"\u2019"}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mi,{children:"c"}),(0,a.jsx)(s.mi,{children:"l"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"r"}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"t"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"1 by two separate members. In this case, the first offer won\u2019t clear at "})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"b"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.03588em"},children:"y"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"tw"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"ose"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"p"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"m"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"mb"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"ers"}),(0,a.jsx)(s.span,{className:"mord",children:"."}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.07847em"},children:"I"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"hi"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"sc"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"se"}),(0,a.jsx)(s.span,{className:"mpunct",children:","}),(0,a.jsx)(s.span,{className:"mspace",style:{marginRight:"0.1667em"}}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"h"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"f"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"i"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"rs"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"ff"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"er"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02691em"},children:"w"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"o"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"n"}),(0,a.jsx)(s.span,{className:"mord",children:"\u2019"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"t"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"c"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"l"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"e"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.02778em"},children:"r"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"t"})]})})]}),"0.50, so the price moves to ",(0,a.jsxs)(s.span,{className:"katex",children:[(0,a.jsx)(s.span,{className:"katex-mathml",children:(0,a.jsx)(s.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,a.jsxs)(s.semantics,{children:[(0,a.jsxs)(s.mrow,{children:[(0,a.jsx)(s.mn,{children:"1."}),(0,a.jsx)(s.mi,{children:"A"}),(0,a.jsx)(s.mi,{children:"l"}),(0,a.jsx)(s.mi,{children:"l"}),(0,a.jsx)(s.mi,{children:"t"}),(0,a.jsx)(s.mi,{children:"h"}),(0,a.jsx)(s.mi,{children:"r"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"o"}),(0,a.jsx)(s.mi,{children:"f"}),(0,a.jsx)(s.mi,{children:"f"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"r"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mi,{children:"e"}),(0,a.jsx)(s.mi,{children:"l"}),(0,a.jsx)(s.mi,{children:"l"}),(0,a.jsx)(s.mn,{children:"0.33"}),(0,a.jsx)(s.mi,{children:"H"}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"s"}),(0,a.jsx)(s.mi,{children:"h"}),(0,a.jsx)(s.mi,{children:"a"}),(0,a.jsx)(s.mi,{children:"t"})]}),(0,a.jsx)(s.annotation,{encoding:"application/x-tex",children:"1. All three offers sell 0.33 Hash at "})]})})}),(0,a.jsx)(s.span,{className:"katex-html","aria-hidden":"true",children:(0,a.jsxs)(s.span,{className:"base",children:[(0,a.jsx)(s.span,{className:"strut",style:{height:"0.8889em",verticalAlign:"-0.1944em"}}),(0,a.jsx)(s.span,{className:"mord",children:"1."}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"A"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"llt"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"h"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"reeo"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.10764em"},children:"ff"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"ersse"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.01968em"},children:"ll"}),(0,a.jsx)(s.span,{className:"mord",children:"0.33"}),(0,a.jsx)(s.span,{className:"mord mathnormal",style:{marginRight:"0.08125em"},children:"H"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"a"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"s"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"ha"}),(0,a.jsx)(s.span,{className:"mord mathnormal",children:"t"})]})})]}),"1/Hash."]}),"\n",(0,a.jsx)(s.h2,{id:"status",children:"Status"}),"\n",(0,a.jsx)(s.p,{children:"Proposed"}),"\n",(0,a.jsx)(s.h2,{id:"consequences",children:"Consequences"}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:'This section describes the resulting context, after applying the decision. All consequences should be listed here, not just the "positive" ones. A particular decision may have positive, negative, and neutral consequences, but all of them affect the team and project in the future.'}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"positive",children:"Positive"}),"\n",(0,a.jsx)(s.p,{children:"{positive consequences}"}),"\n",(0,a.jsx)(s.h3,{id:"negative",children:"Negative"}),"\n",(0,a.jsx)(s.p,{children:"{negative consequences}"}),"\n",(0,a.jsx)(s.h3,{id:"neutral",children:"Neutral"}),"\n",(0,a.jsx)(s.p,{children:"{neutral consequences}"}),"\n",(0,a.jsx)(s.h2,{id:"references",children:"References"}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsx)(s.p,{children:"A list of relevant PRs, issues that led up to this, or articles referenced for why we made the given design choice? A list of external reference links for any included above in [markdown reference format][ref-slug-or-number]"}),"\n",(0,a.jsxs)(s.p,{children:["[ref-slug-or-number]: ",(0,a.jsx)(s.a,{href:"http://example.org/reference/link",children:"http://example.org/reference/link"})]}),"\n"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"{reference link}"}),"\n",(0,a.jsx)(s.li,{children:"{markdown references}"}),"\n"]})]})}function d(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},41306:(e,s,n)=>{n.d(s,{Y:()=>r});n(96540);var a=n(74848);const r=e=>{let{text:s}=e;return(0,a.jsx)("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500",children:s})}},28453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>t});var a=n(96540);const r={},i=a.createContext(r);function l(e){const s=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(i.Provider,{value:s},e.children)}}}]);