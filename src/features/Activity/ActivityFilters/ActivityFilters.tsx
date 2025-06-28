import { useCallback, useState } from 'react';
import { Select, CircularButton, SearchInput } from '../../../ui';
import { RefreshIcon, FiltersIcon } from '../../../components/icons';
import { ActivityAdvancedFilters } from '../ActivityAdvancedFilters';

import styles from './ActivityFilters.module.scss';

export const ActivityFilters = () => {
  const [isAdvancedOpen, setIsAdvancedOpen] = useState<boolean>(false);

  const handleResetClick = (): void => {
    console.log('clicked on reset');
  };

  const handleAdvancedFiltersClick = useCallback(() => {
    setIsAdvancedOpen(!isAdvancedOpen);
  }, [isAdvancedOpen]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.selectors}>
          <SearchInput
            placeholder='Search by activity'
            className={styles.search}
          />
          <Select
            className={styles.type}
            name='type'
            options={[
              { label: 'Listing', value: '1' },
              { label: 'Listing two', value: '2' },
              { label: 'Listing three', value: '3' },
              { label: 'Listing four', value: '4' },
              { label: 'Listing five', value: '5' },
            ]}
          />
        </div>
        <CircularButton
          className={styles.resetButton}
          onClick={handleResetClick}
        >
          <RefreshIcon />
        </CircularButton>
        <CircularButton onClick={handleAdvancedFiltersClick}>
          <FiltersIcon />
        </CircularButton>
      </div>
      {isAdvancedOpen && <ActivityAdvancedFilters />}
    </div>
  );
};
