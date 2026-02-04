import BusinessIcon from '@mui/icons-material/Business'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import WorkOutlineIcon from '@mui/icons-material/WorkOutline'

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
        summary:
            'Rebuilt the recruiter platform UI and integrated REST APIs for candidate data workflows.',
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
        summary:
            'Built fintech features including KYC workflows and multi-currency transactions within Scrum teams.',
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
        summary:
            'Delivered new lease management experiences and supported full-stack feature work for global clients.',
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
        summary:
            'Supporting Swiss clients with software development, staff augmentation, and product delivery.',
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
        <div className="card bg-base-100 shadow-xl max-w-xl">
            <div className="card-body gap-4">
                <div className="flex flex-wrap items-center gap-3">
                    <div className="inline-flex items-center gap-2 text-primary">
                        <BusinessIcon fontSize="small" />
                        <h3 className="text-xl font-bold">{experience.company}</h3>
                    </div>
                    <div className="badge badge-outline">{experience.period}</div>
                </div>

                <p className="text-sm text-base-content/80">{experience.summary}</p>

                <div className="flex flex-wrap items-center gap-2 text-xs text-base-content/70">
                    <CalendarMonthIcon fontSize="inherit" />
                    <span>{experience.period}</span>
                </div>

                <div className="flex flex-wrap gap-2">
                    {experience.techStack.map((tech) => (
                        <span key={tech} className="badge badge-ghost">
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="card-actions">
                    {experience.links.map((link) => (
                        <a
                            key={link.label}
                            className="btn btn-sm"
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <OpenInNewIcon fontSize="small" />
                            {link.label}
                        </a>
                    ))}
                </div>
            </div>
        </div>
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
                        {index === 0 ? null : <hr className="bg-primary/40" />}
                        <div className="timeline-middle">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                                <WorkOutlineIcon fontSize="small" />
                            </div>
                        </div>
                        <div className={`${isLeft ? 'timeline-start md:text-end' : 'timeline-end'} mb-10`}>
                            <div className={isLeft ? 'md:flex md:justify-end' : ''}>
                                <ExperienceCard experience={experience} />
                            </div>
                        </div>
                        <hr className="bg-primary/40" />
                    </li>
                )
            })}
        </ul>
    )
}

export default WorkExperience
