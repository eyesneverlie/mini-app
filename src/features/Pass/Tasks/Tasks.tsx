import { TaskItem } from '../TaskItem';
import styles from './Tasks.module.scss';

type Task = {
  imageUrl: string;
  title: string;
  points: number;
};

interface ITasksProps {
  items: Task[];
  type: 'one-time' | 'daily';
}

export const Tasks = ({ type, items }: ITasksProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrap}>
        <h2 className={styles.heading}>
          {type === 'one-time' ? 'One-time' : 'Daily'}
        </h2>
        <span className={styles.time}>17:37:35</span>
      </div>
      <div className={styles.content}>
        {items.map((item, index) => (
          <TaskItem key={`item-${index}`} data={item} />
        ))}
      </div>
    </div>
  );
};
