import { Select, CircularButton, SearchInput } from '../../ui';

import styles from './Filters.module.scss';

export const Filters = () => {
  const handleResetClick = (): void => {
    console.log('clicked on reset');
  };

  const handleMoreClick = (): void => {
    console.log('clicked on more');
  };

  return (
    <div className={styles.container}>
      <div className={styles.selectors}>
        <SearchInput className={styles.search} />
        <Select
          className={styles.sorting}
          name='sorting'
          options={[
            { label: 'Option 1', value: '1' },
            { label: 'Option 1', value: '1' },
            { label: 'Option 1', value: '1' },
            { label: 'Option 1', value: '1' },
            { label: 'Option 1', value: '1' },
          ]}
        />
      </div>
      <CircularButton className={styles.resetButton} onClick={handleResetClick}>
        R
      </CircularButton>
      <CircularButton onClick={handleMoreClick}>D</CircularButton>
    </div>
  );
};
