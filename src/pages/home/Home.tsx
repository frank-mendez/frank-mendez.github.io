import AppLayout from '../../layout/AppLayout.tsx'
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse'
import SkillSection from '../../components/SkillSection.tsx'
import { softSkillsGroups, techStackGroups } from './homeData'

const Home = () => {
    return (
        <AppLayout>
            <div className="m-0">
                <div className="hero min-h-screen home-hero-bg">
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
                                <div className="flex flex-col px-4 sm:px-6 lg:flex-row items-center text-center lg:text-left flex-1 text-white">
                                    <div className="flex-1 max-w-full lg:max-w-2xl p-5">
                                        <div className="font-dm-sans sm:mt-10 text-xl sm:text-2xl md:text-[32px] text-white uppercase tracking-[0.03em]">
                                            Software Engineer / Frontend Engineer
                                        </div>
                                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl mt-3 sm:mt-4 font-dm-sans text-white drop-shadow-md">
                                            Frank Mendez
                                        </h1>
                                        <p className="text-sm sm:text-base text-center lg:text-left font-dm-sans max-w-prose mx-auto lg:mx-0">
                                            with a decade of experience in the tech industry. Throughout my career, I've
                                            worked with various technologies and frameworks and have contributed to open
                                            source projects. I'm constantly learning about AI and how it can be used to
                                            improve the way we work. Aside from that, I'm also learning Cyber Security
                                            and how to improve my security skills.
                                        </p>
                                    </div>
                                </div>
                            </MouseParallaxChild>
                        </MouseParallaxContainer>
                    </div>
                </div>
                <div className="font-dm-sans">
                    <SkillSection
                        eyebrow="Expertise"
                        title="Tech Stack"
                        description="Modern frontend expertise paired with a pragmatic backend and DevOps toolkit for full product delivery."
                        groups={techStackGroups}
                        className="bg-base-300"
                    />
                    <SkillSection
                        eyebrow="Professional"
                        title="Soft Skills & Tools"
                        description="Collaborative, product-focused, and dependable — backed by a toolset that keeps teams aligned and shipping."
                        groups={softSkillsGroups}
                        className="bg-base-200"
                    />
                </div>
            </div>
        </AppLayout>
    )
}

export default Home
