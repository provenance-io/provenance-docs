"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[7781],{37246:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var n=a(85893),o=a(11151);const r={},i="Explanation",c={id:"pb/p8e/p8e-usage/quick-start/hello-world-example",title:"Explanation",description:"Provenance Blockchain\u2019s Hello World example is designed to demonstrate the process of inputting name information, manipulating the information in a contracts, achieving agreement between multiple participants, memorializing the results to the blockchain, retrieving notifications when the process completes, and retrieving information from the blockchain and encrypted object store.",source:"@site/docs/pb/p8e/p8e-usage/quick-start/hello-world-example.md",sourceDirName:"pb/p8e/p8e-usage/quick-start",slug:"/pb/p8e/p8e-usage/quick-start/hello-world-example",permalink:"/docs/pb/p8e/p8e-usage/quick-start/hello-world-example",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},s={},l=[{value:"Transaction Flow",id:"transaction-flow",level:2},{value:"Data Format",id:"data-format",level:2},{value:"Client Contracts",id:"client-contracts",level:2},{value:"Contract Execution",id:"contract-execution",level:2},{value:"Modify Contract Execution",id:"modify-contract-execution",level:2},{value:"Retrieving Data",id:"retrieving-data",level:2}];function d(e){const t={code:"code",h1:"h1",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"explanation",children:"Explanation"}),"\n",(0,n.jsx)(t.p,{children:"Provenance Blockchain\u2019s Hello World example is designed to demonstrate the process of inputting name information, manipulating the information in a contracts, achieving agreement between multiple participants, memorializing the results to the blockchain, retrieving notifications when the process completes, and retrieving information from the blockchain and encrypted object store."}),"\n",(0,n.jsx)(t.h2,{id:"transaction-flow",children:"Transaction Flow"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"hello world flow",src:a(21622).Z+"",width:"532",height:"610"})}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"The owner provides the input data to be submitted and uses the SDK to execute the HelloWorld contract."}),"\n",(0,n.jsx)(t.li,{children:"The data is encrypted and saved to the owner\u2019s object store. Other participants would also be identified if the contract required them."}),"\n",(0,n.jsx)(t.li,{children:"The owner executes the HelloWorldContract."}),"\n",(0,n.jsx)(t.li,{children:"The owner sends the hashed execution results of the contracts to Provenance Blockchain where Nodes endorse the transaction."}),"\n",(0,n.jsx)(t.li,{children:"Once the Nodes achieve consensus, a record of the transaction is memorialized (written) to the blockchain."}),"\n",(0,n.jsx)(t.li,{children:"The owner listens for events with details about the result of the transaction."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"data-format",children:"Data Format"}),"\n",(0,n.jsx)(t.p,{children:"The data format of information exchanged in Provenance Blockchain is defined using Protocol Buffers (Protobuf). For the Hello World example, the following Name Protobuf is used:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:"message ExampleName {\n    UUID uuid = 1;\n    string first_name = 2 [(index) = { index: ALWAYS}];\n    string last_name = 3 [(index) = { index: ALWAYS}];\n    string middle_name = 4;\n    string prefix = 5;\n    string suffix = 6;\n    AuditFields audit_fields = 99;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"client-contracts",children:"Client Contracts"}),"\n",(0,n.jsx)(t.p,{children:"The Hello World contracts (HelloWorld.kt) are single party agreements by an owner, as identified by the Participants annotation. The contracts extend the P8eContract class, which is a requirement of all contracts. The contracts must be initiated by an owner, as identified by the Function annotation. The contracts will fail if a different participant attempts to initiate them. The hashed execution results of the contracts will be memorialized to the blockchain with a label defined by the Fact annotation. The contracts are expecting a Name Protobuf to be input in a parameter named \u201cname\u201d, as identified by the Input annotation. The logic of the first contract takes the input pre-populated Name Protobuf, concatenates \u201c-hello\u201d to the first name and \u201c-world\u201d to the last name, and outputs a Name Protobuf with the updated values."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:'@Participants(roles = [OWNER])\nopen class HelloWorldContract(): P8eContract() {\n    @Function(invokedBy = OWNER)\n    @Fact(name = "name")\n    open fun name(@Input(name = "name") name: ExampleName ) =\n        name.toBuilder()\n            .setFirstName(name.firstName.plus("-hello"))\n            .setLastName(name.lastName.plus("-world"))\n            .build()\n}\n\n@Participants(roles = {PartyType.OWNER})\npublic static class HelloWorldJavaContract extends P8eContract {\n    @Function(invokedBy = PartyType.OWNER)\n    @Fact(name = "name")\n    public ExampleName name(@Input(name = "name") ExampleName name) {\n        return name.toBuilder()\n                   .setFirstName(name.getFirstName() + "-hello")\n                   .setLastName(name.getLastName() + "-world")\n                   .build();\n    }\n}\n'})}),"\n",(0,n.jsx)(t.p,{children:"The logic of the second contract takes the name information from the first contract, concatenates \u201c-modified\u201d to the first name and \u201c-updated\u201d to the last name, and outputs a Name Protobuf with the updated values."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:'@Participants(roles = [OWNER])\nopen class HelloWorldModifyContract(@Fact(name = "name") val currentName: ExampleName) : P8eContract() {\n    @Function(invokedBy = OWNER)\n    @Fact(name = "name")\n    open fun modifyName(@Input(name = "name") proposedName: ExampleName) =\n        proposedName.toBuilder()\n                    .setFirstName(currentName.firstName.plus("-modified"))\n                    .setLastName(currentName.lastName.plus("-updated"))\n                    .build()\n}\n\n@Participants(roles = {PartyType.OWNER})\npublic static class HelloWorldModifyJavaContract extends P8eContract {\n    public HelloWorldModifyJavaContract(@Fact(name = "name") ExampleName currentName) {\n        this.currentName = currentName;\n    }\n\n    private ExampleName currentName;\n\n    @Function(invokedBy = PartyType.OWNER)\n    @Fact(name = "name")\n    public ExampleName modifyName(@Input(name = "name") ExampleName proposedName) {\n        return proposedName.toBuilder()\n                           .setFirstName(currentName.getFirstName() + "-modified")\n                           .setLastName(currentName.getLastName() + "-updated")\n                           .build();\n    }\n}\n'})}),"\n",(0,n.jsx)(t.h2,{id:"contract-execution",children:"Contract Execution"}),"\n",(0,n.jsx)(t.p,{children:"The processes created in the previous section are used to execute the Hello World contracts. Since the owner is initiating the transaction, a ContractManager is created using the owner\u2019s private key."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:'private val contractManager = ContractManager.create("<private_key_text>".toJavaPrivateKey(), "<api_url>")\n\nContractManager contractManager = ContractManager.Companion.create(PK.PrivateKey.parseFrom(Hex.decode("<private_key_text>")),"<api_url>");\n'})}),"\n",(0,n.jsx)(t.p,{children:"When the HelloWorld class is instantiated, there are watchers created using the ContractManager to listen for messages in the Provenance Blockchain mailbox from the HelloWorldContract. One listens for response messages sent when the contract completes. In this example, when a message is received, the UUID saved to the blockchain is logged. Another listens for errors and logs details about the error."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:"init {\n    contractManager.watchBuilder(HelloWorldContract::class.java).watch()\n}\n\ncontractManager.watchBuilder(HelloWorldJavaContract).watch();\n"})}),"\n",(0,n.jsx)(t.p,{children:"Using the ContractManager, a new contract is created with the HelloWorldContract class. Data is passed to the contract parameter by using the addProposedFact function. Once the parameters have been set, the contract can be executed."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:'contractManager.newContract(HelloWorldContract::class.java, OWNER).apply {\n    addProposedFact("name", ExampleName.newBuilder()\n                                       .setFirstName("Hello")\n                                       .setLastName("World")\n                                       .build())\n    contractManager.execute(this)\n}\n\nContract contract = contractManager.newContract(HelloWorldJavaContract.class, PartyType.OWNER);\ncontract.addProposedFact("name", ExampleName.newBuilder()\n                                            .setFirstName("Hello")\n                                            .setLastName("World")\n                                            .build());\ncontractManager.execute(contract);\n'})}),"\n",(0,n.jsx)(t.h2,{id:"modify-contract-execution",children:"Modify Contract Execution"}),"\n",(0,n.jsx)(t.p,{children:"Similar to the first contract execution, when the HelloWorldModify class is instantiated there are watchers created to listen for messages in the Provenance Blockchain mailbox from the HelloWorldModifyContract. One listens for response messages sent when the contract completes. When a message is received, the UUID of the updated record is logged. Another listens for errors and logs details about the error."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:"init {\n    contractManager.watchBuilder(HelloWorldModifyContract::class.java).watch()\n}\n\ncontractManager.watchBuilder(HelloWorldModifyJavaContract.class).watch();\n"})}),"\n",(0,n.jsx)(t.p,{children:"Using the ContractManager, a new contract is created with the HelloWorldModify contract class. Data is passed to the contract parameter by using the addProposedFact function. Once the parameters have been set, the contract can be executed."}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-kotlin",children:'val data = contractManager.hydrate(<UUID>, HelloWorldData::class.java)\ncontractManager.newContract(HelloWorldModifyContract::class.java, data.scope, OWNER).apply {\n    addProposedFact("name", ExampleName.newBuilder()\n                                       .setFirstName(data.name.firstName)\n                                       .setLastName(data.name.lastName)\n                                       .setMiddleName("testing")\n                                       .build())\n    contractManager.execute(this)\n}\n\nHelloWorldJavaData data = contractManager.hydrate(<UUID>, HelloWorldJavaData.class);\nContract contract = contractManager.newContract(HelloWorldModifyJavaContract.class, data.getScope(), PartyType.OWNER);\ncontract.addProposedFact("name", ExampleName.newBuilder()\n                                            .setFirstName(data.getName().getFirstName())\n                                            .setLastName(data.getName().getLastName())\n                                            .setMiddleName("testing")\n                                            .build());\ncontractManager.execute(contract);\n'})}),"\n",(0,n.jsx)(t.h2,{id:"retrieving-data",children:"Retrieving Data"}),"\n",(0,n.jsx)(t.p,{children:"Once the data in Hello World example was memorialized to the blockchain, an example was provided to retrieve the information. The information saved to the blockchain was retrieved by scope UUID into a scope object. The same UUID was used to retrieve the actual asset information, in this case name information, from the encrypted object store. These processes are explained in further detail in the Data Retrieval section."})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},21622:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/hello-world-flow-06b6eba68c9dc723ebcda27f0e8f7b21.png"},11151:(e,t,a)=>{a.d(t,{Z:()=>c,a:()=>i});var n=a(67294);const o={},r=n.createContext(o);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);