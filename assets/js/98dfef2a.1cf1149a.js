"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2396],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=a,f=d["".concat(i,".").concat(h)]||d[h]||u[h]||o;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[d]="string"==typeof e?e:a,c[1]=l;for(var s=2;s<o;s++)c[s]=n[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1309:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},c="Contract Life Cycle",l={unversionedId:"pb/p8e/overview/api/contract-life-cycle",id:"pb/p8e/overview/api/contract-life-cycle",title:"Contract Life Cycle",description:"Contracts are executed through a series of life cycle events that are intercepted by client software. These events \\(except for the initial 'Accepted' event\\) are handled by passing callback functions or handler objects via the contract watchBuilder as in the following example \\(note the return true to indicate successful processing of each event\\). In cases where false is returned, or a networking problem causes the acknowledgment to not reach the BlockVault backend, the event will be redelivered after a retry delay elapses.",source:"@site/docs/pb/p8e/overview/api/contract-life-cycle.md",sourceDirName:"pb/p8e/overview/api",slug:"/pb/p8e/overview/api/contract-life-cycle",permalink:"/docs/pb/p8e/overview/api/contract-life-cycle",draft:!1,tags:[],version:"current",frontMatter:{}},i={},s=[{value:"<strong>Life Cycle Events</strong>",id:"life-cycle-events",level:2},{value:"Accepted",id:"accepted",level:3},{value:"Fragment",id:"fragment",level:3},{value:"Signed",id:"signed",level:3},{value:"Blockchain",id:"blockchain",level:3},{value:"Index",id:"index",level:3},{value:"Complete",id:"complete",level:3},{value:"Error",id:"error",level:3}],p={toc:s},d="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"contract-life-cycle"},"Contract Life Cycle"),(0,a.kt)("p",null,"Contracts are executed through a series of life cycle events that are intercepted by client software. These events ","(","except for the initial 'Accepted' event",")"," are handled by passing callback functions or handler objects via the contract watchBuilder as in the following example ","(","note the return ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," to indicate successful processing of each event",")",". In cases where ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," is returned, or a networking problem causes the acknowledgment to not reach the BlockVault backend, the event will be redelivered after a retry delay elapses."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"contractManager.watchBuilder(HelloWorldContract::class.java)\n        .stepCompletion { contract: Contract<HelloWorldContract> ->\n            // handle step completions\n            true\n        }\n        .request { contract: Contract<HelloWorldContract> ->\n            // handle incoming contract request\n            true\n        }\n        .error { error: ContractError<HelloWorldContract> ->\n            // handle errors\n            true\n        }.watch()\n")),(0,a.kt)("h2",{id:"life-cycle-events"},(0,a.kt)("strong",{parentName:"h2"},"Life Cycle Events")),(0,a.kt)("h3",{id:"accepted"},"Accepted"),(0,a.kt)("p",null,"Upon calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"execute()")," method on a contract, the envelope is either initially accepted into the system, or rejected with an error. This is the only 'event' in the lifecycle that happens synchronously, not asynchronously."),(0,a.kt)("p",null,"The return type of ",(0,a.kt)("inlineCode",{parentName:"p"},"execute()")," is a functional ",(0,a.kt)("inlineCode",{parentName:"p"},"Either<P8eError, Contract<T>>"),"and has the typical bifunctor interface. One such example of operating on the result is shown below."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'contractManager.newContract(HelloWorldContract::class.java, UUID.randomUUID().toProtoUuidProv()).apply {\n    addProposedFact("name", ExampleName.newBuilder()\n        .setFirstName("John").setLastName("Doe").build())\n    satisfyParticipant(OWNER, publicKey.toJavaPublicKey())\n    execute()\n        .map { contract: Contract<HelloWorldContract> ->\n            // do something with accepted Contract<T> object\n        }\n        .mapLeft { error: P8eError ->\n            // handle the EnvelopeError as needed\n        }\n}\n')),(0,a.kt)("h3",{id:"fragment"},"Fragment"),(0,a.kt)("p",null,"This state only applies to a multi-party contract, and indicates that the contract has been sent to other participants for signing."),(0,a.kt)("h3",{id:"signed"},"Signed"),(0,a.kt)("p",null,"This state indicates that the contract has been signed by all relevant parties. This is an internal event, it results in no contract watch builder event handlers executing."),(0,a.kt)("h3",{id:"blockchain"},"Blockchain"),(0,a.kt)("p",null,"This state indicates that the contract has been sent to the blockchain and is waiting to be committed in a block. This is an internal event, it results in no contract watch builder event handlers executing."),(0,a.kt)("h3",{id:"index"},"Index"),(0,a.kt)("p",null,"This state indicates that the contract result is waiting to be indexed in ElasticSearch. This is an internal event, it results in no contract watch builder event handlers executing."),(0,a.kt)("h3",{id:"complete"},"Complete"),(0,a.kt)("p",null,"This is the state you have been waiting for, the contract has completely executed successfully! This event will fire the stepCompletion event handler."),(0,a.kt)("h3",{id:"error"},"Error"),(0,a.kt)("p",null,"As its name would imply, there was an error at some stage of contract execution, this event allows you to see what the error was and handle it appropriately. Any events that have errored will go through a retry process before ultimately erroring the contract completely."))}u.isMDXComponent=!0}}]);