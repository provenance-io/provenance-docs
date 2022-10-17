"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[7404],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=s(n),c=r,g=m["".concat(p,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(g,i(i({ref:t},u),{},{components:n})):a.createElement(g,i({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8677:(e,t,n)=>{n.d(t,{Y:()=>r});var a=n(7294);const r=e=>{let{text:t}=e;return a.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},t)}},5162:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7294),r=n(6010);const l="tabItem_Ymn6";function i(e){let{children:t,hidden:n,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,i),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(7462),r=n(7294),l=n(6010),i=n(2389),o=n(7392),p=n(7094),s=n(2466);const u="tabList__CuJ",d="tabItem_LNqP";function m(e){var t,n;const{lazy:i,block:m,defaultValue:c,values:g,groupId:b,className:k}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=g?g:f.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),N=(0,o.l)(h,((e,t)=>e.value===t.value));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const y=null===c?c:null!=(t=null!=c?c:null==(n=f.find((e=>e.props.default)))?void 0:n.props.value)?t:f[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+h.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:v,setTabGroupChoices:w}=(0,p.U)(),[S,T]=(0,r.useState)(y),j=[],{blockElementScrollPositionUntilNextRender:O}=(0,s.o5)();if(null!=b){const e=v[b];null!=e&&e!==S&&h.some((t=>t.value===e))&&T(e)}const E=e=>{const t=e.currentTarget,n=j.indexOf(t),a=h[n].value;a!==S&&(O(t),T(a),null!=b&&w(b,String(a)))},x=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=j.indexOf(e.currentTarget)+1;n=null!=(a=j[t])?a:j[0];break}case"ArrowLeft":{var r;const t=j.indexOf(e.currentTarget)-1;n=null!=(r=j[t])?r:j[j.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":m},k)},h.map((e=>{let{value:t,label:n,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===t?0:-1,"aria-selected":S===t,key:t,ref:e=>j.push(e),onKeyDown:x,onFocus:E,onClick:E},i,{className:(0,l.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":S===t})}),null!=n?n:t)}))),i?(0,r.cloneElement)(f.filter((e=>e.props.value===S))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==S})))))}function c(e){const t=(0,i.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},5702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>p,metadata:()=>u,toc:()=>m});var a=n(7462),r=(n(7294),n(3905)),l=n(8677),i=n(5488),o=n(5162);const p={},s="Store File",u={unversionedId:"pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/store-file",id:"pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/store-file",title:"Store File",description:'<DocSubheader text="Encrypt and store any file"',source:"@site/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/store-file.md",sourceDirName:"pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints",slug:"/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/store-file",permalink:"/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/store-file",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Retrieve Object",permalink:"/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/retrieve-object"},next:{title:"Retrieve File",permalink:"/docs/pb/integrating/integrating-with-p8e/loan-onboarding-service/api-specification/object-store-endpoints/retrieve-file"}},d={},m=[{value:"Description",id:"description",level:2},{value:"Usage",id:"usage",level:2},{value:"Example",id:"example",level:2},{value:"Sample Request",id:"sample-request",level:3},{value:"Sample Response",id:"sample-response",level:3}],c={toc:m};function g(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"store-file"},"Store File"),(0,r.kt)(l.Y,{text:"Encrypt and store any file",mdxType:"DocSubheader"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Used to encrypt and store raw files in the object store. See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.provenance.io/p8e/overview/encrypted-object-store"},"Encrypted Object Store "),"for additional information."),(0,r.kt)("p",null,"Files are passed in as multi-part form objects."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See ",(0,r.kt)("a",{parentName:"p",href:"../../#api-key-for-test-or-production-environments"},"API Key")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/key-management/permissioning-others"},"Permissioning Others")," sections for more detail on which keys are used for encryption.")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"URL"),": ",(0,r.kt)("inlineCode",{parentName:"p"},"https://{host}/api/v1/eos/file")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Method"),": POST"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Headers"),":"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"local",label:"Local",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Supply one ",(0,r.kt)("inlineCode",{parentName:"p"},"x-uuid")," header when running locally.")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,r.kt)("td",{parentName:"tr",align:null},"multipart/form-data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"x-uuid"),(0,r.kt)("td",{parentName:"tr",align:null},"\\<Provenance Member UUID",">"))))),(0,r.kt)(o.Z,{value:"test-production",label:"Test/Production",mdxType:"TabItem"},(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Supply one ",(0,r.kt)("inlineCode",{parentName:"p"},"apikey")," header when running in test or production environments..")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Content-Type"),(0,r.kt)("td",{parentName:"tr",align:null},"multipart/form-data")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"apikey"),(0,r.kt)("td",{parentName:"tr",align:null},"\\<API Key",">")))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Form Data"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"objectStoreAddress"),(0,r.kt)("td",{parentName:"tr",align:null},"The URL to the encrypted object store to run against"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"id"),(0,r.kt)("td",{parentName:"tr",align:null},"File Identifier"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"file"),(0,r.kt)("td",{parentName:"tr",align:null},"File to be encrypted and stored"),(0,r.kt)("td",{parentName:"tr",align:null},"FilePart")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"permissions"),(0,r.kt)("td",{parentName:"tr",align:null},"Object containing PermissionInfo (See ",(0,r.kt)("a",{parentName:"td",href:"/docs/pb/integrating/integrating-with-p8e/p8e-contract-execution-environment-p8e/key-management/permissioning-others"},"Permissioning Others"),")"),(0,r.kt)("td",{parentName:"tr",align:null},"JSON")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response Status Codes"),":"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null},"File accepted and stored")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400"),(0,r.kt)("td",{parentName:"tr",align:null},"Illegal arguments")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"500"),(0,r.kt)("td",{parentName:"tr",align:null},"Server error")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Response Body"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "hash": "string",\n  "uri": "string",\n  "bucket": "string",\n  "name": "string"\n}\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"),(0,r.kt)("th",{parentName:"tr",align:null},"Data Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hash"),(0,r.kt)("td",{parentName:"tr",align:null},"The returned hash of the saved object in EOS"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uri"),(0,r.kt)("td",{parentName:"tr",align:null},"The location of the saved object"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bucket"),(0,r.kt)("td",{parentName:"tr",align:null},"The volume path of the saved data"),(0,r.kt)("td",{parentName:"tr",align:null},"String")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"The name of the saved data"),(0,r.kt)("td",{parentName:"tr",align:null},"String")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("h3",{id:"sample-request"},"Sample Request"),(0,r.kt)("p",null,"To follow along, download the ",(0,r.kt)("inlineCode",{parentName:"p"},"sample.pdf")," file below or use any file on your machine."),(0,r.kt)("p",null,'{% file src="../../../../../.gitbook/assets/sample.pdf" %}\nA simple PDF that can be used as an example\n{% endfile %}'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl --location --request POST 'localhost:8080/p8e-cee-api/external/api/v1/eos/file' \\\n--header 'x-uuid: deadbeef-face-479b-860c-facefaceface' \\\n--form 'objectStoreAddress=\"grpc://localhost:5001\"' \\\n--form 'id=\"foo\"' \\\n--form 'file=@\"<path_to_file>\"' \\\n--form 'permissions=\"{\\\"permissionDart\\\":true,\\\"permissionPortfolioManager\\\":true}\"'\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Swap out the \\<path_to","_","_","_","file> with a real path to the file you wish to upload.")),(0,r.kt)("h3",{id:"sample-response"},"Sample Response"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "hash": "gE8i+JHSwPss2y6sEs41m2I1o6M+NZaPeSTEudtqosw=",\n  "uri": "object://localhost:8080/gE8i+JHSwPss2y6sEs41m2I1o6M+NZaPeSTEudtqosw=",\n  "bucket": "/mnt/data",\n  "name": "b923d6fb-ae73-4ace-8831-433512e83269"\n}\n')))}g.isMDXComponent=!0}}]);