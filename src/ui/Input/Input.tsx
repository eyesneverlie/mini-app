import styles from './Input.module.scss';

interface IInputProps {
  name: string;
  value?: string;
  className?: string;
  placeholder?: string;
  disabled?: boolean;
  icon?: React.ReactNode | null;
}

export const Input = ({
  name,
  value,
  className = '',
  placeholder = '',
  disabled = false,
  icon = null,
}: IInputProps) => {
  return (
    <div className={styles.container}>
      {icon && <div className={styles.icon}>{icon}</div>}
      <input
        type='text'
        className={`${styles.input} ${className}`}
        name={name}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
      />
    </div>
  );
};
