"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[2396],{35183:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var r=n(85893),c=n(11151);const a={},o="Contract Life Cycle",i={id:"pb/p8e/overview/api/contract-life-cycle",title:"Contract Life Cycle",description:"Contracts are executed through a series of life cycle events that are intercepted by client software. These events \\(except for the initial 'Accepted' event\\) are handled by passing callback functions or handler objects via the contract watchBuilder as in the following example \\(note the return true to indicate successful processing of each event\\). In cases where false is returned, or a networking problem causes the acknowledgment to not reach the BlockVault backend, the event will be redelivered after a retry delay elapses.",source:"@site/docs/pb/p8e/overview/api/contract-life-cycle.md",sourceDirName:"pb/p8e/overview/api",slug:"/pb/p8e/overview/api/contract-life-cycle",permalink:"/docs/pb/p8e/overview/api/contract-life-cycle",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},l={},s=[{value:"<strong>Life Cycle Events</strong>",id:"life-cycle-events",level:2},{value:"Accepted",id:"accepted",level:3},{value:"Fragment",id:"fragment",level:3},{value:"Signed",id:"signed",level:3},{value:"Blockchain",id:"blockchain",level:3},{value:"Index",id:"index",level:3},{value:"Complete",id:"complete",level:3},{value:"Error",id:"error",level:3}];function h(e){const t={code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"contract-life-cycle",children:"Contract Life Cycle"}),"\n",(0,r.jsxs)(t.p,{children:["Contracts are executed through a series of life cycle events that are intercepted by client software. These events (except for the initial 'Accepted' event) are handled by passing callback functions or handler objects via the contract watchBuilder as in the following example (note the return ",(0,r.jsx)(t.code,{children:"true"})," to indicate successful processing of each event). In cases where ",(0,r.jsx)(t.code,{children:"false"})," is returned, or a networking problem causes the acknowledgment to not reach the BlockVault backend, the event will be redelivered after a retry delay elapses."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:"contractManager.watchBuilder(HelloWorldContract::class.java)\n        .stepCompletion { contract: Contract<HelloWorldContract> ->\n            // handle step completions\n            true\n        }\n        .request { contract: Contract<HelloWorldContract> ->\n            // handle incoming contract request\n            true\n        }\n        .error { error: ContractError<HelloWorldContract> ->\n            // handle errors\n            true\n        }.watch()\n"})}),"\n",(0,r.jsx)(t.h2,{id:"life-cycle-events",children:(0,r.jsx)(t.strong,{children:"Life Cycle Events"})}),"\n",(0,r.jsx)(t.h3,{id:"accepted",children:"Accepted"}),"\n",(0,r.jsxs)(t.p,{children:["Upon calling the ",(0,r.jsx)(t.code,{children:"execute()"})," method on a contract, the envelope is either initially accepted into the system, or rejected with an error. This is the only 'event' in the lifecycle that happens synchronously, not asynchronously."]}),"\n",(0,r.jsxs)(t.p,{children:["The return type of ",(0,r.jsx)(t.code,{children:"execute()"})," is a functional ",(0,r.jsx)(t.code,{children:"Either<P8eError, Contract<T>>"}),"and has the typical bifunctor interface. One such example of operating on the result is shown below."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-kotlin",children:'contractManager.newContract(HelloWorldContract::class.java, UUID.randomUUID().toProtoUuidProv()).apply {\n    addProposedFact("name", ExampleName.newBuilder()\n        .setFirstName("John").setLastName("Doe").build())\n    satisfyParticipant(OWNER, publicKey.toJavaPublicKey())\n    execute()\n        .map { contract: Contract<HelloWorldContract> ->\n            // do something with accepted Contract<T> object\n        }\n        .mapLeft { error: P8eError ->\n            // handle the EnvelopeError as needed\n        }\n}\n'})}),"\n",(0,r.jsx)(t.h3,{id:"fragment",children:"Fragment"}),"\n",(0,r.jsx)(t.p,{children:"This state only applies to a multi-party contract, and indicates that the contract has been sent to other participants for signing."}),"\n",(0,r.jsx)(t.h3,{id:"signed",children:"Signed"}),"\n",(0,r.jsx)(t.p,{children:"This state indicates that the contract has been signed by all relevant parties. This is an internal event, it results in no contract watch builder event handlers executing."}),"\n",(0,r.jsx)(t.h3,{id:"blockchain",children:"Blockchain"}),"\n",(0,r.jsx)(t.p,{children:"This state indicates that the contract has been sent to the blockchain and is waiting to be committed in a block. This is an internal event, it results in no contract watch builder event handlers executing."}),"\n",(0,r.jsx)(t.h3,{id:"index",children:"Index"}),"\n",(0,r.jsx)(t.p,{children:"This state indicates that the contract result is waiting to be indexed in ElasticSearch. This is an internal event, it results in no contract watch builder event handlers executing."}),"\n",(0,r.jsx)(t.h3,{id:"complete",children:"Complete"}),"\n",(0,r.jsx)(t.p,{children:"This is the state you have been waiting for, the contract has completely executed successfully! This event will fire the stepCompletion event handler."}),"\n",(0,r.jsx)(t.h3,{id:"error",children:"Error"}),"\n",(0,r.jsx)(t.p,{children:"As its name would imply, there was an error at some stage of contract execution, this event allows you to see what the error was and handle it appropriately. Any events that have errored will go through a retry process before ultimately erroring the contract completely."})]})}function d(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var r=n(67294);const c={},a=r.createContext(c);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);