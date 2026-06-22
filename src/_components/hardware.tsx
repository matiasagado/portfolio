import styles from './styles/hardware.module.css';
import { FiCpu, FiDatabase, FiMonitor, FiServer } from 'react-icons/fi';
import { MdMemory } from 'react-icons/md';

const specs = [
    { icon: <FiCpu />, value: 'Intel Core i9-11900H', label: 'CPU' },
    { icon: <MdMemory />, value: '16GB DDR4 3200MHz', label: 'RAM' },
    { icon: <FiDatabase />, value: '512GB NVMe', label: 'STORAGE' },
    { icon: <FiMonitor />, value: 'RTX 3050', label: 'GPU' },
];

const technologies = ['Linux', 'Docker', 'Tailscale', 'Pi-Hole', 'NPM', 'Prometheus', 'Grafana', 'Loki', 'Ollama'];

const description = 'A self-hosted home server built for two things: keeping my data off the cloud and running AI models locally. Full observability stack so I know exactly what every service is doing at all times. Built as a stepping stone toward a multi-node server rack.';

export default function Hardware() {
    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <div className={styles.eyebrow}>
                    <span className={styles.line} />
                    <span className={styles.eyebrowText}>INFRASTRUCTURE</span>
                </div>
                <h2 className={styles.heading}>HARDWARE</h2>
                <p className={styles.subheading}>
                    Self-hosted server infrastructure purpose-built for<br />
                    AI model training and evaluation workloads
                </p>
            </div>

            <div className={styles.grid}>
                {/* Left: main card */}
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <span className={styles.iconBox}><FiServer /></span>
                        <div>
                            <h3 className={styles.cardTitle}>PRIVATE SERVER</h3>
                            <span className={styles.cardMeta}>Custom Build · 2024</span>
                        </div>
                    </div>
                    <p className={styles.cardDesc}>
                       {description}
                    </p>
                    <div className={styles.tags}>
                        {technologies.map((tag) => (
                            <span key={tag} className={styles.tag}>{tag}</span>
                        ))}
                    </div>
                </div>

                {/* Right: spec grid + status */}
                <div className={styles.right}>
                    <div className={styles.specGrid}>
                        {specs.map((spec) => (
                            <div key={spec.label} className={styles.specCard}>
                                <span className={styles.specIcon}>{spec.icon}</span>
                                <p className={styles.specValue}>{spec.value}</p>
                                <span className={styles.specLabel}>{spec.label}</span>
                            </div>
                        ))}
                    </div>
                    <a className={styles.statusCard} href="https://github.com/matiasagado/homelab.git" target="_blank">
                        <span className={styles.statusDot} />
                        <div>
                            <p className={styles.statusTitle}>GitHub Respository</p>
                            <p className={styles.statusSub}>matiasagado/homelab</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
}