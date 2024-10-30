import { useEffect, useState } from 'react'
import Card from '@site/src/components/LearnCard'
import Cards from '@site/src/components/Cards'
import PaginationClicker from '@site/src/components/PaginationClicker'
import useItemsPerPage from '@site/src/hooks/useItemsPerPage'

const LearnList = [
  {
    title:
      'Eliminate Counterparty Risks and Inefficiencies from Financial Transactions',
    tag: 'Education',
    description:
      'Introducing the Hold Module, a groundbreaking innovation from Provenance Blockchain.',
    link: 'https://provenance.io/learn/posts/hold-module/',
  },
  {
    title: 'The Power Cosmos Group Module Enables for Financial Services',
    tag: 'Education',
    description:
      'The Cosmos SDK version 0.46.0 Group Module is powerful core functionality for financial use cases.',
    link: 'https://provenance.io/learn/posts/Cosmos-SDK-Group-Module/',
  },
  {
    title: 'Provenance Blockchain Markers vs. ERC3643 Smart Contract Tokens',
    tag: 'Education',
    description:
      'Unlocking the power of Provenance Blockchain: Enhanced security token management',
    link: 'https://provenance.io/learn/posts/Markers-vs-ERC3643/',
  },
  {
    title: 'Seamless Transactions Across Chains: Interoperability',
    tag: 'Education',
    description:
      'Interoperability refers to the ability of distinct blockchain networks to communicate, exchange data, and share resources seamlessly.',
    link: 'https://provenance.io/learn/posts/Blockchain-Interoperability-Introduced/',
  },
  {
    title: 'Blockchains: Private vs. Public',
    tag: 'Education',
    description:
      'Understanding the Differences and Benefits between decentralized public and private blockchains.',
    link: 'https://provenance.io/learn/posts/Private-vs-Public-Blockchain/',
  },
  {
    title: 'Five Reasons Why Provenance Blockchain was Built with Cosmos SDKs',
    tag: 'Education',
    description:
      'The Cosmos SDKs bring key foundational attributes necessary for an institutional-grade and enduring blockchain.',
    link: 'https://provenance.io/learn/posts/Built-With-Cosmos-SDKs/',
  },
]

export default function Learn() {
  const [currentNumber, setCurrentNumber] = useState(1)
  const itemsPerPage = useItemsPerPage()
  const [paginatedList, setPaginatedList] = useState(LearnList)

  useEffect(() => {
    const start = (currentNumber - 1) * itemsPerPage
    const end = start + itemsPerPage
    setPaginatedList(LearnList.slice(start, end))
  }, [currentNumber, itemsPerPage])

  return (
    <section className="container py-16">
      <h2 className="font-MaisonNeueExtended text-5xl font-bold text-neutral-600">
        Learn
      </h2>
      <p className="mt-4 text-2xl text-grey-700">
        There’s a lot going on under the hood of Provenance Blockchain.
      </p>
      <Cards className="my-12">
        {paginatedList.map((props, idx) => (
          <Card key={idx} {...props} />
        ))}
      </Cards>

      <PaginationClicker
        currentNumber={currentNumber}
        totalItems={LearnList.length / itemsPerPage}
        setCurrentNumber={setCurrentNumber}
      />
    </section>
  )
}
