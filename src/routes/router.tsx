import Home from '../pages/home/Home.tsx'
import About from '../pages/about/About.tsx'
import Contact from '../pages/contact/Contact.tsx'
import Projects from '../pages/projects/Projects.tsx'
import {createBrowserRouter} from 'react-router-dom'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/contact',
        element: <Contact />
    },
    {
        path: '/projects',
        element: <Projects />
    }
])