import AppLayout from '../../layout/AppLayout'
import {
    ActionButton,
    CapabilityCard,
    CaseStudyCard,
    MetadataPill,
    SectionHeading,
} from '../../components/PortfolioElements'
import { BLOG_URL } from '../../constants/links'
import Contact from '../contact/Contact'
import Projects from '../projects/Projects'
import { DialogTitle, DialogDescription } from '@radix-ui/react-dialog'
import { Sheet, SheetContent, SheetTrigger } from '../../components/ui/sheet'
import { useState } from 'react'
import { Button } from '../../components/ui/button'

const asset = (name: string) => `/images/portfolio/${name}.svg`
const orbitLayers = [
    { name: 'orbit-outer', x: 34, y: 34 },
    { name: 'orbit-middle', x: 81, y: 81 },
    { name: 'orbit-inner', x: 127, y: 127 },
    { name: 'core', x: 163, y: 163 },
    { name: 'signal-product', x: 205, y: 26 },
    { name: 'signal-system', x: 382, y: 206 },
    { name: 'signal-system', x: 53, y: 317 },
    { name: 'signal-interface', x: 364, y: 342 },
]

function EngineeringSignal() {
    return (
        <div className="fm-signal-wrapper">
            <div
                className="fm-signal"
                role="img"
                aria-label="From first pixel to production: systems, interface, and delivery"
            >
                <div className="fm-signal-canvas">
                    {orbitLayers.map((layer, index) => (
                        <img key={index} src={asset(layer.name)} alt="" style={{ left: layer.x, top: layer.y }} />
                    ))}
                    <span className="fm-signal-monogram">FM</span>
                    <span className="fm-meta fm-signal-caption">
                        FROM FIRST PIXEL
                        <br />
                        TO PRODUCTION
                    </span>
                    <span className="fm-meta fm-signal-systems">SYSTEMS</span>
                    <span className="fm-meta fm-signal-interface">INTERFACE</span>
                    <span className="fm-meta fm-signal-delivery">DELIVERY</span>
                </div>
            </div>
        </div>
    )
}

function ContactFormLink() {
    const [open, setOpen] = useState(false)
    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button className="fm-text-link" variant="link">
                    Send a project brief ↗
                </Button>
            </SheetTrigger>
            <SheetContent className="fm-contact-form" data-theme="light">
                <DialogTitle className="sr-only">Send Frank a project brief</DialogTitle>
                <DialogDescription className="sr-only">
                    Share your project details using the contact form or book a discovery call.
                </DialogDescription>
                <Contact />
            </SheetContent>
        </Sheet>
    )
}

const Home = () => (
    <AppLayout>
        <main id="main" tabIndex={-1}>
            <section id="top" tabIndex={-1} className="fm-hero" aria-labelledby="hero-heading">
                <div className="fm-container">
                    <div className="fm-availability">
                        <MetadataPill>OPEN TO REMOTE SENIOR TEAMS</MetadataPill>
                        <p className="fm-meta">CAGAYAN DE ORO · GMT+8</p>
                        <p className="fm-meta">10+ YEARS IN PRODUCTION</p>
                    </div>
                    <div className="fm-hero-main">
                        <div className="fm-hero-copy">
                            <h1 id="hero-heading">
                                I build software
                                <br />
                                teams can trust.
                            </h1>
                            <p className="fm-callout">
                                I connect polished interfaces to reliable systems—and stay close to the product, the
                                team, and the details that make it ship.
                            </p>
                            <div className="fm-hero-actions">
                                <ActionButton href="#work">Explore selected work</ActionButton>
                                <a href="#approach">
                                    Get to know me <span aria-hidden="true">↓</span>
                                </a>
                            </div>
                            <p className="fm-meta fm-hero-proof">
                                PRODUCT THINKING · FRONTEND SYSTEMS · FULL-STACK DELIVERY
                            </p>
                        </div>
                        <EngineeringSignal />
                    </div>
                    <div className="fm-positioning fm-meta">
                        <p>SENIOR SOFTWARE ENGINEER</p>
                        <p>React · TypeScript · Node.js · Go</p>
                        <p>Collaborative by default. Accountable through release.</p>
                    </div>
                </div>
            </section>
            <section id="work" tabIndex={-1} className="fm-work" aria-labelledby="work-heading">
                <span id="projects" className="fm-anchor-alias" />
                <div className="fm-container">
                    <SectionHeading
                        id="work-heading"
                        marker="SELECTED WORK / 03"
                        intro="A few examples where the interface, the architecture, and the day-to-day workflow all had to work as one."
                    >
                        Products with real
                        <br />
                        constraints and users.
                    </SectionHeading>
                    <div className="fm-cases">
                        <CaseStudyCard
                            title="Grow With Me"
                            category="PRODUCT / FULL STACK"
                            summary="A pregnancy journey built for the moments between appointments: week-by-week visuals, voice memories, kick tracking, and a mood garden, backed by Supabase."
                            stack="Next.js 16 · TypeScript · Supabase · Tailwind CSS · Vitest"
                            repo="https://github.com/frank-mendez/grow-with-me"
                            live="https://www.growwithme.baby"
                        >
                            <div className="fm-preview-grow">
                                <div className="fm-journey">
                                    <p className="fm-meta">GROW WITH ME / JOURNEY OVERVIEW</p>
                                    <p className="fm-stat">Week 24</p>
                                    <p>Small moments, remembered.</p>
                                    <div className="fm-progress" aria-hidden="true">
                                        <span />
                                    </div>
                                </div>
                                <div className="fm-preview-panel fm-mood">
                                    <p className="fm-meta">MOOD GARDEN</p>
                                    <div className="fm-mood-markers" aria-hidden="true">
                                        <span />
                                        <span />
                                        <span />
                                        <span />
                                    </div>
                                    <p>Voice notes · kick tracking · a week at a time</p>
                                </div>
                            </div>
                        </CaseStudyCard>
                        <CaseStudyCard
                            title="MFK Lending"
                            category="FINTECH / WORKFLOW SYSTEM"
                            summary="Turned fragmented lending operations into one dependable workspace for loan schedules, e-signed contracts, automated reminders, partner funds, reporting, and bank reconciliation."
                            stack="Next.js · TypeScript · Supabase · TanStack Query · Tailwind CSS"
                            repo="https://github.com/frank-mendez/mfklending"
                            live="https://mfklending.vercel.app"
                        >
                            <div className="fm-preview-lending">
                                <div className="fm-operations">
                                    <p className="fm-meta">MFK LENDING / OPERATIONS</p>
                                    <p className="fm-preview-title">
                                        One view.
                                        <br />
                                        Every step.
                                    </p>
                                    <p>A clearer path from application to reconciliation.</p>
                                </div>
                                <div className="fm-preview-panel fm-workflow">
                                    <p className="fm-meta">LENDING WORKFLOW</p>
                                    {[
                                        'Loan schedule',
                                        'E-signed contract',
                                        'Borrower reminders',
                                        'Bank reconciliation',
                                    ].map((item) => (
                                        <div className="fm-workflow-row" key={item}>
                                            <span aria-hidden="true" className="fm-status-dot" />
                                            <span>{item}</span>
                                            <span className="fm-meta fm-muted">READY</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </CaseStudyCard>
                        <CaseStudyCard
                            title="PulseChat"
                            category="REAL-TIME / SYSTEM DESIGN"
                            summary="A typed monorepo for chat beyond the demo: shared Zod contracts, secure sessions, reconnect behavior, and a clear path from local testing to PostgreSQL and distributed messaging."
                            stack="React · Fastify · WebSockets · PostgreSQL · Drizzle · Turborepo"
                            repo="https://github.com/frank-mendez/pulse-chat-"
                        >
                            <div className="fm-preview-chat">
                                <div className="fm-preview-panel fm-conversation">
                                    <p className="fm-meta"># product-room</p>
                                    <p>Reconnect path is looking good.</p>
                                    <p>Shared contract is in.</p>
                                    <p className="fm-muted">Message the team…</p>
                                </div>
                                <div className="fm-architecture">
                                    <p className="fm-meta">DESIGNED TO EVOLVE</p>
                                    <p>SESSION → CONTRACTS → PERSISTENCE</p>
                                    <div className="fm-architecture-nodes">
                                        {['AUTH', 'ZOD', 'DB'].map((node) => (
                                            <span className="fm-meta" key={node}>
                                                {node}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </CaseStudyCard>
                    </div>
                    <details className="fm-more-projects">
                        <summary>Explore more projects ↗</summary>
                        <Projects />
                    </details>
                </div>
            </section>
            <section id="approach" tabIndex={-1} className="fm-approach" aria-labelledby="approach-heading">
                <span id="about" className="fm-anchor-alias" />
                <span id="skills" className="fm-anchor-alias" />
                <div className="fm-container">
                    <SectionHeading
                        id="approach-heading"
                        marker="HOW I SHOW UP"
                        intro="I care about the quality of the code and the quality of the collaboration that gets it shipped."
                    >
                        Thoughtful in the details.
                        <br />
                        Useful in the room.
                    </SectionHeading>
                    <div className="fm-capabilities">
                        <CapabilityCard index="01" title="Own the whole slice">
                            Move from interface decisions to API contracts while keeping one user goal in view.
                        </CapabilityCard>
                        <CapabilityCard index="02" title="Leave room to grow">
                            Use clear types, shared patterns, useful tests, and handoffs that make change easier.
                        </CapabilityCard>
                        <CapabilityCard index="03" title="Pull the team forward">
                            Bring options, ask early, share context, and take ownership through release.
                        </CapabilityCard>
                    </div>
                </div>
            </section>
            <section id="experience" tabIndex={-1} className="fm-experience" aria-labelledby="experience-heading">
                <div className="fm-container">
                    <SectionHeading
                        id="experience-heading"
                        marker="EXPERIENCE"
                        intro="Currently at Virtido AG, supporting Swiss clients with product development and delivery. Previously at Arcanys and teams spanning fintech, recruiting, and industrial software."
                    >
                        A decade of shipped
                        <br />
                        software.
                    </SectionHeading>
                    <ol className="fm-timeline">
                        {[
                            ['2024 — NOW', 'Virtido AG', 'Swiss clients · Enterprise SaaS · React · Node.js · AWS'],
                            ['2021 — 2024', 'Arcanys', 'Lease management experiences and full-stack product features'],
                            [
                                '2014 — 2021',
                                'Earlier chapters',
                                'Aerapass · Empower Associates · Heaviside Group · Arnlea Systems',
                            ],
                        ].map(([period, company, description]) => (
                            <li key={company}>
                                <p className="fm-meta">{period}</p>
                                <div>
                                    <h3>{company}</h3>
                                    <p>{description}</p>
                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </section>
            <section id="contact" tabIndex={-1} className="fm-contact" aria-labelledby="contact-heading">
                <div className="fm-container">
                    <div className="fm-contact-copy">
                        <p className="fm-meta">LET’S BUILD SOMETHING USEFUL</p>
                        <h2 id="contact-heading">
                            Build the next
                            <br />
                            useful thing.
                        </h2>
                        <p className="fm-intro">
                            I’m open to remote senior engineering teams that value ownership, thoughtful product work,
                            and steady collaboration.
                        </p>
                        <ActionButton href="mailto:frankmendezresources@gmail.com">Email Frank</ActionButton>
                    </div>
                    <div className="fm-contact-details">
                        <MetadataPill>CAGAYAN DE ORO · GMT+8</MetadataPill>
                        <a href="mailto:frankmendezresources@gmail.com">frankmendezresources@gmail.com</a>
                        <a
                            href="https://www.linkedin.com/in/frank-mendez-47b62090/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            linkedin.com/in/frank-mendez-47b62090
                        </a>
                        <a href={BLOG_URL} target="_blank" rel="noopener noreferrer">
                            thepracticalengineer.online
                        </a>
                        <ContactFormLink />
                    </div>
                </div>
            </section>
        </main>
    </AppLayout>
)
export default Home
