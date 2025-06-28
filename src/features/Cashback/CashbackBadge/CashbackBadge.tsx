import styles from './CashbackBadge.module.scss';

export const CashbackBadge = () => {
  return (
    <div className={styles.container}>
      <h3 className={styles.value}>1000 TON</h3>
      <h4 className={styles.description}>Left to boost cacheback</h4>
    </div>
  );
};
