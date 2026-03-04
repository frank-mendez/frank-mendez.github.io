import { type FormEvent, useState } from 'react'
import AppLayout from '../../layout/AppLayout.tsx'
import { trackEvent } from '../../services/analyticsService'

const Contact = () => {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setStatus('sending')

        const form = event.currentTarget
        const formData = new FormData(form)

        try {
            const response = await fetch('https://formspree.io/f/mojlgzrd', {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            })

            if (!response.ok) {
                throw new Error('Form submission failed')
            }

            form.reset()
            setStatus('success')
            trackEvent('contact_submit_success', {
                form_provider: 'formspree',
            })
        } catch {
            setStatus('error')
            trackEvent('contact_submit_error', {
                form_provider: 'formspree',
            })
        }
    }

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
                        <form
                            className="card bg-base-200 shadow-xl"
                            action="https://formspree.io/f/mojlgzrd"
                            method="POST"
                            onSubmit={handleSubmit}
                        >
                            <div className="card-body gap-6">
                                {status === 'success' && (
                                    <div className="alert alert-success">
                                        <span>Thanks! Your message has been sent successfully.</span>
                                    </div>
                                )}
                                {status === 'error' && (
                                    <div className="alert alert-error">
                                        <span>Sorry, something went wrong. Please try again.</span>
                                    </div>
                                )}
                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <label className="label" htmlFor="contact-name">
                                            Full name
                                        </label>
                                        <input
                                            id="contact-name"
                                            type="text"
                                            placeholder="Your name"
                                            className="input"
                                            name="name"
                                            required
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="label" htmlFor="contact-email">
                                            Email address
                                        </label>
                                        <input
                                            id="contact-email"
                                            type="email"
                                            placeholder="you@email.com"
                                            className="input"
                                            name="email"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <label className="label" htmlFor="contact-company">
                                            Company
                                        </label>
                                        <input
                                            id="contact-company"
                                            type="text"
                                            placeholder="Company name"
                                            className="input"
                                            name="company"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="label" htmlFor="contact-project-type">
                                            Project type
                                        </label>
                                        <select id="contact-project-type" className="select" name="projectType">
                                            <option>Web App</option>
                                            <option>Landing Page</option>
                                            <option>Portfolio</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="label" htmlFor="contact-message">
                                        Project brief
                                    </label>
                                    <textarea
                                        id="contact-message"
                                        className="textarea min-h-[160px]"
                                        placeholder="Tell me about your goals, scope, and timeline."
                                        name="message"
                                        required
                                    ></textarea>
                                </div>

                                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                    <label className="label cursor-pointer gap-3">
                                        <input
                                            type="checkbox"
                                            className="checkbox checkbox-primary"
                                            name="discoveryCall"
                                        />
                                        <span>I’m open to a discovery call</span>
                                    </label>
                                    <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
                                        {status === 'sending' ? 'Sending…' : 'Send message'}
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
