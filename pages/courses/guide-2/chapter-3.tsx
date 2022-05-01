import type { NextPage } from "next";
import Head from "next/head";
import { learningItemList } from "../../../data/items";
import styles from "../../../styles/Home.module.css";

const Home: NextPage = () => {
  const guide = learningItemList[1];
  const guideChapter = guide.steps![2];

  const prevGuideChapter = guide.steps![1];

  return (
    <div className={styles.container}>
      <Head>
        <title>{`${guide.name} - ${guideChapter.name}`}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>{guide.name}</h1>

        <p className={styles.description}>Welcome to {guideChapter.name}!</p>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>{`pages${guideChapter.url}.tsx`}</code>
        </p>

        <div className={styles.grid}>
          <a href={prevGuideChapter.url} className={styles.card}>
            <h2>&larr; Go to prev chapter</h2>
          </a>
        </div>
      </main>
    </div>
  );
};

export default Home;
