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
                  <h3>🙌 Join our community</h3>
                </div>
                <div className="card__body">
                  <p>
                    Share your thoughts on our discord channel to
                    improve Solana.Fm.
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className={clsx('col col--4', styles.feature)}>
            <Link className="navbar__link" to="https://solana.fm/">
              <div className="card">
                <div className="card__header">
                  <h3>😊 Create a free account</h3>
                </div>
                <div className="card__body">
                  <p>Try out our Free plan and query on Solana.Fm</p>
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
                    Use our built-in queires to retrieve data about Tokens,
                    Epochs & more!
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className={clsx('col col--4', styles.feature)}>
            <Link
              className="navbar__link" to="docs/DynamicQ">
              <div className="card">
                <div className="card__header">
                  <h3>🤩 Dynamic Queries</h3>
                </div>
                <div className="card__body">
                  <p>
                    Build your own queires using where, orderby & distinct
                    clauses
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className={clsx('col col--4', styles.feature)}>
            <div className="card">
              <div className="card__header">
                <h3>🙌 Feedback & Improvements</h3>
              </div>
              <div className="card__body">
                <p>Share on our discord channel to improve Sol.Fm.</p>
              </div>
            </div>
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
