import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'The First Solana Indexer',
    Svg: require('../../static/img/solana-sol-logo.svg').default,
    description: (
      <>
        Access data from the solana blockchain with a click of a button with built in APIs
      </>
    ),
  },
  {
    title: 'Readable Data',
    Svg: require('../../static/img/graphql.svg').default,
    description: (
      <>
        Solana.Fm allows data to be easily queried and displayed on GraphQL.
      </>
    ),
  },
  {
    title: 'Powered by Nozomi',
    Svg: require('../../static/img/icon.svg').default,
    description: (
      <>
        Built through accuracy and for scalability.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
