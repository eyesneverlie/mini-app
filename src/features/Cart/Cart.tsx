import { useCallback, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GlassyButton, Button } from '../../ui';
import { ICollection } from '../../data-access';
import { RootState } from '../../store';
import { storeCartActions } from '../../store/slices';
import { pluralize } from '../../utils';
import { BinIcon } from '../../components/icons';
import { CartItem } from './CartItem/CartItem';
import { NothingFound } from '../../components';
import styles from './Cart.module.scss';

export const Cart = () => {
  const [isSelectAll, setIsSelectAll] = useState<boolean>(false);
  const { list } = useSelector((state: RootState) => state.cart);
  const itemsSetForPurchase = list.filter((item) => item.isSelected);
  const itemsForPurchaseIds = list
    .filter((item) => item.isSelected)
    .map((item) => item.id);
  const selectedItemsTotal = itemsSetForPurchase.reduce(
    (sum, item) => sum + item.price,
    0
  );

  const dispatch = useDispatch();

  const handleSelectAllClick = useCallback((): void => {
    const actualSelectAll = !isSelectAll;
    if (actualSelectAll) {
      dispatch(storeCartActions.selectAll());
    } else {
      dispatch(storeCartActions.unselectAll());
    }
    setIsSelectAll(!setIsSelectAll);
  }, [dispatch, isSelectAll]);

  const handleClearAllClick = useCallback((): void => {
    dispatch(storeCartActions.reset());
  }, [dispatch]);

  const handlePayClick = useCallback((): void => {
    console.log('clicked on pay');
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.itemsCounter}>
        <span className={styles.caption}>
          <b>Cart</b> - {itemsSetForPurchase.length}{' '}
          {pluralize('item', itemsSetForPurchase.length)}
        </span>
      </div>
      <div className={styles.actionButtons}>
        <GlassyButton onClick={handleSelectAllClick} disabled={!list.length}>
          Select All
        </GlassyButton>
        <GlassyButton
          icon={<BinIcon />}
          disabled={!list.length}
          onClick={handleClearAllClick}
        >
          Clear All
        </GlassyButton>
      </div>
      <div className={styles.content}>
        {list.map((item: ICollection) => (
          <CartItem
            key={item.id}
            data={item}
            isSelected={itemsForPurchaseIds.includes(item.id)}
          />
        ))}
      </div>
      {selectedItemsTotal > 0 && (
        <div className={styles.fixedPanel}>
          <Button onClick={handlePayClick}>
            To pay {selectedItemsTotal.toFixed(2)} TON
          </Button>
        </div>
      )}
      {list.length === 0 && <NothingFound description='Cart is empty' />}
    </div>
  );
};
