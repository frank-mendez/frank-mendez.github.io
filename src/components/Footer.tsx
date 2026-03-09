import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import { Link } from 'react-router-dom'
import SocialIconLink from './SocialIconLink.tsx'

const Footer = () => {
    return (
        <footer className="footer footer-center footer-horizontal flex-wrap items-center justify-center gap-4 bg-base-100 px-4 py-8 text-base-content sm:gap-6 sm:px-6 lg:px-10">
            <nav className="flex flex-row flex-wrap items-center justify-center gap-4 text-center sm:gap-6">
                <Link to="/about" className="link link-hover">
                    About
                </Link>
                <Link to="/contact" className="link link-hover">
                    Contact
                </Link>
                <Link to="/projects" className="link link-hover">
                    Projects
                </Link>
                <a target="_blank" href="https://frank-tech-blog.vercel.app/" className="link link-hover">
                    Blog
                </a>
            </nav>
            <nav>
                <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                    <SocialIconLink href="https://github.com/frank-mendez" label="Frank Mendez on GitHub">
                        <GitHubIcon />
                    </SocialIconLink>
                    <SocialIconLink
                        href="https://www.linkedin.com/in/frank-mendez-47b62090/"
                        label="Frank Mendez on LinkedIn"
                    >
                        <LinkedInIcon />
                    </SocialIconLink>
                    <SocialIconLink href="https://www.facebook.com/frankmendezzz/" label="Frank Mendez on Facebook">
                        <FacebookIcon />
                    </SocialIconLink>
                    <SocialIconLink href="https://www.instagram.com/frankmendezph/" label="Frank Mendez on Instagram">
                        <InstagramIcon />
                    </SocialIconLink>
                </div>
            </nav>
            <div className="flex w-full justify-center px-2">
                <iframe
                    src="https://github.com/sponsors/frank-mendez/button"
                    title="Sponsor frank-mendez"
                    height="32"
                    width="114"
                    style={{ border: 0, borderRadius: '6px', maxWidth: '100%' }}
                />
            </div>
            <aside>
                <p className="text-center text-sm sm:text-base">Copyright © 2026 - Frank Mendez</p>
            </aside>
        </footer>
    )
}

export default Footer
