import styles from './Input.module.scss';

interface IInputProps {
  name: string;
  value?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  iconUrl?: string;
}

export const Input = ({
  name,
  value,
  className = '',
  placeholder = '',
  disabled = false,
  iconUrl = '',
}: IInputProps) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {iconUrl && <img className={styles.icon} src={iconUrl} alt='' />}
      <input
        type='text'
        className={styles.input}
        name={name}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
      />
    </div>
  );
};
