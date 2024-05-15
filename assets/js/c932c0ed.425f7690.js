"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[5752],{6165:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>o});var r=i(85893),t=i(11151);const s={description:"High-level creation of a coin marker on Provenance Blockchain."},a="Coin",d={id:"pb/blockchain/basics/stablecoin",title:"Coin",description:"High-level creation of a coin marker on Provenance Blockchain.",source:"@site/docs/pb/blockchain/basics/stablecoin.md",sourceDirName:"pb/blockchain/basics",slug:"/pb/blockchain/basics/stablecoin",permalink:"/docs/pb/blockchain/basics/stablecoin",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{description:"High-level creation of a coin marker on Provenance Blockchain."},sidebar:"documentationSidebar",previous:{title:"Accounts",permalink:"/docs/pb/blockchain/basics/accounts"},next:{title:"Gas and Fees",permalink:"/docs/pb/blockchain/basics/gas-and-fees"}},c={},o=[{value:"Overview",id:"overview",level:2},{value:"Creating a Coin",id:"creating-a-coin",level:2},{value:"Verifying",id:"verifying",level:4},{value:"Setting Marker Permissions <a></a>",id:"setting-marker-permissions-",level:3},{value:"<code>admin</code>",id:"admin",level:4},{value:"<code>mint</code>",id:"mint",level:4},{value:"<code>burn</code>",id:"burn",level:4},{value:"<code>withdraw</code>",id:"withdraw",level:4},{value:"Review, Finalize and Activate",id:"review-finalize-and-activate",level:3},{value:"Verify Activation",id:"verify-activation",level:4},{value:"Review",id:"review",level:2},{value:"Basic Usage",id:"basic-usage",level:2},{value:"Minting",id:"minting",level:3},{value:"Burning",id:"burning",level:3},{value:"Query",id:"query",level:4},{value:"Withdrawing (Transfer)",id:"withdrawing-transfer",level:3},{value:"Coin Marker <code>tp12tpv7m43vu7dkfnq648q2l65v3tk9x6mn0x2a8</code>",id:"coin-marker-tp12tpv7m43vu7dkfnq648q2l65v3tk9x6mn0x2a8",level:4},{value:"Address with Permissions to Withdraw <code>tp19fn5mlntyxafugetc8lyzzre6nnyqsq95449gt</code>",id:"address-with-permissions-to-withdraw-tp19fn5mlntyxafugetc8lyzzre6nnyqsq95449gt",level:4},{value:"Recipient Address <code>tp1jdwgsdhdu692wsfreymglvz6aam59jh3uef4ve</code>",id:"recipient-address-tp1jdwgsdhdu692wsfreymglvz6aam59jh3uef4ve",level:4},{value:"Executing the Withdraw",id:"executing-the-withdraw",level:4},{value:"Coin Marker <code>tp12tpv7m43vu7dkfnq648q2l65v3tk9x6mn0x2a8</code>",id:"coin-marker-tp12tpv7m43vu7dkfnq648q2l65v3tk9x6mn0x2a8-1",level:4},{value:"Recipient Address <code>tp1jdwgsdhdu692wsfreymglvz6aam59jh3uef4ve</code>",id:"recipient-address-tp1jdwgsdhdu692wsfreymglvz6aam59jh3uef4ve-1",level:4},{value:"Holders of Coin",id:"holders-of-coin",level:3},{value:"Review",id:"review-1",level:3},{value:"Stablecoins",id:"stablecoins",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"coin",children:"Coin"}),"\n",(0,r.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(n.p,{children:["A Coin on Provenance Blockchain is implemented as a ",(0,r.jsx)(n.a,{href:"/docs/sdk/marker",children:"Marker"}),". Each coin that is generated can be transferred freely between blockchain ",(0,r.jsx)(n.a,{href:"/docs/pb/blockchain/basics/accounts",children:"accounts "}),"and represents a value exchange between parties. A coin marker is a simple structure that is meant to be used as a building block for a more complex use case, such as a ",(0,r.jsx)(n.a,{href:"/docs/pb/blockchain/basics/stablecoin#stablecoins",children:"stablecoin"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"creating-a-coin",children:"Creating a Coin"}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["To follow along with this section, refer to ",(0,r.jsx)(n.a,{href:"../running-a-node/",children:"Installing Provenance Blockchain"})," to install the ",(0,r.jsx)(n.code,{children:"provenanced"})," binary and have an ",(0,r.jsx)(n.a,{href:"../using-provenance/#creating-a-key-s",children:"encryption key created"}),"."]})}),"\n",(0,r.jsx)(n.p,{children:"There are multiple ways to configure a coin to suit a business use case. Here is an example that demonstrates how a coin is created, minted, burned, and transacted."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"initial_supply"})}),(0,r.jsx)(n.td,{children:"Initial supply of tokens as an integer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"denom"})}),(0,r.jsx)(n.td,{children:"Name of the coin being created"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"key_name"})}),(0,r.jsx)(n.td,{children:"Name of the key from the key store that was previously created"})]})]})]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"<initial_supply>"})," will be set to 0, indicating that this coin will not have a fixed supply."]})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"provenanced --testnet --chain-id pio-testnet-1 tx marker new <initial_supply><denom> --type COIN --from <key_name> --fees 5000nhash\n"})}),"\n",(0,r.jsx)(n.h4,{id:"verifying",children:"Verifying"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"provenanced --testnet q marker get <denom>\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'marker:\n  \'@type\': /provenance.marker.v1.MarkerAccount\n  access_control: []\n  allow_governance_control: false\n  base_account:\n    account_number: "25"\n    address: tp12tpv7m43vu7dkfnq648q2l65v3tk9x6mn0x2a8\n    pub_key: null\n    sequence: "0"\n  denom: <denom>\n  manager: tp19fn5mlntyxafugetc8lyzzre6nnyqsq95449gt\n  marker_type: MARKER_TYPE_COIN\n  status: MARKER_STATUS_PROPOSED\n  supply: "0"\n  supply_fixed: false\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The marker is now in ",(0,r.jsx)(n.code,{children:"PROPOSED"})," status and is ready for configuration."]}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsx)(n.p,{children:"Notice that the address for the marker is a newly created Provenance Blockchain address that the utilized encryption key manages."}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Marker Address"})," ",(0,r.jsx)(n.code,{children:"tp12tpv7m43vu7dkfnq648q2l65v3tk9x6mn0x2a8"})]}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Manager"})," ",(0,r.jsx)(n.strong,{children:"Address"})," ",(0,r.jsx)(n.code,{children:"tp19fn5mlntyxafugetc8lyzzre6nnyqsq95449gt"})]})]}),"\n",(0,r.jsxs)(n.h3,{id:"setting-marker-permissions-",children:["Setting Marker Permissions ",(0,r.jsx)("a",{href:"setting-permissions",id:"setting-permissions"})]}),"\n",(0,r.jsx)(n.p,{children:"Marker permissions allow multiple encryption keys to interact with the underlying functionality it provides. The address used in this example is the same as the manager of the marker, making a single key the only permissioned user to mint/burn and grant/revoke permissions."}),"\n",(0,r.jsx)(n.h4,{id:"admin",children:(0,r.jsx)(n.code,{children:"admin"})}),"\n",(0,r.jsx)(n.p,{children:"Allow the grantee to grant privileges to other addresses."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"provenanced --testnet --chain-id pio-testnet-1 tx marker grant tp19fn5mlntyxafugetc8lyzzre6nnyqsq95449gt <denom> admin --from <key_name>--fees 5000nhash\n"})}),"\n",(0,r.jsx)(n.h4,{id:"mint",children:(0,r.jsx)(n.code,{children:"mint"})}),"\n",(0,r.jsx)(n.p,{children:"Allow the grantee to mint additional tokens."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"provenanced --testnet --chain-id pio-testnet-1 tx marker grant tp19fn5mlntyxafugetc8lyzzre6nnyqsq95449gt <denom> mint --from <key_name> --fees 5000nhash\n"})}),"\n",(0,r.jsx)(n.h4,{id:"burn",children:(0,r.jsx)(n.code,{children:"burn"})}),"\n",(0,r.jsx)(n.p,{children:"Allow the grantee to burn tokens."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"provenanced --testnet --chain-id pio-testnet-1 tx marker grant tp19fn5mlntyxafugetc8lyzzre6nnyqsq95449gt <denom> burn --from <key_name> --fees 5000nhash\n"})}),"\n",(0,r.jsx)(n.h4,{id:"withdraw",children:(0,r.jsx)(n.code,{children:"withdraw"})}),"\n",(0,r.jsx)(n.p,{children:"Allow the grantee to withdraw minted tokens that are stored in the marker's account."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"provenanced --testnet --chain-id pio-testnet-1 tx marker grant tp19fn5mlntyxafugetc8lyzzre6nnyqsq95449gt <denom> withdraw --from <key_name> --fees 5000nhash\n"})}),"\n",(0,r.jsx)(n.h3,{id:"review-finalize-and-activate",children:"Review, Finalize and Activate"}),"\n",(0,r.jsx)(n.p,{children:"Let's review the marker to ensure that the permissions have been set correctly before it is finalized."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"provenanced q marker get <denom>\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'marker:\n  \'@type\': /provenance.marker.v1.MarkerAccount\n  access_control:\n  - address: tp19fn5mlntyxafugetc8lyzzre6nnyqsq95449gt\n    permissions:\n    - ACCESS_ADMIN\n    - ACCESS_BURN\n    - ACCESS_MINT\n  allow_governance_control: false\n  base_account:\n    account_number: "25"\n    address: tp12tpv7m43vu7dkfnq648q2l65v3tk9x6mn0x2a8\n    pub_key: null\n    sequence: "0"\n  denom: <denom>\n  manager: tp19fn5mlntyxafugetc8lyzzre6nnyqsq95449gt\n  marker_type: MARKER_TYPE_COIN\n  status: MARKER_STATUS_PROPOSED\n  supply: "0"\n  supply_fixed: false\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Note the permissions for the address allow ",(0,r.jsx)(n.code,{children:"ADMIN, BURN, MINT"})]})}),"\n",(0,r.jsx)(n.p,{children:"Finalizing the marker will cause the marker to begin enforcing the permissions granted. The manager will no longer be able to modify the marker without permissions after finalization."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"provenanced --testnet --chain-id pio-testnet-1 tx marker finalize <denom> --from <key_name> --fees 5000nhash\n"})}),"\n",(0,r.jsx)(n.p,{children:"Activating the marker will ensure that the supply is updated according to the settings for total supply."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"provenanced --testnet --chain-id pio-testnet-1 tx marker activate <denom> --from <key_name> --fees 5000nhash\n"})}),"\n",(0,r.jsx)(n.h4,{id:"verify-activation",children:"Verify Activation"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"provenanced q marker get <denom>\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'marker:\n  \'@type\': /provenance.marker.v1.MarkerAccount\n  access_control:\n  - address: tp19fn5mlntyxafugetc8lyzzre6nnyqsq95449gt\n    permissions:\n    - ACCESS_ADMIN\n    - ACCESS_BURN\n    - ACCESS_MINT\n    - ACCESS_WITHDRAW\n  allow_governance_control: false\n  base_account:\n    account_number: "25"\n    address: tp12tpv7m43vu7dkfnq648q2l65v3tk9x6mn0x2a8\n    pub_key: null\n    sequence: "0"\n  denom: <denom>\n  manager: ""\n  marker_type: MARKER_TYPE_COIN\n  status: MARKER_STATUS_ACTIVE\n  supply: "0"\n  supply_fixed: false\n'})}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsxs)(n.p,{children:["Note that the marker is now ",(0,r.jsx)(n.code,{children:"ACTIVE"})," and has permissions set for use."]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"status: MARKER_STATUS_ACTIVE\n\naccess_control:\n  - address: tp19fn5mlntyxafugetc8lyzzre6nnyqsq95449gt\n    permissions:\n    - ACCESS_ADMIN\n    - ACCESS_BURN\n    - ACCESS_MINT\n    - ACCESS_WITHDRAW\n"})})]}),"\n",(0,r.jsx)(n.h2,{id:"review",children:"Review"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"A marker has been created and now represents a new coin type."}),"\n",(0,r.jsx)(n.li,{children:"Permissions on the marker have been granted to a single encryption key that has permissions to grant/revoke access, mint/burn token."}),"\n",(0,r.jsxs)(n.li,{children:["A ",(0,r.jsx)(n.code,{children:"denom"})," has been established on Provenance Blockchain as the name reference for this coin."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Now that we have a fully functioning coin, let's continue and look at how we mint, burn, and transfer it."}),"\n",(0,r.jsx)(n.h2,{id:"basic-usage",children:"Basic Usage"}),"\n",(0,r.jsx)(n.h3,{id:"minting",children:"Minting"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"provenanced --testnet --chain-id pio-testnet-1 \\\n  --from stakeholder1 --fees 5000nhash tx marker mint 500<denom>\n"})}),"\n",(0,r.jsx)(n.h3,{id:"burning",children:"Burning"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"provenanced --testnet --chain-id pio-testnet-1 \\\n  --from stakeholder1 --fees 5000nhash tx marker burn 500<denom>\n"})}),"\n",(0,r.jsxs)(n.admonition,{type:"tip",children:[(0,r.jsxs)(n.p,{children:["Verification of minting and burning needs to be accomplished by querying the ",(0,r.jsx)(n.strong,{children:"address of the marker"})," not the address that has permissions to mint and burn."]}),(0,r.jsx)(n.h4,{id:"query",children:"Query"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"provenanced --testnet --chain-id pio-testnet-1 q bank balances tp12tpv7m43vu7dkfnq648q2l65v3tk9x6mn0x2a8\n"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'balances:\n- amount: "500"\n  denom: <denom>\n'})})]}),"\n",(0,r.jsx)(n.h3,{id:"withdrawing-transfer",children:"Withdrawing (Transfer)"}),"\n",(0,r.jsx)(n.p,{children:"Withdrawing from a marker involves three addresses:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Marker Address"}),"\n",(0,r.jsxs)(n.li,{children:["Address with Permissions to Withdraw ",(0,r.jsx)(n.em,{children:"(This is the address that signs for the transaction)"})]}),"\n",(0,r.jsx)(n.li,{children:"Recipient Address"}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Let's look at the current coin values held by the three addresses involved in the ",(0,r.jsx)(n.code,{children:"withdraw"})," transaction."]}),"\n",(0,r.jsxs)(n.h4,{id:"coin-marker-tp12tpv7m43vu7dkfnq648q2l65v3tk9x6mn0x2a8",children:["Coin Marker ",(0,r.jsx)(n.code,{children:"tp12tpv7m43vu7dkfnq648q2l65v3tk9x6mn0x2a8"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'balances:\n- amount: "500"\n  denom: <denom>\n'})}),"\n",(0,r.jsxs)(n.h4,{id:"address-with-permissions-to-withdraw-tp19fn5mlntyxafugetc8lyzzre6nnyqsq95449gt",children:["Address with Permissions to Withdraw ",(0,r.jsx)(n.code,{children:"tp19fn5mlntyxafugetc8lyzzre6nnyqsq95449gt"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'balances:\n- amount: "0"\n  denom: <denom>\n'})}),"\n",(0,r.jsxs)(n.h4,{id:"recipient-address-tp1jdwgsdhdu692wsfreymglvz6aam59jh3uef4ve",children:["Recipient Address ",(0,r.jsx)(n.code,{children:"tp1jdwgsdhdu692wsfreymglvz6aam59jh3uef4ve"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'balances:\n- amount: "0"\n  denom: <denom>\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["The balances that are ",(0,r.jsx)(n.code,{children:"0"})," above are shown for example purposes only and will not be displayed in output from the provenanced command."]})}),"\n",(0,r.jsx)(n.h4,{id:"executing-the-withdraw",children:"Executing the Withdraw"}),"\n",(0,r.jsx)(n.p,{children:"As the address with permissions to withdraw from the marker, we can move coin that has been minted to any address on the Provenance Blockchain."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:" provenanced --testnet --chain-id pio-testnet-1 --fees 5000nhash --from <key_name> tx marker withdraw <denom> 500<denom> <recipient_address>\n"})}),"\n",(0,r.jsx)(n.p,{children:"Once the withdraw has been completed the balances of two accounts have been updated."}),"\n",(0,r.jsxs)(n.h4,{id:"coin-marker-tp12tpv7m43vu7dkfnq648q2l65v3tk9x6mn0x2a8-1",children:["Coin Marker ",(0,r.jsx)(n.code,{children:"tp12tpv7m43vu7dkfnq648q2l65v3tk9x6mn0x2a8"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'balances:\n- amount: "0"\n  denom: <denom>\n'})}),"\n",(0,r.jsxs)(n.h4,{id:"recipient-address-tp1jdwgsdhdu692wsfreymglvz6aam59jh3uef4ve-1",children:["Recipient Address ",(0,r.jsx)(n.code,{children:"tp1jdwgsdhdu692wsfreymglvz6aam59jh3uef4ve"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'balances:\n- amount: "500"\n  denom: <denom>\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["The recipient has received 500",(0,r.jsx)(n.code,{children:"denom"})," that was minted, withdrawn and transferred to their account. Note that the withdraw process includes the recipient as a part of the process."]})}),"\n",(0,r.jsx)(n.h3,{id:"holders-of-coin",children:"Holders of Coin"}),"\n",(0,r.jsx)(n.p,{children:"A coin holder often wants to understand what addresses their coin is being held by. Provenance Blockchain provides a simple way of perform this lookup."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"provenanced --testnet --chain-id pio-testnet-1 q marker holding <denom>\n"})}),"\n",(0,r.jsx)(n.p,{children:"We can now see that the current holders of the coin we created, minted, and transferred are just the single recipient."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'balances:\n- address: tp1jdwgsdhdu692wsfreymglvz6aam59jh3uef4ve\n  coins:\n  - amount: "500"\n    denom: <denom>\n'})}),"\n",(0,r.jsx)(n.h3,{id:"review-1",children:"Review"}),"\n",(0,r.jsxs)(n.p,{children:["It is important to discern that addresses are identifiers that point to accounts on Provenance Blockchain. Each ",(0,r.jsx)(n.a,{href:"/docs/pb/blockchain/basics/accounts",children:"account"})," on Provenance Blockchain can hold coins of various denominations, and ",(0,r.jsx)(n.a,{href:"/docs/sdk/marker",children:"markers"})," are a special type of account that has its own denomination, can hold coins, and can hold NFTs (Scopes) described later."]}),"\n",(0,r.jsx)(n.p,{children:"In this exercise a coin was created, tokens of that coin were minted, and then subsequently transferred to a recipients address. The tokens that were transferred are now held by the recipient and are no longer within the control of the marker, manager, addresses that have permissions on the marker."}),"\n",(0,r.jsx)(n.h2,{id:"stablecoins",children:"Stablecoins"}),"\n",(0,r.jsxs)(n.p,{children:["The coin created above can be used as a stablecoin to provide a bridge between fiat and digital currency as the basis for transactions of value on Provenance Blockchain. Each new stablecoin is represented on the blockchain as a ",(0,r.jsx)(n.a,{href:"/docs/sdk/marker",children:"marker "}),"managed by the issuer. Issuers of stablecoin manage fiat currency in a traditional banking account structure that handles the necessary BSA/AML obligations. Issuing institutions have complete control over the management of their coin and provide a redemption method where a holder can convert the digital holding to fiat over banking rails."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/docs/pb/blockchain/basics/stablecoin",children:"Omnibus Banks"})," for more participant information."]})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},11151:(e,n,i)=>{i.d(n,{Z:()=>d,a:()=>a});var r=i(67294);const t={},s=r.createContext(t);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);