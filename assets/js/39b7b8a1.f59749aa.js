"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[3302],{47958:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var t=s(85893),r=s(11151);const a={},o="Tokenized Assets",i={id:"learn/asset-lifecycle/markers",title:"Tokenized Assets",description:"Asset tokenization is the process of converting rights to an asset into a digital token on a blockchain, allowing the",source:"@site/docs/learn/asset-lifecycle/03-markers.md",sourceDirName:"learn/asset-lifecycle",slug:"/learn/asset-lifecycle/markers",permalink:"/docs/learn/asset-lifecycle/markers",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"assetLifecycleSidebar",previous:{title:"Financial NFTs",permalink:"/docs/learn/asset-lifecycle/nfts"},next:{title:"Example: Loan Pools",permalink:"/docs/learn/asset-lifecycle/lending-example"}},c={},l=[{value:"Coins and Tokens",id:"coins-and-tokens",level:2},{value:"Tokenized Asset Control",id:"tokenized-asset-control",level:2},{value:"Restricted Token Transfer",id:"restricted-token-transfer",level:2},{value:"Asset Pools",id:"asset-pools",level:2},{value:"How to Create a Marker",id:"how-to-create-a-marker",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"tokenized-assets",children:"Tokenized Assets"}),"\n",(0,t.jsx)(n.p,{children:"Asset tokenization is the process of converting rights to an asset into a digital token on a blockchain, allowing the\nasset to be easily transferable, fractional, and tradable on various markets. This includes tangible assets like\nreal estate, fine art, and even commodities, as well as intangible assets such as intellectual property,\ninvestment funds, and others. The tokenization process helps to increase the liquidity of these assets, as well as\nmaking them more accessible to a wider range of investors."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Real World Assets"})," (RWA) refers to tangible or intangible assets that have value and can be traded, bought, or sold.\nExamples of RWAs include:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Physical assets such as real estate, commodities, and personal property"}),"\n",(0,t.jsx)(n.li,{children:"Financial assets such as stocks, bonds, and bank deposits"}),"\n",(0,t.jsx)(n.li,{children:"Intellectual property such as patents, trademarks, and copyrights"}),"\n",(0,t.jsx)(n.li,{children:"Natural resources such as oil, gold, and timber"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Just like cryptocurrencies, tokenized assets can be bought, traded, and held in digital wallets by individuals or managed by an investment platform."}),"\n",(0,t.jsxs)(n.p,{children:["On Provenance Blockchain, all tokenized assets (including cryptocurrencies, tokens, asset pools, cap tables,\nstablecoins, and digital money) are defined by the ",(0,t.jsx)(n.a,{href:"/docs/pb/modules/marker-module",children:(0,t.jsx)(n.strong,{children:"Marker module"})}),".\nA Provenance Blockchain ",(0,t.jsx)(n.strong,{children:"Marker"})," is a flexible and nuanced container for all asset types that allows for\ncustom configuration and administration of an asset token."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"marker structure",src:s(62373).Z+"",width:"2566",height:"860"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Marker:"})," A special type of account (having its own address ) that can directly represent an asset or can hold other assets as\ncollateral/escrow. Ownership of the Marker asset is divided into fractional parts represented by a token. The actions and\nrules of the Marker can be automated and monitored by one or more smart contracts."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Token:"})," A type of digital asset that represents a specific value on a blockchain. Tokens are expressed in coins,\nand the rules for how they can be used, such as how many are in circulation, are defined in advance.\nTokens are designed with specific rules that govern their supply and access control permissions,\nproviding a more comprehensive and sophisticated representation of value and ownership."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Coin:"})," A digital representation of unit value that can be transferred from one person to another. Coins have a unique\nname, and their value is expressed as a whole number. Sending coins is as simple as a one-way transaction and requires\nonly a signature from the sender to confirm the transfer. Each coin is fungible, meaning that each coin is\nindistinguishable from another and can be replaced by another unit of equal value."]}),"\n",(0,t.jsxs)(n.p,{children:["A Marker has its own ",(0,t.jsx)(n.a,{href:"/docs/sdk/marker/state_transitions",children:"lifecycle"})," represented by a\nfinite state machine. A Marker is ready to use when it reaches the ",(0,t.jsx)(n.code,{children:"Active"})," state."]}),"\n",(0,t.jsx)(n.h2,{id:"coins-and-tokens",children:"Coins and Tokens"}),"\n",(0,t.jsx)(n.p,{children:"On Provenance Blockchain, a Marker can be created to govern the rules of any type of coin or token.\nThis allows for the generation of a customized and controlled digital asset."}),"\n",(0,t.jsxs)(n.p,{children:["Coin examples include ",(0,t.jsx)(n.a,{href:"https://explorer.provenance.io/asset/nhash",children:"Hash"}),", the ",(0,t.jsx)(n.a,{href:"https://provenance.io/ecosystem/HASH/tokenomics/",children:"utility token"})," of Provenance Blockchain; ",(0,t.jsx)(n.a,{href:"https://www.usdfconsortium.com/",children:"USDF"}),", a bank-minted tokenized deposit; and ",(0,t.jsx)(n.a,{href:"https://explorer.provenance.io/asset/cfigureomni",children:"figureomni"}),",\na use case-specific Omnibus Bank coin (tokenized deposit)."]}),"\n",(0,t.jsxs)(n.p,{children:["Real World Aset examples include private company stock, such as\n",(0,t.jsx)(n.a,{href:"https://explorer.provenance.io/asset/figure-technologies-inc.cs.stock",children:"figure-technologies-inc.cs.stock"})," or loan\npools (described below)."]}),"\n",(0,t.jsxs)(n.p,{children:["While we generally discuss the token represented by a Marker, the unit object transferred between user accounts is a\nCosmos ",(0,t.jsx)(n.a,{href:"https://buf.build/cosmos/cosmos-sdk/docs/main:cosmos.base.v1beta1#cosmos.base.v1beta1.Coin",children:"Coin"})," protobuf. Coin send and query commands are orchestrated through the\n",(0,t.jsx)(n.a,{href:"https://buf.build/cosmos/cosmos-sdk/docs/main:cosmos.bank.v1beta1",children:(0,t.jsx)(n.code,{children:"x/bank"})})," Cosmos module."]}),"\n",(0,t.jsx)(n.h2,{id:"tokenized-asset-control",children:"Tokenized Asset Control"}),"\n",(0,t.jsxs)(n.p,{children:["The marker system provides advanced token management through its implementation of fine-grained ",(0,t.jsx)(n.a,{href:"https://developer.provenance.io/docs/modules/marker-module#access-grants",children:"Access Grants"}),".\nThis allows for greater customization and flexibility in the management of marker accounts.\nAccess rights, such as minting, burning, depositing, withdrawing, deleting, administrating, and transferring,\ncan be assigned to multiple addresses or delegated to organizational\n",(0,t.jsx)(n.a,{href:"https://docs.cosmos.network/v0.46/modules/group/",children:"groups"})," or\n",(0,t.jsx)(n.a,{href:"https://github.com/FigureTechnologies/restricted-marker-transfer-smart-contract",children:"smart contracts"}),".\nThis level of control sets the marker apart from other blockchain solutions,\noffering a unique and comprehensive approach to token management."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"asset lifecycle",src:s(16173).Z+"",width:"4770",height:"1638"})}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Permission"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Mint"})}),(0,t.jsx)(n.td,{children:"The ability to increase the supply of a Marker token coin."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Burn"})}),(0,t.jsx)(n.td,{children:"The ability to decrease the supply of a Marker using coin held by the Marker."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Deposit"})}),(0,t.jsx)(n.td,{children:"The ability to add other assets to the Marker account (as in an asset pool). For example, the ability to change the scope owner address of an NFT to be the Marker address."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Withdraw"})}),(0,t.jsx)(n.td,{children:"The ability to remove other assets from the Marker account, including the movement of newly-minted tokens to other accounts."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Delete"})}),(0,t.jsx)(n.td,{children:"The ability to move a proposed, finalized, or active Marker into the cancelled state, and to mark cancelled Markers for deletion."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Admin"})}),(0,t.jsx)(n.td,{children:"The ability to add access grants for accounts to the list of Marker permissions."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Transfer"})}),(0,t.jsx)(n.td,{children:"The ability to invoke a send operation using the Marker module to facilitate exchange."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"restricted-token-transfer",children:"Restricted Token Transfer"}),"\n",(0,t.jsx)(n.p,{children:"Marker tokens come in two flavors:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Unrestricted (Coin Type)"})," - Coin can be freely exchanged between any two Provenance accounts without any third-paprty control"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Restricted Type"})," - Coins may not be transferred between arbitrary accounts without the approval of the ",(0,t.jsx)(n.code,{children:"Transfer"})," agent on the Marker"]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["For Restricted Markers, the transfer permission is usually delegated to a smart contract. In the following example,\n",(0,t.jsx)(n.code,{children:"example-co.stock"})," trading in a secondary market is delegated to a smart contact, which checks that the recipient's\n506(c) accreditation is present and currently valid. If the recipient's 506(c) Attribute is either missing or expired,\nthe smart contract will not allow the transfer to complete."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"marker structure",src:s(80077).Z+"",width:"4694",height:"2436"})}),"\n",(0,t.jsx)(n.h2,{id:"asset-pools",children:"Asset Pools"}),"\n",(0,t.jsx)(n.p,{children:"The Marker system is capable of representing a collection of assets, such as a pool of loans. It can serve as a\ncontainer for collateral or escrow, which can include individual NFT assets or other cryptocurrencies or tokenized\nassets."}),"\n",(0,t.jsx)(n.p,{children:"A Marker is represented on the blockchain through an Account, similar to a standard user account for an\nindividual or entity. This allows the Marker to hold any asset type represented on the Provenance Blockchain."}),"\n",(0,t.jsx)(n.p,{children:"It is important to note that in certain cases, the administrator of an asset pool may choose to represent the\npool's tokenization on the blockchain without minting the individual assets. For instance, the Marker may represent an\nAsset-Backed Security (ABS) token on the blockchain, without the need for individual assets to be added to the\nblockchain. The ABS token can be used to represent ownership and transfer of shares, and can also administer\nwaterfall payments through a smart contract, while the underlying collateral assets remain in their original system."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"marker structure",src:s(20701).Z+"",width:"2636",height:"836"})}),"\n",(0,t.jsx)(n.h2,{id:"how-to-create-a-marker",children:"How to Create a Marker"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.a,{href:"https://github.com/FigureTechnologies/restricted-marker-transfer-smart-contract",children:(0,t.jsx)(n.strong,{children:"Restricted Marker Smart Contract"})}),"\nrepository gives an excellent example of how to create and activte a Marker and to delegate the transfer authority to a\nsmart contract. See repo README.md for a full Marker lifecycle example."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["Note: Abbreviated commands. See ",(0,t.jsx)(n.a,{href:"https://github.com/FigureTechnologies/restricted-marker-transfer-smart-contract#marker-creation",children:"example instructions"}),"\nfor full command parameters."]})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",metastring:'title="Command Line Example - Create a Restricted Marker"',children:'# Create the Marker with an initial supply of 5,000 shares\nprovenanced tx marker new "5000example-co.stock" --type RESTRICTED\n\n# Grant access control permissions to the Marker administrator\nprovenanced tx marker grant pb1pr6egk... "example-co.stock" admin,withdraw,burn,mint,transfer\n\n# Finalize and Activate the Marker\nprovenanced tx marker finalize "example-co.stock"\nprovenanced tx marker activate "example-co.stock"\n\n# Grant Marker transfer permission to a smart contract, so it can move coin\nprovenanced tx marker grant pb15fnwec... "example-co.stock" transfer\n\n# Withdraw 1,000 shares of stock to a user account\nprovenanced tx marker withdraw "example-co.stock" "1000example-co.stock" pb18wldir...\n\n'})}),"\n",(0,t.jsx)("br",{}),"\n",(0,t.jsxs)(n.p,{children:["A backend service for a dApp will use gRPC commands via a ",(0,t.jsx)(n.a,{href:"/docs/build/clients",children:"client"})," to create a Marker. See the\n",(0,t.jsx)(n.a,{href:"https://github.com/provenance-io/how-to-provenance/blob/main/bilateral-trade-example/examples/kotlin/scope-exchange/src/main/kotlin/MarkerCreator.kt",children:"How-to-Provenance"})," repository for an example."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-kotlin",metastring:'title="Kotlin Example - Create an Unrestricted (Coin) Marker in a Finalized state"',children:"fun createMarker(shares: Int, denom: String, owner: WalletSigner): MarkerAccount {\n    val createMarker = MsgAddMarkerRequest.newBuilder()\n        .setMarkerType(MarkerType.MARKER_TYPE_COIN)\n        .setAmount(CoinOuterClass.Coin.newBuilder().setAmount(shares.toString()).setDenom(denom))\n        .setFromAddress(owner.address())\n        .setManager(owner.address())\n        .setSupplyFixed(true)\n        .addAccessList(\n            AccessGrant.newBuilder()\n                .setAddress(owner.address())\n                .addAllPermissions(\n                    listOf(\n                        Access.ACCESS_ADMIN,\n                        Access.ACCESS_WITHDRAW,\n                        Access.ACCESS_DEPOSIT,\n                    )\n                )\n        )\n        .setStatus(MarkerStatus.MARKER_STATUS_FINALIZED)\n        .build().toAny()\n\n        // ...\n}\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},20701:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/loan-pool-1d42b7bbf9b414be0f95c34b4e315573.png"},16173:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/marker-permissions-27b69afbe05edde3b90d9de28b52ece4.png"},62373:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/marker-token-coin-4cc9c637b3d9ad8bbec2e7c05aaf841b.png"},80077:(e,n,s)=>{s.d(n,{Z:()=>t});const t=s.p+"assets/images/marker-transfer-approval-64443bcc9d9af2b27882f6f9218c6ef6.png"},11151:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>o});var t=s(67294);const r={},a=t.createContext(r);function o(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);