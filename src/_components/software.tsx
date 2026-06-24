import { useState } from 'react';
import styles from './styles/software.module.css';
import { FiBarChart2, FiLayers, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const featured = [
    {
        image: "/groot.png",
        name: 'GROOT',
        description: 'Built a real-time log analysis system that automatically flagged security threats across thousands of logs, with a dashboard for visualizing system health.',
        tags: ['PYTHON', 'GO'],
        repo: 'https://github.com/matiasagado/Groot.git',
    },
    {
        image: "/foothold.png",
        name: 'FOOTHOLD',
        description: 'Built a full-stack SaaS platform for student campus discovery. Designed the frontend, architected the backend, and drove the full product lifecycle.',
        tags: ['TYPESCRIPT', 'NEXT.JS', 'SUPABASE'],
        repo: 'https://github.com/matiasagado/foothold-web.git',
    },
    {
        image: "/polaris.png",
        name: 'POLARIS',
        description: 'Built a multithreaded inverted index search engine capable of indexing 10,000+ documents, with algorithmic optimizations to improve query throughput.',
        tags: ['JAVA', 'JAVA SERVLETS'],
        repo: 'https://github.com/matiasagado/Polaris.git',
    },
];

const projects = [
    {
        number: '01',
        icon: <FiLayers />,
        name: 'RISC-V CPU Emulator',
        description: 'Built a 32-bit RISC-V CPU emulator in software, implementing a full register file, instruction decoder (opcodes, registers, immediates), and hardware-style memory address mapping.',
        tags: ['C', 'RISC-V Assembly'],
        repo: 'https://github.com/matiasagado/foothold-web.git',
    },
];

export default function Software() {
    const [active, setActive] = useState(0);

    const prev = () => setActive((i) => (i - 1 + featured.length) % featured.length);
    const next = () => setActive((i) => (i + 1) % featured.length);

    const current = featured[active];

    return (
        <section className={styles.section} id="software">
            <div className={styles.header}>
                <div className={styles.eyebrow}>
                    <span className={styles.line} />
                    <span className={styles.eyebrowText}>PROJECTS</span>
                </div>
                <h2 className={styles.heading}>SOFTWARE</h2>
                <p className={styles.subheading}>
                    Tools and infrastructure I have built for ML model training,<br />
                    monitoring, and evaluation
                </p>
            </div>

            {/* CAROUSEL */}
            <a href={current.repo} target="_blank" className={styles.carousel}>
                <img src={current.image} alt={current.name} className={styles.carouselImg} />
                <div className={styles.carouselOverlay} />
                <button
                    className={`${styles.arrow} ${styles.arrowLeft}`}
                    onClick={(e) => { e.preventDefault(); prev(); }}
                >
                    <FiChevronLeft />
                </button>
                <button
                    className={`${styles.arrow} ${styles.arrowRight}`}
                    onClick={(e) => { e.preventDefault(); next(); }}
                >
                    <FiChevronRight />
                </button>
                <div className={styles.carouselContent}>
                    <h3 className={styles.carouselName}>{current.name}</h3>
                    <p className={styles.carouselDesc}>{current.description}</p>
                    <div className={styles.carouselTags}>
                        {current.tags.map((tag, i) => (
                            <span key={tag}>
                                {tag}{i < current.tags.length - 1 && (
                                    <span className={styles.carouselDivider}> / </span>
                                )}
                            </span>
                        ))}
                    </div>
                </div>
                <div className={styles.dots}>
                    {featured.map((_, i) => (
                        <span key={i} className={`${styles.dot} ${i === active ? styles.dotActive : ''}`} />
                    ))}
                </div>
            </a>

            {/* GRID */}
            <div className={styles.grid}>
                {projects.map((project) => (
                    <a key={project.number} href={project.repo} target='_blank' className={styles.card}>
                        <h3 className={styles.projectName}>{project.name}</h3>
                        <p className={styles.projectDesc}>{project.description}</p>
                        <div className={styles.tags}>
                            {project.tags.map((tag) => (
                                <span key={tag} className={styles.tag}>{tag}</span>
                            ))}
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}