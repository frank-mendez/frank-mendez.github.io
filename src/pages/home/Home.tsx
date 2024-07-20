import AppLayout from '../../layout/AppLayout.tsx'
import { MouseParallaxChild, MouseParallaxContainer } from 'react-parallax-mouse'

const Home = () => {
    return (
        <AppLayout>
            <>
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage: 'url(/images/web_background.jpg)',
                    }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content flex-col lg:flex-row">
                        <MouseParallaxContainer
                            globalFactorX={0.4}
                            globalFactorY={0.3}
                            resetOnLeave
                            className="w-full flex flex-col lg:flex-row justify-between items-center"
                        >
                            <MouseParallaxChild factorX={0.1} factorY={0.2}>
                                <div className="flex flex-col lg:flex-row items-center text-center lg:text-left flex-1 px-6 text-white">
                                    <div className="flex-1">
                                        <div className="font-bangers text-[32px] text-white uppercase tracking-[0.03em]">
                                            Best pizza in town
                                        </div>
                                        <h1 className="text-6xl lg:text-8xl font-bangers text-white drop-shadow-md">
                                            Pizza perfection <br /> in every bite
                                        </h1>
                                    </div>
                                </div>
                            </MouseParallaxChild>
                            <MouseParallaxChild factorX={0.2} factorY={0.3} className="relative">
                                <div className="flex flex-col lg:flex-row items-center text-center lg:text-left flex-1 px-6">
                                    <div className="flex-1 flex justify-end max-w-sm lg:max-w-max">
                                        <img
                                            className="mask mask-hexagon-2 shadow-2xl shadow-black"
                                            src="/images/frank.jpg"
                                            width={500}
                                            height={500}
                                            alt="frank"
                                        />
                                    </div>
                                </div>
                                <MouseParallaxChild
                                    factorX={0.2}
                                    factorY={0.5}
                                    className="absolute top-6 left-4 hidden xl:flex"
                                >
                                    <img src="/images/ts.png" width={60} height={60} alt="ts" />
                                </MouseParallaxChild>
                                <MouseParallaxChild
                                    factorX={0.2}
                                    factorY={0.4}
                                    className="absolute top-4 left-[10rem] hidden xl:flex"
                                >
                                    <img src="/images/mui.png" width={80} height={80} alt="mui" />
                                </MouseParallaxChild>
                                <MouseParallaxChild
                                    factorX={0.3}
                                    factorY={0.4}
                                    className="absolute top-52 left-4 hidden xl:flex"
                                >
                                    <img src="/images/ant.png" width={100} height={100} alt="ant" />
                                </MouseParallaxChild>
                                <MouseParallaxChild
                                    factorX={0.1}
                                    factorY={0.4}
                                    className="absolute top-[22rem] left-8 hidden xl:flex"
                                >
                                    <img src="/images/react.png" width={80} height={80} alt="react" />
                                </MouseParallaxChild>
                            </MouseParallaxChild>
                        </MouseParallaxContainer>
                    </div>
                </div>
                <div
                    className="hero min-h-screen"
                    style={{
                        backgroundImage:
                            'url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)',
                    }}
                >
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                            <p className="mb-5">
                                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi
                                exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
                            </p>
                            <button className="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </>
        </AppLayout>
    )
}

export default Home
