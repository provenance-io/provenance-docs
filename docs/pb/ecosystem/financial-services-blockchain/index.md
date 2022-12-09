# Financial Services Blockchain

import { DocSubheader } from '/docs/components/DocSubheader';

<DocSubheader text="Provenance Blockchain provides the foundation to build marketplaces and exchanges for buyers and sellers of digital assets." />

## Disintermediation

Many intermediaries argue that their services are necessary for the market to function. Who else will safeguard investors if not a trusted third party? But such an argument is a false dichotomy as it presumes trust is necessary.

Provenance Blockchain reduces third-party intermediation and internal staffing costs, promotes greater transparency and liquidity, and allows for new kinds of financial engineering and business opportunities. The goal is that any firm using Provenance Blockchain benefits from the blockchain and pays approximately ⅓ of that benefit back in [Hash gas fee payments](../../contributing/adr/300-core-concepts/301-hash.md) back to Provenance Blockchain.

## Distributed Trust

Provenance Blockchain has three key attributes: **Distributed Information, Immutable History,** and **Trustless Data**. Distributed content provides defense against hacking, eliminates agency problems that can lead to malfeasance, and helps support enforceable digital contracts. Data written on the ledger cannot be changed. Immutable information is critical in establishing asset history and the truth of the data. Having to rep and warranty data—analogous to “trust me”—undermines the system and introduces risk to those who provide these attestations.

These attributes are necessary, but not sufficient, to eliminate rent-seeking and bring incremental value to financial markets. To transform financial services, Provenance Blockchain performs three key functions: ledger, registry and exchange.

- **Ledger –** Movements of value are done on blockchain, delivering true economies of scale. Immutable records reduce or eliminate the need for trustees and reconciliation and provide real time visibility to information.
- **Registry -** Ownership is determined solely on blockchain, allowing T+0 pledging and sales of assets. Chain of custody is immutable, and recording and conveyance are the same thing, eliminating latency/discrepancies.
- **Exchange -** Price discovery becomes transparent, eliminating the need for market making intermediaries. Assets can be tokenized, allowing fractionalized sales and creating liquidity in illiquid asset classes.

## Enabling Marketplaces

Numerous financial marketplaces leverage Provenance Blockchain to connect buyers and sellers of digital assets. Marketplaces are are analogous to a town full of stores. Each store has products for primary and secondary offerings. Some stores require accreditation to enter and transact. For example, Figure’s Passport solution leverages the [Provenance Blockchain Name Module](/docs/pb/modules/name-module.md) for accreditation. Marketplaces build on Provenance Blockchain's support for loans, loan participation and private funds. Soon these marketplaces will support a full range of securities, from asset-backed securities to private equity.

Marketplaces leveraging Provenance Blockchain allow two counter-parties to trade bilaterally, settling real-time without counter-party or settlement risk using the Provenance Blockchain [Account](/docs/pb/modules/inherited-modules.md), [Marker](/docs/pb/modules/marker-module.md), and [Bank](/docs/pb/modules/inherited-modules.md) Modules. Complex ownership, exchange, and settlement functions can be expressed using [Provenance Blockchain Smart Contracts](/docs/pb/modules/provwasm-smart-contracts.md). Together, these Provenance Blockchain features allow unprecedented access, ease, and transparency to asset and fund interest buyers and sellers.

## Digital Fund Services

Provenance Blockchain is revolutionizing how private funds are digitally issued, accessed and exchanged.

[Figure's Digital Fund Services](https://provenance.io/#digital-fund-services) on Provenance Blockchain utilize tools for digital fundraising and ongoing fund management with a primary marketplace for raising capital and a secondary marketplace for trading fund interests. Using [Smart Contracts](/docs/pb/modules/provwasm-smart-contracts.md) in concert with the Provenance Blockchain [Account](/docs/pb/modules/inherited-modules.md), [Marker](/docs/pb/modules/marker-module.md), and [Bank](/docs/pb/modules/inherited-modules.md) modules improves liquidity profile of illiquid funds through bilateral secondary trading of fund interests with real time settlement while eliminating high search and transaction costs of current secondary markets.
