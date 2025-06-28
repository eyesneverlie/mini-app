import { NavLink } from 'react-router-dom';
import { Image } from '../../ui';
import styles from './Avatar.module.scss';

interface IAvatarProps {
  fullName: string;
  imageUrl?: string;
  href?: string;
}

export const Avatar = ({ imageUrl, fullName, href = '' }: IAvatarProps) => {
  return (
    <div className={styles.container}>
      <NavLink to={href}>
        <Image src={imageUrl} alt={fullName} />
      </NavLink>
    </div>
  );
};
