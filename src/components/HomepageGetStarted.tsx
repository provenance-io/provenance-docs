import Button from '@site/src/components/Button'
import Card from '@site/src/components/Card'
import Cards from '@site/src/components/Cards'

import DappIcon from '@site/static/img/icons/dapp.svg'
import NodeIcon from '@site/static/img/icons/node.svg'
import SmartContractIcon from '@site/static/img/icons/smart-contract.svg'
import TokenIcon from '@site/static/img/icons/token.svg'
import ValidatorIcon from '@site/static/img/icons/validator.svg'
import WalletIcon from '@site/static/img/icons/wallet.svg'

const GetStartedList = [
  {
    Icon: WalletIcon,
    title: 'Get a wallet & HASH',
    children:
      'Provenance Blockchain developers can start by first setting up an account holding HASH. HASH will be needed to pay fees associated with submitting a transaction to the blockchain.',
    link: '/docs/quick-start/wallet-and-hash',
  },
  {
    Icon: NodeIcon,
    title: 'Set-up & run a node',
    children:
      'Nodes on the Provenance Blockchain network are simply servers that can be configured for seeding, data archival, and validation.',
    link: '/docs/pb/blockchain/running-a-node/running-a-node-1/',
  },
  {
    Icon: ValidatorIcon,
    title: 'Become a Validator',
    children:
      'Validator nodes perform the critical function of proposing and validating transactions on the Provenance Blockchain.',
    link: '/docs/quick-start/become-a-validator',
  },
  {
    Icon: TokenIcon,
    title: 'Tokenize an asset',
    children:
      'Asset tokenization is the process of converting rights to an asset into a digital token, allowing the asset to be easily transferable, fractional, and tradable on various markets.',
    link: '/docs/learn/asset-lifecycle/markers',
  },
  {
    Icon: DappIcon,
    title: 'Integrate a dApp',
    children:
      'Connect and operate your decentralized application (dApp) on Provenance Blockchain.',
    link: '/docs/quick-start/build-a-dapp',
  },
  {
    Icon: SmartContractIcon,
    title: 'Write a Smart Contract',
    children:
      'Build and propose a new smart contract to Provenance Blockchain.',
    link: '/docs/quick-start/write-a-smart-contract',
  },
]

export default function GetStarted() {
  return (
    <section className="container py-16">
      <h2 className="font-MaisonNeueExtended text-5xl font-bold text-neutral-600">
        Get Started
      </h2>
      <Cards className="my-12">
        {GetStartedList.map((props, idx) => (
          <Card key={idx} {...props} />
        ))}
      </Cards>
      <Button showArrow to="/docs/quick-start/start-here">
        Find More
      </Button>
    </section>
  )
}
