# Assets on Provenance Blockchain


_Read more about the [Benefits of Real-World Financial Asset Tokenization](https://provenance.io/learn/posts/basics-of-real-world-financial-a)_

**Financial digital assets** are unique, digital representations of valuable assets with defined ownership or 
usage rights. Unlike traditional physical assets, financial digital assets exist solely in digital form and 
their associated data and documents are all in digital format, such as PDF, without the need for paper copies.

**Provenance Blockchain** is a platform designed to support the entire **lifecycle** of financial digital assets, from 
creation to financing, funding, and trading. This platform is specifically designed to accommodate a wide range of 
asset classes, including debt, equity, derivatives, and payments, and can be used across multiple financial markets. 
The platform offers a streamlined, secure, and efficient way to manage financial digital assets, providing 
end-to-end support from origination to trading.

----

## Types of Assets

Assets can be broadly classified into two categories: unique or singular assets and divisible assets. Unique 
assets, such as loans, are one-of-a-kind and cannot be divided into smaller units or replaced by equivalent 
units. On the other hand, divisible assets, such as shares of stock in a particular class, can be divided into 
equivalent parts.

The web3 community has popularized the use of specific terminology to distinguish between these two types of 
assets. "**Non-Fungible Tokens**" (NFTs) are used to describe unique and singular assets, while the generic term "**token**" is 
used to refer to divisible and fungible assets, such as cryptocurrencies like Bitcoin. We'll use the term "**tokenized asset**"
here to represent an asset whose ownership is represented by a corresponding token, allowing fractionalized ownership
of the asset.

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
