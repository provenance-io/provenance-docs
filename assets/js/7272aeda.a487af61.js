"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[9240],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,b=d["".concat(p,".").concat(m)]||d[m]||c[m]||l;return n?a.createElement(b,i(i({ref:t},u),{},{components:n})):a.createElement(b,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8677:(e,t,n)=>{n.d(t,{Y:()=>r});var a=n(7294);const r=e=>{let{text:t}=e;return a.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},t)}},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6010),i=n(2389),o=n(7392),p=n(7094),s=n(2466);const u="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n;const{lazy:i,block:d,defaultValue:m,values:b,groupId:g,className:f}=e,k=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=b?b:k.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),v=(0,o.l)(h,((e,t)=>e.value===t.value));if(v.length>0)throw new Error('Docusaurus error: Duplicate values "'+v.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===m?m:null!=(t=null!=m?m:null==(n=k.find((e=>e.props.default)))?void 0:n.props.value)?t:k[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:N,setTabGroupChoices:w}=(0,p.U)(),[E,x]=(0,r.useState)(y),T=[],{blockElementScrollPositionUntilNextRender:j}=(0,s.o5)();if(null!=g){const e=N[g];null!=e&&e!==E&&h.some((t=>t.value===e))&&x(e)}const O=e=>{const t=e.currentTarget,n=T.indexOf(t),a=h[n].value;a!==E&&(j(t),x(a),null!=g&&w(g,String(a)))},S=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=T.indexOf(e.currentTarget)+1;n=null!=(a=T[t])?a:T[0];break}case"ArrowLeft":{var r;const t=T.indexOf(e.currentTarget)-1;n=null!=(r=T[t])?r:T[T.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},f)},h.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>T.push(e),onKeyDown:S,onFocus:O,onClick:O},i,{className:(0,l.Z)("tabs__item",c,null==i?void 0:i.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(k.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},k.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function m(e){const t=(0,i.Z)();return r.createElement(d,(0,a.Z)({key:String(t)},e))}},4072:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>p,metadata:()=>u,toc:()=>d});var a=n(7462),r=(n(7294),n(3905)),l=n(8677),i=n(5488),o=n(5162);const p={},s="Retrieve File",u={unversionedId:"pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/retrieve-file",id:"pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/retrieve-file",title:"Retrieve File",description:'<DocSubheader text="Retrieve and decrypt a file"',source:"@site/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/retrieve-file.md",sourceDirName:"pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints",slug:"/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/retrieve-file",permalink:"/provenance-docs/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/retrieve-file",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Store File",permalink:"/provenance-docs/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/store-file"},next:{title:"p8e Endpoints",permalink:"/provenance-docs/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/p8e-endpoints"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2}],m={toc:d};function b(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"retrieve-file"},"Retrieve File"),(0,r.kt)(l.Y,{text:"Retrieve and decrypt a file",mdxType:"DocSubheader"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Used to retrieve and decrypt raw files from the object store. See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.provenance.io/p8e/overview/encrypted-object-store"},"Encrypted Object Store "),"for additional information."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"URL"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"https://{host}/p8e-cee-api/external/api/v1/eos/file")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Method"),": GET"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Headers"),":"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"local",label:"Local",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Supply one ",(0,r.kt)("inlineCode",{parentName:"p"},"x-uuid")," header when running locally.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,r.kt)("td",{parentName:"tr",align:null},"multipart/form-data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x-uuid"),(0,r.kt)("td",{parentName:"tr",align:null},"\\<Provenance Member UUID",">"))))),(0,r.kt)(o.Z,{value:"test-production",label:"Test/Production",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Supply one ",(0,r.kt)("inlineCode",{parentName:"p"},"apikey")," header when running in test or production environments..")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,r.kt)("td",{parentName:"tr",align:null},"multipart/form-data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"apikey"),(0,r.kt)("td",{parentName:"tr",align:null},"\\<API Key",">")))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Form Data"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"objectStoreAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"The URL to the encrypted object store to run against"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hash"),(0,r.kt)("td",{parentName:"tr",align:null},"Hash of the stored file"),(0,r.kt)("td",{parentName:"tr",align:null},"String")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response Status Codes"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"File retrieved")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Illegal/missing arguments")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404"),(0,r.kt)("td",{parentName:"tr",align:null},"File not found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Server error")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response Body"),": File bytes"),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Assuming you followed the example found in the ",(0,r.kt)("a",{parentName:"p",href:"/provenance-docs/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/store-file#example"},"Store File Example")," section to store a single file, and received a resulting hash of ",(0,r.kt)("inlineCode",{parentName:"p"},"gE8i+JHSwPss2y6sEs41m2I1o6M+NZaPeSTEudtqosw="),", you could retrieve that file with the following request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request GET 'localhost:8080/p8e-cee-api/external/api/v1/eos/file?objectStoreAddress=grpc://localhost:5001&hash=gE8i+JHSwPss2y6sEs41m2I1o6M+NZaPeSTEudtqosw=' \\\n--header 'x-uuid: deadbeef-face-479b-860c-facefaceface'\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Swap out the hash in the example with the resulting hash from your call to store the file if it differs from the one above.")))}b.isMDXComponent=!0}}]);