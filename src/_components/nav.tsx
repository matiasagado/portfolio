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
                <a className={styles.heroLink}>MA</a>
            </div>
            <div className={styles.linksContainer}>
                <a className={styles.aboutLink}>ABOUT</a>
                <a className={styles.softwareLink}>SOFTWARE</a>
                <a className={styles.hardwareLink}>HARDWARE</a>
                <a className={styles.experienceLink}>EXPERIENCE</a>
                <a className={styles.contactLink}>RESUME</a>
            </div>
        </nav>
    );
}