import styles from './Avatar.module.scss';

interface IAvatarProps {
  imageUrl: string;
  fullName: string;
}

export const Avatar = ({ imageUrl, fullName }: IAvatarProps) => {
  return (
    <div className={styles.container}>
      <img src={imageUrl} alt={fullName} />
    </div>
  );
};
