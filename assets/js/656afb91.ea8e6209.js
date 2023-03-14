"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8314],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return a?r.createElement(h,o(o({ref:t},d),{},{components:a})):r.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8677:(e,t,a)=>{a.d(t,{Y:()=>n});var r=a(7294);const n=e=>{let{text:t}=e;return r.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},t)}},1957:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=a(7462),n=(a(7294),a(3905)),i=a(8677);const o={},s="200 - Name Service",l={unversionedId:"pb/contributing/adr/base-infrastructure/name-service",id:"pb/contributing/adr/base-infrastructure/name-service",title:"200 - Name Service",description:'<DocSubheader text= "Name service that provides a hierarchical registry of names similar to the DNS and Ethereum Name Service."',source:"@site/docs/pb/contributing/adr/200-base-infrastructure/200-name-service.md",sourceDirName:"pb/contributing/adr/200-base-infrastructure",slug:"/pb/contributing/adr/base-infrastructure/name-service",permalink:"/docs/pb/contributing/adr/base-infrastructure/name-service",draft:!1,tags:[],version:"current",sidebarPosition:200,frontMatter:{},sidebar:"documentationSidebar",previous:{title:"200 Base Infrastructure",permalink:"/docs/pb/contributing/adr/base-infrastructure/"},next:{title:"201 - Account Metadata",permalink:"/docs/pb/contributing/adr/base-infrastructure/account-metadata"}},c={},d=[{value:"Changelog",id:"changelog",level:2},{value:"Context",id:"context",level:2},{value:"A Name Hierarchy",id:"a-name-hierarchy",level:3},{value:"Delegating Control",id:"delegating-control",level:3},{value:"Decision",id:"decision",level:2},{value:"Status",id:"status",level:2},{value:"Consequences",id:"consequences",level:2},{value:"Positive",id:"positive",level:3},{value:"Negative",id:"negative",level:3},{value:"Neutral",id:"neutral",level:3},{value:"References",id:"references",level:2}],u={toc:d};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"200---name-service"},"200 - Name Service"),(0,n.kt)(i.Y,{text:"Name service that provides a hierarchical registry of names similar to the DNS and Ethereum Name Service.",mdxType:"DocSubheader"}),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"20200202: Initial version")),(0,n.kt)("h2",{id:"context"},"Context"),(0,n.kt)("p",null,"The name service is intended to provide a system for creating human-readable names as aliases for addresses and to imply ownership and control. These names can be used to provide a stable reference to a changing address or collection of addresses."),(0,n.kt)("p",null,"One issue with a blockchain is that addresses are complex strings of characters that are difficult to type and remember. On the other hand the name service can provide a potentially shorter and easier to remember alias such as ",(0,n.kt)("inlineCode",{parentName:"p"},"provenance.pb")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"attribute.user.pb")," to use in place of the address."),(0,n.kt)("h3",{id:"a-name-hierarchy"},"A Name Hierarchy"),(0,n.kt)("p",null,"Another challenge for users of a blockchain is establishing authority and delegating control. A specific example of this is the definition of the authoritative source of a piece of information. Where did this information come from? Who created it/vetted it? How can this control be distributed in such a way that the right people can control the information? A narrow aspect of this type of control can be satisfied through the creation of a hierarchical name system modeled after DNS. If the address ",(0,n.kt)("inlineCode",{parentName:"p"},"passport.pb")," has been created and is owned by the Provenance Blockchain Passport application, then ",(0,n.kt)("inlineCode",{parentName:"p"},"level-3.accredited.passport.pb")," can be expected to be under the direct or delegated control of the passport application."),(0,n.kt)("h3",{id:"delegating-control"},"Delegating Control"),(0,n.kt)("p",null,"Every label in a name is owned by an address. Starting from the root address each level can be configured to allow any user to add a new child or for the exclusive control of the creator to add child names. The ",(0,n.kt)("inlineCode",{parentName:"p"},"Restricted")," flag is used to indicate the permission requirements for adding child nodes."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-go"},'// NameRecord is an address with a flag that indicates if the name is restricted\ntype NameRecord struct {\n    // The bound name\n    Name string `json:"name" yaml:"name"`\n    // The address the name resolved to.\n    Address sdk.AccAddress `json:"address" yaml:"address"`\n    // Whether owner signature is required to add sub-names.\n    Restricted bool `json:"restricted,omitempty" yaml:"restricted"`\n}\n')),(0,n.kt)("h2",{id:"decision"},"Decision"),(0,n.kt)("p",null,"The implementation of a name service will be created to satisfy the stated requirements."),(0,n.kt)("h2",{id:"status"},"Status"),(0,n.kt)("p",null,"Accepted"),(0,n.kt)("h2",{id:"consequences"},"Consequences"),(0,n.kt)("p",null,"The creation of this structure will result in a system with some additional coordination complexity ","(","assigning keys to the name system entries",")"," and a potential for abuse with an excessive number of keys added to an account. The end result is a system that would be easy to discover and use both as an api but also through command line and web tools. The delegation of control is flexible and explicit through the name service ownership hierarchy."),(0,n.kt)("h3",{id:"positive"},"Positive"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"This implementation adds an easy to remember naming convention to associate complex addresses with a friendly name ","(","i.e. ",(0,n.kt)("inlineCode",{parentName:"li"},"provenance1zmfjfu84hxv6vtpr4v0glf6qudmct3y3fahwpz")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"example.pio"),")"),(0,n.kt)("li",{parentName:"ul"},"The hierarchical names provide a logical and easy to understand structure that can be used for delegation of control.")),(0,n.kt)("h3",{id:"negative"},"Negative"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The name service may be abused with excessive amounts of non-useful names."),(0,n.kt)("li",{parentName:"ul"},"An address may be unintentionally published in the address mapping revealing its use to the public with a loss of privacy.")),(0,n.kt)("h3",{id:"neutral"},"Neutral"),(0,n.kt)("p",null,"n/a"),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("p",null,"An Ethereum implementation of a name service contract that supports delegation of sub keys to accounts"),(0,n.kt)("p",null,"[","ENS - Ethereum Name Service","]",": ",(0,n.kt)("a",{parentName:"p",href:"https://app.ens.domains"},"https://app.ens.domains")))}p.isMDXComponent=!0}}]);