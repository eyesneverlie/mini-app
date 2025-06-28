import { useState } from 'react';
import { CircularButton } from '../../../ui';
import { CartIcon, HeartIcon, DotsIcon } from '../../../components/icons';
import { useClickOutside } from '../../../hooks';
import styles from './ExpandableButton.module.scss';

interface IExpandableButtonProps {
  onAddToFav: () => void;
  onAddToCart: () => void;
}

export const ExpandableButton = ({
  onAddToFav,
  onAddToCart,
}: IExpandableButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const ref = useClickOutside(() => setIsOpen(false));

  const handleOpenClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const handleAddToFavClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.stopPropagation();
    onAddToFav();
  };

  const handleAddToCartClick = (
    e: React.MouseEvent<HTMLButtonElement>
  ): void => {
    e.stopPropagation();
    onAddToCart();
  };

  return (
    <div className={styles.expandableButton}>
      {!isOpen && (
        <div className={styles.mainButton} onClick={handleOpenClick}>
          <DotsIcon />
        </div>
      )}

      <div
        ref={ref}
        className={`${styles.actions} ${isOpen ? styles.open : ''}`}
      >
        <CircularButton
          className={styles.actionButton}
          onClick={handleAddToFavClick}
        >
          <HeartIcon />
        </CircularButton>
        <CircularButton
          className={styles.actionButton}
          onClick={handleAddToCartClick}
        >
          <CartIcon />
        </CircularButton>
      </div>
    </div>
  );
};
