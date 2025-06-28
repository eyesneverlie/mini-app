import { useState, useRef, useEffect } from 'react';
import { CircularButton, GlassyButton, Button } from '../../../../ui';
import { ArrowUpIcon } from '../../../../components/icons';
import { Volume, Period } from '../../../../data-access';
import styles from './VolumeButton.module.scss';

interface IVolumeButtonProps {
  onSet: (params: { volume: Volume; period: Period }) => void;
}

export const VolumeButton = ({ onSet }: IVolumeButtonProps) => {
  const [period, setPeriod] = useState<string>('');
  const [volume, setVolume] = useState<string>('');
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.container} ref={dropdownRef}>
      <div className={styles.selector} onClick={() => setIsOpen(!isOpen)}>
        <span className={styles.label}>Volume</span>
        <CircularButton
          className={`${styles.volumeButton} ${
            volume === 'up' ? styles.active : ''
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setVolume('up');
          }}
        >
          <ArrowUpIcon />
        </CircularButton>
        <CircularButton
          className={`${styles.volumeButton} ${
            volume === 'down' ? styles.active : ''
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setVolume('down');
          }}
        >
          <ArrowUpIcon />
        </CircularButton>
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.options}>
            <GlassyButton
              className={`${styles.circularButton} ${
                period === '24' ? styles.active : ''
              }`}
              onClick={() => setPeriod('24h')}
            >
              24H
            </GlassyButton>
            <GlassyButton
              className={`${styles.circularButton} ${
                period === 'week' ? styles.active : ''
              }`}
              onClick={() => setPeriod('week')}
            >
              Week
            </GlassyButton>
            <GlassyButton
              className={`${styles.circularButton} ${
                period === 'month' ? styles.active : ''
              }`}
              onClick={() => setPeriod('month')}
            >
              Month
            </GlassyButton>
          </div>
          <Button
            className={styles.setButton}
            onClick={() => {
              setIsOpen(false);
              onSet({ volume: volume as Volume, period: period as Period });
            }}
          >
            Set
          </Button>
        </div>
      )}
    </div>
  );
};
