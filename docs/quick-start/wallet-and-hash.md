# Quick Start: Get a Wallet & Hash

As a Provenance developer, you'll need to set up an account holding [Hash](/docs/discover/hash), utility token of Provenance Blockchain,
in order to transact on the Blockchain. You'll use Hash to pay for the fees associated with submitting a 
transaction to the blockchain. (You don't need any Hash to query or view the blockchain.)

## What is a Wallet?

Everyone who transacts on Provenance Blockchain has their own **[Account](https://docs.cosmos.network/v0.46/basics/accounts.html)** 
on the blockchain. Analogous to a bank account, your blockchain account holds your on-chain assets, like 
[Hash](docs/discover/hash) or [USDF](https://www.usdfconsortium.com/).

You are the only entity that has access to your account. Your account is secured using a cryptographic key pair. 
You don't necessarily need to know the details about cryptography to use Provenance Blockchain, but you need to keep the Private Key 
portion of your key pair safe, and a special app called a **[Wallet](/docs/discover/wallets)** does that for you.

:::info A Wallet app helps you use a blockchain in three ways:

1. Helps you set up your account, and keeps your private key safe and secure.
2. Shows you what assets your hold in your account.
3. Allows you to perform actions with your account, like transferring funds or signing (approving) blockchain transactions.
:::
<br/>

As a **dApp** developer, in most cases your users will connect their own wallets to your dApp, and pay for transactions
with their own Hash. For some use cases, you may need a **service account** to hold Hash in order execute transactions
or perhaps to be a fee granter for your users. In those cases, you'll need to consider your strategy for [server-side
key management](docs/build/tutorials/key-management) and will likely make use of an [HD wallet library](https://github.com/FigureTechnologies/hdwallet).

![Hash](/img/hashtransparent.svg)


## What is Hash?

Hash is the [utility token of Provenance Blockchain](/docs/discover/hash). As a utility token, Hash helps keep 
Provenance Blockchain secure through its Proof of Stake consensus mechanism. You can participate in securing the 
network by purchasing Hash and staking it by delegating your Hash to one of the Validators.

Hash is also used to pay fees for transacting on the blockchain. All operations on Provenance Blockchain, from minting 
an NFT to sending a payment incur a small fee paid for in Hash. The fees are collected and distributed to the 
Validators as a reward for securing the network.

Holding Hash also gives you the right to participating in the Governance process for Provenance Blockchain. 
You have one vote for every Hash token you have staked.


## How do I get set up?

### Step 1: [Select which Wallet](/docs/discover/wallets) you'll use and set up a new account
### Step 2: Obtain Hash for your account
- **For testnet:** You can get Hash from the [Faucet](https://explorer.test.provenance.io/faucet)
- **For mainnet:** Purchase Hash from  [dlob.io](https://provenance.io/purchase-hash)

### Next? 
- [Learn how to submit a transaction to testnet](https://medium.com/provenanceblockchain/hands-on-testnet-accounts-wallets-and-coin-transfer-452ee1f343cd)
