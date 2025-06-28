import styles from './ProfileEarnTonCard.module.scss';

export const ProfileEarnTonCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.column}>
        <span className={styles.bullet}></span>
      </div>
      <div className={styles.column}>
        <h3 className={styles.title}>Referral commissions</h3>
        <h4 className={styles.description}>
          Earn from 20% to 50% in TON from their purchases
        </h4>
      </div>
    </div>
  );
};
