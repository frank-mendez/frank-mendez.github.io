import { Code2, Database, FlaskConical, Cloud, Brain, Handshake, TrendingUp, Wrench } from 'lucide-react'
import { SkillGroup } from '../../components/SkillSection'

export const techStackGroups: SkillGroup[] = [
    {
        title: 'Frontend',
        icon: <Code2 className="h-4 w-4" />,
        items: ['React', 'TypeScript', 'Next.js', 'Material UI', 'TailwindCSS', 'daisyUI', 'TanStack', 'Zustand'],
    },
    {
        title: 'Backend',
        icon: <Database className="h-4 w-4" />,
        items: ['Node.js', 'NestJS', 'PostgreSQL', 'MongoDB', 'Firebase', 'MikroORM'],
    },
    {
        title: 'Testing',
        icon: <FlaskConical className="h-4 w-4" />,
        items: ['Jest', 'Cypress', 'Testing Library', 'Vitest'],
    },
    {
        title: 'DevOps',
        icon: <Cloud className="h-4 w-4" />,
        items: ['Docker', 'AWS', 'Azure', 'GitHub Actions', 'CI/CD'],
    },
]

export const softSkillsGroups: SkillGroup[] = [
    {
        title: 'Communication',
        icon: <Handshake className="h-4 w-4" />,
        items: ['Stakeholder alignment', 'Clear documentation', 'Cross-team collaboration'],
    },
    {
        title: 'Execution',
        icon: <TrendingUp className="h-4 w-4" />,
        items: ['Ownership mindset', 'Deadline-focused delivery', 'Quality-first approach'],
    },
    {
        title: 'Growth',
        icon: <Brain className="h-4 w-4" />,
        items: ['Continuous learning', 'Adaptability', 'Mentorship & coaching'],
    },
    {
        title: 'Tools',
        icon: <Wrench className="h-4 w-4" />,
        items: ['GitHub', 'Jira', 'Slack', 'Figma', 'WebStorm'],
    },
]
