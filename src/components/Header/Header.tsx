import { APP_ROUTES } from '../../data-access';
import { useToastr } from '../../hooks';
import { Button, Avatar } from '../../ui';
import { TonIcon } from '../icons';
import { ActionButtons } from './ActionButtons';
import styles from './Header.module.scss';

export const Header = () => {
  const toast = useToastr();

  return (
    <div className={styles.container}>
      <Avatar
        imageUrl='https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=mail@ashallendesign.co.uk'
        fullName='Joe Doe'
        href={APP_ROUTES.profile}
      />
      <div className={styles.controlsWrap}>
        <ActionButtons />
        <Button
          icon={<TonIcon />}
          className={styles.connectWalletButton}
          onClick={() => toast('Saved successfully!', 'success')}
        >
          Connect Wallet
        </Button>
      </div>
    </div>
  );
};
