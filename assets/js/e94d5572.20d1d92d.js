"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[8972],{13272:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>i,toc:()=>l});var s=t(85893),a=t(11151);const c={},o="x/ibchooks",i={id:"sdk/ibchooks/README",title:"x/ibchooks",description:"Notice",source:"@site/docs/sdk/ibchooks/README.md",sourceDirName:"sdk/ibchooks",slug:"/sdk/ibchooks/",permalink:"/docs/sdk/ibchooks/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Queries",permalink:"/docs/sdk/hold/queries"},next:{title:"x/ibcratelimit",permalink:"/docs/sdk/ibcratelimit/"}},r={},l=[{value:"Notice",id:"notice",level:2},{value:"Wasm Hooks",id:"wasm-hooks",level:2},{value:"Cosmwasm Contract Execution Format",id:"cosmwasm-contract-execution-format",level:3},{value:"ICS20 packet structure",id:"ics20-packet-structure",level:3},{value:"Execution flow",id:"execution-flow",level:3},{value:"Ack callbacks",id:"ack-callbacks",level:2},{value:"Design",id:"design",level:3},{value:"Use case",id:"use-case",level:3},{value:"Implementation",id:"implementation",level:3},{value:"Callback information in memo",id:"callback-information-in-memo",level:4},{value:"Interface for receiving the Acks and Timeouts",id:"interface-for-receiving-the-acks-and-timeouts",level:4},{value:"Async Acks",id:"async-acks",level:3},{value:"Use case",id:"use-case-1",level:4},{value:"Making contract Acks async",id:"making-contract-acks-async",level:4},{value:"Sending an async ack",id:"sending-an-async-ack",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"xibchooks",children:(0,s.jsx)(n.code,{children:"x/ibchooks"})}),"\n",(0,s.jsx)(n.h2,{id:"notice",children:"Notice"}),"\n",(0,s.jsxs)(n.p,{children:["**This module was forked from ",(0,s.jsx)(n.a,{href:"https://github.com/osmosis-labs/osmosis/tree/main/x/ibchooks",children:"https://github.com/osmosis-labs/osmosis/tree/main/x/ibchooks"})," **"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Unfortunately the original version could not be directly used due to extensive osmosis references, an incompatible Cosmos SDK version, and lack of support for IBC v6.x."})}),"\n",(0,s.jsx)(n.h2,{id:"wasm-hooks",children:"Wasm Hooks"}),"\n",(0,s.jsx)(n.p,{children:"The wasm hook is an IBC middleware which is used to allow ICS-20 token transfers to initiate contract calls.\nThis allows cross-chain contract calls, that involve token movement.\nThis is useful for a variety of usecases.\nOne of primary importance is cross-chain swaps, which is an extremely powerful primitive."}),"\n",(0,s.jsxs)(n.p,{children:["The mechanism enabling this is a ",(0,s.jsx)(n.code,{children:"memo"})," field on every ICS20 transfer packet as of ",(0,s.jsx)(n.a,{href:"https://medium.com/the-interchain-foundation/moving-beyond-simple-token-transfers-d42b2b1dc29b",children:"IBC v3.4.0"}),".\nWasm hooks is an IBC middleware that parses an ICS20 transfer, and if the ",(0,s.jsx)(n.code,{children:"memo"})," field is of a particular form, executes a wasm contract call. We now detail the ",(0,s.jsx)(n.code,{children:"memo"})," format for ",(0,s.jsx)(n.code,{children:"wasm"})," contract calls, and the execution guarantees provided."]}),"\n",(0,s.jsx)(n.h3,{id:"cosmwasm-contract-execution-format",children:"Cosmwasm Contract Execution Format"}),"\n",(0,s.jsxs)(n.p,{children:["Before we dive into the IBC metadata format, we show the cosmwasm execute message format, so the reader has a sense of what are the fields we need to be setting in.\nThe cosmwasm ",(0,s.jsx)(n.code,{children:"MsgExecuteContract"})," is defined ",(0,s.jsx)(n.a,{href:"https://github.com/CosmWasm/wasmd/blob/4fe2fbc8f322efdaf187e2e5c99ce32fd1df06f0/x/wasm/types/tx.pb.go#L340-L349",children:"here"})," as the following type:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:"type MsgExecuteContract struct {\n\t// Sender is the actor that committed the message in the sender chain\n\tSender string\n\t// Contract is the address of the smart contract\n\tContract string\n\t// Msg json encoded message to be passed to the contract\n\tMsg RawContractMessage\n\t// Funds coins that are transferred to the contract on execution\n\tFunds sdk.Coins\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:"So we detail where we want to get each of these fields from:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Sender: We cannot trust the sender of an IBC packet, the counterparty chain has full ability to lie about it.\nWe cannot risk this sender being confused for a particular user or module address on Osmosis.\nSo we replace the sender with an account to represent the sender prefixed by the channel and a wasm module prefix.\nThis is done by setting the sender to ",(0,s.jsx)(n.code,{children:'Bech32(Hash("ibc-wasm-hook-intermediary" || channelID || sender))'}),", where the channelId is the channel id on the local chain."]}),"\n",(0,s.jsx)(n.li,{children:"Contract: This field should be directly obtained from the ICS-20 packet metadata"}),"\n",(0,s.jsx)(n.li,{children:"Msg: This field should be directly obtained from the ICS-20 packet metadata."}),"\n",(0,s.jsx)(n.li,{children:"Funds: This field is set to the amount of funds being sent over in the ICS 20 packet. One detail is that the denom in the packet is the counterparty chains representation of the denom, so we have to translate it to Osmosis' representation."}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.em,{children:"WARNING:"})}),"  Due to a ",(0,s.jsx)(n.a,{href:"https://twitter.com/SCVSecurity/status/1682329758020022272",children:"bug"})," in the packet forward middleware, we cannot trust the sender from chains that use PFM. Until that is fixed, we recommend chains to not trust the sender on contracts executed via IBC hooks."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"So our constructed cosmwasm message that we execute will look like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-go",children:'msg := MsgExecuteContract{\n\t// Sender is the that actor that signed the messages\n\tSender: "osmo1-hash-of-channel-and-sender",\n\t// Contract is the address of the smart contract\n\tContract: packet.data.memo["wasm"]["ContractAddress"],\n\t// Msg json encoded message to be passed to the contract\n\tMsg: packet.data.memo["wasm"]["Msg"],\n\t// Funds coins that are transferred to the contract on execution\n\tFunds: sdk.NewCoin{Denom: ibc.ConvertSenderDenomToLocalDenom(packet.data.Denom), Amount: packet.data.Amount}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"ics20-packet-structure",children:"ICS20 packet structure"}),"\n",(0,s.jsx)(n.p,{children:"So given the details above, we propogate the implied ICS20 packet data structure.\nICS20 is JSON native, so we use JSON for the memo format."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    //... other ibc fields that we don\'t care about\n    "data":{\n    \t"denom": "denom on counterparty chain (e.g. uatom)",  // will be transformed to the local denom (ibc/...)\n        "amount": "1000",\n        "sender": "addr on counterparty chain", // will be transformed\n        "receiver": "contract addr or blank",\n    \t"memo": {\n           "wasm": {\n              "contract": "osmo1contractAddr",\n              "msg": {\n                "raw_message_fields": "raw_message_data",\n              }\n            }\n        }\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"An ICS20 packet is formatted correctly for wasmhooks iff the following all hold:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"memo"})," is not blank"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"memo"})," is valid JSON"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"memo"})," has at least one key, with value ",(0,s.jsx)(n.code,{children:'"wasm"'})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'memo["wasm"]'})," has exactly two entries, ",(0,s.jsx)(n.code,{children:'"contract"'})," and ",(0,s.jsx)(n.code,{children:'"msg"'})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'memo["wasm"]["msg"]'})," is a valid JSON object"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:'receiver == "" || receiver == memo["wasm"]["contract"]'})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"We consider an ICS20 packet as directed towards wasmhooks iff all of the following hold:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"memo"})," is not blank"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"memo"})," is valid JSON"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"memo"})," has at least one key, with name ",(0,s.jsx)(n.code,{children:'"wasm"'})]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"If an ICS20 packet is not directed towards wasmhooks, wasmhooks doesn't do anything.\nIf an ICS20 packet is directed towards wasmhooks, and is formated incorrectly, then wasmhooks returns an error."}),"\n",(0,s.jsx)(n.h3,{id:"execution-flow",children:"Execution flow"}),"\n",(0,s.jsx)(n.p,{children:"Pre wasm hooks:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ensure the incoming IBC packet is cryptogaphically valid"}),"\n",(0,s.jsx)(n.li,{children:"Ensure the incoming IBC packet is not timed out."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In Wasm hooks, pre packet execution:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Ensure the packet is correctly formatted (as defined above)"}),"\n",(0,s.jsx)(n.li,{children:"Edit the receiver to be the hardcoded IBC module account"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In wasm hooks, post packet execution:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Construct wasm message as defined before"}),"\n",(0,s.jsx)(n.li,{children:"Execute wasm message"}),"\n",(0,s.jsx)(n.li,{children:"if wasm message has error, return ErrAck"}),"\n",(0,s.jsx)(n.li,{children:"otherwise continue through middleware"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"ack-callbacks",children:"Ack callbacks"}),"\n",(0,s.jsx)(n.p,{children:"A contract that sends an IBC transfer, may need to listen for the ACK from that packet. To allow\ncontracts to listen on the ack of specific packets, we provide Ack callbacks."}),"\n",(0,s.jsx)(n.h3,{id:"design",children:"Design"}),"\n",(0,s.jsx)(n.p,{children:"The sender of an IBC transfer packet may specify a callback for when the ack of that packet is received in the memo\nfield of the transfer packet."}),"\n",(0,s.jsxs)(n.p,{children:["Crucially, ",(0,s.jsx)(n.em,{children:"only"})," the IBC packet sender can set the callback."]}),"\n",(0,s.jsx)(n.h3,{id:"use-case",children:"Use case"}),"\n",(0,s.jsx)(n.p,{children:"The crosschain swaps implementation sends an IBC transfer. If the transfer were to fail, we want to allow the sender\nto be able to retrieve their funds (which would otherwise be stuck in the contract). To do this, we allow users to\nretrieve the funds after the timeout has passed, but without the ack information, we cannot guarantee that the send\nhasn't failed (i.e.: returned an error ack notifying that the receiving change didn't accept it)"}),"\n",(0,s.jsx)(n.h3,{id:"implementation",children:"Implementation"}),"\n",(0,s.jsx)(n.h4,{id:"callback-information-in-memo",children:"Callback information in memo"}),"\n",(0,s.jsx)(n.p,{children:"For the callback to be processed, the transfer packet's memo should contain the following in its JSON:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'{"ibc_callback": "osmo1contractAddr"}'})}),"\n",(0,s.jsx)(n.p,{children:"The wasm hooks will keep the mapping from the packet's channel and sequence to the contract in storage. When an ack is\nreceived, it will notify the specified contract via a sudo message."}),"\n",(0,s.jsx)(n.h4,{id:"interface-for-receiving-the-acks-and-timeouts",children:"Interface for receiving the Acks and Timeouts"}),"\n",(0,s.jsx)(n.p,{children:"The contract that awaits the callback should implement the following interface for a sudo message:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'#[cw_serde]\npub enum IBCLifecycleComplete {\n    #[serde(rename = "ibc_ack")]\n    IBCAck {\n        /// The source channel (osmosis side) of the IBC packet\n        channel: String,\n        /// The sequence number that the packet was sent with\n        sequence: u64,\n        /// String encoded version of the ack as seen by OnAcknowledgementPacket(..)\n        ack: String,\n        /// Weather an ack is a success of failure according to the transfer spec\n        success: bool,\n    },\n    #[serde(rename = "ibc_timeout")]\n    IBCTimeout {\n        /// The source channel (osmosis side) of the IBC packet\n        channel: String,\n        /// The sequence number that the packet was sent with\n        sequence: u64,\n    },\n}\n\n/// Message type for `sudo` entry_point\n#[cw_serde]\npub enum SudoMsg {\n    #[serde(rename = "ibc_lifecycle_complete")]\n    IBCLifecycleComplete(IBCLifecycleComplete),\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"async-acks",children:"Async Acks"}),"\n",(0,s.jsx)(n.p,{children:"IBC supports the ability to send an ack back to the sender of the packet asynchronously. This is useful for\ncases where the packet is received, but the ack is not immediately known. For example, if the packet is being\nforwarded to another chain, the ack may not be known until the packet is received on the other chain."}),"\n",(0,s.jsx)(n.p,{children:"Note this ACK does not imply full revertability. It is possible that unrevertable actions have occurred\neven if there is an Ack Error. (This is distinct from the behavior of ICS-20 transfers). If you want to ensure\nrevertability, your contract should be implemented in a way that actions are not finalized until a success ack\nis received."}),"\n",(0,s.jsx)(n.h4,{id:"use-case-1",children:"Use case"}),"\n",(0,s.jsx)(n.p,{children:"Async acks are useful in cases where the contract needs to wait for a response from another chain before\nreturning a result to the caller."}),"\n",(0,s.jsx)(n.p,{children:"For example, if you want to send tokens to another chain after the contract is executed you need to\nadd a new ibc packet and wait for its ack."}),"\n",(0,s.jsx)(n.p,{children:"In the synchronous acks case, the caller will receive an ack from the contract before the second packet\nhas been processed. This means that the caller will have to wait (and potentially track) if the second\npacket has been processed successfully or not."}),"\n",(0,s.jsx)(n.p,{children:"With async acks, you contract can take this responsibility and only send an ack to the caller once the\nsecond packet has been processed"}),"\n",(0,s.jsx)(n.h4,{id:"making-contract-acks-async",children:"Making contract Acks async"}),"\n",(0,s.jsxs)(n.p,{children:["To support this, we allow contracts to return an ",(0,s.jsx)(n.code,{children:"IBCAsync"})," response from the function being executed when the\npacket is received. That response specifies that the ack should be handled asynchronously."]}),"\n",(0,s.jsx)(n.p,{children:"Concretely the contract should return:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:"#[cw_serde]\npub struct OnRecvPacketAsyncResponse {\n    pub is_async_ack: bool,\n}\n"})}),"\n",(0,s.jsxs)(n.p,{children:["if ",(0,s.jsx)(n.code,{children:"is_async_ack"})," is set to true, ",(0,s.jsx)(n.code,{children:"OnRecvPacket"})," will return ",(0,s.jsx)(n.code,{children:"nil"}),' and the ack will not be written. Instead, the\ncontract wil be stored as the "ack actor" for the packet so that only that contract is allowed to send an ack\nfor it.']}),"\n",(0,s.jsx)(n.p,{children:"It is up to the contract developers to decide which conditions will trigger the ack to be sent."}),"\n",(0,s.jsx)(n.h4,{id:"sending-an-async-ack",children:"Sending an async ack"}),"\n",(0,s.jsx)(n.p,{children:"To send the async ack, the contract needs to send the MsgEmitIBCAck message to the chain. This message will\nthen make a sudo call to the contract requesting the ack and write the ack to state."}),"\n",(0,s.jsx)(n.p,{children:"That message can be specified in the contract as:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'#[derive(\n    Clone,\n    PartialEq,\n    Eq,\n    ::prost::Message,\n    serde::Serialize,\n    serde::Deserialize,\n    schemars::JsonSchema,\n    CosmwasmExt,\n)]\n#[proto_message(type_url = "/osmosis.ibchooks.MsgEmitIBCAck")]\npub struct MsgEmitIBCAck {\n    #[prost(string, tag = "1")]\n    pub sender: ::prost::alloc::string::String,\n    #[prost(uint64, tag = "2")]\n    pub packet_sequence: u64,\n    #[prost(string, tag = "3")]\n    pub channel: ::prost::alloc::string::String,\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"The contract is expected to implement the following sudo message handler:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'#[cw_serde]\npub enum IBCAsyncOptions {\n    #[serde(rename = "request_ack")]\n    RequestAck {\n        /// The source channel (osmosis side) of the IBC packet\n        source_channel: String,\n        /// The sequence number that the packet was sent with\n        packet_sequence: u64,\n    },\n}\n\n#[cw_serde]\npub enum SudoMsg {\n    #[serde(rename = "ibc_async")]\n    IBCAsync(IBCAsyncOptions),\n}\n'})}),"\n",(0,s.jsxs)(n.p,{children:["and that sudo call should return an ",(0,s.jsx)(n.code,{children:"IBCAckResponse"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-rust",children:'#[cw_serde]\n#[serde(tag = "type", content = "content")]\npub enum IBCAck {\n    AckResponse{\n        packet: Packet,\n        contract_ack: ContractAck,\n    },\n    AckError {\n        packet: Packet,\n        error_description: String,\n        error_response: String,\n    }\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Note: the sudo call is required to potentially allow anyone to send the MsgEmitIBCAck message. For now, however,\nthis is artificially limited so that the message can only be send by the same contract. This could be expanded in\nthe future if needed."}),"\n",(0,s.jsx)(n.h1,{id:"testing-strategy",children:"Testing strategy"}),"\n",(0,s.jsx)(n.p,{children:"See go tests.`"})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>o});var s=t(67294);const a={},c=s.createContext(a);function o(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);