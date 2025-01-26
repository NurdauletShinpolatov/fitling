import { ArrowRightIcon } from '../../assets/icons/globalIcons'
import styles from './CustomButton.module.scss'

export default function CustomButton({ title, bgColor="primary" }) {
  return(
    <button className={styles.customButton}>
      {title}
      <ArrowRightIcon />
    </button>
  )
}