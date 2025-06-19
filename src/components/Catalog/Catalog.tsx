import { useEffect, useState } from 'react';
import { ICollection, SegmentType } from '../../data-access';
import { useIsWideScreen } from '../../hooks';
import { NftCard, NftCardSkeleton } from '../NftCard';
import { SegmentToggle } from '../SegmentToggle';
import styles from './Catalog.module.scss';

interface ICatalogProps {
  items: ICollection[];
}

export const Catalog = ({ items }: ICatalogProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const isWideScreen = useIsWideScreen();
  const cardsPerLine = isWideScreen ? 3 : 2;

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  const handleSegmentToggle = (activeSegment: SegmentType): void => {
    console.log('active segment = ', activeSegment);
  };

  return (
    <div className={styles.container}>
      <SegmentToggle onToggle={handleSegmentToggle} />
      <div className={styles.catalog}>
        {isLoading
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
