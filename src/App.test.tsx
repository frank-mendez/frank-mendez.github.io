import { afterEach, describe, expect, it, vi } from 'vitest'
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import App from './App'
import { sendContact } from './services/contactService'

vi.mock('./services/contactService', () => ({ sendContact: vi.fn().mockResolvedValue({ ok: true }) }))

afterEach(() => {
    window.history.replaceState(null, '', '/')
    vi.clearAllMocks()
})

describe('Portfolio redesign', () => {
    it('renders the Figma sections in order with one main heading', () => {
        const { container } = render(<App />)
        expect(container.querySelectorAll('h1')).toHaveLength(1)
        expect(screen.getByRole('heading', { level: 1, name: 'I build software teams can trust.' })).toBeInTheDocument()
        expect([...container.querySelectorAll('main > section')].map((section) => section.id)).toEqual([
            'top',
            'work',
            'approach',
            'experience',
            'contact',
        ])
        expect(screen.getByRole('heading', { name: 'Own the whole slice' })).toBeInTheDocument()
        expect(screen.getByRole('heading', { name: 'Virtido AG' })).toBeInTheDocument()
    })

    it('uses working section anchors and verified project destinations', () => {
        const { container } = render(<App />)
        const navigation = screen.getByRole('navigation', { name: 'Main navigation' })
        for (const [label, id] of [
            ['Work', 'work'],
            ['Approach', 'approach'],
            ['Experience', 'experience'],
            ['Contact', 'contact'],
        ]) {
            expect(within(navigation).getByRole('link', { name: label })).toHaveAttribute('href', `#${id}`)
            expect(container.querySelector(`#${id}`)).toBeInTheDocument()
        }
        expect(screen.getByRole('link', { name: 'Explore selected work' })).toHaveAttribute('href', '#work')
        expect(screen.getByRole('link', { name: 'Grow With Me' })).toHaveAttribute(
            'href',
            'https://github.com/frank-mendez/grow-with-me'
        )
        expect(screen.getByRole('link', { name: 'MFK Lending' })).toHaveAttribute(
            'href',
            'https://github.com/frank-mendez/mfklending'
        )
        expect(screen.getByRole('link', { name: 'PulseChat' })).toHaveAttribute(
            'href',
            'https://github.com/frank-mendez/pulse-chat-'
        )
        expect(screen.getByRole('link', { name: 'thepracticalengineer.online' })).toHaveAttribute(
            'href',
            'https://www.thepracticalengineer.online/'
        )
        expect(screen.getByRole('link', { name: 'Visit product: Grow With Me' })).toHaveAttribute(
            'href',
            'https://www.growwithme.baby'
        )
        expect(screen.getByRole('link', { name: 'Visit product: MFK Lending' })).toHaveAttribute(
            'href',
            'https://mfklending.vercel.app'
        )
        expect(screen.getByRole('group', { name: 'Grow With Me product illustration' })).toBeInTheDocument()
        expect(screen.getByRole('link', { name: 'Email Frank' })).toHaveAttribute(
            'href',
            'mailto:frankmendezresources@gmail.com'
        )
    })

    it('closes the mobile navigation after choosing a section', async () => {
        render(<App />)
        fireEvent.click(screen.getByRole('button', { name: 'Open menu' }))
        const navigation = await screen.findByRole('navigation', { name: 'Mobile navigation' })
        fireEvent.click(within(navigation).getByRole('link', { name: 'Experience' }))
        await waitFor(() =>
            expect(screen.queryByRole('navigation', { name: 'Mobile navigation' })).not.toBeInTheDocument()
        )
        await waitFor(() => expect(document.activeElement).toBe(document.getElementById('experience')))
    })

    it('preserves the project archive and avoids duplicate ids', async () => {
        const { container } = render(<App />)
        const details = container.querySelector('details')!
        details.open = true
        expect(screen.getByRole('heading', { name: 'Food Delivery Observability' })).toBeInTheDocument()
        fireEvent.click(screen.getByRole('button', { name: 'Send a project brief ↗' }))
        await screen.findByRole('dialog')
        const ids = [...document.querySelectorAll('[id]')].map((element) => element.id)
        expect(new Set(ids).size).toBe(ids.length)
    })

    it('keeps the contact form submission working from the invitation', async () => {
        render(<App />)
        fireEvent.click(screen.getByRole('button', { name: 'Send a project brief ↗' }))
        const dialog = await screen.findByRole('dialog')
        fireEvent.change(within(dialog).getByLabelText(/full name/i), { target: { value: 'Test client' } })
        fireEvent.change(within(dialog).getByLabelText(/email address/i), { target: { value: 'client@example.com' } })
        fireEvent.change(within(dialog).getByLabelText(/project brief/i), {
            target: { value: 'Build a useful product.' },
        })
        fireEvent.submit(dialog.querySelector('form')!)
        await waitFor(() =>
            expect(sendContact).toHaveBeenCalledWith(
                expect.objectContaining({
                    name: 'Test client',
                    email: 'client@example.com',
                    message: 'Build a useful product.',
                })
            )
        )
    })

    it.each([
        ['/about', 'approach'],
        ['/projects', 'work'],
        ['/contact', 'contact'],
    ])('resolves the legacy hash route #%s', (hash, id) => {
        window.history.replaceState(null, '', `/#${hash}`)
        const scrollIntoView = vi.fn()
        const original = HTMLElement.prototype.scrollIntoView
        HTMLElement.prototype.scrollIntoView = scrollIntoView
        render(<App />)
        expect(scrollIntoView).toHaveBeenCalled()
        expect(scrollIntoView.mock.instances[0]).toBe(document.getElementById(id))
        HTMLElement.prototype.scrollIntoView = original
    })

    it('shows a back-to-top control above the chat launcher after scrolling', async () => {
        render(<App />)
        Object.defineProperty(window, 'scrollY', { configurable: true, value: 700 })
        fireEvent.scroll(window)
        const backToTop = await screen.findByRole('link', { name: 'Back to top' })
        const chatLauncher = screen.getByRole('button', { name: 'Open chat about Frank' })
        expect(backToTop).toHaveAttribute('href', '#top')
        expect(backToTop.compareDocumentPosition(chatLauncher) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()
        Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
    })
})
