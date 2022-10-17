"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[6549],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(r),b=a,y=d["".concat(u,".").concat(b)]||d[b]||p[b]||i;return r?n.createElement(y,o(o({ref:t},c),{},{components:r})):n.createElement(y,o({ref:t},c))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8677:(e,t,r)=>{r.d(t,{Y:()=>a});var n=r(7294);const a=e=>{let{text:t}=e;return n.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},t)}},2517:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var n=r(7462),a=(r(7294),r(3905)),i=r(8677);const o={},s="Attribute",u={unversionedId:"pb/modules/account",id:"pb/modules/account",title:"Attribute",description:"Overview",source:"@site/docs/pb/modules/account.md",sourceDirName:"pb/modules",slug:"/pb/modules/account",permalink:"/docs/pb/modules/account",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Marker",permalink:"/docs/pb/modules/marker-module"},next:{title:"Name",permalink:"/docs/pb/modules/name-module"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Attribute Structure",id:"attribute-structure",level:3},{value:"Attribute Types",id:"attribute-types",level:4}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"attribute"},"Attribute"),(0,a.kt)(i.Y,{text:"A module that stores attribute values against addresses/accounts.  Keys are managed by the Name module.",mdxType:"DocSubheader"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Accounts on the Provenance Blockchain are based around the concept of holding a collection of coins under an address derived from a public key. All transactions with the blockchain must be associated with an account. The Attribute module defines a registry of key/value/type data associated with an address where the data itself is written and controlled by the account that owns the name used in the key."),(0,a.kt)("h3",{id:"attribute-structure"},"Attribute Structure"),(0,a.kt)("p",null,"The Attribute structure is simply a key/value structure used to assocate a value to an address."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},'// Attribute holds a typed key/value structure for data associated with an account\ntype Attribute struct {\n    // The attribute name.\n    Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`\n    // The attribute value.\n    Value []byte `protobuf:"bytes,2,opt,name=value,proto3" json:"value,omitempty"`\n    // The attribute value type.\n    AttributeType AttributeType `protobuf:"varint,3,opt,name=attribute_type,json=attributeType,proto3,enum=provenance.attribute.v1.AttributeType" json:"attribute_type,omitempty"`\n    // The address the attribute is bound to\n    Address string `protobuf:"bytes,4,opt,name=address,proto3" json:"address,omitempty"`\n}\n')),(0,a.kt)("h4",{id:"attribute-types"},"Attribute Types"),(0,a.kt)("p",null,"Attributes associated to an address are typed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// AttributeType defines the type of the data stored in the attribute value\ntype AttributeType int32\n\nconst (\n    // ATTRIBUTE_TYPE_UNSPECIFIED defines an unknown/invalid type\n    AttributeType_Unspecified AttributeType = 0\n    // ATTRIBUTE_TYPE_UUID defines an attribute value that contains a string value representation of a V4 uuid\n    AttributeType_UUID AttributeType = 1\n    // ATTRIBUTE_TYPE_JSON defines an attribute value that contains a byte string containing json data\n    AttributeType_JSON AttributeType = 2\n    // ATTRIBUTE_TYPE_STRING defines an attribute value that contains a generic string value\n    AttributeType_String AttributeType = 3\n    // ATTRIBUTE_TYPE_URI defines an attribute value that contains a URI\n    AttributeType_Uri AttributeType = 4\n    // ATTRIBUTE_TYPE_INT defines an attribute value that contains an integer (cast as int64)\n    AttributeType_Int AttributeType = 5\n    // ATTRIBUTE_TYPE_FLOAT defines an attribute value that contains a float\n    AttributeType_Float AttributeType = 6\n    // ATTRIBUTE_TYPE_PROTO defines an attribute value that contains a serialized proto value in bytes\n    AttributeType_Proto AttributeType = 7\n    // ATTRIBUTE_TYPE_BYTES defines an attribute value that contains an untyped array of bytes\n    AttributeType_Bytes AttributeType = 8\n)\n\n")),(0,a.kt)("p",null,"Keys may appear multiple times in an attribute list. This is allowed so long as the value ","(","more specifically the hash of the value",")"," is unique. This allows flexibility in creating a list of assets ","(","per this example",")"," or any other type of information which may have multiple instances for a single address."),(0,a.kt)("p",null,"Each of the values is associated with some basic type information. This is required for proper serialization. The intent is to support basic types ","(","int, string",")"," along with platform specific concepts like Bech32 addresses, URIs, JSON structures, and UUIDs. Type information can be associated with limits to protect the system. Examples include bounds on integers, length restrictions for strings, and possibly reference checks for blockchain URIs. These limits will be configured using parameters for the handler running in the daemon process."))}d.isMDXComponent=!0}}]);