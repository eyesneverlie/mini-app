import styles from './GlassyButton.module.scss';

interface IGlassyButtonProps {
  onClick: () => void;
  children: string;
}

export const GlassyButton = ({ children, onClick }: IGlassyButtonProps) => {
  return (
    <button type='button' className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
