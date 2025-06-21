import styles from './GlassButton.module.scss';

interface IGlassButtonProps {
  onClick: () => void;
  children: string;
}

export const GlassButton = ({ children, onClick }: IGlassButtonProps) => {
  return (
    <button type='button' className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
