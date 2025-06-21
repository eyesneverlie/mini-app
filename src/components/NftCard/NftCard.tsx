import { useDispatch } from 'react-redux';
import { ModalType } from '../../data-access';
import { storeModalsActions } from '../../store/slices/modals';
import { Button } from '../../ui';
import styles from './NftCard.module.scss';

interface INftCardProps {
  imageUrl: string;
  name: string;
  id: number;
  price: number;
  description?: string;
}

export const NftCard = ({
  imageUrl,
  name,
  id,
  description,
  price,
}: INftCardProps) => {
  const dispatch = useDispatch();

  const handlePurchaseClick = (): void => {
    dispatch(
      storeModalsActions.open({
        type: ModalType.SaleDetails,
        props: { item: { imageUrl, name, id, description, price } },
      })
    );
  };

  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img src={imageUrl} alt={name} />
      </div>
      <div className={styles.content}>
        <div className={styles.row}>
          <span className={styles.name}>{name}</span>
          <span className={styles.id}>#{id}</span>
        </div>
        {description && <p className={styles.description}>{description}</p>}
        <Button className={styles.purchaseButton} onClick={handlePurchaseClick}>
          {price}
        </Button>
      </div>
    </div>
  );
};
