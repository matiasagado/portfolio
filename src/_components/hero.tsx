import { useEffect, useState } from 'react';
import { HERO_LINE } from '../data';
import styles from './styles/hero.module.css';
import Topo from './topo';

const prefersReducedMotion = () =>
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

export default function Hero() {
    const [count, setCount] = useState(() => (prefersReducedMotion() ? HERO_LINE.length : 0));

    useEffect(() => {
        if (count >= HERO_LINE.length) return;
        const id = window.setTimeout(() => setCount((n) => n + 1), 55);
        return () => window.clearTimeout(id);
    }, [count]);

    return (
        <section id="top" className={styles.hero}>
            <Topo className={styles.topo} />
            <div className={styles.vignette} aria-hidden="true" />
            <div className={styles.copy}>
                <h1 className={styles.title}>Hi, I&apos;m Matias</h1>
                <p className={styles.line}>
                    <span className="visually-hidden">{HERO_LINE}</span>
                    <span aria-hidden="true">{HERO_LINE.slice(0, count)}</span>
                    <span className={styles.cursor} aria-hidden="true" />
                </p>
            </div>
        </section>
    );
}
