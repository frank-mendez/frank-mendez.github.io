import AppLayout from '../../layout/AppLayout.tsx'
import { Separator } from '../../components/ui/separator'
import { Badge } from '../../components/ui/badge'
import { Button } from '../../components/ui/button'
import { Globe, Code } from 'lucide-react'
import { GitHub } from '@mui/icons-material'
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
        title: 'MFK Loan Management System',
        type: 'Full Stack',
        featured: true,
        problem:
            'Microfinance institution needed a digital platform to manage loan applications, disbursements, and repayment tracking across multiple branches.',
        solution:
            'Built a full-stack LMS with role-based access, automated repayment schedules, and a real-time dashboard for branch managers.',
        impact: 'Digitized loan workflows for 5+ branches, reducing processing time by 60%.',
        techStack: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'Prisma', 'TailwindCSS'],
        detailsUrl: 'https://mfklms.vercel.app/',
        repoUrl: 'https://github.com/frank-mendez/mfklms',
        tags: ['Full Stack', 'Next.js', 'PostgreSQL'],
    },
    {
        id: 2,
        title: 'Real-Time Chat Platform',
        type: 'Full Stack',
        featured: true,
        problem:
            'Teams needed a lightweight, self-hosted real-time messaging solution with persistent chat history.',
        solution:
            'Architected a WebSocket-based chat system with room management, message persistence, and containerized deployment.',
        impact: 'Demonstrated production-grade real-time architecture with Docker orchestration and PostgreSQL persistence.',
        techStack: ['React', 'NestJS', 'Socket.IO', 'PostgreSQL', 'Docker', 'TailwindCSS'],
        detailsUrl: 'https://socketio-chat-omega.vercel.app/',
        repoUrl: 'https://github.com/frank-mendez/socketio-chat',
        tags: ['Real-time', 'WebSocket', 'Docker'],
    },
    {
        id: 3,
        title: 'Movie Discovery Browser',
        type: 'Frontend',
        featured: true,
        problem:
            'Movie enthusiasts needed a fast, modern browser experience to discover and search films using TMDB\'s catalog.',
        solution:
            'Built a responsive movie discovery SPA with search, filtering, infinite scroll, and detailed movie pages.',
        impact: 'Showcases production-grade frontend architecture: API integration, state management, and responsive design.',
        techStack: ['React', 'TypeScript', 'Vite', 'TailwindCSS'],
        detailsUrl: 'https://modern-movie-browser.vercel.app/',
        repoUrl: 'https://github.com/frank-mendez/movie-browser',
        tags: ['Frontend', 'API Integration', 'React'],
    },
    {
        id: 4,
        title: 'Spotify Music Dashboard',
        type: 'Frontend',
        featured: false,
        problem:
            'Needed a demo of OAuth2 authentication flow with a third-party API integrated into a React application.',
        solution:
            'Built a Spotify dashboard with OAuth login, playlist browsing, and now-playing views using the Spotify Web API.',
        impact: 'Demonstrates full OAuth2 PKCE flow with TypeScript and clean API abstraction.',
        techStack: ['React', 'TypeScript', 'Vite', 'Spotify API'],
        detailsUrl: 'https://react-typescript-spotify.vercel.app/',
        repoUrl: 'https://github.com/frank-mendez/react-typescript-spotify',
        tags: ['OAuth2', 'API', 'React'],
    },
    {
        id: 5,
        title: 'NestJS Backend Architecture',
        type: 'Backend',
        featured: false,
        problem: 'Showcase of scalable backend patterns for enterprise TypeScript applications.',
        solution:
            'Implemented clean architecture with NestJS modules, MikroORM repositories, MongoDB, and full test coverage.',
        impact: 'Reference implementation for domain-driven NestJS architecture with ORM integration.',
        techStack: ['NestJS', 'TypeScript', 'MikroORM', 'MongoDB'],
        repoUrl: 'https://github.com/frank-mendez/advanced-architecture',
        tags: ['Backend', 'NestJS', 'Architecture'],
    },
    {
        id: 6,
        title: 'To Do API',
        type: 'Backend',
        featured: false,
        problem: 'Simple REST API showcasing Python backend development.',
        solution: 'Built a RESTful todo API with Python.',
        impact: 'Demonstrates Python backend skills.',
        techStack: ['Python'],
        repoUrl: 'https://github.com/frank-mendez/todo-py',
        tags: ['Backend', 'Python'],
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
                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight leading-tight">{project.title}</h3>
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
                                    <GitHub sx={{ fontSize: 14 }} />
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
                <h3 className="text-base font-semibold leading-snug">{project.title}</h3>
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
                                <GitHub sx={{ fontSize: 14 }} />
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
        <AppLayout>
            <div className="container mx-auto px-4 sm:px-6 py-14">
                {/* Page header */}
                <div className="mb-8 animate-fade-in-up">
                    <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Portfolio</p>
                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Projects</h1>
                    <p className="mt-3 text-base-content/60 max-w-xl">
                        A selection of personal and professional projects spanning frontend, backend, and full-stack
                        development.
                    </p>
                </div>
                <Separator className="mb-12" />

                {/* Featured Projects */}
                <section className="mb-16">
                    <div className="mb-8 animate-fade-in-up animation-delay-100">
                        <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">
                            Featured Projects
                        </p>
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight flex items-center gap-2">
                            Case Studies
                            <Code className="h-5 w-5 text-primary/60" />
                        </h2>
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
                        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">More Work</h2>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                        {moreProjects.map((project, index) => (
                            <MoreProjectCard key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </section>
            </div>
        </AppLayout>
    )
}

export default Projects
