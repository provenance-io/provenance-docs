---
title: Introduction
---
# Provenance Blockchain

import { DocSubheader } from '/docs/components/DocSubheader';

<DocSubheader text="Provenance Blockchain is a distributed, Proof-of-Stake Blockchain designed for the Financial Service Industry."
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

## Introduction

Welcome to the **Provenance Blockchain Documentation**. Our open source software is built on the robust foundation
of two powerful technologies, the [Cosmos SDK](https://docs.cosmos.network/main/) and the [Tendermint](https://docs.tendermint.com/master/) blockchain application platforms. In order to make the
most out of Provenance, it's important to have a basic understanding of these technologies.

To get started, we recommend reviewing the [Cosmos SDK basics documentation](https://docs.cosmos.network/main/intro/overview.html) and
the [Tendermint overview](https://docs.tendermint.com/master/introduction/what-is-tendermint.html#). These resources
will provide a comprehensive understanding of the technologies that power Provenance and help ensure you have the
knowledge necessary to effectively utilize our product.

We understand that technical documentation can often be dense and challenging to navigate. As such, we have made every
effort to present the information in a clear, concise, and user-friendly manner. If you have any questions or need
assistance, please don't hesitate to reach out to our team. We're here to help you succeed in your blockchain endeavors.

The Provenance Blockchain open source code is maintained at https://github.com/provenance-io

Provenance Blockchain is licensed under the [Apache 2.0 license](https://www.apache.org/licenses/LICENSE-2.0).

<br/>
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


