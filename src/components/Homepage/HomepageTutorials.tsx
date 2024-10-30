import Button from '@site/src/components/Button'
import Card from '@site/src/components/Card'
import Cards from '@site/src/components/Cards'

const TutorialsList = [
  {
    title: 'Set-up Your First Validator Node',
    link: 'https://medium.com/provenanceblockchain/nitro-enclave-based-provenance-validator-882122714415',
  },
  {
    title: 'Build Your First dApp',
    link: 'https://provenance.io/learn/posts/Build-Your-First-dApp/',
  },
  {
    title: 'Connect dApps to WalletConnect',
    link: 'https://provenance.io/learn/posts/Creating-dApps-via-WalletConnect-JS/',
  },
  {
    title: 'ProvWasm Smart Contract',
    link: 'https://github.com/provenance-io/provwasm/blob/main/docs/tutorial/01-overview.md',
  },
]

export default function Tutorials() {
  return (
    <section className="container py-16">
      <h2 className="font-MaisonNeueExtended text-5xl font-bold text-neutral-600">
        Tutorials
      </h2>
      <p className="mt-4 text-2xl text-grey-700">
        Need a little help getting started? We’ve got you covered.
      </p>
      <Cards className="my-12">
        {TutorialsList.map((props, idx) => (
          <Card key={idx} {...props} />
        ))}
      </Cards>
      <Button showArrow linkTo="/docs/learn/learn-about">
        Find More
      </Button>
    </section>
  )
}
