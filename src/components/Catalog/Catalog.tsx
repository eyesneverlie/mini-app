import { useEffect, useState } from 'react';
import { ICollection, SegmentType } from '../../data-access';
import { useOrientation } from '../../hooks';
import { NftCard, NftCardSkeleton } from '../NftCard';
import { SegmentToggle } from '../SegmentToggle';
import styles from './Catalog.module.scss';

interface ICatalogProps {
  items: ICollection[];
}

export const Catalog = ({ items }: ICatalogProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const screenOrientation = useOrientation();
  const cardPerLine = screenOrientation === 'portrait' ? 2 : 3;

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
          ? Array(cardPerLine)
              .fill(null)
              .map((_, i: number) => <NftCardSkeleton key={`id-${i + 1}`} />)
          : items.map((card: ICollection) => (
              <NftCard key={card.id} {...card} />
            ))}
      </div>
    </div>
  );
};
