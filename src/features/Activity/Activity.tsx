import { useState, useCallback } from 'react';
import { EntitiesSwitcher, SegmentToggle } from '../../components';
import { ActivityFilters } from './ActivityFilters';
import { SegmentType } from '../../data-access';
import { MyActivity } from './MyActivity';
import { Activities } from './Activities';
import styles from './Activity.module.scss';

const tabs = [
  { id: 'myActivity', title: 'My Activity' },
  { id: 'activity', title: 'Activity' },
];

export const Activity = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id);

  const handleSegmentToggle = useCallback(
    (activeSegment: SegmentType): void => {
      console.log('active segment = ', activeSegment);
    },
    []
  );

  const handleTabChange = (tab: string): void => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.container}>
      <EntitiesSwitcher
        activeTab={activeTab}
        tabs={tabs}
        onChange={handleTabChange}
      />
      <SegmentToggle
        className={styles.segmentToggle}
        onToggle={handleSegmentToggle}
      />
      <ActivityFilters />
      <div className={styles.content}>
        {activeTab === 'myActivity' && <MyActivity />}
        {activeTab === 'activity' && <Activities />}
      </div>
    </div>
  );
};
