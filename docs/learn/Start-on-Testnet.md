# Guided Tutorial: Hands on Testnet

## A great way to start with Provenance Blockchain

Blockchain isn’t magic. It’s really not. At the risk of enraging an entire community, isn’t it really just a linked list with cryptographic sprinkles? A graph of objects addressable by a cryptographic hash of the object pointing to other objects by _their_ cryptographic hashes? Sound familiar? [Have a look at the README.md in the very first git commit](https://github.com/git/git/tree/e83c5163316f89bfbde7d9ab23ca2e25604af290). It’s striking how, in 2005, the git README almost perfectly defines the same primitives used by blockchain tech: cryptographic hashes, consistency, state, trust, distribution, digital signatures.

But I digress. My point is don’t be intimidated by blockchain fundamentals, there’s nothing new and magical here.

With that out of the way, for today’s session we’ll avoid the hype and simply play around on a blockchain. And not just any blockchain, _the_ Provenance Blockchain.

Let’s get started.

# **The Set Up**

We’ll be using a terminal shell, the provenanced command, and the Provenance Blockchain testnet network. Isn’t there GUIs, web applications, or mobile applications we could use instead? Sure. But the closer to the metal the better.

Some things you’ll need on your machine to follow along:

- A bash (or similar) shell \- I’m running all the commands using zsh.
- curl for interacting with the interwebs for things like [the Provenance Blockchain testnet gas faucet](https://explorer.test.provenance.io/faucet).
- jq for displaying pretty JSON data.

# **Download** provenanced **Binary**

Pre-built provenanced binaries are available at [the Provenance Blockchain GitHub repository releases section.](https://github.com/provenance-io/provenance/releases) Download the latest provenance-\*.zip for your machine architecture and unzip it to a location of your choosing on your local machine. For example, I’m using the [**provenance-darwin-amd64-v1.8.1.zip**](https://github.com/provenance-io/provenance/releases/download/v1.8.1/provenance-darwin-amd64-v1.8.1.zip) version on my M1 Mac:

$ curl \-JLO get \<https://github.com/provenance-io/provenance/releases/download/v1.8.1/provenance-darwin-amd64-v1.8.1.zip\>

$ unzip provenance-darwin-amd64-v1.8.1.zip

$ export PATH=$(pwd)/bin:$PATH

The unzip will create a bin directory in the download location that contains the provenanced binary. Notice I added that to my path to make things easier.

Now confirm we have the correct provenanced binary:

$ provenanced version

v1.8.1

So what exactly is provenanced? The Provenance Blockchain is wrapped into a single executable named provenanced. All interaction (whether creating a node, querying, or submitting transactions) with Provenance Blockchain can be accomplished using the provenanced command. It’s effectively both a server and a client and it has _a lot of features_:

$ provenanced \--help

# **Let’s Query Some Blockchain\!**

Now that we have our provenanced binary downloaded and configured, let’s run a couple of queries against the Provenance Blockchain testnet network. There’s a _ton_ of queries we can run, have a look:

$ provenanced q \--help

Let’s start with the auth [module](https://docs.cosmos.network/v0.45/building-modules/intro.html#introduction-to-sdk-modules) and query accounts:

$ provenanced q auth accounts \\

\--testnet \\

\--node=https://rpc.test.provenance.io:443 \\

\--output json | jq .

So what did we just do?

1. provenanced q auth accounts is the main command querying the auth module for accounts.
2. \--testnet tells provenanced we’re running against the testnet network
3. \--node=https://rpc.test.provenance.io:443 is the specific Provenance Blockchain testnet node we’re connecting to. This can be any available, distributed testnet node in the network if you know the node’s address. In this case, it’s a public query node provided by the Provenance Blockchain Foundation.
4. \--output json | jq . output the blockchain response as JSON and pipe it through jq to make it easier to read.

And what did we see?

```
[{

     "@type": "/cosmos.auth.v1beta1.BaseAccount",

     "address": "tp1q8n4v4m0hm8v0a7n697nwtpzhfsz3f4d40lnsu",

     "pub\_key": \{

       "@type": "/cosmos.crypto.secp256k1.PubKey",

       "key": "Ao+nqnlIT4m86jXcZ46M7Lg+IHgfMVQCnKeUEu2UJgBo"

     \},

     "account\_number": "730",

     "sequence": "1476605"

},

... snip ...

]
```

We saw several accounts\! Now would be a good time to talk accounts, keys, and wallets — they’re base primitives on blockchain.

# **Accounts**

On Provenance Blockchain, an [account](https://docs.cosmos.network/v0.41/basics/accounts.html) designates a pair of _public key_ PubKey and _private key_ PrivKey. The PubKey is used to generate an address that is used to identify users (among other entities) on the blockchain. Addresses are also associated with messages to identify the sender of the message. The PrivKey is used to generate [digital signatures](https://docs.cosmos.network/master/basics/query-lifecycle.html#signatures) to prove that an addressassociated with the PrivKey approved of a given message.

# **Addresses**

Addresses and PubKeys are both public information that identifies actors on the blockchain. The Account we queried for in the prior section stores user authentication information.

Each account is identified using an address which is a sequence of bytes derived from a public key.

Addresses and public keys are formatted using [Bech32](https://en.bitcoin.it/wiki/Bech32) and implemented as a string value. The Bech32 method is the only supported format to use when interacting with the blockchain. The Bech32 human-readable part (Bech32 prefix) is used to denote an address type.

Provenance Blockchain testnet Bech32 addresses begin with **tp** whereas mainnet addresses begin with **pb**.

💡 _A key pair and its corresponding Bech32 address that exist outside of Provenance Blockchain (say, in a wallet) is not a Provenance Blockchain account until HASH has been transferred to the Bech32 address._

# **Wallets**

A wallet is a piece of software that holds the key pairs used to create Addresses which are represented as Accounts on blockchain. The wallet protects the private key portion of the key pair and uses the private key to digitally sign transactions that are broadcast to the blockchain. It is important to understand that a **Wallet** is NOT a blockchain primitive whereas an Account and Address are. Instead, the **Wallet** is just software, external to the blockchain, that manages the cryptographic keys used to generate Addresses that identify a blockchain Account.

Let’s walk through using the provenanced command to manage a local wallet, that should help clarify the difference between keys, accounts, addresses, and wallets.

Using provenanced we can generate a local key pair and store it in the default, local Provenance Blockchain [Keyring](https://docs.cosmos.network/master/basics/accounts.html#keyring):

$ provenanced \--testnet keys add my_test_key

\- name: my_test_key

type: local

address: tp1z9f9thvdcytme5pc5gctvpu2qsjq7sqc3xt2f8

pubkey: '\{"@type":"/cosmos.crypto.secp256k1.PubKey","key":"A7inUApSgRNEqAuXtjGnSPQMnvEBMJJ3m7GzjlztQHiG"\}'

mnemonic: ""

\*\*Important\*\* write this mnemonic phrase in a safe place.

It is the only way to recover your account if you ever forget your password.

orchard image sister retreat kit actor expect cement cash guard swift eight public blouse impact ten segment group usage shoot hour achieve sugar enhance

So what did we just do? We asked provenanced to generate a random [BIP39 mnemonic phrase](https://en.bitcoinwiki.org/wiki/Mnemonic_phrase), generate a key pair from the phrase, store the private key in a local filesystem wallet, and generate a Provenance Blockchain testnet compliant [Bech32 address](https://en.bitcoin.it/wiki/Bech32).

💡 _The provenanced \--testnet keys add my_test_key will create a random mnemonic phrase when it is run. Therefore, when you enter this command the address will not match tp1z9f9thvdcytme5pc5gctvpu2qsjq7sqc3xt2f8. Use the address displayed to you in the following steps._ If _the address displayed to you matches tp1z9f9thvdcytme5pc5gctvpu2qsjq7sqc3xt2f8 **BUY A LOTTERY TICKET IMMEDIATELY** because the odds are astronomical._

At this point, the generated address tp1z9f9thvdcytme5pc5gctvpu2qsjq7sqc3xt2f8 is **not** a Provenance Blockchain account, it exists only in our local wallet:

$ provenanced \--testnet query auth account tp1z9f9thvdcytme5pc5gctvpu2qsjq7sqc3xt2f8 \\

\--testnet \\

\--node=https://rpc.test.provenance.io:443

Error: rpc error: code \= NotFound desc \= rpc error: code \= NotFound desc \= account tp1z9f9thvdcytme5pc5gctvpu2qsjq7sqc3xt2f8 not found: key not found

However, once we use the [testnet Provenance Blockchain Faucet](https://explorer.test.provenance.io/faucet) to transfer HASH to our address, it becomes an account. The faucet is simply a service on testnet that transfers HASH from a pre-funded faucet account to another account. Let’s use curl to post our address to the faucet:

$ curl '\<https://test.provenance.io/blockchain/faucet/external\>' \\

\-X 'POST' \-H 'Content-Type: application/json' \\

\--data-binary '\{"address":"tp1z9f9thvdcytme5pc5gctvpu2qsjq7sqc3xt2f8"\}'

Now, let’s try the provenanced account query again:

$ provenanced \--testnet query auth account tp1z9f9thvdcytme5pc5gctvpu2qsjq7sqc3xt2f8 \\

\--testnet \\

\--node=https://rpc.test.provenance.io:443

'@type': /cosmos.auth.v1beta1.BaseAccount

account_number: "15099"

address: tp1z9f9thvdcytme5pc5gctvpu2qsjq7sqc3xt2f8

pub_key: null

sequence: "0"

We did it\! We created a key pair, stored the private key in a local wallet, generated a Provenance Blockchain address from the public key, and sent HASH to the address on blockchain thereby creating a Provenance Blockchain account — what a time to be alive\!

We can even query our HASH balance from the chain:

$ provenanced q bank balances tp1z9f9thvdcytme5pc5gctvpu2qsjq7sqc3xt2f8 \\

\--testnet \\

\--node=https://rpc.test.provenance.io:443

balances:

\- amount: "100000000000"

denom: nhash

pagination:

next_key: null

total: "0"

💡 For extra fun, [view our account address in the Provenance Blockchain Explorer](https://explorer.test.provenance.io/accounts/tp1z9f9thvdcytme5pc5gctvpu2qsjq7sqc3xt2f8) to see what our transactions look like on chain.

# **A Note About Blockchain Authentication**

The principal way of authenticating a user is done using [digital signatures](https://en.wikipedia.org/wiki/Digital_signature). Users sign transactions using their own private key. Signature verification is done with the associated public key. For on-chain signature verification purposes, the public key is stored in the Account object (alongside other data required for a proper transaction validation) as shown in the previous section.

# **Creating and Submitting Transactions**

Now that we’ve set up our local wallet and have an account on the Provenance Blockchain, let’s have some _real_ fun\!

Well, first, let’s get some more of that sweet sweet HASH to make sure we have enough [gas to cover our transaction costs](https://docs.provenance.io/blockchain/basics/gas-and-fees) (we’ll discuss gas in a moment). Hit up the faucet a couple more times:

curl '\<https://test.provenance.io/blockchain/faucet/external\>' \\

\-X 'POST' \-H 'Content-Type: application/json' \\

\--data-binary '\{"address":"tp1z9f9thvdcytme5pc5gctvpu2qsjq7sqc3xt2f8"\}'

Now that we’re gassed up, let’s be charitable and transfer some of our HASH to tp1qgjnuqnrqwhg2kfl0dk9rhkcga5lehns2hdycm, they seem cool:

$ provenanced tx bank send tp1z9f9thvdcytme5pc5gctvpu2qsjq7sqc3xt2f8 tp1qgjnuqnrqwhg2kfl0dk9rhkcga5lehns2hdycm 1nhash \\

\--testnet \\

\--node=https://rpc.test.provenance.io:443 \\

\--chain-id=pio-testnet-1 \\

\--gas auto \\

\--gas-adjustment 1.2 \\

\--gas-prices 1905nhash \\

\--output json | jq .

gas estimate: 358060

```
{"body":{"messages":\[{"@type":"/cosmos.bank.v1beta1.MsgSend","from_address":"tp1z9f9thvdcytme5pc5gctvpu2qsjq7sqc3xt2f8","to_address":"tp1qgjnuqnrqwhg2kfl0dk9rhkcga5lehns2hdycm","amount":\[{"denom":"nhash","amount":"1"}\]}\],"memo":"","timeout_height":"0","extension_options":\[\],"non_critical_extension_options":\[\]},"auth_info":{"signer_infos":\[\],"fee":{"amount":\[{"denom":"nhash","amount":"682104300"}\],"gas_limit":"358060","payer":"","granter":""}},"signatures":\[\]}
```

confirm transaction before signing and broadcasting \[y/N\]: y

```
{

"height": "7557035",

"txhash": "2392447592C4EB3EE02E913AC702F47238A78D15932BAB7DE7DDCFED3D6C70B5",

"codespace": "",

"code": 0,

"data": "0A1E0A1C2F636F736D6F732E62616E6B2E763162657461312E4D736753656E64",

... snip ...

"info": "",

"gas_wanted": "358060",

"gas_used": "309422",

"tx": null,

"timestamp": "",

... snip ...

}
```

Wow, that’s a lot of information\! So what did we do? Let’s analyze the initial request:

$ provenanced tx bank send tp1z9f9thvdcytme5pc5gctvpu2qsjq7sqc3xt2f8 tp1qgjnuqnrqwhg2kfl0dk9rhkcga5lehns2hdycm 1nhash \\

\--testnet \\

\--node=https://rpc.test.provenance.io:443 \\

\--chain-id=pio-testnet-1 \\

\--gas auto \\

\--gas-adjustment 1.2 \\

\--gas-prices 1905nhash \\

\--output json | jq .

gas estimate: 358060

```
{"body":{"messages":\[{"@type":"/cosmos.bank.v1beta1.MsgSend","from_address":"tp1z9f9thvdcytme5pc5gctvpu2qsjq7sqc3xt2f8","to_address":"tp1qgjnuqnrqwhg2kfl0dk9rhkcga5lehns2hdycm","amount":\[{"denom":"nhash","amount":"1"}\]}\],"memo":"","timeout_height":"0","extension_options":\[\],"non_critical_extension_options":\[\]},"auth_info":{"signer_infos":\[\],"fee":{"amount":\[{"denom":"nhash","amount":"682104300"}\],"gas_limit":"358060","payer":"","granter":""}},"signatures":\[\]}
```

confirm transaction before signing and broadcasting \[y/N\]: y

1. provenance tx bank send \<from\> \<to\> \<amount|denom\> says we want to submit a send message to the bank module. The send message requires the address we’re sending from (tp1z9f9thvdcytme5pc5gctvpu2qsjq7sqc3xt2f8) and the address we’re sending to (tp1qgjnuqnrqwhg2kfl0dk9rhkcga5lehns2hdycm). Additionally, we indicate the amount of coin we want to send (1nhash) \- in this case 1 nhash.

💡 _What the heck is nhash? nhash is the smallet unit of HASH, a nano-HASH, where 1 HASH \= 1,000,000,000 nhash._

1. \--testnet and \--node are the same as before: we’re using testnet keys and submitting to a public Provenance Blockchain Foundation node. What’s new is chain-id that’s a flag to identify which chain on testnet we’re using.
2. \--gas auto asks provenanced to estimate the gas needed for the transaction with an adjustment and a price. Gas is a consumable that is used to power the Provenance Blockchain. Each execution of the blockchain requires enough gas to complete the requires reads, writes, and computation encompassed by the submitted transaction(s). In our case, simply transferring 1 nhash to another address required 358060 gas. Fees limit the growth of the state stored by every full node and allow for general purpose censorship of transactions of little economic value. Fees are best suited as an anti-spam mechanism where validators are disinterested in the use of the network and identities of users. Fees are determined by the gas limits and gas prices transactions provide, wherefees \= ceil(gasLimit \* gasPrices). Transactions incur gas costs for all state reads/writes, signature verification, as well as costs proportional to the transaction size (this is known as gas needed). Thus, the amount of nhash we paid out of our account for the transaction is 682,104,300nhash (0.68210431 HASH).

💡 _Gas, gas, and more gas: notice that the transaction response includes gas_wanted and a gas_used values. When we submitted our transaction we indicated we were willing to pay 358,060 units of gas (—gas autoestimated this for us) at 1905nhash per unit (\--gas-prices 1905nhash). However, the actual cost of the transaction was 309,422 units of gas \- so we could have paid less\! Refer to the [Cosmos Introduction to Gas and Fees](https://docs.cosmos.network/master/basics/gas-fees.html) and the [Provenance Blockchain Gas and Fees documentation](https://docs.provenance.io/blockchain/basics/gas-and-fees)._

Once we confirmed the transaction, it was signed using the private key portion of our key pair associated to address tp1z9f9thvdcytme5pc5gctvpu2qsjq7sqc3xt2f8 (remember we stored our key in a local wallet) and broadcast to the blockchain.

We can [see the transaction in the Provenance Blockchain Explorer](https://explorer.test.provenance.io/tx/2392447592C4EB3EE02E913AC702F47238A78D15932BAB7DE7DDCFED3D6C70B5) using the txHash returned in the response 2392447592C4EB3EE02E913AC702F47238A78D15932BAB7DE7DDCFED3D6C70B5.

We made it\!

# **What Now?**

We’ve only scratched the surface of Provenance Blockchain’s capabilities with our simple query and transaction submission. It may seem, from the start of this article, that I was depreciative of blockchain. That’s not the case, Provenance Blockchain is a **transformative force in the financial services industry.** Now that you understand how to interact with the Provenance Blockchain testnet, here’s some important modules to play around with:

- [**Marker module**](https://github.com/provenance-io/provenance/tree/main/x/marker/spec) to track fungible and non-fungible resources on chain with fractional ownership and rules governing supply and exchange.
- [**Metadata module**](https://github.com/provenance-io/provenance/tree/main/x/metadata/spec) provides an on-chain storage and assertion facility for side-chained data including assets-of-value and NFTs.
- [**Smart contracts**](https://github.com/provenance-io/how-to-provenance/tree/main/provenance-smart-contract-example) to build next generation financial services applications on chain.
