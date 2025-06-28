import { NavLink } from 'react-router-dom';
import { APP_ROUTES } from '../../../data-access';
import { TonIcon, PlusIcon } from '../../icons';
import { GlassyButton } from '../../../ui';
import styles from './ActionButtons.module.scss';

export const ActionButtons = () => {
  const handleOnClick = (): void => {};

  return (
    <div className={styles.container}>
      <NavLink to={APP_ROUTES.walletBalance}>
        <GlassyButton
          icon={<TonIcon />}
          iconPosition='left'
          className={styles.circularButton}
          onClick={handleOnClick}
        >
          0.0 <PlusIcon />
        </GlassyButton>
      </NavLink>
    </div>
  );
};
