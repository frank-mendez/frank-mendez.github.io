import { Github, Globe, ExternalLink } from 'lucide-react'
import { trackEvent } from '../services/analyticsService'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

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
    const handleProjectClick = (linkType: 'site' | 'live' | 'code', url: string) => {
        trackEvent('project_click', {
            project_title: title,
            project_type: type,
            link_type: linkType,
            target_url: url,
        })
    }

    const techItems = techStack
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean)

    return (
        <Card className="flex flex-col hover:shadow-md transition-shadow bg-base-100">
            <CardHeader className="pb-3">
                <div className="flex items-start justify-between gap-3">
                    <CardTitle className="text-base leading-snug">{title}</CardTitle>
                    <Badge variant="outline" className="shrink-0 text-xs">
                        {type}
                    </Badge>
                </div>
                <p className="text-sm text-base-content/60 leading-relaxed mt-1">{description}</p>
            </CardHeader>

            <CardContent className="flex-1 pb-3">
                <div className="flex flex-wrap gap-1.5">
                    {techItems.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs font-normal">
                            {tech}
                        </Badge>
                    ))}
                </div>
            </CardContent>

            <CardFooter className="gap-2 flex-wrap">
                {links?.detailsUrl && (
                    <Button
                        asChild
                        size="sm"
                        variant="default"
                        onClick={() => handleProjectClick('site', links?.detailsUrl ?? '')}
                    >
                        <a href={links.detailsUrl} target="_blank" rel="noreferrer">
                            <Globe className="h-3.5 w-3.5" />
                            Live
                        </a>
                    </Button>
                )}
                {links?.liveUrl && (
                    <Button
                        asChild
                        size="sm"
                        variant="outline"
                        onClick={() => handleProjectClick('live', links?.liveUrl ?? '')}
                    >
                        <a href={links.liveUrl} target="_blank" rel="noreferrer">
                            <ExternalLink className="h-3.5 w-3.5" />
                            Demo
                        </a>
                    </Button>
                )}
                {links?.repoUrl && (
                    <Button
                        asChild
                        size="sm"
                        variant="outline"
                        onClick={() => handleProjectClick('code', links?.repoUrl ?? '')}
                    >
                        <a href={links.repoUrl} target="_blank" rel="noreferrer">
                            <Github className="h-3.5 w-3.5" />
                            Code
                        </a>
                    </Button>
                )}
            </CardFooter>
        </Card>
    )
}

export default ProjectCard
