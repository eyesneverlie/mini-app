import React from 'react';
import styles from './Button.module.scss';

interface IButtonProps {
  children: React.ReactNode;
  icon?: React.ReactNode; 
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
};

export const Button = ({
  children,
  icon,
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
      <span className={styles.text}>{children}</span>
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
};