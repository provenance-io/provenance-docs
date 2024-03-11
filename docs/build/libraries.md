---
sidebar_position: 3
---

# Libraries and APIs

This page comprised a large list of libraries and APIs currently available. We recommend using this resource as a starting point before development to find projects that match your own, and use the existing examples to simplify your efforts.
These resources may also connect you with developers who you can interact with via Slack or Discord. Stay tuned, as more ongoing projects will be added here continuously!

## Provenance Blockchain APIs

| Resource                                                                                                                                                                                                                                                                                                                                                                                                        | Description                                                                                        |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| [Attribute](https://github.com/provenance-io/provenance/blob/main/docs/proto-docs.md#provenance.attribute.v1.Attribute) <br/> [Attribute Tx Messages](https://github.com/provenance-io/provenance/blob/main/docs/proto-docs.md#provenance/attribute/v1/tx.proto) <br/> [Query Attribute Messages](https://github.com/provenance-io/provenance/blob/main/docs/proto-docs.md#provenance/attribute/v1/query.proto) | API for the [Attribute Module](/docs/pb/modules/attribute-module)                                  |
| [MarkerAccount](https://github.com/provenance-io/provenance/blob/main/docs/proto-docs.md#provenance.marker.v1.MarkerAccount) <br/> [Marker Tx Messages](https://github.com/provenance-io/provenance/blob/main/docs/proto-docs.md#provenance/marker/v1/tx.proto) <br/> [Query Marker Messages](https://github.com/provenance-io/provenance/blob/main/docs/proto-docs.md#provenance/marker/v1/query.proto)        | API for the [Marker Module](/docs/pb/modules/marker-module)                                        |
| [Scope (NFT)](https://github.com/provenance-io/provenance/blob/main/docs/proto-docs.md#provenance.metadata.v1.Scope) <br/> [Metadata Tx Messages](https://github.com/provenance-io/provenance/blob/main/docs/proto-docs.md#provenance/metadata/v1/tx.proto) <br/> [Query Metadata Messages](https://github.com/provenance-io/provenance/blob/main/docs/proto-docs.md#provenance/metadata/v1/query.proto)        | API for the [Metadata Module](/docs/pb/modules/metadata-module)                                    |
| [MsgFee](https://github.com/provenance-io/provenance/blob/main/docs/proto-docs.md#provenance.msgfees.v1.MsgFee) <br/> [MsgFees Tx Messages](https://github.com/provenance-io/provenance/blob/main/docs/proto-docs.md#provenance/msgfees/v1/tx.proto) <br/> [Query MsgFees Messages](https://github.com/provenance-io/provenance/blob/main/docs/proto-docs.md#provenance/msgfees/v1/query.proto)                 | API for the [Msgfees Module](https://github.com/provenance-io/provenance/tree/main/x/msgfees/spec) |
| [NameRecord](https://github.com/provenance-io/provenance/blob/main/docs/proto-docs.md#provenance.name.v1.NameRecord) <br/> [Name Tx Messages](https://github.com/provenance-io/provenance/blob/main/docs/proto-docs.md#provenance/name/v1/tx.proto) <br/> [Query Name Messages](https://github.com/provenance-io/provenance/blob/main/docs/proto-docs.md#provenance/name/v1/query.proto)                        | API for the [Name Module](/docs/pb/modules/name-module)                                            |
| [RewardProgram](https://github.com/provenance-io/provenance/blob/main/docs/proto-docs.md#provenance.reward.v1.RewardProgram) <br/> [Reward Tx Messages](https://github.com/provenance-io/provenance/blob/main/docs/proto-docs.md#provenance/reward/v1/tx.proto) <br/> [Query Reward Messages](https://github.com/provenance-io/provenance/blob/main/docs/proto-docs.md#provenance/reward/v1/query.proto)        | API for the [Reward Module](https://github.com/provenance-io/provenance/tree/main/x/reward/spec)   |
| https://buf.build/cosmos/cosmos-sdk/docs/main                                                                                                                                                                                                                                                                                                                                                                   | Cosmos API Documentation                                                                           |
| https://docs.tendermint.com/main/rpc/                                                                                                                                                                                                                                                                                                                                                                           | Tendermint API Documentation                                                                       |

## Data and Business Intelligence

| Resource                                           | Description                                                                                                                                                                                                   |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| https://github.com/provenance-io/event-stream      | Event Stream - blockchain event listener                                                                                                                                                                      |
| https://github.com/provenance-io/aggregate-service | Aggregator - Aggregate data to support business decisions<br/>[Blog post on using Aggregator](https://medium.com/provenanceblockchain/aggregating-provenance-blockchain-data-a-developers-story-a23972971287) |
| https://github.com/provenance-io/explorer-service  | Explorer Service - API for the Provenance Blockchain Explorer containing aggregate and cached data                                                                                                            |

## Data Privacy and Off-Chain Data Storage

### BlockVault Contracts

| Resource                                                                                                                 | Description                                                                                |
| ------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| [Off-Chain BlockVault Contracts & SDK](https://medium.com/provenanceblockchain/off-chain-p8e-contracts-sdk-ac313e40c9c7) | An introduction and tutorial on Provenance Blockchain's off-chain SDK, published on Medium |

### Object Store

| Resource                                      | Description                                                                     |
| --------------------------------------------- | ------------------------------------------------------------------------------- |
| https://github.com/provenance-io/object-store | An object storage system with a gRPC interface and strong encryption properties |

### Client Side Contract Execution

| Resource                                                | Description                                                                                               |
| ------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| https://github.com/provenance-io/loan-package-contracts | Defines a loan package scope specification and BlockVault smart contracts that can be executed against it |
| https://github.com/provenance-io/object-store           | A object storage system with a gRPC interface and strong encryption properties                            |
| https://github.com/provenance-io/object-store-locator   | Object store locator service                                                                              |
| https://github.com/provenance-io/p8e                    | Optional layer that allows client-side contract execution with data privacy                               |
| https://github.com/provenance-io/p8e-cee-api            | Provenance Contract Execution Environment API                                                             |
| https://github.com/provenance-io/p8e-docker-compose     | Supporting tools for rapid BlockVault test environment deployment                                         |
| https://github.com/provenance-io/p8e-gradle-plugin      | Allows for publishing BlockVault Contracts against a BlockVault environment                               |
| https://github.com/provenance-io/p8e-scope-sdk          | Development kit for interacting with the Provenance Blockchain metadata module                            |
| https://github.com/provenance-io/p8e-ui                 | Simple UI for BlockVault development                                                                      |

### Data Models

| Resource                                              | Description                                                                                                                    |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| https://github.com/provenance-io/metadata-asset-model | protobuf data model reference standard for Provenance Blockchain Metadata module and BlockVault Contract Execution Environment |

## Docker Images

| Resource                              | Description                                                                                          |
| ------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| https://hub.docker.com/u/provenanceio | A docker hub website with twenty downloadable provenance docker images to help kickstart development |

## Example dApps

> Read the [dApps](/docs/quick-start/build-a-dapp) page

| Resource                                                                               | Description                    |
| -------------------------------------------------------------------------------------- | ------------------------------ |
| https://github.com/provenance-io/how-to-provenance/tree/main/name-service-dapp-example | A serverless Name Service dApp |

## IBC

| Resource                                 | Description                                                                                                             |
| ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| https://github.com/provenance-io/relayer | a basic relayer implementation that is meant for users wishing to relay packets/data between sets of IBC enabled chains |
| https://github.com/provenance-io/ibc     | Contracts, utilities, andother utilities needed for ibc                                                                 |
| https://github.com/provenance-io/ibc-go  | Provenance version of the IBC protocol in Golang                                                                        |

## Key Management and Wallets

> Read the [Wallets](/docs/discover/wallets.md) page

| Resource                                                            | Description                                                               |
| ------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| https://github.com/provenance-io/originator-key-access-lib          | Generic approach to fetching access-controlled keys for Provenance.       |
| https://github.com/provenance-io/provenance-dart                    | Provenance Mobile Wallet app source code - Flutter/Dart - iOS and Android |
| https://github.com/provenance-io/provwallet-swift                   | R&D iOs mobile app                                                        |
| https://github.com/provenance-io/walletconnect-js                   | WalletConnect client for dApps                                            |
| https://github.com/provenance-io/walletconnect-js/tree/main/webDemo | Example React dApp using WalletConnect                                    |
| https://github.com/provenance-io/wallet-utils                       | Typescript Utils to create wallet messages - protos, build messages       |

## Scripts and Utilities

| Resource                                 | Description                                                                   |
| ---------------------------------------- | ----------------------------------------------------------------------------- |
| https://github.com/provenance-io/scripts | Multiple scripts to assist in Provenance Blockchain development and debugging |

## Smart Contracts

> Browse the [Smart Contract Catalog](/docs/discover/smart-contract-catalog)

| Resource                                | Description                                                                                                                                                          |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| https://github.com/provenance-io/wasmd  | Hosts Wasmd, the first implementation of a cosmos zone with wasm smart contracts enabled                                                                             |
| https://github.com/provenance-io/wasmit | A Go lib for building integration test commands that store, instantiate, execute and query smart contracts on a Provenance localnet using the command line.          |
| https://github.com/provenance-io/wasmvm | This is a wrapper around the CosmWasm VM. It allows you to compile, initialize and execute CosmWasm smart contracts from Go applications, in particular from x/wasm. |
