import { CircularButton } from '../../../ui';
import {
  ChevronRightIcon,
  InfoIcon,
  PassIcon,
} from '../../../components/icons';
import styles from './MyPoints.module.scss';

export const MyPoints = () => {
  const handleButtonClick = (): void => {};

  const PurchaseIcon = () => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='14'
        height='11'
        viewBox='0 0 14 11'
      >
        <g opacity='0.4'>
          <rect
            x='-0.5'
            y='0.5'
            width='5'
            height='2'
            rx='0.5'
            transform='matrix(-1 0 0 1 5 0)'
            stroke='white'
          />
          <rect x='8.5' y='0.5' width='5' height='2' rx='0.5' stroke='white' />
          <rect x='0.5' y='4.5' width='5' height='6' rx='0.5' stroke='white' />
          <rect x='8.5' y='4.5' width='5' height='6' rx='0.5' stroke='white' />
        </g>
      </svg>
    );
  };

  const ReferralsIcon = () => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='15'
        height='13'
        viewBox='0 0 15 13'
      >
        <path
          opacity='0.4'
          d='M14 11.9999C14 10.7228 12.7942 9.63621 11.1111 9.23353M9.66667 12C9.66667 10.38 7.72657 9.06667 5.33333 9.06667C2.9401 9.06667 1 10.38 1 12M9.66667 6.86667C11.2622 6.86667 12.5556 5.55337 12.5556 3.93333C12.5556 2.3133 11.2622 1 9.66667 1M5.33333 6.86667C3.73784 6.86667 2.44444 5.55337 2.44444 3.93333C2.44444 2.3133 3.73784 1 5.33333 1C6.92882 1 8.22222 2.3133 8.22222 3.93333C8.22222 5.55337 6.92882 6.86667 5.33333 6.86667Z'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    );
  };

  const TasksIcon = () => {
    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        width='13'
        height='13'
        viewBox='0 0 13 13'
      >
        <path
          opacity='0.4'
          d='M8.94464 4.66667L5.68538 8.33333L4.05556 6.5M1 10.0446V2.95567C1 2.27117 1 1.92866 1.13321 1.66721C1.25039 1.43723 1.43723 1.25039 1.66721 1.13321C1.92866 1 2.27117 1 2.95567 1H10.0446C10.7291 1 11.0708 1 11.3323 1.13321C11.5623 1.25039 11.7497 1.43723 11.8669 1.66721C12 1.9284 12 2.2705 12 2.95367V10.0466C12 10.7298 12 11.0714 11.8669 11.3326C11.7497 11.5626 11.5623 11.7497 11.3323 11.8669C11.0711 12 10.7295 12 10.0463 12H2.95367C2.2705 12 1.9284 12 1.66721 11.8669C1.43723 11.7497 1.25039 11.5626 1.13321 11.3326C1 11.0711 1 10.7291 1 10.0446Z'
          stroke='white'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    );
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        MyPoints <InfoIcon />
      </h2>
      <div className={styles.points}>
        <span className={styles.number}>
          45 <PassIcon />
        </span>
        <CircularButton onClick={handleButtonClick}>
          <ChevronRightIcon />
        </CircularButton>
      </div>
      <div className={styles.statistics}>
        <div className={styles.item}>
          <span className={styles.name}>Purchase</span>
          <div className={styles.params}>
            0 <PurchaseIcon /> /{' '}
            <span className={styles.highlighted}>
              0 <PassIcon />
            </span>
          </div>
        </div>
        <div className={styles.item}>
          <span className={styles.name}>Sold</span>
          <div className={styles.params}>
            0 <PurchaseIcon /> /{' '}
            <span className={styles.highlighted}>
              0 <PassIcon />
            </span>
          </div>
        </div>
        <div className={styles.item}>
          <span className={styles.name}>Referrals</span>
          <div className={styles.params}>
            0 <ReferralsIcon /> /{' '}
            <span className={styles.highlighted}>
              0 <PassIcon />
            </span>
          </div>
        </div>
        <div className={styles.item}>
          <span className={styles.name}>Tasks</span>
          <div className={styles.params}>
            0 <TasksIcon /> /{' '}
            <span className={styles.highlighted}>
              0 <PassIcon />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
