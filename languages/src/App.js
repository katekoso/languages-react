import styles from './assets/styles/App.module.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import List from './assets/components/List/List';
import Slider from './assets/components/Slider/Slider';
import NoMatch from './assets/components/Errors/NoMatch';
import logo from './assets/images/logo2.png';
import { observer, inject } from "mobx-react";
import { useEffect } from 'react';

const App = inject(['WordsStore'])(observer(({ WordsStore }) => {

  useEffect(() => {
    WordsStore.loadWords();
  }, [])

  return (
    <Router>
      <header className={styles.header}>
        <Link to="/"><img src={logo} className={styles.header__logo}/></Link>
        <nav>
          <ul>
            <li>
              <Link to="/" className={styles.nav__item}>Главная</Link>
            </li>
            <li>
              <Link to="/game" className={styles.nav__item}>Карточки</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className={styles.main}>
        <Routes>
          <Route path="/game" element={<Slider words={WordsStore.words} isLoading={WordsStore.isLoading}/>} />
          <Route exact path="/" element={<List words={WordsStore.words}/>} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </main>
    </Router>
  );
}));

export default App;