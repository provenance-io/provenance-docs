"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[8621],{97324:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>j,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var r=t(85893),s=t(11151),i=t(98677),a=t(74866),o=t(85162);const l={},c="Store Object",d={id:"pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/store-object",title:"Store Object",description:"Description",source:"@site/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/store-object.mdx",sourceDirName:"pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints",slug:"/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/store-object",permalink:"/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/store-object",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Object Store Endpoints",permalink:"/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/"},next:{title:"Retrieve Object",permalink:"/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/retrieve-object"}},h={},u=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2},{value:"Sample Request",id:"sample-request",level:3},{value:"Sample Response",id:"sample-response",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"store-object",children:"Store Object"}),"\n","\n",(0,r.jsx)(i.Y,{text:"Encrypt and store any object represented as a Protocol Buffer"}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["Used to encrypt and store objects in the object store. See ",(0,r.jsx)(n.a,{href:"https://developer.provenance.io/docs/pb/p8e/overview/encrypted-object-store",children:"Encrypted Object Store "}),"for additional information."]}),"\n",(0,r.jsxs)(n.p,{children:["Objects must be passed as a JSON representation of a ",(0,r.jsx)(n.a,{href:"https://developers.google.com/protocol-buffers/docs/overview",children:"Google Protocol Buffer message"}),". The message will be parsed, then stored."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"../../#api-key-for-test-or-production-environments",children:"API Key"})," and ",(0,r.jsx)(n.a,{href:"/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/key-management/permissioning-others",children:"Permissioning Others"})," sections for more detail on which keys are used for encryption."]})}),"\n",(0,r.jsx)(n.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"URL"}),": ",(0,r.jsx)(n.code,{children:"https://{host}/api/v1/eos"})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Method"}),": POST"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Headers"}),":"]}),"\n","\n","\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)(o.Z,{value:"local",label:"Local",children:[(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Supply one ",(0,r.jsx)(n.code,{children:"x-uuid"})," header when running locally."]})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Key"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Content-Type"}),(0,r.jsx)(n.td,{children:"multipart/form-data"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"x-uuid"}),(0,r.jsx)(n.td,{children:"<Provenance Member UUID>"})]})]})]})]}),(0,r.jsxs)(o.Z,{value:"test-production",label:"Test/Production",children:[(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["Supply one ",(0,r.jsx)(n.code,{children:"apikey"})," header when running in test or production environments.."]})}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Key"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Content-Type"}),(0,r.jsx)(n.td,{children:"multipart/form-data"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"apikey"}),(0,r.jsx)(n.td,{children:"<API Key>"})]})]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Request Body"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "objectStoreAddress": "",\n  "permissions": {\n    "audiences": [],\n    "permissionDart": true,\n    "permissionPortfolioManager": true,\n  },\n  "message": {}\n  "type": ""\n}\n'})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Data Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objectStoreAddress"}),(0,r.jsx)(n.td,{children:"The URL to the encrypted object store to run against"}),(0,r.jsx)(n.td,{children:"String"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"permissions"}),(0,r.jsxs)(n.td,{children:["Object containing PermissionInfo (See ",(0,r.jsx)(n.a,{href:"/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/key-management/permissioning-others",children:"Permissioning Others"}),")"]}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"message"}),(0,r.jsx)(n.td,{children:"The asset that is stored against the EOS. This can be any JSON formatted Google Protocol Buffer that matches the type provided in this request"}),(0,r.jsx)(n.td,{children:"JSON"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"type"}),(0,r.jsx)(n.td,{children:"The fully qualified type url matching the Protocol Buffer provided as JSON in the message"}),(0,r.jsx)(n.td,{children:"String"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Response Status Codes"}),":"]}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Code"}),(0,r.jsx)(n.th,{children:"Meaning"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"200"}),(0,r.jsx)(n.td,{children:"File accepted and stored"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"400"}),(0,r.jsx)(n.td,{children:"Illegal arguments"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"500"}),(0,r.jsx)(n.td,{children:"Server error"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Response Body"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "hash": "string",\n  "uri": "string",\n  "bucket": "string",\n  "name": "string"\n}\n'})}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Field"}),(0,r.jsx)(n.th,{children:"Description"}),(0,r.jsx)(n.th,{children:"Data Type"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hash"}),(0,r.jsx)(n.td,{children:"The returned hash of the saved object in EOS"}),(0,r.jsx)(n.td,{children:"String"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"uri"}),(0,r.jsx)(n.td,{children:"The location of the saved object"}),(0,r.jsx)(n.td,{children:"String"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"bucket"}),(0,r.jsx)(n.td,{children:"The volume path of the saved data"}),(0,r.jsx)(n.td,{children:"String"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"name"}),(0,r.jsx)(n.td,{children:"The name of the saved data"}),(0,r.jsx)(n.td,{children:"String"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.h3,{id:"sample-request",children:"Sample Request"}),"\n",(0,r.jsxs)(n.p,{children:["The following example stores a ",(0,r.jsx)(n.code,{children:"LoanState"})," object, representing the current state of an outstanding loan."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'curl --location --request POST \'localhost:8080/p8e-cee-api/external/api/v1/eos\' \\\n--header \'x-uuid: deadbeef-face-479b-860c-facefaceface\' \\\n--header \'Content-Type: application/json\' \\\n--data-raw \'{\n    "objectStoreAddress": "grpc://localhost:5001",\n    "permissions": {\n        "permissionDart": true,\n        "permissionPortfolioManager": true\n    },\n    "message": {\n        "id": {\n            "value": "65baf01d-ee8b-4ad2-b646-cffe26640df3"\n        },\n        "effectiveTime": "2022-05-22T00:00:00.000Z",\n        "servicerName": "Servicer One",\n        "totalUnpaidPrinBal": {\n            "amount": 250000.00,\n            "currency": "USD"\n        },\n        "accruedInterest": {\n            "amount": 50.00,\n            "currency": "USD"\n        },\n        "dailyIntAmount": {\n            "amount": 5.00,\n            "currency": "USD"\n        },\n        "loanStatus": {\n            "status": "IN REPAY",\n            "effectiveTime": "2022-05-22T00:00:00.000Z"\n        }\n    },\n    "type": "tech.figure.servicing.v1beta1.LoanStateOuterClass$LoanState"\n}\'\n'})}),"\n",(0,r.jsx)(n.h3,{id:"sample-response",children:"Sample Response"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "hash": "o0iERVQp7v7WdSkq8dlREr+yP8kEuAHvBMmprazYr0k=",\n  "uri": "object://localhost:8080/o0iERVQp7v7WdSkq8dlREr+yP8kEuAHvBMmprazYr0k=",\n  "bucket": "/mnt/data",\n  "name": "NOT_STORAGE_BACKED"\n}\n'})})]})}function j(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},98677:(e,n,t)=>{t.d(n,{Y:()=>s});t(67294);var r=t(85893);const s=e=>{let{text:n}=e;return(0,r.jsx)("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500",children:n})}},85162:(e,n,t)=>{t.d(n,{Z:()=>a});t(67294);var r=t(90512);const s={tabItem:"tabItem_Ymn6"};var i=t(85893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,a),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>S});var r=t(67294),s=t(90512),i=t(12466),a=t(16550),o=t(20469),l=t(91980),c=t(67392),d=t(50012);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function j(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=u(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,h]=j({queryString:t,groupId:s}),[x,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,d.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),m=(()=>{const e=c??x;return p({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{m&&l(m)}),[m]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),b(e)}),[h,b,i]),tabValues:i}}var b=t(72389);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(85893);function f(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const n=e.currentTarget,t=l.indexOf(n),s=o[t].value;s!==r&&(c(n),a(s))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:h,onClick:d,...i,className:(0,s.Z)("tabs__item",m.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",m.tabList),children:[(0,g.jsx)(f,{...e,...n}),(0,g.jsx)(v,{...e,...n})]})}function S(e){const n=(0,b.Z)();return(0,g.jsx)(y,{...e,children:h(e.children)},String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var r=t(67294);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);