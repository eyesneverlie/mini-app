import { ICollection } from '../../../../data-access';
import styles from './Collection.module.scss';

interface ICollectionProps {
  data: ICollection;
}

export const Collection = ({ data }: ICollectionProps) => {
  return (
    <div className={styles.container}>
      <img className={styles.image} src={data.imageUrl} alt={data.name} />
      <span className={styles.label}>{data.name}</span>
      <span className={styles.label}>40.9K</span>
      <div className={styles.column}>
        <span className={styles.label}>4302</span>
        <span className={`${styles.percentage} ${styles.positive}`}>12.5%</span>
      </div>
    </div>
  );
};
