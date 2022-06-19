import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/home.module.css';

const Home: NextPage = () => {
  const day:string = (new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase());

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <p className={styles.title}>happy {day}</p>
        <Image
          src='/images/bc-headpat.gif'
          alt='headpat'
          width={220}
          height={178}
        />
      </main>
    </div>
  );
};

export default Home;
