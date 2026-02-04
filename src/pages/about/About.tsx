import AppLayout from '../../layout/AppLayout.tsx'
import WorkExperience from '../../components/WorkExperience.tsx'

const About = () => {
    return (
        <AppLayout>
            <div className="font-dm-sans">
                <section className="bg-base-100">
                    <div className="container mx-auto px-6 py-16">
                        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
                            <div className="flex justify-center">
                                <img
                                    className="mask shadow-2xl shadow-black"
                                    alt="Frank"
                                    width={320}
                                    height={320}
                                    src="/images/frank2.jpg"
                                />
                            </div>
                            <div className="space-y-4">
                                <p className="text-sm uppercase tracking-[0.2em] text-primary">About</p>
                                <h1 className="text-4xl md:text-5xl font-bold">Frank R. Mendez</h1>
                                <p className="text-base text-base-content/80">
                                    Frontend-focused engineer with 10+ years of experience delivering polished,
                                    user-centered products. Based in Cebu City, Philippines, with a background in both
                                    frontend and backend development.
                                </p>
                                <p className="text-base text-base-content/80">
                                    I specialize in building modern React applications with scalable UI systems,
                                    thoughtful UX, and clean, maintainable code. I value collaboration, clear
                                    communication, and pragmatic engineering decisions.
                                </p>
                                <div className="grid gap-4 pt-2 sm:grid-cols-2">
                                    <div className="card bg-base-200 shadow">
                                        <div className="card-body p-4">
                                            <p className="text-xs uppercase tracking-wide text-base-content/60">Location</p>
                                            <p className="text-sm font-semibold">Cebu City, Philippines</p>
                                        </div>
                                    </div>
                                    <div className="card bg-base-200 shadow">
                                        <div className="card-body p-4">
                                            <p className="text-xs uppercase tracking-wide text-base-content/60">Focus</p>
                                            <p className="text-sm font-semibold">React, TypeScript, UI Systems</p>
                                        </div>
                                    </div>
                                    <div className="card bg-base-200 shadow">
                                        <div className="card-body p-4">
                                            <p className="text-xs uppercase tracking-wide text-base-content/60">Experience</p>
                                            <p className="text-sm font-semibold">10+ Years</p>
                                        </div>
                                    </div>
                                    <div className="card bg-base-200 shadow">
                                        <div className="card-body p-4">
                                            <p className="text-xs uppercase tracking-wide text-base-content/60">Availability</p>
                                            <p className="text-sm font-semibold">Mon–Fri, GMT+8</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-base-200">
                    <div className="container mx-auto px-6 py-14">
                        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Professional summary</h2>
                                    <p className="text-base-content/80">
                                        I’ve contributed to startups and enterprise teams, delivering web platforms,
                                        dashboards, and customer-facing experiences. My approach blends strong
                                        front-end craftsmanship with a practical understanding of backend systems and
                                        deployment workflows.
                                    </p>
                                    <p className="text-base-content/80">
                                        I care about building products that are reliable, accessible, and maintainable,
                                        while keeping a sharp focus on business outcomes and end-user needs.
                                    </p>
                                </div>
                            </div>
                            <div className="card bg-base-100 shadow-xl">
                                <div className="card-body">
                                    <h2 className="card-title">Core strengths</h2>
                                    <ul className="list-disc pl-5 text-base-content/80 space-y-2">
                                        <li>Design systems, component libraries, and responsive UI architecture</li>
                                        <li>TypeScript-driven development and scalable front-end patterns</li>
                                        <li>Cross-functional collaboration with product and design teams</li>
                                        <li>Performance, accessibility, and quality-focused delivery</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-base-200">
                    <div className="container mx-auto px-6 flex flex-col gap-6 items-center py-10 justify-between text-center">
                        <h2 className="text-4xl font-bold">Work Experience</h2>
                        <WorkExperience />
                    </div>
                </section>
            </div>
        </AppLayout>
    )
}

export default About
