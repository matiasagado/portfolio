import { useId } from 'react';

/** Foothold's app icon: the mountain on the blue→violet tile. */
export default function FootholdMark({ className }: { className?: string }) {
    const id = useId();
    return (
        <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
            <defs>
                <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0" stopColor="#2E8BFF" />
                    <stop offset=".55" stopColor="#3D6BFF" />
                    <stop offset="1" stopColor="#6F4FFF" />
                </linearGradient>
            </defs>
            <rect width="64" height="64" rx="16" fill={`url(#${id})`} />
            <path d="M12 47 27 19l8.5 15 6-9L53 47z" fill="#fff" transform="translate(32 34) scale(.84) translate(-32.5 -33)" />
        </svg>
    );
}
