import { ExternalLink } from 'lucide-react'
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
        <div className="bg-base-200 border border-base-300 rounded-xl p-6 ml-8">
            <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                <h3 className="text-base font-bold text-primary">{experience.company}</h3>
                <span className="bg-base-200 text-base-content/50 text-xs px-2 py-0.5 rounded border border-base-300">
                    {experience.period}
                </span>
            </div>
            <p className="text-sm text-base-content/70 mb-3">{experience.summary}</p>
            <div className="flex flex-wrap gap-1.5 mb-3">
                {experience.techStack.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs font-normal">
                        {tech}
                    </Badge>
                ))}
            </div>
            <div className="flex flex-wrap gap-2">
                {experience.links.map((link) => (
                    <Button key={link.label} asChild size="sm" variant="outline">
                        <a href={link.href} target="_blank" rel="noreferrer">
                            <ExternalLink className="h-3.5 w-3.5" />
                            {link.label}
                        </a>
                    </Button>
                ))}
            </div>
        </div>
    )
}

const WorkExperience = () => {
    const orderedExperiences = [...experiences].reverse()
    return (
        <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-3 top-0 bottom-0 w-0.5 border-l-2 border-primary/30" />
            <div className="space-y-8">
                {orderedExperiences.map((experience) => (
                    <div key={`${experience.company}-${experience.period}`} className="relative flex items-start">
                        {/* Timeline dot */}
                        <div className="absolute left-0 mt-6 h-2 w-2 rounded-full bg-primary translate-x-[9px]" />
                        <div className="w-full">
                            <ExperienceCard experience={experience} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WorkExperience
