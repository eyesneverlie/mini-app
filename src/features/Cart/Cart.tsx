import { useState, useCallback, useEffect } from 'react';
import { ICollection } from '../../data-access';
import { GlassButton } from '../../ui/GlassButton';

import styles from './Cart.module.scss';
import { CartItem } from './CartItem/CartItem';

export const Cart = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [cartItems, setCartItems] = useState<ICollection[]>([]);

  const handleSelectAllClick = useCallback((): void => {
    console.log('select all');
  }, []);

  const handleClearAllClick = useCallback((): void => {
    console.log('clear all');
  }, []);

  const fetchData = useCallback(async () => {
    await new Promise((res) => setTimeout(res, 1000));

    const items: ICollection[] = Array.from({ length: 10 }, (_, i) => {
      return {
        imageUrl:
          'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
        name: 'Diamond Eyes' + i,
        description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        id: i + 1,
        price: 34.8,
      };
    });

    setCartItems(items);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className={styles.container}>
      <div className={styles.itemsCounter}>
        <span className={styles.caption}>
          <b>Cart</b> - 3 items
        </span>
      </div>
      <div className={styles.actionButtons}>
        <GlassButton onClick={handleSelectAllClick}>Select All</GlassButton>
        <GlassButton onClick={handleClearAllClick}>Clear All</GlassButton>
      </div>
      {isLoading && <span className={styles.loading}>Loading...</span>}
      <div className={styles.content}>
        {cartItems.map((item) => (
          <CartItem key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
