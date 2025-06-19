import { NavLink } from 'react-router-dom';
import { APP_ROUTES } from '../../data-access';
import styles from './StickyMenu.module.scss';

export const StickyMenu = () => {
  return (
    <nav className={styles.bar}>
      <NavLink to={APP_ROUTES.market} className={styles.item}>
        <span className={styles.icon}>&nbsp;</span>
        Market
      </NavLink>
      <NavLink to={APP_ROUTES.activity} className={styles.item}>
        <span className={styles.icon}>&nbsp;</span>
        Activity
      </NavLink>
      <NavLink to={APP_ROUTES.gifts} className={styles.item}>
        <span className={styles.icon}>&nbsp;</span>
        My Gifts
      </NavLink>
      <NavLink to={APP_ROUTES.pass} className={styles.item}>
        <span className={styles.icon}>&nbsp;</span>
        Pass
      </NavLink>
      <NavLink to={APP_ROUTES.profile} className={styles.item}>
        <span className={styles.icon}>&nbsp;</span>
        Profile
      </NavLink>
    </nav>
  );
};
