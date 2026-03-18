import { type FormEvent, useState } from 'react'
import AppLayout from '../../layout/AppLayout.tsx'
import { trackEvent } from '../../services/analyticsService'
import { sendContact } from '../../services/contactService'
import { Card, CardContent, CardHeader, CardTitle } from '../../components/ui/card'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Textarea } from '../../components/ui/textarea'
import { Label } from '../../components/ui/label'
import { Separator } from '../../components/ui/separator'
import { Mail, Phone, MapPin, Clock, CalendarCheck, CheckCircle2, AlertCircle } from 'lucide-react'

const asString = (value: FormDataEntryValue | null): string => (typeof value === 'string' ? value : '')

const Contact = () => {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setStatus('sending')

        const form = event.currentTarget
        const formData = new FormData(form)

        try {
            await sendContact({
                name: asString(formData.get('name')).trim(),
                email: asString(formData.get('email')).trim(),
                company: asString(formData.get('company')).trim(),
                projectType: asString(formData.get('projectType')).trim(),
                message: asString(formData.get('message')).trim(),
                discoveryCall: formData.get('discoveryCall') === 'on',
            })

            form.reset()
            setStatus('success')
            trackEvent('contact_submit_success', {
                form_provider: 'frank-bot',
            })
        } catch {
            setStatus('error')
            trackEvent('contact_submit_error', {
                form_provider: 'frank-bot',
            })
        }
    }

    return (
        <AppLayout>
            <div>
                {/* Booking CTA Banner */}
                <section className="bg-primary text-primary-content">
                    <div className="container mx-auto px-4 sm:px-6 py-10">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                            <div className="text-center sm:text-left">
                                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                                    <CalendarCheck className="h-5 w-5" />
                                    <span className="text-sm font-semibold uppercase tracking-wider opacity-80">
                                        Book a Call
                                    </span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold">Ready to work together?</h2>
                                <p className="mt-1 opacity-80 text-sm sm:text-base">
                                    Schedule a free 30-minute discovery call to discuss your project.
                                </p>
                            </div>
                            <Button
                                asChild
                                size="lg"
                                className="bg-white text-primary hover:bg-white/90 font-semibold shrink-0"
                            >
                                <a
                                    href="https://cal.com/frank-mendez-qlpa7y/15min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <CalendarCheck className="h-4 w-4" />
                                    Schedule on Cal.com
                                </a>
                            </Button>
                        </div>
                    </div>
                </section>

                {/* Contact Form */}
                <section className="bg-base-100">
                    <div className="container mx-auto px-4 sm:px-6 py-14">
                        <div className="mb-8">
                            <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-2">Contact</p>
                            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                                Let's build something great
                            </h1>
                            <p className="mt-3 text-base-content/60 max-w-xl">
                                Share a brief overview of your project and preferred timeline. I'll respond within 1-2
                                business days.
                            </p>
                        </div>

                        <Separator className="mb-10" />

                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
                            <Card className="bg-base-100 border-base-content/10">
                                <CardContent className="p-6 sm:p-8">
                                    <form className="space-y-6" onSubmit={handleSubmit}>
                                        {status === 'success' && (
                                            <div className="flex items-center gap-3 rounded-lg bg-success/10 border border-success/30 p-4 text-sm text-success">
                                                <CheckCircle2 className="h-4 w-4 shrink-0" />
                                                Thanks! Your message has been sent successfully.
                                            </div>
                                        )}
                                        {status === 'error' && (
                                            <div className="flex items-center gap-3 rounded-lg bg-error/10 border border-error/30 p-4 text-sm text-error">
                                                <AlertCircle className="h-4 w-4 shrink-0" />
                                                Sorry, something went wrong. Please try again.
                                            </div>
                                        )}
                                        <div className="grid gap-5 sm:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="contact-name">Full name</Label>
                                                <Input
                                                    id="contact-name"
                                                    type="text"
                                                    placeholder="Your name"
                                                    name="name"
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="contact-email">Email address</Label>
                                                <Input
                                                    id="contact-email"
                                                    type="email"
                                                    placeholder="you@email.com"
                                                    name="email"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="grid gap-5 sm:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="contact-company">Company</Label>
                                                <Input
                                                    id="contact-company"
                                                    type="text"
                                                    placeholder="Company name"
                                                    name="company"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="contact-project-type">Project type</Label>
                                                <select
                                                    id="contact-project-type"
                                                    name="projectType"
                                                    className="flex h-9 w-full rounded-md border border-base-content/20 bg-transparent px-3 py-1 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent"
                                                >
                                                    <option>Web App</option>
                                                    <option>Landing Page</option>
                                                    <option>Portfolio</option>
                                                    <option>Other</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="contact-message">Project brief</Label>
                                            <Textarea
                                                id="contact-message"
                                                placeholder="Tell me about your goals, scope, and timeline."
                                                name="message"
                                                required
                                                className="min-h-[140px]"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                                            <label className="flex items-center gap-2.5 cursor-pointer">
                                                <input
                                                    type="checkbox"
                                                    className="checkbox checkbox-primary"
                                                    name="discoveryCall"
                                                />
                                                <span className="text-sm">I'm open to a discovery call</span>
                                            </label>
                                            <Button type="submit" disabled={status === 'sending'} className="shrink-0">
                                                {status === 'sending' ? 'Sending…' : 'Send message'}
                                            </Button>
                                        </div>
                                    </form>
                                </CardContent>
                            </Card>

                            <aside className="flex flex-col gap-4">
                                <Card className="bg-base-100 border-base-content/10">
                                    <CardHeader className="pb-3">
                                        <CardTitle className="text-base">Contact Details</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <Mail className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                            <div>
                                                <p className="text-xs text-base-content/50 mb-0.5">Email</p>
                                                <p className="text-sm font-medium">frankmendezresources@gmail.com</p>
                                            </div>
                                        </div>
                                        <Separator />
                                        <div className="flex items-start gap-3">
                                            <Phone className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                            <div>
                                                <p className="text-xs text-base-content/50 mb-0.5">Phone</p>
                                                <p className="text-sm font-medium">+63 969 159 3265</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="bg-base-100 border-base-content/10">
                                    <CardHeader className="pb-3">
                                        <CardTitle className="text-base">Location & Hours</CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                            <div>
                                                <p className="text-xs text-base-content/50 mb-0.5">Based in</p>
                                                <p className="text-sm font-medium">Cagayan de Oro City, Philippines</p>
                                            </div>
                                        </div>
                                        <Separator />
                                        <div className="flex items-start gap-3">
                                            <Clock className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                                            <div>
                                                <p className="text-xs text-base-content/50 mb-0.5">Availability</p>
                                                <p className="text-sm font-medium">Mon–Fri, 8am–5pm (GMT+8)</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="bg-primary text-primary-content border-0">
                                    <CardContent className="p-5 space-y-3">
                                        <CalendarCheck className="h-6 w-6" />
                                        <div>
                                            <p className="font-semibold text-sm">Prefer a live chat?</p>
                                            <p className="text-primary-content/70 text-xs mt-1">
                                                Book a free 30-minute call and discuss your project directly.
                                            </p>
                                        </div>
                                        <Button
                                            asChild
                                            size="sm"
                                            className="bg-white text-primary hover:bg-white/90 font-semibold w-full"
                                        >
                                            <a
                                                href="https://cal.com/frank-mendez-qlpa7y/15min"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Book a Call
                                            </a>
                                        </Button>
                                    </CardContent>
                                </Card>
                            </aside>
                        </div>
                    </div>
                </section>
            </div>
        </AppLayout>
    )
}

export default Contact
