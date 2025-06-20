import { Select, CircularButton, Input } from '../../ui';
import styles from './Filters.module.scss';

export const Filters = () => {
  const handleSearchClick = (): void => {
    console.log('clicked on search');
  };

  const handleResetClick = (): void => {
    console.log('clicked on reset');
  };

  const handleMoreClick = (): void => {
    console.log('clicked on more');
  };

  return (
    <div className={styles.container}>
      <Input name='search' placeholder='Search' />
      <div className={styles.selectors}>
        <Select name='sorting' options={[{ label: 'Option 1', value: '1' }]} />
      </div>
      <CircularButton className={styles.resetButton} onClick={handleResetClick}>
        R
      </CircularButton>
      <CircularButton onClick={handleMoreClick}>D</CircularButton>
    </div>
  );
};
