import styles from './CircularButton.module.scss';

interface ICircularButtonProps {
  children: React.ReactNode | string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  isSelected?: boolean;
  className?: string;
}

export const CircularButton = ({
  children,
  onClick,
  isSelected = false,
  className = '',
}: ICircularButtonProps) => {
  return (
    <button
      className={`${styles.container} ${
        isSelected ? styles.selected : ''
      } ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
