import styles from './ActivityItemSkeleton.module.scss';

export const ActivityItemSkeleton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}></div>
      <div className={styles.content}>
        <div className={styles.details}>
          <div className={styles.block}></div>
          <div className={styles.block}></div>
        </div>
        <div className={styles.details}>
          <div className={styles.block}></div>
          <div className={styles.block}></div>
        </div>
        <div className={`${styles.block} ${styles.status}`}></div>
      </div>
    </div>
  );
};
