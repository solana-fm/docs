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
                    Connect with the <b>Core Team</b> and other users!
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className={clsx('col col--4', styles.feature)}>
            <Link className="navbar__link" to="https://solana.fm/">
              <div className="card">
                <div className="card__header">
                  <h3>😊 Create a Free Account</h3>
                </div>
                <div className="card__body">
                  <p>Try out our Free Plan & Query on <b><u>Solana.FM</u></b>.</p>
                </div>
              </div>
            </Link>
          </div>
          <div className={clsx('col col--4', styles.feature)}>
            <Link className="navbar__link" to="/docs/models/Account">
              <div className="card">
                <div className="card__header">
                  <h3>🤔 Standard Queries</h3>
                </div>
                <div className="card__body">
                  <p>
                    Utilise our built-in queries to retrieve data on <b>Tokens</b>, <b>Blocks</b> & more!
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className={clsx('col col--4', styles.feature)}>
            <Link className="navbar__link" to="docs/DynamicQ">
              <div className="card">
                <div className="card__header">
                  <h3>🤩 Dynamic Queries</h3>
                </div>
                <div className="card__body">
                  <p>
                    Build your own queries using <b><u>WHERE</u></b>, <b><u>ORDERBY</u></b> & <b><u>DISTINCT</u></b> clauses.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className={clsx('col col--4', styles.feature)}>
            <Link className="navbar__link" to="https://graphql.org/learn/queries/">
              <div className="card">
                <div className="card__header">
                  <h3> 📊 GraphQL Queries</h3>
                </div>
                <div className="card__body">
                  <p>Find out how to query on <b><u>GraphQL</u></b> using their docs.</p>
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
