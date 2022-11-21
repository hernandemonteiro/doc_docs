import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          doc_docs - package to generate docments for NextJS projects!
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://github.com/hernandemonteiro/doc_docs">doc_docs</a>{" "}
          For NextJS!
        </h1>
        <div className={styles.grid}>
          <a href="https://doc-docs.vercel.app/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about doc_docs.</p>
          </a>
          <a
            href="https://github.com/hernandemonteiro/doc_docs"
            className={styles.card}
          >
            <h2>Github &rarr;</h2>
            <p>Discover and contribute to doc_docs project.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/hernandemonteiro"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by <span className={styles.logo}>Hernande Monteiro</span>
        </a>
      </footer>
    </div>
  );
}