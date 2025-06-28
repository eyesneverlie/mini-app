import styles from './CollectionSkeleton.module.scss';

export const CollectionSkeleton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}></div>
      <div className={`${styles.block} ${styles.name}`}></div>
      <div className={`${styles.block} ${styles.price}`}></div>
      <div className={styles.pairedBlock}>
        <div className={styles.block}></div>
        <div className={styles.block}></div>
      </div>
    </div>
  );
};
