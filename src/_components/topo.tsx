import { useEffect, useRef } from 'react';
import styles from './styles/topo.module.css';

/*
 * Topographic background, ported from the design board: contour rings around three peaks,
 * wobbled with sine terms so they read as terrain. The map drifts slowly, and a teal copy of
 * the lines shows through a spotlight that follows the cursor.
 */

const PEAKS: [number, number, number][] = [[360, 260, 16], [1080, 430, 14], [760, 120, 8]];

function buildContours() {
    const paths: string[] = [];
    PEAKS.forEach(([cx, cy, rings], pi) => {
        for (let k = 1; k <= rings; k++) {
            const r = k * 34;
            let d = '';
            for (let a = 0; a <= 72; a++) {
                const t = (a / 72) * Math.PI * 2;
                const rr = r * (1 + 0.16 * Math.sin(3 * t + k * 0.45 + pi) + 0.07 * Math.sin(5 * t + k * 0.9) + 0.04 * Math.cos(7 * t + pi));
                d += (a ? 'L' : 'M') + (cx + rr * Math.cos(t)).toFixed(1) + ' ' + (cy + rr * 0.72 * Math.sin(t)).toFixed(1);
            }
            paths.push(d + 'Z');
        }
    });
    return paths;
}

const CONTOURS = buildContours();

function Lines({ className, stroke, width }: { className: string; stroke: string; width: number }) {
    return (
        <svg className={className} viewBox="0 0 1400 700" preserveAspectRatio="xMidYMid slice">
            {CONTOURS.map((d, i) => (
                <path key={i} d={d} fill="none" stroke={stroke} strokeWidth={width} />
            ))}
        </svg>
    );
}

export default function Topo() {
    const ref = useRef<HTMLDivElement>(null);

    // Follow the cursor anywhere in the parent section; CSS variables move the spotlight without re-rendering.
    useEffect(() => {
        const el = ref.current;
        const section = el?.parentElement;
        if (!el || !section) return;
        const onMove = (e: PointerEvent) => {
            const r = el.getBoundingClientRect();
            el.style.setProperty('--x', `${e.clientX - r.left + 40}px`);
            el.style.setProperty('--y', `${e.clientY - r.top + 40}px`);
        };
        section.addEventListener('pointermove', onMove);
        return () => section.removeEventListener('pointermove', onMove);
    }, []);

    return (
        <div ref={ref} className={styles.wrap} aria-hidden="true">
            <Lines className={styles.lines} stroke="#1d2322" width={1} />
            <Lines className={`${styles.lines} ${styles.lit}`} stroke="#2dd4bf" width={1.4} />
            <div className={styles.glow} />
            <div className={styles.fade} />
        </div>
    );
}
