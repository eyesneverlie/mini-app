import { NavLink } from 'react-router-dom';
import styles from './Avatar.module.scss';

interface IAvatarProps {
  imageUrl: string;
  fullName: string;
  href?: string;
}

export const Avatar = ({ imageUrl, fullName, href = '' }: IAvatarProps) => {
  return (
    <div className={styles.container}>
      <NavLink to={href}>
        <img src={imageUrl} alt={fullName} />
      </NavLink>
    </div>
  );
};
