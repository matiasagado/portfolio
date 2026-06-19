import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import styles from './hero.module.css';

export default function Hero() {
    return (
        <section className={styles.section}>
            <div className={styles.column1}>
                <div className={styles.name}>
                    <span>MATIAS</span>
                    <br />
                    <span>AGADO</span>
                </div>
                <div>
                    <p className={styles.role}>SOFTWARE ENGINEER</p>
                    <p className={styles.tagline}>AI | Systems | Product</p>
                    <p className={styles.description}>Building reliable software systems<br />
                        that solve real problems and<br />
                        create meanignful impact.
                    </p>
                </div>
                <div className={styles.linksWrapper}>
                    <a className={styles.link}>
                        <FaGithubSquare />
                    </a>
                    <a className={styles.link}>
                        <FaLinkedin />
                    </a>
                </div>
            </div>
            <div className={styles.column2}>GRID 2</div>
        </section>
    );
}