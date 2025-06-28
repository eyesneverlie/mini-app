import { TonBlueIcon, ChevronRightIcon } from '../../../components/icons';
import avatarUrl from '../../../assets/profile-avatar.png';
import styles from './ActivityItem.module.scss';

export const ActivityItem = () => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img src={avatarUrl} alt='' />
      </div>
      <div className={styles.content}>
        <div className={styles.column}>
          <span className={styles.name}>Nail Braclet</span>
          <span className={styles.id}>#705915</span>
        </div>
        <div className={styles.column}>
          <span className={styles.price}>
            <TonBlueIcon /> 4.93
          </span>
          <span className={styles.date}>22 Jun 09:48 GMT</span>
        </div>
        <div className={styles.column}>
          <span className={styles.type}>
            Sale <ChevronRightIcon />
          </span>
        </div>
      </div>
    </div>
  );
};
