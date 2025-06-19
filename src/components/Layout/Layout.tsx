import { ReactNode } from 'react';
import { Header, StickyMenu } from '../../components';
import styles from './Layout.module.scss';

interface ILayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
      <StickyMenu />
    </div>
  );
};
