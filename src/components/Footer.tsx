import { BLOG_URL } from '../constants/links'
const Footer = () => (
    <footer className="pf-footer">
        <div className="pf-wrap">
            <blockquote className="pf-footer-verse">
                <p>“And whatsoever ye do, do it heartily, as to the Lord, and not unto men;”</p>
                <cite>Colossians 3:23 · KJV</cite>
            </blockquote>
            <p>© {new Date().getFullYear()} Frank Mendez · Cagayan de Oro, Philippines</p>
            <nav className="pf-social" aria-label="Social links">
                <a href="https://github.com/frank-mendez" target="_blank" rel="noopener noreferrer">
                    GitHub ↗
                </a>
                <a href="https://www.linkedin.com/in/frank-mendez-47b62090/" target="_blank" rel="noopener noreferrer">
                    LinkedIn ↗
                </a>
                <a href={BLOG_URL} target="_blank" rel="noopener noreferrer">
                    Blog ↗
                </a>
                <a href="mailto:frankmendezresources@gmail.com">Email ↗</a>
            </nav>
        </div>
    </footer>
)
export default Footer
