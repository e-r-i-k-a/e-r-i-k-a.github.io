import { useEffect, useState } from "react";
import type { GetStaticProps } from 'next';
import styles from '../styles/home.module.css';
import { getImage } from '../util/helpers';
import { Image, Images } from '../types';

const Home: React.FunctionComponent<HomeProps> = ({ json }) => {
  const [day, setDay] = useState('');
  const [image, setImage] = useState<Image | null>(null);

  useEffect(() => {
    setDay(() => new Date()
      .toLocaleDateString('en-US', { weekday: 'long' })
      .toLowerCase());
    const images: Images = JSON.parse(json);
    setImage(() => getImage(images));
  }, [json]);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
          {image?.src && day &&
            <>
              <p className={styles.title}>happy {day}</p>
              <img
                className={styles.card}
                src={image.src}
                alt='headpat'
                width={image.width}
                height={image.height}
              />
            </>
          }
        </div>
      </main>
    </div>
  );
};

export default Home;

type HomeProps = {
  json: string
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await import('../public/images/data.json');
  return {
    props: { json: JSON.stringify(data) },
  }
}