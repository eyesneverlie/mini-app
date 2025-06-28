import { useEffect, useState } from 'react';
import { ActivityItemSkeleton } from '../ActivityItemSkeleton';
import { ActivityItem } from '../ActivityItem';
import styles from './MyActivity.module.scss';

export const MyActivity = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timerId);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <span className={styles.caption}>Stickers</span>
        <span className={`${styles.caption} ${styles.activeCaption}`}>
          Price
        </span>
        <span className={styles.caption}>Type</span>
      </div>
      {isLoading ? (
        Array(5)
          .fill(null)
          .map((_, i: number) => <ActivityItemSkeleton key={`id-${i + 1}`} />)
      ) : (
        <div className={styles.list}>
          <ActivityItem />
          <ActivityItem />
          <ActivityItem />
          <ActivityItem />
          <ActivityItem />
        </div>
      )}
    </div>
  );
};
