import { TonBlueIcon, TonIcon, RewardIcon } from '../../components/icons';
import { Image } from '../../ui';
import styles from './BuyGift.module.scss';

export const BuyGift = () => {
  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <div className={styles.item}>
          <Image className={styles.avatar} src='' alt='' />
          <div className={styles.details}>
            <span className={styles.title}>Restless Jar</span>
            <span className={styles.id}>#35152</span>
          </div>
          <div className={styles.priceDetails}>
            <span className={styles.priceTitle}>Price</span>
            <span className={styles.price}>
              40 <TonBlueIcon />
            </span>
          </div>
        </div>
      </div>
      <div className={styles.infoPanel}>
        <span className={styles.infoTitle}>Available balance</span>
        <span className={styles.balance}>
          0 <TonIcon />
        </span>
      </div>
      <div className={styles.infoPanel}>
        <span className={styles.infoTitle}>Purchase reward</span>
        <span className={styles.balance}>
          400 <RewardIcon />
        </span>
      </div>
    </div>
  );
};
