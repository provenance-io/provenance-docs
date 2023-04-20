"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9451],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=i(n),d=o,f=s["".concat(p,".").concat(d)]||s[d]||m[d]||a;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c[s]="string"==typeof e?e:o,l[1]=c;for(var i=2;i<a;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var r=n(7462),o=(n(7294),n(3905));const a={},l="BlockVault Setup",c={unversionedId:"pb/p8e/p8e-usage/p8e-setup",id:"pb/p8e/p8e-usage/p8e-setup",title:"BlockVault Setup",description:"Services",source:"@site/docs/pb/p8e/p8e-usage/p8e-setup.md",sourceDirName:"pb/p8e/p8e-usage",slug:"/pb/p8e/p8e-usage/p8e-setup",permalink:"/docs/pb/p8e/p8e-usage/p8e-setup",draft:!1,tags:[],version:"current",frontMatter:{}},p={},i=[{value:"Services",id:"services",level:2},{value:"Local",id:"local",level:2},{value:"Testnet/Mainnet",id:"testnetmainnet",level:2}],u={toc:i},s="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"blockvault-setup"},"BlockVault Setup"),(0,o.kt)("h2",{id:"services"},"Services"),(0,o.kt)("p",null,"The following are the services that make up a fully functional BlockVault environment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"p8e-api"),(0,o.kt)("li",{parentName:"ul"},"object-store"),(0,o.kt)("li",{parentName:"ul"},"Provenance Blockchain node"),(0,o.kt)("li",{parentName:"ul"},"postgres 9.6"),(0,o.kt)("li",{parentName:"ul"},"elasticsearch"),(0,o.kt)("li",{parentName:"ul"},"p8e-webservice ","(","optional",")"),(0,o.kt)("li",{parentName:"ul"},"p8e-ui ","(","optional",")"),(0,o.kt)("li",{parentName:"ul"},"obect-store-locator ","(","required only for external multi-party contract execution",")")),(0,o.kt)("h2",{id:"local"},"Local"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/p8e-docker-compose"},"docker compose")," environment is provided to quickly bring up a fully configured BlockVault environment. This includes a four node Provenance Blockchain cluster. Having some familiarity with ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/"},"docker")," and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"docker-compose")," will help."),(0,o.kt)("p",null,"The following steps will setup an environment and execute your first BlockVault contract."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd $BASE_CODE_DIR\ngit clone git@github.com:provenance-io/p8e-docker-compose.git\n\ncd p8e-docker-compose\n./bin/update && ./bin/one-time-setup.sh\n./bin/start\n\ncd $BASE_CODE_DIR\ngit clone git@github.com:provenance-io/p8e-gradle-plugin.git\n\n# requires java 11\ncd p8e-gradle-plugin/example-java\n./gradlew clean build\nsource $BASE_CODE_DIR/p8e-docker-compose/env/host/env\n./gradlew p8eClean p8eBootstrap --info\n./gradlew runner:run\n")),(0,o.kt)("p",null,"From here you're all set to start creating your own contract specifications, and then publishing and executing them. The remaining documentation will walk you through these steps and help you understand BlockVault."),(0,o.kt)("h2",{id:"testnetmainnet"},"Testnet/Mainnet"))}m.isMDXComponent=!0}}]);