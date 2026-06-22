import styles from './styles/software.module.css';
import { FiBarChart2 } from 'react-icons/fi';
import { FiLayers } from 'react-icons/fi';

const projects = [
    {
        number: '01',
        icon: <FiBarChart2 />,
        name: 'AI LOG ANALYSIS',
        description: 'A production monitoring and diagnostic tool for analyzing model behavior in real time. Detects anomalies in inference logs, tracks performance degradation across model versions, and surfaces actionable insights through an intuitive dashboard. Built with Python and PyTorch, it integrates directly into existing ML pipelines with minimal configuration overhead.',
        tags: ['Python', 'PyTorch', 'Monitoring', 'Dashboards'],
        repo: 'https://github.com/matiasagado/Groot.git',
    },
    {
        number: '02',
        icon: <FiLayers />,
        name: 'FOOTHOLD',
        description: 'A foundational infrastructure layer that makes model training reproducible and portable. Provides versioned experiment tracking, automated hyperparameter search, and environment snapshotting so you can move training workloads across different hardware setups without rebuilding from scratch. Designed with Docker-based containerization for consistent execution everywhere.',
        tags: ['Python', 'Docker', 'Experiment Tracking', 'Infrastructure'],
        repo: 'https://github.com/matiasagado/foothold-web.git',
    },
];

export default function Software() {
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

            <div className={styles.grid}>
                {projects.map((project) => (
                    <a key={project.number} href={project.repo} target='_blank' className={styles.card}>
                        <div className={styles.cardTop}>
                            <span className={styles.number}>{project.number}</span>
                            <span className={styles.iconBox}>{project.icon}</span>
                        </div>
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