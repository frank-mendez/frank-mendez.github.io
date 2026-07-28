import { BriefcaseBusiness, Mail } from 'lucide-react'
import { BLOG_URL } from '../constants/links'
import { Separator } from './ui/separator'
import { GithubIcon } from './ui/brand-icons'

const Footer = () => {
    return (
        <footer className="bg-base-200 border-t border-base-300">
            <div className="container mx-auto px-4 sm:px-6 py-10">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {/* Col 1: Brand */}
                    <div className="space-y-3">
                        <p className="font-semibold text-base-content">Frank Mendez</p>
                        <p className="text-sm text-base-content/60 leading-relaxed max-w-xs">
                            Senior Software Engineer · React · TypeScript · Node.js
                        </p>
                        <div className="flex items-center gap-2">
                            <a
                                href="https://github.com/frank-mendez"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="GitHub"
                                className="p-2 rounded-md text-base-content/60 hover:text-base-content hover:bg-base-300 transition-colors"
                            >
                                <GithubIcon className="h-4 w-4" />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/frank-mendez-47b62090/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="p-2 rounded-md text-base-content/60 hover:text-base-content hover:bg-base-300 transition-colors"
                            >
                                <BriefcaseBusiness className="h-4 w-4" />
                            </a>
                            <a
                                href="mailto:frankmendezresources@gmail.com"
                                aria-label="Email"
                                className="p-2 rounded-md text-base-content/60 hover:text-base-content hover:bg-base-300 transition-colors"
                            >
                                <Mail className="h-4 w-4" />
                            </a>
                        </div>
                    </div>

                    {/* Col 2: Navigation */}
                    <div className="space-y-3">
                        <p className="text-xs uppercase tracking-widest font-semibold text-base-content/40">
                            Navigation
                        </p>
                        <nav className="flex flex-col gap-2" aria-label="Footer navigation">
                            {[
                                { label: 'About', href: '#about' },
                                { label: 'Projects', href: '#projects' },
                                { label: 'Contact', href: '#contact' },
                            ].map(({ label, href }) => (
                                <a
                                    key={href}
                                    href={href}
                                    className="text-sm text-base-content/60 hover:text-base-content transition-colors w-fit"
                                >
                                    {label}
                                </a>
                            ))}
                            <a
                                href={BLOG_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sm text-base-content/60 hover:text-base-content transition-colors w-fit"
                            >
                                Blog
                            </a>
                        </nav>
                    </div>

                    {/* Col 3: Built with */}
                    <div className="space-y-3">
                        <p className="text-xs uppercase tracking-widest font-semibold text-base-content/40">
                            Built with
                        </p>
                        <ul className="flex flex-col gap-2">
                            {['React + Vite', 'TypeScript', 'Tailwind CSS', 'daisyUI', 'Deployed on GitHub Pages'].map(
                                (item) => (
                                    <li key={item} className="text-sm text-base-content/60">
                                        {item}
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                </div>

                <Separator className="my-8" />

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-base-content/40">
                    <p>&copy; {new Date().getFullYear()} Frank Mendez. All rights reserved.</p>
                    <p className="text-base-content/50">Available for new opportunities</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
