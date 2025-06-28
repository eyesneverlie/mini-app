import { Input } from '../Input';
import styles from './PriceField.module.scss';

interface IPriceFieldProps {
  className?: string;
}

export const PriceField = ({ className = '' }: IPriceFieldProps) => {
  return (
    <div className={`${styles.container} ${className}`}>
      <span className={styles.label}>Price</span>
      <div className={styles.fields}>
        <Input name='startPrice' placeholder='min' className={styles.input} />
        <span className={styles.delimiter}>-</span>
        <Input name='endPrice' placeholder='max' className={styles.input} />
      </div>
    </div>
  );
};
