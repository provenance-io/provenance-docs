# Example: Lending

Provenance Blockchain has the power to significantly improve upon and grow the whole loan participation market. The distributed,
trustless and immutable characteristics of blockchain can reduce costs, improve transaction speed, enhance
diversification and improve liquidity.

The registration of a new asset on a blockchain is known as "minting" an NFT. On Provenance Blockchain, NFTs are
represented using the Metadata Module and the Scope data structure.

The Provenance Blockchain Metadata Module was designed to reason about data off-chain (thus preserving data privacy,
such as PII), while recording the results of the asset data state (represented by the data hash) on the blockchain.

Recording the checksum or hash of asset data as part of the NFT record allows independent parties to prove asset data
has not been altered, thus "Replacing Trust with Truth".

When an asset is “minted” (registered) on the Provenance Blockchain, a data structure called a scope is created to
contain the NFT metadata. The data for the asset, which frequently contains non-public information, is stored off-chain
in an Encrypted Object Store. The on-chain scope metadata contains the ownership information of the NFT and can be
pooled or tokenized using the marker module.

A loan originator creates a digital loan packet including both structured loan data using Google Protocol Buffers and
the required loan documents (typically PDFs).

The loan data is then onboarded to the Provenance Blockchain through the execution of off-chain client-side contracts,
which verifies the completeness of the loan data and stores it as a record in the Provenance Encrypted Object Store
(EOS).

The truth of the data is ensured by the Provenance Blockchain Contract Execution Environment, which records hashed
representations of all transactions, contracts, and documents to the blockchain. Any updates to the data can only occur
through further contract execution, ensuring the integrity of the loan data without requiring trust in the individual
originator's data store.


Once an asset NFT has been minted, the asset can be:

- Classified or validated
- Transferred to another party (change of ownership)
- Sold in a bilateral-exchange using a smart contract
- Pooled into a group of assets
- Tokenized into shares, which may be sold separately
- Transferred to a smart contract for more complex use cases, such as ongoing royalty payments at each subsequent sale

![asset lifecycle](/img/learn/asset-lifecycle/loan-lifecycle.png)

Lorem ipsum...

![asset lifecycle](/img/learn/asset-lifecycle/loan-lifecycle-structure.png)
