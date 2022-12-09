# Provenance Blockchain

import { DocSubheader } from '/docs/components/DocSubheader';

<DocSubheader text="Provenance Blockchain is a distributed, proof-of-stake blockchain designed for financial service industries."
/>

export const DataCard = ({ title, content, link }) => (
  <a href={link} target="" rel="noreferrer">
    <div style={{
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.9)',
      transaction: '0.3s',
      width: '100%',
      backgroundColor: 'var(--ifm-color-primary)',
      borderRadius: '10px',
    }}>
      <div style={{
        padding: '16px 12px 16px 16px',
        color: 'white',
      }}>
        <h4><b>{title}</b></h4>
        <p style={{ margin: '0'}}>{content}</p>
      </div>
    </div>
  </a>
);

## Getting Started

> The Provenance blockchain is based on the [Cosmos SDK](https://docs.cosmos.network/main/) and the [Tendermint](https://docs.tendermint.com/master/) blockchain application platforms. It is useful to have a basic understanding of both these technologies prior to reading the Provenance documentation. Refer to the [Cosmos SDK basics documentation](https://docs.cosmos.network/main/intro/overview.html) and the [Tendermint overview](https://docs.tendermint.com/master/introduction/what-is-tendermint.html#) for more information.

<div style={{
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '20px',
  }}>
  <DataCard title="Read"     content="about the Provenance blockchain and financial services" link="https://provenance-io.github.io/provenance-docs/docs/pb/blockchain/introduction/"/>
  <DataCard title="Start"    content="with the basics of the Provenance Blockchain network" link="https://provenance-io.github.io/provenance-docs/docs/category/basics"/>
  <DataCard title="Install"  content="the Provenance blockchain application to run a node" link="https://provenance-io.github.io/provenance-docs/docs/pb/blockchain/running-a-node/"/>
  <DataCard title="Explore"  content="the entirety of the Provenance ecosystem and community" link="https://provenance-io.github.io/provenance-docs/docs/pb/ecosystem/community/"/>
  <DataCard title="Learn"    content="how the Provenance Modules empower business" link="https://provenance-io.github.io/provenance-docs/docs/pb/modules/"/>
  <DataCard title="Discover" content="how the Provenance Contract Execution Environment works" link="https://provenance-io.github.io/provenance-docs/docs/pb/p8e/overview/"/>
  <DataCard title="Build"    content="your integration into the Provenance Blockchain" link="https://provenance-io.github.io/provenance-docs/docs/pb/integrating/integrating-with-p8e/"/>
  <DataCard title="Follow"   content="real-world use cases and applications built on Provenance" link="https://provenance-io.github.io/provenance-docs/docs/discover/dapps"/>
  </div>

<!-- - [Read](/docs/pb/blockchain/introduction/) about the Provenance blockchain and financial services.

- Start with the [basics](/docs/category/basics) of the Provenance blockchain network

- [Install](/docs/pb/blockchain/running-a-node/) the Provenance blockchain application, and start running a node

- Explore the Provenance [ecosystem](/docs/pb/ecosystem/community/)

- Learn how to use the [Provenance modules](/docs/pb/modules/) and how they empower blockchain-based business like NFT and DeFi

- Discover the benefits of the Provenance client-side [Contract Execution Environment](/docs/pb/p8e/overview/)

- Get started [integrating with Provenance](/docs/pb/integrating/integrating-with-p8e/)

- Follow [real-world use cases and applications](/docs/discover/dapps) built on Provenance -->
