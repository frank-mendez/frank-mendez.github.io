import { ReactElement } from 'react'
import Navbar from '../components/Navbar.tsx'
import Footer from '../components/Footer.tsx'

const AppLayout = ({ children }: { children: ReactElement }) => {
    return (
        <div className="w-full">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default AppLayout
