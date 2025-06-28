import { Select, PriceField } from '../../../ui';
import styles from './ActivityAdvancedFilters.module.scss';

export const ActivityAdvancedFilters = () => {
  return (
    <div className={styles.container}>
      <Select
        className={styles.select}
        name='date'
        options={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 1', value: '1' },
          { label: 'Option 1', value: '1' },
          { label: 'Option 1', value: '1' },
          { label: 'Option 1', value: '1' },
        ]}
      />
      <PriceField className={styles.price} />
    </div>
  );
};
