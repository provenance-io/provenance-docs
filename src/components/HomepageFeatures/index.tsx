import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import {
  LightBulbIcon,
  PuzzlePieceIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Mission',
    Svg: PuzzlePieceIcon,
    description: (
      <>
        Provenance Blockchain is a public open source blockchain designed and
        developed to deliver material business benefits to financial services
        participants and developers through its ledger, registry and exchange
        capabilities across multiple financial assets and markets.
      </>
    ),
  },
  {
    title: 'Ideation',
    Svg: LightBulbIcon,
    description: (
      <>
        The leading public open-source blockchain for financial services,
        leveraged by over 50 financial institutions and operating at scale today
        with billions of dollars of digital financial assets transacted across
        lending, payments and marketplaces.
      </>
    ),
  },
  {
    title: 'Community',
    Svg: UserGroupIcon,
    description: (
      <>
        Join the Provenance Blockchain Community and be a part of the change
        that is coming to financial services.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
