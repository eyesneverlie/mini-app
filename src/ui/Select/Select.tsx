import { useEffect, useRef, useState } from 'react';
import chevronUrl from '../../assets/chevron-down.svg';
import styles from './Select.module.scss';

type SelectOption = {
  label: string;
  value: string;
};

interface ISelectProps {
  options: SelectOption[];
  name?: string;
  size?: 'large' | 'small';
  className?: string;
}

export const Select = ({
  name,
  options,
  size = 'large',
  className = '',
}: ISelectProps) => {
  const [selected, setSelected] = useState<SelectOption | null>(null);
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

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: SelectOption): void => {
    setSelected(option);
    setIsOpen(false);
  };

  return (
    <div className={`${styles.container} ${className}`} ref={dropdownRef}>
      <div
        className={`${styles.button} ${styles[size]}`}
        onClick={toggleDropdown}
      >
        <div className={styles.column}>
          {name && <span className={styles.label}>{name}</span>}
          <span className={styles.selected}>{selected?.label || ''}</span>
        </div>
        <div className={styles.column}>
          <span
            className={`${styles.chevron}, ${
              isOpen ? styles.activeChevron : ''
            }`}
          >
            <img src={chevronUrl} alt='chevron' />
          </span>
        </div>
      </div>
      {isOpen && (
        <ul className={styles.menu}>
          {options.map((opt) => (
            <li
              key={opt.value}
              className={`${styles.item} ${
                selected?.value === opt.value ? styles.active : ''
              }`}
              onClick={() => handleSelect(opt)}
            >
              {opt.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
