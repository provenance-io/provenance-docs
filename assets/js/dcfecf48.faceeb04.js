"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[534],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>h});var t=r(7294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=t.createContext({}),s=function(e){var n=t.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),u=o,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||a;return r?t.createElement(h,l(l({ref:n},c),{},{components:r})):t.createElement(h,l({ref:n},c))}));function h(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[d]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8677:(e,n,r)=>{r.d(n,{Y:()=>o});var t=r(7294);const o=e=>{let{text:n}=e;return t.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},n)}},5560:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var t=r(7462),o=(r(7294),r(3905)),a=r(8677);const l={},i="Explorer",p={unversionedId:"discover/explorer/index",id:"discover/explorer/index",title:"Explorer",description:"The Blockchain Explorer is a UI displaying blockchain information without having to know how to query the blockchain.&#x20;",source:"@site/docs/discover/explorer/index.md",sourceDirName:"discover/explorer",slug:"/discover/explorer/",permalink:"/docs/discover/explorer/",draft:!1,tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Installation",id:"installation",level:2},{value:"Using <code>docker-compose</code>- Recommended for Non-Developers",id:"using-docker-compose--recommended-for-non-developers",level:3},{value:"Using Github/IDE",id:"using-githubide",level:3}],d={toc:c},m="wrapper";function u(e){let{components:n,...r}=e;return(0,o.kt)(m,(0,t.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"explorer"},"Explorer"),(0,o.kt)(a.Y,{text:"Overview of Explorer capabilities",mdxType:"DocSubheader"}),(0,o.kt)("p",null,"The Blockchain Explorer is a UI displaying blockchain information without having to know how to query the blockchain."," "),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"testnet")," Explorer can be reached ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.test.provenance.io/dashboard"},"here"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"mainnet")," Explorer can be reached ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.provenance.io/dashboard"},"here"),"."),(0,o.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.docker.com/get-started"},"Docker")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/compose/"},"Docker-compose")),(0,o.kt)("li",{parentName:"ul"},"local Provenance Blockchain node running with port ",(0,o.kt)("inlineCode",{parentName:"li"},"9090")," open")),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("h3",{id:"using-docker-compose--recommended-for-non-developers"},"Using ",(0,o.kt)("inlineCode",{parentName:"h3"},"docker-compose"),"- Recommended for Non-Developers"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"For a no-mess installation to get Explorer up and running, copy the following code into an accessible file ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose.yml"),":")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3.9'\nservices:\n  explorer-postgres:\n    image: provenanceio/explorer-database:latest\n    container_name: explorer-postgres\n    environment:\n      - POSTGRES_USER=postgres\n      - POSTGRES_PASSWORD=password1\n    ports:\n      - 5432:5432\n\n  explorer-service:\n    image: provenanceio/explorer-service:latest\n    container_name: explorer-service\n    ports:\n      - 8612:8612\n    environment:\n      - SPRING_PROFILES_ACTIVE=container\n      - DB_USER=postgres\n      - DB_PASS=password1\n      - DB_HOST=postgres\n      - SPRING_DATASOURCE_URL=jdbc:postgresql://explorer-postgres:5432/explorer\n      - DB_PORT=5432\n      - DB_NAME=explorer\n      - DB_SCHEMA=explorer\n      - DB_CONNECTION_POOL_SIZE=40\n      - SPOTLIGHT_TTL_MS=5000\n      - INITIAL_HIST_DAY_COUNT=14\n      - EXPLORER_MAINNET=false\n      # Hits the locally running node\n      - EXPLORER_PB_URL=http://host.docker.internal:9090\n      - EXPLORER_FIGMENT_APIKEY=45af964c1cc7292d06db51b5d9a523a4\n      - EXPLORER_FIGMENT_URL=https://pio-testnet-1--lcd.datahub.figment.io\n    depends_on:\n      - explorer-postgres\n    links:\n      - 'explorer-postgres'\n\n  explorer-frontend:\n    image: provenanceio/explorer-frontend-generic:latest\n    container_name: explorer-frontend\n    ports:\n      - 3000:3000\n    environment:\n      - REACT_APP_ENV=local\n    depends_on:\n      - explorer-service\n    links:\n      - 'explorer-service'\n")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"a. For the most up-to-date compose file, head ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/provenance-io/explorer-service/blob/main/docker/docker-compose.yml"},"here"),"."),(0,o.kt)("li",{parentName:"ol"},"From the location of the above saved file, run ","`",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose pull"),". This pulls the latest versions of the dockers defined in the file."),(0,o.kt)("li",{parentName:"ol"},"Once the pull is complete, run ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose up"),". This starts up the dockers as a single unit.")),(0,o.kt)("p",null,"Once it's up and running, you should be able to access the UI from ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/dashboard"},"http://localhost:3000/dashboard"),"."),(0,o.kt)("h3",{id:"using-githubide"},"Using Github/IDE"),(0,o.kt)("p",null,"Additional prerequisites:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://gradle.org/"},"Gradle")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.java.com/en/"},"Java")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kotlinlang.org/"},"Kotlin"))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Clone the repo: ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/provenance-io/explorer-service"},"https://github.com/provenance-io/explorer-service")),(0,o.kt)("li",{parentName:"ol"},"From within your favorite IDE (or CLI, you brute), you'll need to get everything to build. This project uses Gradle as the build tool. Run the following series of commands from the root directory to get everything built:",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"sh ./gradlew")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"./gradlew clean proto:generateProto")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"./gradlew build")))),(0,o.kt)("li",{parentName:"ol"},"Start up the database",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose -f docker/docker-compose-db.yml up -d")," . This starts the database in a docker environment."),(0,o.kt)("li",{parentName:"ol"},"By running the database separately, you can keep it running in the background while starting and stopping the frontend separately."))),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"./gradlew bootRun -Dspring.profiles.active=development")," to run in a development environment."),(0,o.kt)("li",{parentName:"ol"},"Start up the frontend",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Open ",(0,o.kt)("inlineCode",{parentName:"li"},"docker/docker-compose.yml")),(0,o.kt)("li",{parentName:"ol"},"Make the following changes")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'version: \'3.9\'\nservices:\n  #  explorer-postgres:\n  #    image: provenanceio/explorer-database:latest\n  #    container_name: explorer-postgres\n  #    environment:\n  #      - POSTGRES_USER=postgres\n  #      - POSTGRES_PASSWORD=password1\n  #    ports:\n  #      - 5432:5432\n\n  #  explorer-service:\n  #    image: provenanceio/explorer-service:latest\n  #    container_name: explorer-service\n  #    ports:\n  #      - 8612:8612\n  #    environment:\n  #      - SPRING_PROFILES_ACTIVE=container\n  #      - DB_USER=postgres\n  #      - DB_PASS=password1\n  #      - DB_HOST=postgres\n  #      - SPRING_DATASOURCE_URL=jdbc:postgresql://explorer-postgres:5432/explorer\n  #      - DB_PORT=5432\n  #      - DB_NAME=explorer\n  #      - DB_SCHEMA=explorer\n  #      - DB_CONNECTION_POOL_SIZE=40\n  #      - SPOTLIGHT_TTL_MS=5000\n  #      - INITIAL_HIST_DAY_COUNT=14\n  #      - EXPLORER_MAINNET=false\n  #      # Hits the locally running node\n  #      - EXPLORER_PB_URL=http://host.docker.internal:9090\n  #    depends_on:\n  #      - explorer-postgres\n  #    links:\n  #      - "explorer-postgres"\n  #\n  explorer-frontend:\n    image: provenanceio/explorer-frontend-generic:latest\n    container_name: explorer-frontend\n    ports:\n      - 3000:3000\n    environment:\n      - REACT_APP_ENV=local\n#    depends_on:\n#      - explorer-service\n#    links:\n#      - "explorer-service"\n')),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"docker-compose -f docker/docker-compose.yml up -d"))),(0,o.kt)("p",null,"Once it's up and running, you should be able to access the UI from ",(0,o.kt)("a",{parentName:"p",href:"http://localhost:3000/dashboard"},"http://localhost:3000/dashboard"),"."))}u.isMDXComponent=!0}}]);