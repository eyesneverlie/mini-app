import { useCallback, useState } from 'react';
import { Select, CircularButton, SearchInput } from '../../../ui';
import { FiltersIcon, RefreshIcon } from '../../../components/icons';
import { GiftsAdvancedFilters } from '../GiftsAdvancedFilters';
import styles from './GiftsFilters.module.scss';

export const GiftsFilters = () => {
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
            placeholder='Search by gifts'
            className={styles.search}
          />
          <Select
            className={styles.sorting}
            name='Sort by'
            options={[
              { label: 'Option 2', value: '1' },
              { label: 'Option 1', value: '1' },
              { label: 'Option 1', value: '1' },
              { label: 'Option 1', value: '1' },
              { label: 'Option 1', value: '1' },
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
      {isAdvancedOpen && <GiftsAdvancedFilters />}
    </div>
  );
};
