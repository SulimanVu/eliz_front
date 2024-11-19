import styles from "./Nav.module.scss";
import logoGGNTU from "shared/images/logoGGNTU.jpg";
import adminPanel from "shared/images/adminPanel.jpg";
import { Flex } from "antd";
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
            <li>
              <div>
                <img src={adminPanel} alt="" />{" "}
              </div>
              <div>Админ панель</div>
            </li>
          )}
          {params.includes("monitoring") && (
            <>
              <li onClick={() => navigate("/monitoring/comments")}>Замечания</li>
              <li onClick={() => navigate("/monitoring/visit")}>
                Посещаемость
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};
