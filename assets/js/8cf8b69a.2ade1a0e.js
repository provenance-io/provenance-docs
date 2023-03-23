"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6838],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>m});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),c=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=c(t.components);return a.createElement(p.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return n?a.createElement(g,i(i({ref:e},s),{},{components:n})):a.createElement(g,i({ref:e},s))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var c=2;c<l;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8677:(t,e,n)=>{n.d(e,{Y:()=>r});var a=n(7294);const r=t=>{let{text:e}=t;return a.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},e)}},5162:(t,e,n)=>{n.d(e,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(t){let{children:e,hidden:n,className:i}=t;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},e)}},5488:(t,e,n)=>{n.d(e,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6010),i=n(2389),o=n(7392),p=n(7094),c=n(2466);const s="tabList__CuJ",u="tabItem_LNqP";function d(t){var e,n;const{lazy:i,block:d,defaultValue:m,values:g,groupId:k,className:b}=t,h=r.Children.map(t.children,(t=>{if((0,r.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),N=null!=g?g:h.map((t=>{let{props:{value:e,label:n,attributes:a}}=t;return{value:e,label:n,attributes:a}})),y=(0,o.l)(N,((t,e)=>t.value===e.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((t=>t.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===m?m:null!=(e=null!=m?m:null==(n=h.find((t=>t.props.default)))?void 0:n.props.value)?e:h[0].props.value;if(null!==f&&!N.some((t=>t.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+N.map((t=>t.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:S}=(0,p.U)(),[T,x]=(0,r.useState)(f),w=[],{blockElementScrollPositionUntilNextRender:O}=(0,c.o5)();if(null!=k){const t=v[k];null!=t&&t!==T&&N.some((e=>e.value===t))&&x(t)}const E=t=>{const e=t.currentTarget,n=w.indexOf(e),a=N[n].value;a!==T&&(O(e),x(a),null!=k&&S(k,String(a)))},j=t=>{var e;let n=null;switch(t.key){case"ArrowRight":{var a;const e=w.indexOf(t.currentTarget)+1;n=null!=(a=w[e])?a:w[0];break}case"ArrowLeft":{var r;const e=w.indexOf(t.currentTarget)-1;n=null!=(r=w[e])?r:w[w.length-1];break}}null==(e=n)||e.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",s)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},b)},N.map((t=>{let{value:e,label:n,attributes:i}=t;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:T===e?0:-1,"aria-selected":T===e,key:e,ref:t=>w.push(t),onKeyDown:j,onFocus:E,onClick:E},i,{className:(0,l.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":T===e})}),null!=n?n:e)}))),i?(0,r.cloneElement)(h.filter((t=>t.props.value===T))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==T})))))}function m(t){const e=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(e)},t))}},8035:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>c,default:()=>g,frontMatter:()=>p,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),l=n(8677),i=n(5488),o=n(5162);const p={},c="Execute Contract",s={unversionedId:"pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/contract-execution-endpoints/execute-contract",id:"pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/contract-execution-endpoints/execute-contract",title:"Execute Contract",description:"Description",source:"@site/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/contract-execution-endpoints/execute-contract.md",sourceDirName:"pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/contract-execution-endpoints",slug:"/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/contract-execution-endpoints/execute-contract",permalink:"/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/contract-execution-endpoints/execute-contract",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Contract Execution Endpoints",permalink:"/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/contract-execution-endpoints/"},next:{title:"Approve Contract",permalink:"/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/contract-execution-endpoints/approve-contract"}},u={},d=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Examples",id:"examples",level:2},{value:"Sample Request",id:"sample-request",level:3},{value:"Sample Response",id:"sample-response",level:3}],m={toc:d};function g(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"execute-contract"},"Execute Contract"),(0,r.kt)(l.Y,{text:"Execute any BlockVault contract by name",mdxType:"DocSubheader"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Used to execute a BlockVault contract by providing the contract configuration and inputs to the contract."),(0,r.kt)("p",null,"For single-party contracts, the transaction is automatically submitted to the Provenance Blockchain node for memorialization."),(0,r.kt)("p",null,"For multi-party contracts, the envelope state is returned while contract execution passes to the next participant via the Object Store's mailbox feature."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"../../#api-key-for-test-or-production-environments"},"API Key")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/key-management/permissioning-others"},"Permissioning Others")," sections for more detail on which keys are used for encryption.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"URL"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"https://{host}/api/v1/cee/execute")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Method"),": POST"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Headers"),":"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"local",label:"Local",mdxType:"TabItem"},":::info Supply one `x-uuid` header when running locally. :::",(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,r.kt)("td",{parentName:"tr",align:null},"application/json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x-uuid"),(0,r.kt)("td",{parentName:"tr",align:null},"\\<Provenance Member UUID",">"))))),(0,r.kt)(o.Z,{value:"test-production",label:"Test/Production",mdxType:"TabItem"},":::info Supply one `apikey` header when running in test or production environments.. :::",(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,r.kt)("td",{parentName:"tr",align:null},"application/json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"apikey"),(0,r.kt)("td",{parentName:"tr",align:null},"\\<API Key",">")))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request Body"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "scope": {\n        "scopeUuid": "",\n        "sessionUuid": ""\n    },\n    "config": {\n        "account": {\n            "partyType": ""\n        },\n        "client": {\n            "objectStoreUrl": ""\n        },\n        "contract": {\n            "contractName": "",\n            "scopeSpecificationName": "",\n            "parserConfig": {\n                "name": "",\n                "descriptors": [\n                    ""\n                ]\n            }\n        },\n        "provenanceConfig": {\n            "chainId": "",\n            "nodeEndpoint": "",\n            "gasAdjustment": 1.5\n        }\n    },\n    "participants": [\n        {\n            "uuid": "",\n            "partyType": ""\n        }\n    ],\n    "permissions": {\n        "audiences": [],\n        "permissionDart": true,\n        "permissionPortfolioManager": true\n    },\n    "records": {\n        ... Record key-value pairs correlated to contract inputs ...\n    }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"account/partyType"),(0,r.kt)("td",{parentName:"tr",align:null},"Party type of the provenance member invoking the contract. This type should be associated with the UUID (or API Key) passed in the header."),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client/objectStoreUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"URL to the encrypted object store to run against."),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contract/contractName"),(0,r.kt)("td",{parentName:"tr",align:null},"Fully qualified name of the BlockVault contract you wish to invoke."),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scope/scopeUuid"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier for the scope being created/updated by the BlockVault contract."),(0,r.kt)("td",{parentName:"tr",align:null},"String (UUID)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contract/scopeSpecificationName"),(0,r.kt)("td",{parentName:"tr",align:null},"Fully qualified name of the scope specification."),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contract/parserConfig"),(0,r.kt)("td",{parentName:"tr",align:null},"Optional configuration for parsing Any types used as inputs to contracts."),(0,r.kt)("td",{parentName:"tr",align:null},"Object")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contract/parseConfig/name"),(0,r.kt)("td",{parentName:"tr",align:null},"Fully qualified name of the parser"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"contract/parseConfig/desriptors"),(0,r.kt)("td",{parentName:"tr",align:null},"List of fully qualified Protocol Buffer message names used as Any types in the inputs to contracts."),(0,r.kt)("td",{parentName:"tr",align:null},"List\\<String",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provenanceConfig/chainId"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier (name) of the Provenance Blockchain network."),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provenanceConfig/nodeEndpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"URL to the Provenance Blockchain node where the transaction will be submitted."),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provenanceConfig/gasAdjustment"),(0,r.kt)("td",{parentName:"tr",align:null},"Multiplier applied to estimated gas prior to submitting the transaction."),(0,r.kt)("td",{parentName:"tr",align:null},"Double")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"participants/uuid"),(0,r.kt)("td",{parentName:"tr",align:null},"Provenance Member ID for any additional contract participants."),(0,r.kt)("td",{parentName:"tr",align:null},"String (UUID)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"participants/partyType"),(0,r.kt)("td",{parentName:"tr",align:null},"Party type of the additional provenance member participating in the contract execution."),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"permissions"),(0,r.kt)("td",{parentName:"tr",align:null},"Object containing PermissionInfo. (See ",(0,r.kt)("a",{parentName:"td",href:"/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/key-management/permissioning-others"},"Permissioning Others"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"records"),(0,r.kt)("td",{parentName:"tr",align:null},"Object containing the inputs to the BlockVault contract as key-value pairs"),(0,r.kt)("td",{parentName:"tr",align:null},"JSON")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"scope/sessionUuid"),(0,r.kt)("td",{parentName:"tr",align:null},"The session uuid. Optional."),(0,r.kt)("td",{parentName:"tr",align:null},"String (UUID)")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response Status Codes"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction executed and stored")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Illegal arguments")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Server error")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response Body"),":"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"single-party",label:"Single-Party",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "multiparty": false,\n  "metadata": {\n    "hash": "string",\n    "gasWanted": "string",\n    "gasUsed": "string",\n    "height": "string"\n  }\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"multiparty"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"Single-party vs. multi-party flag",(0,r.kt)("br",null),"Always false for single-party responses")),(0,r.kt)("td",{parentName:"tr",align:null},"Bool")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hash"),(0,r.kt)("td",{parentName:"tr",align:null},"The returned hash of the transaction"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gasWanted"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount of hash sent by the invoker of the transaction (denominated in nHash)"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gasUsed"),(0,r.kt)("td",{parentName:"tr",align:null},"Amount of hash used as gas to record the transaction (denominated in nHash)"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"height"),(0,r.kt)("td",{parentName:"tr",align:null},"Block height where the transaction executed"),(0,r.kt)("td",{parentName:"tr",align:null},"String"))))),(0,r.kt)(o.Z,{value:"multi-party",label:"Multi-Party",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "multiparty": true,\n  "envelopeState": "string"\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"multiparty"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("p",null,"Single-party vs. multi-party flag",(0,r.kt)("br",null),"Always true for multi-party responses")),(0,r.kt)("td",{parentName:"tr",align:null},"Bool")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"envelopeState"),(0,r.kt)("td",{parentName:"tr",align:null},"Current state of the contract execution"),(0,r.kt)("td",{parentName:"tr",align:null},"String (ByteArray)")))))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Initialize Loan Scope"),(0,r.kt)("h3",{id:"sample-request"},"Sample Request"),(0,r.kt)("p",null,"The following example executes the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/loan-package-contracts/blob/main/contract/src/main/kotlin/io/provenance/scope/loan/contracts/InitializeLoanScope.kt"},"InitializeLoanScope")," contract. This is a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/loan-package-contracts/blob/main/contract/src/main/kotlin/io/provenance/scope/loan/contracts/InitializeLoanScope.kt#L36"},"single party contract"),", so no participants list is necessary."),(0,r.kt)("p",null,"Note: this contract is very basic and meant as an example. It allows invokers to initialize a loan with any combination of the six records that make up a loan scope, and overwrites any data that was already present. This contract will be phased out in favor of more specific loan life cycle contracts."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl --location \\\n--request POST \'localhost:8080/p8e-cee-api/external/api/v1/cee/execute\' \\\n--header \'x-uuid: deadbeef-face-479b-860c-facefaceface\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "config": {\n        "client": {\n            "objectStoreUrl": "grpc://localhost:5001"\n        },\n        "contract": {\n            "contractName": "io.provenance.scope.loan.contracts.InitializeLoanScope",\n            "scopeUuid": "91888240-669f-460c-917d-448302e93f2b",\n            "scopeSpecificationName": "io.provenance.scope.loan.LoanScopeSpecification",\n            "parserConfig": {\n                "name": "io.provenance.api.frameworks.cee.parsers.JsonMessageParser",\n                "descriptors": [\n                    "tech.figure.loan.v1beta1.MISMOLoanMetadata"\n                ]\n            }\n        },\n        "provenanceConfig": {\n            "chainId": "chain-local",\n            "nodeEndpoint": "grpc://localhost:9090"\n        }\n    },\n    "permissions": {\n        "permissionDart": true,\n        "permissionPortfolioManager": true\n    },\n    "records": {\n        "asset": {\n            "id": {\n                "value": "91888240-669f-460c-917d-448302e93f2b"\n            },\n            "type": "LOAN",\n            "description": "30 year fixed rate mortgage",\n            "kv": {\n                "mismoLoan": {\n                    "@type": "type.googleapis.com/tech.figure.loan.v1beta1.MISMOLoanMetadata",\n                    "uli": "TEST-ULI-123456789123456789",\n                    "document": {\n                        "id": {\n                            "value": "1774edb8-c7a7-4fd7-9e8e-33d4e6bd5185"\n                        },\n                        "uri": "object://localhost:8080/pRLi9H6w9m/yovnODAS4RUKO90Xnjmi8d26K4KYROTg=",\n                        "fileName": "MISMO v3.4 - 91888240-669f-460c-917d-448302e93f2b",\n                        "contentType": "application/xml",\n                        "documentType": "MISMO v3.4",\n                        "checksum": {\n                            "checksum": "pRLi9H6w9m/yovnODAS4RUKO90Xnjmi8d26K4KYROTg=",\n                            "algorithm": "sha512"\n                        }\n                    }\n                }\n            }\n        },\n        "documents": {\n            "document": [\n                {\n                    "id": {\n                        "value": "38557668-762f-429e-a26d-b685618d7037"\n                    },\n                    "uri": "object://localhost:8080/71S848TExiNm6FoeZN0MqtBbChjjUWUjOtir9chXxo4=",\n                    "fileName": "sample2.pdf",\n                    "contentType": "application/pdf",\n                    "documentType": "Sampel PDF",\n                    "checksum": {\n                        "checksum": "71S848TExiNm6FoeZN0MqtBbChjjUWUjOtir9chXxo4=",\n                        "algorithm": "sha512"\n                    }\n                }\n            ]\n        },\n        "eNote": {\n            "controller": {\n                "controllerUuid": {\n                    "value": "7bc65bd0-3441-4f8e-9c5d-893a438c396b"\n                },\n                "controllerName": "Controller One"\n            },\n            "eNote": {\n                "id": {\n                    "value": "b923d6fb-ae73-4ace-8831-433512e83269"\n                },\n                "uri": "object://localhost:8080/gE8i+JHSwPss2y6sEs41m2I1o6M+NZaPeSTEudtqosw=",\n                "fileName": "sample.pdf",\n                "contentType": "application/xml",\n                "documentType": "MISMO SMARTDoc v1.02 XML - eNote",\n                "checksum": {\n                    "checksum": "gE8i+JHSwPss2y6sEs41m2I1o6M+NZaPeSTEudtqosw=",\n                    "algorithm": "SHA-256"\n                }\n            },\n            "signedDate": {\n                "value": "05/22/2022"\n            },\n            "vaultName": "Figure eVault"\n        },\n        "servicingData": {\n            "loanId": {\n                "value": "91888240-669f-460c-917d-448302e93f2b"\n            },\n            "assetType": {\n                "supertype": "MORTGAGE",\n                "subtype": "FIXED"\n            },\n            "currentBorrowerInfo": {\n                "primary": {\n                    "id": {\n                        "value": "0096f2d9-8d85-4956-8a32-f0df7ab9bacd"\n                    },\n                    "partyType": "PRIMARY_BORROWER",\n                    "name": {\n                        "firstName": "Jon",\n                        "lastName": "Snow"\n                    },\n                    "dob": {\n                        "value": "01/01/2000"\n                    },\n                    "phoneNumbers": [\n                        {\n                            "number": "1-800-JON-SNOW",\n                            "numberType": "HOME"\n                        }\n                    ],\n                    "addresses": [\n                        {\n                            "street": "1 Main St",\n                            "street2": "",\n                            "street3": "",\n                            "city": "Winterfell",\n                            "state": "North",\n                            "country": "Seven Kingdoms",\n                            "zip": "00001",\n                            "unitNumber": "",\n                            "addressType": "",\n                            "ownershipType": ""\n                        }\n                    ],\n                    "ssn": "000-00-0000",\n                    "email": "jon@snow.io",\n                    "citizenship": "",\n                    "maritalStatus": "SINGLE",\n                    "isSelfEmployed": false\n                }\n            },\n            "originalNoteAmount": {\n                "amount": 250000.00,\n                "currency": "USD"\n            },\n            "loanState": [\n                {\n                    "id": {\n                        "value": "65baf01d-ee8b-4ad2-b646-cffe26640df3"\n                    },\n                    "effectiveTime": "05-22-2022T00:00:00.00Z",\n                    "uri": "object://localhost:8080/o0iERVQp7v7WdSkq8dlREr+yP8kEuAHvBMmprazYr0k=",\n                    "checksum": {\n                        "checksum": "o0iERVQp7v7WdSkq8dlREr+yP8kEuAHvBMmprazYr0k=",\n                        "algorithm": "SHA-256"\n                    }\n                }\n            ]\n        },\n        "servicingRights": {\n            "servicerId": {\n                "value": "7bc65bd0-3441-4f8e-9c5d-893a438c396b"\n            },\n            "servicerName": "Servicer One"\n        }\n    }\n}\'\n')),(0,r.kt)("h3",{id:"sample-response"},"Sample Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "multiparty": false,\n  "metadata": {\n    "hash": "1F562E27086927577D0A42985C400D97A824BC2064338564E003DCC77C941993",\n    "gasWanted": "378982",\n    "gasUsed": "266065",\n    "height": "15640"\n  }\n}\n'))))}g.isMDXComponent=!0}}]);