import ThemeSwitcher from './ThemeSwitcher.tsx'
import { Link } from 'react-router-dom'

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
                            <Link to="#about">About</Link>
                        </li>
                        <li>
                            <Link to="/project">Projects</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                        <li>
                            <Link target="_blank" to="https://frank-tech-blog.vercel.app/">
                                Blog
                            </Link>
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
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <Link target="_blank" to="https://frank-tech-blog.vercel.app/">
                            Blog
                        </Link>
                    </li>
                </ul>
                <ThemeSwitcher />
            </div>
            <div className="navbar-end hidden lg:flex font-dm-sans">
                <Link target="_blank" to="files/FrankMendez.pdf" className="btn ml-1">
                    Resume
                </Link>
            </div>
        </div>
    )
}

export default Navbar
