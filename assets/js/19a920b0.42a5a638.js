"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[6948],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,g=d["".concat(p,".").concat(m)]||d[m]||s[m]||l;return n?a.createElement(g,o(o({ref:t},u),{},{components:n})):a.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8677:(e,t,n)=>{n.d(t,{Y:()=>r});var a=n(7294);const r=e=>{let{text:t}=e;return a.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},t)}},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),i=n(7392),p=n(7094),c=n(2466);const u="tabList__CuJ",s="tabItem_LNqP";function d(e){var t,n;const{lazy:o,block:d,defaultValue:m,values:g,groupId:b,className:k}=e,v=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=g?g:v.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),y=(0,i.l)(h,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const f=null===m?m:null!=(t=null!=m?m:null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)?t:v[0].props.value;if(null!==f&&!h.some((e=>e.value===f)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+f+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:x}=(0,p.U)(),[w,T]=(0,r.useState)(f),O=[],{blockElementScrollPositionUntilNextRender:E}=(0,c.o5)();if(null!=b){const e=N[b];null!=e&&e!==w&&h.some((t=>t.value===e))&&T(e)}const S=e=>{const t=e.currentTarget,n=O.indexOf(t),a=h[n].value;a!==w&&(E(t),T(a),null!=b&&x(b,String(a)))},j=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=O.indexOf(e.currentTarget)+1;n=null!=(a=O[t])?a:O[0];break}case"ArrowLeft":{var r;const t=O.indexOf(e.currentTarget)-1;n=null!=(r=O[t])?r:O[O.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},k)},h.map((e=>{let{value:t,label:n,attributes:o}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>O.push(e),onKeyDown:j,onFocus:S,onClick:S},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),o?(0,r.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},4765:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>g,frontMatter:()=>p,metadata:()=>u,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),l=n(8677),o=n(5488),i=n(5162);const p={},c="Approve Contract",u={unversionedId:"pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/contract-execution-endpoints/approve-contract",id:"pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/contract-execution-endpoints/approve-contract",title:"Approve Contract",description:'<DocSubheader text="Approve and sign a p8e contract envelope"',source:"@site/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/contract-execution-endpoints/approve-contract.md",sourceDirName:"pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/contract-execution-endpoints",slug:"/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/contract-execution-endpoints/approve-contract",permalink:"/provenance-docs/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/contract-execution-endpoints/approve-contract",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Execute Contract",permalink:"/provenance-docs/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/contract-execution-endpoints/execute-contract"},next:{title:"ADR",permalink:"/provenance-docs/docs/pb/contributing/adr/"}},s={},d=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2},{value:"Sample Request",id:"sample-request",level:3}],m={toc:d};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"approve-contract"},"Approve Contract"),(0,r.kt)(l.Y,{text:"Approve and sign a p8e contract envelope",mdxType:"DocSubheader"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Used by additional participants in a multi-party contract execution to respond with approval by executing the p8e contract and updating the scope to include their approval, sending the record of their approval to the Provenance Blockchain network for memorialization."),(0,r.kt)("p",null,"Approval creates an ephemeral Authz grant on behalf of the approver, allowing the proposing party to submit the fully-formed, signed transaction to the Provenance Blockchain network prior to the expiration date set by the approver."),(0,r.kt)("p",null,"Upon successful approval, contract execution passes back to the original proposing party via the Object Store's mailbox feature."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"URL"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"https://{host}/api/v1/cee/approve")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Method"),": POST"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Headers"),":"),(0,r.kt)(o.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"local",label:"Local",mdxType:"TabItem"},":::info Supply one `x-uuid` header when running locally. :::",(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,r.kt)("td",{parentName:"tr",align:null},"application/json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x-uuid"),(0,r.kt)("td",{parentName:"tr",align:null},"\\<Provenance Member UUID",">"))))),(0,r.kt)(i.Z,{value:"test-production",label:"Test/Production",mdxType:"TabItem"},":::info Supply one `apikey` header when running in test or production environments.. :::",(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,r.kt)("td",{parentName:"tr",align:null},"application/json")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"apikey"),(0,r.kt)("td",{parentName:"tr",align:null},"\\<API Key",">")))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Request Body"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n    "config": {\n        "account": {\n            "partyType": ""\n        },\n        "client": {\n            "objectStoreUrl": ""\n        },\n        "provenanceConfig": {\n            "chainId": "",\n            "nodeEndpoint": "",\n            "gasAdjustment": 1.5\n        }\n    },\n    "envelope": [\n        ""\n    ],\n    "expiration": "YYYY-MM-DDTHH:mm:ss.SSSZ"\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"account/partyType"),(0,r.kt)("td",{parentName:"tr",align:null},"Party type of the provenance member invoking the contract. This type should be associated with the UUID (or API Key) passed in the header."),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"client/objectStoreUrl"),(0,r.kt)("td",{parentName:"tr",align:null},"URL to the encrypted object store to run against."),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provenanceConfig/chainId"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique identifier (name) of the Provenance Blockchain network."),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provenanceConfig/nodeEndpoint"),(0,r.kt)("td",{parentName:"tr",align:null},"URL to the Provenance Blockchain node where the transaction will be submitted."),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"provenanceConfig/gasAdjustment"),(0,r.kt)("td",{parentName:"tr",align:null},"Multiplier applied to estimated gas prior to submitting the transaction."),(0,r.kt)("td",{parentName:"tr",align:null},"Double")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"envelope"),(0,r.kt)("td",{parentName:"tr",align:null},"List of objects containing signatures and information about the contract execution including its status and expiration."),(0,r.kt)("td",{parentName:"tr",align:null},"List\\<String",">")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expiration"),(0,r.kt)("td",{parentName:"tr",align:null},"Expiration date and time of the approval"),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response Status Codes"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"204"),(0,r.kt)("td",{parentName:"tr",align:null},"Transaction approved")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Illegal arguments")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Server error")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("h3",{id:"sample-request"},"Sample Request"),(0,r.kt)("p",null,"Coming Soon!"))}g.isMDXComponent=!0}}]);