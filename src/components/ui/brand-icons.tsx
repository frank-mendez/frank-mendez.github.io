import { siGithub } from 'simple-icons'

type BrandIconProps = {
    className?: string
}

const BrandIcon = ({ className, path }: BrandIconProps & { path: string }) => (
    <svg
        aria-hidden="true"
        className={className}
        fill="currentColor"
        focusable="false"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d={path} />
    </svg>
)

const GithubIcon = (props: BrandIconProps) => <BrandIcon path={siGithub.path} {...props} />

export { GithubIcon }
