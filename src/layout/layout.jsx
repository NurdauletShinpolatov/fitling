import { Outlet, useMatch } from 'react-router-dom'
import '../scss/global.scss'
import HomePage from '../pages/home';
import Header from '../components/Header';
import styles from './layout.module.scss'

function Layout() {
  const match = useMatch("/");

  if (match) {
    return (
      <>
        <div className={styles.headerWrapper}>
          <Header />
        </div>
        <div className={styles.homePageWrapper}>
          <HomePage />
        </div>
      </>
    )
  } else {
    return (
      <>
        <Outlet />
      </>
    )
  }
}

export default Layout;
