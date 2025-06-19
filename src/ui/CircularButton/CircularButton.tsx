import styles from './CircularButton.module.scss';

interface ICircularButtonProps {
  children: React.ReactNode | string;
  onClick: () => void;
  className?: string;
}

export const CircularButton = ({
  children,
  onClick,
  className = '',
}: ICircularButtonProps) => {
  return (
    <button className={`${styles.container} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
