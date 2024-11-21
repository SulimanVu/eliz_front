import styles from "./Nav.module.scss";
import logoGGNTU from "shared/images/logoGGNTU.jpg";
import adminPanel from "shared/images/adminPanel.jpg";
import { useNavigate } from "react-router-dom";

export const Nav = () => {
  const params = window.location.href;
  const navigate = useNavigate();

  return (
    <nav>
      <div className={styles.header}>
        <img src={logoGGNTU} alt="" />
        <div className={styles.title}>
          ФГБОУ ВО "ГГНТУ им. акад. М.Д. Миллионщикова"
        </div>
      </div>
      <div className={styles.navBar}>
        <ul className={styles.ul}>
          {!params.includes("monitoring") && (
            <li onClick={() => navigate("/")}>
              <div>
                <img src={adminPanel} alt="" />{" "}
              </div>
              <div>Админ панель</div>
            </li>
          )}
          {params.includes("monitoring") && (
            <>
              <li onClick={() => navigate("/")}>Главная</li>
              <li
                onClick={() => navigate("/monitoring/comments")}
                className={
                  window.location.pathname.includes("comments")
                    ? styles.active
                    : null
                }
              >
                Замечания
              </li>
              <li
                onClick={() => navigate("/monitoring/visit")}
                className={
                  window.location.pathname.includes("visit")
                    ? styles.active
                    : null
                }
              >
                Посещаемость
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
