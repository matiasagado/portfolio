import type { CSSProperties, ReactNode } from 'react';
import FootholdMark from './footholdMark';
import FootholdPhone from './footholdPhone';
import ShiftGridApp from './shiftGrid';
import styles from './styles/showcase.module.css';

type Tech = [name: string, color: string];

type Project = {
    key: string;
    title: ReactNode;
    tone: string;
    glow: string;
    description: string;
    points: string[];
    tech: Tech[];
    visual: ReactNode;
};

/** The browser frame (bezel and three dots) shared by every project visual. */
function Frame({ children, className = '' }: { children: ReactNode; className?: string }) {
    return (
        <div className={`${styles.laptop} ${className}`}>
            <div className={styles.bar}><i /><i /><i /></div>
            {children}
        </div>
    );
}

/** A screenshot in the browser frame. `fill` crops a wide screenshot to Groot's proportions so the frames match. */
function Laptop({ src, alt, fill = false }: { src: string; alt: string; fill?: boolean }) {
    return (
        <Frame className={fill ? styles.fill : ''}>
            <img src={src} alt={alt} loading="lazy" />
        </Frame>
    );
}

const projects: Project[] = [
    {
        key: 'foothold',
        title: <span className={styles.fhTitle}><FootholdMark className={styles.fhMark} />Foothold</span>,
        tone: '#6b7bff',
        glow: 'rgba(91,123,255,.38)',
        description: 'A multi-tenant platform that helps college students discover clubs and events, connect with people who share their interests, and get involved from week one. Each university is its own tenant, with isolation enforced in the database itself.',
        points: [
            'Row-level security on every table, scoped by a school claim stamped into each sign-in token',
            '22 pgTAP tests proving one school can’t read another’s data',
            'Passwordless sign-in: a school email places each student in their campus',
            'Club and people recommendations with pgvector; live dashboard updates over Realtime',
            'One docker compose command runs the full stack, seeded with three schools',
            'Engineering handbook, contributor workflow and CI/CD for a university capstone team',
        ],
        tech: [['Next.js', '#fff'], ['TypeScript', '#3178c6'], ['Supabase', '#3ecf8e'], ['PostgreSQL', '#336791'], ['pgvector', '#8a72ff'], ['Prisma', '#a78bfa'], ['Docker', '#2496ed']],
        visual: (
            <>
                <Laptop src="/foothold-web-dark.png" alt="The Foothold web app in dark mode: a student's home with the Club Fair coming up, friends going, and people to meet" />
                <FootholdPhone
                    screen="events"
                    width={148}
                    label="Foothold mobile app in dark mode: the Events tab with tonight's Founder Fireside, a date strip, and this week's club events"
                    className={styles.phone}
                />
            </>
        ),
    },
    {
        key: 'groot',
        title: 'Groot',
        tone: '#38bdf8',
        glow: 'rgba(56,189,248,.3)',
        description: 'A real-time log analysis system that automatically flags security threats across thousands of logs, with a dashboard for visualizing system health.',
        points: ['Real-time ingestion and analysis of log streams', 'Automatic flagging of suspicious activity', 'System health dashboard with search and filters'],
        tech: [['Python', '#ffd43b'], ['Go', '#00add8']],
        visual: <Laptop src="/groot.png" alt="Groot dashboard" />,
    },
    {
        key: 'shiftgrid',
        title: 'ShiftGrid',
        tone: '#a3e635',
        glow: 'rgba(163,230,53,.22)',
        description: 'A workforce scheduling platform for Santa Fe Post Acute’s Dietary Department, replacing a manual, paper-based scheduling process for about 20 employees.',
        points: [
            'Digitized scheduling, availability, time-off and shift-change workflows',
            'Saves the department manager an estimated 10 hours a week',
            'Employees see their schedules and requests in real time',
            'One central system instead of back-and-forth with ~20 employees',
        ],
        tech: [['TypeScript', '#3178c6'], ['React', '#61dafb'], ['Next.js', '#fff'], ['Prisma', '#a78bfa'], ['Supabase', '#3ecf8e'], ['Redis', '#dc382d']],
        visual: <Frame className={styles.framedApp}><ShiftGridApp /></Frame>,
    },
    {
        key: 'polaris',
        title: 'Polaris',
        tone: '#34d399',
        glow: 'rgba(52,211,153,.28)',
        description: 'A multithreaded inverted-index search engine capable of indexing 10,000+ documents, with algorithmic optimizations to improve query throughput.',
        points: ['Inverted index over 10,000+ documents', 'Multithreaded indexing and query handling', 'Web search interface served with Java Servlets'],
        tech: [['Java', '#f89820'], ['Servlets', '#d8d8dc']],
        visual: <Laptop src="/polaris.png" alt="Polaris search engine" fill />,
    },
];

export default function Showcase() {
    const total = String(projects.length).padStart(2, '0');
    return (
        <section id="work" className={styles.section}>
            <div className={styles.head}>
                <p className="cap">Building real products</p>
                <h2 className={`disp ${styles.title}`}>PROJECT <span className={`ser gp ${styles.titleSer}`}>SHOWCASE</span></h2>
                <p className={`cap ${styles.scroll}`}>Scroll to explore ↓</p>
            </div>

            {/* Each card pins at the same spot, and the next one slides up and covers it. */}
            <div className={`w ${styles.stack}`}>
                {projects.map((p, i) => {
                    const n = String(i + 1).padStart(2, '0');
                    return (
                        <article
                            key={p.key}
                            className={styles.card}
                            style={{ '--tone': p.tone, '--glow': p.glow, top: 90 } as CSSProperties}
                        >
                            <div className={styles.copy}>
                                <h3 className={styles.name}>{p.title} <small>{n} / {total}</small></h3>
                                <p className={styles.desc}>{p.description}</p>
                                <ul className={styles.points}>
                                    {p.points.map((pt) => <li key={pt}>{pt}</li>)}
                                </ul>
                                <ul className={styles.tech} aria-label="Built with">
                                    {p.tech.map(([name, color]) => (
                                        <li key={name}><i style={{ background: color }} aria-hidden="true" />{name}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.stage}>{p.visual}</div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
