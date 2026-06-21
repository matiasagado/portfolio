import { FiFolder, FiGithub, FiExternalLink } from 'react-icons/fi';
import styles from './Software.module.css';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export default function Software() {
  const projects: Project[] = [
    {
      title: 'Foothold',
      description:
        'A full-stack SaaS platform helping students discover campus organizations, events, and communities. Built the complete frontend and system architecture, from user discovery interviews and a formal PRD through to a documented architecture map covering user flows, database models, and backend workflows.',
      technologies: [
        'TypeScript',
        'Next.js',
        'PostgreSQL',
        'Supabase',
        'Prisma',
        'Auth',
        'Docker',
      ],
      githubUrl: '#', // TODO: add repo link
      liveUrl: '#', // TODO: add live site link
    },
    {
      title: 'AI Powered Log Analysis System',
      description:
        'A real-time log analysis system that processes thousands of security logs and automatically flags threats. Includes a dashboard for visualizing system health and activity, plus model performance analysis to support data-driven decisions.',
      technologies: [
        'Python',
        'Go',
        'SQL',
        'Redis',
        'ClickHouse',
        'WebSockets',
        'OpenAI API',
        'Docker',
      ],
      githubUrl: '#', // TODO: add repo link
      liveUrl: '#', // TODO: add live site link
    },
    {
      title: 'RISC-V Instruction Set Emulator',
      description:
        'A functional CPU emulator modeling a 32-bit processor with a full register file, simulating hardware behavior entirely in software. Includes a custom instruction decoder that parses RISC-V machine code into opcodes, registers, and immediates, plus a memory address mapping system mirroring hardware-level memory management.',
      technologies: ['C', 'RISC-V Assembly', 'Computer Architecture', 'Systems Programming'],
      githubUrl: '#', // TODO: add repo link
      liveUrl: '#', // TODO: add live site link
    },
    {
      title: 'Inverted Index Search Engine',
      description:
        'A multithreaded inverted index search engine capable of processing and indexing 10,000+ documents. Improved query response time and throughput through algorithmic optimizations and careful thread management.',
      technologies: ['Java', 'HTML5', 'Multi-threading'],
      githubUrl: '#', // TODO: add repo link
      liveUrl: '#', // TODO: add live site link
    },
  ];

  return (
    <section id="software-projects" className={styles.section}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowDash} />
          Projects
        </p>
        <h2 className={styles.title}>Software</h2>
        <p className={styles.subtitle}>
          Tools and infrastructure I have built for ML model training,
          <br />
          monitoring, and evaluation
        </p>
      </div>

      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.title} className={styles.card}>
            <div className={styles.cardHeader}>
              <span className={styles.folderIcon}>
                <FiFolder />
              </span>
              <div className={styles.linkIcons}>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    className={styles.linkIcon}
                  >
                    <FiGithub />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live site`}
                    className={styles.linkIcon}
                  >
                    <FiExternalLink />
                  </a>
                )}
              </div>
            </div>

            <h3 className={styles.cardTitle}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>

            <ul className={styles.badgeList}>
              {project.technologies.map((tech) => (
                <li key={tech} className={styles.badge}>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}