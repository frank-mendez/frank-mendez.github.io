import AppLayout from '../../layout/AppLayout.tsx'
import SkillSection from '../../components/SkillSection.tsx'
import { softSkillsGroups, techStackGroups } from './homeData'
import { Button } from '../../components/ui/button'
import { Badge } from '../../components/ui/badge'
import { Mail, ArrowRight } from 'lucide-react'
import { GitHub, LinkedIn } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <AppLayout>
            <div>
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
                                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-base-content animate-fade-in-up animation-delay-100">
                                    Senior Software Engineer building scalable systems and elegant UIs
                                </h1>

                                {/* Subheading */}
                                <p className="text-base-content/60 text-base sm:text-lg max-w-md leading-relaxed animate-fade-in-up animation-delay-200">
                                    10+ years crafting production-grade React applications, design systems, and backend
                                    APIs that scale.
                                </p>

                                {/* CTA buttons */}
                                <div className="flex flex-wrap gap-3 animate-fade-in-up animation-delay-300">
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
                                <div className="flex items-center gap-1 pt-2 animate-fade-in-up animation-delay-300">
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
                                    alt="Frank Mendez"
                                    width={300}
                                    height={300}
                                    className="rounded-full shadow-2xl ring-2 ring-primary/30 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Sections */}
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
        </AppLayout>
    )
}

export default Home
