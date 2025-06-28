import { useDispatch } from 'react-redux';
import { Button, CircularButton } from '../../../ui';
import { ICollection } from '../../../data-access';
import { BinIcon, TonBlueIcon, CheckMarkIcon } from '../../../components/icons';
import { storeCartActions } from '../../../store/slices';
import styles from './CartItem.module.scss';

interface ICartItemProps {
  data: ICollection;
  isSelected: boolean;
}

export const CartItem = ({ data, isSelected }: ICartItemProps) => {
  const dispatch = useDispatch();

  const handleButtonClick = (): void => {
    console.log('handle button click');
  };

  const toggleItem = (): void => {
    console.log('toggle item');
    dispatch(storeCartActions.toggleItem({ id: data.id }));
  };

  const handleDeleteClick = (): void => {
    dispatch(storeCartActions.removeItem({ id: data.id }));
  };

  return (
    <div className={styles.container}>
      <img className={styles.image} src={data.imageUrl} alt={data.name} />
      <div className={styles.content}>
        <div className={styles.details}>
          <span className={styles.caption}>{data.name}</span>
          <span className={styles.id}>#{data.id}</span>
          <Button
            icon={<TonBlueIcon />}
            iconPlacement='right'
            className={styles.button}
            onClick={handleButtonClick}
            theme='white'
          >
            {data.price}
          </Button>
        </div>

        <div className={styles.actions}>
          <span
            className={`${styles.selectMark} ${
              isSelected ? styles.selected : ''
            }`}
            onClick={toggleItem}
          >
            <CheckMarkIcon />
          </span>
          <CircularButton onClick={handleDeleteClick}>
            <BinIcon />
          </CircularButton>
        </div>
      </div>
    </div>
  );
};
