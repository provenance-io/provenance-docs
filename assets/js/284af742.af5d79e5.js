"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[788],{10508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=n(85893),o=n(11151);const r={},i="Quick Start",c={id:"pb/p8e/p8e-usage/quick-start/README",title:"Quick Start",description:"The quickest and easiest way to get started executing contracts and memorializing transactions to the blockchain is to utilize the local setup instructions here.",source:"@site/docs/pb/p8e/p8e-usage/quick-start/README.md",sourceDirName:"pb/p8e/p8e-usage/quick-start",slug:"/pb/p8e/p8e-usage/quick-start/",permalink:"/docs/pb/p8e/p8e-usage/quick-start/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},s={},l=[{value:"Prepare Project",id:"prepare-project",level:2},{value:"Configure Project",id:"configure-project",level:2},{value:"Execute Example",id:"execute-example",level:2},{value:"Execute Modify Example",id:"execute-modify-example",level:2},{value:"Retrieve Information Example",id:"retrieve-information-example",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"quick-start",children:"Quick Start"}),"\n",(0,a.jsxs)(t.p,{children:["The quickest and easiest way to get started executing contracts and memorializing transactions to the blockchain is to utilize the local setup instructions ",(0,a.jsx)(t.a,{href:"/docs/pb/p8e/p8e-usage/p8e-setup#local",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Since you made it to this section, you are now ready to build and execute contracts of your own! The docker compose environment you brought up as part of the above provides some utilities that will make local development easier. ",(0,a.jsx)(t.code,{children:"p8e-docker-compose/env/host/env"})," can be sourced to give you access to ",(0,a.jsx)(t.code,{children:"PRIVATE_KEY"})," and ",(0,a.jsx)(t.code,{children:"API_URL"})," that can be used to instantiate the p8e-sdk client."]}),"\n",(0,a.jsx)(t.p,{children:"A basic Hello World contract can be executed after the conclusion of this walkthrough. This contract facilitates a single party agreement by an owner. You will be acting as the owner in this example and will provide a name to be memorialized to the blockchain. There are three parts to this example:"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"Execute a contract to memorialize a fact to the blockchain that name information has been added."}),"\n",(0,a.jsx)(t.li,{children:"Execute a contract to update the name information that was memorialized to the blockchain in step 1."}),"\n",(0,a.jsx)(t.li,{children:"Retrieve the information from the blockchain and encrypted object store."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"This section primarily focuses on how to execute the example contracts. The next section (Hello World Example) will explain the example in further detail."}),"\n",(0,a.jsx)(t.h2,{id:"prepare-project",children:"Prepare Project"}),"\n",(0,a.jsxs)(t.p,{children:["Create a new project which will be used to execute the contracts. Once the new project is created, dependencies for p8e-sdk, and optionally your published contract and proto dependencies, need to be added. An example project can be found ",(0,a.jsx)(t.a,{href:"https://github.com/provenance-io/p8e-gradle-plugin/tree/main/example-kotlin",children:"here"}),". That particular example has contract and proto subprojects that get published to BlockVault instead of external dependencies. The following dependency is the minimal requirement."]}),"\n",(0,a.jsxs)(t.p,{children:["The latest releases and pre-releases can be found ",(0,a.jsx)(t.a,{href:"https://github.com/provenance-io/p8e/releases",children:"here"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"NOTE:"})," BlockVault is currently published to the Github Apache Maven registry. Follow the instructions ",(0,a.jsx)(t.a,{href:"https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry#authenticating-to-github-packages",children:"here"})," for   authenticating to Github Packages."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:'dependencies {\n    implementation("io.p8e:p8e-sdk:<latest version>")\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"Classes need to be created to execute the contracts. For this example, separate classes are used for inserting, updating, and retrieving. The class to execute the initial contract should consist of the following functionality:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Load the primary key to allow the contract to be initiated."}),"\n",(0,a.jsx)(t.li,{children:"Configure watchers to listen for responses and errors from the contract execution."}),"\n",(0,a.jsx)(t.li,{children:"Create a new contract and identify the information needing to be memorialized to the blockchain by using the addProposedFact function."}),"\n",(0,a.jsx)(t.li,{children:"Execute the contract."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"An example contract execution class is provided. When creating the ContractManager, the primary_key_text is the key previously registered against the system. Ensure there is a watcher configured to listen for responses which will log the resulting UUID for future use."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kotlin",children:'package example\n\nimport io.p8e.ContractManager\nimport io.p8e.contracts.example.HelloWorldContract\nimport io.p8e.proto.ContractSpecs.PartyType.*\nimport io.p8e.proto.contract.HelloWorldExample.ExampleName\nimport io.p8e.util.toJavaPrivateKey\nimport io.provenance.core.extensions.logger\n\nclass HelloWorld {\n    private val log = logger()\n    private val contractManager = ContractManager.create("<private_key_text>".toJavaPrivateKey(), "<api_url>")\n\n    init {\n        contractManager.watchBuilder(HelloWorldContract::class.java).watch()\n    }\n\n    fun runHelloWorld() {\n        contractManager.newContract(HelloWorldContract::class.java, OWNER).apply {\n            addProposedFact("name", ExampleName.newBuilder()\n                .setFirstName("Hello")\n                .setLastName("World")\n                .build())\n            contractManager.execute(this)\n        }\n    }\n}\n\nfun main() {\n    HelloWorld().runHelloWorld()\n}\n'})}),"\n",(0,a.jsx)(t.h2,{id:"configure-project",children:"Configure Project"}),"\n",(0,a.jsx)(t.p,{children:"Next, an Environment variable needs to be added so the application executes against the sandbox environment."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"API_URL=grpcs://test.figure.com\n"})}),"\n",(0,a.jsx)(t.p,{children:"As an alternate to using an environment variable, the API URL can be passed in as a parameter when the ContractManager is created."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kotlin",children:'private val contractManager = ContractManager.create("<private_key_text>".toJavaPrivateKey(), "grpcs://test.figure.com")\n'})}),"\n",(0,a.jsx)(t.h2,{id:"execute-example",children:"Execute Example"}),"\n",(0,a.jsx)(t.p,{children:"Now the contract should be ready to be executed. Execute the newly-created class. This will execute the HelloWorldContract. Since this is a single contract, no other affiliates need to execute and sign the contract. If the test is successful, informational messages will be logged stating the transaction was recorded to the blockchain. Make note of this scope UUID as it will be used when executing the other contracts."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",children:"... with Scope UUID: <UUID>\n"})}),"\n",(0,a.jsx)(t.p,{children:"If the test is unsuccessful, an error message will be logged detailing the failure reason."}),"\n",(0,a.jsx)(t.p,{children:"This demonstrated how a single party executes an existing contract to memorialize new information to the blockchain. Next, changes to the information will be memorialized to the blockchain."}),"\n",(0,a.jsx)(t.h2,{id:"execute-modify-example",children:"Execute Modify Example"}),"\n",(0,a.jsx)(t.p,{children:"Similar to the class to execute the initial contract, create a new class to execute the modify contract. In addition to the same steps, since a modification is being proposed, the contract also needs to include the facts memorialized by the first contract. This is accomplished by passing in the scope (retrieved using the scope UUID output from the first contract execution) passed into the ContractManager constructor."}),"\n",(0,a.jsx)(t.p,{children:"Create the ContractManager using the same private key as the first step. Ensure there are watchers also configured to listen for responses from this contract."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kotlin",children:'package example\n\nimport io.p8e.ContractManager\nimport io.p8e.contracts.example.HelloWorldData\nimport io.p8e.contracts.example.HelloWorldModifyContract\nimport io.p8e.proto.ContractSpecs.PartyType.*\nimport io.p8e.proto.contract.HelloWorldExample.ExampleName\nimport io.p8e.util.toJavaPrivateKey\nimport io.provenance.core.extensions.logger\nimport java.util.*\n\nclass HelloWorldModify {\n    private val log = logger()\n    private val contractManager = ContractManager.create("<private_key_text>".toJavaPrivateKey(), "<api_url>")\n\n    init {\n        contractManager.watchBuilder(HelloWorldModifyContract::class.java).watch()\n    }\n\n    fun runHelloWorldModify() {\n        val data = contractManager.hydrate(UUID.fromString("<scope UUID>"), HelloWorldData::class.java)\n        contractManager.newContract(HelloWorldModifyContract::class.java, data.scope, OWNER).apply {\n            addProposedFact("name", ExampleName.newBuilder()\n                .setFirstName(data.name.firstName)\n                .setLastName(data.name.lastName)\n                .setMiddleName("testing")\n                .build()\n            )\n            contractManager.execute(this)\n        }\n    }\n}\n\nfun main() {\n    HelloWorldModify().runHelloWorldModify()\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"Execute the class once it\u2019s created. Since this is again a single contract, no other affiliates need to execute and sign the contract. This demonstrated how a single party executes an existing contract to memorialize modifications to existing information to the blockchain. Next, the information will be retrieved from the blockchain."}),"\n",(0,a.jsx)(t.h2,{id:"retrieve-information-example",children:"Retrieve Information Example"}),"\n",(0,a.jsx)(t.p,{children:"This step will demonstrate how to retrieve information from the blockchain as well as the actual asset data from the encrypted object store. Create another new class to retrieve the data using the scope UUID output from the first contract. This example uses the ContractManager to retrieve the information and log the output."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kotlin",children:'package example\n\nimport io.p8e.ContractManager\nimport io.p8e.contracts.example.HelloWorldData\nimport io.p8e.util.toJavaPrivateKey\nimport io.provenance.core.extensions.logger\nimport java.util.*\n\nclass HelloWorldRetrieve {\n    private val log = logger()\n    private val contractManager = ContractManager.create("<private_key_text>".toJavaPrivateKey(), "<api_url>")\n\n    fun runHelloWorldRetrieve(scopeUuid: String) {\n        val scopeWrapper = contractManager.indexClient\n            .findLatestScopeByUuid(UUID.fromString(scopeUuid))\n        if (scopeWrapper.scope.recordGroupList.size == 0) {\n            log.info("No records found for the provided scope UUID")\n        } else {\n            log.info(scopeWrapper.scope.toString())\n        }\n\n        log.info(contractManager.hydrate(UUID.fromString(scopeUuid),\n            HelloWorldData::class.java).toString())\n    }\n}\n\nfun main() {\n    HelloWorldRetrieve().runHelloWorldRetrieve("<scope UUID>")\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"Execute the class once it\u2019s created. This will log information retrieved from the blockchain, such as the participants involved in the transaction, the contract executed, and the hashed execution results of the contract. It will also log the asset data retrieved from the encrypted object store. In this case, it\u2019s name information."}),"\n",(0,a.jsx)(t.p,{children:"The Hello World example demonstrated how a single party executes smart contracts, memorialize the results to the blockchain, retrieves events when the processes complete, and retrieves information from the blockchain and encrypted object store. The next section will explain the processes in further detail."})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>i});var a=n(67294);const o={},r=a.createContext(o);function i(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);