"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[9730],{56754:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=t(85893),i=t(11151),a=t(98677);const r={},o="102 - Markers, Tokens, and Coins",c={id:"pb/contributing/adr/blockchain-configuration-and-concepts/markers-tokens-and-coins",title:"102 - Markers, Tokens, and Coins",description:'<DocSubheader text="Classifications of Coins used in the blockchain and how these values are recorded on the ledger. Defines standard denominations and purposes."',source:"@site/docs/pb/contributing/adr/100-blockchain-configuration-and-concepts/102-markers-tokens-and-coins.md",sourceDirName:"pb/contributing/adr/100-blockchain-configuration-and-concepts",slug:"/pb/contributing/adr/blockchain-configuration-and-concepts/markers-tokens-and-coins",permalink:"/docs/pb/contributing/adr/blockchain-configuration-and-concepts/markers-tokens-and-coins",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:102,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"101 - HD Wallets, Key Pairs, Addresses",permalink:"/docs/pb/contributing/adr/blockchain-configuration-and-concepts/hd-wallets-key-pairs-addresses"},next:{title:"103 - Transaction Fees and Gas",permalink:"/docs/pb/contributing/adr/blockchain-configuration-and-concepts/transaction-fees-and-gas"}},l={},d=[{value:"Changelog",id:"changelog",level:2},{value:"Context",id:"context",level:2},{value:"Coins",id:"coins",level:3},{value:"Operations",id:"operations",level:4},{value:"Platform Required Coins",id:"platform-required-coins",level:4},{value:"Gas Combustion Cycle",id:"gas-combustion-cycle",level:4},{value:"Token",id:"token",level:3},{value:"Inflation",id:"inflation",level:4},{value:"Total Supply",id:"total-supply",level:4},{value:"Mint",id:"mint",level:4},{value:"Burn",id:"burn",level:4},{value:"Marker",id:"marker",level:3},{value:"Collateral",id:"collateral",level:4},{value:"Management",id:"management",level:4},{value:"Creating Markers",id:"creating-markers",level:4},{value:"Structure of a Marker",id:"structure-of-a-marker",level:4},{value:"Mint",id:"mint-1",level:4},{value:"Burn",id:"burn-1",level:4},{value:"Exchange",id:"exchange",level:4},{value:"Example Uses of Coins, Tokens, and Markers",id:"example-uses-of-coins-tokens-and-markers",level:3},{value:"Omnibus Stable Coin",id:"omnibus-stable-coin",level:4},{value:"Staking",id:"staking",level:4},{value:"Gas Economy",id:"gas-economy",level:4},{value:"Decision",id:"decision",level:2},{value:"Status",id:"status",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"102---markers-tokens-and-coins",children:"102 - Markers, Tokens, and Coins"}),"\n","\n","\n",(0,s.jsx)(a.Y,{text:"Classifications of Coins used in the blockchain and how these values are recorded on the ledger. Defines standard denominations and purposes."}),"\n",(0,s.jsx)(n.h2,{id:"changelog",children:"Changelog"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"280420: Initial version"}),"\n",(0,s.jsx)(n.li,{children:"150420: Additional documentation of coins and gas combustion."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"context",children:"Context"}),"\n",(0,s.jsx)(n.p,{children:"Using the blockchain as a ledger requires the ability to track fungible and non-fungible resources on chain with fractional ownership. Each of these resources requires rules governing supply and exchange. Examples of resources include fractional ownership in the network itself (stake), credits for network resources (gas/fees), fractional ownership of an arbitrary contract (markers), and omnibus account balances (stable coins). The rules governing the asset must be enforced by the blockchain itself such that the entity controlling the asset must abide by these rules and is not able to invalidate these processes. These enforced constraints are what provide the value and support trust in the platform itself."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Coin"})," - A transferable instance with a unique name matching a token and whole integer value."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Token"})," - A token is representation of digital value stored on the blockchain enumerated in coins."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Marker"})," - A special type of Token represented by a contract that maintains an ownership structure and a collection of assets."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"|--------------------|\n|       Marker       |\n|  |--------------|  |\n|  |     Token    |  |\n|  |  |--------|  |  |\n|  |  |  Coin  |  |  |\n|  |  |        |  |  |\n|  |  |  name  |  |  |\n|  |  |  0000  |  |  |\n|  |  |--------|  |  |\n|  |--------------|  |\n|--------------------|\n"})}),"\n",(0,s.jsx)(n.h3,{id:"coins",children:"Coins"}),"\n",(0,s.jsx)(n.p,{children:"Coins on Provenance Blockchain are a simple structure composed of an integer amount and a string denomination that matches a token name. The coin construct is designed such that any two accounts can freely exchange any whole number fraction of the amount owned by one account to the other through a one way send operation. This operation requires no approval from the receiver of the coin and only a valid signature with a key address matching the address on the account sending the coins."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-text",children:"Coin {\n    Denom,      // lowercase string starting with a letter, 3-64 in length [a-z][a-z0-9/]{2,63}\n    Amount,     // integer value greater than or equal to zero\n}\n"})}),"\n",(0,s.jsx)(n.h4,{id:"operations",children:"Operations"}),"\n",(0,s.jsxs)(n.p,{children:["Coins do not support decimals or floats for calculation. This means that the division operations are performed using a special coin structure called a ",(0,s.jsx)(n.code,{children:"DecCoin"})," which uses a ",(0,s.jsx)(n.code,{children:"decimal"})," value for the amount. As the values stored on chain are integers these calculations need to be converted back to a integers using a special truncate process that returns 'change' coins."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"// TruncateDecimal returns the coins with truncated decimals and returns the\n// change. Note, it will not return any zero-amount coins in either the truncated or\n// change coins.\nfunc (coins DecCoins) TruncateDecimal() (truncatedCoins Coins, changeCoins DecCoins) {\n    for _, coin := range coins {\n        truncated, change := coin.TruncateDecimal()\n        if !truncated.IsZero() {\n            truncatedCoins = truncatedCoins.Add(truncated)\n        }\n        if !change.IsZero() {\n            changeCoins = changeCoins.Add(change)\n        }\n    }\n\n    return truncatedCoins, changeCoins\n}\n"})}),"\n",(0,s.jsx)(n.h4,{id:"platform-required-coins",children:"Platform Required Coins"}),"\n",(0,s.jsxs)(n.p,{children:["The platform itself requires coins for two different core features; staking and fee payment. The staking aspect of the blockchain imparts ownership and control of the network. A coin with a purpose is known as a ",(0,s.jsx)(n.code,{children:"token"}),"."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Denom"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Purpose"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Genesis Amount"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"nhash"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"staking"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"1x10^20 (100B * 1B)"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"One billionth of one hash. High precision to avoid decimals"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"vspn"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"gas/fees"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"100,000,000,000"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Used for paying gas fees within the network"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"gas-combustion-cycle",children:"Gas Combustion Cycle"}),"\n",(0,s.jsx)(n.p,{children:"One of the more complex areas of the blockchain is the cycle for gas and fees that flows in through transactions and out to the validators and staking delegators. Every transactions against the blockchain is measured for size and processing cost. This measurement results in a postivie integer called gas. The gas measurement is used to assess fees for processing the transaction and to limit the total amount of work that can be included in a block."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Gas Consumption Parameters"})}),"\n",(0,s.jsx)(n.p,{children:"The calculation of the amount of gas required for a given transaction is based on a set of parameters that are configured in the parameters of the auth module. There is a fixed cost for the number of bytes in the transaction as well for each signature that is present."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'// initial values for gas costs in the production Provenance Blockchain\n{\n    "sig_verify_cost_ed25519": "590",\n    "sig_verify_cost_secp256k1": "1000",\n    "tx_sig_limit": "7",\n    "tx_size_cost_per_byte": "10"\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["The overall cost of a transaction is known as a ",(0,s.jsx)(n.em,{children:"fee"})," and is currently paid in ",(0,s.jsx)(n.em,{children:"vspn"})," (",(0,s.jsx)(n.strong,{children:"vV"}),"irtual ",(0,s.jsx)(n.strong,{children:"S"}),"take (in the) ",(0,s.jsx)(n.strong,{children:"P"}),"rovenance ",(0,s.jsx)(n.strong,{children:"N"}),"etwork). The conversion between an amount of gas and a fee priced in ",(0,s.jsx)(n.em,{children:"vspn"})," is set by each Validator in the network independently. Currently a default floor value for the price of gas is set to ",(0,s.jsx)(n.code,{children:"0.025vspn"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:(0,s.jsx)(n.strong,{children:"WARNING: Technically a fee can be paid in any coin denomination or a combination of coin denominations. It is important for the protection of an accounts assets, holdings, and hash stake that only vspn coins are offered for payment."})})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"// For a transaction that is 123457 bytes in size with a single secp256k1 signature\ngasRequired := (123457 * 10) + (1 * 1000)\n// Total fee required in vspn\nfeeAmount := gasRequired * 0.025 // 30,889.25 or 30,890vspn minimum\n"})}),"\n",(0,s.jsx)(n.p,{children:"The fee for a transaction must be provided as a parameter on the first signature (the payee) and will be deducted from the account when the transaction is processed. A fee greater than the minimum may be paid to ensure the transaction is not rejected by a validator which may have a higher than minimum gas price set."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Fee Distribution"})}),"\n",(0,s.jsx)(n.p,{children:"The fees collected for transactions assembled into a block are distributed to the community pool (at a percentage listed in the distribution module parameters) and the validator that processed the block. For the validator itself there is a commission percentage that goes to the operator and the remaining amount is distributed to each of the stake holders that have delegated to the validator node at the time the block was cut according to their percentage of the total stake in the validator's pool. The rewards may be with drawn by the delegators at any point after they have been rewarded by issuing the appropriate redemption transaction."}),"\n",(0,s.jsx)(n.h3,{id:"token",children:"Token"}),"\n",(0,s.jsxs)(n.p,{children:["A token is a construct to represent value using ",(0,s.jsx)(n.code,{children:"coins"})," according to a set of rules. These rules include the total supply, initial ownership, inflation rules, etc. A token's issued ",(0,s.jsx)(n.code,{children:"coins"})," can be transacted like any other coin. They must go through an ",(0,s.jsx)(n.code,{children:"exchange"})," to change denominations. A token is either created by defining a coin denomination and distribution in the genesis block, or through a special ",(0,s.jsx)(n.code,{children:"marker"})," module that provides these features on a running network."]}),"\n",(0,s.jsx)(n.h4,{id:"inflation",children:"Inflation"}),"\n",(0,s.jsx)(n.p,{children:"A token can be configured with a flexible set of parameters governing inflation. These values can be static or adjusted dynamically against a bonded ratio for staking tokens."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Key"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Type"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Example"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"MintDenom"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"string"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:'"stake"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"InflationRateChange"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"string (dec)"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:'"0.13000000"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"InflationMax"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"string (dec)"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:'"0.20000000"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"InflationMin"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"string (dec)"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:'"0.07000000"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"GoalBonded"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"string (dec)"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:'"0.67000000"'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"BlocksPerYear"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"string (uint64)"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:'"6311520"'})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Table: Mint parameters for token inflation."})}),"\n",(0,s.jsxs)(n.p,{children:["Coins that are minted through inflation are deposited in the Fee Collection pool and are subject to network wide rules for distribution. For more information on fees and distribution see ",(0,s.jsx)(n.a,{href:"/docs/pb/contributing/adr/blockchain-configuration-and-concepts/transaction-fees-and-gas",children:"ADR-103 Transaction Fees and Gas"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"total-supply",children:"Total Supply"}),"\n",(0,s.jsx)(n.p,{children:"A marker has a defined overall supply. This is enforced through the use of a blockchain invariant. An invariant check is run on the begin block event by nodes that enable these checks. An invariant check either succeeds or fails. In the case of a total supply invariant if the total number of coins within the network does not match the declared rule the node will panic and halt the chain. Subsequently an administrative action must be taken to restore balance to the chain before normal operation can continue."}),"\n",(0,s.jsx)(n.h4,{id:"mint",children:"Mint"}),"\n",(0,s.jsx)(n.p,{children:"A token will typically be created as a set of assigned amounts of coins during the genesis of the blockchain. Once the blockchain has started the coin supply is fixed unless mint or burn operations are performed. The mint operation is a special capability right that is granted to certain modules within the node software. This right is carefully controlled to ensure the stable supplies of the coins in the platform."}),"\n",(0,s.jsx)(n.h4,{id:"burn",children:"Burn"}),"\n",(0,s.jsxs)(n.p,{children:["Similar to the ",(0,s.jsx)(n.code,{children:"mint"})," operation a ",(0,s.jsx)(n.code,{children:"burn"})," operation can be performed to destroy a number of coins from the overall supply. This operation can only be performed against an amount of coin held by the module account or user that invokes the operation. Coins may not be removed from supply by burning from indiscriminate accounts."]}),"\n",(0,s.jsx)(n.h3,{id:"marker",children:"Marker"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"marker"})," module is used to construct a ",(0,s.jsx)(n.code,{children:"token"})," based on a declared set of assets provided as collateral. Similar to defining a ",(0,s.jsx)(n.code,{children:"token"})," at genesis, creating a ",(0,s.jsx)(n.code,{children:"marker"})," uses an initial genesis action that defines the rules for the life of the ",(0,s.jsx)(n.code,{children:"marker"}),". The ",(0,s.jsx)(n.code,{children:"coin"})," issued from the ",(0,s.jsx)(n.code,{children:"marker"}),"'s ",(0,s.jsx)(n.code,{children:"token"})," represents the fractional ownership in the ",(0,s.jsx)(n.code,{children:"marker"})," itself. Each ",(0,s.jsx)(n.code,{children:"marker"})," instance's token is unique and not interchangeable. This uniqueness is represented with a globally unique coin denomination."]}),"\n",(0,s.jsx)(n.h4,{id:"collateral",children:"Collateral"}),"\n",(0,s.jsxs)(n.p,{children:["An instance of a ",(0,s.jsx)(n.code,{children:"marker"})," may be backed with collateral. This collateral is a collection of assets that maybe be native to the blockchain (",(0,s.jsx)(n.code,{children:"coin"}),") or it may be references to assets that exist separately (metadata ",(0,s.jsx)(n.code,{children:"scope"}),"s). The asset pool is governed by the rules of the ",(0,s.jsx)(n.code,{children:"marker"})," itself. Asset pools may be fixed upon creation or managed to grow and shrink over time."]}),"\n",(0,s.jsx)(n.h4,{id:"management",children:"Management"}),"\n",(0,s.jsxs)(n.p,{children:["When a ",(0,s.jsx)(n.code,{children:"marker"})," is created the address that submits the transaction is bound as the manager of the marker. While the ",(0,s.jsx)(n.code,{children:"marker"})," is in the ",(0,s.jsx)(n.code,{children:"proposed"})," state the manager address is allowed to submit transactions to modify without further permission checks. After a marker transitions to the ",(0,s.jsx)(n.code,{children:"active"})," state the manager is removed and the normal permission controls are fully enforced."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Action"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Permission"}),(0,s.jsx)(n.th,{style:{textAlign:"left"},children:"Notes"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Create New Marker"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.em,{children:"unrestriced"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Any user with appropriate gas on an account may create a marker"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Grant Access"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"grant"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Allows adding additional access grants to the marker"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Increase Supply"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"mint"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Allows ",(0,s.jsx)(n.code,{children:"mint"})," (increase supply) for an active status marker"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Decrease Supply"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"burn"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Allows ",(0,s.jsx)(n.code,{children:"burn"})," (decrease supply) for an active status marker"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Add Asset to Pool"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"deposit"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Allows assignment of a ",(0,s.jsx)(n.code,{children:"scope"})," against the marker (Note: scope permission checks are separately performed, address must have access to both marker and scope to perform this action)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Withdraw Collateral"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"withdraw"})}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"For an active marker allows withdrawing coin or removing assets from pool"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Finalize"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"n/a"}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["For a ",(0,s.jsx)(n.code,{children:"proposed"})," status marker, finalizes configuration (manager only)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Activate"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"n/a"}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["For a ",(0,s.jsx)(n.code,{children:"finalized"})," status marker, activates configuration (manager only)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Cancel"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"delete"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Move a ",(0,s.jsx)(n.code,{children:"finalized"}),", ",(0,s.jsx)(n.code,{children:"active"}),", or ",(0,s.jsx)(n.code,{children:"proposed"})," marker to a cancelled state"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{style:{textAlign:"left"},children:"Delete"}),(0,s.jsx)(n.td,{style:{textAlign:"left"},children:(0,s.jsx)(n.code,{children:"delete"})}),(0,s.jsxs)(n.td,{style:{textAlign:"left"},children:["Destroys a ",(0,s.jsx)(n.code,{children:"canceled"})," state marker"]})]})]})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Access grant 'mint' below is one of [mint,burn,deposit,withdraw,delete,grant]\nprovenanced tx marker grant tp1ev04582v67phlu4huw046fpaq94ppm3mks9eku cheesedog mint\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Management functions are restricted to a specific address with a list of permissions, or subject to a ",(0,s.jsx)(n.strong,{children:"Governance proposal"}),". A governance proposal is a special construct handled by the ",(0,s.jsx)(n.code,{children:"gov"})," module that takes a submitted configuration proposal and posts it for vote by stake holders. If the vote passes then the proposed changes are applied."]}),"\n",(0,s.jsx)(n.h4,{id:"creating-markers",children:"Creating Markers"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"marker"})," module is responsible for creating instances of ",(0,s.jsx)(n.code,{children:"markers"}),". The process for creating a marker can be handled as a single transaction or as a set of many transactions pending the ",(0,s.jsx)(n.code,{children:"finalize"})," call. Any ",(0,s.jsx)(n.code,{children:"token"})," issued by the marker is distributed to the ",(0,s.jsx)(n.code,{children:"marker"})," address when the ",(0,s.jsx)(n.code,{children:"marker"})," is activated. The ",(0,s.jsx)(n.code,{children:"marker"})," instances are designed to be reliable contracts given the exchange of ",(0,s.jsx)(n.code,{children:"coin"})," issued from their ",(0,s.jsx)(n.code,{children:"token"})," offering may be subsequently traded. This targeted reliability means that there are substantial restrictions on the modification of ",(0,s.jsx)(n.code,{children:"markers"}),". An incorrectly created marker may be permanently locked and unusable. This includes the transfer of any assets to the ",(0,s.jsx)(n.code,{children:"marker"})," upon creation, especially any ",(0,s.jsx)(n.code,{children:"coin"})," deposited as an asset."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# create a new marker with the denomination of 'cheesedog' and a total supply of 1000\nprovenanced tx marker new 1000cheesedog\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# change the status of the marker 'cheesedog' where 'activate' is one of [finalize,activate,cancel,destroy]\nprovenanced tx marker activate cheesedog\n"})}),"\n",(0,s.jsx)(n.h4,{id:"structure-of-a-marker",children:"Structure of a Marker"}),"\n",(0,s.jsx)(n.p,{children:"A marker is identified by a standard account address on chain. Unlike typical addresses that are created by using the 20 bytes from a hash of the public key, the address of a marker is made up of the hash of the denomination of coin the marker will issue."}),"\n",(0,s.jsxs)(n.p,{children:["The marker structure is based on an extended basic account which supports all the features of a normal account except there is no associated key pair which prevents any signing actions by the account. This means that it is not possible to use the traditional signing approach for moving these coins, they must be moved by the ",(0,s.jsx)(n.code,{children:"marker"})," module."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'type MarkerAccount struct {\n    Address        sdk.AccAddress `json:"address"`\n    Coins          sdk.Coins      `json:"coins"`\n    PubKey         string         `json:"public_key"`        // NOTE: always empty\n    AccountNumber  uint64         `json:"account_number"`\n    Sequence       uint64         `json:"sequence"`          // NOTE: always zero\n    Manager        sdk.AccAddress `json:"manager,omitempty"` // NOTE: only proposed, finalized states\n    AccessControls []AccessGrant  `json:"permissions"`\n    Status         MarkerStatus   `json:"status"`\n    Denom          string         `json:"denom"`\n    Supply         sdk.Int        `json:"total_supply"`\n}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"mint-1",children:"Mint"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"mint"})," function is used to issue ",(0,s.jsx)(n.code,{children:"token"})," ",(0,s.jsx)(n.code,{children:"coin"})," against the marker. This action is implicitly done for any amount greater than zero for ",(0,s.jsx)(n.code,{children:"Supply"})," when the finalized marker is ",(0,s.jsx)(n.code,{children:"activated"}),". ",(0,s.jsx)(n.code,{children:"mint"})," may also be performed (as allowed) post activation. Minted coins are assigned to the marker account itself after which they maybe withdrawn by an authorized user into their own account. Once withdrawn these coins are moved through normal transfer or exchange processes."]}),"\n",(0,s.jsx)(n.h4,{id:"burn-1",children:"Burn"}),"\n",(0,s.jsxs)(n.p,{children:['An authorized address may "burn" the markers coin, removing it from the global supply coins. The burn function is limited to acting upon coins that are currently held by the marker account itself. For burn operations invoked by a successful governance proposal only coin held in deposit against the marker may be burned. ',(0,s.jsxs)(n.strong,{children:["Note: only ",(0,s.jsx)(n.code,{children:"coin"})," of the current ",(0,s.jsx)(n.code,{children:"marker"})," denom may be burned in any case regardless of what coin denominations are held in the marker's account."]})]}),"\n",(0,s.jsx)(n.h4,{id:"exchange",children:"Exchange"}),"\n",(0,s.jsx)(n.p,{children:"A token maybe be exchanged for coins in any other token through the exchange process."}),"\n",(0,s.jsx)(n.h3,{id:"example-uses-of-coins-tokens-and-markers",children:"Example Uses of Coins, Tokens, and Markers"}),"\n",(0,s.jsx)(n.p,{children:"Coin on the blockchain"}),"\n",(0,s.jsx)(n.h4,{id:"omnibus-stable-coin",children:"Omnibus Stable Coin"}),"\n",(0,s.jsxs)(n.p,{children:["An omnibus stable coin is a special type of ",(0,s.jsx)(n.code,{children:"token"})," managed against an omnibus bank account. The bank itself (or its designated integrator) is responsible for ensuring the supply of the token always matches value of the fiat account balance in its omnibus account."]}),"\n",(0,s.jsxs)(n.p,{children:["For this type of configuration the ",(0,s.jsx)(n.code,{children:"marker"})," module is used to issue the ",(0,s.jsx)(n.code,{children:"token"})," on chain. The integrator's account address must configure the marker to reserve the right to mint and burn coin issuances in order to match the account balance changes. An initial supply may be set to reflect the starting account balance. The deposit and withdraw features for assets backing the marker do not apply and should be disabled to prevent their accidental use. The ability to modify the settings of the marker should be reserved by the integrator's account address (if allowed at all)."]}),"\n",(0,s.jsxs)(n.p,{children:["The integrator is responsible for distributing any coin minted to the appropriate depositor. The depositor may exchange these coin freely as they see fit for any purpose that elects to accept the ",(0,s.jsx)(n.code,{children:"token"})," denomination. The integrator is also responsible for providing a facility to accept coin and remit value from the omnibus account to the entity presenting the coin. When a withdraw is made from the omnibus bank account the removed fiat balance must be burned from the supply of coin issued from the marker. As the coin in circulation can not be burned directly, this will require the integrator to ensure that any withdraw has an associated transfer of the coin back to the integrator or marker accounts such that the integrator has control of the coin asset to fill the burn request. This process keeps the account in sync with the value represented on chain."]}),"\n",(0,s.jsx)(n.h4,{id:"staking",children:"Staking"}),"\n",(0,s.jsxs)(n.p,{children:["In the Provenance Blockchain the power to control the network is measured with the amount of stake an account possesses. This stake is represented as a special type of token denominated as ",(0,s.jsx)(n.code,{children:"hash"}),". As the power to control the network is defined up front, the initial allocations of ",(0,s.jsx)(n.code,{children:"hash"})," coins are distributed in the ",(0,s.jsx)(n.code,{children:"genesis"})," process. The terms of the supply are fixed such that there is no need to use the ",(0,s.jsx)(n.code,{children:"marker"})," module to support any kind of on going management of the ",(0,s.jsx)(n.code,{children:"token"}),". The ",(0,s.jsx)(n.code,{children:"inflation"})," concept is not used for ",(0,s.jsx)(n.code,{children:"hash"})," and as such the overall supply will always remain at exactly ",(0,s.jsx)(n.code,{children:"100 billion"})," and can be enforced through an ",(0,s.jsx)(n.code,{children:"invariant"})," constraint. While the specific rules for the ",(0,s.jsx)(n.code,{children:"hash"})," stake token on the Provenance Blockchain are not expected to change, if provisions for this process are desired then the Governance based management control of a ",(0,s.jsx)(n.code,{children:"marker"})," would be the most appropriate configuration."]}),"\n",(0,s.jsx)(n.h4,{id:"gas-economy",children:"Gas Economy"}),"\n",(0,s.jsxs)(n.p,{children:["The Gas economy within the Provenance Blockchain is governed by the use of an arbitrary ",(0,s.jsx)(n.code,{children:"token"})," called ",(0,s.jsx)(n.code,{children:"vspn"}),". This token is defined by a ",(0,s.jsx)(n.code,{children:"marker"}),' with a special configuration that does not use assets to back it and makes use of a special administrator account for disbursing allocations. This configuration of a marker uses a configuration that allows the Governance process to update settings as well and perform mint/burn functions. The administrator account address is the target for any coin that is minted/burned against the marker. These coins are then distributed through transfers for exchange out to all of the other accounts which will use them to pay gas fees. The distribution of gas coin can be handled through the Exchange system, or through a "faucet" application/api that dispenses coin to authorized callers. There are several aspects to how fees are subsequently aggregated after being paid and then distributed which are detailed separately in the ',(0,s.jsx)(n.a,{href:"broken-link",children:"Distribution and Exchange ADR-XXX"})]}),"\n",(0,s.jsx)(n.h2,{id:"decision",children:"Decision"}),"\n",(0,s.jsxs)(n.p,{children:["Within the Provenance Blockchain the staking and fee purposes are handled using two separate denominations, ",(0,s.jsx)(n.code,{children:"hash"})," for staking and ",(0,s.jsx)(n.code,{children:"vspn"})," for fee payment. Because of the restriction for not using decimals hash will be denominated in nanohash (",(0,s.jsx)(n.code,{children:"nhash"}),")."]}),"\n",(0,s.jsx)(n.p,{children:"All units of value on the blockchain will be represented as coin denominations. The rules governing the issue and mangement of these coins will be enforced and curated using the Marker module. The Hash coin used for staking is the only coin not managed through this process as its behavior is defined through the staking process of the blockchain itself."}),"\n",(0,s.jsx)(n.h2,{id:"status",children:"Status"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"PROPOSED"})}),"\n",(0,s.jsx)(n.h2,{id:"consequences",children:"Consequences"}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:'This section describes the resulting context, after applying the decision. All consequences should be listed here, not just the "positive" ones. A particular decision may have positive, negative, and neutral consequences, but all of them affect the team and project in the future.'}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"positive",children:"Positive"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Holding coins in positive integer amounts associated with addresses will greatly simplify accounting"}),"\n",(0,s.jsx)(n.li,{children:"Using a separate currency for fees and gas from stake simplifies accounting rules"}),"\n",(0,s.jsx)(n.li,{children:"Use of the marker module provides a standardized method for managing all tokens on the blockchain similar to the ERC20 standard on Ethereum."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"negative",children:"Negative"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Demarking hash using nano increases the size of hash amount significantly"}),"\n",(0,s.jsx)(n.li,{children:"Using the standard coin construct of the blockchain for markers may result in an excessive number of coin/token definitions."}),"\n",(0,s.jsx)(n.li,{children:"The distributed nature of accounts holding coins limits the ability to rework the structure of a marker once established."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"neutral",children:"Neutral"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The marker module will require a separate exchange module to be created to transact value between markers."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"references",children:"References"})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},98677:(e,n,t)=>{t.d(n,{Y:()=>i});t(67294);var s=t(85893);const i=e=>{let{text:n}=e;return(0,s.jsx)("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500",children:n})}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var s=t(67294);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);