import { ReactElement, useEffect } from 'react'
import Navbar from '../components/Navbar.tsx'
import Footer from '../components/Footer.tsx'
import FrankChatBot from '../components/FrankChatBot.tsx'
import { applyRouteMetadata } from '../services/seoService'
import { trackPageView } from '../services/analyticsService'

const AppLayout = ({ children }: { children: ReactElement }) => {
    useEffect(() => {
        applyRouteMetadata('/')
        trackPageView('/', document.title)

        const legacySections: Record<string, string> = {
            '/': 'top',
            '/about': 'approach',
            '/projects': 'work',
            '/contact': 'contact',
        }
        const scrollToHash = () => {
            const hash = window.location.hash.slice(1)
            const sectionId = legacySections[hash] ?? hash
            if (sectionId) document.getElementById(sectionId)?.scrollIntoView?.()
        }
        scrollToHash()
        window.addEventListener('hashchange', scrollToHash)
        return () => window.removeEventListener('hashchange', scrollToHash)
    }, [])

    return (
        <div className="fm-portfolio min-h-screen w-full">
            <Navbar />
            {children}
            <Footer />
            <FrankChatBot />
        </div>
    )
}

export default AppLayout
