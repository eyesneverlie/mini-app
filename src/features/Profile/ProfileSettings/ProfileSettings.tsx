import { Button, GlassyButton } from '../../../ui';
import { InfoIcon, CommentsIcons } from '../../../components/icons';
import styles from './ProfileSettings.module.scss';

export const ProfileSettings = () => {
  const handleTacticleResponseClick = (): void => {};

  const handlePrivacyClick = (): void => {};

  const handleContactClick = (): void => {};

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h3 className={styles.title}>TACTICLE RESPONSE</h3>
        <div className={styles.buttonGroup}>
          <GlassyButton onClick={handleTacticleResponseClick}>ON</GlassyButton>
          <GlassyButton onClick={handleTacticleResponseClick}>OFF</GlassyButton>
        </div>
      </div>
      <div className={styles.section}>
        <h3 className={styles.title}>ANIMATED GIFTS</h3>
        <div className={styles.buttonGroup}>
          <GlassyButton onClick={handleTacticleResponseClick}>ON</GlassyButton>
          <GlassyButton onClick={handleTacticleResponseClick}>OFF</GlassyButton>
        </div>
      </div>
      <div className={styles.actionButtons}>
        <GlassyButton
          icon={<InfoIcon />}
          iconPosition='left'
          onClick={handlePrivacyClick}
        >
          Privacy
        </GlassyButton>
        <Button
          icon={<CommentsIcons />}
          theme='white'
          onClick={handleContactClick}
        >
          Contact the team
        </Button>
      </div>
    </div>
  );
};
