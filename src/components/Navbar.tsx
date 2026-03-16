import ThemeSwitcher from './ThemeSwitcher.tsx'
import { Link, NavLink } from 'react-router-dom'
import { trackEvent } from '../services/analyticsService'
import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Separator } from './ui/separator'

const NAV_LINKS = [
    { label: 'About', to: '/about' },
    { label: 'Projects', to: '/projects' },
    { label: 'Contact', to: '/contact' },
]

const handleNavClick = (label: string, destination: string) => {
    trackEvent('navbar_click', { label, destination })
}

const Navbar = () => {
    return (
        <header className="sticky top-0 z-40 w-full border-b border-base-content/10 bg-base-100/80 backdrop-blur-md">
            <div className="container mx-auto flex h-14 items-center justify-between px-4 sm:px-6">
                {/* Logo */}
                <Link
                    to="/"
                    className="text-lg font-semibold tracking-tight hover:opacity-80 transition-opacity"
                    onClick={() => handleNavClick('home', '/')}
                >
                    Frank Mendez
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-1">
                    {NAV_LINKS.map(({ label, to }) => (
                        <NavLink
                            key={to}
                            to={to}
                            className={({ isActive }) =>
                                `px-3 py-1.5 rounded-md text-sm transition-colors ${
                                    isActive
                                        ? 'bg-base-200 font-semibold text-base-content'
                                        : 'text-base-content/70 hover:text-base-content hover:bg-base-200'
                                }`
                            }
                            onClick={() => handleNavClick(label.toLowerCase(), to)}
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>

                {/* Right side */}
                <div className="flex items-center gap-2">
                    <div className="hidden md:flex">
                        <ThemeSwitcher />
                    </div>

                    {/* Mobile menu */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                                <Menu className="h-5 w-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent>
                            <div className="flex flex-col h-full pt-10 px-2">
                                <Link
                                    to="/"
                                    className="text-lg font-semibold mb-6"
                                    onClick={() => handleNavClick('home', '/')}
                                >
                                    Frank Mendez
                                </Link>
                                <Separator className="mb-4" />
                                <nav className="flex flex-col gap-1">
                                    {NAV_LINKS.map(({ label, to }) => (
                                        <NavLink
                                            key={to}
                                            to={to}
                                            className={({ isActive }) =>
                                                `px-3 py-2 rounded-md text-sm transition-colors ${
                                                    isActive
                                                        ? 'bg-base-200 font-semibold text-base-content'
                                                        : 'text-base-content/70 hover:text-base-content hover:bg-base-200'
                                                }`
                                            }
                                            onClick={() => handleNavClick(label.toLowerCase(), to)}
                                        >
                                            {label}
                                        </NavLink>
                                    ))}
                                </nav>
                                <div className="mt-auto pb-4">
                                    <Separator className="mb-4" />
                                    <ThemeSwitcher />
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}

export default Navbar
