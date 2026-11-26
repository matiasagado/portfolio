import { useEffect, useState } from 'react';
import { HERO_LINE } from '../data';
import styles from './styles/hero.module.css';

type Tri = { points: string; fill: string };

/** Low-poly background: a jittered grid split into triangles, in dark greys. Deterministic, so it never shifts. */
function buildTriangles(): Tri[] {
    const cols = 10, rows = 7, W = 1440, H = 860;
    let seed = 7;
    const rnd = () => {
        seed = (seed * 9301 + 49297) % 233280;
        return seed / 233280;
    };
    const pts: [number, number][][] = [];
    for (let r = 0; r <= rows; r++) {
        const row: [number, number][] = [];
        for (let c = 0; c <= cols; c++) {
            const edgeX = c === 0 || c === cols;
            const edgeY = r === 0 || r === rows;
            const x = c * W / cols + (edgeX ? 0 : (rnd() - 0.5) * W / cols * 0.8);
            const y = r * H / rows + (edgeY ? 0 : (rnd() - 0.5) * H / rows * 0.8);
            row.push([Math.round(x), Math.round(y)]);
        }
        pts.push(row);
    }
    const shade = () => {
        const v = Math.round(10 + rnd() * 44);
        return `rgb(${v},${v + 2},${Math.min(255, v + 6)})`;
    };
    const tris: Tri[] = [];
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            const a = pts[r][c], b = pts[r][c + 1], d = pts[r + 1][c], e = pts[r + 1][c + 1];
            const flip = rnd() > 0.5;
            const t1 = flip ? [a, b, e] : [a, b, d];
            const t2 = flip ? [a, e, d] : [b, e, d];
            tris.push({ points: t1.map((q) => q.join(',')).join(' '), fill: shade() });
            tris.push({ points: t2.map((q) => q.join(',')).join(' '), fill: shade() });
        }
    }
    return tris;
}

const TRIANGLES = buildTriangles();

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
            <svg className={styles.poly} aria-hidden="true" viewBox="0 0 1440 860" preserveAspectRatio="xMidYMid slice">
                {TRIANGLES.map((t, i) => (
                    <polygon key={i} points={t.points} fill={t.fill} stroke={t.fill} strokeWidth="1" />
                ))}
            </svg>
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
