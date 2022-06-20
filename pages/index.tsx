import type { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/home.module.css';
import useSWR from 'swr';

const Home: NextPage = () => {
  const day: string = new Date()
    .toLocaleDateString('en-US', { weekday: 'long' })
    .toLowerCase();
  const { data = [] } = useSWR('/api/images');

  return (
    data.length ? 
    <div className={styles.container}>
      <main className={styles.main}>
        <p className={styles.title}>happy {day}</p>
        <Image
          src={data[0].src}
          alt='headpat'
          width={data[0].width}
          height={data[0].height}
        />
      </main>
    </div> 
    : null
  );
};

export default Home;
