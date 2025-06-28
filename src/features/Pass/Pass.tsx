import { GlassyButton } from '../../ui';
import { InfoIcon, PassIcon } from '../../components/icons';
import { Tasks } from './Tasks';
import { MyPoints } from './MyPoints';
import styles from './Pass.module.scss';

export const Pass = () => {
  const tasks = [
    {
      imageUrl:
        'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
      title: 'Subscribe lababa',
      points: 200,
    },
    {
      imageUrl:
        'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
      title: 'Subscribe lababa',
      points: 200,
    },
    {
      imageUrl:
        'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
      title: 'Subscribe lababa',
      points: 200,
    },
    {
      imageUrl:
        'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
      title: 'Subscribe lababa',
      points: 200,
    },
    {
      imageUrl:
        'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png',
      title: 'Subscribe lababa',
      points: 200,
    },
  ];

  const handleRulesClick = (): void => {
    console.log('clicked on rules');
  };

  return (
    <div className={styles.container}>
      <GlassyButton
        icon={<InfoIcon />}
        iconPosition='right'
        className={styles.rulesButton}
        onClick={handleRulesClick}
      >
        Rules
      </GlassyButton>
      <div className={styles.content}>
        <div className={styles.icon}>
          <PassIcon />
        </div>
        <span className={styles.title}>Pass #1</span>
        <p className={styles.description}>
          Earn points & climb the leaderboard
        </p>
        <MyPoints />
        <h2 className={styles.sectionTitle}>Tasks</h2>
        <Tasks type='one-time' items={tasks} />
        <Tasks type='daily' items={tasks} />
      </div>
    </div>
  );
};
