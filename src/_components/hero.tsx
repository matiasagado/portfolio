import styles from './styles/hero.module.css';
import { SiGithub } from "react-icons/si";
import { GrLinkedinOption } from "react-icons/gr";

export default function Hero() {
    return (
        <section className={styles.hero} id="hero">
            <div className={styles.inner}>
                <div className={styles.left}>
                    <div className={styles.text}>
                        <h1 className={styles.role}>SOFTWARE<br />ENGINEER</h1>
                        <span className={styles.tags}>AI | SYSTEMS | INFRASTRUCTURE</span>
                        <span className={styles.name}>Matias Agado</span>
                        <p className={styles.bio}>Building reliable software systems that <br/>
                        solve real problems and create<br />
                        meaningful impact.
                    </p>
                    </div>
                    <div className={styles.socials}>
                        <a target="_blank" href="https://github.com/matiasagado" className={styles.socialBtn}>
                            <SiGithub />
                        </a>
                        <a target="_blank" href="https://www.linkedin.com/in/matiasagado/" className={styles.socialBtn}>
                            <GrLinkedinOption />
                        </a>
                    </div>
                </div>
                <div className={styles.right}>
                    <img src="/hero.png" alt="Hero" className={styles.heroImg} />
                </div>
            </div>
        </section>
    );
}