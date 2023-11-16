"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[9301],{1432:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(5893),i=n(1151),r=n(8677);const s={},o="Attribute",u={id:"pb/modules/attribute-module",title:"Attribute",description:"Overview",source:"@site/docs/pb/modules/attribute-module.md",sourceDirName:"pb/modules",slug:"/pb/modules/attribute-module",permalink:"/docs/pb/modules/attribute-module",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Attribute Structure",id:"attribute-structure",level:3},{value:"Attribute Types",id:"attribute-types",level:4}];function c(t){const e={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.h1,{id:"attribute",children:"Attribute"}),"\n","\n","\n",(0,a.jsx)(r.Y,{text:"A module that stores attribute values against addresses/accounts.  Keys are managed by the Name module."}),"\n",(0,a.jsx)(e.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(e.p,{children:"The Attribute module defines a registry of key/value/type data associated with an address where the data itself is written and controlled by the account that owns the name used in the key."}),"\n",(0,a.jsx)(e.h3,{id:"attribute-structure",children:"Attribute Structure"}),"\n",(0,a.jsx)(e.p,{children:"The Attribute structure is simply a key/value structure used to assocate a value to an address."}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:'// Attribute holds a typed key/value structure for data associated with an account\ntype Attribute struct {\n\t// The attribute name.\n\tName string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`\n\t// The attribute value.\n\tValue []byte `protobuf:"bytes,2,opt,name=value,proto3" json:"value,omitempty"`\n\t// The attribute value type.\n\tAttributeType AttributeType `protobuf:"varint,3,opt,name=attribute_type,json=attributeType,proto3,enum=provenance.attribute.v1.AttributeType" json:"attribute_type,omitempty"`\n\t// The address the attribute is bound to\n\tAddress string `protobuf:"bytes,4,opt,name=address,proto3" json:"address,omitempty"`\n}\n'})}),"\n",(0,a.jsx)(e.h4,{id:"attribute-types",children:"Attribute Types"}),"\n",(0,a.jsx)(e.p,{children:"Attributes associated to an address are typed:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-go",children:"// AttributeType defines the type of the data stored in the attribute value\ntype AttributeType int32\n\nconst (\n\t// ATTRIBUTE_TYPE_UNSPECIFIED defines an unknown/invalid type\n\tAttributeType_Unspecified AttributeType = 0\n\t// ATTRIBUTE_TYPE_UUID defines an attribute value that contains a string value representation of a V4 uuid\n\tAttributeType_UUID AttributeType = 1\n\t// ATTRIBUTE_TYPE_JSON defines an attribute value that contains a byte string containing json data\n\tAttributeType_JSON AttributeType = 2\n\t// ATTRIBUTE_TYPE_STRING defines an attribute value that contains a generic string value\n\tAttributeType_String AttributeType = 3\n\t// ATTRIBUTE_TYPE_URI defines an attribute value that contains a URI\n\tAttributeType_Uri AttributeType = 4\n\t// ATTRIBUTE_TYPE_INT defines an attribute value that contains an integer (cast as int64)\n\tAttributeType_Int AttributeType = 5\n\t// ATTRIBUTE_TYPE_FLOAT defines an attribute value that contains a float\n\tAttributeType_Float AttributeType = 6\n\t// ATTRIBUTE_TYPE_PROTO defines an attribute value that contains a serialized proto value in bytes\n\tAttributeType_Proto AttributeType = 7\n\t// ATTRIBUTE_TYPE_BYTES defines an attribute value that contains an untyped array of bytes\n\tAttributeType_Bytes AttributeType = 8\n)\n\n"})}),"\n",(0,a.jsx)(e.p,{children:"Keys may appear multiple times in an attribute list. This is allowed so long as the value (more specifically the hash of the value) is unique. This allows flexibility in creating a list of assets (per this example) or any other type of information which may have multiple instances for a single address."}),"\n",(0,a.jsx)(e.p,{children:"Each of the values is associated with some basic type information. This is required for proper serialization. The intent is to support basic types (int, string) along with platform specific concepts like Bech32 addresses, URIs, JSON structures, and UUIDs. Type information can be associated with limits to protect the system. Examples include bounds on integers, length restrictions for strings, and possibly reference checks for blockchain URIs. These limits will be configured using parameters for the handler running in the daemon process."})]})}function p(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(c,{...t})}):c(t)}},8677:(t,e,n)=>{n.d(e,{Y:()=>i});n(7294);var a=n(5893);const i=t=>{let{text:e}=t;return(0,a.jsx)("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500",children:e})}},1151:(t,e,n)=>{n.d(e,{Z:()=>o,a:()=>s});var a=n(7294);const i={},r=a.createContext(i);function s(t){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:s(t.components),a.createElement(r.Provider,{value:e},t.children)}}}]);