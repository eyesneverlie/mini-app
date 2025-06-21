import { useDispatch } from 'react-redux';
import { Select, CircularButton } from '../../../ui';
import { ModalType } from '../../../data-access';
import { storeModalsActions } from '../../../store/slices/modals';
import styles from './ActionButtons.module.scss';

export const ActionButtons = () => {
  const dispatch = useDispatch();

  const toggleDepositModal = (): void => {
    dispatch(storeModalsActions.open({ type: ModalType.DepositFunds }));
  };

  const toggleWithdrawModal = (): void => {
    dispatch(storeModalsActions.open({ type: ModalType.WithdrawFunds }));
  };

  return (
    <div className={styles.container}>
      <Select size='small' options={[{ label: '0.0', value: '0' }]} />
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
