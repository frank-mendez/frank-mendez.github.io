import { useState, useEffect } from 'react'
import ThemeSwitcher from './ThemeSwitcher.tsx'
import { BLOG_URL } from '../constants/links'
import { trackEvent } from '../services/analyticsService'
import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import { Sheet, SheetClose, SheetContent, SheetTrigger } from './ui/sheet'
import { Separator } from './ui/separator'

type NavItem = { label: string; href: string; external?: boolean }

const NAV_LINKS: NavItem[] = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
    { label: 'Blog', href: BLOG_URL, external: true },
]

const handleNavClick = (label: string, destination: string) => {
    trackEvent('navbar_click', { label, destination })
}

const BASE_ITEM_CLS = 'flex items-center px-3 rounded-md text-sm transition-colors'
const INACTIVE_CLS = 'text-base-content/70 hover:text-base-content hover:bg-base-200'

const NavItemRenderer = ({ link, py, closeOnClick = false }: { link: NavItem; py: string; closeOnClick?: boolean }) => {
    const item = (
        <a
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener noreferrer' : undefined}
            className={`${BASE_ITEM_CLS} ${py} ${INACTIVE_CLS}`}
            onClick={() => handleNavClick(link.label.toLowerCase(), link.href)}
        >
            {link.label}
        </a>
    )

    return closeOnClick ? <SheetClose asChild>{item}</SheetClose> : item
}

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`sticky top-0 z-40 w-full bg-base-100/80 backdrop-blur-md transition-colors duration-200 border-b ${
                scrolled ? 'border-base-300/70' : 'border-transparent'
            }`}
        >
            <div className="container mx-auto flex h-14 items-center justify-between px-4 sm:px-6">
                {/* Logo */}
                <a
                    href="#top"
                    className="text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity"
                    onClick={() => handleNavClick('home', '#top')}
                >
                    Frank Mendez
                </a>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
                    {NAV_LINKS.map((link) => (
                        <NavItemRenderer key={link.href} link={link} py="py-1.5" />
                    ))}
                </nav>

                {/* Right side */}
                <div className="flex items-center gap-2">
                    <ThemeSwitcher />

                    {/* Mobile menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <div className="flex flex-col h-full pt-10 px-2">
                                <SheetClose asChild>
                                    <a
                                        href="#top"
                                        className="text-lg font-semibold mb-6"
                                        onClick={() => handleNavClick('home', '#top')}
                                    >
                                        Frank Mendez
                                    </a>
                                </SheetClose>
                                <Separator className="mb-4" />
                                <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                                    {NAV_LINKS.map((link) => (
                                        <NavItemRenderer key={link.href} link={link} py="py-2" closeOnClick />
                                    ))}
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

export default Navbar
