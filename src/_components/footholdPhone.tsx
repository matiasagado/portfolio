import type { ReactNode } from 'react';
import styles from './styles/footholdPhone.module.css';

/**
 * Foothold's dark mobile app, drawn at iPhone size (390×844) and scaled down to `width`.
 * Decorative: the wrapper carries the accessible description.
 */

const APP_W = 390;
const APP_H = 844;

const Check = ({ size = 15 }: { size?: number }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5" /></svg>
);

function StatusBar() {
    return (
        <>
            <div className={styles.island} />
            <div className={styles.sb}>
                <span>9:41</span>
                <span className={styles.sbR}>
                    <svg width="18" height="12" viewBox="0 0 18 12" fill="#fff"><rect x="0" y="8" width="3" height="4" rx="1" /><rect x="5" y="5.5" width="3" height="6.5" rx="1" /><rect x="10" y="3" width="3" height="9" rx="1" /><rect x="15" y="0" width="3" height="12" rx="1" /></svg>
                    <span className={styles.bat}><i /></span>
                </span>
            </div>
        </>
    );
}

type TabId = 'home' | 'events';

function TabBar({ active }: { active: TabId }) {
    const tab = (id: string, label: string, icon: ReactNode, badge?: string) => (
        <span className={`${styles.tab} ${id === active ? styles.tabOn : ''}`}>
            {icon}
            {label}
            {badge && <span className={styles.dot}>{badge}</span>}
        </span>
    );
    const s = { width: 24, height: 24, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
    return (
        <>
            <div className={styles.tabs}>
                {tab('home', 'Home', <svg {...s}><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8" /><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /></svg>)}
                {tab('events', 'Events', <svg {...s}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>)}
                {tab('groups', 'Groups', <svg {...s}><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /></svg>)}
                {tab('people', 'People', <svg {...s}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></svg>)}
                {tab('messages', 'Messages', <svg {...s}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>, '14')}
            </div>
            <span className={styles.homeInd} />
        </>
    );
}

function HomeScreen() {
    return (
        <>
            <div className={`${styles.pad} ${styles.rowBetween}`} style={{ paddingTop: 6 }}>
                <span className={styles.muted} style={{ font: "500 14px 'Geist', sans-serif" }}>Wednesday, Nov 25</span>
                <span style={{ display: 'flex', gap: 10 }}>
                    <span className={styles.iconBtn}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" /><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" /></svg>
                        <span className={styles.dot}>9</span>
                    </span>
                    <span className={styles.me}>MA</span>
                </span>
            </div>
            <h1 className={`${styles.ttl} ${styles.pad}`} style={{ marginTop: 6 }}>Good evening,<br />Matias</h1>
            <div className={`${styles.pad} ${styles.rowBetween}`} style={{ marginTop: 22, alignItems: 'baseline' }}>
                <h2 className={styles.sec}>Up next</h2>
                <span style={{ color: '#B9B4FF', font: "600 14px 'Geist', sans-serif" }}>Today</span>
            </div>
            <div className={styles.pad} style={{ marginTop: 12 }}>
                <div className={styles.card}>
                    <div className={styles.cover} style={{ height: 170, backgroundImage: 'url(/club-fair.jpg)' }}>
                        <span className={styles.chip} style={{ position: 'absolute', left: 12, top: 12, background: 'rgba(11,10,31,.78)', color: '#fff' }}>Up next for you</span>
                    </div>
                    <div style={{ padding: '16px 16px 18px' }}>
                        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                            <span className={styles.chip}>In 2 days</span>
                            <span className={styles.muted} style={{ fontSize: 13.5 }}>1:00 – 3:00 PM</span>
                        </div>
                        <p className={styles.eventTitle} style={{ marginTop: 10 }}>Club Fair</p>
                        <p className={styles.muted} style={{ marginTop: 4, fontSize: 13.5 }}>Campus Activities Board · Welch Field</p>
                        <div className={styles.hr} style={{ margin: '14px 0' }} />
                        <div className={styles.rowBetween}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                                <span style={{ display: 'flex' }}>
                                    <span className={styles.av} style={{ background: '#3D6BFF' }}>ZT</span>
                                    <span className={styles.av} style={{ background: '#8B5CF6' }}>KK</span>
                                    <span className={styles.av} style={{ background: '#0EA5E9' }}>AJ</span>
                                    <span className={styles.av} style={{ background: '#26234A' }}>+14</span>
                                </span>
                                <span style={{ fontSize: 12.5, color: '#E6E6F0' }}>16 you know</span>
                            </div>
                            <span className={styles.going}><Check />Going</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.pad} style={{ marginTop: 22 }}><h2 className={styles.sec}>Later this week</h2></div>
            <div className={styles.pad} style={{ marginTop: 12 }}>
                <div className={styles.card} style={{ display: 'flex', gap: 14, alignItems: 'center', padding: 12 }}>
                    <span className={styles.dateTile}><span>NOV</span><b>26</b></span>
                    <span style={{ flex: 1, minWidth: 0 }}>
                        <span style={{ display: 'block', font: "700 15.5px 'Geist', sans-serif", color: '#fff' }}>Sunset Pickup Games</span>
                        <span className={styles.muted} style={{ display: 'block', fontSize: 12.5, marginTop: 2 }}>Spikeball Club · 4:00 PM</span>
                    </span>
                    <span className={styles.rsvp}>RSVP</span>
                </div>
            </div>
            <TabBar active="home" />
        </>
    );
}

function EventsScreen() {
    const days = [['WED', '25', true, true], ['THU', '26', false, true], ['FRI', '27', false, true], ['SAT', '28', false, true], ['SUN', '29', false, false], ['MON', '30', false, true]] as const;
    return (
        <>
            <div className={`${styles.pad} ${styles.rowBetween}`} style={{ paddingTop: 10, alignItems: 'flex-end' }}>
                <h1 className={styles.ttl}>Events</h1>
                <span style={{ display: 'flex', gap: 10 }}>
                    <span className={styles.iconBtn}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></svg></span>
                    <span className={styles.iconBtn}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18M7 12h10M10 18h4" /></svg></span>
                </span>
            </div>
            <div className={styles.pad} style={{ marginTop: 14 }}>
                <div className={styles.seg}>
                    <span className={styles.segOn}>For you</span>
                    <span>Going · 3</span>
                    <span>Saved</span>
                </div>
            </div>
            <div className={`${styles.pad} ${styles.days}`} style={{ marginTop: 14 }}>
                {days.map(([d, n, on, dot]) => (
                    <span key={d} className={on ? styles.dayOn : styles.day}>
                        <span className={styles.dayName}>{d}</span>
                        <span className={styles.dayNum}>{n}</span>
                        <i style={{ background: on ? '#fff' : dot ? '#8B84FF' : 'transparent' }} />
                    </span>
                ))}
            </div>
            <div className={styles.pad} style={{ marginTop: 16 }}>
                <div className={styles.card}>
                    <div className={styles.fireside}>
                        <span className={styles.rowBetween}>
                            <span className={styles.chip} style={{ background: 'rgba(11,10,31,.7)', color: '#fff' }}>Tonight · 6:30 PM</span>
                            <span className={styles.clubTile}>EC</span>
                        </span>
                        <span className={styles.eventTitle} style={{ fontSize: 22, lineHeight: 1.1 }}>Founder Fireside: Zero to Seed</span>
                    </div>
                    <div style={{ padding: '13px 16px 15px' }}>
                        <p className={styles.muted} style={{ fontSize: 13 }}>Entrepreneurship Club · The Undercaf</p>
                        <div className={styles.rowBetween} style={{ marginTop: 12 }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: 9 }}>
                                <span style={{ display: 'flex' }}>
                                    <span className={styles.av} style={{ background: '#10B981' }}>LN</span>
                                    <span className={styles.av} style={{ background: '#8B5CF6' }}>KS</span>
                                    <span className={styles.av} style={{ background: '#0EA5E9' }}>LC</span>
                                </span>
                                <span style={{ fontSize: 12.5, color: '#E6E6F0' }}>41 going · <span style={{ color: '#4ADE80' }}>9 you know</span></span>
                            </span>
                            <span className={styles.going} style={{ height: 32, padding: '0 12px', fontSize: 13 }}><Check size={14} />Going</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.pad} ${styles.rowBetween}`} style={{ marginTop: 18, alignItems: 'baseline' }}>
                <h2 className={styles.sec} style={{ fontSize: 17 }}>Tomorrow</h2>
                <span className={styles.muted} style={{ fontSize: 12.5 }}>Thu, Nov 26</span>
            </div>
            <div className={styles.pad} style={{ marginTop: 10 }}>
                <div className={styles.card} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '10px 12px' }}>
                    <span className={styles.timeTile}>4 PM</span>
                    <span style={{ flex: 1, minWidth: 0 }}>
                        <span style={{ display: 'block', font: "700 15px 'Geist', sans-serif", color: '#fff' }}>Sunset Pickup Games</span>
                        <span className={styles.muted} style={{ display: 'block', fontSize: 12, marginTop: 1 }}>Spikeball Club · 18 going</span>
                    </span>
                    <span className={styles.rsvp} style={{ height: 32, padding: '0 14px' }}>RSVP</span>
                </div>
            </div>
            <div className={`${styles.pad} ${styles.rowBetween}`} style={{ marginTop: 16, alignItems: 'baseline' }}>
                <h2 className={styles.sec} style={{ fontSize: 17 }}>Friday</h2>
                <span className={styles.muted} style={{ fontSize: 12.5 }}>Nov 27</span>
            </div>
            <div className={styles.pad} style={{ marginTop: 10 }}>
                <div className={styles.card} style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '10px 12px' }}>
                    <span className={styles.cover} style={{ width: 50, height: 50, borderRadius: 13, flex: 'none', backgroundImage: 'url(/club-fair.jpg)' }} />
                    <span style={{ flex: 1, minWidth: 0 }}>
                        <span style={{ display: 'block', font: "700 15px 'Geist', sans-serif", color: '#fff' }}>Club Fair</span>
                        <span className={styles.muted} style={{ display: 'block', fontSize: 12, marginTop: 1 }}>1:00 PM · Welch Field · 120 going</span>
                    </span>
                    <span className={styles.okTile}><Check /></span>
                </div>
            </div>
            <TabBar active="events" />
        </>
    );
}

type Props = {
    screen: TabId;
    /** Rendered width of the screen in px; height follows the iPhone ratio. */
    width: number;
    label: string;
    className?: string;
    style?: React.CSSProperties;
};

export default function FootholdPhone({ screen, width, label, className = '', style }: Props) {
    const scale = width / APP_W;
    return (
        <div className={`${styles.frame} ${className}`} style={style}>
            <div className={styles.fit} role="img" aria-label={label} style={{ width, height: Math.round(APP_H * scale) }}>
                <div className={styles.app} aria-hidden="true" style={{ transform: `scale(${scale})` }}>
                    <StatusBar />
                    {screen === 'home' ? <HomeScreen /> : <EventsScreen />}
                </div>
            </div>
        </div>
    );
}
