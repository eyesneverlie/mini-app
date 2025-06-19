import styles from './StickyMenu.module.scss';

export const StickyMenu = () => {
  return (
    <ul className={styles.bar}>
      <li className={styles.item}>
        <span className={styles.icon}>&nbsp;</span>
        Activity
      </li>
      <li className={styles.item}>
        <span className={styles.icon}>&nbsp;</span>
        Profile
      </li>
      <li className={styles.item}>
        <span className={styles.icon}>&nbsp;</span>
        My Gifts
      </li>
      <li className={styles.item}>
        <span className={styles.icon}>&nbsp;</span>
        Pass
      </li>
      <li className={styles.item}>
        <span className={styles.icon}>&nbsp;</span>
        Profile
      </li>
    </ul>
  );
};
