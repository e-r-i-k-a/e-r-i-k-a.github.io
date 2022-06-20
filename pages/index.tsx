import type { NextPage } from 'next';
import Image from 'next/image';
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
        <p className={styles.title}>happy {day}</p>
        {
          src && <Image
          src={src}
          alt='headpat'
          width={width}
          height={height}
          />
        }
      </main>
    </div> 
  );
};

export default Home;
