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

        const sectionId = window.location.hash.slice(1)
        if (sectionId) {
            document.getElementById(sectionId)?.scrollIntoView?.()
        }
    }, [])

    return (
        <div className="min-h-screen w-full bg-base-100 text-base-content">
            <Navbar />
            {children}
            <Footer />
            <FrankChatBot />
        </div>
    )
}

export default AppLayout
