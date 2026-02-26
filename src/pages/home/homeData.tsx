import CodeIcon from '@mui/icons-material/Code'
import StorageIcon from '@mui/icons-material/Storage'
import ScienceIcon from '@mui/icons-material/Science'
import CloudDoneIcon from '@mui/icons-material/CloudDone'
import PsychologyIcon from '@mui/icons-material/Psychology'
import HandshakeIcon from '@mui/icons-material/Handshake'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import BuildCircleIcon from '@mui/icons-material/BuildCircle'
import { SkillGroup } from '../../components/SkillSection'

export const techStackGroups: SkillGroup[] = [
    {
        title: 'Frontend',
        icon: <CodeIcon />,
        items: ['React', 'TypeScript', 'Next.js', 'Material UI', 'TailwindCSS', 'daisyUI', 'TanStack', 'Zustand'],
    },
    {
        title: 'Backend',
        icon: <StorageIcon />,
        items: ['Node.js', 'NestJS', 'PostgreSQL', 'MongoDB', 'Firebase', 'MikroORM'],
    },
    {
        title: 'Testing',
        icon: <ScienceIcon />,
        items: ['Jest', 'Cypress', 'Testing Library', 'Vitest'],
    },
    {
        title: 'DevOps',
        icon: <CloudDoneIcon />,
        items: ['Docker', 'AWS', 'Azure', 'GitHub Actions', 'CI/CD'],
    },
]

export const softSkillsGroups: SkillGroup[] = [
    {
        title: 'Communication',
        icon: <HandshakeIcon />,
        items: ['Stakeholder alignment', 'Clear documentation', 'Cross-team collaboration'],
    },
    {
        title: 'Execution',
        icon: <TrendingUpIcon />,
        items: ['Ownership mindset', 'Deadline-focused delivery', 'Quality-first approach'],
    },
    {
        title: 'Growth',
        icon: <PsychologyIcon />,
        items: ['Continuous learning', 'Adaptability', 'Mentorship & coaching'],
    },
    {
        title: 'Tools',
        icon: <BuildCircleIcon />,
        items: ['GitHub', 'Jira', 'Slack', 'Figma', 'WebStorm'],
    },
]
