import { useState } from 'react';
import { jobs } from '../data';
import styles from './styles/experience.module.css';

export default function Experience() {
    const [open, setOpen] = useState(0);

    return (
        <section id="experience" className={`w ${styles.two}`}>
            <div>
                <h2 className="eh">Experience</h2>
                <p className={styles.hint}>Select a role to see what I did there.</p>
            </div>
            <div className={styles.list}>
                {jobs.map((job, i) => {
                    const hasDetail = job.bullets.length > 0;
                    const isOpen = hasDetail && open === i;
                    const panelId = `job-${i}`;
                    const head = (
                        <>
                            <span className={styles.ini} aria-hidden="true">{job.initials}</span>
                            <span className={styles.who}>
                                <span className={styles.role}>{job.role}</span>
                                <span className={styles.company}>{job.company} · {job.place}</span>
                            </span>
                            <span className={`mono ${styles.dates}`}>{job.dates}</span>
                            <span className={styles.chev} aria-hidden="true">{hasDetail ? (isOpen ? '⌃' : '⌄') : ''}</span>
                        </>
                    );
                    return (
                        <div key={`${job.company}-${job.dates}`} className={styles.item}>
                            <h3 className={styles.h3}>
                                {hasDetail ? (
                                    <button
                                        type="button"
                                        className={styles.head}
                                        aria-expanded={isOpen}
                                        aria-controls={panelId}
                                        onClick={() => setOpen(isOpen ? -1 : i)}
                                    >
                                        {head}
                                    </button>
                                ) : (
                                    <div className={styles.head}>{head}</div>
                                )}
                            </h3>
                            {hasDetail && (
                                <div id={panelId} hidden={!isOpen} className={styles.panel}>
                                    <ul className={styles.bullets}>
                                        {job.bullets.map((b) => <li key={b}>{b}</li>)}
                                    </ul>
                                    <ul className={styles.skills} aria-label="Skills">
                                        {job.skills.map((s) => <li key={s}>{s}</li>)}
                                    </ul>
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
