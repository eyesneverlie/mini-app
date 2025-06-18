import { Header, StickyMenu, ModalsContainer, Catalog } from './components';
import styles from './App.module.scss'

const App = () => {
  const dummyCards = Array.from({ length: 20 }, ((_, i) => ({
    image: 'https://storage.googleapis.com/proudcity/mebanenc/uploads/2021/03/placeholder-image.png', 
    title: 'Diamond Eyes', 
    description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    id: i + 1,
  })));
  
  return (
    <div className={styles.container}>
      <ModalsContainer />
      <Header />
      <Catalog items={dummyCards} />
      <StickyMenu />
    </div>
  )
}

export default App;
