import { H } from "highlight.run";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Errors Demo Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Errors Demo Page</h1>

        <div className={styles.grid}>
          <button>Throw an Error</button>
        </div>
      </main>
    </div>
  );
}
