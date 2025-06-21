import { NavLink, useLocation } from 'react-router-dom';
import { APP_ROUTES } from '../../data-access';
import {
  MarketIcon,
  ActivityIcon,
  GiftsIcon,
  PassIcon,
  ProfileIcon,
} from '../../components/icons';
import styles from './StickyMenu.module.scss';

export const StickyMenu = () => {
  const { pathname } = useLocation();

  console.log('pathname = ', pathname === APP_ROUTES.market);

  return (
    <nav className={styles.bar}>
      <NavLink
        to={APP_ROUTES.market}
        className={`${styles.item} ${
          pathname === APP_ROUTES.market ? styles.active : ''
        }`}
      >
        <MarketIcon />
        Market
      </NavLink>
      <NavLink
        to={APP_ROUTES.activity}
        className={`${styles.item} ${
          pathname === APP_ROUTES.activity ? styles.active : ''
        }`}
      >
        <ActivityIcon />
        Activity
      </NavLink>
      <NavLink
        to={APP_ROUTES.gifts}
        className={`${styles.item} ${
          pathname === APP_ROUTES.gifts ? styles.active : ''
        }`}
      >
        <GiftsIcon />
        My Gifts
      </NavLink>
      <NavLink
        to={APP_ROUTES.pass}
        className={`${styles.item} ${
          pathname === APP_ROUTES.pass ? styles.active : ''
        }`}
      >
        <PassIcon />
        Pass
      </NavLink>
      <NavLink
        to={APP_ROUTES.profile}
        className={`${styles.item} ${
          pathname === APP_ROUTES.profile ? styles.active : ''
        }`}
      >
        <ProfileIcon />
        Profile
      </NavLink>
    </nav>
  );
};
