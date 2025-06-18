import { Button } from '../../ui';
import { useDispatch } from 'react-redux';
import { ModalType } from '../../data-access';
import { storeModalsActions } from '../../store/slices/modals';
import styles from './Header.module.scss';

export const Header = () => {
    const dispatch = useDispatch();

  const triggerWithdraw = (): void => {
    dispatch(storeModalsActions.open({ type: ModalType.WithdrawFunds }));
  }

  const triggerDeposit = (): void => {
    dispatch(storeModalsActions.open({ type: ModalType.DepositFunds }));
  }

  const triggerSaleDetails = (): void => {
    dispatch(storeModalsActions.open({ type: ModalType.SaleDetails }));
  }

  const triggerConfirmPurchase = (): void => {
    dispatch(storeModalsActions.open({ type: ModalType.ConfirmPurchase }));
  }

  return (
    <div className={styles.container}>
      Header will be here
      <div className={styles.buttonsContainer}>
        <Button onClick={triggerWithdraw}>Withdraw Modal</Button>
        <Button onClick={triggerDeposit}>Deposit Modal</Button>
        <Button onClick={triggerSaleDetails}>Sale Details Modal</Button>
        <Button onClick={triggerConfirmPurchase}>Confirm Purchase Modal</Button>
      </div>
    </div>
  );
}