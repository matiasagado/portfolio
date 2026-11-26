import styles from './styles/about.module.css';

export default function About() {
    return (
        <section id="about" className="w" style={{ paddingBottom: 150 }}>
            <div className={styles.panel}>
                <div className={styles.blob} aria-hidden="true" />
                <div className={styles.inner}>
                    <div>
                        <p className={styles.kicker}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 4-6 8-6s8 2 8 6" /></svg>
                            About me
                        </p>
                        <h2 className={styles.title}>From problem to production.</h2>
                    </div>
                    <div className={styles.text}>
                        <p className={styles.lead}>
                            I&apos;m Matias, an engineer in San Francisco. I sit with the people who have the problem, find
                            what they actually need, and ship it.
                        </p>
                        <p>
                            I learned the customer side first. Years in sales and client-facing roles (cold-calling, running
                            a CRM I built myself, keeping 100-guest events on track) taught me to understand the person
                            behind the request.
                        </p>
                        <p>
                            At Santa Fe Post Acute, I worked with the dietary team to replace their paper schedules with
                            ShiftGrid, giving their manager back about 10 hours a week.
                        </p>
                        <p>
                            Now I&apos;m building Foothold, a platform that helps college students find their clubs and their
                            people. I also evaluate language models at Handshake AI, testing where they break so researchers
                            can fix them.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
