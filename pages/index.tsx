import type { NextPage } from 'next';
import styles from '../styles/home.module.css';
import { getImage } from '../util/helpers';
import { Image } from '../types';
import data from '../public/images/data.json';

const Home: NextPage = () => {
  const day: string = new Date()
    .toLocaleDateString('en-US', { weekday: 'long' })
    .toLowerCase();
  const image: Image = getImage(data);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
              <p className={styles.title}>happy {day}</p>
                <img
                  className={styles.card}
                  src={image.src}
                  alt='headpat'
                  width={image.width}
                  height={image.height}
                />
          </div>
      </main>
    </div> 
  );
};

export default Home;
