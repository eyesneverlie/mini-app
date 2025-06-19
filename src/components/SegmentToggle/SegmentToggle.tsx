import { useEffect, useState } from 'react';
import { SegmentType } from '../../data-access';
import styles from './SegmentToggle.module.scss';

interface ISegmentToggleProps {
  onToggle: (segment: SegmentType) => void;
}

export const SegmentToggle = ({ onToggle }: ISegmentToggleProps) => {
  const [activeSegment, setActiveSegment] = useState<SegmentType>('gift');

  useEffect(() => {
    onToggle(activeSegment);
  }, [activeSegment, onToggle]);

  return (
    <div className={styles.container}>
      <div className={`${(styles.indicator, styles[activeSegment])}`} />
      <button
        className={`${styles.toggleBtn} ${
          activeSegment === 'gift' ? styles.active : ''
        }`}
        onClick={() => setActiveSegment('gift')}
      >
        Gift
      </button>
      <button
        className={`${styles.toggleBtn} ${
          activeSegment === 'stickers' ? styles.active : ''
        }`}
        onClick={() => setActiveSegment('stickers')}
      >
        Stickers
      </button>
    </div>
  );
};
