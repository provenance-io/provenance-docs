"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[5812],{30531:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var t=r(85893),a=r(11151);const s={},i="State",o={id:"sdk/marker/state",title:"State",description:"- Marker Accounts",source:"@site/docs/sdk/marker/01_state.md",sourceDirName:"sdk/marker",slug:"/sdk/marker/state",permalink:"/docs/sdk/marker/state",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"x/marker",permalink:"/docs/sdk/marker/"},next:{title:"State Transitions",permalink:"/docs/sdk/marker/state_transitions"}},c={},d=[{value:"Marker Accounts",id:"marker-accounts",level:2},{value:"Marker Types",id:"marker-types",level:3},{value:"Access Grants",id:"access-grants",level:3},{value:"Fixed Supply vs Floating",id:"fixed-supply-vs-floating",level:3},{value:"When a Marker has a Fixed Supply that does not match target",id:"when-a-marker-has-a-fixed-supply-that-does-not-match-target",level:4},{value:"Forced Transfers",id:"forced-transfers",level:3},{value:"Required Attributes",id:"required-attributes",level:3},{value:"Marker Address Cache",id:"marker-address-cache",level:2},{value:"Marker Net Asset Value",id:"marker-net-asset-value",level:3},{value:"Params",id:"params",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"state",children:"State"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#marker-accounts",children:"Marker Accounts"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#marker-types",children:"Marker Types"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#access-grants",children:"Access Grants"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#fixed-supply-vs-floating",children:"Fixed Supply vs Floating"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#forced-transfers",children:"Forced Transfers"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#required-attributes",children:"Required Attributes"})}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"#marker-address-cache",children:"Marker Address Cache"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#marker-net-asset-value",children:"Marker Net Asset Value"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"#params",children:"Params"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"marker-accounts",children:"Marker Accounts"}),"\n",(0,t.jsxs)(n.p,{children:["Markers are represented as a type that extends the ",(0,t.jsx)(n.code,{children:"base_account"})," type of the ",(0,t.jsx)(n.code,{children:"auth"})," SDK module.  As a valid account a\nmarker is able to perform normal functions such as receiving and holding coins, and having a defined address that can\nbe queried against for balance information from the ",(0,t.jsx)(n.code,{children:"bank"})," module."]}),"\n",(0,t.jsxs)(n.p,{children:["+++ ",(0,t.jsx)(n.a,{href:"https://github.com/provenance-io/provenance/blob/22740319ba4b3ba268b3720d4bee36d6c6b06b40/proto/provenance/marker/v1/marker.proto#L28-L63",children:"https://github.com/provenance-io/provenance/blob/22740319ba4b3ba268b3720d4bee36d6c6b06b40/proto/provenance/marker/v1/marker.proto#L28-L63"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:"type MarkerAccount struct {\n\t// cosmos base_account  including address and account number\n    Address       string\n    AccountNumber uint64\n\n    PubKey        *types.Any // NOTE: not used for marker, it is not possible to sign for a marker account directly\n    Sequence      uint64     // NOTE: always zero on marker\n\n    // Address that owns the marker configuration.  This account must sign any requests\n\t// to change marker config (only valid for statuses prior to finalization)\n\tManager string\n\n\t// Access control lists.  Account addresses are assigned control of the marker using these entries\n\tAccessControl []AccessGrant\n\n\t// Indicates the current status of this marker record. (Pending, Active, Cancelled, etc)\n\tStatus MarkerStatus\n\n\t// value denomination.\n\tDenom string\n\n\t// the total supply expected for a marker.  This is the amount that is minted when a marker is created.  For\n\t// SupplyFixed markers this value will be enforced through an invariant that mints/burns from this account to\n\t// maintain a match between this value and the supply on the chain (maintained by bank module).  For all non-fixed\n\t// supply markers this value will be set to zero when the marker is activated.\n\tSupply Int\n\n\t// Marker type information.  The type of marker controls behavior of its account.\n\tMarkerType MarkerType\n\n\t// A fixed supply will mint additional coin automatically if the total supply decreases below a set value.  This\n\t// may occur if the coin is burned or an account holding the coin is slashed. (default: true)\n\tSupplyFixed bool\n\n\t// indicates that governance based control is allowed for this marker\n\tAllowGovernanceControl bool\n\n\t// Whether an admin can transfer restricted coins from a 3rd-party account without their signature.\n\tAllowForcedTransfer bool\n\n\t// list of required attributes on restricted marker in order to send and receive transfers if sender does not have\n\t// transfer authority\n\tRequiredAttributes []string\n}\n"})}),"\n",(0,t.jsx)(n.h3,{id:"marker-types",children:"Marker Types"}),"\n",(0,t.jsx)(n.p,{children:"There are currently two basic types of markers."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Coin"})," - A marker with a type of coin represents a standard fungible token with zero or more coins in circulation"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Restricted Coin"}),' - Restricted Coins work just like a regular coin with one important difference--the bank module\n"send_enabled" status for the coin is set to false.  This means that a user account that holds the coin can not send\nit to another account directly using the bank module.  In order to facilitate exchange there must be an address set\non the marker with the "Transfer" permission grant.  This address must sign calls to the marker module to move these\ncoins between accounts using the ',(0,t.jsx)(n.code,{children:"transfer"})," method on the api."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"access-grants",children:"Access Grants"}),"\n",(0,t.jsx)(n.p,{children:"Control of a marker account is configured through a list of access grants assigned to the marker when it is created\nor applied afterwards through the API calls to add or remove access."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-go",children:'const (\n\t// ACCESS_UNSPECIFIED defines a no-op vote option.\n\tAccess_Unknown Access = 0\n\t// ACCESS_MINT is the ability to increase the supply of a marker\n\tAccess_Mint Access = 1\n\t// ACCESS_BURN is the ability to decrease the supply of the marker using coin held by the marker.\n\tAccess_Burn Access = 2\n\t// ACCESS_DEPOSIT is the ability to set a marker reference to this marker in the metadata/scopes module\n\tAccess_Deposit Access = 3\n\t// ACCESS_WITHDRAW is the ability to remove marker references to this marker in from metadata/scopes or\n\t// transfer coin from this marker account to another account.\n\tAccess_Withdraw Access = 4\n\t// ACCESS_DELETE is the ability to move a proposed, finalized or active marker into the cancelled state. This\n\t// access also allows cancelled markers to be marked for deletion\n\tAccess_Delete Access = 5\n\t// ACCESS_ADMIN is the ability to add access grants for accounts to the list of marker permissions.\n\tAccess_Admin Access = 6\n\t// ACCESS_TRANSFER is the ability to invoke a send operation using the marker module to facilitate exchange.\n\t// This capability is useful when the marker denomination has "send enabled = false" preventing normal bank transfer\n\tAccess_Transfer Access = 7\n)\n\n// A structure associating a list of access permissions for a given account identified by is address\ntype AccessGrant struct {\n\t// A bech32 encoded address string of the account the permissions are assigned to\n\tAddress     string\n\t // An array of enum values as defined above\n\tPermissions AccessList\n}\n'})}),"\n",(0,t.jsx)(n.h3,{id:"fixed-supply-vs-floating",children:"Fixed Supply vs Floating"}),"\n",(0,t.jsxs)(n.p,{children:["A marker can be configured to have a fixed supply or one that is allowed to float.  A marker will always mint an amount\nof coin indicated in its ",(0,t.jsx)(n.code,{children:"supply"})," field when it is activated.  For markers that have a fixed supply an invariant check\nis enforced that ensures the supply of the marker alway matches the configured value.  For a floating supply no\nadditional checks or adjustments are performed and the supply value is set to zero when activated."]}),"\n",(0,t.jsx)(n.h4,{id:"when-a-marker-has-a-fixed-supply-that-does-not-match-target",children:"When a Marker has a Fixed Supply that does not match target"}),"\n",(0,t.jsx)(n.p,{children:"Under certain conditions a marker may begin a block with a total supply in circulation less than its configured amount.\nWhen this occurs the marker will take action to correct the balance of coin supply."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"A fixed supply marker will attempt to automatically correct a supply imbalance at the start of the next block"})}),"\n",(0,t.jsx)(n.p,{children:"This means that if the supply in circulation exceeds the configured amount the attempted fix is to burn a required\namount from the marker's account itself.  If this fails an invariant will be broken and the chain will halt."}),"\n",(0,t.jsx)(n.p,{children:"If the requested supply is greater than the amount in circulation (as occurs when a coin is burned in a slash) the\nmarker module will mint the difference between expected supply and circulation and place the created coin in the marker's\naccount."}),"\n",(0,t.jsx)(n.p,{children:"A supply imbalance typically occurs during the genesis of a blockchain when a fixed supply for a marker is less than\nthe initial balances assigned to accounts.  It may also occur if the marker is associated with the bind denom of the\nchain and a slash penalty is assessed resulting in the burning of a portion of coins."}),"\n",(0,t.jsx)(n.h3,{id:"forced-transfers",children:"Forced Transfers"}),"\n",(0,t.jsxs)(n.p,{children:["A marker with the ",(0,t.jsx)(n.strong,{children:"Restricted Coin"})," type can be configured to allow forced transfer of funds for that marker's denom.\nA forced transfer is one where the ",(0,t.jsx)(n.code,{children:"admin"})," (with ",(0,t.jsx)(n.code,{children:"TRANSFER"})," access) is different than the ",(0,t.jsx)(n.code,{children:"from"})," address. In such cases,\nif the marker allows forced transfers, the transfer is allowed. If forced transfers are not allowed, an ",(0,t.jsx)(n.code,{children:"admin"})," cannot\ntransfer the marker's coins from another account unless granted permission to do so via ",(0,t.jsx)(n.code,{children:"authz"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Markers with ",(0,t.jsx)(n.strong,{children:"Coin"})," type cannot be configured to allow forced transfers."]}),"\n",(0,t.jsx)(n.h3,{id:"required-attributes",children:"Required Attributes"}),"\n",(0,t.jsxs)(n.p,{children:["A marker with the ",(0,t.jsx)(n.strong,{children:"Restricted Coin"})," type can be configured to allow transfers with a normal ",(0,t.jsx)(n.code,{children:"MsgSend"})," to address that have defined attributes.\nThis can be configured by setting the ",(0,t.jsx)(n.code,{children:"required_attributes"})," array on the Marker.  When a ",(0,t.jsx)(n.code,{children:"MsgSend"})," transaction is executed and the coin type is ",(0,t.jsx)(n.code,{children:"restricted"}),", the ",(0,t.jsx)(n.code,{children:"required_attributes"})," are checked. If the ",(0,t.jsx)(n.code,{children:"ToAddress"})," associated with the ",(0,t.jsx)(n.code,{children:"MsgSend"})," command has ",(0,t.jsx)(n.strong,{children:"all"})," the required attributes, the transfer will be executed."]}),"\n",(0,t.jsxs)(n.p,{children:["A single wildcard can only be used for the starting name of the required attribute. For example, ",(0,t.jsx)(n.code,{children:"*.provenance.io"})," is a valid wildcard attribute. Invalid wildcard usages include forms such as ",(0,t.jsx)(n.code,{children:"*kyc.provenance.io"})," or ",(0,t.jsx)(n.code,{children:"kyc.*.provenance.io"}),".  Matching will be accepted for any number of child level names, i.e. ",(0,t.jsx)(n.code,{children:"one.two.three.provenance.io"})," and ",(0,t.jsx)(n.code,{children:"one.provenance.io"})," will be accepted for ",(0,t.jsx)(n.code,{children:"*.provenance.io"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"marker-address-cache",children:"Marker Address Cache"}),"\n",(0,t.jsx)(n.p,{children:"For performance purposes the marker module maintains a KVStore entry with the address of every marker account.  This\nallows for cheap iterator operations over all marker accounts without having to filter through the native account\niterator from the auth module."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"0x01 | Address -> Address"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"marker-net-asset-value",children:"Marker Net Asset Value"}),"\n",(0,t.jsxs)(n.p,{children:["A marker can support multiple distinct net asset values assigned to track settlement pricing information on-chain. The ",(0,t.jsx)(n.code,{children:"price"})," attribute denotes the value assigned to the marker for a specific asset's associated ",(0,t.jsx)(n.code,{children:"volume"}),". For instance, when considering a scenario where 10 billion ",(0,t.jsx)(n.code,{children:"nhash"})," holds a value of 15\xa2, the corresponding ",(0,t.jsx)(n.code,{children:"volume"})," should reflect the quantity of 10,000,000,000. The ",(0,t.jsx)(n.code,{children:"update_block_height"})," attribute captures the block height when the update occurred."]}),"\n",(0,t.jsxs)(n.p,{children:["+++ ",(0,t.jsx)(n.a,{href:"https://github.com/provenance-io/provenance/blob/25070572cc898c476f5bb1a816c6c1c4d07e3d38/proto/provenance/marker/v1/marker.proto#L96-L104",children:"https://github.com/provenance-io/provenance/blob/25070572cc898c476f5bb1a816c6c1c4d07e3d38/proto/provenance/marker/v1/marker.proto#L96-L104"})]}),"\n",(0,t.jsx)(n.h2,{id:"params",children:"Params"}),"\n",(0,t.jsx)(n.p,{children:"Params is a module-wide configuration structure that stores system parameters\nand defines overall functioning of the marker module."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Params: ",(0,t.jsx)(n.code,{children:'Paramsspace("marker") -> legacy_amino(params)'})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["+++ ",(0,t.jsx)(n.a,{href:"https://github.com/provenance-io/provenance/blob/22740319ba4b3ba268b3720d4bee36d6c6b06b40/proto/provenance/marker/v1/marker.proto#L14-L25",children:"https://github.com/provenance-io/provenance/blob/22740319ba4b3ba268b3720d4bee36d6c6b06b40/proto/provenance/marker/v1/marker.proto#L14-L25"})]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>i});var t=r(67294);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);