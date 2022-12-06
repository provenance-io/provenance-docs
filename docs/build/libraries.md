---
sidebar_position: 3
---

# Libraries and APIs

This page comprised a large list of libraries and APIs currently available or under development. We recommend using this resource as a starting point before development to find projects that match your own, and use the existing examples to simplify your efforts. These resources may also connect you with developers who you can interact with via slack or discord. Stay tuned, as more ongoing projects will be added here continuously!

## APIs

| Resource                                                                                                         | Description                                                     |
| ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| https://github.com/provenance-io/provenance/blob/main/docs/proto-docs.md#provenance/attribute/v1/attribute.proto | API for the [Attribute Module](/docs/pb/modules/account)        |
| https://github.com/provenance-io/provenance/blob/main/docs/proto-docs.md#provenance/marker/v1/accessgrant.proto  | API for the [Marker Module](/docs/pb/modules/marker-module)     |
| https://github.com/provenance-io/provenance/blob/main/docs/proto-docs.md#provenance/metadata/v1/events.proto     | API for the [Metadata module](/docs/pb/modules/metadata-module) |
| https://github.com/provenance-io/provenance/blob/main/docs/proto-docs.md#provenance/msgfees/v1/msgfees.proto     | API for the MsgFees Module                                      |
| https://github.com/provenance-io/provenance/blob/main/docs/proto-docs.md#provenance/name/v1/name.proto           | API for the [Name Module](/docs/pb/modules/name-module)         |
| https://github.com/provenance-io/provenance/blob/main/docs/proto-docs.md#provenance/reward/v1/reward.proto       | API for the Rewards Module                                      |
| https://buf.build/cosmos/cosmos-sdk/docs/main                                                                    | Cosmos API Documentation                                        |
| https://docs.tendermint.com/v0.34/rpc/                                                                           | Tendermint API Documentation                                    |

## Asset Management

| Resource                             | Description                                                                                  |
| ------------------------------------ | -------------------------------------------------------------------------------------------- |
| https://test.figure.tech/docs/asset/ | Guide on storing discrete digital assets on the Provenance blockchain as Non-Fungible Tokens |

### Onboarding

| Resource                                                  | Description                                                       |
| --------------------------------------------------------- | ----------------------------------------------------------------- |
| https://github.com/provenance-io/service-asset-onboarding | Onboarding assets to the Provenance Blockchain via multiple means |

### Management

| Resource                               | Description                                                                                     |
| -------------------------------------- | ----------------------------------------------------------------------------------------------- |
| https://test.figure.tech/docs/manager/ | Introduction and guide to organizing, structuring, and attaching assets to digital marketplaces |

### Marketplace

| Resource                                   | Description                                                                              |
| ------------------------------------------ | ---------------------------------------------------------------------------------------- |
| https://test.figure.tech/docs/marketplace/ | Provides functionality to enable digital asset transactions on the Provenance Blockchain |

### Pricing

| Resource                                      | Description                                                                                 |
| --------------------------------------------- | ------------------------------------------------------------------------------------------- |
| https://test.figure.tech/docs/pricing-engine/ | Figure Tech service providing the ability to assign a value to a Provenance marker or scope |

## Data and Business Intelligence

| Resource                                           | Description                                                                                                                                                                                                   |
| -------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| https://test.figure.tech/docs/block-api/           | Block API - Layer two "cache" API to retrieve blockchain data                                                                                                                                                 |
| https://github.com/provenance-io/event-stream      | Event Stream - blockchain event listener                                                                                                                                                                      |
| https://github.com/provenance-io/aggregate-service | Aggregator - Aggregate data to support business decisions<br/>[Blog post on using Aggregator](https://medium.com/provenanceblockchain/aggregating-provenance-blockchain-data-a-developers-story-a23972971287) |
| https://github.com/provenance-io/explorer-service  | Explorer Service - API for the Provenance Blockchain Explorer containing aggregate and cached data                                                                                                            |

## Data Privacy and Off-Chain Data Storage

### p8e Contracts

| Resource                                                                                                          | Description                                                                                |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| [Off-Chain P8e Contracts & SDK](https://medium.com/provenanceblockchain/off-chain-p8e-contracts-sdk-ac313e40c9c7) | An introduction and tutorial on Provenance Blockchain's off-chain SDK, published on Medium |

### Object Store

| Resource                                      | Description                                                                     |
| --------------------------------------------- | ------------------------------------------------------------------------------- |
| https://github.com/provenance-io/object-store | An object storage system with a gRPC interface and strong encryption properties |

### Client Side Contract Execution

| Resource                                                | Description                                                                                        |
| ------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| https://github.com/provenance-io/loan-package-contracts | Defines a loan package scope specification and p8e smart contracts that can be executed against it |
| https://github.com/provenance-io/object-store           | A object storage system with a gRPC interface and strong encryption properties                     |
| https://github.com/provenance-io/object-store-locator   | Object store locator service                                                                       |
| https://github.com/provenance-io/p8e                    | Optional layer that allows client-side contract execution with data privacy                        |
| https://github.com/provenance-io/p8e-cee-api            | Provenance Contract Execution Environment API                                                      |
| https://github.com/provenance-io/p8e-docker-compose     | Supporting tools for rapid p8e test environment deployment                                         |
| https://github.com/provenance-io/p8e-gradle-plugin      | Allows for publishing p8e Contracts against a p8e environment                                      |
| https://github.com/provenance-io/p8e-scope-sdk          | Development kit for interacting with the Provenance Blockchain metadata module                     |
| https://github.com/provenance-io/p8e-ui                 | Simple UI for p8e development                                                                      |

### Data Models

| Resource                                              | Description                                                                                                             |
| ----------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| https://github.com/provenance-io/metadata-asset-model | protobuf data model reference standard for Provenance Blockchain Metadata module and P8e Contract Execution Environment |

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
| https://test.figure.tech/walletconnect                              | Example WalletConnect dApp                                                |
| https://github.com/provenance-io/wallet-utils                       | Typescript Utils to create wallet messages - protos, build messages       |

## Scripts and Utilities

| Resource                                 | Description                                                                   |
| ---------------------------------------- | ----------------------------------------------------------------------------- |
| https://github.com/provenance-io/scripts | Multiple scripts to assist in Provenance Blockchain development and debugging |

## Smart Contracts

> Read the [Smart Contract Catalog](/docs/discover/smart-contract-catalog)

| Resource                                | Description                                                                                                                                                          |
| --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| https://github.com/provenance-io/wasmd  | Hosts Wasmd, the first implementation of a cosmos zone with wasm smart contracts enabled                                                                             |
| https://github.com/provenance-io/wasmit | A Go lib for building integration test commands that store, instantiate, execute and query smart contracts on a Provenance localnet using the command line.          |
| https://github.com/provenance-io/wasmvm | This is a wrapper around the CosmWasm VM. It allows you to compile, initialize and execute CosmWasm smart contracts from Go applications, in particular from x/wasm. |

## Third Party APIs

| Resource                                                | Description                                                                 |
| ------------------------------------------------------- | --------------------------------------------------------------------------- |
| https://pay.test.figure.com/pay/docs/index.html#/       | Figure Pay Partner API guide                                                |
| https://test.figure.tech/docs/apis/marketplace/         | Figure Marketplace API guide                                                |
| https://test.figure.tech/docs/apis/onboard/#tag/Assets  | Figure Asset Onboarding API guide                                           |
| https://test.figure.tech/docs/apis/documents/           | Figure document filling, mapping, and signature storage for dApps API guide |
| https://test.figure.tech/docs/apis/asset-manager/       | Figure Asset Manager API guide                                              |
| https://test.figure.tech/docs/apis/portfolio-manager/   | Figure Portfolio Manager API guide                                          |
| https://test.figure.tech/docs/apis/pricing-engine/      | Figure Pricing Engine API guide                                             |
| https://test.figure.tech/docs/apis/provenance-explorer/ | Provenance Explorer API guide                                               |
| https://test.figure.tech/docs/apis/block-api/           | Figure Block API guide                                                      |
