import React from 'react';
import styles from './Button.module.scss';

interface IButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  iconPlacement?: 'left' | 'right';
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
}: IButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${className}`}
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
