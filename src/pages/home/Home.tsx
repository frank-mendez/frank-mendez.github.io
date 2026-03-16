import AppLayout from '../../layout/AppLayout.tsx'
import SkillSection from '../../components/SkillSection.tsx'
import { softSkillsGroups, techStackGroups } from './homeData'
import { Button } from '../../components/ui/button'
import { Badge } from '../../components/ui/badge'
import { RetroGridBg } from '../../components/ui/retro-grid-bg'
import { UnderwaterBg } from '../../components/ui/underwater-bg'
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <AppLayout>
            <div>
                {/* Hero Section */}
                <section className="home-hero-bg relative min-h-[calc(100vh-3.5rem)] flex items-center">
                    {/* Theme-aware backgrounds */}
                    <div className="hero-bg-underwater">
                        <UnderwaterBg />
                    </div>
                    <div className="hero-bg-retro-grid">
                        <RetroGridBg />
                    </div>
                    {/* Subtle content overlay */}
                    <div className="absolute inset-0 bg-black/30" />
                    <div className="relative container mx-auto px-4 sm:px-6 py-20">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Text content */}
                            <div className="text-white space-y-6 order-2 lg:order-1">
                                <div className="flex flex-wrap gap-2">
                                    <Badge
                                        variant="outline"
                                        className="border-white/40 text-white bg-white/10 backdrop-blur-sm"
                                    >
                                        Available for hire
                                    </Badge>
                                    <Badge
                                        variant="outline"
                                        className="border-white/40 text-white bg-white/10 backdrop-blur-sm"
                                    >
                                        10+ Years Experience
                                    </Badge>
                                </div>

                                <div>
                                    <p className="text-white/70 text-sm uppercase tracking-widest mb-2">
                                        Software Engineer / Frontend Engineer
                                    </p>
                                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-none">
                                        Frank
                                        <br />
                                        Mendez
                                    </h1>
                                </div>

                                <p className="text-white/80 text-base sm:text-lg max-w-md leading-relaxed">
                                    A decade of experience crafting modern web applications. Specializing in React,
                                    TypeScript, and scalable frontend architecture. Passionate about AI and security.
                                </p>

                                <div className="flex flex-wrap gap-3">
                                    <Link to="/projects">
                                        <Button
                                            size="lg"
                                            className="bg-white text-gray-900 hover:bg-white/90 font-semibold"
                                        >
                                            View Projects
                                            <ArrowRight className="h-4 w-4" />
                                        </Button>
                                    </Link>
                                    <Link to="/contact">
                                        <Button
                                            size="lg"
                                            variant="outline"
                                            className="border-white/60 text-white hover:bg-white/10 hover:border-white"
                                        >
                                            Get in Touch
                                        </Button>
                                    </Link>
                                </div>

                                <div className="flex items-center gap-3 pt-2">
                                    <a
                                        href="https://github.com/frank-mendez"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                                        aria-label="GitHub"
                                    >
                                        <Github className="h-5 w-5" />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/frank-mendez-47b62090/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                                        aria-label="LinkedIn"
                                    >
                                        <Linkedin className="h-5 w-5" />
                                    </a>
                                    <a
                                        href="mailto:frankmendezresources@gmail.com"
                                        className="p-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                                        aria-label="Email"
                                    >
                                        <Mail className="h-5 w-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Avatar */}
                            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                                <div className="relative">
                                    <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-white/20 to-white/5 blur-md" />
                                    <img
                                        src="/images/frank.jpg"
                                        alt="Frank Mendez"
                                        width={300}
                                        height={300}
                                        className="relative rounded-full shadow-2xl ring-2 ring-white/20 w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-cover"
                                    />
                                </div>
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
