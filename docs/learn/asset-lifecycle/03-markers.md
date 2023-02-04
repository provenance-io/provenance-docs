# Tokenized Assets

Asset tokenization is the process of converting rights to an asset into a digital token on a blockchain, allowing the 
asset to be easily transferable, fractional, and tradable on various markets. This includes tangible assets like 
real estate, fine art, and even commodities, as well as intangible assets such as intellectual property, 
investment funds, and others. The tokenization process helps to increase the liquidity of these assets, as well as 
making them more accessible to a wider range of investors.

Real World Assets (RWA) refers to tangible or intangible assets that have value and can be traded, bought, or sold. 
Examples of RWAs include:

- Physical assets such as real estate, commodities, and personal property
- Financial assets such as stocks, bonds, and bank deposits
- Intellectual property such as patents, trademarks, and copyrights
- Natural resources such as oil, gold, and timber



Just like cryptocurrencies, tokenized assets can be bought, traded, and held in digital wallets by individuals or managed by an investment platform.

On Provenance Blockchain, all fungible assets (including cryptocurrencies, tokens, asset pools, cap tables, 
stablecoins, and digital money) are defined by the [**Marker module**](/docs/pb/modules/marker-module).
A Provenance Blockchain **Marker** is a flexible and nuanced container for all asset types that allows for 
custom configuration and administration of a blockchain token.

![marker structure](/img/learn/asset-lifecycle/marker-token-coin.png)


**Marker:** A special type of token that is based on a contract stored on a blockchain. This contract outlines the
ownership of an asset and the rules for how it can be used. A marker works like a digital agreement, automatically
executing the agreed-upon rules without the need for additional paperwork.


**Token:** A type of digital asset that represents a specific value on a blockchain. Tokens are expressed in coins,
and the rules for how they can be used, such as how many are in circulation, are defined in advance.


**Coin:** A digital representation of value that can be transferred from one person to another. Coins have a unique 
name, and their value is expressed as a whole number. Sending coins is as simple as a one-way transaction and requires 
only a signature from the sender to confirm the transfer. Each coin is fungible, meaning that each coin is 
indistinguishable from another and can be replaced by another unit of equal value.

## Coins and Tokens



Any type of coin or token can be generated on Provenance Blockchain by crafting a Marker to control the rules governing the token.

Coin examples include [Hash](https://explorer.provenance.io/asset/nhash), the [utility token](https://docs.provenance.io/ecosystem/financial-services-blockchain/token-economics#provenance-fees-and-hash) 
of Provenance Blockchain; [USDF](https://www.usdfconsortium.com/), a bank-minted tokenized deposit; and [figureomni](https://explorer.provenance.io/asset/cfigureomni), 
a use case-specific Omnibus Bank coin (tokenized deposit).

Asset examples include private company stock, such as [figure-technologies-inc.cs.stock](https://explorer.provenance.io/asset/figure-technologies-inc.cs.stock).

![asset lifecycle](/img/learn/asset-lifecycle/marker-permissions.png)

## Restricted Token Trading

## Asset Pools

A Marker can also represent a collection of assets, such as a pool of loans for sale. The Marker container can hold collateral or escrow, including individual NFT assets or other coins/tokens.

Markers are represented on-chain by an account with an address, just as any individual’s blockchain account. As such, it can hold in its account any asset type represented on Provenance Blockchain.

It’s important to note that in some cases, an asset pool administrator may choose to represent the asset pool token on-chain without the individual assets being minted on the blockchain. For example, a Marker may represent an Asset-Backed Security (ABS) token on the blockchain without onboarding the individual assets that the ABS comprises. The ABS token can represent the ownership and transfer of shares, and may administer waterfall payments through a smart contract, while the collateral assets remain in their system of origin.



Example Marker of an Asset-Backed Security holding four mortgages


