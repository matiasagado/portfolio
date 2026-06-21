import styles from "./styles/nav.module.css";

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <div className={styles.logoContainer}>
                <a href="#hero">MA</a>
            </div>
            <div className={styles.linksWrapper}>
                <a href="#about">ABOUT</a>
                <a href="#experience">EXERIENCE</a>
                <a href="#software-projects">SOFTWARE</a>
                <a href="#hardware-projects">HARDWARE</a>
                <a href="#contact">CONTACT</a>
            </div>
        </nav>
    );
}
