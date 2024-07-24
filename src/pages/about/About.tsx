import AppLayout from '../../layout/AppLayout.tsx'
import WorkExperience from '../../components/WorkExperience.tsx'

const About = () => {
    return (
        <AppLayout>
            <div className="font-dm-sans">
                <div className="flex flex-col items-center p-6 gap-4">
                    <div className="w-full">
                        <div className="hero-content m-auto flex-col lg:flex-row">
                            <img
                                className="mask mask-parallelogram-4 shadow-2xl shadow-black"
                                alt="Frank"
                                width={300}
                                height={300}
                                src="/images/frank2.jpg"
                            />
                            <div>
                                <h1 className="text-5xl font-bold">About Me</h1>
                                <p className="py-3">
                                    I&apos;m Frank R. Mendez, 32 years old, and I&apos;m currently residing in Cebu City
                                    Philippines. I grow up in Iligan City Philippines. I graduated with a Bachelor of
                                    Science in Information Technology from the Mindanao State University - Iligan
                                    Institute of Technology. I have been working in the software development industry
                                    for over 10 years, with experience in both frontend and backend development.
                                </p>
                                <p className="py-3">
                                    I&apos;m a husband and a proud father of two cats. In my free time, I enjoy playing
                                    basketball and video games, traveling and exploring new places, and watching movies
                                    and series. I&apos;m a fan of both Marvel and DC. Additionally, I love reading books
                                    and comics.
                                </p>
                                <p className="py-3">
                                    I have a passion for learning new things and sharing my knowledge with others,
                                    believing that knowledge is power and should be shared widely. I constantly seek new
                                    opportunities to grow and enhance my skills. My ultimate goal is to become a
                                    bonafide Full Stack Developer. Currently, I&apos;m learning NestJS and advanced
                                    architecture patterns, with a particular focus on Design Patterns and Clean Code.
                                    Additionally, I&apos;m delving into DevOps and CI/CD.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero bg-base-200 m-auto">
                    <div className="container flex flex-col gap-4 items-center py-10 justify-between">
                        <h1 className="text-4xl font-bold">Work Experience</h1>
                        <WorkExperience />
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default About
