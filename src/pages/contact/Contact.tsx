import { Link } from 'react-router-dom'
import AppLayout from '../../layout/AppLayout.tsx'

const Contact = () => {
    return (
        <AppLayout>
            <>
                <h1>Contact</h1>
                <p>Welcome to my website</p>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/projects">Projects</Link>
            </>
        </AppLayout>
    )
}

export default Contact
