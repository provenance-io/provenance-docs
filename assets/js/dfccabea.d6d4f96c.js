"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[3773],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(r),u=n,h=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return r?a.createElement(h,i(i({ref:t},d),{},{components:r})):a.createElement(h,i({ref:t},d))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8677:(e,t,r)=>{r.d(t,{Y:()=>n});var a=r(7294);const n=e=>{let{text:t}=e;return a.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},t)}},6596:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var a=r(7462),n=(r(7294),r(3905)),o=r(8677);const i={},s="Name",l={unversionedId:"pb/modules/name-module",id:"pb/modules/name-module",title:"Name",description:"Overview",source:"@site/docs/pb/modules/name-module.md",sourceDirName:"pb/modules",slug:"/pb/modules/name-module",permalink:"/provenance-docs/docs/pb/modules/name-module",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Attribute",permalink:"/provenance-docs/docs/pb/modules/account"},next:{title:"Smart Contracts (ProvWasm)",permalink:"/provenance-docs/docs/pb/modules/provwasm-smart-contracts"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"A Name Hierarchy",id:"a-name-hierarchy",level:3},{value:"Delegating Control",id:"delegating-control",level:3},{value:"Normalization",id:"normalization",level:3},{value:"Creation of Root Names",id:"creation-of-root-names",level:3}],m={toc:d};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"name"},"Name"),(0,n.kt)(o.Y,{text:"The Name module provides a hierarchical structure of canonical names associated with blockchain addresses.",mdxType:"DocSubheader"}),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The name service is intended to provide a system for creating human-readable names as aliases for addresses and to imply ownership and control. These names can be used to provide a stable reference to a changing address or collection of addresses."),(0,n.kt)("p",null,"One issue with a blockchain is that addresses are complex strings of characters that are difficult to type and remember. On the other hand the name service can provide a potentially shorter and easier to remember alias such as ",(0,n.kt)("inlineCode",{parentName:"p"},"provenance.pb")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"attribute.user.pb")," to use in place of the address."),(0,n.kt)("h3",{id:"a-name-hierarchy"},"A Name Hierarchy"),(0,n.kt)("p",null,"Another challenge for users of a blockchain is establishing authority and delegating control. A specific example of this is the definition of the authoritative source of a piece of information. Where did this information come from? Who created it/vetted it? How can this control be distributed in such a way that the right people can control the information? A narrow aspect of this type of control can be satisfied through the creation of a hierarchical name system modeled after DNS. If the address ",(0,n.kt)("inlineCode",{parentName:"p"},"passport.pb")," has been created and is owned by the Provenance Blockchain Passport application, then ",(0,n.kt)("inlineCode",{parentName:"p"},"level-3.accredited.passport.pb")," can be expected to be under the direct or delegated control of the passport application."),(0,n.kt)("h3",{id:"delegating-control"},"Delegating Control"),(0,n.kt)("p",null,"Every label in a name is owned by an address. Starting from the root address each level can be configured to allow any user to add a new child or for the exclusive control of the creator to add child names. The ",(0,n.kt)("inlineCode",{parentName:"p"},"Restricted")," flag is used to indicate the permission requirements for adding child nodes."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'// NameRecord is an address with a flag that indicates if the name is restricted\ntype NameRecord struct {\n    // The bound name\n    Name string `json:"name" yaml:"name"`\n    // The address the name resolved to.\n    Address sdk.AccAddress `json:"address" yaml:"address"`\n    // Whether owner signature is required to add sub-names.\n    Restricted bool `json:"restricted,omitempty" yaml:"restricted"`\n}\n')),(0,n.kt)("h3",{id:"normalization"},"Normalization"),(0,n.kt)("p",null,"Name records are normalized before being processed for creation or query.  Each component of the name must conform to a standard set of rules.  The sha256 of the normalized value is used internally for comparision purposes."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Names are always stored and compared using a lower case form or a hash derived from this normalized form."),(0,n.kt)("li",{parentName:"ol"},"Unicode values that are not graphic, lower case, or digits are considered invalid."),(0,n.kt)("li",{parentName:"ol"},"A single occurance of the hyphen-minus character is allowed unless the value conforms to a valid UUID.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-value:",metastring:"-","-":!0},"HYPHEN-MINUS\nUnicode: U+002D, UTF-8: 2D\n")),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Each component of the name is restricted to a length of 2 to 32 characters (inclusive). These limits are configurable in the module parameters."),(0,n.kt)("li",{parentName:"ol"},"A maximum of 16 components for a name (levels in the heirarchy) is also enforced and configurable in the module parameters."),(0,n.kt)("li",{parentName:"ol"},"Leading and trailing spaces are always trimmed off of names for consistency during processing and evaluation.")),(0,n.kt)("h3",{id:"creation-of-root-names"},"Creation of Root Names"),(0,n.kt)("p",null,"As every name hierarchy depends on the name above it for permissioning and control, the root names present a problem with no parent to enforce their management. Because of this inception problem root names must be created in the genesis of the blockchain or through a governance proposal process."))}p.isMDXComponent=!0}}]);