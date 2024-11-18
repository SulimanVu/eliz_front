import styles from "./Nav.module.scss";
import logoGGNTU from 'shared/images/logoGGNTU.jpg';
import adminPanel from 'shared/images/adminPanel.jpg';


export const Nav = () => {
    return (
        <nav>
            <div className={styles.header}>
                <img src={logoGGNTU} alt="" />
                <div className={styles.title}>
                    ФГБОУ ВО "ГГНТУ им. акад. М.Д. Миллионщикова"
                </div>
            </div>
            <div className={styles.navBar}>
                <ul>
                    <li>
                        <div><img src={adminPanel} alt="" /> </div>
                        <div>Админ панель</div>
                    </li>
        
                </ul>
            </div>
        </nav>
    )
}
