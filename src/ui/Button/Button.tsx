import React from 'react';
import styles from './Button.module.scss';

interface IButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  iconPlacement?: 'left' | 'right';
  theme?: 'blue' | 'white';
  disabled?: boolean;
  className?: string;
}

export const Button = ({
  children,
  icon,
  iconPlacement = 'left',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  theme = 'blue',
}: IButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${className} ${styles[theme]}`}
    >
      {icon && iconPlacement === 'left' && (
        <span className={styles.icon}>{icon}</span>
      )}
      {children}
      {icon && iconPlacement === 'right' && (
        <span className={styles.icon}>{icon}</span>
      )}
    </button>
  );
};
