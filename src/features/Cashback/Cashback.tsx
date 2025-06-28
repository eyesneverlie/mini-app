import { Button } from '../../ui';
import { CashbackClaim } from './CashbackClaim';
import { CashbackStatistics } from './CashbackStatistics';
import { CashbackBadge } from './CashbackBadge';
import { CurrentCashback } from './CurrentCashback';
import styles from './Cashback.module.scss';

export const Cashback = () => {
  const handleMoreInfoClick = (): void => {};

  const handleInStoreClick = (): void => {};

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Cashback</h3>
      <h4 className={styles.subTitle}>
        Level up and earn TON from every purchase
      </h4>
      <CashbackClaim />
      <CashbackStatistics />
      <CurrentCashback />
      <CashbackBadge />
      <div className={styles.actionButtons}>
        <Button theme='white' onClick={handleMoreInfoClick}>
          More Info
        </Button>
        <Button onClick={handleInStoreClick}>In Store</Button>
      </div>
    </div>
  );
};
