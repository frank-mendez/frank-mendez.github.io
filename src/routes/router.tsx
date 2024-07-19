import Home from '../pages/home/Home.tsx'
import About from '../pages/about/About.tsx'
import Contact from '../pages/contact/Contact.tsx'
import Projects from '../pages/projects/Projects.tsx'
import {createHashRouter} from 'react-router-dom'

// We are using createHashRouter here since this will be hosted on Github pages that does not support history API
// If you are hosting on a server that supports history API, you can use createBrowserRouter
export const router = createHashRouter([
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