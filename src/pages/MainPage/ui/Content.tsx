import styles from "./mainPage.module.scss";

const Content = () => {
  return (
    <div className={styles.content}>
        <div className={styles.monitoring}>Мониторинг</div>
        <div className={styles.analytics}>Аналитика</div>
      </div>
  )
}

export default Content
