"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[9016],{35644:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>j,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var r=n(85893),i=n(11151),s=n(98677),a=n(74866),o=n(85162);const l={},c="Retrieve Object",d={id:"pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/retrieve-object",title:"Retrieve Object",description:'<DocSubheader text="Retrieve and decrypt an object"',source:"@site/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/retrieve-object.md",sourceDirName:"pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints",slug:"/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/retrieve-object",permalink:"/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/retrieve-object",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Store Object",permalink:"/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/store-object"},next:{title:"Store File",permalink:"/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/store-file"}},u={},h=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"retrieve-object",children:"Retrieve Object"}),"\n","\n",(0,r.jsx)(s.Y,{text:"Retrieve and decrypt an object"}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["Used to retrieve and decrypt objects from the object store. See ",(0,r.jsx)(t.a,{href:"/docs/pb/p8e/overview/encrypted-object-store",children:"Encrypted Object Store "}),"for additional information."]}),"\n",(0,r.jsxs)(t.p,{children:["An object's ",(0,r.jsx)(t.code,{children:"hash"})," and ",(0,r.jsx)(t.code,{children:"type"})," must be passed such that the API can parse the fetched Protocol Buffer."]}),"\n",(0,r.jsx)(t.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"URL"}),": ",(0,r.jsx)(t.code,{children:"https://{host}/p8e-cee-api/external/api/v1/eos"})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Method"}),": GET"]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Headers"}),":"]}),"\n","\n",(0,r.jsxs)(a.Z,{children:[(0,r.jsxs)(o.Z,{value:"local",label:"Local",children:[(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Supply one ",(0,r.jsx)(t.code,{children:"x-uuid"})," header when running locally."]})}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Key"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Content-Type"}),(0,r.jsx)(t.td,{children:"multipart/form-data"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"x-uuid"}),(0,r.jsx)(t.td,{children:"<Provenance Member UUID>"})]})]})]})]}),(0,r.jsxs)(o.Z,{value:"text-production",label:"Test/Production",children:[(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Supply one ",(0,r.jsx)(t.code,{children:"apikey"})," header when running in test or production environments.."]})}),(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Key"}),(0,r.jsx)(t.th,{children:"Value"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Content-Type"}),(0,r.jsx)(t.td,{children:"multipart/form-data"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"apikey"}),(0,r.jsx)(t.td,{children:"<API Key>"})]})]})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Query Parameters"}),":"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Field"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Data Type"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"objectStoreAddress"}),(0,r.jsx)(t.td,{children:"The URL to the encrypted object store to run against"}),(0,r.jsx)(t.td,{children:"String"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"hash"}),(0,r.jsx)(t.td,{children:"Hash of the stored object"}),(0,r.jsx)(t.td,{children:"String"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"type"}),(0,r.jsx)(t.td,{children:"Fully qualified class associated with the Protocol Buffer that is stored"}),(0,r.jsx)(t.td,{children:"String"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Response Status Codes"}),":"]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Code"}),(0,r.jsx)(t.th,{children:"Meaning"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"200"}),(0,r.jsx)(t.td,{children:"File retrieved"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"400"}),(0,r.jsx)(t.td,{children:"Illegal/missing arguments"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"404"}),(0,r.jsx)(t.td,{children:"Object not found"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"500"}),(0,r.jsx)(t.td,{children:"Server error"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Response Body"}),": JSON formatted Protocol Buffer"]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(t.p,{children:["Assuming you followed the example found in the ",(0,r.jsx)(t.a,{href:"/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/store-object#example",children:"Store Object Example"})," section to store a single ",(0,r.jsx)(t.code,{children:"LoanState"})," Protocol Buffer, and received a resulting hash of ",(0,r.jsx)(t.code,{children:"o0iERVQp7v7WdSkq8dlREr+yP8kEuAHvBMmprazYr0k="}),", you could fetch that object using the following request:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"curl --location --request GET 'localhost:8080/p8e-cee-api/external/api/v1/eos?objectStoreAddress=grpc://localhost:5001&hash=o0iERVQp7v7WdSkq8dlREr+yP8kEuAHvBMmprazYr0k=&type=tech.figure.servicing.v1beta1.LoanStateOuterClass$LoanState' \\\n--header 'x-uuid: deadbeef-face-479b-860c-facefaceface'\n"})}),"\n",(0,r.jsx)(t.p,{children:"and receive the following output:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",children:'{\n  "id": {\n    "value": "65baf01d-ee8b-4ad2-b646-cffe26640df3"\n  },\n  "effectiveTime": "2022-05-22T00:00:00Z",\n  "servicerName": "Servicer One",\n  "totalUnpaidPrinBal": {\n    "amount": 250000.0,\n    "currency": "USD"\n  },\n  "accruedInterest": {\n    "amount": 0.0,\n    "currency": "USD"\n  },\n  "dailyIntAmount": {\n    "amount": 5.0,\n    "currency": "USD"\n  },\n  "loanStatus": {\n    "status": "IN REPAY",\n    "effectiveTime": "2022-05-22T00:00:00Z"\n  },\n  "daysDelinquent": 0,\n  "remainingTermMonths": 0,\n  "autopayFlag": false,\n  "daysForbearance": 0,\n  "kv": {}\n}\n'})})]})}function j(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},98677:(e,t,n)=>{n.d(t,{Y:()=>i});n(67294);var r=n(85893);const i=e=>{let{text:t}=e;return(0,r.jsx)("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500",children:t})}},85162:(e,t,n)=>{n.d(t,{Z:()=>a});n(67294);var r=n(90512);const i={tabItem:"tabItem_Ymn6"};var s=n(85893);function a(e){let{children:t,hidden:n,className:a}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,a),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>S});var r=n(67294),i=n(90512),s=n(12466),a=n(16550),o=n(20469),l=n(91980),c=n(67392),d=n(50012);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:i}}=e;return{value:t,label:n,attributes:r,default:i}}))}(n);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function j(e){let{queryString:t=!1,groupId:n}=e;const i=(0,a.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(i.location.search);t.set(s,e),i.replace({...i.location,search:t.toString()})}),[s,i])]}function b(e){const{defaultValue:t,queryString:n=!1,groupId:i}=e,s=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,u]=j({queryString:n,groupId:i}),[b,x]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[i,s]=(0,d.Nk)(n);return[i,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:i}),f=(()=>{const e=c??b;return p({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{f&&l(f)}),[f]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=n(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function m(e){let{className:t,block:n,selectedValue:r,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),i=o[n].value;i!==r&&(c(t),a(i))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...s,className:(0,i.Z)("tabs__item",f.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:i}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===i));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==i})))})}function y(e){const t=b(e);return(0,g.jsxs)("div",{className:(0,i.Z)("tabs-container",f.tabList),children:[(0,g.jsx)(m,{...t,...e}),(0,g.jsx)(v,{...t,...e})]})}function S(e){const t=(0,x.Z)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(t))}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>a});var r=n(67294);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);