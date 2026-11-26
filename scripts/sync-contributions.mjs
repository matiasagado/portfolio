// Saves the last 30 weeks of GitHub contribution levels (0-4) to src/contributions.json.
// Reads the public contributions page, so no token is needed. If GitHub can't be reached,
// the existing file is kept and the build carries on.
import { writeFileSync } from 'node:fs';

const USER = 'matiasagado';
const WEEKS = 30;
const OUT = new URL('../src/contributions.json', import.meta.url);

try {
    const res = await fetch(`https://github.com/users/${USER}/contributions`);
    if (!res.ok) throw new Error(`GitHub responded ${res.status}`);
    const html = await res.text();
    const days = [...html.matchAll(/data-date="(\d{4}-\d{2}-\d{2})"[^>]*?data-level="(\d)"/g)]
        .map(([, date, level]) => ({ date, level: Number(level) }))
        .sort((a, b) => a.date.localeCompare(b.date));
    if (days.length < 7 * WEEKS) throw new Error(`only found ${days.length} days`);

    // Start on the Sunday that begins the window, so each column is one week.
    const last = new Date(days.at(-1).date + 'T00:00:00Z');
    const start = new Date(last);
    start.setUTCDate(start.getUTCDate() - last.getUTCDay() - 7 * (WEEKS - 1));
    const from = start.toISOString().slice(0, 10);
    const levels = days.filter((d) => d.date >= from).map((d) => d.level);

    writeFileSync(OUT, JSON.stringify({ user: USER, from, levels }) + '\n');
    console.log(`contributions: ${levels.length} days from ${from}`);
} catch (err) {
    console.warn(`contributions: kept the saved file (${err.message})`);
}
