import React from 'react'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import styles from './index.module.css'
import HomepageFeatures from '../components/HomepageFeatures'

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row cards__container">
          <div className={clsx('col col--4', styles.feature)}>
            <Link className="navbar__link" to="https://docs.solana.com/">
              <div className="card">
                <div className="card__header">
                  <h3> 📓 Solana Official Docs</h3>
                </div>
                <div className="card__body">
                  <p>Find out more about Solana's infrastructure.</p>
                </div>
              </div>
            </Link>
          </div>
          <div className={clsx('col col--4', styles.feature)}>
            <Link className="navbar__link" to="https://discord.gg/TrRmqvG4">
              <div className="card">
                <div className="card__header">
                  <h3>🙌 Join our Discord Community</h3>
                </div>
                <div className="card__body">
                  <p>
                    Connect with the <b>Core Team</b>! 
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className={clsx('col col--4', styles.feature)}>
            <Link className="navbar__link" to="https://solana.fm/">
              <div className="card">
                <div className="card__header">
                  <h3>😊 Try out our queries</h3>
                </div>
                <div className="card__body">
                  <p>Start searching and querying <b>Solana.FM</b>.</p>
                </div>
              </div>
            </Link>
          </div>
          <div className={clsx('col col--4', styles.feature)}>
            <Link className="navbar__link" to="/docs/models/Transaction">
              <div className="card">
                <div className="card__header">
                  <h3>🤔 Standard Queries</h3>
                </div>
                <div className="card__body">
                  <p>
                    Utilise our built-in queries to retrieve data on <b>Transactions</b>, <b>Blocks</b> & more!
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className={clsx('col col--4', styles.feature)}>
            <Link className="navbar__link" to="docs/dynamic-queries">
              <div className="card">
                <div className="card__header">
                  <h3>🤩 Dynamic Queries</h3>
                </div>
                <div className="card__body">
                  <p>
                    Build your own queries using <b>WHERE</b>, <b>ORDERBY</b> & <b>DISTINCT</b> clauses.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className={clsx('col col--4', styles.feature)}>
            <Link className="navbar__link" to="https://graphql.org/learn/queries/">
              <div className="card">
                <div className="card__header">
                  <h3> 📊 GraphQL Docs</h3>
                </div>
                <div className="card__body">
                  <p>Visit GraphQL documentation to find out how to query on <b>GraphQL</b>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

function Home() {
  const { siteConfig } = useDocusaurusContext()
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
export default Home
