import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import LanguageIcon from '@mui/icons-material/Language'

export type ProjectLinks = {
    detailsUrl?: string
    repoUrl?: string
    liveUrl?: string
}

export type ProjectCardProps = {
    title: string
    type: string
    description: string
    techStack: string
    links?: ProjectLinks
}

const ProjectCard = ({ title, type, description, techStack, links }: ProjectCardProps) => {
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body font-dm-sans">
                <div className="flex items-center justify-between gap-4">
                    <h2 className="card-title text-2xl">{title}</h2>
                    <span className="badge badge-outline">{type}</span>
                </div>
                <p className="text-sm text-base-content/80">{description}</p>
                <div className="mt-2">
                    <p className="text-xs uppercase tracking-wide text-base-content/60">Tech Stack</p>
                    <p className="text-sm">{techStack}</p>
                </div>
                <div className="card-actions mt-4 flex-wrap">
                    {links?.detailsUrl ? (
                        <a
                            className="btn btn-sm btn-primary"
                            href={links.detailsUrl}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <LanguageIcon fontSize="small" />
                            Site
                        </a>
                    ) : null}
                    {links?.liveUrl ? (
                        <a className="btn btn-sm" href={links.liveUrl} target="_blank" rel="noreferrer">
                            <LaunchIcon fontSize="small" />
                            Live
                        </a>
                    ) : null}
                    {links?.repoUrl ? (
                        <a className="btn btn-sm" href={links.repoUrl} target="_blank" rel="noreferrer">
                            <GitHubIcon fontSize="small" />
                            Code
                        </a>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard
