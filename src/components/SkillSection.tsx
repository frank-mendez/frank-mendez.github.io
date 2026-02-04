import { ReactNode } from 'react'

export type SkillGroup = {
    title: string
    items: string[]
    icon?: ReactNode
}

type SkillSectionProps = {
    eyebrow?: string
    title: string
    description: string
    groups: SkillGroup[]
    className?: string
}

const SkillSection = ({ eyebrow, title, description, groups, className }: SkillSectionProps) => {
    return (
        <section className={className ?? 'bg-base-200'}>
            <div className="container mx-auto px-6 py-14">
                <div className="mx-auto max-w-3xl text-center">
                    {eyebrow ? (
                        <p className="text-sm uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
                    ) : null}
                    <h2 className="mt-3 text-4xl font-bold">{title}</h2>
                    <p className="mt-4 text-base-content/70">{description}</p>
                </div>

                <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                    {groups.map((group) => (
                        <div key={group.title} className="card bg-base-100 shadow-xl">
                            <div className="card-body gap-4">
                                <div className="flex items-center gap-3 text-primary">
                                    {group.icon ? <span className="text-xl">{group.icon}</span> : null}
                                    <h3 className="text-lg font-semibold">{group.title}</h3>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {group.items.map((item) => (
                                        <span key={item} className="badge badge-ghost">
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillSection
