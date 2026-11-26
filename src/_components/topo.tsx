import { useEffect, useRef } from 'react';
import styles from './styles/topo.module.css';

/*
 * Topographic background, ported from the design board: contour rings around three peaks,
 * wobbled with sine terms so they read as terrain. The map drifts slowly, and a teal copy of
 * the lines shows through a spotlight that follows the cursor.
 */

const PEAKS: [number, number, number][] = [[360, 260, 16], [1080, 430, 14], [760, 120, 8]];
const SPEED = 0.25; // how fast the ripples travel along the lines (radians per second)

/** Ring paths at time t (seconds). The wobble terms travel around each ring, so the lines ripple like a snake. */
function buildContours(t: number) {
    const paths: string[] = [];
    PEAKS.forEach(([cx, cy, rings], pi) => {
        for (let k = 1; k <= rings; k++) {
            const r = k * 34;
            let d = '';
            for (let a = 0; a <= 72; a++) {
                const th = (a / 72) * Math.PI * 2;
                const rr = r * (
                    1 +
                    0.16 * Math.sin(3 * th + k * 0.45 + pi + t * SPEED) +
                    0.07 * Math.sin(5 * th + k * 0.9 - t * SPEED * 1.6) +
                    0.04 * Math.cos(7 * th + pi + t * SPEED * 2.3)
                );
                d += (a ? 'L' : 'M') + (cx + rr * Math.cos(th)).toFixed(1) + ' ' + (cy + rr * 0.72 * Math.sin(th)).toFixed(1);
            }
            paths.push(d + 'Z');
        }
    });
    return paths;
}

const CONTOURS = buildContours(0);
const FPS = 30;

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

        // Redraw every ring each frame so the lines themselves move.
        const paths = [...el.querySelectorAll('svg')].map((svg) => [...svg.querySelectorAll('path')]);
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let raf = 0, last = 0, visible = true;
        const start = performance.now();
        const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
        io.observe(el);
        const loop = (now: number) => {
            raf = requestAnimationFrame(loop);
            if (!visible || now - last < 1000 / FPS) return;
            last = now;
            const next = buildContours((now - start) / 1000);
            for (const layer of paths) layer.forEach((p, i) => p.setAttribute('d', next[i]));
        };
        if (!reduced) raf = requestAnimationFrame(loop);

        return () => {
            section.removeEventListener('pointermove', onMove);
            cancelAnimationFrame(raf);
            io.disconnect();
        };
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
