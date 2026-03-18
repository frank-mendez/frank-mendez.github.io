import AppLayout from '../../layout/AppLayout.tsx'
import { Button } from '../../components/ui/button'
import { Badge } from '../../components/ui/badge'
import { Mail, ArrowRight, Check } from 'lucide-react'
import { GitHub, LinkedIn } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const techCategories = [
    {
        label: 'Frontend',
        skills: ['React', 'TypeScript', 'Next.js', 'TailwindCSS', 'Zustand', 'TanStack Query'],
        primary: true,
    },
    {
        label: 'Backend',
        skills: ['Node.js', 'NestJS', 'PostgreSQL', 'MongoDB', 'Firebase'],
        primary: false,
    },
    {
        label: 'DevOps & Cloud',
        skills: ['AWS', 'Docker', 'GitHub Actions', 'Azure'],
        primary: false,
    },
    {
        label: 'Testing',
        skills: ['Vitest', 'Jest', 'Cypress', 'Testing Library'],
        primary: false,
    },
]

const softSkillTraits = [
    'Ownership Mindset',
    'Deadline-Focused',
    'Cross-team Collaboration',
    'Mentorship',
    'Continuous Learning',
    'Quality-First',
    'Documentation',
    'Adaptability',
]

const Home = () => {
    return (
        <AppLayout>
            <main>
                {/* Hero Section */}
                <section className="hero-gradient-bg dot-grid-bg relative min-h-[calc(100vh-3.5rem)] flex items-center">
                    <div className="relative container mx-auto px-4 sm:px-6 py-20">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Text content */}
                            <div className="space-y-6 order-2 lg:order-1">
                                {/* Status badges */}
                                <div className="flex flex-wrap gap-2 animate-fade-in-up">
                                    <Badge
                                        variant="outline"
                                        className="border-primary/40 text-primary bg-primary/10 text-xs font-medium"
                                    >
                                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 mr-1.5" />
                                        Available for hire
                                    </Badge>
                                    <Badge
                                        variant="outline"
                                        className="border-base-content/20 text-base-content/60 bg-base-content/5 text-xs font-medium"
                                    >
                                        10+ Years Experience
                                    </Badge>
                                </div>

                                {/* Name eyebrow */}
                                <p className="text-base-content/50 text-sm font-medium tracking-widest uppercase animate-fade-in-up animation-delay-100">
                                    Frank Mendez
                                </p>

                                {/* Main headline */}
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-base-content animate-fade-in-up animation-delay-200">
                                    Senior Software Engineer building scalable systems and elegant UIs
                                </h1>

                                {/* Subheading */}
                                <p className="text-base-content/60 text-base sm:text-lg max-w-md leading-relaxed animate-fade-in-up animation-delay-300">
                                    10+ years crafting production-grade React applications, design systems, and backend
                                    APIs that scale.
                                </p>

                                {/* CTA buttons */}
                                <div className="flex flex-wrap gap-3 animate-fade-in-up animation-delay-400">
                                    <Link to="/projects">
                                        <Button size="lg" className="font-semibold">
                                            View Projects
                                            <ArrowRight className="h-4 w-4" />
                                        </Button>
                                    </Link>
                                    <Link to="/contact">
                                        <Button size="lg" variant="outline">
                                            Get in Touch
                                        </Button>
                                    </Link>
                                </div>

                                {/* Social links */}
                                <div className="flex items-center gap-1 pt-2 animate-fade-in-up animation-delay-400">
                                    <a
                                        href="https://github.com/frank-mendez"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg text-base-content/50 hover:text-base-content hover:bg-base-content/10 transition-colors"
                                        aria-label="GitHub"
                                    >
                                        <GitHub sx={{ fontSize: 20 }} />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/frank-mendez-47b62090/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg text-base-content/50 hover:text-base-content hover:bg-base-content/10 transition-colors"
                                        aria-label="LinkedIn"
                                    >
                                        <LinkedIn sx={{ fontSize: 20 }} />
                                    </a>
                                    <a
                                        href="mailto:frankmendezresources@gmail.com"
                                        className="p-2 rounded-lg text-base-content/50 hover:text-base-content hover:bg-base-content/10 transition-colors"
                                        aria-label="Email"
                                    >
                                        <Mail className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Avatar */}
                            <div className="flex justify-center lg:justify-end order-1 lg:order-2 animate-fade-in animation-delay-200">
                                <img
                                    src="/images/frank.jpg"
                                    alt="Headshot of Frank Mendez, Senior Software Engineer"
                                    width={300}
                                    height={300}
                                    className="rounded-full shadow-2xl ring-2 ring-primary/30 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Skills Section */}
                <section className="bg-base-200">
                    <div className="container mx-auto px-4 sm:px-6 py-16">
                        {/* Section header */}
                        <div className="mx-auto max-w-3xl text-center mb-10 animate-fade-in-up">
                            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">Stack</p>
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-base-content">
                                Technical Skills
                            </h2>
                            <p className="mt-3 text-base-content/60 text-sm sm:text-base">
                                Technologies I use to ship production-grade products
                            </p>
                        </div>

                        {/* Tech categories grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in-up animation-delay-100">
                            {techCategories.map((category) => (
                                <div key={category.label}>
                                    <p className="text-xs font-semibold uppercase tracking-wider text-base-content/50 mb-3">
                                        {category.label}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {category.skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium border ${
                                                    category.primary
                                                        ? 'bg-primary/10 border-primary/20 text-primary'
                                                        : 'bg-base-300 border-base-content/10 text-base-content'
                                                }`}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Soft Skills Section */}
                <section className="bg-base-300">
                    <div className="container mx-auto px-4 sm:px-6 py-16">
                        {/* Section header */}
                        <div className="mx-auto max-w-3xl text-center mb-10 animate-fade-in-up">
                            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-2">
                                Professional
                            </p>
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-base-content">
                                Soft Skills
                            </h2>
                        </div>

                        {/* Traits grid */}
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 animate-fade-in-up animation-delay-200">
                            {softSkillTraits.map((trait) => (
                                <div
                                    key={trait}
                                    className="bg-base-200 border border-base-content/10 rounded-xl px-4 py-3 text-sm font-medium text-center flex items-center justify-center gap-2 text-base-content"
                                >
                                    <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                                    {trait}
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </AppLayout>
    )
}

export default Home
