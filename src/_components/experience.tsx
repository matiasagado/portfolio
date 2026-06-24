import { useEffect, useRef, useState } from 'react';
import styles from './styles/experience.module.css';

const experience = [
    {
        company: 'Handshake AI',
        role: 'AI Model Evaluation Fellow',
        type: 'Part-time',
        dates: 'JAN 2026 — PRESENT',
        location: 'San Francisco Bay Area · Remote',
        bullets: [
            'Work with AI researchers to test LLM outputs and give structured feedback so model responses are more accurate and useful.',
            'Write targeted prompts to find where models break down in specific domains and surface findings teams can understand and act on.',
            'Evaluate AI responses for accuracy, consistency, and practical usefulness across a range of tasks and topics.',
        ],
    },
    {
        company: 'McCalls Catering & Events',
        role: 'Server',
        type: 'Part-time',
        dates: 'MAY 2024 — PRESENT',
        location: 'San Francisco Bay Area · On-site',
        bullets: [
            'Delivered white-glove service at events with 100+ guests where every detail mattered with zero margin for error.',
            'Built rapport quickly with clients and kept service running smoothly through high-pressure environments.',
            'Collaborated with event operation teams in high-pressure environments to keep delivering outstanding service.',
        ],
    },
    {
        company: 'Univeristy of San Francisco',
        role: 'Lifeguard',
        type: 'Part-time',
        dates: 'JAN 2024 — MAR 2026',
        location: 'San Francisco, California · On-site',
        bullets: [
            'Maintained safety oversight for university aquatic facilities, executing rapid emergency response protocols when required.',
            'Completed structured incident documentation and communicated safety procedures to staff and patrons consistently.',
        ],
    },
    {
        company: 'Tataki Sushi & Sake Bar',
        role: 'Server',
        type: 'Part-time',
        dates: 'AUG 2022 — FEB 2024',
        location: 'San Francisco, California · On-site',
        bullets: [
            'Averaged $1,500+ in nightly revenue by anticipating what guests wanted and making recommendations accordingly.',
            'Processed 80+ financial transactions nightly with complete accuracy while keeping consistent service in a high-volume environment.',
            'Managed 15–20 concurrent guest relationships, resolving issues on the spot while not slowing down service.',
        ],
    },
    {
        company: 'Flipstars REI Group',
        role: 'Sales Development Representative',
        type: 'Self-employed',
        dates: 'FEB 2020 — DEC 2021',
        location: 'San Bernardino, California · Hybrid',
        bullets: [
            'Executed 150+ outbound cold calls daily to identify and qualify distressed property owners, building a pipeline of 200+ leads tracked end-to-end in a self-built CRM.',
            'Managed full-cycle outbound prospecting across cold call, door-to-door, email, and SMS channels to generate qualified leads.',
            'Designed and maintained CRM infrastructure to track lead status, follow-up cadence, and acquisition progress across an acquisition pipeline.',
        ],
    },
];

export default function Experience() {
    const [active, setActive] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (!sectionRef.current) return;
            const { top, height } = sectionRef.current.getBoundingClientRect();
            const scrollable = height - window.innerHeight;
            const scrolled = -top;
            const progress = Math.max(0, Math.min(1, scrolled / scrollable));
            const index = Math.min(
                experience.length - 1,
                Math.floor(progress * experience.length)
            );
            setActive(index);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const job = experience[active];

    return (
        <div ref={sectionRef} className={styles.scrollWrapper}>
            <section className={styles.section} id="experience">
                <div className={styles.sticky}>
                    <div className={styles.header}>
                        <div className={styles.eyebrow}>
                            <span className={styles.line} />
                            <span className={styles.eyebrowText}>CAREER</span>
                        </div>
                        <h2 className={styles.heading}>EXPERIENCE</h2>
                        <p className={styles.subheading}>
                            Computer Science graduate with a background in revenue-driven and client-facing roles.
                            From cold-calling distressed property owners to managing high-volume service environments.
                        </p>
                    </div>
                    <div className={styles.divider} />

                    <div className={styles.layout}>
                        <ul className={styles.sidebar}>
                            {experience.map((e, i) => (
                                <li
                                    key={e.company}
                                    className={`${styles.sideItem} ${i === active ? styles.sideItemActive : ''}`}
                                    onClick={() => setActive(i)}
                                >
                                    {e.company}
                                </li>
                            ))}
                        </ul>

                        <div className={styles.detail}>
                            <h3 className={styles.roleHeading}>
                                {job.role} <span className={styles.at}>@</span>{' '}
                                <span className={styles.company}>{job.company}</span>
                            </h3>
                            <span className={styles.dates}>{job.dates}</span>
                            <ul className={styles.bullets}>
                                {job.bullets.map((b, i) => (
                                    <li key={i} className={styles.bullet}>{b}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className={styles.divider} />
                </div>
            </section>
        </div>
    );
}