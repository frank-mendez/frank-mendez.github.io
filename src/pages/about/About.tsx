import AppLayout from '../../layout/AppLayout.tsx'
import WorkExperience from '../../components/WorkExperience.tsx'
import { MapPin, Code2, Clock, CalendarDays } from 'lucide-react'

const About = () => {
    return (
        <AppLayout>
            <div>
                {/* Bio Section */}
                <section className="bg-base-100">
                    <div className="container mx-auto px-4 sm:px-6 py-16">
                        <div className="grid gap-12 lg:grid-cols-[auto_1fr] lg:items-start">
                            <div className="flex justify-center lg:justify-start">
                                <img
                                    alt="Frank Mendez"
                                    width={280}
                                    height={280}
                                    src="/images/frank2.jpg"
                                    className="rounded-2xl shadow-xl ring-1 ring-base-content/10 w-56 h-56 sm:w-64 sm:h-64 object-cover"
                                />
                            </div>
                            <div className="space-y-5 animate-fade-in-up animation-delay-100">
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                                        About
                                    </p>
                                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Frank R. Mendez</h1>
                                </div>
                                <p className="text-base-content/70 text-base leading-relaxed max-w-2xl">
                                    Senior Software Engineer with 10+ years specializing in frontend architecture,
                                    design systems, and full-stack TypeScript applications.
                                </p>
                                <p className="text-base-content/70 text-base leading-relaxed max-w-2xl">
                                    I architect scalable UIs with React and TypeScript — from component libraries to
                                    production apps used by thousands — and build backend APIs that power them.
                                </p>
                                <p className="text-base-content/70 text-base leading-relaxed max-w-2xl">
                                    Currently at Virtido AG, building enterprise SaaS tools with React, Node.js, and
                                    AWS. Exploring AI-assisted developer tooling and LLM integrations.
                                </p>
                                <div className="grid gap-3 sm:grid-cols-2 pt-2 max-w-md">
                                    {[
                                        { icon: MapPin, label: 'Location', value: 'Cebu City, Philippines' },
                                        { icon: Code2, label: 'Focus', value: 'React, TypeScript, UI Systems' },
                                        { icon: Clock, label: 'Experience', value: '10+ Years' },
                                        { icon: CalendarDays, label: 'Availability', value: 'Mon-Fri, GMT+8' },
                                    ].map(({ icon: Icon, label, value }) => (
                                        <div
                                            key={label}
                                            className="bg-base-200 border border-base-300 rounded-xl p-4"
                                        >
                                            <div className="flex items-center gap-2 mb-1">
                                                <Icon className="h-3.5 w-3.5 text-primary" />
                                                <p className="text-xs uppercase tracking-wide text-base-content/50 font-medium">
                                                    {label}
                                                </p>
                                            </div>
                                            <p className="text-sm font-semibold">{value}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Work Experience */}
                <section className="bg-base-200">
                    <div className="container mx-auto px-4 sm:px-6 py-14">
                        <div className="mb-8 animate-fade-in-up">
                            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Career</p>
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Experience</h2>
                        </div>
                        <WorkExperience />
                    </div>
                </section>
            </div>
        </AppLayout>
    )
}

export default About
