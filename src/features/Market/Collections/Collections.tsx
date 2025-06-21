import { useCallback, useState, useEffect } from 'react';
import { Collection } from './Collection';
import { ICollection } from '../../../data-access';
import styles from './Collections.module.scss';

export const Collections = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [collections, setCollections] = useState<ICollection[]>([]);

  const fetchData = useCallback(async () => {
    await new Promise((res) => setTimeout(res, 1000));

    const items = Array.from({ length: 10 }, (_, i) => {
      return {
        imageUrl:
          'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
        name: 'Diamond Eyes' + i,
        description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        id: i + 1,
        price: 34.8,
      };
    });

    setCollections((prev) => [...prev, ...items]);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className={styles.container}>
      {isLoading && <div>Loading...</div>}
      {!isLoading &&
        collections.map((collection) => <Collection data={collection} />)}
    </div>
  );
};
