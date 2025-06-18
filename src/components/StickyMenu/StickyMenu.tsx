import styles from './StickyMenu.module.scss';

export const StickyMenu = () => {
  return (
    <nav className={styles.container}>
      <ul className={styles.bar}>
        <li className={styles.item}>
          <span className={styles.icon}>&nbsp;</span>
          Market
        </li>
        <li className={styles.item}>
          <span className={styles.icon}>&nbsp;</span>
          Profile
        </li>
        <li className={styles.item}>
          <span className={styles.icon}>&nbsp;</span>
          Activity
        </li>
      </ul>
    </nav>
  );
}