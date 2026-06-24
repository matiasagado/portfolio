import { SiGithub } from "react-icons/si";
import { GrLinkedinOption } from "react-icons/gr";
import styles from './styles/contact.module.css';

export default function Contact() {
    return (
        <section className={styles.contact} id="contact">
            <div className={styles.main}>

                {/* Left: Name + Bio + Socials */}
                <div className={styles.left}>
                    <h1 className={styles.name}>MATIAS<br />AGADO</h1>
                    <p className={styles.bio}>
                        Training AI Models at Handshake AI. Building reliable machine learning
                        systems with a focus on model training, evaluation, and infrastructure.
                    </p>
                    <div className={styles.socials}>
                        <a className={styles.socialBtn} aria-label="GitHub" target="_blank" href="https://github.com/matiasagado">
                            <SiGithub />
                        </a>
                        <a className={styles.socialBtn} aria-label="LinkedIn" target="_blank" href="https://www.linkedin.com/in/matiasagado/">
                            <GrLinkedinOption />
                        </a>
                    </div>
                </div>

                {/* Middle: Info */}
                <div className={styles.middle}>
                    <div className={styles.infoBlock}>
                        <span className={styles.label}>LOCATION</span>
                        <p className={styles.value}>San Francisco, California<br />United States</p>
                    </div>
                    <div className={styles.infoBlock}>
                        <span className={styles.label}>EMAIL</span>
                        <a href="mailto:mfagado1@dons.usfca.edu" className={styles.emailValue}>
                            mfagado1@dons.usfca.edu
                        </a>
                    </div>
                    <div className={styles.infoBlock}>
                        <span className={styles.label}>CURRENT FOCUS</span>
                        <p className={styles.value}>AI Model Training &amp; Evaluation</p>
                    </div>
                </div>

                <div className={styles.photo}>
                    <img src="/contact-pic.png" alt="Matias Agado" className={styles.img} />
                </div>

            </div>

            <div className={styles.footer}>
                <span>© 2025 Matias Agado. All rights reserved.</span>
            </div>
        </section>
    );
}