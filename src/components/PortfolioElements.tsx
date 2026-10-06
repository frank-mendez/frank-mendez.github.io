import type { ReactNode } from 'react'
import { Button } from './ui/button'
import { trackEvent } from '../services/analyticsService'

export function ActionButton({ href, children }: { href: string; children: ReactNode }) {
    return (
        <Button asChild className="fm-action">
            <a href={href}>
                {children}
                <span aria-hidden="true">↗</span>
            </a>
        </Button>
    )
}

export function MetadataPill({ children }: { children: ReactNode }) {
    return <span className="fm-meta fm-pill">{children}</span>
}

export function SectionHeading({
    id,
    marker,
    children,
    intro,
}: {
    id: string
    marker: string
    children: ReactNode
    intro: string
}) {
    return (
        <div className="fm-section-heading">
            <div>
                <p className="fm-meta">{marker}</p>
                <h2 id={id}>{children}</h2>
            </div>
            <p className="fm-intro">{intro}</p>
        </div>
    )
}

export function CaseStudyCard({
    title,
    category,
    summary,
    stack,
    repo,
    live,
    children,
}: {
    title: string
    category: string
    summary: string
    stack: string
    repo: string
    live?: string
    children: ReactNode
}) {
    return (
        <article className="fm-case">
            <div className="fm-preview" aria-label={`${title} product illustration`}>
                {children}
            </div>
            <div className="fm-case-details">
                <p className="fm-meta">{category}</p>
                <h3>
                    <a
                        href={repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => trackEvent('project_click', { project: title, destination: repo })}
                    >
                        {title}
                        <span className="fm-project-arrow" aria-hidden="true">
                            {' '}
                            ↗
                        </span>
                    </a>
                </h3>
                <p className="fm-summary">{summary}</p>
                <div className="fm-case-bottom">
                    <p className="fm-meta fm-muted">{stack}</p>
                    {live && (
                        <a
                            href={live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="fm-live"
                            aria-label={`Visit ${title}`}
                            onClick={() => trackEvent('project_click', { project: title, destination: live })}
                        >
                            Visit product ↗
                        </a>
                    )}
                </div>
            </div>
        </article>
    )
}

export function CapabilityCard({ index, title, children }: { index: string; title: string; children: ReactNode }) {
    return (
        <article className="fm-capability">
            <p className="fm-meta">{index} / 03</p>
            <h3>{title}</h3>
            <p>{children}</p>
        </article>
    )
}
