# Tokenized Assets

Asset tokenization is the process of converting rights to an asset into a digital token on a blockchain, allowing the 
asset to be easily transferable, fractional, and tradable on various markets. This includes tangible assets like 
real estate, fine art, and even commodities, as well as intangible assets such as intellectual property, 
investment funds, and others. The tokenization process helps to increase the liquidity of these assets, as well as 
making them more accessible to a wider range of investors.

**Real World Assets** (RWA) refer to tangible or intangible assets that have value and can be traded, bought, or sold. 
Examples of RWAs include:

- Physical assets such as real estate, commodities, and personal property
- Financial assets such as stocks, bonds, and bank deposits
- Intellectual property such as patents, trademarks, and copyrights
- Natural resources such as oil, gold, and timber

Just like cryptocurrencies, tokenized assets can be bought, traded, and held in digital wallets by individuals or managed by an investment platform.

On Provenance Blockchain, all tokenized assets (including cryptocurrencies, tokens, asset pools, cap tables, 
stablecoins, and digital money) are defined by the [**Marker module**](/docs/pb/modules/marker-module).
A Provenance Blockchain **Marker** is a flexible and nuanced container for all asset types that allows for 
custom configuration and administration of an asset token.

![marker structure](/img/learn/asset-lifecycle/marker-token-coin.png)


**Marker:** A special type of account (having its own address ) that can directly represent an asset or can hold other assets as 
collateral/escrow. Ownership of the Marker asset is divided into fractional parts represented by a token. The actions and 
rules of the Marker can be automated and monitored by one or more smart contracts.

**Token:** A type of digital asset that represents a specific value on a blockchain. Tokens are expressed in coins,
and the rules for how they can be used, such as how many are in circulation, are defined in advance. 
Tokens are designed with specific rules that govern their supply and access control permissions,
providing a more comprehensive and sophisticated representation of value and ownership.


**Coin:** A digital representation of unit value that can be transferred from one person to another. Coins have a unique 
name, and their value is expressed as a whole number. Sending coins is as simple as a one-way transaction and requires 
only a signature from the sender to confirm the transfer. Each coin is fungible, meaning that each coin is 
indistinguishable from another and can be replaced by another unit of equal value.

A Marker has its own [lifecycle](https://docs.provenance.io/modules/marker-module#state-transitions) represented by a 
finite state machine. A Marker is ready to use when it reaches the `Active` state.

## Coins and Tokens
On Provenance Blockchain, a Marker can be created to govern the rules of any type of coin or token. 
This allows for the generation of a customized and controlled digital asset.

Coin examples include [Hash](https://explorer.provenance.io/asset/nhash), the [utility token](https://docs.provenance.io/ecosystem/financial-services-blockchain/token-economics#provenance-fees-and-hash)
of Provenance Blockchain; [USDF](https://www.usdfconsortium.com/), a bank-minted tokenized deposit; and [figureomni](https://explorer.provenance.io/asset/cfigureomni),
a use case-specific Omnibus Bank coin (tokenized deposit).

Real World Aset examples include private company stock, such as 
[figure-technologies-inc.cs.stock](https://explorer.provenance.io/asset/figure-technologies-inc.cs.stock) or loan
pools (described below).

While we generally discuss the token represented by a Marker, the unit object transferred between user accounts is a 
Cosmos [Coin](https://buf.build/cosmos/cosmos-sdk/docs/main:cosmos.base.v1beta1#cosmos.base.v1beta1.Coin
) protobuf. Coin send and query commands are orchestrated through the 
[`x/bank`](https://buf.build/cosmos/cosmos-sdk/docs/main:cosmos.bank.v1beta1) Cosmos module.

## Tokenized Asset Control

The marker system provides advanced token management through its implementation of fine-grained [Access Grants](https://docs.provenance.io/modules/marker-module#access-grants). 
This allows for greater customization and flexibility in the management of marker accounts. 
Access rights, such as minting, burning, depositing, withdrawing, deleting, administrating, and transferring, 
can be assigned to multiple addresses or delegated to organizational 
[groups](https://docs.cosmos.network/v0.46/modules/group/) or 
[smart contracts](https://github.com/FigureTechnologies/restricted-marker-transfer-smart-contract). 
This level of control sets the marker apart from other blockchain solutions, 
offering a unique and comprehensive approach to token management.

![asset lifecycle](/img/learn/asset-lifecycle/marker-permissions.png)


| Permission | Description |
| ---------- | ----------- |
| **Mint** | The ability to increase the supply of a Marker token coin. |
| **Burn** | The ability to decrease the supply of a Marker using coin held by the Marker. |
| **Deposit** | The ability to add other assets to the Marker account (as in an asset pool). For example, the ability to change the scope owner address of an NFT to be the Marker address. |
| **Withdraw** | The ability to remove other assets from the Marker account, including the movement of newly-minted tokens to other accounts. |
| **Delete** | The ability to move a proposed, finalized, or active Marker into the cancelled state, and to mark cancelled Markers for deletion. |
| **Admin** | The ability to add access grants for accounts to the list of Marker permissions. |
| **Transfer** | The ability to invoke a send operation using the Marker module to facilitate exchange |


## Restricted Token Transfer

Marker tokens come in two flavors:

- **Unrestricted (Coin Type)** - Coin can be freely exchanged between any two Provenance accounts without any third-paprty control
- **Restricted Type** - Coins may not be transferred between arbitrary accounts without the approval of the `Transfer` agent on the Marker

For Restricted Markers, the transfer permission is usually delegated to a smart contract. In the following example,
`example-co.stock` trading in a secondary market is delegated to a smart contact, which checks that the recipient's
506c accreditation is present and currently valid. If the recipient's 506c Attribute is either missing or expired,
the smart contract will not allow the transfer to occur.

![marker structure](/img/learn/asset-lifecycle/marker-transfer-approval.png)

## Asset Pools
The Marker system is capable of representing a collection of assets, such as a pool of loans. It can serve as a 
container for collateral or escrow, which can include individual NFT assets or other cryptocurrencies or tokenized
assets.

A Marker is represented on the blockchain through an Account, similar to a standard user account for an 
individual or entity. This allows the Marker to hold any asset type represented on the Provenance Blockchain.

It is important to note that in certain cases, the administrator of an asset pool may choose to represent the 
pool's tokenization on the blockchain without minting the individual assets. For instance, the Marker may represent an 
Asset-Backed Security (ABS) token on the blockchain, without the need for individual assets to be added to the 
blockchain. The ABS token can be used to represent ownership and transfer of shares, and can also administer 
waterfall payments through a smart contract, while the underlying collateral assets remain in their original system.

Example Marker of an Asset-Backed Security holding four mortgages


## How to Create a Marker

The [**Restricted Marker Smart Contract**](https://github.com/FigureTechnologies/restricted-marker-transfer-smart-contract)
repository gives an excellent example of how to create and activte a Marker and to delegate the transfer authority to a 
smart contract. See repo README.md for a full Marker lifecycle example.

_Note: Abbreviated commands. See [example instructions](https://github.com/FigureTechnologies/restricted-marker-transfer-smart-contract#marker-creation) 
for full command parameters._

```shell title="Command Line Example - Create a Restricted Marker"
# Create the Marker with an initial supply of 5,000 shares
provenanced tx marker new "5000example-co.stock" --type RESTRICTED

# Grant access control permissions to the Marker administrator
provenanced tx marker grant pb1pr6egk... "example-co.stock" admin,withdraw,burn,mint,transfer

# Finalize and Activate the Marker
provenanced tx marker finalize "example-co.stock"
provenanced tx marker activate "example-co.stock"

# Grant Marker transfer permission to a smart contract, so it can move coin
provenanced tx marker grant pb15fnwec... "example-co.stock" transfer

# Withdraw 1,000 shares of stock to a user account
provenanced tx marker withdraw "example-co.stock" "1000example-co.stock" pb18wldir...

```
<br/>

A backend service for a dApp will use gRPC commands via a [client](/docs/build/clients) to create a Marker. See the 
[How-to Provenance](https://github.com/provenance-io/how-to-provenance/blob/main/bilateral-trade-example/examples/kotlin/scope-exchange/src/main/kotlin/MarkerCreator.kt) repository for an example.

```kotlin title="Kotlin Example - Create a Unrestricted (Coin) Marker in a Finalized state"
fun createMarker(shares: Int, denom: String, owner: WalletSigner): MarkerAccount {
    val createMarker = MsgAddMarkerRequest.newBuilder()
        .setMarkerType(MarkerType.MARKER_TYPE_COIN)
        .setAmount(CoinOuterClass.Coin.newBuilder().setAmount(shares.toString()).setDenom(denom))
        .setFromAddress(owner.address())
        .setManager(owner.address())
        .setSupplyFixed(true)
        .addAccessList(
            AccessGrant.newBuilder()
                .setAddress(owner.address())
                .addAllPermissions(
                    listOf(
                        Access.ACCESS_ADMIN,
                        Access.ACCESS_WITHDRAW,
                        Access.ACCESS_DEPOSIT,
                    )
                )
        )
        .setStatus(MarkerStatus.MARKER_STATUS_FINALIZED)
        .build().toAny()
        
        // ...
}
```

