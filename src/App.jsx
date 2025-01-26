import { Outlet, useMatch } from 'react-router-dom'
import './scss/global.scss'
import HomePage from './pages/home';

function App() {
  const match = useMatch("/");

  if (match) {
    return (
      <>
        <HomePage />
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

export default App
