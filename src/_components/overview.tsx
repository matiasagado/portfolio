import styles from './styles/overview.module.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const technologies = ['HTML', 'CSS', 'TypeScript', 'Python', 'React', 'Next.js', 'PostgreSql', 'Docker', 'Git'];

export default function Bento() {
    return (
        <section className={styles.section}>
            <div className={styles.grid}>

                {/* Stack */}
                <div className={`${styles.tile} ${styles.stackTile}`}>
                    <span className={styles.badge}><span className={styles.dot} />STACK</span>
                    <h2 className={styles.stackHeading}>TOOLS I REACH FOR, FIRST.</h2>
                    <div className={styles.marqueeWrapper}>
                    <div className={styles.marqueeTrack}>
                        {[...technologies, ...technologies].map((t, i) => (
                            <span key={i} className={styles.pill}>{t}</span>
                        ))}
                    </div>
                </div>
                </div>

                {/* LinkedIn */}
                <a href="https://linkedin.com/in/matiasagado" target="_blank" className={`${styles.tile} ${styles.linkedinTile}`}>
                    <FaLinkedin className={styles.socialIcon} />
                    <span className={styles.socialLabel}>LinkedIn</span>
                </a>

                {/* Education */}
                <a href="https://www.usfca.edu/arts-sciences/programs/undergraduate/computer-science/program-overview" target="_blank" className={`${styles.tile} ${styles.educationTile}`}>
                    <div className={styles.crest}>
                        <img src="/usfca-logo.png" alt="USF" className={styles.crestImg} />
                    </div>
                    <p className={styles.schoolName}>UNIVERSITY OF SAN FRANCISCO</p>
                    <p className={styles.schoolDetail}>BS Computer Science</p>
                </a>

                {/* Quote */}
                <div className={`${styles.tile} ${styles.quoteTile}`}>
                    <p className={styles.quoteText}>Good infrastructure is invisible — it just works, every time.</p>
                </div>

                {/* Contact */}
                <a href="mailto:matiasagado@gmail.com" className={`${styles.tile} ${styles.contactTile}`}>
                    <span className={styles.contactEyebrow}>GET IN TOUCH</span>
                    <p className={styles.contactHeading}>GOT A PROJECT <em>IN MIND?</em></p>
                    <span className={styles.contactEmail}>matiasagado@gmail.com</span>
                </a>

                {/* Resume */}
                <a href="/Resume-Matias-Agado.pdf" download="Resume-Matias-Agado.pdf" className={`${styles.tile} ${styles.resumeTile}`}>
                    <div>
                        <span className={styles.resumeEyebrow}>RESUME · PDF · 1 PAGE</span>
                        <p className={styles.resumeHeading}>THE LONG VERSION, <em>PRINTABLE.</em></p>
                    </div>
                    <span className={styles.arrowBtn}>↗</span>
                </a>

                {/* GitHub */}
                <a href="https://github.com/matiasagado" target="_blank" className={`${styles.tile} ${styles.githubTile}`}>
                    <FaGithub className={styles.socialIconGit} />
                    <span className={styles.socialLabel}>GitHub</span>
                </a>

            </div>
        </section>
    );
}