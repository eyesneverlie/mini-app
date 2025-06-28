import { Button } from '../../../ui';
import { PassIcon } from '../../../components/icons';
import avatarUrl from '../../../assets/profile-avatar.png';
import styles from './TaskItem.module.scss';

interface ITaskProps {
  data: any; // TODO: set proper type
}

export const TaskItem = ({ data }: ITaskProps) => {
  const handleStartClick = (): void => {};

  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <img src={avatarUrl} alt={data.title} />
      </div>
      <div className={styles.details}>
        <span className={styles.title}>Subscribe labuba</span>
        <span className={styles.value}>
          200 <PassIcon />
        </span>
      </div>
      <Button
        className={styles.startButton}
        theme='white'
        onClick={handleStartClick}
      >
        Start
      </Button>
    </div>
  );
};
