import { Select, Button, CircularButton } from '../../../ui';
import styles from './ActionButtons.module.scss';

export const ActionButtons = () => {
  const toggleDepositModal = (): void => {};

  const toggleWithdrawModal = (): void => {};

  return (
    <div className={styles.container}>
      <Select name='token' options={[]} />
      <CircularButton
        className={styles.circularButton}
        onClick={toggleDepositModal}
      >
        +
      </CircularButton>
      <CircularButton
        className={styles.circularButton}
        onClick={toggleWithdrawModal}
      >
        −
      </CircularButton>
    </div>
  );
};
