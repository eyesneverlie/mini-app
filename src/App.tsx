import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ModalsContainer, Layout, ToastrProvider } from './components';
import { APP_ROUTES } from './data-access';
import { Market, Activity, Pass, Gifts, Profile, Cart } from './features';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.container}>
      <ToastrProvider>
        <ModalsContainer />
        <Router>
          <Layout>
            <Routes>
              <Route path={APP_ROUTES.market} element={<Market />} />
              <Route path={APP_ROUTES.activity} element={<Activity />} />
              <Route path={APP_ROUTES.gifts} element={<Pass />} />
              <Route path={APP_ROUTES.pass} element={<Gifts />} />
              <Route path={APP_ROUTES.profile} element={<Profile />} />
              <Route path={APP_ROUTES.cart} element={<Cart />} />
            </Routes>
          </Layout>
        </Router>
      </ToastrProvider>
    </div>
  );
};

export default App;
