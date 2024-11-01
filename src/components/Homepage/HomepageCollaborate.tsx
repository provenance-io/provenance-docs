import Link from '@docusaurus/Link'
import Card from '@site/src/components/Card'
import Cards from '@site/src/components/Cards'

// @ts-ignore-next-line
import Discord from '@site/static/img/icons/discord.png'
// @ts-ignore-next-line
import Meet from '@site/static/img/icons/meet.png'

const CollaborateList = [
  {
    icon: Discord,
    title: 'Discord',
    children:
      'Forums for conversations with other ecosystem participants, developers, and validators. The Provenance Blockchain Foundation actively moderates and participates in the forums.',
    link: 'https://discord.com/invite/kNZC8nwCFP',
  },
  {
    icon: Meet,
    title: 'Bi-Weekly Community Call',
    children: (
      <>
        Every two-weeks ecosystem participants, developers, and validators come
        together to hear release schedule updates, discuss development
        questions, and learn from live use cases. Join us on{' '}
        <Link
          to="https://meet.google.com/qpt-qzjm-vjf"
          className="text-gray-600 underline"
        >
          Google Meets
        </Link>
        .
      </>
    ),
    link: 'https://hackmd.io/Dh8y3WlrTQCo0BVO1gAd5Q',
  },
]

export default function Collaborate(): JSX.Element {
  return (
    <section className="container py-16">
      <h2 className="font-MaisonNeueExtended text-5xl font-bold text-neutral-600">
        Collaborate
      </h2>
      <p className="mb-8 mt-4 text-2xl text-grey-700">
        Join the development community conversations already happening.
      </p>
      <Cards maxCols={2}>
        {CollaborateList.map((props, idx) => (
          <Card key={idx} {...props} />
        ))}
      </Cards>
    </section>
  )
}
