import Button from '@site/src/components/Button'

// @ts-ignore-next-line
import ConnectUrl from '@site/static/img/connect.png'
// @ts-ignore-next-line
import ConnectLogos from '@site/static/img/connect-logos.png'

const ConnectBtn = props => (
  <Button linkTo="https://provenance.io/connect/" showArrow {...props}>
    Connect
  </Button>
)

export default function Connect() {
  return (
    <section className="mx-auto grid grid-cols-1 md:max-w-5xl md:grid-cols-2 md:items-center xl:max-w-screen-xl 2xl:max-w-screen-2xl">
      <div className="container py-16">
        <h2 className="font-MaisonNeueExtended text-5xl font-bold text-neutral-600">
          <img
            src={ConnectUrl}
            alt="Connect"
            className="h-[2.625rem] w-[17.181875rem]"
          />
        </h2>
        <p className="mt-4 text-2xl text-grey-700">
          Leverage industry-leading service providers - they’re integrated and
          ready for you.
        </p>
        <ConnectBtn className="mt-16 hidden lg:block" />
      </div>

      <div className="flex w-full justify-end justify-self-end pl-8 md:pl-12 lg:mx-auto lg:pl-0 xl:pr-24">
        <img src={ConnectLogos} alt="Connect Logos" className="w-full" />
      </div>

      <div className="container py-16 lg:hidden">
        <ConnectBtn />
      </div>
    </section>
  )
}
