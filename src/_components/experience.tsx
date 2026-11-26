import { useEffect, useRef, useState } from 'react';
import { jobs } from '../data';
import styles from './styles/experience.module.css';

/**
 * Sticky-scroll experience: the role list scrolls on the right while a card on the left
 * stays pinned and shows whichever role is crossing the middle of the screen.
 */
export default function Experience() {
    const [active, setActive] = useState(0);
    const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

    useEffect(() => {
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActive(Number((e.target as HTMLElement).dataset.index));
                });
            },
            { rootMargin: '-45% 0px -45% 0px' },
        );
        itemRefs.current.forEach((el) => el && io.observe(el));
        return () => io.disconnect();
    }, []);

    const job = jobs[active];

    return (
        <section id="experience" className={`w ${styles.layout}`}>
            <div className={styles.left}>
                <h2 className="eh">Experience</h2>
                <div className={styles.card} aria-live="polite">
                    <div className={styles.cardHead}>
                        <span className={styles.ini} aria-hidden="true">{job.initials}</span>
                        <span className={styles.who}>
                            <strong>{job.company}</strong>
                            <small>{job.place}</small>
                        </span>
                        <span className={styles.pill}>{job.dates}</span>
                    </div>
                    <div className={styles.inner}>
                        <p className={styles.role}>{job.role}</p>
                        {job.bullets.length > 0 ? (
                            <ul className={styles.bullets}>
                                {job.bullets.map((b) => <li key={b}>{b}</li>)}
                            </ul>
                        ) : (
                            <p className={styles.soon}>Details coming soon.</p>
                        )}
                    </div>
                    <ul className={styles.skills} aria-label="Skills">
                        {job.skills.map((s) => <li key={s}>{s}</li>)}
                    </ul>
                </div>
            </div>

            <ol className={styles.list}>
                {jobs.map((j, i) => (
                    <li
                        key={`${j.company}-${j.dates}`}
                        ref={(el) => { itemRefs.current[i] = el; }}
                        data-index={i}
                        className={i === active ? styles.on : undefined}
                    >
                        <button type="button" className={styles.item} onClick={() => setActive(i)} aria-current={i === active}>
                            <span className={`mono ${styles.date}`}>{j.dates}</span>
                            <span className={styles.itemRole}>{j.role}</span>
                            <span className={styles.company}>{j.company} · {j.place}</span>
                        </button>
                        {j.bullets.length > 0 && (
                            <ul className={styles.inline}>
                                {j.bullets.map((b) => <li key={b}>{b}</li>)}
                            </ul>
                        )}
                    </li>
                ))}
            </ol>
        </section>
    );
}
