import styles from './Header.module.scss'
import logoImg from '../../assets/images/logo.png'
import { Link } from 'react-router'
import { FlagRuIcon, FlagUzIcon } from '../../assets/icons/headerIcons'
import { ArrowDownIcon } from '../../assets/icons/globalIcons'
import { useState } from 'react'

const languages = [
  {
    flag: <FlagRuIcon />,
    label: "Русский"
  },
  {
    flag: <FlagUzIcon />,
    label: "Узбекский"
  }
]

export default function Header() {
  const [lang, setLang] = useState(0);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(true)

  const toggleLangMenu = () => {
    setIsLangMenuOpen(v => !v)
  }

  const changeLang = () => {
    setLang(v => v ? 0 : 1)
  }

  return(
    <div className={styles.Header}>
      <img className={styles.logo} src={logoImg} alt="Logo FitLing" />
      <nav className={styles.nav}>
        <Link to="/find-trainer">Найти тренера</Link>
        <Link to="become-trainer">Стать тренером</Link>
      </nav>
      <div className={styles.lang} onClick={toggleLangMenu} >
        {languages[lang].flag}
        <p>{languages[lang].label}</p>
        <span className={isLangMenuOpen ? styles.arrowUp : ''}>
          <ArrowDownIcon color='white' />
        </span>
        {isLangMenuOpen && <div className={styles.menu} onClick={changeLang}>
          <div className={styles.menuItem}>
            {languages?.at(lang-1).flag}
            <p>{languages?.at(lang-1).label}</p>
          </div>
        </div>}
      </div>
    </div>
  )
}