import { TonIcon } from '../../../components/icons';
import { Button } from '../../../ui';
import styles from './CashbackClaim.module.scss';

export const CashbackClaim = () => {
  const handleClaimClick = (): void => {};

  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <div className={styles.value}>
          0 <TonIcon />
        </div>
        <div className={styles.status}>Earned</div>
      </div>
      <Button theme='white' onClick={handleClaimClick}>
        Claim
      </Button>
    </div>
  );
};
