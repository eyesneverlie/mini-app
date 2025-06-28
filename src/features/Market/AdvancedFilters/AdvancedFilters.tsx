import { Select, PriceField } from '../../../ui';
import styles from './AdvancedFilters.module.scss';

export const AdvancedFilters = () => {
  return (
    <div className={styles.container}>
      <Select
        className={styles.select}
        name='model'
        options={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 1', value: '1' },
          { label: 'Option 1', value: '1' },
          { label: 'Option 1', value: '1' },
          { label: 'Option 1', value: '1' },
        ]}
      />
      <Select
        className={styles.select}
        name='collections'
        options={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 1', value: '1' },
          { label: 'Option 1', value: '1' },
          { label: 'Option 1', value: '1' },
          { label: 'Option 1', value: '1' },
        ]}
      />
      <Select
        className={styles.select}
        name='background'
        options={[
          { label: 'Option 1', value: '1' },
          { label: 'Option 1', value: '1' },
          { label: 'Option 1', value: '1' },
          { label: 'Option 1', value: '1' },
          { label: 'Option 1', value: '1' },
        ]}
      />
      <PriceField className={styles.range} />
    </div>
  );
};
