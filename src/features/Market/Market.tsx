import { Catalog, Filters } from '../../components';
import { ICollection } from '../../data-access';
import styles from './Market.module.scss';

export const Market = () => {
  const dummyCards: ICollection[] = Array.from({ length: 20 }, (_, i) => ({
    imageUrl:
      'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
    name: 'Diamond Eyes',
    description:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    id: i + 1,
    price: 34.8,
  }));

  return (
    <div className={styles.container}>
      <Filters />
      <Catalog items={dummyCards} />
    </div>
  );
};
