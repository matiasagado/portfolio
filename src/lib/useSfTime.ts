import { useEffect, useState } from 'react';

const formatter = new Intl.DateTimeFormat('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    timeZone: 'America/Los_Angeles',
});

/** Current time in San Francisco, refreshed every 30 seconds. */
export function useSfTime(): string {
    const [now, setNow] = useState(() => new Date());

    useEffect(() => {
        const id = window.setInterval(() => setNow(new Date()), 30_000);
        return () => window.clearInterval(id);
    }, []);

    return formatter.format(now);
}
