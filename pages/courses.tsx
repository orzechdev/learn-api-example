import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { learningItemList } from "../data/items";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Courses</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Courses</h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/courses.tsx</code>
        </p>

        <div className={styles.grid}>
          {learningItemList?.map((item) => (
            <Link key={item.id} href={item.url}>
              <a className={styles.card}>
                <h2>{item.name} &rarr;</h2>
              </a>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
