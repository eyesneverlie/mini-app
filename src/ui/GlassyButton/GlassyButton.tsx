import styles from './GlassyButton.module.scss';

interface IGlassyButtonProps {
  onClick: () => void;
  children: string | React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  disabled?: boolean;
}

export const GlassyButton = ({
  children,
  onClick,
  className = '',
  icon,
  iconPosition = 'right',
  disabled = false,
}: IGlassyButtonProps) => {
  return (
    <button
      type='button'
      className={`${styles.button} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && iconPosition === 'left' && (
        <span className={styles.icon}>{icon}</span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className={styles.icon}>{icon}</span>
      )}
    </button>
  );
};
