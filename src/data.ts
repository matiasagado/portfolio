export const EMAIL = 'matiasagado@gmail.com';
export const GITHUB_USER = 'matiasagado';
export const GITHUB_URL = 'https://github.com/matiasagado';
export const LINKEDIN_URL = 'https://www.linkedin.com/in/matiasagado/';
export const RESUME_URL = '/Resume-Matias-Agado.pdf';
export const USF_URL = 'https://www.usfca.edu/arts-sciences/programs/undergraduate/computer-science/program-overview';

export const HERO_LINE = 'Forward Deployed Engineer. LLM Evaluator. Builder.';

export const stack = ['TypeScript', 'React', 'Next.js', 'PostgreSQL', 'Supabase', 'Prisma', 'Python', 'Go', 'Java', 'Docker', 'Git', 'Linux'];

export type Focus = { id: string; label: string; title: string; text: string };

export const focus: Focus[] = [
    { id: 'product', label: 'Product', title: 'Product first', text: 'Start with the person who has the problem, write the spec, then build the smallest thing that helps.' },
    { id: 'systems', label: 'Systems', title: 'Full-stack systems', text: 'Interface, API, database and infrastructure designed together, so they hold up as usage grows.' },
    { id: 'security', label: 'Security', title: 'Secure by default', text: 'Row-level security keeps every school’s data its own, and tests prove it on every change.' },
    { id: 'ai', label: 'AI', title: 'AI, evaluated', text: 'I test language models at Handshake AI and use vector search in production with pgvector.' },
];

export type Job = {
    role: string;
    company: string;
    place: string;
    dates: string;
    initials: string;
    skills: string[];
    bullets: string[];
};

export const jobs: Job[] = [
    {
        role: 'Invited Capstone Sponsor',
        company: 'USF Computer Science',
        place: 'San Francisco, CA',
        dates: 'Fall 2026',
        initials: 'CS',
        skills: ['Product pitching', 'Technical scoping', 'Documentation'],
        bullets: [
            'Selected to pitch Foothold as a senior capstone project for USF’s Fall 2026 cohort.',
            'Presented the product, the architecture and a build-ready roadmap to graduating CS students.',
        ],
    },
    {
        role: 'AI Model Evaluation Fellow',
        company: 'Handshake',
        place: 'Part-time · Remote',
        dates: 'Jan 2026 – Present',
        initials: 'HS',
        skills: ['AI model evaluation', 'Analytical thinking', 'Prompt design'],
        bullets: [
            'Work with AI researchers to test LLM outputs and give structured feedback so model responses are more accurate and useful.',
            'Write targeted prompts to find where models break down in specific domains, and surface findings teams can act on.',
            'Evaluate responses for accuracy, consistency and practical usefulness across a range of tasks and topics.',
        ],
    },
    {
        role: 'Security Guard',
        company: 'Securitas USA Pacific Region',
        place: 'San Francisco Bay Area · On-site',
        dates: 'Oct 2026 – Present',
        initials: 'SE',
        skills: ['On-site security'],
        bullets: [],
    },
    {
        role: 'Server',
        company: 'Jeff Duerson Staffing, LLC',
        place: 'Part-time · San Francisco Bay Area',
        dates: 'May 2024 – Oct 2026',
        initials: 'JD',
        skills: ['Leadership', 'Upselling', 'Event service'],
        bullets: [
            'Delivered white-glove service at events with 100+ guests where every detail mattered.',
            'Built rapport quickly with clients and kept service running smoothly under pressure.',
        ],
    },
    {
        role: 'Lifeguard',
        company: 'University of San Francisco',
        place: 'Part-time · San Francisco, CA',
        dates: 'Jan 2024 – Mar 2026',
        initials: 'USF',
        skills: ['Leadership', 'Risk assessment', 'Emergency response'],
        bullets: [
            'Maintained safety oversight for university aquatic facilities, with rapid emergency response when required.',
            'Completed structured incident documentation and communicated safety procedures to staff and patrons.',
        ],
    },
];
