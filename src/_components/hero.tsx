import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import styles from './styles/hero.module.css';

export default function Hero() {
    return (
        <section className={styles.section}>
            <div className={styles.column1}>
                <div className={styles.name}>
                    <span>SOFTWARE<br />ENGINEER</span>
                </div>
                <div>
                    <p className={styles.tagline}>AI | Systems | Infastructure</p>
                    <p className={styles.description}>Building reliable software systems<br />
                        that solve real problems and<br />
                        create meanignful impact.
                    </p>
                </div>
                <div className={styles.linksWrapper}>
                    <a className={styles.link} target="_blank" href="https://github.com/matiasagado">
                        <FaGithubSquare />
                    </a>
                    <a className={styles.link} target="_blank" href="https://www.linkedin.com/in/matiasagado/">
                        <FaLinkedin />
                    </a>
                </div>
            </div>
            <div className={styles.column2}>
                <img src="/hero.png" alt="Hero" className={styles.heroImage} />
            </div>
        </section>
    );
}