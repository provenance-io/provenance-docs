# Quick Start: Build a dApp

## What's a dApp?

A **dApp** is a _decentralized application_; that is, an app (web or mobile) that talks to a blockchain. 

A key feature of a dApp is the ability for a user to connect their wallet as their identity and authentication mechanism. Any actions
the user takes through the dApp are sent back to the user's wallet app for the user to approve, sign, and submit their
transaction directly to the blockchain.

![dApp architecture](/img/quick-start/dapp-architecture.png)

## dApp Components

A typical Provenance Blockchain dApp will:

- Use the [Wallet Connect v2](https://docs.walletconnect.com/2.0/) protocol to communicate with the user's wallet of choice

- Use the Provenance [walletconnect-js library](https://github.com/provenance-io/walletconnect-js)

- Read and write data using [Google Protocol Buffers](https://developers.google.com/protocol-buffers) and [Provenance Proto docs](https://github.com/provenance-io/provenance/blob/main/docs/proto-docs.md)

- Communicate with the blockchain through the Provenance and Cosmos [GRPC](https://grpc.io/) Services (APIs), examples including:
  - Provenance [Attribute Query Serivce](https://github.com/provenance-io/provenance/blob/main/docs/proto-docs.md#provenance.attribute.v1.Query) for querying KYC/AML attributes for a user account 
  - Provenance [Marker Msg Service](https://github.com/provenance-io/provenance/blob/main/docs/proto-docs.md#provenance.marker.v1.Msg) for creating new tokens
  - Cosmos [Bank Msg Service](https://buf.build/cosmos/cosmos-sdk/docs/main:cosmos.bank.v1beta1) for sending coins/tokens to another account

- Make use of the [P8e CEE data privacy system](/docs/pb/p8e/overview/) for [PII](https://www.investopedia.com/terms/p/personally-identifiable-information-pii.asp) data that needs to stay off-chain
  

## Resources

- Browse [our Tutorials](/docs/build/tutorials)
- Read one developer's journey to [Building Your First dApp](https://medium.com/provenanceblockchain/building-your-first-dapp-5679c07d1983)
- Read how to [Add WalletConnect functionality to your dApp lightning fast ⚡](https://medium.com/provenanceblockchain/creating-dapps-via-walletconnect-js-658268c8d549)
- The [How-to-Provenance](https://github.com/provenance-io/how-to-provenance) GitHub repo contains examples of most types of operations you might perform on Provenance Blockchain
- [Provenance Create React App template](https://github.com/provenance-io/create-provenance-app-template) is a quick way to create a web-based dApp
- [GRPCurl examples](https://github.com/provenance-io/provenance/blob/main/docs/grpcurl.md)
- [JVM (Java/Kotlin) GRPC client](https://github.com/provenance-io/pb-grpc-client-kotlin)