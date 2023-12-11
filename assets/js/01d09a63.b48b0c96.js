"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[3812],{56503:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var s=n(85893),i=n(11151);const a={},o="Messages",r={id:"sdk/attribute/messages",title:"Messages",description:"In this section we describe the processing of the staking messages and the corresponding updates to the state.",source:"@site/docs/sdk/attribute/02_messages.md",sourceDirName:"sdk/attribute",slug:"/sdk/attribute/messages",permalink:"/docs/sdk/attribute/messages",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"State",permalink:"/docs/sdk/attribute/state"},next:{title:"Events",permalink:"/docs/sdk/attribute/events"}},u={},d=[{value:"MsgAddAttributeRequest",id:"msgaddattributerequest",level:2},{value:"MsgUpdateAttributeRequest",id:"msgupdateattributerequest",level:2},{value:"MsgUpdateAttributeExpirationRequest",id:"msgupdateattributeexpirationrequest",level:2},{value:"MsgDeleteAttributeRequest",id:"msgdeleteattributerequest",level:2},{value:"MsgDeleteDistinctAttributeRequest",id:"msgdeletedistinctattributerequest",level:2},{value:"MsgSetAccountDataRequest",id:"msgsetaccountdatarequest",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"messages",children:"Messages"}),"\n",(0,s.jsx)(t.p,{children:"In this section we describe the processing of the staking messages and the corresponding updates to the state."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#msgaddattributerequest",children:"MsgAddAttributeRequest"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#msgupdateattributerequest",children:"MsgUpdateAttributeRequest"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#msgupdateattributeexpirationrequest",children:"MsgUpdateAttributeExpirationRequest"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#msgdeleteattributerequest",children:"MsgDeleteAttributeRequest"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#msgdeletedistinctattributerequest",children:"MsgDeleteDistinctAttributeRequest"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"#msgsetaccountdatarequest",children:"MsgSetAccountDataRequest"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"msgaddattributerequest",children:"MsgAddAttributeRequest"}),"\n",(0,s.jsxs)(t.p,{children:["An attribute record is created using the ",(0,s.jsx)(t.code,{children:"MsgAddAttributeRequest"})," message."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-proto",children:"// MsgAddAttributeRequest defines an sdk.Msg type that is used to add a new attribute to an account.\n// Attributes may only be set in an account by the account that the attribute name resolves to.\nmessage MsgAddAttributeRequest {\n  option (gogoproto.equal)            = false;\n  option (gogoproto.goproto_stringer) = false;\n  option (gogoproto.stringer)         = false;\n  option (gogoproto.goproto_getters)  = false;\n\n  // The attribute name.\n  string name = 1;\n  // The attribute value.\n  bytes value = 2;\n  // The attribute value type.\n  AttributeType attribute_type = 3;\n  // The account to add the attribute to.\n  string account = 4;\n  // The address that the name must resolve to.\n  string owner = 5;\n  // Time that an attribute will expire.\n  google.protobuf.Timestamp expiration_date = 6 [(gogoproto.stdtime) = true, (gogoproto.nullable) = true];\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"This message is expected to fail if:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Any components of the request do not pass basic integrity and format checks"}),"\n",(0,s.jsx)(t.li,{children:"Attribute value exceeds the maximum length"}),"\n",(0,s.jsx)(t.li,{children:"Unable to normalize the name"}),"\n",(0,s.jsx)(t.li,{children:"The account does not exist"}),"\n",(0,s.jsx)(t.li,{children:"The name does not resolve to the owner address"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"If successful, an attribute record will be created for the account."}),"\n",(0,s.jsx)(t.h2,{id:"msgupdateattributerequest",children:"MsgUpdateAttributeRequest"}),"\n",(0,s.jsx)(t.p,{children:"The update attribute request method allows an existing attribute record to replace its value with a new one."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-proto",children:"// MsgUpdateAttributeRequest defines an sdk.Msg type that is used to update an existing attribute to an account.\n// Attributes may only be set in an account by the account that the attribute name resolves to.\nmessage MsgUpdateAttributeRequest {\n  option (gogoproto.equal)            = false;\n  option (gogoproto.goproto_stringer) = false;\n  option (gogoproto.stringer)         = false;\n  option (gogoproto.goproto_getters)  = false;\n\n  // The attribute name.\n  string name = 1;\n  // The original attribute value.\n  bytes original_value = 2;\n  // The update attribute value.\n  bytes update_value = 3;\n  // The original attribute value type.\n  AttributeType original_attribute_type = 4;\n  // The update attribute value type.\n  AttributeType update_attribute_type = 5;\n  // The account to add the attribute to.\n  string account = 6;\n  // The address that the name must resolve to.\n  string owner = 7;\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"This message is expected to fail if:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Any components of the request do not pass basic integrity and format checks"}),"\n",(0,s.jsx)(t.li,{children:"Updated attribute value exceeds the maximum length"}),"\n",(0,s.jsx)(t.li,{children:"Unable to normalize the original or updated attribute name"}),"\n",(0,s.jsx)(t.li,{children:"Updated name and the original name don't match"}),"\n",(0,s.jsx)(t.li,{children:"The owner account does not exist"}),"\n",(0,s.jsx)(t.li,{children:"The updated name does not resolve to the owner address"}),"\n",(0,s.jsx)(t.li,{children:"The original attribute does not exist"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"If successful, the value of an attribute will be updated."}),"\n",(0,s.jsx)(t.h2,{id:"msgupdateattributeexpirationrequest",children:"MsgUpdateAttributeExpirationRequest"}),"\n",(0,s.jsx)(t.p,{children:"The update attribute expiration request method updates the attribute's expiration date."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-proto",children:"// MsgUpdateAttributeExpirationRequest defines an sdk.Msg type that is used to update an existing attribute's expiration\n// date\nmessage MsgUpdateAttributeExpirationRequest {\n  option (gogoproto.equal)            = true;\n  option (gogoproto.stringer)         = true;\n  option (gogoproto.goproto_stringer) = false;\n\n  // The attribute name.\n  string name = 1;\n  // The original attribute value.\n  bytes value = 2;\n  // Time that an attribute will expire.\n  google.protobuf.Timestamp expiration_date = 3 [(gogoproto.stdtime) = true, (gogoproto.nullable) = true];\n  // The account to add the attribute to.\n  string account = 4;\n  // The address that the name must resolve to.\n  string owner = 5;\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"This message is expected to fail if:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Any components of the request do not pass basic integrity and format checks"}),"\n",(0,s.jsx)(t.li,{children:"The owner account does not exist"}),"\n",(0,s.jsx)(t.li,{children:"The name does not resolve to the owner address"}),"\n",(0,s.jsx)(t.li,{children:"The attribute does not exist"}),"\n",(0,s.jsx)(t.li,{children:"The expiration date is before current block height"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"msgdeleteattributerequest",children:"MsgDeleteAttributeRequest"}),"\n",(0,s.jsx)(t.p,{children:"The delete distinct attribute request method removes an existing account attribute."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-proto",children:"// MsgDeleteAttributeRequest defines a message to delete an attribute from an account\n// Attributes may only be removed from an account by the account that the attribute name resolves to.\nmessage MsgDeleteAttributeRequest {\n  option (gogoproto.equal)            = false;\n  option (gogoproto.goproto_stringer) = false;\n  option (gogoproto.stringer)         = false;\n  option (gogoproto.goproto_getters)  = false;\n\n  // The attribute name.\n  string name = 1;\n  // The account to add the attribute to.\n  string account = 2;\n  // The address that the name must resolve to.\n  string owner = 3;\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"This message is expected to fail if:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Any components of the request do not pass basic integrity and format checks"}),"\n",(0,s.jsx)(t.li,{children:"The owner account does not exist"}),"\n",(0,s.jsx)(t.li,{children:"The name does not resolve to the owner address"}),"\n",(0,s.jsx)(t.li,{children:"The attribute does not exist"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"msgdeletedistinctattributerequest",children:"MsgDeleteDistinctAttributeRequest"}),"\n",(0,s.jsx)(t.p,{children:"The delete distinct attribute request method removes an existing account attribute with a specific value."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-proto",children:"// MsgDeleteDistinctAttributeRequest defines a message to delete an attribute with matching name, value, and type from\n// an account. Attributes may only be removed from an account by the account that the attribute name resolves to.\nmessage MsgDeleteDistinctAttributeRequest {\n  option (gogoproto.equal)            = false;\n  option (gogoproto.goproto_stringer) = false;\n  option (gogoproto.stringer)         = false;\n  option (gogoproto.goproto_getters)  = false;\n\n  // The attribute name.\n  string name = 1;\n  // The attribute value.\n  bytes value = 2;\n  // The account to add the attribute to.\n  string account = 3;\n  // The address that the name must resolve to.\n  string owner = 4;\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"This message is expected to fail if:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Any components of the request do not pass basic integrity and format checks"}),"\n",(0,s.jsx)(t.li,{children:"The owner account does not exist"}),"\n",(0,s.jsx)(t.li,{children:"The name does not resolve to the owner address"}),"\n",(0,s.jsx)(t.li,{children:"The attribute does not exist"}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"msgsetaccountdatarequest",children:"MsgSetAccountDataRequest"}),"\n",(0,s.jsx)(t.p,{children:"The set account data request method associates some data (a string) with an account."}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-protobuf",children:'// MsgSetAccountDataRequest defines a message to set an account\'s accountdata attribute.\nmessage MsgSetAccountDataRequest {\n  option (cosmos.msg.v1.signer) = "account";\n\n  string value   = 1;\n  string account = 2;\n}\n'})}),"\n",(0,s.jsx)(t.p,{children:"This message is expected to fail if:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The value is too long (as defined in attribute module params)."}),"\n",(0,s.jsx)(t.li,{children:"The message is not signed by the provided account."}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>o});var s=n(67294);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);