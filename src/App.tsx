import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import {
  ModalsContainer,
  Layout,
  ToastrProvider,
  SplashScreen,
} from './components';
import { APP_ROUTES } from './data-access';
import {
  Market,
  Activity,
  Pass,
  Gifts,
  Profile,
  Cart,
  WalletBalance,
  Cashback,
} from './features';
import styles from './App.module.scss';

const App = () => {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    const telegram = window.Telegram?.WebApp;

    if (!telegram) {
      return;
    }

    telegram.ready();
    telegram.expand();
    telegram.BackButton.show();
    telegram.BackButton.onClick(() => {
      navigate(-1);
    });

    return () => {
      telegram.BackButton.hide();
    };
  }, [navigate]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return isSplashVisible ? (
    <SplashScreen />
  ) : (
    <div className={styles.container}>
      <ToastrProvider>
        <ModalsContainer />
        <Layout>
          <Routes>
            <Route path={APP_ROUTES.market} element={<Market />} />
            <Route path={APP_ROUTES.activity} element={<Activity />} />
            <Route path={APP_ROUTES.gifts} element={<Gifts />} />
            <Route path={APP_ROUTES.pass} element={<Pass />} />
            <Route path={APP_ROUTES.profile} element={<Profile />} />
            <Route path={APP_ROUTES.cart} element={<Cart />} />
            <Route path={APP_ROUTES.cashback} element={<Cashback />} />
            <Route
              path={APP_ROUTES.walletBalance}
              element={<WalletBalance />}
            />
          </Routes>
        </Layout>
      </ToastrProvider>
    </div>
  );
};

export default App;
