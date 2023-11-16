"use strict";(self.webpackChunkprovenance_blockchain_developer_portal=self.webpackChunkprovenance_blockchain_developer_portal||[]).push([[6654],{614:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var o=t(5893),i=t(1151),a=t(8677);const s={},r="Major Components",c={id:"pb/blockchain/introduction/major-components",title:"Major Components",description:"Application Trinity",source:"@site/docs/pb/blockchain/introduction/major-components.md",sourceDirName:"pb/blockchain/introduction",slug:"/pb/blockchain/introduction/major-components",permalink:"/docs/pb/blockchain/introduction/major-components",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"documentationSidebar",previous:{title:"Application Architecture",permalink:"/docs/pb/blockchain/introduction/application-architecture"},next:{title:"Anatomy of the Provenance Blockchain Application",permalink:"/docs/pb/blockchain/basics/anatomy-of-a-provenance-application"}},l={},d=[{value:"Application Trinity",id:"application-trinity",level:2},{value:"On-Chain",id:"on-chain",level:3},{value:"Client-Side",id:"client-side",level:3},{value:"Hybrid",id:"hybrid",level:3},{value:"Provenance Blockchain Node",id:"provenance-blockchain-node",level:2},{value:"Cosmovisor",id:"cosmovisor",level:3},{value:"Modules",id:"modules",level:3},{value:"Key Ring",id:"key-ring",level:3},{value:"Genesis",id:"genesis",level:3},{value:"Interacting with a Node",id:"interacting-with-a-node",level:3},{value:"Smart Contracts",id:"smart-contracts",level:2},{value:"Contract Execution Environment",id:"contract-execution-environment",level:2},{value:"Client Contracts",id:"client-contracts",level:3},{value:"Transaction Flow",id:"transaction-flow",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"major-components",children:"Major Components"}),"\n","\n","\n",(0,o.jsx)(a.Y,{text:"Provenance Blockchain facilitates the development of blockchain-based financial services via components."}),"\n",(0,o.jsx)(n.h2,{id:"application-trinity",children:"Application Trinity"}),"\n",(0,o.jsx)(n.p,{children:"Provenance Blockchain is composed of these core concepts:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Modules that implement financial services business logic. Modules are composed to realize complex financial services processes."}),"\n",(0,o.jsx)(n.li,{children:"Smart Contracting engine to develop and deploy contracts directly to the Provenance Blockchain."}),"\n",(0,o.jsx)(n.li,{children:"Off-chain client-side agreements using the Contract Execution Environment."}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"Provenance Blockchain distinguishes three types of applications based on these core concepts:"}),"\n",(0,o.jsx)(n.h3,{id:"on-chain",children:"On-Chain"}),"\n",(0,o.jsxs)(n.p,{children:["Any client application that is configured with the proper key/addresses and modules, and uses Hash tokens for service payments, can transact directly on-chain within the Provenance Blockchain ecosystem. Applications interact directly with the core ",(0,o.jsx)(n.a,{href:"/docs/pb/modules/cosmos-modules",children:"Provenance Blockchain Modules"})," and a ",(0,o.jsx)(n.a,{href:"../running-a-node/running-a-node-1/",children:"Provenance Blockchain Node"}),". Applications may implement and leverage custom ",(0,o.jsx)(n.a,{href:"/docs/pb/modules/provwasm-smart-contracts",children:"Smart Contracts "}),"specific to the business application use case."]}),"\n",(0,o.jsx)(n.h3,{id:"client-side",children:"Client-Side"}),"\n",(0,o.jsxs)(n.p,{children:["Using the client-side ",(0,o.jsx)(n.a,{href:"../../p8e/overview/",children:"Contract Execution Environment"}),", Provenance Blockchain includes functionality to encrypt and store confidential data and documents and to securely and selectively share those with other clients. Note that the on-chain immutability is extended to the off-chain data when the on-chain contract refers to those data by their hash (checksum) identifier, i.e. the cryptographic hash of the data's content. This functionality allows for off-chain transactions that optionally can complement the on-chain operations. The Contract Execution Environment is a client-hosted solution (or, optionally, hosted by a trusted service provider) that also interacts with a Provenance Blockchain Node."]}),"\n",(0,o.jsx)(n.h3,{id:"hybrid",children:"Hybrid"}),"\n",(0,o.jsx)(n.p,{children:"Financial transactions often consist of on-chain and client-side parts. For financial transactions, for example, the confidential documents supporting the transaction can be referred to by reference in the on-chain transaction. Those references point at immutable and encrypted documents that are safely stored off-chain. As part of the transaction, those confidential documents can be securely and selectively shared between the business partners. Provenance Blockchain fully supports this hybrid model, which allows for more complex financial transactions to be conducted within the Provenance Blockchain-ecosystem."}),"\n",(0,o.jsx)(n.h2,{id:"provenance-blockchain-node",children:"Provenance Blockchain Node"}),"\n",(0,o.jsxs)(n.p,{children:["A Provenance Blockchain Node is a daemon process (",(0,o.jsx)(n.code,{children:"provenanced"}),") ",(0,o.jsx)(n.a,{href:"https://docs.cosmos.network/main/core/node.html",children:"Full-Node Client"})," implementation and is the core process that runs the Provenance Blockchain. This process runs the state-machine, starting from a genesis file, and connects to peers on the network running the same client to receive and relay transactions, block proposals and signatures. Participants in the network run this process to initialize their state-machine, connect with other full-nodes and update their state-machine as new blocks come in. The blockchain full-node presents itself as the ",(0,o.jsx)(n.code,{children:"provenanced"})," binary."]}),"\n",(0,o.jsx)(n.p,{children:"Nodes in the network include:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Query nodes used by business application middleware for efficient and fast state query."}),"\n",(0,o.jsx)(n.li,{children:"Transactional nodes used by business application middleware for efficient transaction submission and event listening."}),"\n",(0,o.jsx)(n.li,{children:"Archival nodes where the pruning strategy is set to maintain all historic states."}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.a,{href:"/docs/pb/ecosystem/community/validator",children:"Validators"})," that are responsible for committing new blocks in the blockchain for which they are rewarded with gas fees (i.e. Hash). These validators participate in the consensus protocol by broadcasting votes. Validators bond their own Hash and have Hash delegated, or staked to them by Hash holders. Validators have a stake in the network."]}),"\n",(0,o.jsx)(n.li,{children:"Sentry nodes for Validator DDoS mitigation."}),"\n"]}),"\n",(0,o.jsx)(n.h3,{id:"cosmovisor",children:"Cosmovisor"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://docs.cosmos.network/main/run-node/cosmovisor.html",children:"Cosmovisor"})," is a small process manager around the Provenance Blockchain daemon process (",(0,o.jsx)(n.code,{children:"provenanced"}),") that monitors the ",(0,o.jsx)(n.a,{href:"../../ecosystem/governance/",children:"governance module"})," for ",(0,o.jsx)(n.a,{href:"/docs/pb/ecosystem/governance/software-upgrade-proposal",children:"upgrade"})," proposals. Approved upgrade proposals can be run manually or automatically to download the new code, stop the node, run the migration script, replace the node binary, and start with the a genesis file."]}),"\n",(0,o.jsx)(n.h3,{id:"modules",children:"Modules"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://docs.cosmos.network/main/building-modules/intro.html",children:"Modules"})," define the Provenance Blockchain logic. Provenance Blockchain is composed of modules from the Cosmos SDK and custom modules to support value markers and the ",(0,o.jsx)(n.a,{href:"../../p8e/overview/",children:"Contract Execution Environment"}),". Modules provide core functionality that blockchain applications need, including a ",(0,o.jsx)(n.a,{href:"https://docs.cosmos.network/main/core/baseapp.html",children:"boilerplate implementation of the ABCI"})," to communicate with the underlying consensus engine, a ",(0,o.jsx)(n.a,{href:"https://docs.cosmos.network/main/core/store.html#multistore",children:"multistore"})," to persist state, a ",(0,o.jsx)(n.a,{href:"https://docs.cosmos.network/main/core/node.html",children:"server"})," to form a full-node, and ",(0,o.jsx)(n.a,{href:"https://docs.cosmos.network/main/interfaces/interfaces-intro.html",children:"interfaces"})," to handle queries. Modules implement the bulk of the logic of financial service applications and the core does the wiring to enable modules to be composed together."]}),"\n",(0,o.jsx)(n.p,{children:"Modules can be seen as little state-machines within the state-machine. They generally define a subset of the state using one or more key-value stores and message types."}),"\n",(0,o.jsx)(n.h3,{id:"key-ring",children:"Key Ring"}),"\n",(0,o.jsxs)(n.p,{children:["To interact with the ",(0,o.jsx)(n.code,{children:"provenanced"}),' daemon, and by extension the node, a keyring that holds the private/public key pairs used to interact with a node must be established. For example, a validator key needs to be set up before running the blockchain node so that blocks can be correctly signed. The private key can be stored in different locations, called "backends", such as a file, an ',(0,o.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Hardware_security_module",children:"HSM"}),", or the operating system's own key storage. ",(0,o.jsx)(n.a,{href:"https://docs.cosmos.network/main/run-node/keyring.html",children:"Refer to the Cosmos keyring documentation for more information."})]}),"\n",(0,o.jsx)(n.h3,{id:"genesis",children:"Genesis"}),"\n",(0,o.jsxs)(n.p,{children:["Before running a node the chain is initialized via a genesis file. A default Provenance Blockchain genesis file is provided depending on the network in use (mainnet versus testnet). Refer to ",(0,o.jsx)(n.a,{href:"../running-a-node/",children:"Running a Node"})," for more information on establishing a genesis file."]}),"\n",(0,o.jsx)(n.h3,{id:"interacting-with-a-node",children:"Interacting with a Node"}),"\n",(0,o.jsxs)(n.p,{children:["There are multiple ways to interact with a node: using the CLI, using gRPC, or using the REST endpoints. With a running node, the ",(0,o.jsx)(n.code,{children:"provenanced"})," daemon process can be used as a CLI. The CLI provides functionality for signing and submitting transactions, querying, key and key ring management, as well as Module interaction. ",(0,o.jsx)(n.a,{href:"https://docs.cosmos.network/main/run-node/interact-node.html",children:"Refer to the Cosmos Interacting with the Node documentation for more information."})]}),"\n",(0,o.jsx)(n.h2,{id:"smart-contracts",children:"Smart Contracts"}),"\n",(0,o.jsxs)(n.p,{children:["The Provenance Blockchain Smart Contract engine is based on the ",(0,o.jsx)(n.a,{href:"https://docs.cosmwasm.com/docs/1.0/",children:"CosmWasm"})," smart contracting platform. It is referred to as ",(0,o.jsx)(n.code,{children:"provwasm"})," within the ecosystem. It provides a the smart contracting component of the ecosystem."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/provenance-io/provwasm",children:"ProvWasm"})," is a module within Provenance Blockchain thereby providing smart contracting support to the Provenance Blockchain chain without adjusting existing logic. Smart contracts are hosted on a running Provenance Blockchain node (",(0,o.jsx)(n.code,{children:"provenanced"}),") where they can then be used by applications. Applications connect to smart contracts in the same way as they would interact with modules: CLI, gRPC, or REST."]}),"\n",(0,o.jsx)(n.p,{children:"There are 3 phases of a ProvWasm contract that help understand how they are used:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"Upload Code: Upload the optimized smart contract (wasm) code, no state nor contract address (example Standard ERC20 contract)"}),"\n",(0,o.jsxs)(n.li,{children:["Instantiate Contract: Instantiate a code reference with some initial state, creates new address (example set token name, max issuance, etc for ",(0,o.jsx)(n.em,{children:"my"})," ERC20 token)"]}),"\n",(0,o.jsx)(n.li,{children:"Execute Contract: This may support many different calls, but they are all unprivileged usage of a previously instantiated contract, depends on the contract design (example: Send ERC20 token, grant approval to other contract)."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Provenance Blockchain Smart Contract instantiation and execution is metered and requires gas. Furthermore, both instantiation and execution allow the signer to send some tokens to the contract along with the message. Two key differences are that sending tokens directly to a contract ",(0,o.jsx)(n.em,{children:"does not trigger any contract code"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"Provenance Blockchain Smart Contract are able to leverage Provenance Blockchain Modules. This allows for the creation of complex, multi-module contracts."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"https://github.com/provenance-io/bilateral-exchange",children:"A reference bi-lateral exchange smart contract is maintained here"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"contract-execution-environment",children:"Contract Execution Environment"}),"\n",(0,o.jsxs)(n.p,{children:["The Provenance Blockchain Contact Execution Environment (BlockVault) is an optional layer on top of the Provenance Blockchain to allow single- and multi-party client-side contract execution while preserving data privacy. Provenance Blockchain client-side contracts take encrypted data from the user (client) and transform the information into encrypted data in the user\u2019s own private object store with object hashes recorded on the blockchain. BlockVault directly integrates with the ",(0,o.jsx)(n.a,{href:"/docs/pb/modules/metadata-module",children:"Provenance Blockchain Metadata Module"})," to simplify generating signed records of an asset\u2019s provenance."]}),"\n",(0,o.jsx)(n.p,{children:"Assets can be directly defined with the Metadata module, but the BlockVault execution environment assists in the complex process of hashing of data, maintenance of immutable objects, and signature orchestration between multiple parties."}),"\n",(0,o.jsx)(n.h3,{id:"client-contracts",children:"Client Contracts"}),"\n",(0,o.jsx)(n.p,{children:'Client-side contracts differ from "smart contracts" in that they keep data private between parties off-chain and thus facilitate a structure to record agreed-upon state data to the blockchain. Smart contracts, in comparison, are run directly on the blockchain and require the validators to have access to the data, which complicates many consumer-based transactions due to data privacy laws.'}),"\n",(0,o.jsx)(n.h3,{id:"transaction-flow",children:"Transaction Flow"}),"\n",(0,o.jsx)(n.p,{children:"Entities and organizations utilize the Contract Execution Environment to execute contracts creating single or multi-party agreements. Entity identity and data encryption make use of public-private key pairs. Entities are known to each other and share data with each other through their public keys. Contracts and asset data are forwarded to all entities participating in the contract by public key identifier. Entities provide an implementation of an Encrypted Object Store (EOS) where encrypted data related to their public key is stored. Contract execution consumes data from the entity EOS, and the results of the contract executions are returned to the submitting entity's execution environment. The hash sum of the Contract execution results, i.e. the cryptograph hash of its content, are submitted to the Provenance Blockchain (via the Metadata module) where they are validated and committed to the chain. Provenance Blockchain emits events notifying entities the contract has been committed on the blockchain. An index, local to the entity, is updated with the new contract information. This information is used later for searching and querying the data."}),"\n",(0,o.jsxs)(n.p,{children:["Refer to the ",(0,o.jsx)(n.a,{href:"../../p8e/overview/",children:"Contract Execution Environment"})," for information and tutorials."]})]})}function p(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},8677:(e,n,t)=>{t.d(n,{Y:()=>i});t(7294);var o=t(5893);const i=e=>{let{text:n}=e;return(0,o.jsx)("p",{className:"pb-5 mb-5 -mt-3 border-0 border-b border-b-gray-300 border-solid text-gray-500",children:n})}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var o=t(7294);const i={},a=o.createContext(i);function s(e){const n=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);