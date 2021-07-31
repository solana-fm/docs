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
        <h3></h3>
      </div>
      <div className="container">
        <div className="row cards__container">
          <div className={clsx('col col--4', styles.feature)}>
            <Link 
            className="navbar__link"to =
              "https://docs.solana.com/">
            <div className="card">
              <div className="card__header">
                <h3>⛏ Solana Official Docs</h3>
              </div>
              <div className="card__body">
                <p>
                  Find out
                  more about Solana's infrastructure.
                </p>
              </div>
            </div>
            </Link>
          </div>
        </div>
        <div className="container">
          <h3></h3>
        </div>
        <div className="row cards__container">
          <div className={clsx('col col--4', styles.feature)}>
            <div className="card">
              <div className="card__header">
                <h3>⛏ Solana Official Docs</h3>
              </div>
              <div className="card__body">
                <p>
                  Click <a href="https://docs.solana.com/"> here</a> to find out
                  more about Solana's infrastructure.
                </p>
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
