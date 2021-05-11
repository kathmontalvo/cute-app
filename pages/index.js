import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    // <div className={styles.container}>
    <div>
      <Head>
        <title>US | Home</title>
        <meta name="description" content="US App" />
        <meta name="keywords" content="dates" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className={styles.title}>Home</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur exercitationem aliquid reiciendis cumque, at, illum soluta iusto impedit sapiente laborum blanditiis provident necessitatibus ipsa minus iure doloribus eaque sunt ut.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur exercitationem aliquid reiciendis cumque, at, illum soluta iusto impedit sapiente laborum blanditiis provident necessitatibus ipsa minus iure doloribus eaque sunt ut.</p>
      
      <Link href="/dates">
        <a className={styles.btn}>Ver Dates listing</a>
      </Link>
    </div>
  )
}
