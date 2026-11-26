import { useEffect, useState } from 'react';

export type Repo = {
    name: string;
    pushed_at: string;
    fork: boolean;
};

export type GithubStats = {
    publicRepos: number;
    sinceYear: number;
    pushedThisYear: number;
};

export type GithubState =
    | { status: 'loading' }
    | { status: 'error' }
    | { status: 'ok'; data: GithubStats };

/** Public profile stats from GitHub's REST API (no token needed). */
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
