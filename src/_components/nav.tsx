import { RESUME_URL } from '../data';
import styles from './styles/nav.module.css';

export default function Nav() {
    return (
        <header className={styles.top}>
            <a className={styles.mark} href="#top" aria-label="Matias Agado, home">MA</a>
            <nav className={styles.pill} aria-label="Primary">
                <a className={styles.on} href="#top">Home</a>
                <a className={styles.hideSm} href="#about">About</a>
                <a href="#work">Work</a>
                <a className={styles.hideSm} href={RESUME_URL} download="Resume-Matias-Agado.pdf">Resume</a>
                <a className={styles.call} href="#contact">Get in touch</a>
            </nav>
        </header>
    );
}
