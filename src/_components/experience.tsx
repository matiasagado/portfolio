import { useState } from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import styles from './styles/experience.module.css';

interface Job {
  company: string;
  role: string;
  period: string;
  summary: string;
  contributions: string[];
  technologies: string[];
}

const jobs: Job[] = [
  {
    company: 'Handshake AI',
    role: 'AI Model Engineer',
    period: '2023 — Present',
    summary:
      'Building and evaluating machine learning systems end-to-end. Leading model training infrastructure, designing evaluation frameworks, and managing private GPU server deployments for production ML workloads.',
    contributions: [
      'Built AI Log Analysis — a real-time production monitoring and diagnostic tool for model behavior',
      'Designed Foothold — a reproducible training infrastructure layer with experiment tracking and portable environments',
      'Provisioned and configured a dedicated GPU server cluster for private model training and evaluation',
      'Implemented evaluation frameworks to measure model performance, drift, and reliability in production',
    ],
    technologies: ['Python', 'PyTorch', 'Docker', 'Kubernetes', 'CUDA', 'Linux'],
  },
];

const education = {
  school: 'University of San Francisco',
  degree: 'BS Computer Science',
  period: '2019 — 2023',
  bullets: [
    'Coursework in machine learning, distributed systems, and computer architecture',
    'Senior thesis on evaluation methodologies for neural network performance',
    'Active in campus tech and maker communities',
  ],
};

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = jobs[activeIndex];

  return (
    <section id="experience" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowDash} />
          Career
        </p>
        <h2 className={styles.title}>Experience</h2>
      </div>

      <div className={styles.layout}>
        <div className={styles.sidebar}>
          <div className={styles.tabList}>
            {jobs.map((job, index) => (
              <button
                key={job.company}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`${styles.tab} ${index === activeIndex ? styles.tabActive : ''}`}
              >
                <p className={styles.tabCompany}>{job.company}</p>
                <p className={styles.tabRole}>{job.role}</p>
                <p className={styles.tabPeriod}>{job.period}</p>
              </button>
            ))}
          </div>

          <div className={styles.educationCard}>
            <div className={styles.educationHeader}>
              <span className={styles.educationIcon}>
                <FaGraduationCap />
              </span>
              <div>
                <p className={styles.educationSchool}>{education.school}</p>
                <p className={styles.educationDegree}>{education.degree}</p>
              </div>
            </div>
            <p className={styles.educationPeriod}>{education.period}</p>
            <ul className={styles.educationBullets}>
              {education.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.detailCard}>
          <div className={styles.detailHeader}>
            <div>
              <h3 className={styles.detailCompany}>{active.company}</h3>
              <p className={styles.detailRole}>{active.role}</p>
            </div>
            <span className={styles.periodPill}>{active.period}</span>
          </div>

          <p className={styles.summary}>{active.summary}</p>

          <p className={styles.contributionsLabel}>Key Contributions</p>
          <ul className={styles.contributionsList}>
            {active.contributions.map((item, index) => (
              <li key={item} className={styles.contributionItem}>
                <span className={styles.contributionNumber}>
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <ul className={styles.badgeList}>
            {active.technologies.map((tech) => (
              <li key={tech} className={styles.badge}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}