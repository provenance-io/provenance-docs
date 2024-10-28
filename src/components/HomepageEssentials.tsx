import Card from '@site/src/components/Card';
import Cards from '@site/src/components/Cards';

const EssentialsList = [
  {
    title: 'Purpose Built for Financial Services',
    children:
      'A guide to what makes Provenance Blockchain purpose-built for financial services, its core tenets, and what underpins those tenets.',
    link: '/',
  },
  {
    title: 'Guided Tutorial: Start on Testnet',
    children:
      'Don’t be intimidated by blockchain fundamentals, there’s nothing new and magical here.  We’ll walk you step-by-step through important basics: accounts, wallets and coin transfers.',
    link: '/',
  },
];

export default function Essentials(): JSX.Element {
  return (
    <section className="container py-16">
      <h2 className="font-bold font-MaisonNeueExtended text-5xl text-neutral-600">
        Essentials
      </h2>
      <p className="text-grey-700 text-2xl mt-4 mb-8">
        Provenance Blockchain is where the financial services industry operates.
      </p>
      <Cards maxCols={2}>
        {EssentialsList.map((props, idx) => (
          <Card key={idx} {...props} />
        ))}
      </Cards>
    </section>
  );
}
