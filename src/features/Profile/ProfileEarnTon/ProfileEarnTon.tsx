import { CopyIcon, ShareIcon } from '../../../components/icons';
import { Input, Button } from '../../../ui';
import { ProfileEarnTonCard } from './ProfileEarnTonCard';
import styles from './ProfileEarnTon.module.scss';

export const ProfileEarnTon = () => {
  const handleCopyClick = (): void => {};

  const handleShareClick = (): void => {};

  return (
    <div className={styles.container}>
      <ProfileEarnTonCard />
      <ProfileEarnTonCard />
      <ProfileEarnTonCard />
      <div className={styles.shareLink}>
        <h3 className={styles.shareLinkHeading}>Your link for friends</h3>
        <Input
          name='shareLink'
          value='https://t.me/collectible/po298v09283=409v8'
        />
      </div>
      <div className={styles.actionButtons}>
        <Button theme='white' icon={<CopyIcon />} onClick={handleCopyClick}>
          Copy link
        </Button>
        <Button icon={<ShareIcon />} onClick={handleShareClick}>
          Share
        </Button>
      </div>
    </div>
  );
};
