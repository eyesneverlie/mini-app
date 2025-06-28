import { Button, CircularButton, GlassyButton } from '../../ui';
import {
  TelegramIcon,
  StatusIcon,
  ShareIcon,
  HeartIcon,
  CartIcon,
} from '../../components/icons';
import avatarUrl from '../../assets/profile-avatar.png';
import styles from './ProductDetails.module.scss';

interface IProductDetailsProps {
  data: any;
}

export const ProductDetails = ({ data }: IProductDetailsProps) => {
  console.log('DATA = ', data);

  const handleOnClick = () => {
    console.log('handle on click');
  };

  const handleWatchClick = (): void => {};

  const handleStatusClick = (): void => {
    console.log('status click');
  };

  const handleShareClick = (): void => {};

  const handleAddToFavClick = (): void => {};

  const handleAddToCartClick = (): void => {};

  const handleBuyGiftClick = (): void => {};

  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img src={avatarUrl} alt='' />
      </div>
      <div className={styles.details}>
        <span className={styles.name}>Pepe pepe</span>
        <span className={styles.id}>#425</span>
      </div>
      <div className={styles.collection}>
        <div className={styles.collectionImage}>
          <img src='' alt='' />
        </div>
        <div className={styles.collectionDetails}>
          <span className={styles.label}>Collection</span>
          <span className={styles.value}>Nail Braclet</span>
        </div>
        <Button
          className={styles.openButton}
          onClick={handleOnClick}
          theme='white'
        >
          Open
        </Button>
      </div>
      <div className={styles.actionButtons}>
        <GlassyButton
          className={styles.button}
          icon={<TelegramIcon />}
          iconPosition='left'
          onClick={handleWatchClick}
        >
          Watch
        </GlassyButton>
        <GlassyButton
          className={styles.button}
          icon={<StatusIcon />}
          iconPosition='left'
          onClick={handleStatusClick}
        >
          Status
        </GlassyButton>
        <GlassyButton
          className={styles.button}
          icon={<ShareIcon />}
          iconPosition='left'
          onClick={handleShareClick}
        >
          Share
        </GlassyButton>
      </div>
      <div className={styles.info}>
        <div className={styles.infoPanel}>
          <span className={styles.label}>Price</span>
          <span className={styles.value}>58.8 TON</span>
        </div>
        <div className={styles.infoPanel}>
          <span className={styles.label}>Platform</span>
          <span className={styles.value}>PePlat</span>
        </div>
        <div className={styles.infoPanel}>
          <span className={styles.label}>Model</span>
          <span className={styles.value}>4Jpejvf</span>
        </div>
        <div className={styles.infoPanel}>
          <span className={styles.label}>Rare</span>
          <span className={styles.value}>Common</span>
        </div>
      </div>
      <div className={styles.bottomPanel}>
        <Button
          theme='white'
          className={styles.buyGiftButton}
          onClick={handleBuyGiftClick}
        >
          But gift
        </Button>
        <CircularButton
          className={styles.circleButton}
          onClick={handleAddToFavClick}
        >
          <HeartIcon />
        </CircularButton>
        <CircularButton
          className={styles.circleButton}
          onClick={handleAddToCartClick}
        >
          <CartIcon />
        </CircularButton>
      </div>
    </div>
  );
};
