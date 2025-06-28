import { useCallback, useState, useEffect } from 'react';
import { Collection } from './Collection';
import { ICollection } from '../../../data-access';
import { SearchInput } from '../../../ui';
import { CollectionSkeleton } from './CollectionSkeleton';
import { VolumeButton } from './VolumeButton';
import styles from './Collections.module.scss';

export const Collections = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [collections, setCollections] = useState<ICollection[]>([]);

  const fetchData = useCallback(async () => {
    await new Promise((res) => setTimeout(res, 1000));

    const items = Array.from({ length: 10 }, (_, i) => {
      return {
        imageUrl: 'https://picsum.photos/200/300',
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

  const handleVolumeSet = (volume: {
    volume: 'up' | 'down';
    period: '24h' | 'week' | 'month';
  }) => {
    console.log('volume = ', volume);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className={styles.container}>
      <div className={styles.filters}>
        <SearchInput />
        <VolumeButton onSet={handleVolumeSet} />
      </div>
      {isLoading
        ? Array(5)
            .fill(null)
            .map((_, i: number) => <CollectionSkeleton key={`id-${i + 1}`} />)
        : collections.map((collection) => (
            <Collection key={collection.id} data={collection} />
          ))}
    </div>
  );
};
