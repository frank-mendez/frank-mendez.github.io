import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'
import App from './App'

describe('App component', () => {
    it('renders the portfolio as one page with anchored sections', () => {
        const { container } = render(<App />)

        expect(container.querySelectorAll('h1')).toHaveLength(1)
        expect(
            screen.getByRole('heading', {
                level: 1,
                name: /Senior Software Engineer building scalable systems and elegant UIs/i,
            })
        ).toBeInTheDocument()

        const about = container.querySelector('#about')
        const projects = container.querySelector('#projects')
        const contact = container.querySelector('#contact')

        expect(about).toBeInTheDocument()
        expect(projects).toBeInTheDocument()
        expect(contact).toBeInTheDocument()
        expect(within(about as HTMLElement).getByRole('heading', { name: 'Frank R. Mendez' })).toBeInTheDocument()
        expect(within(projects as HTMLElement).getByRole('heading', { name: 'Projects' })).toBeInTheDocument()
        expect(
            within(contact as HTMLElement).getByRole('heading', { name: "Let's build something great" })
        ).toBeInTheDocument()
    })

    it('uses section anchors instead of route links', () => {
        render(<App />)

        const navigation = screen.getByRole('navigation', { name: 'Main navigation' })

        expect(within(navigation).getByRole('link', { name: 'About' })).toHaveAttribute('href', '#about')
        expect(within(navigation).getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#projects')
        expect(within(navigation).getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
        expect(screen.getByRole('link', { name: 'View Projects' })).toHaveAttribute('href', '#projects')
        expect(screen.getByRole('link', { name: 'Get in Touch' })).toHaveAttribute('href', '#contact')
    })

    it('showcases the current GitHub repositories', () => {
        const { container } = render(<App />)

        expect(screen.getByRole('heading', { name: 'Grow With Me' })).toBeInTheDocument()
        expect(screen.getByRole('heading', { name: 'MFK Lending Corp' })).toBeInTheDocument()
        expect(screen.getByRole('heading', { name: 'PulseChat' })).toBeInTheDocument()
        expect(screen.getByRole('heading', { name: 'Food Delivery Observability' })).toBeInTheDocument()
        expect(screen.getByRole('heading', { name: 'Car Systems Explorer' })).toBeInTheDocument()

        expect(container.querySelector('a[href="https://github.com/frank-mendez/grow-with-me"]')).toBeInTheDocument()
        expect(container.querySelector('a[href="https://github.com/frank-mendez/mfklending"]')).toBeInTheDocument()
        expect(container.querySelector('a[href="https://github.com/frank-mendez/pulse-chat-"]')).toBeInTheDocument()
        expect(screen.queryByRole('heading', { name: 'Real-Time Chat Platform' })).not.toBeInTheDocument()
    })

    it('includes the LinkedIn-aligned technical capabilities', () => {
        const { container } = render(<App />)
        const skills = container.querySelector('#skills')

        expect(skills).toBeInTheDocument()
        expect(within(skills as HTMLElement).getByText('Go')).toBeInTheDocument()
        expect(within(skills as HTMLElement).getByText('Kubernetes')).toBeInTheDocument()
        expect(within(skills as HTMLElement).getByText('Claude Code')).toBeInTheDocument()
        expect(within(skills as HTMLElement).getByText('OpenAI API')).toBeInTheDocument()
    })

    it('shows a back-to-top control above the chat launcher after scrolling', async () => {
        render(<App />)
        Object.defineProperty(window, 'scrollY', { configurable: true, value: 700 })

        fireEvent.scroll(window)

        const backToTop = await waitFor(() => screen.getByRole('link', { name: 'Back to top' }))
        const chatLauncher = screen.getByRole('button', { name: 'Open chat about Frank' })

        expect(backToTop).toHaveAttribute('href', '#top')
        expect(backToTop.compareDocumentPosition(chatLauncher) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy()

        Object.defineProperty(window, 'scrollY', { configurable: true, value: 0 })
    })
})
