import { FiCpu, FiDatabase, FiHardDrive, FiMonitor } from 'react-icons/fi';
import styles from './styles/hardware.module.css';

export default function Hardware() {
    const technologies = [
        'Linux',
        'Tailscale',
        'Docker',
        'Pi-hole',
        'NPM',
        'Prometheus',
        'Grafana',
        'Loki',
        'Ollama',
      ];
    
      const stats = [
        {
          icon: <FiCpu />,
          value: 'i9-11900H',
          label: 'CPU',
        },
        {
          icon: <FiDatabase />,
          value: '32 GB',
          label: 'RAM (DDR4)',
        },
        {
          icon: <FiHardDrive />,
          value: '1.5 TB',
          label: 'NVMe SSD',
        },
        {
          icon: <FiMonitor />,
          value: 'Ubuntu 24.04',
          label: 'OS (LTS)',
        },
      ];

  return (
    <section id="hardware-projects" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowDash} />
          Infrastructure
        </p>
        <h2 className={styles.title}>Hardware</h2>
        <p className={styles.subtitle}>
          Self-hosted server infrastructure purpose-built for AI model training
          <br />
          and evaluation workflows.
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.mainCard}>
          <div className={styles.mainCardHeader}>
            <span className={styles.iconBadge}>
              <FiMonitor />
            </span>
            <div>
              <p className={styles.cardTitle}>Private Server</p>
              <p className={styles.cardMeta}>Dell XPS 15 9510 · April 2026</p>
            </div>
          </div>

          <p className={styles.description}>
            A five-layer self-hosted infrastructure platform — user services,
            secure access, container orchestration, full observability, and an
            AI intelligence layer for automated log analysis and anomaly
            detection.
          </p>

          <ul className={styles.badgeList}>
            {technologies.map((tech) => (
              <li key={tech} className={styles.badge}>
                {tech}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.sideColumn}>
          <div className={styles.statGrid}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.statCard}>
                <span className={styles.statIcon}>{stat.icon}</span>
                <p className={styles.statValue}>{stat.value}</p>
                <p className={styles.statLabel}>{stat.label}</p>
              </div>
            ))}
          </div>

          <div className={styles.statusCard}>
            <span className={styles.statusDot} />
            <div>
              <p className={styles.statusTitle}>Operational</p>
              <p className={styles.statusSubtitle}>
                All core services running
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}