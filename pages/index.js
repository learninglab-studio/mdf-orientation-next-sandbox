import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MDF Sandbox</title>
        <meta name="description" content="a sandbox for MDF Orientation." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          welcome to the codelab 
        </h1>
        <p className={styles.description}>
          just a simple next app to get us going during MDF orientation.
        </p>
      </main>
    </div>
  )
}
