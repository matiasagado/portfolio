import styles from './styles/shiftGrid.module.css';

type Cell = { t: string; kind: 'am' | 'pm' | 'pto' | 'open' | 'off' };

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// Sample staff only: initials and roles, no real employee data.
const ROWS: [string, string, string][] = [
    ['AR', 'Cook', 'AAPP-OA'],
    ['JL', 'Cook', 'PPAAOOT'],
    ['MS', 'Aide', 'AOAAPPA'],
    ['DK', 'Aide', 'OPPTTAA'],
    ['RV', 'Dishwasher', 'PAOAAPO'],
    ['TN', 'Supervisor', 'AAAAAOO'],
];

const toCell = (ch: string): Cell => {
    switch (ch) {
        case 'A': return { t: '6a–2p', kind: 'am' };
        case 'P': return { t: '2p–10p', kind: 'pm' };
        case 'T': return { t: 'PTO', kind: 'pto' };
        case '-': return { t: 'Open', kind: 'open' };
        default: return { t: 'Off', kind: 'off' };
    }
};

/** Illustration of ShiftGrid's weekly schedule screen, drawn in HTML instead of a screenshot. */
export default function ShiftGridApp() {
    return (
        <div className={styles.app} role="img" aria-label="Illustration of the ShiftGrid weekly schedule screen">
            <div className={styles.top}>
                <span className={styles.brand}>
                    <span className={styles.logo} aria-hidden="true">SG</span>
                    <span><strong>ShiftGrid</strong><br /><small>Dietary Department</small></span>
                </span>
                <span className={styles.tabs}>
                    <b>Schedule</b>
                    <span>Availability</span>
                    <span>Time off</span>
                    <span>Swaps <i>2</i></span>
                </span>
            </div>
            <div className={styles.bar}>
                <strong>Week of Nov 30</strong>
                <span className={styles.muted}>‹ ›</span>
                <span className={styles.pub}>Published</span>
            </div>
            <div className={styles.grid}>
                <span />
                {DAYS.map((d) => <span key={d} className={styles.day}>{d}</span>)}
                {ROWS.map(([ini, role, pattern]) => (
                    <div key={ini} className={styles.row}>
                        <span className={styles.name}><b>{ini}</b><span>{role}</span></span>
                        {pattern.split('').map((ch, i) => {
                            const c = toCell(ch);
                            return <span key={i} className={`${styles.cell} ${styles[c.kind]}`}>{c.t}</span>;
                        })}
                    </div>
                ))}
            </div>
            <div className={styles.foot}>
                <span><i className={styles.keyAm} />AM</span>
                <span><i className={styles.keyPm} />PM</span>
                <span><i className={styles.keyPto} />Time off</span>
                <span className={styles.note}>Illustrative UI · sample names</span>
            </div>
        </div>
    );
}
