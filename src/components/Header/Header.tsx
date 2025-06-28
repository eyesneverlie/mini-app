import { useDispatch } from 'react-redux';
import { TonIcon } from '../../components/icons';
import { APP_ROUTES, ModalType } from '../../data-access';
import { Button, Avatar } from '../../ui';
import { ActionButtons } from './ActionButtons';
import { storeModalsActions } from '../../store/slices';
import styles from './Header.module.scss';

export const Header = () => {
  const user = window.Telegram?.WebApp?.initDataUnsafe?.user;
  const dispatch = useDispatch();

  const handleConnectWallet = (): void => {
    dispatch(storeModalsActions.open({ type: ModalType.BuyGift }));
  };

  return (
    <div className={styles.container}>
      <Avatar
        imageUrl={user?.photo_url}
        fullName={`${user?.first_name} ${user?.last_name}`}
        href={APP_ROUTES.profile}
      />
      <div className={styles.controlsWrap}>
        <ActionButtons />
        <Button
          className={styles.connectWalletButton}
          icon={<TonIcon />}
          onClick={handleConnectWallet}
        >
          Connect Wallet
        </Button>
      </div>
    </div>
  );
};
