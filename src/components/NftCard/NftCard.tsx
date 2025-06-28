import { useDispatch, useSelector } from 'react-redux';
import { IProduct, ModalType } from '../../data-access';
import { storeModalsActions, storeCartActions } from '../../store/slices';
import {
  TonBlueIcon,
  HeartIcon,
  ShoppingCartIcon,
  HotIcon,
} from '../../components/icons';
import { ExpandableButton } from './ExpandableButton';
import { RootState } from '../../store';
import { Button, Image } from '../../ui';
import styles from './NftCard.module.scss';

interface INftCardProps {
  imageUrl: string;
  name: string;
  id: string;
  price: number;
  description?: string;
  onClick?: () => void;
  isOwned?: boolean;
  isSaved?: boolean;
  isHot?: boolean;
  enablePurchase?: boolean;
  customClass?: string;
}

export const NftCard = ({
  imageUrl,
  name,
  id,
  description,
  price,
  isOwned = false,
  isSaved = false,
  enablePurchase = true,
  isHot = false,
  customClass = '',
}: INftCardProps) => {
  const dispatch = useDispatch();
  const { list } = useSelector((state: RootState) => state.cart);

  const handleCardClick = (): void => {
    dispatch(
      storeModalsActions.open({
        type: ModalType.SaleDetails,
        props: { item: { imageUrl, name, id, description, price } },
      })
    );
  };

  const handlePurchaseClick = (item: IProduct): void => {
    dispatch(storeCartActions.addItem({ item }));
  };

  const handleAddToCart = (): void => {
    console.log('add to cart');
  };

  const handleAddToFav = (): void => {
    console.log('add to fav');
  };

  return (
    <div
      className={`${styles.container} ${styles[customClass]}`}
      onClick={handleCardClick}
    >
      {enablePurchase && (
        <ExpandableButton
          onAddToCart={handleAddToCart}
          onAddToFav={handleAddToFav}
        />
      )}
      {isHot && (
        <div className={styles.hot}>
          <HotIcon />
        </div>
      )}
      {isOwned && (
        <div className={styles.statusIndicator}>
          <ShoppingCartIcon />
        </div>
      )}
      {isSaved && (
        <div className={styles.statusIndicator}>
          <HeartIcon />
        </div>
      )}
      <div className={styles.avatar}>
        <Image src={imageUrl} alt={name} />
      </div>
      <div className={styles.content}>
        <div className={styles.row}>
          <span className={styles.name}>{name}</span>
          <span className={styles.id}>#{id}</span>
        </div>
        {description && <p className={styles.description}>{description}</p>}
        {enablePurchase && (
          <Button
            className={styles.purchaseButton}
            disabled={!!list.find((item) => item.id === id)}
            onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
              e.stopPropagation();
              handlePurchaseClick({
                imageUrl,
                name,
                id,
                description,
                price,
              });
            }}
          >
            {price} <TonBlueIcon />
          </Button>
        )}
      </div>
    </div>
  );
};
