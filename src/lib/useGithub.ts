import { useEffect, useState } from 'react';

export type Repo = {
    name: string;
    html_url: string;
    language: string | null;
    pushed_at: string;
    fork: boolean;
};

export type GithubStats = {
    publicRepos: number;
    sinceYear: number;
    pushedThisYear: number;
    recent: Repo[];
};

export type GithubState =
    | { status: 'loading' }
    | { status: 'error' }
    | { status: 'ok'; data: GithubStats };

/** Public profile stats and recently pushed repos from GitHub's REST API (no token needed). */
export function useGithub(user: string): GithubState {
    const [state, setState] = useState<GithubState>({ status: 'loading' });

    useEffect(() => {
        const controller = new AbortController();
        const get = <T,>(path: string) =>
            fetch(`https://api.github.com${path}`, { signal: controller.signal }).then((res) => {
                if (!res.ok) throw new Error(String(res.status));
                return res.json() as Promise<T>;
            });

        Promise.all([
            get<{ public_repos: number; created_at: string }>(`/users/${user}`),
            get<Repo[]>(`/users/${user}/repos?sort=pushed&per_page=30`),
        ])
            .then(([profile, repos]) => {
                const year = new Date().getFullYear();
                const own = repos.filter((r) => !r.fork && r.name.toLowerCase() !== user.toLowerCase());
                setState({
                    status: 'ok',
                    data: {
                        publicRepos: profile.public_repos,
                        sinceYear: new Date(profile.created_at).getFullYear(),
                        pushedThisYear: own.filter((r) => new Date(r.pushed_at).getFullYear() === year).length,
                        recent: own.slice(0, 4),
                    },
                });
            })
            .catch((err: unknown) => {
                if (err instanceof DOMException && err.name === 'AbortError') return;
                setState({ status: 'error' });
            });

        return () => controller.abort();
    }, [user]);

    return state;
}

const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

export function timeAgo(iso: string): string {
    const diff = (new Date(iso).getTime() - Date.now()) / 1000;
    const units: [Intl.RelativeTimeFormatUnit, number][] = [
        ['year', 31_536_000],
        ['month', 2_592_000],
        ['week', 604_800],
        ['day', 86_400],
        ['hour', 3_600],
        ['minute', 60],
    ];
    for (const [unit, secs] of units) {
        if (Math.abs(diff) >= secs) return rtf.format(Math.round(diff / secs), unit);
    }
    return 'just now';
}
