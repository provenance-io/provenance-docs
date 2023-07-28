# Token Economics

import { DocSubheader } from '/docs/components/DocSubheader';

<DocSubheader text="Provenance Blockchain - Foundationally transforming financial services"/>

## The Hash Token and Fees

Provenance Blockchain's utility token is called **Hash**. There are 100 billion Hash tokens in circulation, and no new
tokens can be created or destroyed. However, Hash can be "slashed" during staking[^1].

Hash has three use cases: as a spam-prevention mechanism, as a staking token, and as a voting mechanism in governance.

Transactions and activities on the Provenance Blockchain platform incur gas fees, community fees, and smart contract
fees, all of which are paid in Hash. While community and smart contract fees may be quoted in fiat, all fee distribution
is ultimately in Hash.

Gas fees are paid to validators and their delegates, while community fees are currently distributed to all delegated
Hash holders. This incentivizes delegation and network participation. Smart contract fees, on the other hand, go to
smart contract owners or designated recipients.

It's worth noting that all fees are paid in Hash. This means that participants must pay fees directly in Hash.

The number of minted Hash remains constant, and no new Hash is minted as reward for work. As a result, there is no
inflation of the Hash value through the new influx of Hash.

To learn more about acquiring Hash, please refer
to [Provenance's guide on acquiring Hash](https://provenance.io/purchase-hash).

[^1] _Validators on the Provenance Blockchain network are responsible for adding new blocks to the chain and ensuring
the validity of transactions. If a validator is found to be acting in bad faith or not following the network's rules,
they may be "slashed", which means that a portion of their staked tokens (including the tokens staked by their
delegators)
will be locked up for a certain period of time. This is intended to disincentivize bad behavior and promote network
security and stability._

| Token Type                    | Hash           |
| ----------------------------- | -------------- |
| Total Supply                  | 100 Billion    |
| Total Planned Inflation       | None           |
| Inflation Rate                | None           |
| Maximum Stake                 | None           |
| Minimum Stake                 | 1 Hash         |
| Unbonding/Undelegating period | 21 days        |
| Initial Active Set Size       | 100 validators |
| Community pool                | 7%             |

TODO add initial allocation

## Staking Hash

The Provenance Blockchain network is a public Proof-Of-Stake (PoS) blockchain. Validators on the network are weighted
based on the amount of staking tokens (Hash) bonded to them as collateral. These tokens can be self-delegated directly
by the validator or delegated to them by other Hash holders.

Any Hash holder can delegate some or all of their tokens to any number of validators in order to stake their tokens. If
a Hash holder wants to become a validator, they can send a create-validator transaction to the network, at which point
they become a validator candidate.

The voting power of a validator determines whether or not they are an active validator. Only the top $N_v$ validators
with the most voting power will be active validators, known as the Active Set. Only validators in the Active Set, and by
association those who delegated to them, receive rewards and have the right to participate in governance.

If a validator or a delegator wishes to remove part or all of their deposit from the staking pool, they send an
unbonding transaction to the Provenance Blockchain. The unbonding process takes three weeks, during which time the owner
of the staking tokens can still earn transaction fees and participate in governance. However, they are still liable to
being penalized for potential misbehaviors committed by the validator before the unbonding process started.

If a delegator wishes to move their stake between validators but not remove it from the staking pool, they may issue a
redelegation. A redelegation is an instant transfer in voting power from one validator to another, but it does not have
any impact on the required three-week unbonding period.

## Validator Rewards

Validators are rewarded for their work on the Provenance Blockchain. The validator that proposes the next block on the
chain is called the **proposer**. The frequency of being chosen as a proposer is proportional to the amount of staked Hash
tokens, known as **voting power**, of the validator. For example, if a validator has 10% of the total staked Hash tokens
across all validators, then they will be the proposer for approximately 10% of the blocks.

Validators earn transaction fees in Hash tokens. The total fee for each transaction is divided among all validators'
staking pools based on each validator's weight. The revenue is further divided among delegators in proportion to each
delegator's stake. Before the revenue is distributed, the validator may apply a commission on the part of the revenue
that goes to their delegators. The commission is set as a percentage and can only change after the validator is
established.

## Validator Commission

A validator's revenue is split between the validator and their delegators, and the validator can apply a commission on
the part of the revenue that goes to their delegators. Each validator is free to set their initial commission, maximum
daily commission change rate and maximum commission. Once established, only the commission rate can change. The
Provenance Blockchain network enforces the parameters that each validator sets.

The commission-rate value $$C_i$$:

- Must be between 0 and the validator's commission-max-rate $$C_i max$$
- Must not exceed the validator's $$C_i max-change$$ which is maximum percent change rate **per day**. In other words, a
  validator can only change its commission once per day and within commission-max-change-rate bounds.
- Can be 100%, which implies that that validator is not welcoming outside delegators since it pockets all rewards based
  on its bonded stake.

## Validator earned fees

Fees are similarly distributed with the exception that the block proposer can get a bonus on the fees of the block they
propose if they include more than the strict minimum of required precommits.

When a validator is selected to propose the next block, they must include at least 2/3 precommits of the block. However,
there is an incentive to include more than 2/3 precommits in the form of a bonus. The bonus is linear: it ranges from 1%
if the proposer includes 2/3 precommits (minimum for the block to be valid) to 5% if the proposer includes 100%
precommits. Of course the proposer should not wait too long or other validators may timeout and move on to the next
proposer. As such, validators have to find a balance between wait-time to get the most signatures and risk of losing out
on proposing the next block. This mechanism aims to incentivize non-empty block proposals, create better networking
between validators and mitigate censorship.

To summarize earned fee rules:

- **Proposer is deterministically chosen from validators in the Active Set with frequency proportional to its total
  stake**
- **The proposer gets a 1-5% bonus of its normal share based on included extra precommiters above 2/3 voting power**
- **All validators in the Active Set receive a share of the fee proportional to their total stake**
- **Validators takes commissions before distributing fees to their delegators**

## Provenance Blockchain slashing policy

Staking Hash can be thought of as a security deposit on validation activities. If a validator misbehaves, their
delegated stake will be partially slashed. This means that every delegator that bonded Hash to this validator gets
penalized in proportion to their bonded stake. Delegators are therefore incentivized to delegate to validators that they
anticipate will function safely.

There are currently two faults that can result in slashing of funds for a validator and their delegators:

- Double signing: If someone reports on chain A that a validator signed two blocks at the same height on chain A and
  chain B, and if chain A and chain B share a common ancestor, then this validator will get slashed by 5% on chain A.
- Downtime: If a validator misses more than 99% of the last 10.000 blocks, they will get slashed by 1%.

When a validator node is slashed for one of the above penalties it is immediately removed from the active validator set
and placed in a "jailed" state. A node may remove itself from the "jailed" status after a minimum cooling off period
elapses by submitting an unjail transaction. During the jailed status period any delegator may choose to redelegate
their stake to another validator on the network with the exception of the validator operator who must maintain at least
their minimum stake threshold in their node.

## Fee calculation example

To better illustrate how validator rewards work, let us assume there are 10 validators in the Active Set and all have an
equal stake. Each of the validators applies a 10% commission rate and has 20% of self-delegated Hash. Assume there is a
successful block added to the chain and a total of 1080.6 Hash was collected in fees.

For example, if 7% of the fee goes to the Provenance Blockchain Foundation's community pool (used to fund the
foundation's day-to-day operations as well as the grant program) you can calculate the fees this way:

- `7% * 1080.6 = 75.6` Hash goes to the community pool.&#x20;

Note: the current rate can be found in the [Explorer](https://explorer.provenance.io/network/params).

1005 Hash now remain. Assume that the proposer included 100% of the precommitters’ signatures in its block. The proposer
thus obtains the full bonus of 5%. The reward R for each validator in the Active Set is determined by this simple
equation:

- `9*R + R + R*5% = 1005 ⇔ R = 1005/10.05 = 100`

For the proposer validator:

- The pool for that proposer obtains R + R \* 5%: 105 Hash
- Commission: 105 _80%_ 10% = 8.4 Hash
- Validator's reward: 105 \* 20% + Commission = 29.4 Hash
- Delegators' rewards: 105 \* 80% - Commission = 75.6 Hash (each delegator will be able to claim its portion of these
  rewards in proportion to their stake)

For each of the other 9 non-proposer validators:

- The pool for the validator obtains R: 100 Hash
- Commission: 100 _80%_ 10% = 8 Hash
- Validator's reward: 100 \* 20% + Commission = 28 Hash
- Delegators' rewards: 100 \* 80% - Commission = 72 Hash (each delegator will be able to claim their portion of these
  rewards in proportion to their stake)

## Initial validator incentive

The network will provide an additional incentive for validators for the first six months after mainnet launch. This
incentive will be 5% of the transaction fee - generally increasing validator returns by 50% assuming an average
commission rate of 10%.

The way this will be administered is the community pool charge in the first six months will be 7% rather than the normal
2%. This 5% will then be distributed to all validators in the Active Set.

## Gas and transaction fees

The amount of gas needed depends on the transaction as different types of transactions (e.g. making a payment or loading
a loan) require different amounts of resources to process. The gas amount for a transaction is calculated as it is being
processed, but there is a way to estimate it beforehand by using the auto value for the gas flag. Users can adjust this
estimate with the flag --gas-adjustment (default 1.0) if they want to be sure to provide enough gas for the transaction.

The gasPrice is the price of each unit of gas. Transaction fees are the product of gas and gasPrice. Users must include
the fee being paid and the rate the gas will be converted with each transaction they send to the network. Too low a
gasPrice or gas could result in the transaction not being included at all.

Each validator sets a min-gas-price value, and will only include transactions that have a gasPrice greater than their
min-gas-price. These full-nodes keep unconfirmed transactions in their mempools. In order to protect nodes from spam, it
is best for validators to set a min-gas-price that the transaction must meet in order to be accepted in their node's
mempool. This parameter can be set as a flag in the file `%USER_OS_CONFIG_DIR%/Provenance/config/app.toml` or as a
parameter in the `provenanced` process.

At mainnet launch the recommended gasPrice is 1904 nHash where 1Hash = 1,000,000,000nHash

More details about gas:

- Validators set their own respective minimum gas prices. This value can range from infinitesimally small (inexpensive)
  to relatively large (expensive).
- When a transaction is broadcast to a node, it is run through the given validator's CheckTx function. If this passes,
  the transaction is added to the node’s mempool and broadcast to other nodes and validators.
- This transaction will sit in the node’s mempool until it is accepted by a proposer.
- The transaction will be accepted by a proposer if it meets the given proposer's minimum gas price.
- If the transaction’s gas price is below the amount required by the current proposer, the transaction stays in the
  mempool until another proposer accepts it (in the worst case this would be the validator that initially accepted the
  transaction when that validator is selected as the proposer).
