import CustomButton from "../CustomButton";
import styles from "./HeroSection.module.scss";

export default function HeroSection() {
  return (
    <section className={styles.heroSection}>
      <h1 className={styles.heading}>
        Достигайте своих целей быстрее с{" "}
        <span className={styles.redText}>лучшими тренерами</span>
      </h1>
      <h2 className={styles.heading2}>
        Найдите своего тренера для персонализированного подхода и быстрого
        достижения результатов.
      </h2>
      <CustomButton title="Найти тренера" />
    </section>
  );
}
