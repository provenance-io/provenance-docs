"use strict";(self.webpackChunkprovenance_docs=self.webpackChunkprovenance_docs||[]).push([[5612],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(t),m=r,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return t?a.createElement(h,i(i({ref:n},s),{},{components:t})):a.createElement(h,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8677:(e,n,t)=>{t.d(n,{Y:()=>r});var a=t(7294);const r=e=>{let{text:n}=e;return a.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},n)}},1641:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=t(7462),r=(t(7294),t(3905)),o=t(8677);const i={},c="Installing Provenanced",l={unversionedId:"pb/blockchain/running-a-node/index",id:"pb/blockchain/running-a-node/index",title:"Installing Provenanced",description:"Provenance Blockchain is wrapped into a single executable named provenanced. All interaction \\(whether creating a node, querying, or invoking actions\\) with Provenance Blockchain can be accomplished using the provenanced command. This document explains the basic installation of the command and verification that it has been installed correctly.",source:"@site/docs/pb/blockchain/running-a-node/index.md",sourceDirName:"pb/blockchain/running-a-node",slug:"/pb/blockchain/running-a-node/",permalink:"/provenance-docs/docs/pb/blockchain/running-a-node/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Gas and Fees",permalink:"/provenance-docs/docs/pb/blockchain/basics/gas-and-fees"},next:{title:"Running a Node",permalink:"/provenance-docs/docs/pb/blockchain/running-a-node/running-a-node-1/"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"<code>provenanced</code> Install",id:"provenanced-install",level:2},{value:"Installing",id:"installing",level:2},{value:"Verify",id:"verify",level:3}],d={toc:s};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"installing-provenanced"},"Installing Provenanced"),(0,r.kt)(o.Y,{text:"Install the `provenanced` executable for both client and server operations.",mdxType:"DocSubheader"}),(0,r.kt)("p",null,"Provenance Blockchain is wrapped into a single executable named ",(0,r.kt)("inlineCode",{parentName:"p"},"provenanced"),". All interaction ","(","whether creating a node, querying, or invoking actions",")"," with Provenance Blockchain can be accomplished using the ",(0,r.kt)("inlineCode",{parentName:"p"},"provenanced")," command. This document explains the basic installation of the command and verification that it has been installed correctly."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Linux or Mac OS"),(0,r.kt)("li",{parentName:"ul"},"Go 1.15+ ","(",(0,r.kt)("a",{parentName:"li",href:"https://golang.org/doc/install"},"https://golang.org/doc/install"),")"),(0,r.kt)("li",{parentName:"ul"},"LevelDB 1.23 ","(",(0,r.kt)("a",{parentName:"li",href:"https://github.com/google/leveldb"},"https://github.com/google/leveldb"),")")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"On MacOS, LevelDB can be installed with ",(0,r.kt)("inlineCode",{parentName:"p"},"brew install leveldb"),".")),(0,r.kt)("h2",{id:"provenanced-install"},(0,r.kt)("inlineCode",{parentName:"h2"},"provenanced")," Install"),(0,r.kt)("p",null,"All interaction ","(","whether creating a node, querying, or invoking actions",")"," with Provenance Blockchain can be accomplished using the ",(0,r.kt)("inlineCode",{parentName:"p"},"provenanced")," command."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/testnet"},"Provenance Blockchain testnet repository"),' for the latest "Software Version" information of ',(0,r.kt)("inlineCode",{parentName:"p"},"pio-testnet-1"))),(0,r.kt)("h2",{id:"installing"},"Installing"),(0,r.kt)("p",null,"Installing ",(0,r.kt)("inlineCode",{parentName:"p"},"provenanced")," is done directly from the source code by cloning the version indicated for ",(0,r.kt)("inlineCode",{parentName:"p"},"pio-testnet-1")," from the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/provenance"},"Provenance Blockchain Github")," repo, then ",(0,r.kt)("inlineCode",{parentName:"p"},"make install"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"git clone -b <version> https://github.com/provenance-io/provenance\ncd provenance && make install\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("inlineCode",{parentName:"p"},"<version> is prefixed with 'v' when cloning version branches (eg. v0.2.0)"))),(0,r.kt)("h3",{id:"verify"},"Verify"),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},'New go executables are installed at "$GOPATH/bin" where the environment variable GOPATH defaults to "~/go" when not set. Remember to add either "$GOPATH/bin" or "~/go/bin" to your PATH when GOPATH is either set or not.')),(0,r.kt)("p",null,"Check the version number to verify that the command has been successfully installed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"provenanced version --long\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"name: Provenance Blockchain\nserver_name: provenanced\nversion: 0.2.0\ncommit: 75fef3a701af3787a56d4c8c6b40f67b95b79eb6\n")))}u.isMDXComponent=!0}}]);