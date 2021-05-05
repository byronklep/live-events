import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import styles from '../styles/Layout.module.css'

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description}></meta>
        <meta name='keywords' content={keywords}></meta>
      </Head>

      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Live Events | Find the hottest shows',
  description: 'Find the latest punk, hip hop & edm events',
  keywords: 'music, punk, hip hop, edm, local, live, Houston, Texas',
}
