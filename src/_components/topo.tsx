import { useEffect, useRef } from 'react';

/*
 * Topographic background: contour lines of a slowly shifting height field.
 * Each frame samples the field on a grid and traces the contours with marching squares,
 * so the lines bend and slide like a snake. A teal spotlight follows the cursor.
 */

const CELL = 14;          // grid spacing in CSS px
const LEVELS = 16;        // number of contour lines
const SPEED = 0.045;      // how fast the terrain shifts
const FPS = 30;
const SPOT = 280;         // spotlight radius

function height(x: number, y: number, t: number) {
    // a few layered waves at different angles and speeds read as terrain
    return (
        Math.sin(x * 0.0042 + t * 0.9) * Math.cos(y * 0.0051 - t * 0.6) +
        0.6 * Math.sin((x * 0.6 + y * 0.8) * 0.0063 - t * 0.7) +
        0.45 * Math.cos((x * 0.8 - y * 0.6) * 0.0091 + t * 1.1) +
        0.25 * Math.sin(x * 0.0143 + y * 0.0117 + t * 1.4)
    );
}

export default function Topo({ className }: { className?: string }) {
    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = ref.current;
        const ctx = canvas?.getContext('2d');
        if (!canvas || !ctx) return;

        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let w = 0, h = 0, cols = 0, rows = 0;
        let field = new Float32Array(0);
        let mouse: { x: number; y: number } | null = null;
        let visible = true;
        let raf = 0, last = 0;
        const start = performance.now();
        // shared path for one frame's segments
        let path = new Path2D();

        const resize = () => {
            const dpr = Math.min(window.devicePixelRatio || 1, 2);
            w = canvas.clientWidth;
            h = canvas.clientHeight;
            canvas.width = Math.round(w * dpr);
            canvas.height = Math.round(h * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
            cols = Math.ceil(w / CELL) + 1;
            rows = Math.ceil(h / CELL) + 1;
            field = new Float32Array(cols * rows);
        };

        const lerp = (a: number, b: number, lv: number) => (lv - a) / (b - a || 1e-6);

        const draw = (now: number) => {
            const t = ((now - start) / 1000) * SPEED * 10;
            for (let j = 0; j < rows; j++) {
                for (let i = 0; i < cols; i++) field[j * cols + i] = height(i * CELL, j * CELL, t);
            }

            path = new Path2D();
            for (let l = 0; l < LEVELS; l++) {
                const lv = -2.2 + (4.4 * (l + 0.5)) / LEVELS;
                for (let j = 0; j < rows - 1; j++) {
                    for (let i = 0; i < cols - 1; i++) {
                        const a = field[j * cols + i], b = field[j * cols + i + 1];
                        const c = field[(j + 1) * cols + i + 1], d = field[(j + 1) * cols + i];
                        const idx = (a > lv ? 8 : 0) | (b > lv ? 4 : 0) | (c > lv ? 2 : 0) | (d > lv ? 1 : 0);
                        if (idx === 0 || idx === 15) continue;
                        const x = i * CELL, y = j * CELL;
                        const top: [number, number] = [x + CELL * lerp(a, b, lv), y];
                        const right: [number, number] = [x + CELL, y + CELL * lerp(b, c, lv)];
                        const bottom: [number, number] = [x + CELL * lerp(d, c, lv), y + CELL];
                        const left: [number, number] = [x, y + CELL * lerp(a, d, lv)];
                        const seg = (p: [number, number], q: [number, number]) => {
                            path.moveTo(p[0], p[1]);
                            path.lineTo(q[0], q[1]);
                        };
                        switch (idx) {
                            case 1: case 14: seg(left, bottom); break;
                            case 2: case 13: seg(bottom, right); break;
                            case 3: case 12: seg(left, right); break;
                            case 4: case 11: seg(top, right); break;
                            case 6: case 9: seg(top, bottom); break;
                            case 7: case 8: seg(left, top); break;
                            case 5: seg(left, top); seg(bottom, right); break;
                            case 10: seg(top, right); seg(left, bottom); break;
                        }
                    }
                }
            }

            ctx.clearRect(0, 0, w, h);
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#232c2b';
            ctx.stroke(path);

            if (mouse) {
                const g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, SPOT);
                g.addColorStop(0, 'rgba(45, 212, 191, 0.85)');
                g.addColorStop(1, 'rgba(45, 212, 191, 0)');
                ctx.lineWidth = 1.3;
                ctx.strokeStyle = g;
                ctx.stroke(path);
            }
        };

        const loop = (now: number) => {
            raf = requestAnimationFrame(loop);
            if (!visible || now - last < 1000 / FPS) return;
            last = now;
            draw(now);
        };

        const section = canvas.parentElement ?? canvas;
        const onMove = (e: PointerEvent) => {
            const r = canvas.getBoundingClientRect();
            mouse = { x: e.clientX - r.left, y: e.clientY - r.top };
            if (reduced) draw(start);
        };
        const onLeave = () => {
            mouse = null;
            if (reduced) draw(start);
        };

        resize();
        const ro = new ResizeObserver(() => {
            resize();
            draw(reduced ? start : performance.now());
        });
        ro.observe(canvas);
        const io = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; });
        io.observe(canvas);
        section.addEventListener('pointermove', onMove);
        section.addEventListener('pointerleave', onLeave);

        if (reduced) draw(start);
        else raf = requestAnimationFrame(loop);

        return () => {
            cancelAnimationFrame(raf);
            ro.disconnect();
            io.disconnect();
            section.removeEventListener('pointermove', onMove);
            section.removeEventListener('pointerleave', onLeave);
        };
    }, []);

    return <canvas ref={ref} className={className} aria-hidden="true" />;
}
