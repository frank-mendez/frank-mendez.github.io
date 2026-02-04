import ThemeSwitcher from './ThemeSwitcher.tsx'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="navbar flex-row">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="buthrefn" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 font-dm-sans"
                    >
                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) => (isActive ? 'active font-semibold' : undefined)}
                            >
                                About
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/projects"
                                className={({ isActive }) => (isActive ? 'active font-semibold' : undefined)}
                            >
                                Projects
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) => (isActive ? 'active font-semibold' : undefined)}
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl font-dm-sans">
                    Frank
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-dm-sans">
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? 'active font-semibold' : undefined)}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/projects"
                            className={({ isActive }) => (isActive ? 'active font-semibold' : undefined)}
                        >
                            Projects
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) => (isActive ? 'active font-semibold' : undefined)}
                        >
                            Contact
                        </NavLink>
                    </li>
                </ul>
                
            </div>
            <div className="navbar-end hidden lg:flex font-dm-sans">
                <ThemeSwitcher />
            </div>
        </div>
    )
}

export default Navbar
