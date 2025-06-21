import { useState, useCallback } from 'react';
import { Filters, EntitiesSwitcher } from '../../components';
import { SegmentType } from '../../data-access';
import { Collections } from './Collections';
import { Catalog } from './Catalog';
import { Hot } from './Hot';

import { SegmentToggle } from '../../components/SegmentToggle';
import styles from './Market.module.scss';

const ENTITIES = ['All', 'Collections', 'Hot'];

export const Market = () => {
  const [activeEntity, setActiveEntity] = useState<string>(ENTITIES[0]);

  const handleSegmentToggle = useCallback(
    (activeSegment: SegmentType): void => {
      console.log('active segment = ', activeSegment);
    },
    []
  );

  const handleEntityChange = (tab: string): void => {
    setActiveEntity(tab);
  };

  return (
    <div className={styles.container}>
      <Filters />
      <EntitiesSwitcher
        activeTab={activeEntity}
        tabs={ENTITIES}
        onChange={handleEntityChange}
      />
      <SegmentToggle
        className={styles.segmentToggle}
        onToggle={handleSegmentToggle}
      />
      <div className={styles.content}>
        {activeEntity === 'All' && <Catalog />}
        {activeEntity === 'Collections' && <Collections />}
        {activeEntity === 'Hot' && <Hot />}
      </div>
    </div>
  );
};
