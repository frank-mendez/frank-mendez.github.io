import { ReactElement } from 'react'
import Navbar from '../components/Navbar.tsx'

const AppLayout = ({ children }: { children: ReactElement }) => {
    return (
        <div className="container ">
            <Navbar />
            {children}
        </div>
    )
}

export default AppLayout
