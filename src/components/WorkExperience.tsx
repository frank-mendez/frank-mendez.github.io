import { Building2, Calendar, ExternalLink, Briefcase } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { Button } from './ui/button'

type ExperienceLink = {
    label: string
    href: string
}

type ExperienceItem = {
    company: string
    period: string
    summary: string
    techStack: string[]
    links: ExperienceLink[]
}

const experiences: ExperienceItem[] = [
    {
        company: 'Arnlea Systems Ltd',
        period: 'July 2014 - December 2016',
        summary:
            'Developed asset and maintenance management applications for the oil industry with Scrum and Agile teams.',
        techStack: ['CodeIgniter', 'Bootstrap', 'MySQL', 'PHP', 'CSS', 'JavaScript', 'HTML'],
        links: [
            {
                label: 'Company',
                href: 'https://www.google.com/search?q=Arnlea+Systems+Ltd',
            },
        ],
    },
    {
        company: 'Heaviside Group',
        period: 'May 2017 - February 2020',
        summary:
            'Delivered bespoke web projects, managed hosting, and built WordPress solutions with SEO best practices.',
        techStack: ['WordPress', 'PHP', 'HTML', 'CSS', 'JavaScript', 'cPanel'],
        links: [
            {
                label: 'Company',
                href: 'https://www.google.com/search?q=Heaviside+Group+web+development',
            },
        ],
    },
    {
        company: 'Empower Associates',
        period: 'February 2020 - February 2021',
        summary: 'Rebuilt the recruiter platform UI and integrated REST APIs for candidate data workflows.',
        techStack: ['ReactJS', 'Redux', 'NodeJS', 'Postgres', 'Jira', 'GitHub', 'Elastic UI', 'Docker'],
        links: [
            {
                label: 'Company',
                href: 'https://www.google.com/search?q=Empower+Associates+recruitment+technology',
            },
        ],
    },
    {
        company: 'Aerapass',
        period: 'February 2021 - September 2021',
        summary: 'Built fintech features including KYC workflows and multi-currency transactions within Scrum teams.',
        techStack: ['TypeScript', 'Angular', 'TypeORM', 'NodeJS', 'NgRx', 'Ant Design', 'Jest', 'Mocha', 'Docker'],
        links: [
            {
                label: 'Company',
                href: 'https://www.google.com/search?q=Aerapass+fintech',
            },
        ],
    },
    {
        company: 'Arcanys',
        period: 'October 2021 - September 2024',
        summary: 'Delivered new lease management experiences and supported full-stack feature work for global clients.',
        techStack: ['TypeScript', 'ReactJS', 'AWS', 'NodeJS', 'Chakra UI', 'Zustand', 'Jest', 'Jira'],
        links: [
            {
                label: 'Company',
                href: 'https://www.arcanys.com',
            },
        ],
    },
    {
        company: 'Virtido AG',
        period: 'September 2024 - Present',
        summary: 'Supporting Swiss clients with software development, staff augmentation, and product delivery.',
        techStack: ['TypeScript', 'ReactJS', 'NodeJS', 'AWS', 'Agile'],
        links: [
            {
                label: 'Company',
                href: 'https://virtido.com',
            },
        ],
    },
]

const ExperienceCard = ({ experience }: { experience: ExperienceItem }) => {
    return (
        <Card className="bg-base-100 border-base-content/10 hover:shadow-md transition-shadow max-w-xl w-full">
            <CardHeader className="pb-3">
                <div className="flex flex-wrap items-start justify-between gap-2">
                    <CardTitle className="flex items-center gap-2 text-base text-primary">
                        <Building2 className="h-4 w-4 shrink-0" />
                        {experience.company}
                    </CardTitle>
                    <Badge variant="outline" className="text-xs shrink-0">
                        {experience.period}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="space-y-3">
                <p className="text-sm text-base-content/70">{experience.summary}</p>
                <div className="flex items-center gap-1.5 text-xs text-base-content/50">
                    <Calendar className="h-3 w-3" />
                    <span>{experience.period}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                    {experience.techStack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs font-normal">
                            {tech}
                        </Badge>
                    ))}
                </div>
                <div className="flex flex-wrap gap-2 pt-1">
                    {experience.links.map((link) => (
                        <Button key={link.label} asChild size="sm" variant="outline">
                            <a href={link.href} target="_blank" rel="noreferrer">
                                <ExternalLink className="h-3.5 w-3.5" />
                                {link.label}
                            </a>
                        </Button>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

const WorkExperience = () => {
    const orderedExperiences = [...experiences].reverse()
    return (
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            {orderedExperiences.map((experience, index) => {
                const isLeft = index % 2 === 0
                return (
                    <li key={`${experience.company}-${experience.period}`}>
                        {index === 0 ? null : <hr className="bg-primary/30" />}
                        <div className="timeline-middle">
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary ring-2 ring-primary/20">
                                <Briefcase className="h-4 w-4" />
                            </div>
                        </div>
                        <div className={`${isLeft ? 'timeline-start md:text-end' : 'timeline-end'} mb-10`}>
                            <div className={isLeft ? 'md:flex md:justify-end' : ''}>
                                <ExperienceCard experience={experience} />
                            </div>
                        </div>
                        <hr className="bg-primary/30" />
                    </li>
                )
            })}
        </ul>
    )
}

export default WorkExperience
