import { useCallback, useState, useEffect } from 'react';
import { marketplaceApi } from '../../api';
import { SwitchableSegment, ICategory } from '../../data-access';
import { useToastr } from '../../hooks';
import { handleApiError } from '../../utils';
import styles from './SegmentToggle.module.scss';

interface ISegmentToggleProps {
  onToggle: (segment: { id: string; name: string }) => void;
  className?: string;
}

export const SegmentToggle = ({
  onToggle,
  className = '',
}: ISegmentToggleProps) => {
  const [activeSegment, setActiveSegment] = useState<SwitchableSegment>();
  const [majorCategories, setMajorCategories] = useState<ICategory[]>([]); // Gifts ad Stickers

  const notify = useToastr();

  const handleToggle = useCallback(
    (segment: SwitchableSegment) => {
      setActiveSegment(segment);
      onToggle(segment);
    },
    [onToggle]
  );

  const getCategories = useCallback(
    async (parentId: string | null, callback: (items: ICategory[]) => void) => {
      try {
        const { items } = await marketplaceApi.getCategories({
          parentId,
          limit: String(marketplaceApi.recordsPerPage),
        });
        handleToggle(items[0]);
        callback(items);
      } catch (error) {
        notify(handleApiError(error));
      }
    },
    [handleToggle, notify]
  );

  // parentId = 'null' is for fetching major categories: gifts and stickers
  useEffect(() => {
    getCategories('null', setMajorCategories);
  }, [getCategories]);

  return (
    <div className={`${styles.container} ${className}`}>
      {majorCategories?.map((segment: { id: string; name: string }) => (
        <button
          key={segment.id}
          className={`${styles.toggleBtn} ${
            activeSegment?.id === segment?.id ? styles.active : ''
          }`}
          onClick={() => {
            onToggle(segment);
            setActiveSegment(segment);
          }}
        >
          {segment?.name}
        </button>
      ))}
    </div>
  );
};
