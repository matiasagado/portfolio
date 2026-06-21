import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import { FaGraduationCap } from 'react-icons/fa';
import styles from './styles/contact.module.css';

export default function Contact() {
  const socials = [
    {
      label: 'GitHub',
      href: '#', // TODO: add GitHub profile URL
      icon: <FiGithub />,
    },
    {
      label: 'LinkedIn',
      href: '#', // TODO: add LinkedIn profile URL
      icon: <FiLinkedin />,
    },
    {
      label: 'X (Twitter)',
      href: '#', // TODO: add X profile URL
      icon: <FaXTwitter />,
    },
    {
      label: 'Resume',
      href: '#', // TODO: add resume / CV link
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.intro}>
          <h2 className={styles.name}>
            Matias
            <br />
            Agado
          </h2>
          <p className={styles.bio}>
            AI Model Engineer at Handshake AI. Building reliable machine
            learning systems with a focus on model training, evaluation, and
            hardware-aware infrastructure.
          </p>
          <div className={styles.socials}>
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className={styles.socialIcon}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.infoBlock}>
            <p className={styles.infoLabel}>Location</p>
            <p className={styles.infoValue}>
              San Francisco, California
              <br />
              United States
            </p>
          </div>

          <div className={styles.infoBlock}>
            <p className={styles.infoLabel}>Email</p>
            <p className={styles.infoValue}>
              {/* TODO: replace with real contact email */}
              matias@example.com
            </p>
          </div>

          <div className={styles.infoBlock}>
            <p className={styles.infoLabel}>Current Focus</p>
            <p className={styles.infoValue}>AI Model Training &amp; Evaluation</p>
          </div>
        </div>

        <div className={styles.panel} aria-hidden="true">
          <div className={styles.panelCardSmall}>
            <p className={styles.panelLabel}>Models Trained</p>
            <div className={styles.panelBars}>
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className={styles.panelCardSmall}>
            <p className={styles.panelLabel}>
              Evaluate
              <br />
              Measure
              <br />
              Improve
            </p>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Matias Agado. All rights reserved.
        </p>
      </div>
    </footer>
  );
}