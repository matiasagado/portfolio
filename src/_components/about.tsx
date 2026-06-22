import styles from './styles/about.module.css';

export default function About() {
    return (
        <section className={styles.section} id="about">
            <div className={styles.grid}>
                <div className={styles.card}>
                    <span className={styles.badge}><span className={styles.dot} />ABOUT</span>
                    <p className={styles.text}>
                        I am an AI Model Engineer based in{' '}
                        <em>San Francisco, California</em>,{' '}
                        building reliable ML systems from training pipelines to
                        private GPU clusters.
                    </p>
                    <span className={styles.availability}>
                        <span className={styles.availDot} />
                        Available for work
                    </span>
                </div>

                <div className={styles.photo}>
                    <img src="/about-me.png" alt="Matias Agado" className={styles.img} />
                </div>
            </div>
        </section>
    );
}