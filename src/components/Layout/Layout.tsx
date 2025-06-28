import { useLocation } from 'react-router-dom';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { APP_ROUTES } from '../../data-access';
import { Header, StickyMenu, MiniCart } from '../../components';
import { RootState } from '../../store';
import styles from './Layout.module.scss';

interface ILayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  const { pathname } = useLocation();
  const { list: cartItems, total: cartTotal } = useSelector(
    (state: RootState) => state.cart
  );
  const hasCartSelectedItems =
    cartItems.filter((item) => item.isSelected).length > 0;

  const isStickyBarVisible =
    pathname !== APP_ROUTES.cart ||
    (!hasCartSelectedItems && pathname === APP_ROUTES.cart);
  const isMiniCartVisible =
    pathname !== APP_ROUTES.cart && cartItems.length > 0;

  console.log();

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
      {isStickyBarVisible && <StickyMenu />}
      {isMiniCartVisible && (
        <MiniCart totalPrice={cartTotal} number={cartItems.length} />
      )}
    </div>
  );
};
