import { NothingFound } from '../../../components';
import styles from './Activities.module.scss';

export const Activities = () => {
  return (
    <div className={styles.container}>
      <NothingFound
        title='Coming soon'
        description='This feature is under construction'
      />
    </div>
  );
};
