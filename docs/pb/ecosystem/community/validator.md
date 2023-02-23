# Validators

import { DocSubheader } from '/docs/components/DocSubheader';

<DocSubheader text="Benefits, risks, and other considerations for network users that wish to
become a validating node on the Provenance Blockchain network."/>
Validators are crucial for the security of the Provenance Blockchain. They propose and validate transactions, and to become an active validator, they must stake Hash. Delegating stake and earning rewards is facilitated by a network of validators.

## Requirements

To be a reliable and secure validator that others would want to delegate to, you should consider these guidelines:

- Ensure your computing infrastructure is reliable, highly available, and secure, and that it has excellent network connectivity.
- Make sure you have the minimum amount of Hash to delegate to yourself.
- You need to have a minimum level of staking delegation to be among the top 100 validator nodes selected as the active set of validators.
- Commit to maintaining current blockchain software releases and performing software upgrades as required.
- Commit to vote on governance proposals.

## Benefits

Validators control and secure the network and can earn additional staking rewards through commissions and bonuses for proposing transactions to be accepted by the network.

### Commissions

Provenance Blockchain validators can set a commission rate to charge on fees collected, allowing them to charge up to 100% of the fees received during distribution. But choosing to charge 100% is unlikely to attract delegate Hash.

#### Bonus Proposer Awards

Active validators take turns proposing a block to be committed via a round-robin assignment. During this process, the validator earns additional rewards by being the proposer and awaiting all possible signatures.

### Voting

Validators' votes hold significant weight and can direct the development of the network. If staked-Hash holders don't vote, validators will vote with their delegators' staked Hash as well. This increases validators' voting power to determine the direction of Provenance Blockchain.

### Gas Price

Validators can choose the minimum gas price to accept, which allows them to modify the cost to use the network.

## Responsibilities in Hosting a Validator

Although validators can earn rewards by assuming partial responsibility for the network, this responsibility comes with some risks that should be considered before deciding to participate.

### Uptime requirements

All active validators must sign a minimum amount of blocks out of the last 10,000, which enforces a basic level of availability. Active validators who aren't available to sign blocks slow down the overall network response times.

### Proper signing and endorsement

A validator node must only sign valid blocks and not issue more than one signature per block. These constraints are vital to the overall security of the network.

### Penalties

Active validators that fail to meet the minimum availability requirements or are flagged for inappropriate behavior are subject to having a portion of their bonded stake slashed/burned. This penalty enforcement typically ranges from 1% to 20% based on configuration and includes a permanent ban for the most severe behavior. Delegators who pledge stake to the validator node will also be penalized, which incentivizes validators to protect their networks to maintain Provenance Blockchain's stability.

## Considerations

For most stakeholders, delegating their stake to one of the existing validators is the most appropriate way to participate and earn rewards on the network.

Securing the validator node key is vital, and it's recommended to use an HSM (hardware security module). However, no major cloud infrastructure providers have a compatible HSM solution that supports the required signing algorithm at present.
