import styles from './hero.module.css';

export default function Hero() {
    return (
        <section className={styles.section}>
            <div className={styles.column1}>
                <h1>Matias Agado</h1>
                <h2>Software Engineer</h2>
                <p>AI | Systems | Product</p>
                <p>Building products & systems that create real impact</p>
                <div>
                    <button>Linked In Logo</button>
                    <button>Github Logo</button>
                </div>
            </div>
            <div>GRID 2</div>
        </section>
    );
}