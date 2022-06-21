import type { NextPage } from 'next';
import styles from '../styles/home.module.css';
import { Images } from '../types';
import { getImage } from '../util/helpers';
const images: Images = require('../public/images/data.json');

const Home: NextPage = () => {
  const day: string = new Date()
    .toLocaleDateString('en-US', { weekday: 'long' })
    .toLowerCase();
  const { src, width, height } = getImage(images);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          <p className={styles.title}>happy {day}</p>
          <picture>
        {
            // eslint-disable-next-line @next/next/no-img-element
            src && <img
              className={styles.card}
              src={src}
              alt='headpat'
              width={width}
              height={height}
          />
            }
            </picture>
          </div>
      </main>
    </div> 
  );
};

export default Home;
