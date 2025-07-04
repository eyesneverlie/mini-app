import styles from './NftCardSkeleton.module.scss';

export const NftCardSkeleton = () => {
  return (
    <div className={styles.card}>
      <div className={styles.image}></div>
      <div className={styles.content}>
        <div className={styles.row}>
          <div className={styles.title} />
          <div className={styles.index} />
        </div>
        <div className={styles.button} />
      </div>
    </div>
  );
};
