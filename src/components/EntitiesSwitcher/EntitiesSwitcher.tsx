import styles from './EntitiesSwitcher.module.scss';

interface IEntitiesSwitcherProps {
  tabs: string[];
  onChange: (tab: string) => void;
  activeTab?: string;
}

export const EntitiesSwitcher = ({
  tabs,
  activeTab = tabs[0],
  onChange,
}: IEntitiesSwitcherProps) => {
  const handleTabClick = (tab: string): void => {
    onChange(tab);
  };

  console.log('active tabs = ', activeTab);

  return (
    <nav className={styles.tabs}>
      {tabs.map((tab: string) => (
        <button
          key={tab}
          className={`${styles.button} ${
            activeTab === tab ? styles.active : ''
          }`}
          onClick={() => handleTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};
