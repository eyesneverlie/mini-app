import { Button, Avatar } from '../../ui';
import { ActionButtons } from './ActionButtons';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.container}>
      <Avatar
        imageUrl='https://api.dicebear.com/7.x/adventurer-neutral/svg?seed=mail@ashallendesign.co.uk'
        fullName='Joe Doe'
      />
      <ActionButtons />
      <Button className={styles.connectWalletButton}>Connect Wallet</Button>
    </div>
  );
};
