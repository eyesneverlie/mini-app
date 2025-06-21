import { useCallback, useRef, useState } from 'react';
import { ICollection } from '../../../data-access';
import { useIsWideScreen, useInfiniteScroll } from '../../../hooks';
import { NftCard, NftCardSkeleton } from '../../../components/NftCard';
import styles from './Catalog.module.scss';

export const Catalog = () => {
  const [items, setItems] = useState<ICollection[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const isWideScreen = useIsWideScreen();
  const cardsPerLine = isWideScreen ? 3 : 2;

  const loaderRef = useRef<HTMLDivElement>(null);

  const fetchData = useCallback(async () => {
    if (isLoadingMore || !hasMore) {
      return;
    }

    setIsLoadingMore(true);

    await new Promise((res) => setTimeout(res, 1000));

    const fetchedItems: ICollection[] = Array.from({ length: 10 }, (_, i) => {
      const id = (currentPage - 1) * 10 + (i + 1);

      return {
        imageUrl:
          'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
        name: 'Diamond Eyes' + id,
        description:
          'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
        id,
        price: 34.8,
      };
    });

    setItems((prev) => [...prev, ...fetchedItems]);
    setCurrentPage((prev) => prev + 1);

    if (currentPage >= 5) {
      setHasMore(false);
    }

    setIsLoadingMore(false);
  }, [isLoadingMore, hasMore, currentPage]);

  useInfiniteScroll({
    target: loaderRef,
    onIntersect: fetchData,
    enabled: hasMore,
    threshold: 1.0,
  });

  return (
    <div className={styles.container}>
      <div className={styles.catalog}>
        {items.length === 0
          ? Array(cardsPerLine)
              .fill(null)
              .map((_, i: number) => <NftCardSkeleton key={`id-${i + 1}`} />)
          : items.map((card: ICollection) => (
              <NftCard key={card.id} {...card} />
            ))}
      </div>
      {isLoadingMore && items.length > 0 && (
        <p className={styles.loadMore}>Loading more...</p>
      )}
      <div ref={loaderRef} style={{ height: 1 }} />
    </div>
  );
};
