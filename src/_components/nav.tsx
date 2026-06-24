import { useEffect, useState } from 'react';
import styles from './styles/nav.module.css';

export default function Nav() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return(
        <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
            <div className={styles.logoContainer}>
                <a className={styles.heroLink} href="#hero">MA</a>
            </div>
            <div className={styles.linksContainer}>
                <a className={styles.aboutLink} href="#about">ABOUT</a>
                <a className={styles.softwareLink} href="#software">SOFTWARE</a>
                <a className={styles.hardwareLink} href="#hardware">HARDWARE</a>
                <a className={styles.experienceLink} href="#experience">EXPERIENCE</a>
                <a className={styles.resumeLink} href="/Resume-Matias-Agado.pdf" download="Resume-Matias-Agado.pdf">RESUME</a>
            </div>
        </nav>
    );
}