import Button from '@site/src/components/Button';

export default function HomepageHeader() {
  return (
    <header className="px-0 py-24 bg-header-flare bg-no-repeat bg-[center_bottom]">
      <div className="container space-y-8">
        <h1 className="text-blue-700 font-MaisonNeueExtended font-bold text-[3rem]">
          Build Here 🎯
        </h1>
        <p className="text-neutral-600 max-w-[34rem] text-[1.0625rem]">
          Find the resources needed to rapidly build, test, and deploy
          applications that make financial services operate better.
        </p>
        <p>
          <Button showArrow>Start on Testnet</Button>
        </p>
      </div>
    </header>
  );
}
