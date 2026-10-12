import AppLayout from '../../layout/AppLayout'
import FeaturedProjects from '../../components/FeaturedProjects'
import ContactFormLink from '../../components/ContactFormLink'
import Projects from '../projects/Projects'

const Home = () => (
    <AppLayout>
        <main id="main" tabIndex={-1}>
            <section id="top" tabIndex={-1} className="pf-hero" aria-labelledby="hero-heading">
                <div className="pf-wrap">
                    <div className="pf-hero-grid">
                        <div>
                            <span className="pf-eyebrow">Senior software engineer</span>
                            <h1 id="hero-heading">
                                Hi, I’m <span>Frank.</span>
                                <br />I build with purpose.
                            </h1>
                            <p className="pf-hero-sub">
                                Thoughtful interfaces.
                                <br />
                                Dependable systems.
                            </p>
                            <p className="pf-intro pf-muted">
                                10+ years building React applications, design systems, and the backend APIs that make
                                them work.
                            </p>
                            <div className="pf-actions">
                                <a className="pf-button pf-primary" href="#work">
                                    View selected work <span aria-hidden="true">↗</span>
                                </a>
                                <a className="pf-button" href="https://github.com/frank-mendez">
                                    Explore GitHub <span aria-hidden="true">↗</span>
                                </a>
                            </div>
                            <div className="pf-stack-inline">
                                <span className="pf-caption">TECHNOLOGIES I WORK WITH</span>
                                <div className="pf-chips">
                                    <span className="pf-chip">React</span>
                                    <span className="pf-chip">TypeScript</span>
                                    <span className="pf-chip">Next.js</span>
                                    <span className="pf-chip">Node.js</span>
                                    <span className="pf-chip">AWS</span>
                                </div>
                            </div>
                        </div>
                        <div className="pf-portrait-stage">
                            <img
                                className="pf-archipelago"
                                src="/images/portfolio/philippines.svg"
                                alt=""
                                aria-hidden="true"
                            />
                            <img src="/images/frank2.jpg" alt="Frank Mendez" width="285" height="351" />
                            <div className="pf-code-card">
                                <div className="pf-top">
                                    engineering.ts <span className="pf-green">●</span>
                                </div>
                                <span className="pf-purple">const</span>
                                {' approach = {'}
                                <br />
                                &nbsp;interfaces: <span className="pf-gold">'thoughtful'</span>,<br />
                                &nbsp;systems: <span className="pf-gold">'dependable'</span>,<br />
                                &nbsp;delivery: <span className="pf-gold">'with care'</span>
                                <br />
                                {'};'}
                            </div>
                            <span className="pf-location">
                                Fulltime husband to Rhoie and Fulltime daddy to Fleurhora
                            </span>
                        </div>
                    </div>
                    <div className="pf-trustline">
                        <span>
                            Currently building at <b>Virtido AG</b>
                        </span>
                        <span>Frontend architecture · Full-stack TypeScript · Product delivery</span>
                    </div>
                </div>
            </section>
            <section className="pf-section" id="about" tabIndex={-1}>
                <span id="approach" className="pf-anchor-alias" tabIndex={-1} />
                <div className="pf-wrap pf-about-grid">
                    <div>
                        <span className="pf-eyebrow">About me</span>
                        <h2>
                            Practical Execution.
                            <br />
                            Pragmatic Decisions.
                        </h2>
                        <p className="pf-muted">
                            I’m a software engineer based in Cagayan de Oro, Philippines. I turn complex workflows into
                            useful interfaces and reliable applications.
                        </p>
                        <p className="pf-muted">
                            Beyond the code, I’m proudly Filipino, a husband, a dad to a daughter, and a cat dad to
                            four. I’m the youngest in a family of six and an avid gamer who spends much of his free time
                            playing. Red Dead Redemption 2 is my all-time favorite.
                        </p>
                        <a href="#experience" className="pf-text-link">
                            Explore my experience <span aria-hidden="true">→</span>
                        </a>
                    </div>
                    <div className="pf-facts">
                        <div className="pf-fact">
                            <strong>
                                <span className="pf-icon">↗</span>10+ years
                            </strong>
                            <small>Software development experience</small>
                        </div>
                        <div className="pf-fact">
                            <strong>
                                <span className="pf-icon">⌘</span>Full stack
                            </strong>
                            <small>From interface to API</small>
                        </div>
                        <div className="pf-fact">
                            <strong>
                                <span className="pf-icon">◇</span>Product focus
                            </strong>
                            <small>Clear, useful workflows</small>
                        </div>
                        <div className="pf-fact">
                            <strong>
                                <span className="pf-icon">◎</span>Philippines
                            </strong>
                            <small>Cagayan de Oro · UTC+8</small>
                        </div>
                    </div>
                </div>
                <div className="pf-wrap pf-reading" aria-labelledby="reading-heading">
                    <div className="pf-section-head">
                        <div>
                            <span className="pf-eyebrow">Always learning</span>
                            <h3 id="reading-heading">Books &amp; reading materials.</h3>
                        </div>
                        <p className="pf-muted">Ideas on software craft, system design, and how teams deliver.</p>
                    </div>
                    <ul className="pf-reading-books">
                        <li>
                            <span className="pf-reading-number" aria-hidden="true">
                                01
                            </span>
                            <div>
                                <h4>Clean Code</h4>
                                <p>Software craftsmanship</p>
                            </div>
                        </li>
                        <li>
                            <span className="pf-reading-number" aria-hidden="true">
                                02
                            </span>
                            <div>
                                <h4>Designing Data-Intensive Applications</h4>
                                <p>Martin Kleppmann · Distributed systems</p>
                            </div>
                        </li>
                        <li>
                            <span className="pf-reading-number" aria-hidden="true">
                                03
                            </span>
                            <div>
                                <h4>Designing Web APIs: Building APIs That Developers Love</h4>
                                <p>API design &amp; developer experience</p>
                            </div>
                        </li>
                        <li>
                            <span className="pf-reading-number" aria-hidden="true">
                                04
                            </span>
                            <div>
                                <h4>The Phoenix Project</h4>
                                <p>DevOps &amp; team delivery</p>
                            </div>
                        </li>
                    </ul>
                    <div className="pf-reading-online">
                        <span>From the community</span>
                        <a href="https://www.thepracticalengineer.online/" target="_blank" rel="noopener noreferrer">
                            The Practical Engineer <span aria-hidden="true">↗</span>
                        </a>
                        <a href="https://medium.com/" target="_blank" rel="noopener noreferrer">
                            Medium <span aria-hidden="true">↗</span>
                        </a>
                        <a href="https://dev.to/" target="_blank" rel="noopener noreferrer">
                            DEV Community <span aria-hidden="true">↗</span>
                        </a>
                    </div>
                </div>
            </section>
            <section className="pf-section" id="skills" tabIndex={-1}>
                <div className="pf-wrap">
                    <div className="pf-section-head">
                        <div>
                            <span className="pf-eyebrow">Technical toolkit</span>
                            <h2>The tools behind the work.</h2>
                        </div>
                        <p className="pf-muted">
                            A practical stack for building, testing, and shipping dependable products.
                        </p>
                    </div>
                    <div className="pf-skills">
                        <div className="pf-skill">
                            <h3>01 · Frontend</h3>
                            <ul className="pf-tech-list">
                                <li>
                                    <img src="/images/tech/react.svg" alt="" width="20" height="20" loading="lazy" />
                                    <span>React</span>
                                </li>
                                <li>
                                    <img
                                        src="/images/tech/typescript.svg"
                                        alt=""
                                        width="20"
                                        height="20"
                                        loading="lazy"
                                    />
                                    <span>TypeScript</span>
                                </li>
                                <li>
                                    <img
                                        src="/images/tech/nextdotjs.svg"
                                        alt=""
                                        width="20"
                                        height="20"
                                        loading="lazy"
                                    />
                                    <span>Next.js</span>
                                </li>
                                <li>
                                    <img
                                        src="/images/tech/tailwindcss.svg"
                                        alt=""
                                        width="20"
                                        height="20"
                                        loading="lazy"
                                    />
                                    <span>Tailwind CSS</span>
                                </li>
                                <li>
                                    <img src="/images/tech/zustand.svg" alt="" width="20" height="20" loading="lazy" />
                                    <span>Zustand</span>
                                </li>
                                <li>
                                    <img
                                        src="/images/tech/reactquery.svg"
                                        alt=""
                                        width="20"
                                        height="20"
                                        loading="lazy"
                                    />
                                    <span>TanStack Query</span>
                                </li>
                            </ul>
                        </div>
                        <div className="pf-skill">
                            <h3>02 · Backend</h3>
                            <ul className="pf-tech-list">
                                <li>
                                    <img
                                        src="/images/tech/nodedotjs.svg"
                                        alt=""
                                        width="20"
                                        height="20"
                                        loading="lazy"
                                    />
                                    <span>Node.js</span>
                                </li>
                                <li>
                                    <img src="/images/tech/nestjs.svg" alt="" width="20" height="20" loading="lazy" />
                                    <span>NestJS</span>
                                </li>
                                <li>
                                    <img
                                        src="/images/tech/postgresql.svg"
                                        alt=""
                                        width="20"
                                        height="20"
                                        loading="lazy"
                                    />
                                    <span>PostgreSQL</span>
                                </li>
                                <li>
                                    <img src="/images/tech/supabase.svg" alt="" width="20" height="20" loading="lazy" />
                                    <span>Supabase</span>
                                </li>
                                <li>
                                    <img src="/images/tech/mongodb.svg" alt="" width="20" height="20" loading="lazy" />
                                    <span>MongoDB</span>
                                </li>
                            </ul>
                        </div>
                        <div className="pf-skill">
                            <h3>03 · Cloud &amp; delivery</h3>
                            <ul className="pf-tech-list">
                                <li>
                                    <img
                                        src="/images/tech/amazonwebservices.svg"
                                        alt=""
                                        width="20"
                                        height="20"
                                        loading="lazy"
                                    />
                                    <span>AWS</span>
                                </li>
                                <li>
                                    <img src="/images/tech/docker.svg" alt="" width="20" height="20" loading="lazy" />
                                    <span>Docker</span>
                                </li>
                                <li>
                                    <img
                                        src="/images/tech/githubactions.svg"
                                        alt=""
                                        width="20"
                                        height="20"
                                        loading="lazy"
                                    />
                                    <span>GitHub Actions</span>
                                </li>
                                <li>
                                    <img src="/images/tech/azure.svg" alt="" width="20" height="20" loading="lazy" />
                                    <span>Azure</span>
                                </li>
                            </ul>
                        </div>
                        <div className="pf-skill">
                            <h3>04 · Testing</h3>
                            <ul className="pf-tech-list">
                                <li>
                                    <img src="/images/tech/vitest.svg" alt="" width="20" height="20" loading="lazy" />
                                    <span>Vitest</span>
                                </li>
                                <li>
                                    <img src="/images/tech/jest.svg" alt="" width="20" height="20" loading="lazy" />
                                    <span>Jest</span>
                                </li>
                                <li>
                                    <img src="/images/tech/cypress.svg" alt="" width="20" height="20" loading="lazy" />
                                    <span>Cypress</span>
                                </li>
                                <li>
                                    <img
                                        src="/images/tech/testinglibrary.svg"
                                        alt=""
                                        width="20"
                                        height="20"
                                        loading="lazy"
                                    />
                                    <span>Testing Library</span>
                                </li>
                                <li>
                                    <img
                                        src="/images/tech/playwright.svg"
                                        alt=""
                                        width="20"
                                        height="20"
                                        loading="lazy"
                                    />
                                    <span>Playwright</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pf-section" id="work" tabIndex={-1}>
                <div className="pf-wrap">
                    <div className="pf-section-head">
                        <div>
                            <span className="pf-eyebrow">Featured projects</span>
                            <h2>Selected work.</h2>
                        </div>
                        <p className="pf-muted">Business workflows, publishing tools, and frontend experiences.</p>
                    </div>
                    <FeaturedProjects />
                    <div className="pf-support">
                        <p>More engineering explorations</p>
                        <div className="pf-support-links">
                            <a href="https://github.com/frank-mendez/grow-with-me">Grow With Me ↗</a>
                            <a href="https://github.com/frank-mendez/chatmesh">Chatmesh ↗</a>
                            <a href="https://github.com/frank-mendez/pulse-chat-">Pulse Chat ↗</a>
                            <a href="https://github.com/frank-mendez/food-delivery-observability">
                                Food Delivery Observability ↗
                            </a>
                        </div>
                    </div>
                    <details className="pf-archive">
                        <summary>Explore all projects</summary>
                        <Projects />
                    </details>
                </div>
            </section>
            <section className="pf-section" id="experience" tabIndex={-1}>
                <div className="pf-wrap">
                    <div className="pf-section-head">
                        <div>
                            <span className="pf-eyebrow">Recent experience</span>
                            <h2>Built alongside good teams.</h2>
                        </div>
                    </div>
                    <div className="pf-career">
                        <article className="pf-job">
                            <div className="pf-date">SEPTEMBER 2024 — PRESENT</div>
                            <div className="pf-company-heading">
                                <span className="pf-company-logo pf-company-logo-virtido">
                                    <img
                                        src="/images/companies/virtido.svg"
                                        alt=""
                                        width="96"
                                        height="40"
                                        loading="lazy"
                                    />
                                </span>
                                <h3>Virtido AG</h3>
                            </div>
                            <p>
                                Supporting Swiss clients with software development and product delivery using React,
                                TypeScript, Node.js, and AWS.
                            </p>
                        </article>
                        <article className="pf-job">
                            <div className="pf-date">OCTOBER 2021 — SEPTEMBER 2024</div>
                            <div className="pf-company-heading">
                                <span className="pf-company-logo pf-company-logo-arcanys">
                                    <img
                                        src="/images/companies/arcanys.png"
                                        alt=""
                                        width="96"
                                        height="40"
                                        loading="lazy"
                                    />
                                </span>
                                <h3>Arcanys</h3>
                            </div>
                            <p>
                                Delivering lease-management experiences and full-stack features for global clients with
                                React, TypeScript, and AWS.
                            </p>
                        </article>
                        <article className="pf-job">
                            <div className="pf-date">FEBRUARY 2021 — SEPTEMBER 2021</div>
                            <div className="pf-company-heading">
                                <span className="pf-company-logo pf-company-logo-aerapass">
                                    <img
                                        src="/images/companies/aerapass.svg"
                                        alt=""
                                        width="110"
                                        height="40"
                                        loading="lazy"
                                    />
                                </span>
                                <h3>Aerapass</h3>
                            </div>
                            <p>
                                Built fintech features including KYC workflows and multi-currency transactions within
                                Scrum teams.
                            </p>
                        </article>
                        <article className="pf-job">
                            <div className="pf-date">FEBRUARY 2020 — FEBRUARY 2021</div>
                            <div className="pf-company-heading">
                                <span className="pf-company-initials" aria-hidden="true">
                                    EA
                                </span>
                                <h3>Empower Associates</h3>
                            </div>
                            <p>
                                Rebuilt the recruiter platform UI and integrated REST APIs for candidate data workflows.
                            </p>
                        </article>
                    </div>
                </div>
            </section>
            <section className="pf-section" id="contact" tabIndex={-1}>
                <div className="pf-wrap pf-contact">
                    <div>
                        <span className="pf-eyebrow">Get in touch</span>
                        <h2>Have something in mind?</h2>
                        <p>Let’s talk about your product, your team, and the software you want to build.</p>
                    </div>
                    <a className="pf-button pf-primary" href="mailto:frankmendezresources@gmail.com">
                        Start a conversation <span aria-hidden="true">↗</span>
                    </a>
                    <ContactFormLink />
                </div>
            </section>
        </main>
    </AppLayout>
)
export default Home
