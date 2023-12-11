"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[2048],{52531:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=t(85893),o=t(11151);const a={},r="MsgFees Queries",i={id:"sdk/msgfees/queries",title:"queries",description:"\x3c!--",source:"@site/docs/sdk/msgfees/04_queries.md",sourceDirName:"sdk/msgfees",slug:"/sdk/msgfees/queries",permalink:"/docs/sdk/msgfees/queries",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"start_end_block",permalink:"/docs/sdk/msgfees/start_end_block"},next:{title:"events",permalink:"/docs/sdk/msgfees/events"}},l={},c=[{value:"Msg/GenesisState",id:"msggenesisstate",level:2},{value:"Query Request/Response Object",id:"query-requestresponse-object",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"msgfees-queries",children:"MsgFees Queries"}),"\n",(0,n.jsx)(s.h2,{id:"msggenesisstate",children:"Msg/GenesisState"}),"\n",(0,n.jsxs)(s.p,{children:["GenesisState contains a set of msg fees, exported and later imported from/to the store.\n",(0,n.jsx)(s.a,{href:"../../../proto/provenance/msgfees/v1/genesis.proto?plain=1",children:"genesis.proto"})]}),"\n",(0,n.jsx)(s.h2,{id:"query-requestresponse-object",children:"Query Request/Response Object"}),"\n",(0,n.jsxs)(s.p,{children:["get params for the module. ",(0,n.jsx)(s.a,{href:"../../../proto/provenance/msgfees/v1/query.proto?plain=1",children:"get params"})]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"../../../proto/provenance/msgfees/v1/query.proto?plain=1",children:"query all msgfees in the system"}),"\nQueryAllMsgFeesRequest/QueryAllMsgFeesResponse resquest/response for all messages\nwhich have fees associated with them."]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"../../../proto/provenance/msgfees/v1/query.proto?plain=1",children:"simuate fees(including additional fees to be paid for a Tx)"}),"\nTo simulate the fees required on the Tx use CalculateTxFeesRequest"]}),"\n",(0,n.jsxs)(s.p,{children:["Request: ",(0,n.jsx)(s.a,{href:"../../../proto/provenance/msgfees/v1/query.proto#L59-L68",children:"CalculateTxFeesRequest"})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-protobuf",children:"// CalculateTxFeesRequest is the request type for the Query RPC method.\nmessage CalculateTxFeesRequest {\n  // tx_bytes is the transaction to simulate.\n  bytes tx_bytes = 1;\n  // default_base_denom is used to set the denom used for gas fees\n  // if not set it will default to nhash.\n  string default_base_denom = 2;\n  // gas_adjustment is the adjustment factor to be multiplied against the estimate returned by the tx simulation\n  float gas_adjustment = 3;\n}\n"})}),"\n",(0,n.jsxs)(s.p,{children:["Response: ",(0,n.jsx)(s.a,{href:"../../../proto/provenance/msgfees/v1/query.proto#L70-L81",children:"CalculateTxFeesResponse"})]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-protobuf",children:'// CalculateTxFeesResponse is the response type for the Query RPC method.\nmessage CalculateTxFeesResponse {\n  // additional_fees are the amount of coins to be for addition msg fees\n  repeated cosmos.base.v1beta1.Coin additional_fees = 1\n      [(gogoproto.nullable) = false, (gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];\n  // total_fees are the total amount of fees needed for the transactions (msg fees + gas fee)\n  // note: the gas fee is calculated with the min gas fee param as a constant\n  repeated cosmos.base.v1beta1.Coin total_fees = 2\n      [(gogoproto.nullable) = false, (gogoproto.castrepeated) = "github.com/cosmos/cosmos-sdk/types.Coins"];\n  // estimated_gas is the amount of gas needed for the transaction\n  uint64 estimated_gas = 3 [(gogoproto.moretags) = "yaml:\\"estimated_gas\\""];\n}\n'})}),"\n",(0,n.jsxs)(s.p,{children:["total fee is calculated based on ",(0,n.jsx)(s.code,{children:"floor_gas_price"})," param set to 1905nhash for now."]})]})}function u(e={}){const{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,s,t)=>{t.d(s,{Z:()=>i,a:()=>r});var n=t(67294);const o={},a=n.createContext(o);function r(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);