"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[8438],{81688:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(85893),o=n(11151);const i={},r="Building New BlockVault Contracts",c={id:"pb/p8e/p8e-usage/building-new-contracts",title:"Building New BlockVault Contracts",description:"BlockVault Contract Creation",source:"@site/docs/pb/p8e/p8e-usage/building-new-contracts.md",sourceDirName:"pb/p8e/p8e-usage",slug:"/pb/p8e/p8e-usage/building-new-contracts",permalink:"/docs/pb/p8e/p8e-usage/building-new-contracts",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Specifications",permalink:"/docs/pb/p8e/p8e-usage/specifications"},next:{title:"Data Retrieval",permalink:"/docs/pb/p8e/p8e-usage/data-retrieval"}},s={},l=[{value:"BlockVault Contract Creation",id:"blockvault-contract-creation",level:2},{value:"Contract Inheritance",id:"contract-inheritance",level:2},{value:"Contract Bootstrapping",id:"contract-bootstrapping",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"building-new-blockvault-contracts",children:"Building New BlockVault Contracts"}),"\n",(0,a.jsx)(t.h2,{id:"blockvault-contract-creation",children:"BlockVault Contract Creation"}),"\n",(0,a.jsx)(t.p,{children:"When preparing to create contracts, information about the transaction must be identified. This information includes the participants involved, the role of each participant (i.e. who initiates the contract), the input and output data formats, and the requirements of the contract (i.e. validation requirements)."}),"\n",(0,a.jsxs)(t.p,{children:["Every contract is required to extend the ",(0,a.jsx)(t.code,{children:"P8eContract"})," abstract class. This class includes common functionality used by many contracts. This also facilitates identifying all contracts existing in the system."]}),"\n",(0,a.jsx)(t.p,{children:"Only the hashed results of contract execution are memorialized to the blockchain. The only way to verify the hashed results originated from a given set of information is to run it through the contract and compare the hashed results. This validation process relies on all contracts to be deterministic, meaning the same inputs to to a contract are required to produce the same hashed results. For this reason, generating timestamps or random UUIDs in contracts should be avoided. Instead, this functionality should be handled outside of the contract and be passed in as an input parameter to the contract. The same applies for other things that affect determinism, such as floats, map ordering, and external calls."}),"\n",(0,a.jsx)(t.p,{children:"Parameters required by contracts that have previously been saved to the blockchain are class parameters with the Record annotation. Records are used when modifying previously saved data or when new data needs to reference existing data. Record names are required to be unique for each contract."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kotlin",children:"class <ContractClass>(@Record(name = <Name>) name: <Protobuf>): P8eContract()\n"})}),"\n",(0,a.jsx)(t.p,{children:"Participants involved in transactions are identified by providing a list of PartyType to the Participants annotation. PartyType values are predefined in Provenance Blockchain and include owners, originators, custodians, servicers, etc. All participants must be included in the Participants annotation in order to participate in the transaction. The participants included all need to agree on the contract before it will be saved to the blockchain."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kotlin",children:"@Participants(roles = [<PartyType>, <PartyType>])\n"})}),"\n",(0,a.jsx)(t.p,{children:"Contracts can be comprised of many functions. The participant responsible for submitting the results to the blockchain is required for each function and is identified using the Function annotation. The responsible participant compiles the hashed execution results from all participants and sends the information to Provenance Blockchain where the nodes endorse and memorialize the transaction to the blockchain. This functionality is provided by the SDK. All functions with the Function annotation must be executed before the output will be memorialized to the blockchain."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kotlin",children:"@Function(invokedBy = <PartyTypeInitiatingTransaction>)\n"})}),"\n",(0,a.jsx)(t.p,{children:"The hashed execution results of each function with a Function annotation are saved to the blockchain with a label identified by the Record annotation. Record names are required to be unique for each contract."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kotlin",children:"@Record(name = <BlockchainDataLabel>)\n"})}),"\n",(0,a.jsx)(t.p,{children:"Parameters to functions are required to be annotated with either the Input or the Record annotation. Proposed parameters are those that have not yet been saved to the blockchain. As previously explained, records have already been memorialized to the blockchain. Input names are required to be unique for each contract."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kotlin",children:"fun name(@Input(name = <InputDataName>) name: <Protobuf> )\n"})}),"\n",(0,a.jsx)(t.h2,{id:"contract-inheritance",children:"Contract Inheritance"}),"\n",(0,a.jsx)(t.p,{children:"Contracts can also inherit from other contracts, provided the base contract still extends the P8eContract abstract class. The following example demonstrates how a contract extends the HelloWorld contract."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-kotlin",children:'@Participants(roles = [OWNER])\nopen class HelloWorldDerivedContract(): HelloWorldContract() {\n    @Function(invokedBy = OWNER)\n    @Record(name = "address")\n    open fun address(@Input(name = "address") address: ExampleAddress ) = address\n}\n'})}),"\n",(0,a.jsx)(t.p,{children:"When this contract is executed, name is required to be supplied to fulfill the name function in the superclass. Address is also required to be supplied to fulfill the address function in the subclass."}),"\n",(0,a.jsx)(t.h2,{id:"contract-bootstrapping",children:"Contract Bootstrapping"}),"\n",(0,a.jsxs)(t.p,{children:["Once contracts are defined like was shown above, there's a bootstrapping phase that's necessary before the contracts can be executed to record data to Provenance Blockchain. A ",(0,a.jsx)(t.a,{href:"https://github.com/provenance-io/p8e-gradle-plugin",children:"gradle plugin"})," is provided that is capable of bootstrapping JVM based JARs that contain Java or Kotlin based P8eContract implementations."]}),"\n",(0,a.jsx)(t.p,{children:"The plugin exposes mutiple tasks that can be used to check contract syntax, persist the contract specifications and JARs to Object Store, and memorializing the scope and contract specifications to Provenance Blockchain. That uberjar (fully packaged Java JAR, including all dependencies) is saved to Object Store so that the exact uberjar has the ability to be loaded into the Java memory class loader and executed by all contract participants."}),"\n",(0,a.jsxs)(t.p,{children:["This is the first point at which a Provenance Blockchain account would be needed. Due to transaction sequencing, it is ",(0,a.jsx)(t.strong,{children:"highly"})," recommended that a separate, standalone, Provenance Blockchain account is used strictly for use with the plugin for bootstrapping. Any participants that need to have access to the contract specifications or JARs can be included as participants in the plugin configuration."]})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>r});var a=n(67294);const o={},i=a.createContext(o);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);