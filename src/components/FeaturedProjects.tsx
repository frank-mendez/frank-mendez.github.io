import MfkCaseStudy from './MfkCaseStudy'
import { trackEvent } from '../services/analyticsService'

const projects = [
    {
        kind: 'mfk',
        title: 'MFK Lending',
        category: 'Business software',
        description: 'Co-op contributions, loan schedules, repayments, and automated reminders in one application.',
        stack: ['Next.js', 'TypeScript', 'Supabase'],
        repo: 'https://github.com/frank-mendez/mfklending',
        preview: 'Lending overview',
    },
    {
        kind: 'blog',
        title: 'Blog CMS',
        category: 'Full-stack publishing',
        description: 'A publishing workflow with role-based access, rich-text editing, and an AI writing assistant.',
        stack: ['Next.js', 'Supabase', 'Tiptap'],
        repo: 'https://github.com/thepracticalengineer/nextjs-blog-cms',
        preview: 'Stories worth sharing',
    },
    {
        kind: 'movie',
        title: 'Movie Browser',
        category: 'Frontend & API integration',
        description: 'Explore films, TV shows, and people—and keep a personal watchlist for later.',
        stack: ['React', 'TypeScript', 'TMDB'],
        repo: 'https://github.com/frank-mendez/movie-browser',
        preview: 'Discover your next watch',
    },
]

export default function FeaturedProjects() {
    return (
        <div className="pf-projects">
            {projects.map((project) => (
                <article className="pf-project" key={project.kind}>
                    <div
                        className={`pf-art ${project.kind === 'mfk' ? '' : `pf-${project.kind}`}`}
                        role="group"
                        aria-label={`${project.title} concept illustration`}
                    >
                        <div className="pf-browser" aria-hidden="true">
                            <div className="pf-browser-top">
                                <i />
                                <i />
                                <i />
                            </div>
                            <div className="pf-tiny">{project.preview}</div>
                            {project.kind === 'movie' ? (
                                <div className="pf-posters">
                                    <i />
                                    <i />
                                    <i />
                                </div>
                            ) : (
                                <>
                                    {project.kind === 'mfk' && (
                                        <div className="pf-mock-stats">
                                            {[1, 2, 3].map((i) => (
                                                <div key={i}>
                                                    <i />
                                                    <i />
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                    <div className="pf-mock-lines">
                                        <i />
                                        <i />
                                        <i />
                                        <i />
                                    </div>
                                </>
                            )}
                        </div>
                        <span className="pf-art-label">CONCEPT UI</span>
                    </div>
                    <div className="pf-project-content">
                        <p className="pf-kicker">{project.category}</p>
                        <h3>
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() =>
                                    trackEvent('project_click', { project: project.title, destination: project.repo })
                                }
                            >
                                {project.title}
                            </a>
                        </h3>
                        <p>{project.description}</p>
                        <div className="pf-chips">
                            {project.stack.map((tech) => (
                                <span className="pf-chip" key={tech}>
                                    {tech}
                                </span>
                            ))}
                        </div>
                        {project.kind === 'mfk' ? (
                            <MfkCaseStudy />
                        ) : (
                            <a
                                className="pf-text-link"
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() =>
                                    trackEvent('project_click', { project: project.title, destination: project.repo })
                                }
                            >
                                Explore repository <span aria-hidden="true">↗</span>
                            </a>
                        )}
                    </div>
                </article>
            ))}
        </div>
    )
}
