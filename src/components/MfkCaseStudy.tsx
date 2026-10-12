import { DialogTitle, DialogDescription } from '@radix-ui/react-dialog'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'
export default function MfkCaseStudy() {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button className="pf-text-link" variant="link">
                    View case study ↗
                </Button>
            </SheetTrigger>
            <SheetContent className="pf-case-dialog">
                <DialogTitle className="sr-only">MFK Lending case study</DialogTitle>
                <DialogDescription className="sr-only">
                    Lending workflows, implementation details, and repository.
                </DialogDescription>
                <section className="pf-case-hero pf-wrap">
                    <h2>MFK Lending</h2>
                    <p className="pf-lead">Bringing lending operations into a clearer, shared workflow.</p>
                    <div className="pf-case-overview">
                        <p>
                            An internal business application for managing co-op contributions, borrower records, loan
                            schedules, repayments, reminders, and contracts.
                        </p>
                        <div>
                            <span className="pf-eyebrow">Stack</span>
                            <p>
                                Next.js · TypeScript · Supabase
                                <br />
                                Tailwind CSS · Sentry
                            </p>
                        </div>
                    </div>
                    <a className="pf-button pf-primary" href="https://github.com/frank-mendez/mfklending">
                        View repository ↗
                    </a>
                </section>
                <div className="pf-wrap">
                    <div className="pf-case-art pf-art">
                        <div>
                            <span className="pf-eyebrow">Business software</span>
                            <h2>
                                Less coordination.
                                <br />
                                More operational clarity.
                            </h2>
                        </div>
                        <div className="pf-art pf-mfk" aria-label="Conceptual project illustration">
                            <div className="pf-browser">
                                <div className="pf-browser-top">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </div>
                                <div className="pf-tiny">Lending overview</div>
                                <div className="pf-mock-stats">
                                    <div>
                                        <i></i>
                                        <i></i>
                                    </div>
                                    <div>
                                        <i></i>
                                        <i></i>
                                    </div>
                                    <div>
                                        <i></i>
                                        <i></i>
                                    </div>
                                </div>
                                <div className="pf-mock-lines">
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                    <i></i>
                                </div>
                            </div>
                            <span className="pf-art-label">CONCEPT UI</span>
                        </div>
                    </div>
                </div>
                <section className="pf-section">
                    <div className="pf-wrap pf-case-layout">
                        <span className="pf-eyebrow">The problem</span>
                        <div>
                            <h2>A shared view of the essentials.</h2>
                            <p>
                                Contributions, balances, repayment schedules, and contracts need a shared place to live.
                                The project brings those workflows together for a Filipino co-op lending business.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="pf-section">
                    <div className="pf-wrap">
                        <span className="pf-eyebrow">The system</span>
                        <div className="pf-case-features">
                            <div>
                                <h3>Track the essentials</h3>
                                <p>Partner contributions, borrower records, and loan repayment schedules.</p>
                            </div>
                            <div>
                                <h3>Automate follow-up</h3>
                                <p>Email and SMS reminders, contract generation, and e-signature workflows.</p>
                            </div>
                            <div>
                                <h3>Support the transition</h3>
                                <p>CSV import previews and verification before enabling loan reminders.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pf-section">
                    <div className="pf-wrap pf-contact">
                        <div>
                            <span className="pf-eyebrow">Engineering details</span>
                            <h2>Built for dependable workflows.</h2>
                            <p>
                                Currency stored in centavos, timestamps stored in UTC, and Sentry error and performance
                                monitoring.
                            </p>
                        </div>
                    </div>
                </section>
            </SheetContent>
        </Sheet>
    )
}
