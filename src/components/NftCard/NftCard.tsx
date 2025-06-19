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
  const handlePurchaseClick = (): void => {
    console.log('clicked on purchase button');
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
        <Button
          className={styles.purchaseButton}
          theme='white'
          onClick={handlePurchaseClick}
        >
          {price}
        </Button>
      </div>
    </div>
  );
};
