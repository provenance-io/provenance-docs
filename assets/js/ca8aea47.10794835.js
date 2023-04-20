"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4157],{3905:(t,l,n)=>{n.d(l,{Zo:()=>i,kt:()=>h});var e=n(7294);function u(t,l,n){return l in t?Object.defineProperty(t,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[l]=n,t}function d(t,l){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);l&&(e=e.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),n.push.apply(n,e)}return n}function k(t){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?d(Object(n),!0).forEach((function(l){u(t,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(n,l))}))}return t}function r(t,l){if(null==t)return{};var n,e,u=function(t,l){if(null==t)return{};var n,e,u={},d=Object.keys(t);for(e=0;e<d.length;e++)n=d[e],l.indexOf(n)>=0||(u[n]=t[n]);return u}(t,l);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(t);for(e=0;e<d.length;e++)n=d[e],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(u[n]=t[n])}return u}var a=e.createContext({}),o=function(t){var l=e.useContext(a),n=l;return t&&(n="function"==typeof t?t(l):k(k({},l),t)),n},i=function(t){var l=o(t.components);return e.createElement(a.Provider,{value:l},t.children)},s="mdxType",c={inlineCode:"code",wrapper:function(t){var l=t.children;return e.createElement(e.Fragment,{},l)}},m=e.forwardRef((function(t,l){var n=t.components,u=t.mdxType,d=t.originalType,a=t.parentName,i=r(t,["components","mdxType","originalType","parentName"]),s=o(n),m=u,h=s["".concat(a,".").concat(m)]||s[m]||c[m]||d;return n?e.createElement(h,k(k({ref:l},i),{},{components:n})):e.createElement(h,k({ref:l},i))}));function h(t,l){var n=arguments,u=l&&l.mdxType;if("string"==typeof t||u){var d=n.length,k=new Array(d);k[0]=m;var r={};for(var a in l)hasOwnProperty.call(l,a)&&(r[a]=l[a]);r.originalType=t,r[s]="string"==typeof t?t:u,k[1]=r;for(var o=2;o<d;o++)k[o]=n[o];return e.createElement.apply(null,k)}return e.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3002:(t,l,n)=>{n.r(l),n.d(l,{assets:()=>a,contentTitle:()=>k,default:()=>c,frontMatter:()=>d,metadata:()=>r,toc:()=>o});var e=n(7462),u=(n(7294),n(3905));const d={},k="Transaction Error Codes",r={unversionedId:"pb/faq/transactions-error-codes",id:"pb/faq/transactions-error-codes",title:"Transaction Error Codes",description:"What does my transaction error code mean?",source:"@site/docs/pb/faq/transactions-error-codes.md",sourceDirName:"pb/faq",slug:"/pb/faq/transactions-error-codes",permalink:"/docs/pb/faq/transactions-error-codes",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Delegator FAQ",permalink:"/docs/pb/faq/delegator-faq"}},a={},o=[{value:"What does my transaction error code mean?",id:"what-does-my-transaction-error-code-mean",level:2},{value:"authz",id:"authz",level:3},{value:"bank",id:"bank",level:3},{value:"capability",id:"capability",level:3},{value:"crisis",id:"crisis",level:3},{value:"distribution",id:"distribution",level:3},{value:"evidence",id:"evidence",level:3},{value:"feegrant",id:"feegrant",level:3},{value:"gov",id:"gov",level:3},{value:"marker",id:"marker",level:3},{value:"metadata",id:"metadata",level:3},{value:"msgfees",id:"msgfees",level:3},{value:"name",id:"name",level:3},{value:"params",id:"params",level:3},{value:"sdk",id:"sdk",level:3},{value:"slashing",id:"slashing",level:3},{value:"staking",id:"staking",level:3},{value:"undefined",id:"undefined",level:3},{value:"wasm",id:"wasm",level:3}],i={toc:o},s="wrapper";function c(t){let{components:l,...n}=t;return(0,u.kt)(s,(0,e.Z)({},i,n,{components:l,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"transaction-error-codes"},"Transaction Error Codes"),(0,u.kt)("h2",{id:"what-does-my-transaction-error-code-mean"},"What does my transaction error code mean?"),(0,u.kt)("p",null,"If a transaction fails, there is a codespace and error code returned. These correspond with a particular module and the defined errors within."," "),(0,u.kt)("h3",{id:"authz"},"authz"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{"data-type":"number"},"Error Code"),(0,u.kt)("th",null,"Message"),(0,u.kt)("th",null,"What it means"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"3"),(0,u.kt)("td",null,"expiration time of authorization should be more than current time"),(0,u.kt)("td",null)))),(0,u.kt)("h3",{id:"bank"},"bank"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{"data-type":"number"},"Error Code"),(0,u.kt)("th",null,"Message"),(0,u.kt)("th",null,"What it means"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"2"),(0,u.kt)("td",null,"no inputs to send transaction"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"3"),(0,u.kt)("td",null,"no outputs to send transaction"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"4"),(0,u.kt)("td",null,"sum inputs != sum outputs"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"5"),(0,u.kt)("td",null,"send transactions are disabled"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"6"),(0,u.kt)("td",null,"client denom metadata not found"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"7"),(0,u.kt)("td",null,"invalid key"),(0,u.kt)("td",null)))),(0,u.kt)("h3",{id:"capability"},"capability"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{"data-type":"number"},"Error Code"),(0,u.kt)("th",null,"Message"),(0,u.kt)("th",null,"What it means"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"2"),(0,u.kt)("td",null,"capability name not valid"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"3"),(0,u.kt)("td",null,"provided capability is nil"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"4"),(0,u.kt)("td",null,"capability name already taken"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"5"),(0,u.kt)("td",null,"given owner already claimed capability"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"6"),(0,u.kt)("td",null,"capability not owned by module"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"7"),(0,u.kt)("td",null,"capability not found"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"8"),(0,u.kt)("td",null,"owners not found for capability"),(0,u.kt)("td",null)))),(0,u.kt)("h3",{id:"crisis"},"crisis"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{"data-type":"number"},"Error Code"),(0,u.kt)("th",null,"Message"),(0,u.kt)("th",null,"What it means"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"2"),(0,u.kt)("td",null,"sender address is empty"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"3"),(0,u.kt)("td",null,"unknown invariant"),(0,u.kt)("td",null)))),(0,u.kt)("h3",{id:"distribution"},"distribution"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{"data-type":"number"},"Error Code"),(0,u.kt)("th",null,"Message"),(0,u.kt)("th",null,"What it means"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"2"),(0,u.kt)("td",null,"delegator address is empty"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"3"),(0,u.kt)("td",null,"withdraw address is empty"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"4"),(0,u.kt)("td",null,"validator address is empty"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"5"),(0,u.kt)("td",null,"no delegation distribution info"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"6"),(0,u.kt)("td",null,"no validator distribution info"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"7"),(0,u.kt)("td",null,"no validator commission to withdraw"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"8"),(0,u.kt)("td",null,"set withdraw address disabled"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"9"),(0,u.kt)("td",null,"community pool does not have sufficient coins to distribute"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"10"),(0,u.kt)("td",null,"invalid community pool spend proposal amount"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"11"),(0,u.kt)("td",null,"invalid community pool spend proposal recipient"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"12"),(0,u.kt)("td",null,"validator does not exist"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"12"),(0,u.kt)("td",null,"delegation does not exist"),(0,u.kt)("td",null)))),(0,u.kt)("h3",{id:"evidence"},"evidence"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{"data-type":"number"},"Error Code"),(0,u.kt)("th",null,"Message"),(0,u.kt)("th",null,"What it means"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"2"),(0,u.kt)("td",null,"unregistered handler for evidence type"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"3"),(0,u.kt)("td",null,"invalid evidence"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"4"),(0,u.kt)("td",null,"evidence does not exist"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"5"),(0,u.kt)("td",null,"evidence already exists"),(0,u.kt)("td",null)))),(0,u.kt)("h3",{id:"feegrant"},"feegrant"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{"data-type":"number"},"Error Code"),(0,u.kt)("th",null,"Message"),(0,u.kt)("th",null,"What it means"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"2"),(0,u.kt)("td",null,"fee limit exceeded"),(0,u.kt)("td",null,"there are not enough allowance to cover the fees")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"3"),(0,u.kt)("td",null,"fee allowance expired"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"4"),(0,u.kt)("td",null,"invalid duration"),(0,u.kt)("td",null,"if the Duration is invalid or doesn't match the expiration")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"5"),(0,u.kt)("td",null,"no allowance"),(0,u.kt)("td",null,"there is no allowance for that pair")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"6"),(0,u.kt)("td",null,"allowed messages are empty"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"7"),(0,u.kt)("td",null,"message not allowed"),(0,u.kt)("td",null)))),(0,u.kt)("h3",{id:"gov"},"gov"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{"data-type":"number"},"Error Code"),(0,u.kt)("th",null,"Message"),(0,u.kt)("th",null,"What it means"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"2"),(0,u.kt)("td",null,"unknown proposal"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"3"),(0,u.kt)("td",null,"inactive proposal"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"4"),(0,u.kt)("td",null,"proposal already active"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"5"),(0,u.kt)("td",null,"invalid proposal content"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"6"),(0,u.kt)("td",null,"invalid proposal type"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"7"),(0,u.kt)("td",null,"invalid vote option"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"8"),(0,u.kt)("td",null,"invalid genesis state"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"9"),(0,u.kt)("td",null,"no handler exists for proposal type"),(0,u.kt)("td",null)))),(0,u.kt)("h3",{id:"marker"},"marker"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{"data-type":"number"},"Error Code"),(0,u.kt)("th",null,"Message"),(0,u.kt)("th",null,"What it means"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"2"),(0,u.kt)("td",null,"access grant address is empty"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"3"),(0,u.kt)("td",null,"invalid access type"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"4"),(0,u.kt)("td",null,"access list contains duplicate entry"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"5"),(0,u.kt)("td",null,"invalid marker status"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"6"),(0,u.kt)("td",null,"access type not granted"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"7"),(0,u.kt)("td",null,"marker not found"),(0,u.kt)("td",null)))),(0,u.kt)("h3",{id:"metadata"},"metadata"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{"data-type":"number"},"Error Code"),(0,u.kt)("th",null,"Message"),(0,u.kt)("th",null,"What it means"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"2"),(0,u.kt)("td",null,"owner address is already bound to an uri"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"3"),(0,u.kt)("td",null,"address does not match an existing account"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"4"),(0,u.kt)("td",null,"no locator bound to address"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"5"),(0,u.kt)("td",null,"uri length greater than allowed"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"6"),(0,u.kt)("td",null,"No records found."),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"7"),(0,u.kt)("td",null,"uri is invalid"),(0,u.kt)("td",null)))),(0,u.kt)("h3",{id:"msgfees"},"msgfees"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{"data-type":"number"},"Error Code"),(0,u.kt)("th",null,"Message"),(0,u.kt)("th",null,"What it means"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"2"),(0,u.kt)("td",null,"msg type is empty"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"3"),(0,u.kt)("td",null,"invalid fee amount"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"4"),(0,u.kt)("td",null,"fee for type already exists."),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"5"),(0,u.kt)("td",null,"fee for type does not exist."),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"6"),(0,u.kt)("td",null,"invalid fee proposal"),(0,u.kt)("td",null)))),(0,u.kt)("h3",{id:"name"},"name"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{"data-type":"number"},"Error Code"),(0,u.kt)("th",null,"Message"),(0,u.kt)("th",null,"What it means"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"2"),(0,u.kt)("td",null,"no address bound to name"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"3"),(0,u.kt)("td",null,"name is already bound to an address"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"4"),(0,u.kt)("td",null,"value provided for name is invalid"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"5"),(0,u.kt)("td",null,"segment of name is too short"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"6"),(0,u.kt)("td",null,"segment of name is too long"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"7"),(0,u.kt)("td",null,"name has too many segments"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"8"),(0,u.kt)("td",null,"invalid account address"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"9"),(0,u.kt)("td",null,'invalid name: "." is reserved'),(0,u.kt)("td",null)))),(0,u.kt)("h3",{id:"params"},"params"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{"data-type":"number"},"Error Code"),(0,u.kt)("th",null,"Message"),(0,u.kt)("th",null,"What it means"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"2"),(0,u.kt)("td",null,"unknown subspace"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"3"),(0,u.kt)("td",null,"failed to set parameter"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"4"),(0,u.kt)("td",null,"submitted parameter changes are empty"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"5"),(0,u.kt)("td",null,"parameter subspace is empty"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"6"),(0,u.kt)("td",null,"parameter key is empty"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"7"),(0,u.kt)("td",null,"parameter value is empty"),(0,u.kt)("td",null)))),(0,u.kt)("h3",{id:"sdk"},"sdk"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{"data-type":"number"},"Error Code"),(0,u.kt)("th",null,"Message"),(0,u.kt)("th",null,"What it means"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"2"),(0,u.kt)("td",null,"tx parse error"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"3"),(0,u.kt)("td",null,"invalid sequence"),(0,u.kt)("td",null,"the sequence number (nonce) is incorrect for the signature")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"4"),(0,u.kt)("td",null,"unauthorized"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"5"),(0,u.kt)("td",null,"insufficient funds"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"6"),(0,u.kt)("td",null,"unknown request"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"7"),(0,u.kt)("td",null,"invalid address"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"8"),(0,u.kt)("td",null,"invalid pubkey"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"9"),(0,u.kt)("td",null,"unknown address"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"10"),(0,u.kt)("td",null,"invalid coins"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"11"),(0,u.kt)("td",null,"out of gas"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"12"),(0,u.kt)("td",null,"memo too large"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"13"),(0,u.kt)("td",null,"insufficient fee"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"14"),(0,u.kt)("td",null,"maximum number of signatures exceeded"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"15"),(0,u.kt)("td",null,"no signatures supplied"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"16"),(0,u.kt)("td",null,"failed to marshal JSON bytes"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"17"),(0,u.kt)("td",null,"failed to unmarshal JSON bytes"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"18"),(0,u.kt)("td",null,"invalid request"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"19"),(0,u.kt)("td",null,"tx already in mempool"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"20"),(0,u.kt)("td",null,"mempool is full"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"21"),(0,u.kt)("td",null,"tx too large"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"22"),(0,u.kt)("td",null,"key not found"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"23"),(0,u.kt)("td",null,"invalid account password"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"24"),(0,u.kt)("td",null,"tx intended signer does not match the given signer"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"25"),(0,u.kt)("td",null,"invalid gas adjustment"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"26"),(0,u.kt)("td",null,"invalid height"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"27"),(0,u.kt)("td",null,"invalid version"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"28"),(0,u.kt)("td",null,"invalid chain-id"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"29"),(0,u.kt)("td",null,"invalid type"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"30"),(0,u.kt)("td",null,"tx timeout height"),(0,u.kt)("td",null,"a tx is rejected out due to an explicitly set timeout height")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"31"),(0,u.kt)("td",null,"unknown extension options"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"32"),(0,u.kt)("td",null,"incorrect account sequence"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"33"),(0,u.kt)("td",null,"failed packing protobuf message to Any"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"34"),(0,u.kt)("td",null,"failed unpacking protobuf message from Any"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"35"),(0,u.kt)("td",null,"internal logic error"),(0,u.kt)("td",null,"defines an internal logic error, e.g. an invariant or assertion that is violated. It is a programmer error, not a user-facing error.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"36"),(0,u.kt)("td",null,"conflict"),(0,u.kt)("td",null,"a conflict error, e.g. when two goroutines try to access the same resource and one of them fails.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"37"),(0,u.kt)("td",null,"feature not supported"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"38"),(0,u.kt)("td",null,"not found"),(0,u.kt)("td",null,"when requested entity doesn't exist in the state.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"39"),(0,u.kt)("td",null,"Internal IO error"),(0,u.kt)("td",null,"should be used to wrap internal errors caused by external operation. Examples: not DB domain error, file writing etc...")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"40"),(0,u.kt)("td",null,"error in app.toml"),(0,u.kt)("td",null,"an error occurred if min-gas-prices field in BaseConfig is empty.")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"41"),(0,u.kt)("td",null,"invalid gas limit"),(0,u.kt)("td",null)))),(0,u.kt)("h3",{id:"slashing"},"slashing"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{"data-type":"number"},"Error Code"),(0,u.kt)("th",null,"Message"),(0,u.kt)("th",null,"What it means"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"2"),(0,u.kt)("td",null,"address is not associated with any known validator"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"3"),(0,u.kt)("td",null,"validator does not exist for that address"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"4"),(0,u.kt)("td",null,"validator still jailed; cannot be unjailed"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"5"),(0,u.kt)("td",null,"validator not jailed; cannot be unjailed"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"6"),(0,u.kt)("td",null,"validator has no self-delegation; cannot be unjailed"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"7"),(0,u.kt)("td",null,"validator's self delegation less than minimum; cannot be unjailed"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"8"),(0,u.kt)("td",null,"no validator signing info found"),(0,u.kt)("td",null)))),(0,u.kt)("h3",{id:"staking"},"staking"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{"data-type":"number"},"Error Code"),(0,u.kt)("th",null,"Message"),(0,u.kt)("th",null,"What it means"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"2"),(0,u.kt)("td",null,"empty validator address"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"3"),(0,u.kt)("td",null,"validator does not exist"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"4"),(0,u.kt)("td",null,"validator already exist for this operator address; must use new validator operator address"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"5"),(0,u.kt)("td",null,"validator already exist for this pubkey; must use new validator pubkey"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"6"),(0,u.kt)("td",null,"validator pubkey type is not supported"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"7"),(0,u.kt)("td",null,"validator for this address is currently jailed"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"8"),(0,u.kt)("td",null,"failed to remove validator"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"9"),(0,u.kt)("td",null,"commission must be positive"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"10"),(0,u.kt)("td",null,"commission cannot be more than 100%"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"11"),(0,u.kt)("td",null,"commission cannot be more than the max rate"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"12"),(0,u.kt)("td",null,"commission cannot be changed more than once in 24h"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"13"),(0,u.kt)("td",null,"commission change rate must be positive"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"14"),(0,u.kt)("td",null,"commission change rate cannot be more than the max rate"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"15"),(0,u.kt)("td",null,"commission cannot be changed more than max change rate"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"16"),(0,u.kt)("td",null,"validator's self delegation must be greater than their minimum self delegation"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"17"),(0,u.kt)("td",null,"minimum self delegation cannot be decrease"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"18"),(0,u.kt)("td",null,"empty delegator address"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"19"),(0,u.kt)("td",null,"no delegation for (address, validator) tuple"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"20"),(0,u.kt)("td",null,"delegator does not exist with address"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"21"),(0,u.kt)("td",null,"delegator does not contain delegation"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"22"),(0,u.kt)("td",null,"insufficient delegation shares"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"23"),(0,u.kt)("td",null,"cannot delegate to an empty validator"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"24"),(0,u.kt)("td",null,"not enough delegation shares"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"25"),(0,u.kt)("td",null,"entry not mature"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"26"),(0,u.kt)("td",null,"no unbonding delegation found"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"27"),(0,u.kt)("td",null,"too many unbonding delegation entries for (delegator, validator) tuple"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"28"),(0,u.kt)("td",null,"no redelegation found"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"29"),(0,u.kt)("td",null,"cannot redelegate to the same validator"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"30"),(0,u.kt)("td",null,"too few tokens to redelegate (truncates to zero tokens)"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"31"),(0,u.kt)("td",null,"redelegation destination validator not found"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"32"),(0,u.kt)("td",null,"redelegation to this validator already in progress; first redelegation to this validator must complete before next redelegation"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"33"),(0,u.kt)("td",null,"too many redelegation entries for (delegator, src-validator, dst-validator) tuple"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"34"),(0,u.kt)("td",null,"cannot delegate to validators with invalid (zero) ex-rate"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"35"),(0,u.kt)("td",null,"both shares amount and shares percent provided"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"36"),(0,u.kt)("td",null,"neither shares amount nor shares percent provided"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"37"),(0,u.kt)("td",null,"invalid historical info"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"38"),(0,u.kt)("td",null,"no historical info found"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"39"),(0,u.kt)("td",null,"empty validator public key"),(0,u.kt)("td",null)))),(0,u.kt)("h3",{id:"undefined"},"undefined"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{"data-type":"number"},"Error Code"),(0,u.kt)("th",null,"Message"),(0,u.kt)("th",null,"What it means"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"1"),(0,u.kt)("td",null,"internal"),(0,u.kt)("td",null,"should never be exposed, but we reserve this code for non-specified errors")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"111222"),(0,u.kt)("td",null,"panic"),(0,u.kt)("td",null,"only set when we recover from a panic, so we know to redact potentially sensitive system info")))),(0,u.kt)("h3",{id:"wasm"},"wasm"),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",{"data-type":"number"},"Error Code"),(0,u.kt)("th",null,"Message"),(0,u.kt)("th",null,"What it means"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"2"),(0,u.kt)("td",null,"create wasm contract failed"),(0,u.kt)("td",null,"wasm code that has already been uploaded or failed")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"3"),(0,u.kt)("td",null,"contract account already exists"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"4"),(0,u.kt)("td",null,"instantiate wasm contract failed"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"5"),(0,u.kt)("td",null,"execute wasm contract failed"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"6"),(0,u.kt)("td",null,"insufficient gas"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"7"),(0,u.kt)("td",null,"invalid genesis"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"8"),(0,u.kt)("td",null,"not found"),(0,u.kt)("td",null,"an entry not found in the store")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"9"),(0,u.kt)("td",null,"query wasm contract failed"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"10"),(0,u.kt)("td",null,"invalid CosmosMsg from the contract"),(0,u.kt)("td",null,"we cannot process the error returned from the contract")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"11"),(0,u.kt)("td",null,"migrate wasm contract failed"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"12"),(0,u.kt)("td",null,"empty"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"13"),(0,u.kt)("td",null,"exceeds limit"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"14"),(0,u.kt)("td",null,"invalid"),(0,u.kt)("td",null,"content that is invalid in this context")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"15"),(0,u.kt)("td",null,"duplicate"),(0,u.kt)("td",null,"content that exists")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"16"),(0,u.kt)("td",null,"max transfer channels"),(0,u.kt)("td",null,"maximum number of ibc channels reached")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"17"),(0,u.kt)("td",null,"unsupported for this contract"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"18"),(0,u.kt)("td",null,"pinning contract failed"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"19"),(0,u.kt)("td",null,"unpinning contract failed"),(0,u.kt)("td",null)),(0,u.kt)("tr",null,(0,u.kt)("td",null,"20"),(0,u.kt)("td",null,"unknown message from the contract"),(0,u.kt)("td",null,"by a message handler to show that it is not responsible for this message type")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"21"),(0,u.kt)("td",null,"invalid event"),(0,u.kt)("td",null,"if an attribute/event from the contract is invalid")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"22"),(0,u.kt)("td",null,"no such contract"),(0,u.kt)("td",null,"if an address does not belong to a contract (just for registration)")))))}c.isMDXComponent=!0}}]);