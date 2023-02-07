# Financial NFTs 

Single-asset NFTs are represented on Provenance Blockchain using the [Metadata module](https://docs.provenance.io/modules/metadata-module).

The Metadata module was designed to work in conjunction with Provenance Blockchain’s [Client Execution Environment](https://docs.provenance.io/p8e/overview) (CEE), whose purpose is to control and reason about asset-specific data off-chain while using the blockchain for recording an immutable history of the asset data and metadata on-chain. This powerful capability provides data privacy for Personally Identifying Information (PII) and other Non-Public Information (NPI).

Usage of the CEE is an optional extension to the Provenance Blockchain, and asset NFTs may be minted directly on-chain without using the CEE.
  

## Anatomy of an NFT 

An NFT on Provenance Blockchain is defined by the [Scope](https://docs.provenance.io/modules/metadata-module#scope-data-structures) data structure.

![nft](/img/learn/asset-lifecycle/nft.png)

<br/>

Two unique aspects of Provenance NFTs include:



* **Extensible Record Container **- Multiple data records can be associated with a Provenance NFT, including individual record evolution and permissioning.
* **Multi-party Ownership** - allowing a distinction between the Value Owner of an NFT, the party entitled to the financial value of the asset, and one or more Data Owners who may have the right or obligation to maintain the data backing the NFT. This nuance allows NFTs to have multiple participants in the roles of investors, controllers, and servicers, for example. Further parties can be permissioned with read-only data access, for example granting data viewing to another party or dApp, such as an exchange.


## Data Privacy

The goals of having publicly-readable blockchain data while maintaining data privacy may at first seem incompatible. In transacting with other parties using our data, and cannot assume other parties will just “trust” the data we show them. We need to be able to prove that the asset data is the truth.

The Provenance Blockchain Contract Execution Environment (CEE) was created to be able to reason about private data in an off-chain, smart contract-like way without leaking data publicly. We achieve this magic trick by “fingerprinting” the asset data using well-known [hashing algorithms](https://www.investopedia.com/terms/h/hash.asp) and recording the resulting hash (checksum or fingerprint) of the data directly on the blockchain. This allows any party to later independently verify that the data they were given has not been altered in any way since the data fingerprint was recorded on-chain.

Provenance Blockchain’s NFT structure allows one to record not only the fingerprints of multiple data records associated with the NFT, but can also record the details of a CEE contract execution mutating the NFT data. This means that the blockchain will record the fingerprint of the data prior to the code execution, the fingerprints of additional input data to the contract code, the fingerprint of the output data records, and the unique fingerprint signature of the code that was executed.

Having all these hashes recorded on the blockchain for the NFT can allow anyone to later prove exactly what the data was, how it mutated, and what code was executed to change the NFT data, without disclosing the data publicly.

<br/>

![nft](/img/learn/asset-lifecycle/cee.png)



The CEE is particularly powerful when contract execution involves multiple parties that may prefer verification of truth over trust (ie. parties no longer require explicit trust or third-party participation to ensure trust). During the contract execution, each party’s CEE can independently verify that the copy of the data it holds matches the hash of the data last recorded on-chain. If the hashes don’t match what is on the blockchain, the contract execution will fail.


## Data Structures



On the Provenance Blockchain, data structures are encoded as [Google Protocol Buffers](https://developers.google.com/protocol-buffers). The onboarding API consumes a generic `Asset` protobuf, which can contain any type of NFT or digital asset. The components parts of the `Asset` are:



<table>
  <tr>
   <td><code>id</code>
   </td>
   <td>An unique identifier in the <a href="https://en.wikipedia.org/wiki/Universally_unique_identifier#:~:text=A%20universally%20unique%20identifier%20(UUID,%2C%20for%20practical%20purposes%2C%20unique.">UUID format</a>
   </td>
  </tr>
  <tr>
   <td><code>type</code>
   </td>
   <td>A broadly-generic “type” of the asset, such as “LOAN”, “FUND”, or “TITLE”. This field is typically used to identify the type of asset to Provenance-based applications.
   </td>
  </tr>
  <tr>
   <td><code>description</code>
   </td>
   <td>A brief description of the asset
   </td>
  </tr>
  <tr>
   <td><code>key-value map</code>
   </td>
   <td>A dictionary of string-value pairs, mapping a field name to its data value. The data value is encoded as a <a href="https://developers.google.com/protocol-buffers/docs/proto3#any">protobuf Any</a>, allowing for any type of data structure.
   </td>
  </tr>
</table>

<br/>

```protobuf title="Asset proto definition"
syntax = "proto3";

package tech.figure.asset;

import "google/protobuf/any.proto";

message Asset {

  string                           id          = 1; // Required UUID identifier for this asset
  string                           type        = 2; // Optional user-defined type (e.g. LOAN, ART, FUND, SHARE CLASS)
  string                           description = 3; // Optional user-defined description, title, name, etc. for display
  map<string, google.protobuf.Any> kv          = 4; // Key-value store of asset data

}
```


The NFT Onboarding API consumes protobufs serialized to [JSON](https://www.json.org/json-en.html) format. Note in particular that the `Any` protobuf JSON representation consists of a `typeUrl` followed by the normal JSON representation of the data proto `Message`.







