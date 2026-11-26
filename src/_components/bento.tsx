import { useEffect, useState } from 'react';
import { EMAIL, GITHUB_URL, GITHUB_USER, LINKEDIN_URL, RESUME_URL, USF_URL, focus, stack } from '../data';
import { useSfTime } from '../lib/useSfTime';
import { timeAgo, useGithub } from '../lib/useGithub';
import FootholdMark from './footholdMark';
import FootholdPhone from './footholdPhone';
import styles from './styles/bento.module.css';

const icon = { width: 16, height: 16, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const, 'aria-hidden': true };

const socials = [
    { label: 'GitHub', sub: '@matiasagado', href: GITHUB_URL, arrow: '↗', external: true, svg: <svg {...icon}><path d="M9 19c-4 1.5-4-2-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" /></svg> },
    { label: 'LinkedIn', sub: 'in/matiasagado', href: LINKEDIN_URL, arrow: '↗', external: true, svg: <svg {...icon}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg> },
    { label: 'Email', sub: EMAIL, href: `mailto:${EMAIL}`, arrow: '↗', external: false, svg: <svg {...icon}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg> },
    { label: 'Resume', sub: 'PDF · 1 page', href: RESUME_URL, arrow: '↓', external: false, download: true, svg: <svg {...icon}><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" /><path d="M14 3v6h6M9 13h6M9 17h6" /></svg> },
];

function Profile() {
    const sfTime = useSfTime();
    return (
        <article className={`card ${styles.r2} ${styles.profile}`}>
            <div>
                <p className={styles.name}>Matias Agado</p>
                <p className={styles.meta}>Software Engineer · San Francisco · <time>{sfTime}</time></p>
            </div>
            <span className={styles.status}><span aria-hidden="true" />Open to full-time roles</span>
            <nav className={styles.socials} aria-label="Find me online">
                {socials.map((s) => (
                    <a
                        key={s.label}
                        href={s.href}
                        {...(s.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        {...(s.download ? { download: 'Resume-Matias-Agado.pdf' } : {})}
                    >
                        <span className={styles.ico}>{s.svg}</span>
                        <span className={styles.socialText}><strong>{s.label}</strong><small>{s.sub}</small></span>
                        <span className={styles.arr} aria-hidden="true">{s.arrow}</span>
                    </a>
                ))}
            </nav>
        </article>
    );
}

function HowIBuild() {
    const [active, setActive] = useState('security');
    const current = focus.find((f) => f.id === active) ?? focus[0];
    return (
        <article className={`card ${styles.c2} ${styles.pad}`}>
            <div className={styles.rowBetween}>
                <span className="cap">How I build</span>
                <span className="cap">Full-stack</span>
            </div>
            <div className={styles.split}>
                <div>
                    <p className={styles.howTitle}>From the schema</p>
                    <p className={`ser ${styles.howSer}`}>to the interface.</p>
                    <p className={styles.small}>I own features end to end: the data model, the API, the UI and the infrastructure that keeps it running.</p>
                </div>
                <div className={styles.focus}>
                    <div role="tablist" aria-label="Focus" className={styles.chips}>
                        {focus.map((f) => (
                            <button
                                key={f.id}
                                type="button"
                                role="tab"
                                id={`focus-tab-${f.id}`}
                                aria-selected={f.id === active}
                                aria-controls="focus-panel"
                                className={`${styles.chip} ${f.id === active ? styles.chipOn : ''}`}
                                onClick={() => setActive(f.id)}
                            >
                                {f.label}
                            </button>
                        ))}
                    </div>
                    <div role="tabpanel" id="focus-panel" aria-labelledby={`focus-tab-${current.id}`}>
                        <p className={styles.focusTitle}>{current.title}</p>
                        <p className={styles.small}>{current.text}</p>
                    </div>
                </div>
            </div>
        </article>
    );
}

function Stack() {
    const items = [...stack, ...stack];
    return (
        <article className={`card ${styles.c2} ${styles.pad} ${styles.stack}`}>
            <span className={styles.stackTag}><span aria-hidden="true" />STACK</span>
            <p className={`disp ${styles.stackTitle}`}>WHAT I SHIP <span className="gp">WITH.</span></p>
            <p className="visually-hidden">{stack.join(', ')}</p>
            <div className={styles.marquee} aria-hidden="true">
                <div className={styles.marqueeRow}>
                    {items.map((s, i) => <span key={`${s}-${i}`}>{s}</span>)}
                </div>
            </div>
        </article>
    );
}

function Usf() {
    return (
        <a href={USF_URL} target="_blank" rel="noopener noreferrer" className={`card ${styles.usf}`}>
            <span className={styles.crest}><img src="/usfca-logo.png" alt="" width={72} height={72} /></span>
            <p className={styles.usfName}>UNIVERSITY OF SAN FRANCISCO</p>
            <p className={styles.small}>B.S. Computer Science</p>
        </a>
    );
}

function Quote() {
    return (
        <article className={`card ${styles.quote}`}>
            <div>
                <span className={styles.quoteMark} aria-hidden="true">&ldquo;</span>
                <p>
                    Good infrastructure is <span className={styles.ghost}>invisible.</span> It just works,{' '}
                    <span className="gp">every time.</span>
                </p>
            </div>
        </article>
    );
}

function GetInTouch() {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        if (!copied) return;
        const id = window.setTimeout(() => setCopied(false), 1600);
        return () => window.clearTimeout(id);
    }, [copied]);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setCopied(true);
        } catch {
            window.location.href = `mailto:${EMAIL}`;
        }
    };

    return (
        <article className={`card ${styles.touch}`}>
            <span className="cap">Get in touch</span>
            <p className={`disp ${styles.touchTitle}`}>HAVE SOMETHING TO BUILD?</p>
            <button type="button" className={styles.copy} onClick={copy}>
                {EMAIL}
                <span>{copied ? 'COPIED ✓' : 'COPY'}</span>
            </button>
            <span className="visually-hidden" aria-live="polite">{copied ? 'Email copied to clipboard' : ''}</span>
        </article>
    );
}

function Github() {
    const gh = useGithub(GITHUB_USER);
    const stat = (value: string | number, label: string) => (
        <div className={styles.stat}><b>{value}</b><small>{label}</small></div>
    );
    return (
        <article className={`card ${styles.c2} ${styles.pad} ${styles.github}`}>
            <span className="cap">GitHub activity</span>
            <p className={styles.ghTitle}>Code <span className="ser">history.</span></p>

            {gh.status === 'ok' ? (
                <>
                    <div className={styles.stats}>
                        {stat(gh.data.publicRepos, 'Repositories')}
                        {stat(gh.data.pushedThisYear, `Pushed in ${new Date().getFullYear()}`)}
                        {stat(gh.data.sinceYear, 'On GitHub since')}
                    </div>
                    <ul className={styles.repos}>
                        {gh.data.recent.map((r) => (
                            <li key={r.name}>
                                <a href={r.html_url} target="_blank" rel="noopener noreferrer">
                                    <span className="mono">{r.name}</span>
                                    <span className={styles.repoLang}>{r.language ?? ''}</span>
                                    <span className={styles.repoTime}>{timeAgo(r.pushed_at)}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </>
            ) : gh.status === 'loading' ? (
                <div className={styles.stats} aria-busy="true">
                    {[0, 1, 2].map((i) => <div key={i} className={`${styles.stat} ${styles.skeleton}`} />)}
                </div>
            ) : (
                <p className={styles.small}>GitHub isn&apos;t responding right now.</p>
            )}

            <div className={styles.ghFoot}>
                <span>Live from GitHub</span>
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={styles.handle}>@MATIASAGADO ↗</a>
            </div>
        </article>
    );
}

function FoundedFoothold() {
    return (
        <a href="#work" className={`card ${styles.r2} ${styles.foothold}`}>
            <p className="cap">Currently building</p>
            <p className={styles.fhTitle}>
                Founder of{' '}
                <span className={styles.fhWord}><FootholdMark className={styles.fhMark} /><span className={styles.fhGrad}>Foothold</span></span>
            </p>
            <p className={styles.fhTag}>Discover. Connect. <span className={styles.fhGrad}>Get involved.</span></p>
            <p className={styles.small}>A multi-tenant platform for campus clubs and events.</p>
            <div className={styles.fhStage}>
                <div className={styles.fhLaptop}>
                    <div className={styles.bar}><i /><i /><i /></div>
                    <img src="/foothold-landing.png" alt="Foothold landing page on desktop" loading="lazy" />
                </div>
                <FootholdPhone
                    screen="home"
                    width={158}
                    label="Foothold mobile app in dark mode: the student's home screen with the Club Fair coming up and friends going"
                    className={styles.fhPhone}
                />
            </div>
        </a>
    );
}

function Resume() {
    return (
        <a href={RESUME_URL} download="Resume-Matias-Agado.pdf" className={`card ${styles.c2} ${styles.resume}`}>
            <div>
                <p className="cap">Resume · PDF · 1 page</p>
                <p className={`disp ${styles.resumeTitle}`}>EVERYTHING, <span className="gp">ON ONE PAGE.</span></p>
            </div>
            <span className={styles.down} aria-hidden="true">↓</span>
        </a>
    );
}

export default function Bento() {
    return (
        <section className="w" aria-label="About me at a glance" style={{ paddingBottom: 140 }}>
            <div className={styles.bento}>
                <Profile />
                <HowIBuild />
                <Stack />
                <Usf />
                <Quote />
                <GetInTouch />
                <Github />
                <FoundedFoothold />
                <Resume />
            </div>
        </section>
    );
}
