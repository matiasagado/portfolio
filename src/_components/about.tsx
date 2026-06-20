import styles from './styles/about.module.css';

export default function About() {
    return (
        <section className={styles.section}>
            <div className={styles.content}>
                <div className={styles.column2}>
                    <div className={styles.imageCard}>
                        <img src="/about-me.png" alt="About me" className={styles.aboutImage} />
                    </div>
                </div>
                <div className={styles.column1}>
                    <h2 className={styles.heading}>
                        /about me
                    </h2>
                    <p className={styles.paragraph}>
                        My work spans the full model lifecycle, from designing training
                        pipelines and building evaluation frameworks to deploying models
                        on private server hardware.
                    </p>
                    <p className={styles.paragraph}>
                        When I am not training models, tuning evaluation metrics or building apps, 
                        I like to experiment with hardware.
                    </p>
                </div>
            </div>
        </section>
    );
}