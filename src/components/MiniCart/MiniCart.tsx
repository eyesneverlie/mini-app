import { NavLink } from 'react-router-dom';
import { APP_ROUTES } from '../../data-access';
import { CartIcon } from '../icons';
import { pluralize } from '../../utils';
import styles from './MiniCart.module.scss';

interface IMiniCartProps {
  number: number;
  totalPrice: number;
}

export const MiniCart = ({ number, totalPrice }: IMiniCartProps) => {
  return (
    <NavLink to={APP_ROUTES.cart} className={styles.container}>
      <span className={styles.icon}>
        <CartIcon />
      </span>
      <div className={styles.details}>
        <span className={styles.price}>{totalPrice.toFixed(1)} TON</span>
        <span className={styles.items}>
          {number} {pluralize('item', number)}
        </span>
      </div>
    </NavLink>
  );
};
