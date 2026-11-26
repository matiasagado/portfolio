import { GITHUB_URL, LINKEDIN_URL, RESUME_URL } from '../data';
import styles from './styles/about.module.css';

const facts = [
    { label: 'Education', value: 'B.S. Computer Science', sub: 'University of San Francisco' },
    { label: 'Now', value: 'LLM Evaluation', sub: 'Handshake AI' },
    { label: 'Building', value: 'Foothold', sub: 'Campus clubs & events' },
];

export default function About() {
    return (
        <section id="about" className={`w ${styles.two}`}>
            <div>
                <p className="cap">About</p>
                <h2 className="eh" style={{ marginTop: 14 }}>A bit about me</h2>
            </div>
            <div className={styles.body}>
                <p className={styles.lead}>
                    I&apos;m a software engineer in San Francisco who builds full-stack products end to end, from the data
                    model and API to the interface and the infrastructure underneath.
                </p>
                <p className={styles.text}>
                    Right now I&apos;m building Foothold, a multi-tenant platform for campus clubs and events, and evaluating
                    language models at Handshake AI. Before engineering I spent years in sales and client-facing roles,
                    which is where I learned to understand what people need before I build it.
                </p>
                <div className={styles.facts}>
                    {facts.map((f) => (
                        <div key={f.label}>
                            <small>{f.label}</small>
                            <span>{f.value}</span>
                            <em>{f.sub}</em>
                        </div>
                    ))}
                </div>
                <div className={styles.links}>
                    <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
                    <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn <span aria-hidden="true">↗</span></a>
                    <a href={RESUME_URL} download="Resume-Matias-Agado.pdf">Resume <span aria-hidden="true">↓</span></a>
                </div>
            </div>
        </section>
    );
}
