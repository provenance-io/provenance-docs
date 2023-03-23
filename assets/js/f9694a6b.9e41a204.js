"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6654],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),p=l(n),m=o,u=p["".concat(s,".").concat(m)]||p[m]||h[m]||i;return n?a.createElement(u,r(r({ref:t},d),{},{components:n})):a.createElement(u,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,r[1]=c;for(var l=2;l<i;l++)r[l]=n[l];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8677:(e,t,n)=>{n.d(t,{Y:()=>o});var a=n(7294);const o=e=>{let{text:t}=e;return a.createElement("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500"},t)}},3242:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),i=n(8677);const r={},c="Major Components",s={unversionedId:"pb/blockchain/introduction/major-components",id:"pb/blockchain/introduction/major-components",title:"Major Components",description:"Application Trinity",source:"@site/docs/pb/blockchain/introduction/major-components.md",sourceDirName:"pb/blockchain/introduction",slug:"/pb/blockchain/introduction/major-components",permalink:"/docs/pb/blockchain/introduction/major-components",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Application Architecture",permalink:"/docs/pb/blockchain/introduction/application-architecture"},next:{title:"Anatomy of the Provenance Blockchain Application",permalink:"/docs/pb/blockchain/basics/anatomy-of-a-provenance-application"}},l={},d=[{value:"Application Trinity",id:"application-trinity",level:2},{value:"On-Chain",id:"on-chain",level:3},{value:"Client-Side",id:"client-side",level:3},{value:"Hybrid",id:"hybrid",level:3},{value:"Provenance Blockchain Node",id:"provenance-blockchain-node",level:2},{value:"Cosmovisor",id:"cosmovisor",level:3},{value:"Modules",id:"modules",level:3},{value:"Key Ring",id:"key-ring",level:3},{value:"Genesis",id:"genesis",level:3},{value:"Interacting with a Node",id:"interacting-with-a-node",level:3},{value:"Smart Contracts",id:"smart-contracts",level:2},{value:"Contract Execution Environment",id:"contract-execution-environment",level:2},{value:"Client Contracts",id:"client-contracts",level:3},{value:"Transaction Flow",id:"transaction-flow",level:3}],h={toc:d};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"major-components"},"Major Components"),(0,o.kt)(i.Y,{text:"Provenance Blockchain facilitates the development of blockchain-based financial services via components.",mdxType:"DocSubheader"}),(0,o.kt)("h2",{id:"application-trinity"},"Application Trinity"),(0,o.kt)("p",null,"Provenance Blockchain is composed of these core concepts:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Modules that implement financial services business logic. Modules are composed to realize complex financial services processes."),(0,o.kt)("li",{parentName:"ul"},"Smart Contracting engine to develop and deploy contracts directly to the Provenance Blockchain."),(0,o.kt)("li",{parentName:"ul"},"Off-chain client-side agreements using the Contract Execution Environment.")),(0,o.kt)("p",null,"Provenance Blockchain distinguishes three types of applications based on these core concepts:"),(0,o.kt)("h3",{id:"on-chain"},"On-Chain"),(0,o.kt)("p",null,"Any client application that is configured with the proper key/addresses and modules, and uses Hash tokens for service payments, can transact directly on-chain within the Provenance Blockchain ecosystem. Applications interact directly with the core ",(0,o.kt)("a",{parentName:"p",href:"/docs/pb/modules/cosmos-modules"},"Provenance Blockchain Modules")," and a ",(0,o.kt)("a",{parentName:"p",href:"../running-a-node/running-a-node-1/"},"Provenance Blockchain Node"),". Applications may implement and leverage custom ",(0,o.kt)("a",{parentName:"p",href:"/docs/pb/modules/provwasm-smart-contracts"},"Smart Contracts "),"specific to the business application use case."),(0,o.kt)("h3",{id:"client-side"},"Client-Side"),(0,o.kt)("p",null,"Using the client-side ",(0,o.kt)("a",{parentName:"p",href:"../../p8e/overview/"},"Contract Execution Environment"),", Provenance Blockchain includes functionality to encrypt and store confidential data and documents and to securely and selectively share those with other clients. Note that the on-chain immutability is extended to the off-chain data when the on-chain contract refers to those data by their hash (checksum) identifier, i.e. the cryptographic hash of the data's content. This functionality allows for off-chain transactions that optionally can complement the on-chain operations. The Contract Execution Environment is a client-hosted solution (or, optionally, hosted by a trusted service provider) that also interacts with a Provenance Blockchain Node."),(0,o.kt)("h3",{id:"hybrid"},"Hybrid"),(0,o.kt)("p",null,"Financial transactions often consist of on-chain and client-side parts. For financial transactions, for example, the confidential documents supporting the transaction can be referred to by reference in the on-chain transaction. Those references point at immutable and encrypted documents that are safely stored off-chain. As part of the transaction, those confidential documents can be securely and selectively shared between the business partners. Provenance Blockchain fully supports this hybrid model, which allows for more complex financial transactions to be conducted within the Provenance Blockchain-ecosystem."),(0,o.kt)("h2",{id:"provenance-blockchain-node"},"Provenance Blockchain Node"),(0,o.kt)("p",null,"A Provenance Blockchain Node is a daemon process (",(0,o.kt)("inlineCode",{parentName:"p"},"provenanced"),") ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/core/node.html"},"Full-Node Client")," implementation and is the core process that runs the Provenance Blockchain. This process runs the state-machine, starting from a genesis file, and connects to peers on the network running the same client to receive and relay transactions, block proposals and signatures. Participants in the network run this process to initialize their state-machine, connect with other full-nodes and update their state-machine as new blocks come in. The blockchain full-node presents itself as the ",(0,o.kt)("inlineCode",{parentName:"p"},"provenanced")," binary."),(0,o.kt)("p",null,"Nodes in the network include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Query nodes used by business application middleware for efficient and fast state query."),(0,o.kt)("li",{parentName:"ul"},"Transactional nodes used by business application middleware for efficient transaction submission and event listening."),(0,o.kt)("li",{parentName:"ul"},"Archival nodes where the pruning strategy is set to maintain all historic states."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/pb/ecosystem/community/validator"},"Validators")," that are responsible for committing new blocks in the blockchain for which they are rewarded with gas fees (i.e. Hash). These validators participate in the consensus protocol by broadcasting votes. Validators bond their own Hash and have Hash delegated, or staked to them by Hash holders. Validators have a stake in the network."),(0,o.kt)("li",{parentName:"ul"},"Sentry nodes for Validator DDoS mitigation.")),(0,o.kt)("h3",{id:"cosmovisor"},"Cosmovisor"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/run-node/cosmovisor.html"},"Cosmovisor")," is a small process manager around the Provenance Blockchain daemon process (",(0,o.kt)("inlineCode",{parentName:"p"},"provenanced"),") that monitors the ",(0,o.kt)("a",{parentName:"p",href:"../../ecosystem/governance/"},"governance module")," for ",(0,o.kt)("a",{parentName:"p",href:"/docs/pb/ecosystem/governance/software-upgrade-proposal"},"upgrade")," proposals. Approved upgrade proposals can be run manually or automatically to download the new code, stop the node, run the migration script, replace the node binary, and start with the a genesis file."),(0,o.kt)("h3",{id:"modules"},"Modules"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/building-modules/intro.html"},"Modules")," define the Provenance Blockchain logic. Provenance Blockchain is composed of modules from the Cosmos SDK and custom modules to support value markers and the ",(0,o.kt)("a",{parentName:"p",href:"../../p8e/overview/"},"Contract Execution Environment"),". Modules provide core functionality that blockchain applications need, including a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/core/baseapp.html"},"boilerplate implementation of the ABCI")," to communicate with the underlying consensus engine, a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/core/store.html#multistore"},"multistore")," to persist state, a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/core/node.html"},"server")," to form a full-node, and ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/interfaces/interfaces-intro.html"},"interfaces")," to handle queries. Modules implement the bulk of the logic of financial service applications and the core does the wiring to enable modules to be composed together."),(0,o.kt)("p",null,"Modules can be seen as little state-machines within the state-machine. They generally define a subset of the state using one or more key-value stores and message types."),(0,o.kt)("h3",{id:"key-ring"},"Key Ring"),(0,o.kt)("p",null,"To interact with the ",(0,o.kt)("inlineCode",{parentName:"p"},"provenanced"),' daemon, and by extension the node, a keyring that holds the private/public key pairs used to interact with a node must be established. For example, a validator key needs to be set up before running the blockchain node so that blocks can be correctly signed. The private key can be stored in different locations, called "backends", such as a file, an ',(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hardware_security_module"},"HSM"),", or the operating system's own key storage. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/run-node/keyring.html"},"Refer to the Cosmos keyring documentation for more information.")),(0,o.kt)("h3",{id:"genesis"},"Genesis"),(0,o.kt)("p",null,"Before running a node the chain is initialized via a genesis file. A default Provenance Blockchain genesis file is provided depending on the network in use (mainnet versus testnet). Refer to ",(0,o.kt)("a",{parentName:"p",href:"../running-a-node/"},"Running a Node")," for more information on establishing a genesis file."),(0,o.kt)("h3",{id:"interacting-with-a-node"},"Interacting with a Node"),(0,o.kt)("p",null,"There are multiple ways to interact with a node: using the CLI, using gRPC, or using the REST endpoints. With a running node, the ",(0,o.kt)("inlineCode",{parentName:"p"},"provenanced")," daemon process can be used as a CLI. The CLI provides functionality for signing and submitting transactions, querying, key and key ring management, as well as Module interaction. ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/main/run-node/interact-node.html"},"Refer to the Cosmos Interacting with the Node documentation for more information.")),(0,o.kt)("h2",{id:"smart-contracts"},"Smart Contracts"),(0,o.kt)("p",null,"The Provenance Blockchain Smart Contract engine is based on the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.cosmwasm.com/docs/1.0/"},"CosmWasm")," smart contracting platform. It is referred to as ",(0,o.kt)("inlineCode",{parentName:"p"},"provwasm")," within the ecosystem. It provides a the smart contracting component of the ecosystem."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/provwasm"},"ProvWasm")," is a module within Provenance Blockchain thereby providing smart contracting support to the Provenance Blockchain chain without adjusting existing logic. Smart contracts are hosted on a running Provenance Blockchain node (",(0,o.kt)("inlineCode",{parentName:"p"},"provenanced"),") where they can then be used by applications. Applications connect to smart contracts in the same way as they would interact with modules: CLI, gRPC, or REST."),(0,o.kt)("p",null,"There are 3 phases of a ProvWasm contract that help understand how they are used:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Upload Code: Upload the optimized smart contract (wasm) code, no state nor contract address (example Standard ERC20 contract)"),(0,o.kt)("li",{parentName:"ul"},"Instantiate Contract: Instantiate a code reference with some initial state, creates new address (example set token name, max issuance, etc for ",(0,o.kt)("em",{parentName:"li"},"my")," ERC20 token)"),(0,o.kt)("li",{parentName:"ul"},"Execute Contract: This may support many different calls, but they are all unprivileged usage of a previously instantiated contract, depends on the contract design (example: Send ERC20 token, grant approval to other contract).")),(0,o.kt)("p",null,"Provenance Blockchain Smart Contract instantiation and execution is metered and requires gas. Furthermore, both instantiation and execution allow the signer to send some tokens to the contract along with the message. Two key differences are that sending tokens directly to a contract ",(0,o.kt)("em",{parentName:"p"},"does not trigger any contract code"),"."),(0,o.kt)("p",null,"Provenance Blockchain Smart Contract are able to leverage Provenance Blockchain Modules. This allows for the creation of complex, multi-module contracts."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/provenance-io/bilateral-exchange"},"A reference bi-lateral exchange smart contract is maintained here"),"."),(0,o.kt)("h2",{id:"contract-execution-environment"},"Contract Execution Environment"),(0,o.kt)("p",null,"The Provenance Blockchain Contact Execution Environment (BlockVault) is an optional layer on top of the Provenance Blockchain to allow single- and multi-party client-side contract execution while preserving data privacy. Provenance Blockchain client-side contracts take encrypted data from the user (client) and transform the information into encrypted data in the user\u2019s own private object store with object hashes recorded on the blockchain. BlockVault directly integrates with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/pb/modules/metadata-module"},"Provenance Blockchain Metadata Module")," to simplify generating signed records of an asset\u2019s provenance."),(0,o.kt)("p",null,"Assets can be directly defined with the Metadata module, but the BlockVault execution environment assists in the complex process of hashing of data, maintenance of immutable objects, and signature orchestration between multiple parties."),(0,o.kt)("h3",{id:"client-contracts"},"Client Contracts"),(0,o.kt)("p",null,'Client-side contracts differ from "smart contracts" in that they keep data private between parties off-chain and thus facilitate a structure to record agreed-upon state data to the blockchain. Smart contracts, in comparison, are run directly on the blockchain and require the validators to have access to the data, which complicates many consumer-based transactions due to data privacy laws.'),(0,o.kt)("h3",{id:"transaction-flow"},"Transaction Flow"),(0,o.kt)("p",null,"Entities and organizations utilize the Contract Execution Environment to execute contracts creating single or multi-party agreements. Entity identity and data encryption make use of public-private key pairs. Entities are known to each other and share data with each other through their public keys. Contracts and asset data are forwarded to all entities participating in the contract by public key identifier. Entities provide an implementation of an Encrypted Object Store (EOS) where encrypted data related to their public key is stored. Contract execution consumes data from the entity EOS, and the results of the contract executions are returned to the submitting entity's execution environment. The hash sum of the Contract execution results, i.e. the cryptograph hash of its content, are submitted to the Provenance Blockchain (via the Metadata module) where they are validated and committed to the chain. Provenance Blockchain emits events notifying entities the contract has been committed on the blockchain. An index, local to the entity, is updated with the new contract information. This information is used later for searching and querying the data."),(0,o.kt)("p",null,"Refer to the ",(0,o.kt)("a",{parentName:"p",href:"../../p8e/overview/"},"Contract Execution Environment")," for information and tutorials."))}p.isMDXComponent=!0}}]);