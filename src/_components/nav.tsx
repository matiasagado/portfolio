import styles from "./styles/nav.module.css";

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logoContainer}>
                <a>Matias Agado</a>
            </div>
            <div className={styles.linksWrapper}>
                <a>ABOUT</a>
                <a>EXERIENCE</a>
                <a>SOFTWARE</a>
                <a>HARDWARE</a>
                <a>CONTACT</a>
            </div>
        </nav>
    );
}
