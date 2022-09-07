# Validator Details

## Details

![Main Validator details](/img/explorer/validator-details.png)

The validator can be created with any name desired, as well as an icon image. These are then displayed to distinguish the validator from others similar to it.

Information to note:

- **Operator Address**: the address associated with the validator itself
- **Owner Address**: the address of the creating account. This address created the validator, and thus is considered its "Owner". It holds the keys to the validator, and thus submits all validator transactions on behalf of the validator
- **Withdraw Address**: the address that any commissions are withdrawn to. Initially set to the **Owner Address**, it can be updated to a different address.
- **Voting Power**: percentage of the latest validator set's total voting power
- **Uptime** & **Missed Blocks**: missed blocks shows how many blocks the validator has missed consensus for since they were added to the blockchain as part of the active validator set. Uptime is the percentage representation of the **Missed Blocks** count
- **Bond Height**: the block at which the validator was added to the blockchain
- **Consensus Pubkey**: the address the validator uses in signing consensus for a block

## Commission

![Validator Commission information](/img/explorer/validator-commission.png)

The validator can be created with a specified **Commission** rate, which can then be updated as the owner account deems necessary.&#x20;

Information to note:

- **Bonded Tokens**: the total Hash delegated to the validator. Comprised of **Self-Bonded** and **Delegator** shares
- **Total Shares**: total Hash held by the validator's delegators
- **Commission Rewards**: total rewards earned by the validator as commission&#x20;
- **Commission Rate Range**: a range of values that the commission rate can be set to. Defined at validator creation, the maximum rate cannot be changed
- **Max Change Rate**: the maximum daily increase of the validator commission rate

## Delegations

![](/img/explorer/validator-delegations.png)

A list of delegations made to the validator. They are all active delegations.

## Unbonding Delegations

![](/img/explorer/validator-delegations-unbond.png)

A list of unbonding delegations made against the validator. These are transactions where the delegator has decided to unbond from the validator. These are active unbonding actions.

## Delegation Transactions

![](/img/explorer/validator-delegation-tx.png)

A list of transactions affecting the validator's delegation spread.&#x20;

## Validation Transactions

![](/img/explorer/validation-tx.png)

A list of transactions affecting the validator itself, ie. commission updates or unjailing requests.&#x20;

## Governance

![A list of transactions affecting governance proposals](/img/explorer/validator-governance.png)

![A list of proposals the validator has voted upon](/img/explorer/validator-proposals.png)

A validator holds the ability submit and deposit on a [**Governance Proposal**](../../../../ecosystem/governance/). It also has the ability to vote on **Governance Proposals** on behalf of its delegators.
