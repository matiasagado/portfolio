import styles from './styles/about.module.css';

export default function About() {
    return (
        <section className={styles.section} id="about">
            <div className={styles.grid}>
                <div className={styles.card}>
                    <span className={styles.badge}><span className={styles.dot} />ABOUT</span>
                    <p className={styles.text}>
                        I build software around real problems.
                        Based in{' '}<em>San Francisco, California</em>,{' '}
                        I understand the product lifecycle by translating a vision into technical requirements 
                        that lead to a usable product.
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