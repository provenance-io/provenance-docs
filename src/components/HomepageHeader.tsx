import Button from '@site/src/components/Button'

export default function HomepageHeader() {
  return (
    <header className="bg-header-flare bg-cover bg-[center_bottom] bg-no-repeat px-0 py-24">
      <div className="container space-y-8">
        <h1 className="font-MaisonNeueExtended text-[3rem] font-bold text-blue-700">
          Build Here 🎯
        </h1>
        <p className="max-w-[34rem] text-[1.0625rem] text-neutral-600">
          Find the resources needed to rapidly build, test, and deploy
          applications that make financial services operate better.
        </p>
        <p>
          <Button showArrow>Start on Testnet</Button>
        </p>
      </div>
    </header>
  )
}
