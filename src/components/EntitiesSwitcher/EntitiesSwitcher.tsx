import styles from './EntitiesSwitcher.module.scss';

interface ITab {
  id: string;
  title: string;
}

interface IEntitiesSwitcherProps {
  tabs: ITab[];
  onChange: (tab: string) => void;
  activeTab?: string;
}

export const EntitiesSwitcher = ({
  tabs,
  activeTab = tabs[0].id,
  onChange,
}: IEntitiesSwitcherProps) => {
  const handleTabClick = (tab: string): void => {
    onChange(tab);
  };

  return (
    <nav className={styles.tabs}>
      {tabs.map((tab: ITab) => (
        <button
          key={tab.id}
          className={`${styles.button} ${
            activeTab === tab.id ? styles.active : ''
          }`}
          onClick={() => handleTabClick(tab.id)}
        >
          {tab.title}
        </button>
      ))}
    </nav>
  );
};
