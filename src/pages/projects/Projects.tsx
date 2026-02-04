import AppLayout from '../../layout/AppLayout.tsx'
import ProjectCard from '../../components/ProjectCard.tsx'

const projects = [
    {
        title: 'Modern Movie Browser',
        type: 'Frontend',
        description: 'A modern movie browser using TMDB movie API, Vite, React, TypeScript, and TailwindCSS.',
        techStack: 'ReactJS, TypeScript, Vite, TailwindCSS, daisyUI',
        links: {
            detailsUrl: 'https://modern-movie-browser.vercel.app/',
            repoUrl: 'https://github.com/frank-mendez/movie-browser',
        },
    },
    {
        title: 'React TypeScript Spotify',
        type: 'Frontend',
        description: 'A music web app built with React, TypeScript, and Vite using the Spotify API.',
        techStack: 'ReactJS, TypeScript, Vite, TailwindCSS, Spotify Web API, Material UI',
        links: {
            detailsUrl: 'https://react-typescript-spotify.vercel.app/',
            repoUrl: 'https://github.com/frank-mendez/react-typescript-spotify',
        },
    },
    {
        title: 'Advanced Architecture',
        type: 'Backend',
        description:
            'NestJS advanced architecture covering event sourcing, CQRS, layered and hexagonal patterns.',
        techStack: 'NestJS, TypeScript, MikroOrm, MongoDB',
        links: {
            repoUrl: 'https://github.com/frank-mendez/advanced-architecture',
        },
    },
    {
        title: 'Socket IO Chat',
        type: 'Frontend',
        description: 'Chat app with React, NestJS, Socket.IO, TailwindCSS, and daisyUI.',
        techStack: 'ReactJS, TailwindCSS, daisyUI, NestJS, MikroORM, PostgreSQL, JWT, Socket.IO, Docker',
        links: {
            detailsUrl: 'https://socketio-chat-omega.vercel.app/',
            repoUrl: 'https://github.com/frank-mendez/socketio-chat',
        },
    },
    {
        title: 'MFK LMS',
        type: 'Full Stack',
        description: 'A comprehensive loan management system built with Next.js 14, designed for microfinance operations and lending institutions. Features complete loan lifecycle management, borrower tracking, repayment scheduling, stash contributions, and detailed financial reporting with role-based access control.',
        techStack: 'See repository',
        links: {
            detailsUrl: 'https://mfklms.vercel.app/',
            repoUrl: 'https://github.com/frank-mendez/mfklms',
        },
    },
    {
        title: 'To Do-Py',
        type: 'Backend',
        description: 'todo-py 📝 | A Simple & Scalable To-Do API in Python todo-py is a lightweight and efficient backend for managing tasks, built with Python',
        techStack: 'Python',
        links: {
            repoUrl: 'https://github.com/frank-mendez/todo-py',
        },
    },
]

const Projects = () => {
    return (
        <AppLayout>
            <div className="container m-auto contain-layout font-dm-sans">
                <h1 className="font-bold text-5xl text-center my-10">Projects</h1>
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.title}
                            title={project.title}
                            type={project.type}
                            description={project.description}
                            techStack={project.techStack}
                            links={project.links}
                        />
                    ))}
                </div>
            </div>
        </AppLayout>
    )
}

export default Projects
