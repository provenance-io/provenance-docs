"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[9641],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(a),h=r,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||o;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8677:(e,t,a)=>{a.d(t,{Y:()=>r});var n=a(7294);const r=e=>{let{text:t}=e;return n.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},t)}},7655:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=a(7462),r=(a(7294),a(3905)),o=a(8677);const i={},s="201 - Account Metadata",c={unversionedId:"pb/contributing/adr/base-infrastructure/account-metadata",id:"pb/contributing/adr/base-infrastructure/account-metadata",title:"201 - Account Metadata",description:'<DocSubheader text= "A structure for collecting key/value metadata attributes against an address (account) on the blockchain. Uses the Name Service to control the allowed set of Keys."',source:"@site/docs/pb/contributing/adr/200-base-infrastructure/201-account-metadata.md",sourceDirName:"pb/contributing/adr/200-base-infrastructure",slug:"/pb/contributing/adr/base-infrastructure/account-metadata",permalink:"/provenance-docs/docs/pb/contributing/adr/base-infrastructure/account-metadata",draft:!1,tags:[],version:"current",sidebarPosition:201,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"200 - Name Service",permalink:"/provenance-docs/docs/pb/contributing/adr/base-infrastructure/name-service"},next:{title:"300 Core Concepts",permalink:"/provenance-docs/docs/pb/contributing/adr/core-concepts/"}},l={},u=[{value:"Changelog",id:"changelog",level:2},{value:"Context",id:"context",level:2},{value:"Decision",id:"decision",level:2},{value:"Each of the keys is an owned name.",id:"each-of-the-keys-is-an-owned-name",level:3},{value:"There may be more than one instance of a key.",id:"there-may-be-more-than-one-instance-of-a-key",level:3},{value:"The type information is for serialization",id:"the-type-information-is-for-serialization",level:3},{value:"Status",id:"status",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],d={toc:u};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"201---account-metadata"},"201 - Account Metadata"),(0,r.kt)(o.Y,{text:"A structure for collecting key/value metadata attributes against an address (account) on the blockchain. Uses the Name Service to control the allowed set of Keys.",mdxType:"DocSubheader"}),(0,r.kt)("h2",{id:"changelog"},"Changelog"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"30042020: Initial Version")),(0,r.kt)("h2",{id:"context"},"Context"),(0,r.kt)("p",null,"Accounts on the Provenance Blockchain are based around the concept of holding a collection of coins under an address derived from a public key. All transactions with the blockchain must be associated with an account."),(0,r.kt)("h2",{id:"decision"},"Decision"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"We will define a system to assign exclusive control of names to accounts. These accounts will be able to create sub names ","(","reverse DNS style",")"," which grant control to other accounts using their address."),(0,r.kt)("li",{parentName:"ul"},"We will create a metadata registry of key/value/type data associated with an address. The data itself will be written and controlled by the account that owns the name used in the key."),(0,r.kt)("li",{parentName:"ul"},"We will create standard query interfaces that allow these keys to be returned as a set for an address and optionally return values that are filtered to a specific key name.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Example of a query from the cli for information associated with an address\n%%> provenanced query account-info provenance1zmfjfu84hxv6vtpr4v0glf6qudmct3y3fahwpz\n\n  address: provenance1zmfjfu84hxv6vtpr4v0glf6qudmct3y3fahwpz\n  attributes:\n  - name: "accred-investor.passport.provenance.pio"\n    value: "{status:\\"true\\"}"\n    type: "json"\n  - name: "id.sso.provenance.pio"\n    value: "cee2dc96-08fa-450e-ab5c-a6bf549394f3"\n    type: "uuid"\n  - name: "preferred-currency.coin.provenance.pio"\n    value: "HASH"\n    type: "string"\n  - name: "loan.asset.provenance.pio"\n    value: "pb://metadata/scope-bd3564da-4d84-437b-afe0-0d7593fe191f"\n    type: "uri"\n  - name: "loan.asset.provenance.pio"\n    value: "pb://metadata/scope-bcc05e71-2339-4b67-b0e2-6bc1e39842b6"\n    type: "uri"\n  - name: "loan.asset.provenance.pio"\n    value: "pb://metadata/scope-d6717f59-33d3-4f42-8c1d-a44fdfee1bbf"\n    type: "uri"\n  account_number: 7\n  sequence: 24\n')),(0,r.kt)("p",null,"In the above example there are a few points to consider."),(0,r.kt)("h3",{id:"each-of-the-keys-is-an-owned-name"},"Each of the keys is an owned name."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"id.sso.provenance.pio")," identifier would be owned by an account that delegated control from ",(0,r.kt)("inlineCode",{parentName:"p"},"root > Provenance Blockchain > sso > id")," such that at each level there is an address ","(","requiring the associated private key to sign a transaction creating the record",")",". The address may or may not be the same at each level as a parent may create a sub-key and assign its ownership to another address."),(0,r.kt)("h3",{id:"there-may-be-more-than-one-instance-of-a-key"},"There may be more than one instance of a key."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"loan.asset.provenance.pio")," key appears multiple times in the list. This is allowed so long as the value ","(","more specifically the hash of the value",")"," is unique. This allows flexibility in creating a list of assets ","(","per this example",")"," or any other type of information which may have multiple instances for a single address."),(0,r.kt)("h3",{id:"the-type-information-is-for-serialization"},"The type information is for serialization"),(0,r.kt)("p",null,"Each of the values is associated with some basic type information. This is required for proper serialization. The intent is to support basic types ","(","int, string",")"," along with platform specific concepts ","(","bech32 addresses, uris, json structures, uuids, etc",")",". Type information can be associated with limits to protect the system. Examples include bounds on integers, length restrictions for strings, and possibly reference checks for blockchain URIs. These limits will be configured using parameters for the handler running in the daemon process."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"NOTE: While something like a protobuf could be included here this presents a challenge as the interpretation of the value then depends on a specification which is not included and thus is not recommended.")),(0,r.kt)("h2",{id:"status"},"Status"),(0,r.kt)("p",null,"Accepted"),(0,r.kt)("h2",{id:"consequences"},"Consequences"),(0,r.kt)("p",null,"The creation of this structure will result in a system with some additional coordination complexity ","(","assigning keys to the name system entries",")"," and a potential for abuse with an excessive number of keys added to an account. The end result is a system that would be easy to discover and use both as an api but also through command line and web tools. The delegation of control is flexible and explicit through the name service ownership hierarchy."),(0,r.kt)("h3",{id:"positive"},"Positive"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Applications can extend the account metadata without modifying or creating a blockchain handler. All extended metadata is displayed in a common standard interface."),(0,r.kt)("li",{parentName:"ul"},"Applications can be built around well known metadata from an implicitly trusted source associated with an account.")),(0,r.kt)("h3",{id:"negative"},"Negative"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A generic key/value store concept on an address has a high probability of abuse through excessive numbers of values or proliferation of keys"),(0,r.kt)("li",{parentName:"ul"},"Account holders are ceding an amount of control to other entities that are making statements about their account without their approval.")),(0,r.kt)("h3",{id:"neutral"},"Neutral"),(0,r.kt)("p",null,"{neutral consequences}"),(0,r.kt)("h2",{id:"references"},"References"))}p.isMDXComponent=!0}}]);