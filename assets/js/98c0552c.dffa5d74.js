"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[6010],{6443:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var i=n(74848),t=n(28453);const o={},c="Metadata State",r={id:"sdk/metadata/state",title:"Metadata State",description:"The Metadata module manages the state of several types of entries related to off-chain information.",source:"@site/docs/sdk/metadata/02_state.md",sourceDirName:"sdk/metadata",slug:"/sdk/metadata/state",permalink:"/docs/sdk/metadata/state",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Metadata Concepts",permalink:"/docs/sdk/metadata/concepts"},next:{title:"Metadata Messages",permalink:"/docs/sdk/metadata/messages"}},a={},d=[{value:"Entries",id:"entries",level:2},{value:"Scopes",id:"scopes",level:3},{value:"Scope Keys (Metadata Addresses)",id:"scope-keys-metadata-addresses",level:4},{value:"Scope Values",id:"scope-values",level:4},{value:"Scope Indexes",id:"scope-indexes",level:4},{value:"Sessions",id:"sessions",level:3},{value:"Session Keys (Metadata Addresses)",id:"session-keys-metadata-addresses",level:4},{value:"Session Values",id:"session-values",level:4},{value:"Session Indexes",id:"session-indexes",level:4},{value:"Records",id:"records",level:3},{value:"Record Keys (Metadata Addresses)",id:"record-keys-metadata-addresses",level:4},{value:"Record Values",id:"record-values",level:4},{value:"Record Indexes",id:"record-indexes",level:4},{value:"Specifications",id:"specifications",level:2},{value:"Scope Specifications",id:"scope-specifications",level:3},{value:"Scope Specification Keys (Metadata Addresses)",id:"scope-specification-keys-metadata-addresses",level:4},{value:"Scope Specification Values",id:"scope-specification-values",level:4},{value:"Scope Specification Indexes",id:"scope-specification-indexes",level:4},{value:"Contract Specifications",id:"contract-specifications",level:3},{value:"Contract Specification Keys (Metadata Addresses)",id:"contract-specification-keys-metadata-addresses",level:4},{value:"Contract Specification Values",id:"contract-specification-values",level:4},{value:"Contract Specification Indexes",id:"contract-specification-indexes",level:4},{value:"Record Specifications",id:"record-specifications",level:3},{value:"Record Specification Keys (Metadata Addresses)",id:"record-specification-keys-metadata-addresses",level:4},{value:"Record Specification Values",id:"record-specification-values",level:4},{value:"Record Specification Indexes",id:"record-specification-indexes",level:4},{value:"Object Store Locators",id:"object-store-locators",level:2},{value:"Object Store Locator Keys",id:"object-store-locator-keys",level:4},{value:"Object Store Locator Values",id:"object-store-locator-values",level:4},{value:"Object Store Locator Indexes",id:"object-store-locator-indexes",level:4}];function l(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h1,{id:"metadata-state",children:"Metadata State"}),"\n",(0,i.jsx)(s.p,{children:"The Metadata module manages the state of several types of entries related to off-chain information."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"#entries",children:"Entries"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#scopes",children:"Scopes"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#sessions",children:"Sessions"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#records",children:"Records"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"#specifications",children:"Specifications"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#scope-specifications",children:"Scope Specifications"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#contract-specifications",children:"Contract Specifications"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#record-specifications",children:"Record Specifications"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"#object-store-locators",children:"Object Store Locators"})}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"entries",children:"Entries"}),"\n",(0,i.jsx)(s.p,{children:'The term "entries" refers to scopes, sessions, and records.\nThey group and identify information.'}),"\n",(0,i.jsx)(s.h3,{id:"scopes",children:"Scopes"}),"\n",(0,i.jsx)(s.p,{children:"A scope is a high-level grouping of information combined with some access control."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"A scope must conform to a pre-determined scope specification."}),"\n",(0,i.jsx)(s.li,{children:"A scope is used to group together many sessions and records."}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"scope-keys-metadata-addresses",children:"Scope Keys (Metadata Addresses)"}),"\n",(0,i.jsxs)(s.p,{children:["Byte Array Length: ",(0,i.jsx)(s.code,{children:"17"})]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Byte range"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"0"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"0x00"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"1-16"}),(0,i.jsx)(s.td,{children:"UUID of this scope."})]})]})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Field Name: ",(0,i.jsx)(s.code,{children:"Scope.scope_id"})]}),"\n",(0,i.jsxs)(s.li,{children:["Bech32 HRP: ",(0,i.jsx)(s.code,{children:'"scope"'})]}),"\n",(0,i.jsxs)(s.li,{children:["Bech32 Example: ",(0,i.jsx)(s.code,{children:'"scope1qzge0zaztu65tx5x5llv5xc9ztsqxlkwel"'})]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"scope-values",children:"Scope Values"}),"\n",(0,i.jsxs)(s.p,{children:["+++ ",(0,i.jsx)(s.a,{href:"https://github.com/provenance-io/provenance/blob/812cb97c77036b8df59e10845fa8a04f4ba84c43/proto/provenance/metadata/v1/scope.proto#L69-L96",children:"https://github.com/provenance-io/provenance/blob/812cb97c77036b8df59e10845fa8a04f4ba84c43/proto/provenance/metadata/v1/scope.proto#L69-L96"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-protobuf",children:'// Scope defines a root reference for a collection of records owned by one or more parties.\nmessage Scope {\n  option (gogoproto.goproto_stringer) = false;\n\n  // Unique ID for this scope.  Implements sdk.Address interface for use where addresses are required in Cosmos\n  bytes scope_id = 1 [(gogoproto.nullable) = false, (gogoproto.customtype) = "MetadataAddress"];\n  // the scope specification that contains the specifications for data elements allowed within this scope\n  bytes specification_id = 2 [(gogoproto.nullable) = false, (gogoproto.customtype) = "MetadataAddress"];\n  // These parties represent top level owners of the records within.  These parties must sign any requests that modify\n  // the data within the scope.  These addresses are in union with parties listed on the sessions.\n  repeated Party owners = 3 [(gogoproto.nullable) = false];\n  // Addresses in this list are authorized to receive off-chain data associated with this scope.\n  repeated string data_access = 4;\n  // An address that controls the value associated with this scope.  Standard blockchain accounts and marker accounts\n  // are supported for this value.  This attribute may only be changed by the entity indicated once it is set.\n  string value_owner_address = 5;\n  // Whether all parties in this scope and its sessions must be present in this scope\'s owners field.\n  // This also enables use of optional=true scope owners and session parties.\n  bool require_party_rollup = 6;\n}\n'})}),"\n",(0,i.jsx)(s.h4,{id:"scope-indexes",children:"Scope Indexes"}),"\n",(0,i.jsx)(s.p,{children:"Scopes by owner:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Type byte: ",(0,i.jsx)(s.code,{children:"0x17"})]}),"\n",(0,i.jsx)(s.li,{children:"Part 1: The owner address (length byte then value bytes)"}),"\n",(0,i.jsx)(s.li,{children:"Part 2: All bytes of the scope key"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Scopes by Scope Specification:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Type byte: ",(0,i.jsx)(s.code,{children:"0x11"})]}),"\n",(0,i.jsx)(s.li,{children:"Part 1: All bytes of the scope specification key"}),"\n",(0,i.jsx)(s.li,{children:"Part 2: All bytes of the scope key"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Scopes by value owner:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Type byte: ",(0,i.jsx)(s.code,{children:"0x18"})]}),"\n",(0,i.jsx)(s.li,{children:"Part 1: The value owner address (length byte then value bytes)"}),"\n",(0,i.jsx)(s.li,{children:"Part 2: All bytes of the scope key"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"sessions",children:"Sessions"}),"\n",(0,i.jsx)(s.p,{children:"A session is a grouping of records and the parties in charge of those records."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"A session must conform to a pre-determined contract specification."}),"\n",(0,i.jsx)(s.li,{children:"A session groups together a collection of records."}),"\n",(0,i.jsx)(s.li,{children:"A session is part of exactly one scope."}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"session-keys-metadata-addresses",children:"Session Keys (Metadata Addresses)"}),"\n",(0,i.jsxs)(s.p,{children:["Byte Array Length: ",(0,i.jsx)(s.code,{children:"33"})]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Byte range"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"0"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"0x01"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"1-16"}),(0,i.jsx)(s.td,{children:"UUID of the scope that this session is part of"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"17-32"}),(0,i.jsx)(s.td,{children:"UUID of this session"})]})]})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Field Name: ",(0,i.jsx)(s.code,{children:"Session.session_id"})]}),"\n",(0,i.jsxs)(s.li,{children:["Bech32 HRP: ",(0,i.jsx)(s.code,{children:'"session"'})]}),"\n",(0,i.jsxs)(s.li,{children:["Bech32 Example: ",(0,i.jsx)(s.code,{children:'"session1qxge0zaztu65tx5x5llv5xc9zts9sqlch3sxwn44j50jzgt8rshvqyfrjcr"'})]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"session-values",children:"Session Values"}),"\n",(0,i.jsxs)(s.p,{children:["+++ ",(0,i.jsx)(s.a,{href:"https://github.com/provenance-io/provenance/blob/812cb97c77036b8df59e10845fa8a04f4ba84c43/proto/provenance/metadata/v1/scope.proto#L98-L124",children:"https://github.com/provenance-io/provenance/blob/812cb97c77036b8df59e10845fa8a04f4ba84c43/proto/provenance/metadata/v1/scope.proto#L98-L124"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-protobuf",children:'// Session defines an execution context against a specific specification instance.\n// The context will have a specification and set of parties involved.\n//\n// NOTE: When there are no more Records within a Scope that reference a Session, the Session is removed.\nmessage Session {\n  option (gogoproto.goproto_stringer) = false;\n\n  bytes session_id = 1 [(gogoproto.nullable) = false, (gogoproto.customtype) = "MetadataAddress"];\n  // unique id of the contract specification that was used to create this session.\n  bytes specification_id = 2 [(gogoproto.nullable) = false, (gogoproto.customtype) = "MetadataAddress"];\n  // parties is the set of identities that signed this contract\n  repeated Party parties = 3 [(gogoproto.nullable) = false];\n  // name to associate with this session execution context, typically classname\n  string name = 4;\n  // context is a field for storing client specific data associated with a session.\n  bytes context = 5;\n  // Created by, updated by, timestamps, version number, and related info.\n  AuditFields audit = 99;\n}\n'})}),"\n",(0,i.jsx)(s.h4,{id:"session-indexes",children:"Session Indexes"}),"\n",(0,i.jsx)(s.p,{children:"There are no extra indexes involving sessions.\nNote, though, that the session key is constructed in a way that automatically indexes sessions by scope."}),"\n",(0,i.jsx)(s.h3,{id:"records",children:"Records"}),"\n",(0,i.jsx)(s.p,{children:"A record identifies the inputs and outputs of a process.\nIt is conceptually similar to the values involved in a method call."}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"A record must conform to a pre-determined record specification."}),"\n",(0,i.jsx)(s.li,{children:"A record is part of exactly one scope."}),"\n",(0,i.jsx)(s.li,{children:"A record is part of exactly one session."}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"record-keys-metadata-addresses",children:"Record Keys (Metadata Addresses)"}),"\n",(0,i.jsxs)(s.p,{children:["Byte Array Length: ",(0,i.jsx)(s.code,{children:"33"})]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Byte range"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"0"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"0x02"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"1-16"}),(0,i.jsx)(s.td,{children:"UUID of the scope that this record is part of"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"17-32"}),(0,i.jsx)(s.td,{children:"First 16 bytes of the SHA256 checksum of this record's name"})]})]})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Field Name: ",(0,i.jsx)(s.code,{children:"Record.record_id"})]}),"\n",(0,i.jsxs)(s.li,{children:["Bech32 HRP: ",(0,i.jsx)(s.code,{children:'"record"'})]}),"\n",(0,i.jsxs)(s.li,{children:["Bech32 Example: ",(0,i.jsx)(s.code,{children:'"record1q2ge0zaztu65tx5x5llv5xc9ztsw42dq2jdvmdazuwzcaddhh8gmu3mcze3"'})]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"record-values",children:"Record Values"}),"\n",(0,i.jsxs)(s.p,{children:["+++ ",(0,i.jsx)(s.a,{href:"https://github.com/provenance-io/provenance/blob/812cb97c77036b8df59e10845fa8a04f4ba84c43/proto/provenance/metadata/v1/scope.proto#L126-L150",children:"https://github.com/provenance-io/provenance/blob/812cb97c77036b8df59e10845fa8a04f4ba84c43/proto/provenance/metadata/v1/scope.proto#L126-L150"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-protobuf",children:'// A record (of fact) is attached to a session or each consideration output from a contract\nmessage Record {\n  option (gogoproto.goproto_stringer) = false;\n\n  // name/identifier for this record.  Value must be unique within the scope.  Also known as a Fact name\n  string name = 1;\n  // id of the session context that was used to create this record (use with filtered kvprefix iterator)\n  bytes session_id = 2 [(gogoproto.nullable) = false, (gogoproto.customtype) = "MetadataAddress"];\n  // process contain information used to uniquely identify an execution on or off chain that generated this record\n  Process process = 3 [(gogoproto.nullable) = false];\n  // inputs used with the process to achieve the output on this record\n  repeated RecordInput inputs = 4 [(gogoproto.nullable) = false];\n  // output(s) is the results of executing the process on the given process indicated in this record\n  repeated RecordOutput outputs = 5 [(gogoproto.nullable) = false];\n  // specification_id is the id of the record specification that was used to create this record.\n  bytes specification_id = 6 [(gogoproto.nullable) = false, (gogoproto.customtype) = "MetadataAddress"];\n}\n'})}),"\n",(0,i.jsx)(s.h4,{id:"record-indexes",children:"Record Indexes"}),"\n",(0,i.jsx)(s.p,{children:"There are no extra indexes involving records.\nNote, though, that the record key is constructed in a way that automatically indexes records by scope."}),"\n",(0,i.jsx)(s.h2,{id:"specifications",children:"Specifications"}),"\n",(0,i.jsx)(s.p,{children:'The term "specifications" refers to scope specifications, contract specifications, and record specifications.\nThey define validation parameters for the various entries.\nIdeally, specifications will be used for multiple entries.'}),"\n",(0,i.jsx)(s.h3,{id:"scope-specifications",children:"Scope Specifications"}),"\n",(0,i.jsx)(s.p,{children:"A scope specification defines validation parameters for scopes.\nThey group together contract specifications and define roles that must be involved in a scope."}),"\n",(0,i.jsx)(s.h4,{id:"scope-specification-keys-metadata-addresses",children:"Scope Specification Keys (Metadata Addresses)"}),"\n",(0,i.jsxs)(s.p,{children:["Byte Array Length: ",(0,i.jsx)(s.code,{children:"17"})]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Byte range"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"0"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"0x04"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"1-16"}),(0,i.jsx)(s.td,{children:"UUID of this scope specification"})]})]})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Field Name: ",(0,i.jsx)(s.code,{children:"ScopeSpecification.specification_id"})]}),"\n",(0,i.jsxs)(s.li,{children:["Bech32 HRP: ",(0,i.jsx)(s.code,{children:'"scopespec"'})]}),"\n",(0,i.jsxs)(s.li,{children:["Bech32 Example: ",(0,i.jsx)(s.code,{children:'"scopespec1qnwg86nsatx5pl56muw0v9ytlz3qu3jx6m"'})]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"scope-specification-values",children:"Scope Specification Values"}),"\n",(0,i.jsxs)(s.p,{children:["+++ ",(0,i.jsx)(s.a,{href:"https://github.com/provenance-io/provenance/blob/4192fd46ea56574bb4ffcacb632d8bb54a720b28/proto/provenance/metadata/v1/specification.proto#L36-L58",children:"https://github.com/provenance-io/provenance/blob/4192fd46ea56574bb4ffcacb632d8bb54a720b28/proto/provenance/metadata/v1/specification.proto#L36-L58"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-protobuf",children:'// ScopeSpecification defines the required parties, resources, conditions, and consideration outputs for a contract\nmessage ScopeSpecification {\n  option (gogoproto.goproto_stringer) = false;\n\n  // unique identifier for this specification on chain\n  bytes specification_id = 1 [(gogoproto.nullable) = false, (gogoproto.customtype) = "MetadataAddress"];\n  // General information about this scope specification.\n  Description description = 2;\n  // Addresses of the owners of this scope specification.\n  repeated string owner_addresses = 3;\n  // A list of parties that must be present on a scope (and their associated roles)\n  repeated PartyType parties_involved = 4;\n  // A list of contract specification ids allowed for a scope based on this specification.\n  repeated bytes contract_spec_ids = 5 [(gogoproto.nullable) = false, (gogoproto.customtype) = "MetadataAddress"];\n}\n'})}),"\n",(0,i.jsx)(s.h4,{id:"scope-specification-indexes",children:"Scope Specification Indexes"}),"\n",(0,i.jsx)(s.p,{children:"Scope specifications by owner:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Type byte: ",(0,i.jsx)(s.code,{children:"0x19"})]}),"\n",(0,i.jsx)(s.li,{children:"Part 1: The owner address (length byte then value bytes)"}),"\n",(0,i.jsx)(s.li,{children:"Part 2: All bytes of the scope specification key"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Scope Specifications by contract specification:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Type byte: ",(0,i.jsx)(s.code,{children:"0x14"})]}),"\n",(0,i.jsx)(s.li,{children:"Part 1: All bytes of the contract specification key"}),"\n",(0,i.jsx)(s.li,{children:"Part 2: All bytes of the scope specification key"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Scopes by Scope Specification:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Type byte: ",(0,i.jsx)(s.code,{children:"0x11"})]}),"\n",(0,i.jsx)(s.li,{children:"Part 1: All bytes of the scope specification key"}),"\n",(0,i.jsx)(s.li,{children:"Part 2: All bytes of the scope key"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"contract-specifications",children:"Contract Specifications"}),"\n",(0,i.jsx)(s.p,{children:"A contract specification defines validation parameters for sessions.\nThey contain source information and roles that must be involved in a session.\nThey also group together record specifications."}),"\n",(0,i.jsx)(s.p,{children:"A contract specification can be part of multiple scope specifications."}),"\n",(0,i.jsx)(s.h4,{id:"contract-specification-keys-metadata-addresses",children:"Contract Specification Keys (Metadata Addresses)"}),"\n",(0,i.jsxs)(s.p,{children:["Byte Array Length: ",(0,i.jsx)(s.code,{children:"17"})]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Byte range"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"0"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"0x03"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"1-16"}),(0,i.jsx)(s.td,{children:"UUID of this contract specification"})]})]})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Field Name: ",(0,i.jsx)(s.code,{children:"ContractSpecification.specification_id"})]}),"\n",(0,i.jsxs)(s.li,{children:["Bech32 HRP: ",(0,i.jsx)(s.code,{children:'"contractspec"'})]}),"\n",(0,i.jsxs)(s.li,{children:["Bech32 Example: ",(0,i.jsx)(s.code,{children:'"contractspec1q000d0q2e8w5say53afqdesxp2zqzkr4fn"'})]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"contract-specification-values",children:"Contract Specification Values"}),"\n",(0,i.jsxs)(s.p,{children:["+++ ",(0,i.jsx)(s.a,{href:"https://github.com/provenance-io/provenance/blob/4192fd46ea56574bb4ffcacb632d8bb54a720b28/proto/provenance/metadata/v1/specification.proto#L60-L86",children:"https://github.com/provenance-io/provenance/blob/4192fd46ea56574bb4ffcacb632d8bb54a720b28/proto/provenance/metadata/v1/specification.proto#L60-L86"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-protobuf",children:'// ContractSpecification defines the required parties, resources, conditions, and consideration outputs for a contract\nmessage ContractSpecification {\n  option (gogoproto.goproto_stringer) = false;\n\n  // unique identifier for this specification on chain\n  bytes specification_id = 1 [(gogoproto.nullable) = false, (gogoproto.customtype) = "MetadataAddress"];\n  // Description information for this contract specification\n  Description description = 2;\n  // Address of the account that owns this specificaiton\n  repeated string owner_addresses = 3;\n  // a list of party roles that must be fullfilled when signing a transaction for this contract specification\n  repeated PartyType parties_involved = 4;\n  // Reference to a metadata record with a hash and type information for the instance of code that will process this\n  // contract\n  oneof source {\n    // the address of a record on chain that represents this contract\n    bytes resource_id = 5 [(gogoproto.casttype) = "github.com/cosmos/cosmos-sdk/types.AccAddress"];\n    // the hash of contract binary (off-chain instance)\n    string hash = 6;\n  }\n  // name of the class/type of this contract executable\n  string class_name = 7;\n}\n'})}),"\n",(0,i.jsx)(s.h4,{id:"contract-specification-indexes",children:"Contract Specification Indexes"}),"\n",(0,i.jsx)(s.p,{children:"Contract specifications by owner:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Type byte: ",(0,i.jsx)(s.code,{children:"0x20"})]}),"\n",(0,i.jsx)(s.li,{children:"Part 1: The owner address (length byte then value bytes)"}),"\n",(0,i.jsx)(s.li,{children:"Part 2: All bytes of the contract specification key"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:"Scope Specifications by contract specification:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Type byte: ",(0,i.jsx)(s.code,{children:"0x14"})]}),"\n",(0,i.jsx)(s.li,{children:"Part 1: All bytes of the contract specification key"}),"\n",(0,i.jsx)(s.li,{children:"Part 2: All bytes of the scope specification key"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"record-specifications",children:"Record Specifications"}),"\n",(0,i.jsx)(s.p,{children:"A record specification defines validation parameters for records.\nThey contain expected inputs and outputs and parties that must be involved in a record."}),"\n",(0,i.jsx)(s.p,{children:"A record specification is part of exactly one contract specification."}),"\n",(0,i.jsx)(s.h4,{id:"record-specification-keys-metadata-addresses",children:"Record Specification Keys (Metadata Addresses)"}),"\n",(0,i.jsxs)(s.p,{children:["Byte Array Length: ",(0,i.jsx)(s.code,{children:"33"})]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Byte range"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"0"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"0x05"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"1-16"}),(0,i.jsx)(s.td,{children:"UUID of the contract specification that this record specification is part of"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"17-32"}),(0,i.jsx)(s.td,{children:"First 16 bytes of the SHA256 checksum of this record specification's name"})]})]})]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Field Name: ",(0,i.jsx)(s.code,{children:"RecordSpecification.specification_id"})]}),"\n",(0,i.jsxs)(s.li,{children:["Bech32 HRP: ",(0,i.jsx)(s.code,{children:'"recspec"'})]}),"\n",(0,i.jsxs)(s.li,{children:["Bech32 Example: ",(0,i.jsx)(s.code,{children:'"recspec1qh00d0q2e8w5say53afqdesxp2zw42dq2jdvmdazuwzcaddhh8gmuqhez44"'})]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"record-specification-values",children:"Record Specification Values"}),"\n",(0,i.jsxs)(s.p,{children:["+++ ",(0,i.jsx)(s.a,{href:"https://github.com/provenance-io/provenance/blob/4192fd46ea56574bb4ffcacb632d8bb54a720b28/proto/provenance/metadata/v1/specification.proto#L88-L108",children:"https://github.com/provenance-io/provenance/blob/4192fd46ea56574bb4ffcacb632d8bb54a720b28/proto/provenance/metadata/v1/specification.proto#L88-L108"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-protobuf",children:'// RecordSpecification defines the specification for a Record including allowed/required inputs/outputs\nmessage RecordSpecification {\n  option (gogoproto.goproto_stringer) = false;\n\n  // unique identifier for this specification on chain\n  bytes specification_id = 1 [(gogoproto.nullable) = false, (gogoproto.customtype) = "MetadataAddress"];\n  // Name of Record that will be created when this specification is used\n  string name = 2;\n  // A set of inputs that must be satisified to apply this RecordSpecification and create a Record\n  repeated InputSpecification inputs = 3;\n  // A type name for data associated with this record (typically a class or proto name)\n  string type_name = 4;\n  // Type of result for this record specification (must be RECORD or RECORD_LIST)\n  DefinitionType result_type = 5;\n  // Type of party responsible for this record\n  repeated PartyType responsible_parties = 6;\n}\n'})}),"\n",(0,i.jsx)(s.h4,{id:"record-specification-indexes",children:"Record Specification Indexes"}),"\n",(0,i.jsx)(s.p,{children:"There are no extra indexes involving record specifications.\nNote, though, that the record key is constructed in a way that automatically indexes record specifications by contract specification."}),"\n",(0,i.jsx)(s.h2,{id:"object-store-locators",children:"Object Store Locators"}),"\n",(0,i.jsx)(s.p,{children:"An object store locator indicates the location of off-chain data."}),"\n",(0,i.jsx)(s.h4,{id:"object-store-locator-keys",children:"Object Store Locator Keys"}),"\n",(0,i.jsxs)(s.p,{children:["Byte Array Length: ",(0,i.jsx)(s.code,{children:"21"})]}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Byte range"}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"0"}),(0,i.jsx)(s.td,{children:(0,i.jsx)(s.code,{children:"0x21"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"1"}),(0,i.jsxs)(s.td,{children:["Owner address length, either ",(0,i.jsx)(s.code,{children:"0x14"})," (20) or ",(0,i.jsx)(s.code,{children:"0x20"})," (32)"]})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"2-(21 or 33)"}),(0,i.jsx)(s.td,{children:"The bytes of the owner address."})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"object-store-locator-values",children:"Object Store Locator Values"}),"\n",(0,i.jsxs)(s.p,{children:["+++ ",(0,i.jsx)(s.a,{href:"https://github.com/provenance-io/provenance/blob/main/proto/provenance/metadata/v1/objectstore.proto#L9-L16",children:"https://github.com/provenance-io/provenance/blob/main/proto/provenance/metadata/v1/objectstore.proto#L9-L16"})]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-protobuf",children:'// Defines an Locator object stored on chain, which represents a owner( blockchain address) associated with a endpoint\n// uri for it\'s associated object store.\nmessage ObjectStoreLocator {\n  option (cosmos.msg.v1.signer) = "owner";\n\n  // account address the endpoint is owned by\n  string owner = 1;\n  // locator endpoint uri\n  string locator_uri = 2;\n  // owners encryption key address\n  string encryption_key = 3;\n}\n'})}),"\n",(0,i.jsx)(s.h4,{id:"object-store-locator-indexes",children:"Object Store Locator Indexes"}),"\n",(0,i.jsx)(s.p,{children:"There are no extra indexes involving object store locators."})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>r});var i=n(96540);const t={},o=i.createContext(t);function c(e){const s=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(o.Provider,{value:s},e.children)}}}]);