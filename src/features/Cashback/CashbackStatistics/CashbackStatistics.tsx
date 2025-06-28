import { GlassyButton } from '../../../ui';
import { TonIcon } from '../../../components/icons';
import styles from './CashbackStatistics.module.scss';

export const CashbackStatistics = () => {
  const handleFilterClick = (): void => {};
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h3 className={styles.sectionTitle}>STATISTIC</h3>
        <div className={styles.filters}>
          <GlassyButton onClick={handleFilterClick}>All</GlassyButton>
          <GlassyButton onClick={handleFilterClick}>7 days</GlassyButton>
          <GlassyButton onClick={handleFilterClick}>24 h</GlassyButton>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.info}>
          <div className={styles.infoValue}>
            0 <TonIcon />
          </div>
          <span className={styles.infoCaption}>Cashback earned</span>
        </div>
        <div className={styles.info}>
          <div className={styles.infoValue}>
            0 <TonIcon />
          </div>
          <span className={styles.infoCaption}>Purchase volume</span>
        </div>
        <div className={styles.info}>
          <div className={styles.infoValue}>
            0 <TonIcon />
          </div>
          <span className={styles.infoCaption}>Purchased gifts</span>
        </div>
        <div className={styles.info}>
          <div className={styles.infoValue}>
            0 <TonIcon />
          </div>
          <span className={styles.infoCaption}>Most expensive purchase</span>
        </div>
      </div>
    </div>
  );
};
