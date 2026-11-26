import { useEffect } from 'react';

/**
 * Keeps the address bar at the bare domain. In-page links like "#about" still scroll to their
 * section (the CSS smooth scroll and scroll-margin apply), but the hash never lands in the URL.
 * A URL with a hash, like matiasagado.com/#about, scrolls there and then drops the hash.
 */
export function useCleanUrl() {
    useEffect(() => {
        const clean = () => history.replaceState(null, '', location.pathname + location.search);

        const onClick = (e: MouseEvent) => {
            if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
            const link = (e.target as Element).closest?.('a[href^="#"]');
            if (!link) return;
            const id = link.getAttribute('href')!.slice(1);
            const target = id ? document.getElementById(id) : document.body;
            if (!target) return;
            e.preventDefault();
            target.scrollIntoView();
            clean();
        };

        // A hash in the address bar, on load or typed in later: scroll to it, then drop it.
        const onHash = () => {
            if (!location.hash) return;
            document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView();
            clean();
        };
        onHash();

        document.addEventListener('click', onClick);
        window.addEventListener('hashchange', onHash);
        return () => {
            document.removeEventListener('click', onClick);
            window.removeEventListener('hashchange', onHash);
        };
    }, []);
}
