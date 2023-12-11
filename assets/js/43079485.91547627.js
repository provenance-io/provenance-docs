"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[441],{70053:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>d,default:()=>o,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var n=s(85893),i=s(11151);const t={},d="Exchange State",l={id:"sdk/exchange/state",title:"Exchange State",description:"The Exchange module manages several things in state.",source:"@site/docs/sdk/exchange/02_state.md",sourceDirName:"sdk/exchange",slug:"/sdk/exchange/state",permalink:"/docs/sdk/exchange/state",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Exchange Concepts",permalink:"/docs/sdk/exchange/concepts"},next:{title:"Exchange Messages",permalink:"/docs/sdk/exchange/messages"}},a={},c=[{value:"Params",id:"params",level:2},{value:"Default Split",id:"default-split",level:3},{value:"Specific Denom Split",id:"specific-denom-split",level:3},{value:"Markets",id:"markets",level:2},{value:"Market Create-Ask Flat Fee",id:"market-create-ask-flat-fee",level:3},{value:"Market Create-Bid Flat Fee",id:"market-create-bid-flat-fee",level:3},{value:"Market Seller Settlement Flat Fee",id:"market-seller-settlement-flat-fee",level:3},{value:"Market Seller Settlement Ratio Fee",id:"market-seller-settlement-ratio-fee",level:3},{value:"Market Buyer Settlement Flat Fee",id:"market-buyer-settlement-flat-fee",level:3},{value:"Market Buyer Settlement Ratio Fee",id:"market-buyer-settlement-ratio-fee",level:3},{value:"Market Inactive Indicator",id:"market-inactive-indicator",level:3},{value:"Market User-Settle Indicator",id:"market-user-settle-indicator",level:3},{value:"Market Permissions",id:"market-permissions",level:3},{value:"Market Create-Ask Required Attributes",id:"market-create-ask-required-attributes",level:3},{value:"Market Create-Bid Required Attributes",id:"market-create-bid-required-attributes",level:3},{value:"Market Account",id:"market-account",level:3},{value:"Market Details",id:"market-details",level:3},{value:"Known Market ID",id:"known-market-id",level:3},{value:"Last Market ID",id:"last-market-id",level:3},{value:"Orders",id:"orders",level:2},{value:"Ask Orders",id:"ask-orders",level:3},{value:"Bid Orders",id:"bid-orders",level:3},{value:"Last Order ID",id:"last-order-id",level:3},{value:"Indexes",id:"indexes",level:2},{value:"Market to Order",id:"market-to-order",level:3},{value:"Owner Address to Order",id:"owner-address-to-order",level:3},{value:"Asset Denom to Order",id:"asset-denom-to-order",level:3},{value:"Market External ID to Order",id:"market-external-id-to-order",level:3}];function h(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"exchange-state",children:"Exchange State"}),"\n",(0,n.jsx)(r.p,{children:"The Exchange module manages several things in state."}),"\n",(0,n.jsx)(r.p,{children:"Big-endian ordering is used for all conversions between numbers and byte arrays."}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"#params",children:"Params"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#default-split",children:"Default Split"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#specific-denom-split",children:"Specific Denom Split"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"#markets",children:"Markets"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#market-create-ask-flat-fee",children:"Market Create-Ask Flat Fee"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#market-create-bid-flat-fee",children:"Market Create-Bid Flat Fee"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#market-seller-settlement-flat-fee",children:"Market Seller Settlement Flat Fee"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#market-seller-settlement-ratio-fee",children:"Market Seller Settlement Ratio Fee"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#market-buyer-settlement-flat-fee",children:"Market Buyer Settlement Flat Fee"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#market-buyer-settlement-ratio-fee",children:"Market Buyer Settlement Ratio Fee"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#market-inactive-indicator",children:"Market Inactive Indicator"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#market-user-settle-indicator",children:"Market User-Settle Indicator"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#market-permissions",children:"Market Permissions"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#market-create-ask-required-attributes",children:"Market Create-Ask Required Attributes"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#market-create-bid-required-attributes",children:"Market Create-Bid Required Attributes"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#market-account",children:"Market Account"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#market-details",children:"Market Details"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#known-market-id",children:"Known Market ID"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#last-market-id",children:"Last Market ID"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"#orders",children:"Orders"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#ask-orders",children:"Ask Orders"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#bid-orders",children:"Bid Orders"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#last-order-id",children:"Last Order ID"})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.a,{href:"#indexes",children:"Indexes"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#market-to-order",children:"Market to Order"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#owner-address-to-order",children:"Owner Address to Order"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#asset-denom-to-order",children:"Asset Denom to Order"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"#market-external-id-to-order",children:"Market External ID to Order"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"params",children:"Params"}),"\n",(0,n.jsxs)(r.p,{children:["All params entries start with the type byte ",(0,n.jsx)(r.code,{children:"0x00"})," followed by a string identifying the entry type."]}),"\n",(0,n.jsxs)(r.p,{children:["Each ",(0,n.jsx)(r.code,{children:"<split>"})," is stored as a ",(0,n.jsx)(r.code,{children:"uint16"})," (2 bytes) in big-endian order."]}),"\n",(0,n.jsxs)(r.p,{children:["The byte ",(0,n.jsx)(r.code,{children:"0x1E"})," is used in a few places as a record separator."]}),"\n",(0,n.jsxs)(r.p,{children:["See also: ",(0,n.jsx)(r.a,{href:"/docs/sdk/exchange/params#params",children:"Params"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"default-split",children:"Default Split"}),"\n",(0,n.jsx)(r.p,{children:"The default split defines the split amount (in basis points) the exchange receives of fees when there is not an applicable specific denom split."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Key:",(0,n.jsx)(r.code,{children:'0x00 | "split" (5 bytes)'})]}),"\n",(0,n.jsxs)(r.li,{children:["Value: ",(0,n.jsx)(r.code,{children:"<split (2 bytes)>"})]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"specific-denom-split",children:"Specific Denom Split"}),"\n",(0,n.jsx)(r.p,{children:"A specific denom split is a split amount (in basis points) the exchange receives of fees for fees paid in a specific denom."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Key: ",(0,n.jsx)(r.code,{children:'0x00 | "split" (5 bytes) | <denom (string)>'})]}),"\n",(0,n.jsxs)(r.li,{children:["Value: ",(0,n.jsx)(r.code,{children:"<split (2 bytes)>"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["See also: ",(0,n.jsx)(r.a,{href:"/docs/sdk/exchange/params#denomsplit",children:"DenomSplit"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"markets",children:"Markets"}),"\n",(0,n.jsx)(r.p,{children:"Each aspect of a market is stored separately for specific lookup."}),"\n",(0,n.jsxs)(r.p,{children:["Each ",(0,n.jsx)(r.code,{children:"<market id>"})," is a ",(0,n.jsx)(r.code,{children:"uint32"})," (4 bytes) in big-endian order."]}),"\n",(0,n.jsxs)(r.p,{children:["Most aspects of a market have keys that start with the type byte ",(0,n.jsx)(r.code,{children:"0x01"}),", followed by the ",(0,n.jsx)(r.code,{children:"<market id>"})," then another type byte."]}),"\n",(0,n.jsxs)(r.p,{children:["See also: ",(0,n.jsx)(r.a,{href:"/docs/sdk/exchange/messages#market",children:"Market"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"market-create-ask-flat-fee",children:"Market Create-Ask Flat Fee"}),"\n",(0,n.jsx)(r.p,{children:"One entry per configured denom."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Key: ",(0,n.jsx)(r.code,{children:"0x01 | <market id (4 bytes)> | 0x00 | <denom (string)>"})]}),"\n",(0,n.jsxs)(r.li,{children:["Value: ",(0,n.jsx)(r.code,{children:"<amount (string)>"})]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"market-create-bid-flat-fee",children:"Market Create-Bid Flat Fee"}),"\n",(0,n.jsx)(r.p,{children:"One entry per configured denom."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Key: ",(0,n.jsx)(r.code,{children:"0x01 | <market id (4 bytes)> | 0x01 | <denom (string)>"})]}),"\n",(0,n.jsxs)(r.li,{children:["Value: ",(0,n.jsx)(r.code,{children:"<amount (string)>"})]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"market-seller-settlement-flat-fee",children:"Market Seller Settlement Flat Fee"}),"\n",(0,n.jsx)(r.p,{children:"One entry per configured denom."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Key: ",(0,n.jsx)(r.code,{children:"0x01 | <market id (4 bytes)> | 0x02 | <denom (string)>"})]}),"\n",(0,n.jsxs)(r.li,{children:["Value: ",(0,n.jsx)(r.code,{children:"<amount (string)>"})]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"market-seller-settlement-ratio-fee",children:"Market Seller Settlement Ratio Fee"}),"\n",(0,n.jsxs)(r.p,{children:["One entry per configured price",":fee"," denom pair."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Key: ",(0,n.jsx)(r.code,{children:"0x01 | <market id (4 bytes)> | 0x03 | <price denom (string)> | 0x1E | <fee denom (string)>"})]}),"\n",(0,n.jsxs)(r.li,{children:["Value: ",(0,n.jsx)(r.code,{children:"<price amount (string)> | 0x1E | <fee amount (string)>"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["See also: ",(0,n.jsx)(r.a,{href:"/docs/sdk/exchange/messages#feeratio",children:"FeeRatio"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"market-buyer-settlement-flat-fee",children:"Market Buyer Settlement Flat Fee"}),"\n",(0,n.jsx)(r.p,{children:"One entry per configured denom."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Key: ",(0,n.jsx)(r.code,{children:"0x01 | <market id (4 bytes)> | 0x04 | <denom (string)>"})]}),"\n",(0,n.jsxs)(r.li,{children:["Value: ",(0,n.jsx)(r.code,{children:"<amount (string)>"})]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"market-buyer-settlement-ratio-fee",children:"Market Buyer Settlement Ratio Fee"}),"\n",(0,n.jsxs)(r.p,{children:["One entry per configured price",":fee"," denom pair."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Key: ",(0,n.jsx)(r.code,{children:"0x01 | <market id (4 bytes)> | 0x05 | <price denom (string)> | 0x1E | <fee denom (string)>"})]}),"\n",(0,n.jsxs)(r.li,{children:["Value: ",(0,n.jsx)(r.code,{children:"<price amount (string)> | 0x1E | <fee amount (string)>"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["See also: ",(0,n.jsx)(r.a,{href:"/docs/sdk/exchange/messages#feeratio",children:"FeeRatio"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"market-inactive-indicator",children:"Market Inactive Indicator"}),"\n",(0,n.jsxs)(r.p,{children:["When a market has ",(0,n.jsx)(r.code,{children:"accepting_orders = false"}),", this state entry will exist.\nWhen it has ",(0,n.jsx)(r.code,{children:"accepting_orders = true"}),", this entry will not exist."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Key: ",(0,n.jsx)(r.code,{children:"0x01 | <market id (4 bytes)> | 0x06"})]}),"\n",(0,n.jsxs)(r.li,{children:["Value: ",(0,n.jsx)(r.code,{children:"<nil (0 bytes)>"})]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"market-user-settle-indicator",children:"Market User-Settle Indicator"}),"\n",(0,n.jsxs)(r.p,{children:["When a market has ",(0,n.jsx)(r.code,{children:"allow_user_settlement = true"}),", this state entry will exist.\nWhen it has ",(0,n.jsx)(r.code,{children:"allow_user_settlement = false"}),", this entry will not exist."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Key: ",(0,n.jsx)(r.code,{children:"0x01 | <market id (4 bytes)> | 0x07"})]}),"\n",(0,n.jsxs)(r.li,{children:["Value: ",(0,n.jsx)(r.code,{children:"<nil (0 bytes)>"})]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"market-permissions",children:"Market Permissions"}),"\n",(0,n.jsx)(r.p,{children:"When an address has a given permission in a market, the following entry will exist."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Key: ",(0,n.jsx)(r.code,{children:"0x01 | <market id (4 bytes)> | 0x08 | <addr len (1 byte)> | <addr> | <permission type byte (1 byte)>"})]}),"\n",(0,n.jsxs)(r.li,{children:["Value: ",(0,n.jsx)(r.code,{children:"<nil (0 bytes)>"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"<permission type byte>"})," is a single byte as ",(0,n.jsx)(r.code,{children:"uint8"})," with the same values as the enum entries, e.g. ",(0,n.jsx)(r.code,{children:"PERMISSION_CANCEL"})," is ",(0,n.jsx)(r.code,{children:"0x03"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["See also: ",(0,n.jsx)(r.a,{href:"/docs/sdk/exchange/messages#accessgrant",children:"AccessGrant"})," and ",(0,n.jsx)(r.a,{href:"/docs/sdk/exchange/messages#permission",children:"Permission"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"market-create-ask-required-attributes",children:"Market Create-Ask Required Attributes"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Key: ",(0,n.jsx)(r.code,{children:"0x01 | <market id (4 bytes)> | 0x09 | 0x00"})]}),"\n",(0,n.jsxs)(r.li,{children:["Value: ",(0,n.jsx)(r.code,{children:"<list of strings separated by 0x1E>"})]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"market-create-bid-required-attributes",children:"Market Create-Bid Required Attributes"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Key: ",(0,n.jsx)(r.code,{children:"0x01 | <market id (4 bytes)> | 0x09 | 0x01"})]}),"\n",(0,n.jsxs)(r.li,{children:["Value: ",(0,n.jsx)(r.code,{children:"<list of strings separated by 0x1E>"})]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"market-account",children:"Market Account"}),"\n",(0,n.jsxs)(r.p,{children:["Each market has an associated ",(0,n.jsx)(r.code,{children:"MarketAccount"})," with an address derived from the ",(0,n.jsx)(r.code,{children:"market_id"}),".\nEach ",(0,n.jsx)(r.code,{children:"MarketAccount"})," is stored using the ",(0,n.jsx)(r.code,{children:"Accounts"})," module."]}),"\n",(0,n.jsxs)(r.p,{children:["+++ ",(0,n.jsx)(r.a,{href:"https://github.com/provenance-io/provenance/blob/v1.17.0/proto/provenance/exchange/v1/market.proto#L14-L26",children:"https://github.com/provenance-io/provenance/blob/v1.17.0/proto/provenance/exchange/v1/market.proto#L14-L26"})]}),"\n",(0,n.jsx)(r.h3,{id:"market-details",children:"Market Details"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.a,{href:"/docs/sdk/exchange/messages#marketdetails",children:"MarketDetails"})," are stored as part of the ",(0,n.jsx)(r.code,{children:"MarketAccount"})," (in the ",(0,n.jsx)(r.code,{children:"x/auth"})," module)."]}),"\n",(0,n.jsx)(r.h3,{id:"known-market-id",children:"Known Market ID"}),"\n",(0,n.jsx)(r.p,{children:"These entries are used to indicate that a given market exists."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Key: ",(0,n.jsx)(r.code,{children:"0x07 | <market id (4 bytes)>"})]}),"\n",(0,n.jsxs)(r.li,{children:["Value: ",(0,n.jsx)(r.code,{children:"<nil (0 bytes)>"})]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"last-market-id",children:"Last Market ID"}),"\n",(0,n.jsx)(r.p,{children:"This indicates the last market-id that was auto-selected for use."}),"\n",(0,n.jsxs)(r.p,{children:["When a ",(0,n.jsx)(r.code,{children:"MsgGovCreateMarketRequest"})," is processed that has a ",(0,n.jsx)(r.code,{children:"market_id"})," of ",(0,n.jsx)(r.code,{children:"0"})," (zero), the next available market id is auto selected.\nStarting with the number after what's in this state entry, each market id is sequentially checked until an available one is found.\nThe new market gets that id, then this entry is then updated to indicate what that was."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Key: ",(0,n.jsx)(r.code,{children:"0x06"})]}),"\n",(0,n.jsxs)(r.li,{children:["Value: ",(0,n.jsx)(r.code,{children:"<market id (4 bytes)>"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["When a ",(0,n.jsx)(r.code,{children:"MsgGovCreateMarketRequest"})," is processed that has a non-zero ",(0,n.jsx)(r.code,{children:"market_id"}),", this entry is not considered or altered."]}),"\n",(0,n.jsx)(r.h2,{id:"orders",children:"Orders"}),"\n",(0,n.jsxs)(r.p,{children:["Each ",(0,n.jsx)(r.code,{children:"<order id>"})," is a ",(0,n.jsx)(r.code,{children:"uint64"})," (8 bytes) in big-endian order."]}),"\n",(0,n.jsx)(r.p,{children:"Orders are stored using the following format:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Key: ",(0,n.jsx)(r.code,{children:"0x02 | <order id (8 bytes)>"})]}),"\n",(0,n.jsxs)(r.li,{children:["Value ",(0,n.jsx)(r.code,{children:"<order type byte> | protobuf(order type)"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"<order type byte>"})," has these possible values:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"0x00"})," => Ask Order"]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.code,{children:"0x01"})," => Bid Order"]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"ask-orders",children:"Ask Orders"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Key: ",(0,n.jsx)(r.code,{children:"0x02 | <order id (8 bytes)>"})]}),"\n",(0,n.jsxs)(r.li,{children:["Value: ",(0,n.jsx)(r.code,{children:"0x00 | protobuf(AskOrder)"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["See also: ",(0,n.jsx)(r.a,{href:"/docs/sdk/exchange/messages#askorder",children:"AskOrder"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"bid-orders",children:"Bid Orders"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Key: ",(0,n.jsx)(r.code,{children:"0x02 | <order id (8 bytes)>"})]}),"\n",(0,n.jsxs)(r.li,{children:["Value: ",(0,n.jsx)(r.code,{children:"0x01 | protobuf(BidOrder)"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["See also: ",(0,n.jsx)(r.a,{href:"/docs/sdk/exchange/messages#bidorder",children:"BidOrder"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"last-order-id",children:"Last Order ID"}),"\n",(0,n.jsx)(r.p,{children:"Whenever an order is created, this value is looked up and incremented to get the new order's id.\nThen this entry is updated to reflect the new order."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Key: ",(0,n.jsx)(r.code,{children:"0x08"})]}),"\n",(0,n.jsxs)(r.li,{children:["Value: ",(0,n.jsx)(r.code,{children:"<order id (8 bytes)>"})]}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"indexes",children:"Indexes"}),"\n",(0,n.jsx)(r.p,{children:"Several index entries are maintained to help facilitate look-ups."}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"<order type byte>"})," values are the same as those described in ",(0,n.jsx)(r.a,{href:"#orders",children:"Orders"}),"."]}),"\n",(0,n.jsx)(r.h3,{id:"market-to-order",children:"Market to Order"}),"\n",(0,n.jsx)(r.p,{children:"This index can be used to find orders in a given market."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Key: ",(0,n.jsx)(r.code,{children:"0x03 | <market id (4 bytes)> | <order id (8 bytes)>"})]}),"\n",(0,n.jsxs)(r.li,{children:["Value: ",(0,n.jsx)(r.code,{children:"<order type byte (1 byte)>"})]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"owner-address-to-order",children:"Owner Address to Order"}),"\n",(0,n.jsx)(r.p,{children:"This index can be used to find orders with a given buyer or seller."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Key: ",(0,n.jsx)(r.code,{children:"0x04 | <addr len (1 byte)> | <addr> | <order id (8 bytes)>"})]}),"\n",(0,n.jsxs)(r.li,{children:["Value: ",(0,n.jsx)(r.code,{children:"<order type byte (1 byte)>"})]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"asset-denom-to-order",children:"Asset Denom to Order"}),"\n",(0,n.jsxs)(r.p,{children:["This index can be used to find orders involving a given ",(0,n.jsx)(r.code,{children:"assets"})," denom."]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Key: ",(0,n.jsx)(r.code,{children:"0x05 | <asset denom> | <order id (8 bytes)>"})]}),"\n",(0,n.jsxs)(r.li,{children:["Value: ",(0,n.jsx)(r.code,{children:"<order type byte (1 byte)>"})]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"market-external-id-to-order",children:"Market External ID to Order"}),"\n",(0,n.jsx)(r.p,{children:"This index is used to look up orders by their market and external id."}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Key: ",(0,n.jsx)(r.code,{children:"0x09 | <market id (4 bytes)> | <external id (string)>"})]}),"\n",(0,n.jsxs)(r.li,{children:["Value: ",(0,n.jsx)(r.code,{children:"<order id (8 bytes)>"})]}),"\n"]})]})}function o(e={}){const{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,r,s)=>{s.d(r,{Z:()=>l,a:()=>d});var n=s(67294);const i={},t=n.createContext(i);function d(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);