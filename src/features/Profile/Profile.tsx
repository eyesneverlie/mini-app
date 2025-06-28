import { useDispatch } from 'react-redux';
import { CircularButton, Image, Button } from '../../ui';
import {
  GiftsIcon,
  BigCubeIcon,
  TonBlueIcon,
  TonIcon,
  SettingsIcon,
  InviteFriendIcon,
  HeartIcon,
} from '../../components/icons';
import { storeModalsActions } from '../../store/slices';
import { ModalType } from '../../data-access';
import styles from './Profile.module.scss';

export const Profile = () => {
  const dispatch = useDispatch();

  const user = window.Telegram?.WebApp?.initDataUnsafe?.user;

  const handleSettingClick = (): void => {
    dispatch(storeModalsActions.open({ type: ModalType.ProfileSettings }));
  };

  const handleInviteFriendClick = (): void => {
    dispatch(storeModalsActions.open({ type: ModalType.ProfileEarnTon }));
  };

  return (
    <div className={styles.container}>
      <CircularButton
        className={styles.settingsButton}
        onClick={handleSettingClick}
      >
        <SettingsIcon />
      </CircularButton>
      <div className={styles.picture}>
        <Image
          src={user?.photo_url}
          alt={`${user?.first_name} ${user?.last_name}`}
        />
      </div>
      <h2 className={styles.name}>
        {user?.first_name} {user?.last_name}
      </h2>
      <div className={styles.statistics}>
        <div className={styles.statisticsItem}>
          <span className={styles.title}>Total volume</span>
          <span className={styles.value}>
            0.0 <TonBlueIcon />
          </span>
        </div>
        <div className={styles.statisticsItem}>
          <span className={styles.title}>Bought</span>
          <span className={`${styles.value} ${styles.blacked}`}>
            24 <GiftsIcon />
          </span>
        </div>
        <div className={styles.statisticsItem}>
          <span className={styles.title}>Liked</span>
          <span className={`${styles.value} ${styles.blacked}`}>
            13 <HeartIcon />
          </span>
        </div>
      </div>
      <div className={styles.passPanel}>
        <span className={styles.passTitle}>EPOCH #1</span>
        <span className={styles.passValue}>
          45 <BigCubeIcon />
        </span>
      </div>
      <div className={styles.cashback}>
        <div className={styles.cashbackHeading}>
          <h3 className={styles.cashbackTitle}>CASHBACK BONUS</h3>
          <div className={styles.cashbackProgress}>
            <span className={styles.cashbackPercent}>2% / </span>
            <span className={styles.cashbackLevel}>Level 0</span>
          </div>
        </div>
        <div className={styles.cashbackProgressBar}>To be developed</div>
        <div className={styles.cashbackFooter}>
          <span className={styles.cashbackFooterLabel}>Available to claim</span>
          <span className={styles.cashbackClaim}>
            0 <TonIcon />
          </span>
        </div>
      </div>
      <div className={styles.infoCard}>
        <h3 className={styles.infoCardTitle}>INVITE FRIEND AND EARN TON</h3>
        <h4 className={styles.infoCardSubTitle}>Referral commissions</h4>
        <p className={styles.infoCardDescription}>
          Earn from 20% to 50% in TON from their purchases
        </p>
        <Button
          className={styles.inviteButton}
          onClick={handleInviteFriendClick}
          icon={<InviteFriendIcon />}
        >
          Invite friend
        </Button>
      </div>
    </div>
  );
};
