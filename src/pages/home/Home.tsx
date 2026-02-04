import AppLayout from '../../layout/AppLayout.tsx'
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse'
import SkillSection from '../../components/SkillSection.tsx'
import CodeIcon from '@mui/icons-material/Code'
import StorageIcon from '@mui/icons-material/Storage'
import ScienceIcon from '@mui/icons-material/Science'
import CloudDoneIcon from '@mui/icons-material/CloudDone'
import PsychologyIcon from '@mui/icons-material/Psychology'
import HandshakeIcon from '@mui/icons-material/Handshake'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import BuildCircleIcon from '@mui/icons-material/BuildCircle'

const techStackGroups = [
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

const softSkillsGroups = [
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

const Home = () => {
    return (
        <AppLayout>
            <div className="m-0">
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: 'url(/images/background.jpg)',
                    }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content flex-col lg:flex-row gap-4">
                        <MouseParallaxContainer
                            globalFactorX={0.4}
                            globalFactorY={0.3}
                            resetOnLeave
                            className="w-full flex flex-col lg:flex-row justify-between items-center"
                        >
                            <MouseParallaxChild factorX={0.1} factorY={0.2}>
                                <div className="flex flex-col lg:flex-row items-center text-center lg:text-left flex-1">
                                    <div className="flex-1 flex justify-end max-w-sm lg:max-w-max">
                                        <img
                                            className="mask mask-circle shadow-2xl shadow-black"
                                            src="/images/frank.jpg"
                                            width={300}
                                            height={300}
                                            alt="frank"
                                        />
                                    </div>
                                </div>
                            </MouseParallaxChild>
                            <MouseParallaxChild factorX={0.2} factorY={0.3} className="relative">
                                <div className="flex flex-col px-4 lg:flex-row items-center text-center lg:text-left flex-1  text-white">
                                    <div className="flex-1">
                                        <div className="font-dm-sans sm:mt-10 text-3xl md:text-[32px] text-white uppercase tracking-[0.03em]">
                                            Software Engineer / Frontend Developer
                                        </div>
                                        <h1 className="text-4xl mt-4 lg:text-8xl font-dm-sans text-white drop-shadow-md">
                                            Frank Mendez
                                        </h1>
                                        <p className="text-sm text-wrap font-dm-sans w-[20rem]">
                                            with a decade of experience in the tech industry. Throughout my career, I've
                                            worked with various technologies and frameworks and have contributed to open
                                            source projects.
                                        </p>
                                    </div>
                                </div>
                            </MouseParallaxChild>
                        </MouseParallaxContainer>
                    </div>
                </div>
                <div className="font-dm-sans">
                    <SkillSection
                        eyebrow="Expertise"
                        title="Tech Stack"
                        description="Modern frontend expertise paired with a pragmatic backend and DevOps toolkit for full product delivery."
                        groups={techStackGroups}
                        className="bg-base-300"
                    />
                    <SkillSection
                        eyebrow="Professional"
                        title="Soft Skills & Tools"
                        description="Collaborative, product-focused, and dependable — backed by a toolset that keeps teams aligned and shipping."
                        groups={softSkillsGroups}
                        className="bg-base-200"
                    />
                </div>
            </div>
        </AppLayout>
    )
}

export default Home
