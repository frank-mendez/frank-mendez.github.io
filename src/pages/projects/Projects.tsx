import AppLayout from '../../layout/AppLayout.tsx'
import { Link } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub'

const Projects = () => {
    return (
        <AppLayout>
            <div className="container m-auto contain-layout">
                <h1 className="font-bold text-5xl text-center my-10">Projects</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Type</th>
                                <th>Description</th>
                                <th>Tech Stack</th>
                                <th>Link</th>
                                <th>
                                    <GitHubIcon />
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Modern Movie Browser</td>
                                <td>Frontend</td>
                                <td>
                                    A modern movie browser using TMDB movie api, Vite, React, Typescript and
                                    TailwindCSS.
                                </td>
                                <td>ReactJS, Typescript, Vite, TailwindCSS, Daisy UI</td>
                                <td>
                                    <Link target="_blank" to="https://modern-movie-browser.vercel.app/">
                                        https://modern-movie-browser.vercel.app/
                                    </Link>
                                </td>
                                <td>
                                    <Link target="_blank" to="https://github.com/frank-mendez/movie-browser">
                                        https://github.com/frank-mendez/movie-browser
                                    </Link>
                                </td>
                            </tr>
                            {/* row 2 */}
                            <tr>
                                <th>2</th>
                                <td>React Typescript Spotify</td>
                                <td>Frontend</td>
                                <td>
                                    A Music Web App that is built in React, Typescript and Vite. This will use the
                                    Spotify API
                                </td>
                                <td>ReactJS, Typescript, Vite, TailwindCSS, Spotify Web API, Material UI</td>
                                <td>
                                    <Link target="_blank" to="https://react-typescript-spotify.vercel.app/">
                                        https://react-typescript-spotify.vercel.app/
                                    </Link>
                                </td>
                                <td>
                                    <Link target="_blank" to="https://github.com/frank-mendez/react-typescript-spotify">
                                        https://github.com/frank-mendez/react-typescript-spotify
                                    </Link>
                                </td>
                            </tr>
                            {/* row 3 */}
                            <tr>
                                <th>3</th>
                                <td>Advanced Architecture</td>
                                <td>Backend</td>
                                <td>
                                    NestJS Advanced Architecture. Adding an Event Store, Extra Autowire Event,
                                    Rehydrating Aggregates, Command Query Responsibility Segregation, Eventual
                                    Consistency Introduction to Event Sourcing, Three Layered Architecture, Hexagonal
                                    Architecture, Onion Architecture
                                </td>
                                <td>NestJS, Typescript, MikroOrm, MongoDB</td>
                                <td>N / A</td>
                                <td>
                                    <Link target="_blank" to="https://github.com/frank-mendez/advanced-architecture">
                                        https://github.com/frank-mendez/advanced-architecture
                                    </Link>
                                </td>
                            </tr>
                            {/* row 4 */}
                            <tr>
                                <th>4</th>
                                <td>Socket IO Chat</td>
                                <td>Frontend</td>
                                <td>
                                    Chat App with ReactJS, NestJS and socket.io, TailwindCSS, Daisy UI. This is a simple
                                    chat app
                                </td>
                                <td>
                                    ReactJS - TailwindCSS - Daisy UI NestJS - MikroORM - PostgreSQL JWT - Socket IO -
                                    Docker
                                </td>
                                <td>https://socketio-chat-omega.vercel.app/</td>
                                <td>
                                    <Link target="_blank" to="https://github.com/frank-mendez/socketio-chat">
                                        https://github.com/frank-mendez/socketio-chat
                                    </Link>
                                </td>
                            </tr>
                            {/* row 5 */}
                            <tr>
                                <th>1</th>
                                <td>Modern Movie Browser</td>
                                <td>Frontend</td>
                                <td>
                                    A modern movie browser using TMDB movie api, Vite, React, Typescript and
                                    TailwindCSS.
                                </td>
                                <td>ReactJS, Typescript, Vite, TailwindCSS, Daisy UI</td>
                                <td>
                                    <Link target="_blank" to="https://modern-movie-browser.vercel.app/">
                                        https://modern-movie-browser.vercel.app/
                                    </Link>
                                </td>
                                <td>
                                    <Link target="_blank" to="https://github.com/frank-mendez/movie-browser">
                                        https://github.com/frank-mendez/movie-browser
                                    </Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    )
}

export default Projects
