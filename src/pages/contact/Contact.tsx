import AppLayout from '../../layout/AppLayout.tsx'

const Contact = () => {
    return (
        <AppLayout>
            <section className="bg-base-100 m-auto font-dm-sans">
                <div className="container px-6 py-16 mx-auto">
                    <div className="max-w-3xl">
                        <p className="text-sm uppercase tracking-[0.2em] text-primary">Contact</p>
                        <h1 className="mt-3 text-4xl font-bold">Let’s build something great</h1>
                        <p className="mt-4 text-base-content/70">
                            Share a brief overview of your project and preferred timeline. I’ll respond within 1–2
                            business days.
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_0.7fr]">
                        <form className="card bg-base-200 shadow-xl">
                            <div className="card-body gap-6">
                                <div className="grid gap-6 md:grid-cols-2">
                                    <label className="form-control">
                                        <div className="label">
                                            <span className="label-text">Full name</span>
                                        </div>
                                        <input
                                            type="text"
                                            placeholder="Your name"
                                            className="input input-bordered"
                                            required
                                        />
                                    </label>
                                    <label className="form-control">
                                        <div className="label">
                                            <span className="label-text">Email address</span>
                                        </div>
                                        <input
                                            type="email"
                                            placeholder="you@email.com"
                                            className="input input-bordered"
                                            required
                                        />
                                    </label>
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    <label className="form-control">
                                        <div className="label">
                                            <span className="label-text">Company</span>
                                        </div>
                                        <input type="text" placeholder="Company name" className="input input-bordered" />
                                    </label>
                                    <label className="form-control">
                                        <div className="label">
                                            <span className="label-text">Project type</span>
                                        </div>
                                        <select className="select select-bordered">
                                            <option>Web App</option>
                                            <option>Landing Page</option>
                                            <option>Portfolio</option>
                                            <option>Other</option>
                                        </select>
                                    </label>
                                </div>

                                <label className="form-control">
                                    <div className="label">
                                        <span className="label-text">Project brief</span>
                                    </div>
                                    <textarea
                                        className="textarea textarea-bordered min-h-[160px]"
                                        placeholder="Tell me about your goals, scope, and timeline."
                                        required
                                    ></textarea>
                                </label>

                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                    <label className="label cursor-pointer gap-3">
                                        <input type="checkbox" className="checkbox checkbox-primary" />
                                        <span className="label-text">I’m open to a discovery call</span>
                                    </label>
                                    <button className="btn btn-primary" type="submit">
                                        Send message
                                    </button>
                                </div>
                            </div>
                        </form>

                        <aside className="flex flex-col gap-6">
                            <div className="card bg-base-200 shadow-xl">
                                <div className="card-body gap-3">
                                    <h2 className="card-title">Contact details</h2>
                                    <div className="text-sm text-base-content/70">Primary email</div>
                                    <p className="text-base font-semibold">frankmendezresources@gmail.com</p>
                                    <div className="divider"></div>
                                    <div className="text-sm text-base-content/70">Phone</div>
                                    <p className="text-base font-semibold">+63 969 159 3265</p>
                                </div>
                            </div>

                            <div className="card bg-base-200 shadow-xl">
                                <div className="card-body gap-3">
                                    <h2 className="card-title">Location</h2>
                                    <p className="text-sm text-base-content/70">
                                        Mivesa Garden Residences, Salians Drive Ext.
                                    </p>
                                    <p className="text-sm text-base-content/70">Lahug, Cebu City, Cebu, Philippines</p>
                                    <div className="divider"></div>
                                    <p className="text-sm text-base-content/70">Availability</p>
                                    <p className="text-sm font-semibold">Mon–Fri, 8am–5pm (GMT+8)</p>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </AppLayout>
    )
}

export default Contact
