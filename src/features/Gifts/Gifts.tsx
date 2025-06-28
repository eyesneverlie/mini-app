import { useCallback, useState } from 'react';
import { GlassyButton } from '../../ui';
import { ICollection } from '../../data-access';
import {
  NothingFound,
  SegmentToggle,
  Catalog,
  EntitiesSwitcher,
} from '../../components';
import { TelegramIcon, SellIcon } from '../../components/icons';
import { GiftsFilters } from './GiftsFilters';
import styles from './Gifts.module.scss';

const tabs = [
  { id: 'unlisted', title: 'Unlisted' },
  { id: 'listed', title: 'Listed' },
  { id: 'saved', title: 'Saved' },
];

export const Gifts = () => {
  const [activeEntity, setActiveEntity] = useState<string>(tabs[0].id);
  const [items, setItems] = useState<ICollection[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const fetchData = useCallback(async () => {
    if (isLoadingMore || !hasMore) {
      return;
    }

    setIsLoadingMore(true);

    await new Promise((res) => setTimeout(res, 1000));

    const fetchedItems: ICollection[] = Array.from({ length: 10 }, (_, i) => {
      const id = (currentPage - 1) * 10 + (i + 1);

      return {
        imageUrl: 'https://picsum.photos/200/300',
        name: 'Diamond Eyes' + id,
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

  const handleWithdrawClick = (): void => {
    console.log('withdraw clicked...');
  };

  const handleSellClick = (): void => {
    console.log('sell clicked...');
  };

  const handleSegmentToggle = (): void => {};

  return (
    <div className={styles.container}>
      <EntitiesSwitcher
        activeTab={activeEntity}
        tabs={tabs}
        onChange={setActiveEntity}
      />
      <SegmentToggle
        className={styles.segmentToggle}
        onToggle={handleSegmentToggle}
      />
      <div className={styles.actionButtons}>
        <GlassyButton
          icon={<TelegramIcon />}
          iconPosition='left'
          className={styles.actionButton}
          onClick={handleWithdrawClick}
        >
          Withdraw
        </GlassyButton>
        <GlassyButton
          icon={<SellIcon />}
          iconPosition='left'
          className={styles.actionButton}
          onClick={handleSellClick}
        >
          Sell
        </GlassyButton>
      </div>
      <GiftsFilters />
      <div className={styles.content}>
        <Catalog
          items={items}
          onLoadMore={fetchData}
          hasMore={hasMore}
          isLoadingMore={isLoadingMore}
        />
        {items.length === 0 && !isLoadingMore && (
          <NothingFound
            title='If there are no gifts'
            description='You can buy them in the marketplace'
          />
        )}
      </div>
    </div>
  );
};
