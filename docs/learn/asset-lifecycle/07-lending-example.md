# Example: Loan Pools

The loan origination process is an essential aspect of the financial sector, and it has always been a challenge to track
the origin, history, and ownership of loans. With the advent of blockchain technology, this process is undergoing a
transformation. The Provenance Blockchain is one such platform that has leveraged blockchain technology to revolutionize
the loan origination, structuring, and trading process.

## Loan Origination and NFTs

When a loan is issued by an originator, the Loan Origination System (LOS) mints a
[**Non-Fungible Token (NFT)**](/docs/learn/asset-lifecycle/assets-overview) that represents the loan on the Provenance
Blockchain. The NFT is a unique digital asset that represents ownership of the loan and serves as a digital certificate
of ownership.

### Data Privacy and Encrypted Object Store (EOS)

In the Provenance Blockchain, loan-level data and related Personally Identifiable Information (PII) is kept off the
blockchain in the [Encrypted Object Store (EOS)](/docs/pb/p8e/overview/). This includes all the documents generated for
the loan, such as loan applications, borrower information, and loan agreements. By keeping this sensitive data off the
blockchain and [coordinating it with the NFT through data hashes](/docs/learn/asset-lifecycle/nfts), Provenance Blockchain ensures the privacy and security
of the loan data.

The loan originator can choose to **grant read or write permission** to the data in the EOS to other participants, such as the loan
servicer or a loan trading platform. This enables these participants to access the loan data in the EOS, provided they have the
necessary permissions.

### Event Stream and Continuous Notification of NFT Creation

When any NFT is minted on the Provenance Blockchain, a notification of NFT creation goes out as an event. This
continuous sequence of events is called the Event Stream. The Event Stream enables other decentralized applications
(dApps) or systems to listen to the stream and hear when a new loan NFT is minted.

Provided they are permissioned to read the data, downstream systems can fetch and decrypt loan-level data from the EOS.
This enables real-time monitoring and analysis of the loan data, and provides a transparent and auditable record of all
activity related to the loan.

![asset lifecycle](/img/learn/asset-lifecycle/loan-lifecycle.png)

## Loan Pools and Markers

Loan Pools allow for the bundling of individual loans into a single, more easily tradable security. This provides a
means for pooling risk and increasing liquidity for investors. The Provenance Blockchain provides a flexible solution
for creating these loan pools by using its Marker construct.

A loan trading platform dApp can be used to select loans for contribution to a pool and create the Marker. The
loan-level data is stored in the EOS and can be permissioned to the loan trading platform, giving them access to the
data necessary to make informed decisions on loan selection.

Each Marker has a token representing ownership in the pool, with a specific name or denomination that is unique to the
pool. The supply of shares in the token can be fixed at creation, or it can be floating, with the number of shares
changing based on investor participation in the pool.

In the case of a Restricted Marker, the trading of shares in the loan pool is controlled by the loan originator and the
trading platform. This ensures that the loans are managed in a manner consistent with the intended use of the loan pool.
For example, for a loan pool representing a whole loan sale, the supply of tokens may be set to one share, indicating
the sale of the entire pool of loans to a single investor.

The Provenance Blockchain provides the ability to create multiple types of loan structures, making it a powerful
platform for managing loan assets. The creation of loan pools through the use of Markers provides a means of pooling
risk, increasing liquidity, and making loans more easily tradable, making it an attractive platform for loan
originators, loan servicers, and investors.

![asset lifecycle](/img/learn/asset-lifecycle/loan-lifecycle-structure.png)

This flexibility in pool creation is a major advantage of using Provenance Blockchain for loan trading. By using NFTs to
represent loans and Markers to represent pools, a wide range of loan pool structures can be created, including
Mortgage-Backed Securities (MBS), Collateralized Mortgage Obligations (CMOs), Residential Mortgage-Backed Securities (
RMBS), Commercial Mortgage-Backed Securities (CMBS), Asset-Backed Securities (ABS), Loan Participations, Whole Loan
Pools, Synthetic Collateralized Debt Obligations (CDOs), Mezzanine Loan Pools, Residential Whole Loan Pools, Commercial
Whole Loan Pools, and Consumer Loan Pools.


