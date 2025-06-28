import { NothingFound } from '../../../components';
import styles from './Hot.module.scss';

export const Hot = () => {
  return (
    <div className={styles.container}>
      <NothingFound
        title='Coming soon'
        description='This feature is under construction'
      />
    </div>
  );
};
