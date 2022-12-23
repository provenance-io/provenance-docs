---
sidebar_label: Digital Asset Lifecycle
---
# Financial Digital Assets


_Read more about the [Benefits of Real-World Financial Asset Tokenization](https://provenance.io/learn/posts/basics-of-real-world-financial-a)_

**Financial digital assets** are uniquely identifiable assets that are created and stored digitally, have value, and come with distinct ownership or usage rights.

The emphasis on the “digital” qualifier indicates that both the data and documents associated with the asset are entirely in digital form; for example, all documents are in PDF format and no paper copies are required.

Provenance Blockchain is uniquely positioned as a platform built specifically for the lifecycle of digital assets from origination to financing, funding, and trading. All asset classes can be issued or registered on Provenance Blockchain across multiple financial markets, including debt, equity, derivatives, and payments.


## Types of Assets

Broadly speaking, assets can be categorized into two types: unique or singular assets, such as loans, and assets that 
can be divided into equivalent parts, such as shares of stock in a share class. The web3 community has popularized 
the term “**Non-Fungible Token**”** (NFT)** for assets that are singular and unique, while using the generic 
term “**token**”  to refer to divisible (and fungible) assets, such as cryptocurrencies like Bitcoin. We'll use the term **tokenized asset**
here for clarity.

![asset types](/img/learn/asset-lifecycle/asset-types.png)


### Asset NFTs

On Provenance Blockchain, individual assets such as loans are recorded as NFTs using the [**Scope**](https://github.com/provenance-io/provenance/blob/main/proto/provenance/metadata/v1/scope.proto#L70) 
data structure defined by the [**Metadata module**](https://github.com/provenance-io/provenance/tree/main/x/metadata/spec). 
Of course, Personally-Identifying Information (PII) and other sensitive data about a customer's loan should not be 
recorded on a public blockchain. Provenance Blockchain provides a solution for keeping detailed asset data [safely
off-chain and encrypted](/docs/pb/p8e/overview/), while recording asset ownership, metadata, and history on-chain.

### Tokenized Assets

Fungible assets, such as shares of stock, are represented on Provenance Blockchain by a special type of account called
a [**Marker**](/docs/pb/modules/marker-module). The Marker module provides an ownership structure for managing tokenized value backed by assets or other tokenized units of value.

### Pooled Assets

Asset NFTs can be aggregated into pools or structures using the [**Marker**](/docs/pb/modules/marker-module) construct. 
The entire pool of assets can be managed or sold as a single entity, such as for a whole loan sales, or the pool 
can be further tokenized to represent fractional ownership in the pool, such as for a securitization.



## The Digital Asset Lifecycle

Every type of financial asset has a unique lifecycle, but the phases of digital assets can be broadly categorized into
three areas: asset issuance, asset management, and asset trading. 


![asset lifecycle](/img/learn/asset-lifecycle/lifecycle.png)
