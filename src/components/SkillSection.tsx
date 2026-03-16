import { ReactNode } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'

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
            <div className="container mx-auto px-4 sm:px-6 py-16">
                <div className="mx-auto max-w-3xl text-center mb-10">
                    {eyebrow && (
                        <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">{eyebrow}</p>
                    )}
                    <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">{title}</h2>
                    <p className="mt-3 text-base-content/60 text-sm sm:text-base">{description}</p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    {groups.map((group) => (
                        <Card
                            key={group.title}
                            className="bg-base-100 border-base-content/10 hover:shadow-md transition-shadow"
                        >
                            <CardHeader className="pb-3">
                                <CardTitle className="flex items-center gap-2 text-base">
                                    {group.icon && <span className="text-primary">{group.icon}</span>}
                                    {group.title}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-1.5">
                                    {group.items.map((item) => (
                                        <Badge key={item} variant="secondary" className="text-xs font-normal">
                                            {item}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default SkillSection
