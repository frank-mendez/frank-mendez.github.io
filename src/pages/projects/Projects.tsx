import { Separator } from '../../components/ui/separator'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { Code, Globe } from 'lucide-react'
import { GithubIcon } from '../../components/ui/brand-icons'
import { trackEvent } from '../../services/analyticsService'

type Project = {
    id: number
    title: string
    type: string
    featured: boolean
    problem: string
    solution: string
    impact: string
    techStack: string[]
    repoUrl?: string
    liveUrl?: string
    detailsUrl?: string
    tags: string[]
}

const projects: Project[] = [
    {
        id: 1,
        title: 'Grow With Me',
        type: 'Full Stack',
        featured: true,
        problem: 'Pregnancy trackers often reduce a deeply personal journey to clinical data and generic dashboards.',
        solution:
            'Built a web-first pregnancy journey with week-by-week visuals, voice memories, kick tracking, and a mood garden backed by Supabase.',
        impact: 'Shipped a live, test-covered product focused on emotional connection, daily engagement, and family memories.',
        techStack: ['Next.js 16', 'TypeScript', 'Supabase', 'Tailwind CSS', 'Framer Motion', 'Vitest'],
        detailsUrl: 'https://www.growwithme.baby',
        repoUrl: 'https://github.com/frank-mendez/grow-with-me',
        tags: ['Product', 'Next.js', 'Supabase'],
    },
    {
        id: 2,
        title: 'MFK Lending Corp',
        type: 'Full Stack',
        featured: true,
        problem:
            'A Filipino co-op lending business needed to replace fragmented spreadsheets with one dependable operating system.',
        solution:
            'Built loan schedules, e-signed contracts, automated email and SMS reminders, partner funds, reports, and bank reconciliation.',
        impact: 'Centralized the complete lending workflow while automating repetitive borrower and partner operations.',
        techStack: ['Next.js 15', 'TypeScript', 'Supabase', 'TanStack Query', 'Zustand', 'Sentry'],
        detailsUrl: 'https://mfklending.vercel.app',
        repoUrl: 'https://github.com/frank-mendez/mfklending',
        tags: ['Fintech', 'Production', 'Supabase'],
    },
    {
        id: 3,
        title: 'PulseChat',
        type: 'Full Stack',
        featured: true,
        problem:
            'Typical chat demos hide the hard parts: authentication, shared contracts, persistence, reconnects, and scaling boundaries.',
        solution:
            'Architected a typed monorepo with React, Fastify, raw WebSockets, shared Zod schemas, secure sessions, and repository-backed persistence.',
        impact: 'Created a production-inspired foundation that can evolve from local in-memory testing to PostgreSQL and distributed messaging.',
        techStack: ['React', 'Fastify', 'WebSockets', 'PostgreSQL', 'Drizzle', 'Turborepo'],
        repoUrl: 'https://github.com/frank-mendez/pulse-chat-',
        tags: ['WebSockets', 'Monorepo', 'Architecture'],
    },
    {
        id: 4,
        title: 'Food Delivery Observability',
        type: 'Full Stack',
        featured: false,
        problem:
            'Production-style delivery platform with customer, restaurant, and rider flows plus metrics, logs, traces, and containerized infrastructure.',
        solution: '',
        impact: '',
        techStack: ['Next.js', 'NestJS', 'PostgreSQL', 'Redis', 'Docker', 'Grafana'],
        repoUrl: 'https://github.com/frank-mendez/food-delivery-observability',
        tags: ['Observability', 'DevOps', 'Full Stack'],
    },
    {
        id: 5,
        title: 'Car Systems Explorer',
        type: 'Frontend',
        featured: false,
        problem:
            'Interactive learning workspace for exploring modern vehicle systems through SVG hotspots, animated flows, filters, quizzes, and glossary content.',
        solution: '',
        impact: '',
        techStack: ['Next.js 15', 'TypeScript', 'Tailwind CSS 4', 'Framer Motion', 'SVG'],
        repoUrl: 'https://github.com/frank-mendez/interactive-car-systems',
        tags: ['Education', 'Interactive', 'SVG'],
    },
    {
        id: 6,
        title: 'Next.js Blog CMS',
        type: 'Full Stack',
        featured: false,
        problem:
            'Full-stack publishing platform with Supabase authentication, role-based access, rich editing, draft workflows, AI writing assistance, and a headless API.',
        solution: '',
        impact: '',
        techStack: ['Next.js', 'Supabase', 'TipTap', 'OpenAI', 'Tailwind CSS', 'Vitest'],
        detailsUrl: 'https://blog.frankmendez.site/',
        repoUrl: 'https://github.com/frank-mendez/nextjs-blog-cms',
        tags: ['CMS', 'AI', 'Supabase'],
    },
    {
        id: 7,
        title: 'Movie Discovery Browser',
        type: 'Frontend',
        featured: false,
        problem:
            'TMDB-powered browser for trending movies and TV, people search, detailed credits, and a persistent local watchlist.',
        solution: '',
        impact: '',
        techStack: ['React', 'TypeScript', 'Vite', 'TanStack Query', 'Tailwind CSS', 'Vitest'],
        detailsUrl: 'https://movie.frankmendez.site/',
        repoUrl: 'https://github.com/frank-mendez/movie-browser',
        tags: ['React', 'TMDB', 'Open Source'],
    },
    {
        id: 8,
        title: 'Spotify Web Client',
        type: 'Frontend',
        featured: false,
        problem:
            'Full-featured Spotify client with authentication, playback controls, music discovery, playlists, and library management.',
        solution: '',
        impact: '',
        techStack: ['React', 'TypeScript', 'Vite', 'Spotify API', 'Tailwind CSS', 'Vitest'],
        detailsUrl: 'https://spotify.frankmendez.site/',
        repoUrl: 'https://github.com/frank-mendez/react-typescript-spotify',
        tags: ['OAuth', 'Spotify API', 'React'],
    },
    {
        id: 9,
        title: 'ChatMesh',
        type: 'Backend',
        featured: false,
        problem:
            'Go-based WebSocket backend exploring concurrent room management and the architectural path from one server to horizontal scaling.',
        solution: '',
        impact: '',
        techStack: ['Go', 'WebSockets', 'Goroutines', 'Channels'],
        repoUrl: 'https://github.com/frank-mendez/chatmesh',
        tags: ['Go', 'Distributed Systems', 'Real-time'],
    },
    {
        id: 10,
        title: 'ResumeIQ',
        type: 'AI · Full Stack',
        featured: false,
        problem:
            'AI-powered resume analyzer for ATS compatibility, gap detection, and actionable improvements using structured LLM feedback.',
        solution: '',
        impact: '',
        techStack: ['TanStack Start', 'TypeScript', 'Supabase', 'OpenAI', 'Tailwind CSS'],
        repoUrl: 'https://github.com/frank-mendez/ResumeIQ',
        tags: ['AI', 'ATS', 'LLM'],
    },
    {
        id: 11,
        title: 'Frank Bot',
        type: 'AI Backend',
        featured: false,
        problem:
            'Next.js API powering this portfolio’s OpenAI chatbot and Resend contact workflow with origin controls and structured endpoints.',
        solution: '',
        impact: '',
        techStack: ['Next.js 16', 'TypeScript', 'OpenAI SDK', 'Resend'],
        repoUrl: 'https://github.com/frank-mendez/frank-bot',
        tags: ['OpenAI', 'API', 'Serverless'],
    },
    {
        id: 12,
        title: 'MCP Dev Stack',
        type: 'Developer Tooling',
        featured: false,
        problem:
            'Open-source developer environment that connects AI assistants to development tools through the Model Context Protocol.',
        solution: '',
        impact: '',
        techStack: ['MCP', 'AI Assistants', 'Developer Tools'],
        repoUrl: 'https://github.com/frank-mendez/mcp-dev-stack',
        tags: ['MCP', 'Open Source', 'Tooling'],
    },
    {
        id: 13,
        title: 'NestJS Advanced Architecture',
        type: 'Backend',
        featured: false,
        problem:
            'Reference backend architecture using NestJS and CQRS with MongoDB/Mongoose and PostgreSQL/TypeORM persistence.',
        solution: '',
        impact: '',
        techStack: ['NestJS', 'TypeScript', 'CQRS', 'MongoDB', 'PostgreSQL', 'TypeORM'],
        repoUrl: 'https://github.com/frank-mendez/advanced-architecture',
        tags: ['NestJS', 'CQRS', 'Architecture'],
    },
]

const featuredProjects = projects.filter((p) => p.featured)
const moreProjects = projects.filter((p) => !p.featured)

type LinkType = 'site' | 'live' | 'code'

function handleProjectClick(title: string, type: string, linkType: LinkType, url: string) {
    trackEvent('project_click', {
        project_title: title,
        project_type: type,
        link_type: linkType,
        target_url: url,
    })
}

function FeaturedProjectCard({ project, index }: { project: Project; index: number }) {
    const num = String(index + 1).padStart(2, '0')
    const delayClass = index === 0 ? '' : index === 1 ? 'animation-delay-200' : 'animation-delay-400'

    return (
        <div
            className={`relative bg-base-200 border border-base-300 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 animate-fade-in-up ${delayClass} group overflow-hidden`}
        >
            {/* Faded number — Vercel/Linear style */}
            <span
                className="absolute top-4 right-6 text-8xl font-black text-base-content/5 select-none pointer-events-none leading-none"
                aria-hidden="true"
            >
                {num}
            </span>

            <div className="relative">
                {/* Header */}
                <div className="flex flex-wrap items-start gap-3 mb-6">
                    <div className="flex-1 min-w-0">
                        <h4 className="text-xl sm:text-2xl font-bold tracking-tight leading-tight">{project.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 shrink-0">
                        <Badge variant="outline" className="text-xs font-medium border-primary/30 text-primary">
                            {project.type}
                        </Badge>
                        {project.tags.map((tag) => (
                            <Badge key={tag} variant="secondary" className="text-xs font-normal">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </div>

                {/* Case study sections */}
                <div className="grid sm:grid-cols-3 gap-6 mb-6">
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-base-content/50 mb-2">
                            Problem
                        </p>
                        <p className="text-sm text-base-content/70 leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-base-content/50 mb-2">
                            Solution
                        </p>
                        <p className="text-sm text-base-content/70 leading-relaxed">{project.solution}</p>
                    </div>
                    <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-base-content/50 mb-2">
                            Impact
                        </p>
                        <p className="text-sm text-primary/80 leading-relaxed font-medium">{project.impact}</p>
                    </div>
                </div>

                {/* Footer: tech stack + actions */}
                <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs font-normal">
                                {tech}
                            </Badge>
                        ))}
                    </div>
                    <div className="flex gap-2 flex-wrap">
                        {project.detailsUrl && (
                            <Button
                                asChild
                                size="sm"
                                variant="default"
                                onClick={() =>
                                    handleProjectClick(project.title, project.type, 'site', project.detailsUrl!)
                                }
                            >
                                <a href={project.detailsUrl} target="_blank" rel="noreferrer">
                                    <Globe className="h-3.5 w-3.5" />
                                    Live
                                </a>
                            </Button>
                        )}
                        {project.liveUrl && (
                            <Button
                                asChild
                                size="sm"
                                variant="outline"
                                onClick={() =>
                                    handleProjectClick(project.title, project.type, 'live', project.liveUrl!)
                                }
                            >
                                <a href={project.liveUrl} target="_blank" rel="noreferrer">
                                    <Globe className="h-3.5 w-3.5" />
                                    Demo
                                </a>
                            </Button>
                        )}
                        {project.repoUrl && (
                            <Button
                                asChild
                                size="sm"
                                variant="outline"
                                onClick={() =>
                                    handleProjectClick(project.title, project.type, 'code', project.repoUrl!)
                                }
                            >
                                <a href={project.repoUrl} target="_blank" rel="noreferrer">
                                    <GithubIcon className="h-3.5 w-3.5" />
                                    Code
                                </a>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

function MoreProjectCard({ project, index }: { project: Project; index: number }) {
    const delayClasses = ['', 'animation-delay-100', 'animation-delay-200', 'animation-delay-300']
    const delayClass = delayClasses[index % delayClasses.length]

    return (
        <div
            className={`bg-base-200 border border-base-300 rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 animate-fade-in-up ${delayClass} flex flex-col gap-4`}
        >
            <div className="flex items-start justify-between gap-2">
                <h4 className="text-base font-semibold leading-snug">{project.title}</h4>
                <Badge variant="outline" className="shrink-0 text-xs font-medium border-primary/30 text-primary">
                    {project.type}
                </Badge>
            </div>

            <p className="text-sm text-base-content/60 leading-relaxed flex-1">{project.problem}</p>

            <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs font-normal">
                        {tech}
                    </Badge>
                ))}
            </div>

            {(project.detailsUrl || project.repoUrl || project.liveUrl) && (
                <div className="flex gap-2 flex-wrap">
                    {project.detailsUrl && (
                        <Button
                            asChild
                            size="sm"
                            variant="default"
                            onClick={() => handleProjectClick(project.title, project.type, 'site', project.detailsUrl!)}
                        >
                            <a href={project.detailsUrl} target="_blank" rel="noreferrer">
                                <Globe className="h-3.5 w-3.5" />
                                Live
                            </a>
                        </Button>
                    )}
                    {project.repoUrl && (
                        <Button
                            asChild
                            size="sm"
                            variant="outline"
                            onClick={() => handleProjectClick(project.title, project.type, 'code', project.repoUrl!)}
                        >
                            <a href={project.repoUrl} target="_blank" rel="noreferrer">
                                <GithubIcon className="h-3.5 w-3.5" />
                                Code
                            </a>
                        </Button>
                    )}
                </div>
            )}
        </div>
    )
}

const Projects = () => {
    return (
        <section id="projects" className="scroll-mt-14 bg-base-100" aria-labelledby="projects-heading">
            <div className="container mx-auto px-4 sm:px-6 py-16">
                {/* Page header */}
                <div className="mb-8 flex flex-col items-start justify-between gap-5 animate-fade-in-up sm:flex-row sm:items-end">
                    <div>
                        <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Portfolio</p>
                        <h2 id="projects-heading" className="text-4xl sm:text-5xl font-bold tracking-tight">
                            Projects
                        </h2>
                        <p className="mt-3 text-base-content/60 max-w-xl">
                            Selected product, platform, and open-source work from my public GitHub repositories.
                        </p>
                    </div>
                    <Button asChild variant="outline" className="shrink-0">
                        <a href="https://github.com/frank-mendez" target="_blank" rel="noopener noreferrer">
                            <GithubIcon className="h-4 w-4" />
                            View all repositories
                        </a>
                    </Button>
                </div>
                <Separator className="mb-12" />

                {/* Featured Projects */}
                <section className="mb-16">
                    <div className="mb-8 animate-fade-in-up animation-delay-100">
                        <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">
                            Featured Projects
                        </p>
                        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight flex items-center gap-2">
                            Case Studies
                            <Code className="h-5 w-5 text-primary/60" />
                        </h3>
                    </div>

                    <div className="flex flex-col gap-6">
                        {featuredProjects.map((project, index) => (
                            <FeaturedProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </section>

                {/* More Projects */}
                <section>
                    <div className="mb-8 animate-fade-in-up">
                        <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">
                            Additional Work
                        </p>
                        <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">More Work</h3>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                        {moreProjects.map((project, index) => (
                            <MoreProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </section>
            </div>
        </section>
    )
}

export default Projects
