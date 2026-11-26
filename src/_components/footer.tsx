import { useId } from 'react';
import { EMAIL, GITHUB_URL, LINKEDIN_URL, RESUME_URL } from '../data';
import styles from './styles/footer.module.css';

export default function Footer() {
    const gradId = useId();
    const year = new Date().getFullYear();

    return (
        <footer id="contact" className={styles.footer}>
            <div className={styles.top}>
                <div className={styles.cta}>
                    <h2 className={styles.title}>Let&apos;s work together</h2>
                    <a href={`mailto:${EMAIL}`} className={styles.mailbar}>
                        <span className={styles.mail}>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
                            {EMAIL}
                        </span>
                        <span className={styles.btn}>Email me <span aria-hidden="true">→</span></span>
                    </a>
                </div>
                <nav className={styles.cols} aria-label="Footer">
                    <div><h4>Work</h4><a href="#work">Foothold</a><a href="#work">Groot</a><a href="#work">Polaris</a></div>
                    <div><h4>About</h4><a href="#about">About me</a><a href="#experience">Experience</a><a href={RESUME_URL} download="Resume-Matias-Agado.pdf">Resume</a></div>
                    <div><h4>Connect</h4><a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a><a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a><a href={`mailto:${EMAIL}`}>Email</a></div>
                </nav>
            </div>

            {/* The name stretches edge to edge at any width. */}
            <div className={styles.wordmark} aria-hidden="true">
                <svg viewBox="0 0 1000 158" preserveAspectRatio="none">
                    <defs>
                        <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="0">
                            <stop offset="0" stopColor="#22d3ee" />
                            <stop offset=".55" stopColor="#2dd4bf" />
                            <stop offset="1" stopColor="#34d399" />
                        </linearGradient>
                    </defs>
                    <text x="0" y="126" textLength="1000" lengthAdjust="spacingAndGlyphs" fill={`url(#${gradId})`}>Matias Agado</text>
                </svg>
            </div>

            <div className={styles.bottom}>
                <span>© {year} Matias Agado. All rights reserved.</span>
                <span>Built with React &amp; TypeScript</span>
            </div>
        </footer>
    );
}
