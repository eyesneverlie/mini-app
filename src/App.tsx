import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ModalsContainer, Layout } from './components';
import { APP_ROUTES } from './data-access';
import { Market, Activity, Pass, Gifts, Profile } from './features';
import styles from './App.module.scss';

const App = () => {
  return (
    <div className={styles.container}>
      <ModalsContainer />
      <Router>
        <Layout>
          <Routes>
            <Route path={APP_ROUTES.market} element={<Market />} />
            <Route path={APP_ROUTES.activity} element={<Activity />} />
            <Route path={APP_ROUTES.gifts} element={<Pass />} />
            <Route path={APP_ROUTES.pass} element={<Gifts />} />
            <Route path={APP_ROUTES.profile} element={<Profile />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
