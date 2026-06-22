import styles from './styles/contact.module.css';

export default function Contact() {
    return (
        <section className={styles.contact}>
            <div className={styles.main}>

                {/* Left: Name + Bio + Socials */}
                <div className={styles.left}>
                    <h1 className={styles.name}>MATIAS<br />AGADO</h1>
                    <p className={styles.bio}>
                        AI Model Engineer at Handshake AI. Building reliable machine learning
                        systems with a focus on model training, evaluation, and hardware-aware
                        infrastructure.
                    </p>
                    <div className={styles.socials}>
                        <a href="#" className={styles.socialBtn} aria-label="GitHub">
                            {/* swap for react-icon */}
                            GH
                        </a>
                        <a href="#" className={styles.socialBtn} aria-label="LinkedIn">
                            in
                        </a>
                        <a href="#" className={styles.socialBtn} aria-label="X">
                            X
                        </a>
                        <a href="#" className={styles.socialBtn} aria-label="Email">
                            @
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
                        <a href="mailto:matias@example.com" className={styles.value}>
                            mfagado1@dons.usfca.edu
                        </a>
                    </div>
                    <div className={styles.infoBlock}>
                        <span className={styles.label}>CURRENT FOCUS</span>
                        <p className={styles.value}>AI Model Training &amp; Evaluation</p>
                    </div>
                </div>

                {/* Right: placeholder for image/card */}
                <div className={styles.right}>
                    <div className={styles.cardPlaceholder} />
                </div>

            </div>

            <div className={styles.footer}>
                <span>© 2025 Matias Agado. All rights reserved.</span>
            </div>
        </section>
    );
}