import { ReactNode } from 'react'

type SocialIconLinkProps = {
    href: string
    label: string
    children: ReactNode
}

const SocialIconLink = ({ href, label, children }: SocialIconLinkProps) => {
    return (
        <a target="_blank" rel="noopener noreferrer" href={href} aria-label={label} className="rounded-full p-2">
            {children}
        </a>
    )
}

export default SocialIconLink
