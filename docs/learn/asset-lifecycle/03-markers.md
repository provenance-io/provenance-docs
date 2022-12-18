# Tokenized Assets

On Provenance Blockchain, all fungible assets (including cryptocurrencies, tokens, asset pools, cap tables, stablecoins, and digital money) are defined by the [**Marker module**](/docs/pb/modules/marker-module).

A Provenance Blockchain **Marker** is a flexible and nuanced container for all asset types that allows for custom configuration and administration of a blockchain token.

## Coins and Tokens

Any type of coin or token can be generated on Provenance Blockchain by crafting a Marker to control the rules governing the token.

Coin examples include [Hash](https://explorer.provenance.io/asset/nhash), the [utility token](https://docs.provenance.io/ecosystem/financial-services-blockchain/token-economics#provenance-fees-and-hash) 
of Provenance Blockchain; [USDF](https://www.usdfconsortium.com/), a bank-minted tokenized deposit; and [figureomni](https://explorer.provenance.io/asset/cfigureomni), 
a use case-specific Omnibus Bank coin (tokenized deposit).

Asset examples include private company stock, such as [figure-technologies-inc.cs.stock](https://explorer.provenance.io/asset/figure-technologies-inc.cs.stock).

![asset lifecycle](/img/learn/asset-lifecycle/marker-permissions.png)



## Asset Pools

A Marker can also represent a collection of assets, such as a pool of loans for sale. The Marker container can hold collateral or escrow, including individual NFT assets or other coins/tokens.

Markers are represented on-chain by an account with an address, just as any individual’s blockchain account. As such, it can hold in its account any asset type represented on Provenance Blockchain.

It’s important to note that in some cases, an asset pool administrator may choose to represent the asset pool token on-chain without the individual assets being minted on the blockchain. For example, a Marker may represent an Asset-Backed Security (ABS) token on the blockchain without onboarding the individual assets that the ABS comprises. The ABS token can represent the ownership and transfer of shares, and may administer waterfall payments through a smart contract, while the collateral assets remain in their system of origin.



Example Marker of an Asset-Backed Security holding four mortgages


