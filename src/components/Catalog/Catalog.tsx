import { ICollection } from '../../data-access';
import { useIsWideScreen } from '../../hooks';
import { NftCard, NftCardSkeleton } from '../NftCard';
import styles from './Catalog.module.scss';

interface ICatalogProps {
  isInitialLoading: boolean;
  items: ICollection[];
}

export const Catalog = ({ isInitialLoading = false, items }: ICatalogProps) => {
  const isWideScreen = useIsWideScreen();
  const cardsPerLine = isWideScreen ? 3 : 2;

  return (
    <div className={styles.container}>
      <div className={styles.catalog}>
        {isInitialLoading
          ? Array(cardsPerLine)
              .fill(null)
              .map((_, i: number) => <NftCardSkeleton key={`id-${i + 1}`} />)
          : items.map((card: ICollection) => (
              <NftCard key={card.id} {...card} />
            ))}
      </div>
    </div>
  );
};
