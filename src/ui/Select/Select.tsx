import { useEffect, useRef, useState } from 'react';
import styles from './Select.module.scss';

type SelectOption = {
  label: string;
  value: string;
};

interface ISelectProps {
  name: string;
  options: SelectOption[];
}

export const Select = ({ name, options }: ISelectProps) => {
  const [selected, setSelected] = useState<SelectOption | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const dropdownRef = useRef<HTMLUListElement | null>(null);

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
    <div className={styles.container}>
      <div className={styles.button} onClick={toggleDropdown}>
        <div className={styles.column}>
          <span className={styles.label}>{name}</span>
          <span className={styles.selected}>{selected?.label || ''}</span>
        </div>
        <div className={styles.column}>
          <span
            className={`${styles.chevron}, ${
              isOpen ? styles.activeChevron : ''
            }`}
          >
            ▼
          </span>
        </div>
      </div>
      {isOpen && (
        <ul className={styles.menu} ref={dropdownRef}>
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
