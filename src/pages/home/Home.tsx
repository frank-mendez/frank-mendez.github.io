import AppLayout from '../../layout/AppLayout.tsx'
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse'
import GitHubIcon from '@mui/icons-material/GitHub'

const Home = () => {
    return (
        <AppLayout>
            <div className="m-0">
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: 'url(/images/background.jpg)',
                    }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content flex-col lg:flex-row gap-4">
                        <MouseParallaxContainer
                            globalFactorX={0.4}
                            globalFactorY={0.3}
                            resetOnLeave
                            className="w-full flex flex-col lg:flex-row justify-between items-center"
                        >
                            <MouseParallaxChild factorX={0.1} factorY={0.2}>
                                <div className="flex flex-col lg:flex-row items-center text-center lg:text-left flex-1">
                                    <div className="flex-1 flex justify-end max-w-sm lg:max-w-max">
                                        <img
                                            className="mask mask-circle shadow-2xl shadow-black"
                                            src="/images/frank.jpg"
                                            width={300}
                                            height={300}
                                            alt="frank"
                                        />
                                    </div>
                                </div>
                            </MouseParallaxChild>
                            <MouseParallaxChild factorX={0.2} factorY={0.3} className="relative">
                                <div className="flex flex-col px-4 lg:flex-row items-center text-center lg:text-left flex-1  text-white">
                                    <div className="flex-1">
                                        <div className="font-dm-sans sm:mt-10 text-3xl md:text-[32px] text-white uppercase tracking-[0.03em]">
                                            Frontend Developer
                                        </div>
                                        <h1 className="text-4xl mt-4 lg:text-8xl font-dm-sans text-white drop-shadow-md">
                                            Frank Mendez
                                        </h1>
                                        <p className="text-sm text-wrap font-dm-sans w-[20rem]">
                                            with a decade of experience in the tech industry. Throughout my career, I've
                                            worked with various technologies and frameworks and have contributed to open
                                            source projects.
                                        </p>
                                    </div>
                                </div>
                            </MouseParallaxChild>
                        </MouseParallaxContainer>
                    </div>
                </div>
                <div className="hero bg-base-300 min-h-screen font-dm-sans">
                    <div className="hero-content text-center">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-4xl font-bold">Tech Stack 🛠</h1>
                            <p className="text-sm text-left my text-wrap w-full md:w-[60rem] m-auto">
                                I am proficient in various tech stacks, including NodeJS, TypeScript, and ES6. My
                                expertise lies in popular frontend frameworks and CSS libraries such as React, Material
                                UI, and TailwindCSS. Additionally, my experience extends to backend and deployment
                                technologies including NestJS, Socket.io, MikroOrm, Postgres, AWS, Azure, GitHub
                                Actions, CI/CD, Docker, Firebase, and MongoDB.
                            </p>
                            <div className="hidden md:flex md:flex-row gap-4 mx-auto items-center">
                                <h2 className="text-xl">Frontend:</h2>
                                <img src="/images/next.svg" width={100} height={40} alt="next" />
                                <img src="/images/react.png" width={60} height={60} alt="react" />
                                <img src="/images/ts.png" width={60} height={60} alt="ts" />
                                <img src="/images/mui.png" width={60} height={60} alt="mui" />
                                <img src="/images/ant.png" width={60} height={60} alt="frank" />
                                <img src="/images/tailwind.png" width={60} height={60} alt="tailwind" />
                                <img src="/images/tanstack.png" width={60} height={60} alt="tanstack" />
                                <img src="/images/zustand.png" width={60} height={60} alt="zustand" />
                                <img src="/images/redux.png" width={60} height={60} alt="redux" />
                            </div>
                            <div className="hidden md:flex md:flex-row gap-4 mx-auto items-center">
                                <h2 className="text-xl">Backend:</h2>
                                <img src="/images/node.png" width={60} height={60} alt="node" />
                                <img src="/images/nest.png" width={60} height={60} alt="nest" />
                                <img src="/images/postgres.png" width={60} height={60} alt="postgres" />
                                <img src="/images/mongodb.png" width={140} height={40} alt="mongodb" />
                                <img src="/images/firebase.png" width={60} height={60} alt="firebase" />
                                <img src="/images/mikroorm.svg" width={140} height={40} alt="mikroom" />
                            </div>
                            <div className="hidden md:flex md:flex-row gap-4 mx-auto items-center">
                                <h2 className="text-xl">Testing:</h2>
                                <img src="/images/jest.png" width={100} height={60} alt="jest" />
                                <img src="/images/Cypress.png" width={100} height={60} alt="cypress" />
                            </div>
                            <div className="hidden md:flex md:flex-row gap-4 mx-auto items-center">
                                <h2 className="text-xl">DevOps:</h2>
                                <img src="/images/docker.png" width={60} height={60} alt="docker" />
                                <img src="/images/azure.png" width={60} height={60} alt="azure" />
                                <img src="/images/aws%20(1).png" width={60} height={60} alt="aws" />
                                <img src="/images/git.png" width={60} height={60} alt="git" />
                            </div>
                            <h1 className="text-4xl mt-10 font-bold">Soft Skills</h1>
                            <p className="text-sm text-center text-wrap w-full md:w-[60rem] m-auto">
                                In addition to my technical skills, I recognize the importance of possessing strong soft
                                skills in any workplace. I excel in communication and thrive in team settings. My strong
                                work ethic drives me to continually listen and learn from others. I am adaptable in
                                challenging situations and can perform well under pressure to meet deadlines.
                            </p>
                            <div className="hidden md:flex md:flex-row gap-4 mx-auto items-center">
                                <h2 className="text-xl">Tools:</h2>
                                <img src="/images/github.png" width={60} height={60} alt="github" />
                                <img src="/images/jira.png" width={60} height={60} alt="jira" />
                                <img src="/images/slack.png" width={60} height={60} alt="slack" />
                                <img src="/images/webstorm.png" width={60} height={60} alt="webstorm" />
                                <img src="/images/figma.png" width={60} height={60} alt="figma" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero bg-base-200 min-h-screen font-dm-sans">
                    <div className="hero-content text-center">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-4xl font-bold">Projects</h1>
                            <p className="text-sm text-left my text-wrap w-full md:w-[60rem] m-auto">
                                I believe programmers have a responsibility to support each other. Alongside learning
                                through personal projects, I have actively engaged in open source projects to
                                collaborate and learn with fellow developers. Although many of my projects are under
                                NDA, here are some of my personal and open source contributions.
                            </p>
                            <h1 className="mb-10 text-xl font-bold">Personal Projects 🦹‍♂️</h1>
                            <div className="flex flex-col md:flex-row gap-4 m-auto">
                                <div className="card bg-base-100 w-48 md:w-80">
                                    <figure>
                                        <img src="/images/medical.jpg" alt="medical!" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Medical</h2>
                                        <div className="card-actions justify-end">
                                            <a target="_blank" href="https://github.com/frank-mendez/doc-app-fe">
                                                <GitHubIcon />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card bg-base-100 w-48 md:w-80">
                                    <figure>
                                        <img src="/images/music.png" alt="music" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Music One</h2>
                                        <div className="card-actions justify-end">
                                            <a target="_blank" href="https://github.com/frank-mendez/doc-app-fe">
                                                <GitHubIcon />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card bg-base-100 w-48 md:w-80">
                                    <figure>
                                        <img src="/images/car.png" alt="acr" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Car</h2>
                                        <div className="card-actions justify-end">
                                            <a target="_blank" href="https://github.com/frank-mendez/doc-app-fe">
                                                <GitHubIcon />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <h1 className="mx-10 text-xl font-bold">Open Source Projects 🪄</h1>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="card bg-base-100 w-48 md:w-60">
                                    <figure>
                                        <img src="/images/formbricks.png" alt="formbrick" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Formbricks</h2>
                                        <div className="card-actions justify-end">
                                            <a target="_blank" href="https://formbricks.com/">
                                                <GitHubIcon />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card bg-base-100 w-48 md:w-60">
                                    <figure>
                                        <img src="/images/elastic.png" alt="medical!" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Elastic UI</h2>
                                        <div className="card-actions justify-end">
                                            <a target="_blank" href="https://eui.elastic.co/#/">
                                                <GitHubIcon />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card bg-base-100 w-48 md:w-60">
                                    <figure>
                                        <img src="/images/refine.png" alt="refine" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Refine</h2>
                                        <div className="card-actions justify-end">
                                            <a target="_blank" href="https://refine.dev/">
                                                <GitHubIcon />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="card bg-base-100 w-48 md:w-60">
                                    <figure>
                                        <img src="/images/tailwindblog.png" alt="tailwind" />
                                    </figure>
                                    <div className="card-body">
                                        <h2 className="card-title">Tailwind Blog</h2>
                                        <div className="card-actions justify-end">
                                            <a target="_blank" href="https://github.com/frank-mendez/doc-app-fe">
                                                <GitHubIcon />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Home
