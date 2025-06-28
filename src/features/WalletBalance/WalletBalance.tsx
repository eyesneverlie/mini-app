import { ArrowUpIcon, FiltersIcon, PlusIcon } from '../../components/icons';
import { GlassyButton, Button, CircularButton } from '../../ui';
import { NothingFound } from '../../components';
import styles from './WalletBalance.module.scss';

export const WalletBalance = () => {
  const handleDepositClick = (): void => {};

  const handleWithdrawButton = (): void => {};

  const handleFiltersClick = (): void => {};

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h3 className={styles.title}>Collectical wallet balance</h3>
        <div className={styles.balance}>0 TON</div>
        <div className={styles.buttons}>
          <Button theme='white' onClick={handleDepositClick}>
            Deposit <PlusIcon />
          </Button>
          <GlassyButton onClick={handleWithdrawButton}>
            Withdraw <ArrowUpIcon />
          </GlassyButton>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.heading}>
          <h3 className={styles.sectionTitle}>Recent Actions</h3>
          <CircularButton onClick={handleFiltersClick}>
            <FiltersIcon />
          </CircularButton>
        </div>
        <NothingFound
          title='Make first transaction'
          description='And start trading'
          showButton={false}
        />
      </div>
    </div>
  );
};
