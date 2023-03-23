# Provenance IBC

## Overview

One of the most powerful features of the Provenance blockchain is its ability to interoperate with other blockchains.
This is accomplished by implementing the Inter-Blockchain Communication protocol or IBC. The IBC protocol facilitates
cross chain applications, scalability, isolation, and more.

## Features

### Data Separation

Provenances leverages IBC to allow for different zones to be created for data separation and privacy. This unique
capability allows companies to curate blockchain data in a private area and selectively disclose information to the
public network.

### Secure and proven communication channels

Connections between Provenance and another blockchain are created with cryptographic proofs that ensure a formal and
secure connection as well as a completely audit history of all communications.

### Proofs of chain integrity, health, and liveness

Beyond just the secure communications between chains an IBC connection provides proofs that both chains are healthy and
current. This is extremely important for private blockchains that are not otherwise reachable for public
testing/inspection. Through the use of an IBC connection the private network can prove that it is functioning correctly
and is actively processing transactions while preserving completely privacy of data and transactions.

### Proofs of data authenticity for transactions

All transactions and communications between networks are recorded using the standard blockchain concepts of transactions
signed by public/private keys. For Provenance based blockchains the same accounts addresses are used on all zones making
it straightforward to attribute transactions to an identity.

### Separation of trust contexts

Different business cases have different sets of partners and in some cases there are reason to limit information access
to a smaller group of affiliates than those that participate in the public Provenance mainnet. In these cases the use of
an alternate zone with different set of validators and stakeholders may make sense.

## How it Works

An IBC connection relies on transactions committed on both networks combined with a relayer process that can listen and
commit transactions to both networks as needed to ensure transactions are copied across along with their proofs to
ensure integrity is maintained.

1. An account with sufficient funds to commit transactions on both networks will submit transactions to open a
   connection on each network.
2. A relayer instance will be configured to listen for packets on each network for this new connection.
3. When a packet is committed on a source chain the relayer will ensure that it is copied to the destination chain. This
   is done by creating a new packet for the destination address along with the associated proofs that the packet exists
   on the source chain.
4. When the destination chain completes the transaction associated with the packet the results are captured in a new
   packet that is relayed back to the source indicating the status of the request.
5. If packets are unable to be relayed or if their results are not available before the unbonding period then the
   connection will be considered faulted and closed. This is an important consideration when sending tokens as they can
   be locked up for a potentially significant amount of time. A faulted connection can only be restored using a
   governance proposal.