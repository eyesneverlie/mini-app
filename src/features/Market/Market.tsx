import { useState } from 'react';
import { EntitiesSwitcher, SegmentToggle } from '../../components';
import { SwitchableSegment } from '../../data-access';
import { Collections } from './Collections';
import { Hot } from './Hot';
import { AllListing } from './AllListing';
import styles from './Market.module.scss';

const tabs = [
  { id: 'all', title: 'All' },
  { id: 'collections', title: 'Collections' },
  { id: 'hot', title: 'Hot' },
];

export const Market = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);
  const [activeCategory, setActiveCategory] = useState<SwitchableSegment>(); // Gifts or Stickers

  console.log('activeCategory = ', { activeCategory });

  return (
    <div className={styles.container}>
      <EntitiesSwitcher
        activeTab={activeTab}
        tabs={tabs}
        onChange={setActiveTab}
      />
      <SegmentToggle
        className={styles.segmentToggle}
        onToggle={setActiveCategory}
      />
      <div className={styles.content}>
        {activeTab === 'all' && <AllListing categoryId={null} />}
        {activeTab === 'collections' && <Collections />}
        {activeTab === 'hot' && <Hot />}
      </div>
    </div>
  );
};
