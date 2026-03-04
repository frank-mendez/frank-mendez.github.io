import { ReactElement, useEffect } from 'react'
import Navbar from '../components/Navbar.tsx'
import Footer from '../components/Footer.tsx'
import FrankChatBot from '../components/FrankChatBot.tsx'
import { useLocation } from 'react-router-dom'
import { applyRouteMetadata } from '../services/seoService'
import { trackPageView } from '../services/analyticsService'

const AppLayout = ({ children }: { children: ReactElement }) => {
    const location = useLocation()

    useEffect(() => {
        applyRouteMetadata(location.pathname)
        trackPageView(location.pathname, document.title)
    }, [location.pathname])

    return (
        <div className="w-full">
            <Navbar />
            {children}
            <Footer />
            <FrankChatBot />
        </div>
    )
}

export default AppLayout
