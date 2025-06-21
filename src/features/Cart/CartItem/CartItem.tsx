import { Button, CircularButton } from '../../../ui';
import { ICollection } from '../../../data-access';
import { TonIcon } from '../../../components/icons/TonIcon/TonIcon';
import styles from './CartItem.module.scss';

interface ICartItemProps {
  data: ICollection;
}

export const CartItem = ({ data }: ICartItemProps) => {
  const handleButtonClick = (): void => {
    console.log('handle button click');
  };

  const toggleItem = (): void => {
    console.log('toggle item = ', data);
  };

  const handleDeleteClick = (): void => {
    console.log('delete item = ', data);
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={data.imageUrl} alt={data.name} />
      <div className={styles.content}>
        <div className={styles.details}>
          <span className={styles.caption}>{data.name}</span>
          <span className={styles.id}>#{data.id}</span>
          <Button
            icon={<TonIcon />}
            iconPlacement='right'
            className={styles.button}
            onClick={handleButtonClick}
          >
            {data.price}
          </Button>
        </div>

        <div className={styles.actions}>
          <CircularButton onClick={toggleItem}>T</CircularButton>
          <CircularButton onClick={handleDeleteClick}>R</CircularButton>
        </div>
      </div>
    </div>
  );
};
