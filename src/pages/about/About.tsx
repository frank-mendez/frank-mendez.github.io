import AppLayout from '../../layout/AppLayout.tsx'
import WorkExperience from '../../components/WorkExperience.tsx'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Separator } from '../../components/ui/separator'
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
                            <div className="space-y-5">
                                <div>
                                    <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">
                                        About
                                    </p>
                                    <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">Frank R. Mendez</h1>
                                </div>
                                <p className="text-base-content/70 text-base leading-relaxed max-w-2xl">
                                    Frontend-focused engineer with 10+ years of experience delivering polished,
                                    user-centered products. Based in Cebu City, Philippines, with a background in both
                                    frontend and backend development.
                                </p>
                                <p className="text-base-content/70 text-base leading-relaxed max-w-2xl">
                                    I specialize in building modern React applications with scalable UI systems,
                                    thoughtful UX, and clean, maintainable code. I value collaboration, clear
                                    communication, and pragmatic engineering decisions.
                                </p>
                                <div className="grid gap-3 sm:grid-cols-2 pt-2 max-w-md">
                                    {[
                                        { icon: MapPin, label: 'Location', value: 'Cebu City, Philippines' },
                                        { icon: Code2, label: 'Focus', value: 'React, TypeScript, UI Systems' },
                                        { icon: Clock, label: 'Experience', value: '10+ Years' },
                                        { icon: CalendarDays, label: 'Availability', value: 'Mon–Fri, GMT+8' },
                                    ].map(({ icon: Icon, label, value }) => (
                                        <Card key={label} className="bg-base-200 border-base-content/5">
                                            <CardContent className="p-4">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <Icon className="h-3.5 w-3.5 text-primary" />
                                                    <p className="text-xs uppercase tracking-wide text-base-content/50 font-medium">
                                                        {label}
                                                    </p>
                                                </div>
                                                <p className="text-sm font-semibold">{value}</p>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Summary + Strengths */}
                <section className="bg-base-200">
                    <div className="container mx-auto px-4 sm:px-6 py-14">
                        <div className="grid gap-6 lg:grid-cols-2">
                            <Card className="bg-base-100 border-base-content/10">
                                <CardHeader>
                                    <CardTitle>Professional Summary</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3 text-base-content/70 text-sm leading-relaxed">
                                    <p>
                                        I've contributed to startups and enterprise teams, delivering web platforms,
                                        dashboards, and customer-facing experiences. My approach blends strong front-end
                                        craftsmanship with a practical understanding of backend systems and deployment
                                        workflows.
                                    </p>
                                    <p>
                                        I care about building products that are reliable, accessible, and maintainable,
                                        while keeping a sharp focus on business outcomes and end-user needs.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card className="bg-base-100 border-base-content/10">
                                <CardHeader>
                                    <CardTitle>Core Strengths</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2.5 text-sm text-base-content/70">
                                        {[
                                            'Design systems, component libraries, and responsive UI architecture',
                                            'TypeScript-driven development and scalable front-end patterns',
                                            'Cross-functional collaboration with product and design teams',
                                            'Performance, accessibility, and quality-focused delivery',
                                        ].map((strength) => (
                                            <li key={strength} className="flex items-start gap-2">
                                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                                {strength}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Work Experience */}
                <section className="bg-base-200">
                    <div className="container mx-auto px-4 sm:px-6 py-14">
                        <div className="mb-8 text-center">
                            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Career</p>
                            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Work Experience</h2>
                        </div>
                        <Separator className="mb-10" />
                        <WorkExperience />
                    </div>
                </section>
            </div>
        </AppLayout>
    )
}

export default About
