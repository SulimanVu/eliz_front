import { useNavigate } from "react-router-dom";
import styles from "./mainPage.module.scss";

const Content = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.content}>
      <div
        className={styles.monitoring}
        onClick={() => navigate("/monitoring/visit")}
      >
        Мониторинг
      </div>
      <div className={styles.analytics}>Аналитика</div>
    </div>
  );
};

export default Content;
