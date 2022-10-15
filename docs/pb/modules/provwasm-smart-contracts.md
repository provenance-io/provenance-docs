# Smart Contracts (ProvWasm)

import { DocSubheader } from '/docs/components/DocSubheader';

<DocSubheader text="Web assembly (Wasm) smart contracts for the Provenance Blockchain." />

## Overview

ProvWasm contains extensions for a third party blockchain module. These extensions, combined with a library, provide developers the ability to create web assembly smart contracts for the Provenance Blockchain using the Rust programming language.

### Blockchain Extensions

The CosmWasm VM only integrates with the `banking` and `staking` modules by default. However, it allows for adding custom encoders and queriers. A package was added in the Provenance Blockchain that contain extensions for the following Provenance Blockchain modules:

- [Account](account.md)
- [Marker](marker-module.md)
- [Name](name-module.md)
- [Metadata](metadata-module.md) - NOTE: Not yet implemented

These extensions are compiled into the blockchain at build time.

## Rust Bindings

In order to provide a high quality smart contract developer experience, a Rust [library](https://github.com/provenance-io/provwasm) was created to simplify calls to the Provenance Blockchain extensions.

The library can be broken down into the following components.

### Parameters

The core of the rust library contains types that are passed to and received from Provenance Blockchain encoders and queriers. Special care must be taken to ensure the Rust types are compatible with Go types in the queriers and encoders. To support this, a semantic data format version is passed through with each message. This enables backward compatability in the blockchain extensions.

### API

A number of high-level functions and types were added to on top of the core parameters to simplify contract development. This will also provide a compatability layer - minimizing changes required to smart contracts when breaking changes are required in the blockchain extensions and core types.

### Mocks

One of the benefits of ProvWasm is that it allows for robust unit testing of smart contracts before deployment to the Provenance Blockchain. Using the types described above, a mock environment can be created so unit tests can run as if they are executing against a running blockchain. This allows developers to ensure their contracts are correct before having to pay fees to deploy to a network.

### Integrations

To ensure the library code works correctly with the blockchain extensions, smart contracts were developed for each custom module in provenance. These contracts can be deployed to a localnet \(or the testnet\) for integration testing.

## Status

:::info
**ProvWasm is alpha software. Use with caution.**
:::

There is no guaranteed migration path for smart contracts deployed to provenance, not even "dump state and restart" to move to future versions.

## References

Smart contract technical reference documentation

- [CosmWasm](https://docs.cosmwasm.com/)
- [CosmWasm CosmosSDK Integration](https://github.com/CosmWasm/wasmd/blob/master/INTEGRATION.md).
- [WebAssembly Smart Contracts for the Cosmos SDK](https://github.com/CosmWasm/cosmwasm/blob/master/README.md)
- [Go-CosmWasm Spec](https://github.com/CosmWasm/go-cosmwasm/blob/master/spec/Index.md)
- [CosmWasm Module Source](https://github.com/CosmWasm/wasmd/tree/master/x/wasm)
- [Defining WASM Entry Points](https://github.com/CosmWasm/cosmwasm/blob/master/EntryPoints.md)
