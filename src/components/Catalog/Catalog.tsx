import { useRef } from 'react';
import { NothingFound } from '../../components';
import { IProduct } from '../../data-access';
import { useIsWideScreen, useInfiniteScroll } from '../../hooks';
import { NftCard, NftCardSkeleton } from '../NftCard';
import { Preloader } from '../../ui';
import styles from './Catalog.module.scss';

interface ICatalogProps {
  hasMore: boolean;
  onLoadMore: () => void;
  items: IProduct[];
  isLoadingMore?: boolean;
  enablePurchase?: boolean;
  isOwned?: boolean;
  isSaved?: boolean;
  className?: string;
}

export const Catalog = ({
  hasMore,
  onLoadMore,
  items,
  enablePurchase = true,
  isOwned = false,
  isSaved = false,
  isLoadingMore = false,
  className = '',
}: ICatalogProps) => {
  const isWideScreen = useIsWideScreen();
  const cardsPerLine = isWideScreen ? 3 : 2;

  const loaderRef = useRef<HTMLDivElement>(null);

  useInfiniteScroll({
    target: loaderRef,
    onIntersect: onLoadMore,
    enabled: hasMore,
    threshold: 1.0,
  });

  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.catalog}>
        {items.length === 0 && isLoadingMore
          ? Array(cardsPerLine)
              .fill(null)
              .map((_, i: number) => <NftCardSkeleton key={`id-${i + 1}`} />)
          : items.map((card: IProduct, index: number) => (
              <NftCard
                key={`${card.id}-${card.name}-${index}`}
                customClass={isOwned || isSaved ? 'displayMode' : ''}
                isOwned={isOwned}
                isSaved={isSaved}
                enablePurchase={enablePurchase}
                {...card}
              />
            ))}
      </div>
      {isLoadingMore && items.length > 0 && (
        <div className={styles.loadMore}>
          <Preloader />
        </div>
      )}
      {!isLoadingMore && items.length === 0 && (
        <NothingFound description='Products list is empty' showButton={false} />
      )}
      <div ref={loaderRef} style={{ height: 1 }} />
    </div>
  );
};
