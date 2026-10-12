import { useRef } from 'react'
import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet'
import { DialogTitle, DialogDescription } from '@radix-ui/react-dialog'
import { trackEvent } from '../services/analyticsService'

const links = [
    { label: 'Work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
]
const trackNavigation = (label: string, destination: string) =>
    trackEvent('navbar_click', { label: label.toLowerCase(), destination })

const Navbar = () => {
    const pendingSection = useRef<string | null>(null)
    return (
        <header className="pf-header">
            <a className="pf-skip" href="#main">
                Skip to content
            </a>
            <div className="fm-container pf-wrap pf-nav">
                <a
                    className="pf-brand"
                    href="#top"
                    aria-label="Frank Mendez home"
                    onClick={() => trackNavigation('home', '#top')}
                >
                    <span className="pf-brand-mark" aria-hidden="true">
                        &lt;/&gt;
                    </span>{' '}
                    Frank Mendez
                </a>
                <nav className="pf-navlinks" aria-label="Main navigation">
                    {links.map((link) => (
                        <a key={link.href} href={link.href} onClick={() => trackNavigation(link.label, link.href)}>
                            {link.label}
                        </a>
                    ))}
                </nav>
                <div className="pf-nav-actions">
                    <a className="pf-button pf-primary" href="#contact">
                        Let’s talk <span aria-hidden="true">↗</span>
                    </a>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="pf-menu-trigger" aria-label="Open menu">
                                <Menu aria-hidden="true" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            className="pf-mobile-menu"
                            onCloseAutoFocus={(event) => {
                                if (!pendingSection.current) return
                                event.preventDefault()
                                const sectionId = pendingSection.current
                                pendingSection.current = null
                                requestAnimationFrame(() => {
                                    const section = document.getElementById(sectionId)
                                    section?.scrollIntoView?.()
                                    section?.focus({ preventScroll: true })
                                })
                            }}
                        >
                            <DialogTitle className="pf-brand">Frank Mendez</DialogTitle>
                            <DialogDescription className="sr-only">
                                Navigate Frank Mendez’s portfolio.
                            </DialogDescription>
                            <nav aria-label="Mobile navigation">
                                {links.map((link) => (
                                    <SheetClose asChild key={link.href}>
                                        <a
                                            href={link.href}
                                            onClick={() => {
                                                pendingSection.current = link.href.slice(1)
                                                trackNavigation(link.label, link.href)
                                            }}
                                        >
                                            {link.label}
                                        </a>
                                    </SheetClose>
                                ))}
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}
export default Navbar
