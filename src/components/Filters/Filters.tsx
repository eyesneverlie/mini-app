import { Select, CircularButton } from '../../ui';
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
      <CircularButton
        className={styles.searchButton}
        onClick={handleSearchClick}
      >
        S
      </CircularButton>
      <div className={styles.selectors}>
        <Select name='token' options={[]} />
        <Select name='sorting' options={[]} />
      </div>
      <CircularButton className={styles.resetButton} onClick={handleResetClick}>
        R
      </CircularButton>
      <CircularButton onClick={handleMoreClick}>D</CircularButton>
    </div>
  );
};
