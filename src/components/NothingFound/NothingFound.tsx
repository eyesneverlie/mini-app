import { NavLink } from 'react-router-dom';
import { APP_ROUTES } from '../../data-access';
import nothingFound from '../../assets/nothing-found.png';
import styles from './NothingFound.module.scss';

interface INothingFoundProps {
  description: string;
  title?: string;
  showButton?: boolean;
}

export const NothingFound = ({
  description,
  title = '',
  showButton = true,
}: INothingFoundProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src={nothingFound} alt='' />
      </div>
      {title && <span className={styles.title}>{title}</span>}
      <p className={styles.description}>{description}</p>
      {showButton && (
        <NavLink className={styles.link} to={APP_ROUTES.market}>
          Go to market
        </NavLink>
      )}
    </div>
  );
};
