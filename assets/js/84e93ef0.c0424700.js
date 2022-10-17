"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[27],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),h=o,y=p["".concat(s,".").concat(h)]||p[h]||u[h]||i;return n?a.createElement(y,r(r({ref:t},d),{},{components:n})):a.createElement(y,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8348:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const i={},r="P8e UI",c={unversionedId:"pb/p8e/overview/p8e-ui",id:"pb/p8e/overview/p8e-ui",title:"P8e UI",description:"P8e includes a web UI for managing contract execution keys and monitoring/inspecting your contracts within the system.",source:"@site/docs/pb/p8e/overview/p8e-ui.md",sourceDirName:"pb/p8e/overview",slug:"/pb/p8e/overview/p8e-ui",permalink:"/provenance-docs/docs/pb/p8e/overview/p8e-ui",draft:!1,tags:[],version:"current",frontMatter:{}},s={},l=[{value:"Deployment",id:"deployment",level:2},{value:"Running Locally",id:"running-locally",level:3},{value:"Running alongside hosted p8e",id:"running-alongside-hosted-p8e",level:3},{value:"Features",id:"features",level:2},{value:"Login",id:"login",level:3},{value:"Key Management",id:"key-management",level:3},{value:"Contract Keys",id:"contract-keys",level:4},{value:"Dashboard",id:"dashboard",level:3},{value:"Contract Details",id:"contract-details",level:3},{value:"Scope Details",id:"scope-details",level:3}],d={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"p8e-ui"},"P8e UI"),(0,o.kt)("p",null,"P8e includes a web UI for managing contract execution keys and monitoring/inspecting your contracts within the system."),(0,o.kt)("h2",{id:"deployment"},"Deployment"),(0,o.kt)("p",null,"This UI may be either run locally via docker, or hosted alongside your p8e environment."),(0,o.kt)("h3",{id:"running-locally"},"Running Locally"),(0,o.kt)("p",null,"With ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com/products/docker-desktop%5Bdocker"},"https://www.docker.com/products/docker-desktop","[","docker")," installed","]",", you can run the following command to pull down and run the latest ui image ","(","replace the P8E","_","URL value with the appropriate p8e webservice url for the instance you are using",")",". Additionally, you can specify the port for the ui to run on locally by changing the ",(0,o.kt)("inlineCode",{parentName:"p"},"3000")," in the following command to your desired port."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -p 3000:80 --env P8E_URL='http://my-p8e-webservice-url' us.gcr.io/figure-production/p8e-ui:latest\n")),(0,o.kt)("p",null,"Then you can access the UI at ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000"},"http://localhost:3000")," ","(","where 3000 is your designated port",")","."),(0,o.kt)("h3",{id:"running-alongside-hosted-p8e"},"Running alongside hosted p8e"),(0,o.kt)("p",null,"The same container specified above to run locally can be deployed and traffic routed to port 80. If no P8E","_","URL environment variable is specified to the container, then it will be assumed that the p8e webservice can be found at ",(0,o.kt)("inlineCode",{parentName:"p"},"<base_url>/api/p8e"),", where ",(0,o.kt)("inlineCode",{parentName:"p"},"<base_url>")," is the base url of the hosted ui."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("h3",{id:"login"},"Login"),(0,o.kt)("p",null,"Logging into the UI is accomplished via your Provenance Blockchain account. Upon your first login to the p8e ui, you will be prompted to allow sharing data with p8e."),(0,o.kt)("h3",{id:"key-management"},"Key Management"),(0,o.kt)("h4",{id:"contract-keys"},"Contract Keys"),(0,o.kt)("p",null,"You can add one or more contract keys for use in executing contracts. Each key can be given a human-readable alias for convenience and clarity. Additionally, when adding a key you will have to add an index name, which is the name of the index to associated this data within ElasticSearch. You may add a key already in use within p8e by pasting in the private key, which will then simply link the key with your identity ","(","without altering the existing alias and index name",")","."),(0,o.kt)("p",null,"Keys that are registered in the system can be set up to share data with one or more public keys. To access this functionality, simply click on the 'Manage' button under a key on the Key Management page and then click 'Add New Share' and enter the desired public key to share data with."),(0,o.kt)("p",null,"Until you add at least one contract key, no data will be visible in the ui. Data displayed within the ui is limited to what is accessible to your various keys."),(0,o.kt)("h3",{id:"dashboard"},"Dashboard"),(0,o.kt)("p",null,"There is a dashboard view to give an overview of the state of the most recent 100 contracts in the system associated with one of your Contract Keys. The charts on the dashboard illustrate how long contracts are taking to complete, the current distribution of the state of these contracts and the timing breakdown of how long contracts are spending in each state. The 'Complete Contract Execution Time' and 'Contract Time Breakdown' graphs also support zooming in by selecting a subset of the data, which can be useful if there are outliers in the data compressing the scale."),(0,o.kt)("h3",{id:"contract-details"},"Contract Details"),(0,o.kt)("p",null,"The 'Contracts' section of the ui displays more details on the latest contracts in the system associated with one of your Contract Keys. Here you can see the type of contract, timing details, status, any errors, and facts/prerequisites ","(","conditions",")","/considerations ","(","functions",")",". This section can be useful for determining why a contract may have errored, as well as for viewing the pii data stored securely within the p8e object store. In order to view data, simply click on the line with the name and hash of the data you wish to view and a modal will display the desired data."),(0,o.kt)("h3",{id:"scope-details"},"Scope Details"),(0,o.kt)("p",null,"The 'Scope' section of the ui displays the current and historical state of scopes. You can either search for a scope by uuid, or click on the scope uuid link from a contract that acted upon a scope. When viewing a scope, you can just click on any fact/prerequisite ","(","condition",")","/consideration ","(","function",")"," input or output and a modal will display the desired data. At the bottom of the scope details page is a listing of the historical state of that scope, which you can click on and view in another page."))}u.isMDXComponent=!0}}]);