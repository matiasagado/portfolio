import styles from './styles/overview.module.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Bento() {
    return (
        <section className={styles.section}>
            <div className={styles.grid}>

                {/* Stack */}
                <div className={`${styles.tile} ${styles.stackTile}`}>
                    <span className={styles.badge}><span className={styles.dot} />STACK</span>
                    <h2 className={styles.stackHeading}>TOOLS I REACH FOR, FIRST.</h2>
                    <div className={styles.pills}>
                        {['Python', 'PyTorch', 'Docker', 'Kubernetes', 'CUDA', 'Linux', 'Git', 'AWS'].map((t) => (
                            <span key={t} className={styles.pill}>{t}</span>
                        ))}
                    </div>
                </div>

                {/* LinkedIn */}
                <a href="https://linkedin.com/in/matiasagado" target="_blank" className={`${styles.tile} ${styles.linkedinTile}`}>
                    <FaLinkedin className={styles.socialIcon} />
                    <span className={styles.socialLabel}>LinkedIn</span>
                </a>

                {/* Education */}
                <div className={`${styles.tile} ${styles.educationTile}`}>
                    <div className={styles.crest}>
                        <img src="/usfca-logo.png" alt="USF" className={styles.crestImg} />
                    </div>
                    <p className={styles.schoolName}>UNIVERSITY OF SAN FRANCISCO</p>
                    <p className={styles.schoolDetail}>BS Computer Science</p>
                </div>

                {/* Quote */}
                <div className={`${styles.tile} ${styles.quoteTile}`}>
                    <p className={styles.quoteText}>"Good infrastructure is invisible — it just works, every time."</p>
                    <span className={styles.quoteAttr}>— Engineering Philosophy</span>
                </div>

                {/* Contact */}
                <a href="mailto:hello@matiasagado.com" className={`${styles.tile} ${styles.contactTile}`}>
                    <span className={styles.contactEyebrow}>GET IN TOUCH</span>
                    <p className={styles.contactHeading}>GOT A PROJECT <em>IN MIND?</em></p>
                    <span className={styles.contactEmail}>matiasagado@gmail.com</span>
                </a>

                {/* Resume */}
                <a href="/resume.pdf" target="_blank" className={`${styles.tile} ${styles.resumeTile}`}>
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