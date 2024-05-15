# Quick Start: Write a Smart Contract

Smart Contracts on Provenance Blockchain are written in [**Rust**](https://www.rust-lang.org/) and are executed using the
[**ProvWasm**](https://github.com/provenance-io/provwasm) smart contracting platform. ProvWasm is an extension of the
[CosmWasm](https://cosmwasm.com/) environment and includes bindings for [Provenance Modules](/docs/pb/modules).
The ProvWasm/CosmWasm platform allows smart contracts to be executed in
[WebAssembly (WASM) virtual machines (VMs) in the Cosmos SDK](https://interchain-io.medium.com/virtual-machines-take-off-in-the-cosmos-3d11bd6ae942).

## Get Started

- We recommend following the [**ProvWasm Tutorial**](https://github.com/provenance-io/provwasm/blob/main/docs/tutorial/01-overview.md),
  which will walk you through the process of building and deploying a smart contract step-by-step.

- Read through the [**ProvWasm Documentation**](/docs/sdk/z-smart-contracts/).

- If you are new to the Rust programming language, the [Rust Book](https://doc.rust-lang.org/book/) is an excellent resource.

- Read about one developer's experience learning Provenance smart contracts in
  [_Going from Zero to De Niro — Building a Provenance smart contract when you know NOTHING_](https://medium.com/provenanceblockchain/going-from-zero-to-de-niro-building-a-provenance-smart-contract-when-you-know-nothing-19a676430bfb)

- Browse the [**Provenance Smart Contract Catalog**](/docs/discover/smart-contract-catalog.md) for examples that may be
  similar to your use case.

- The [How-To-Provenance](https://github.com/provenance-io/how-to-provenance) GitHub repo contains more useful
  cases, including examples of:
  - [How to execute a contract](https://github.com/provenance-io/how-to-provenance/tree/main/bilateral-trade-example)
  - [How to build and deploy a contract](https://github.com/provenance-io/how-to-provenance/tree/main/provenance-smart-contract-example)
  - [How to migrate a contract for a blockchain upgrade](https://github.com/provenance-io/how-to-provenance/tree/main/provenance-contract-migration-example)
