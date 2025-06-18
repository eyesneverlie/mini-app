import styles from './NftCard.module.scss';

interface INftCardProps {
  image: string;
  title: string;
  id: number;
  description: string;
}

export const NftCard = ({ image, title, id, description }: INftCardProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.content}>
        <div className={styles.row}>
          <span className={styles.name}>{title}</span>
          <span className={styles.id}>#{id}</span>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}