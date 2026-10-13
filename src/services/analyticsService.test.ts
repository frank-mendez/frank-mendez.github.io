import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

const commands = () => (window.dataLayer ?? []).map((entry) => Array.from(entry as ArrayLike<unknown>))

describe('analyticsService', () => {
    beforeEach(() => {
        document.head.innerHTML = ''
        window.dataLayer = []
        window.gtag = undefined
        vi.resetModules()
        vi.stubEnv('PROD', true)
        vi.stubEnv('VITE_GA_MEASUREMENT_ID', 'G-TEST123456')
        vi.stubEnv('VITE_GA_DEBUG', '')
        // Keep unit tests offline while retaining the script element and its error event.
        const append = document.head.appendChild.bind(document.head)
        vi.spyOn(document.head, 'appendChild').mockImplementation((node) => {
            if (node instanceof HTMLScriptElement) node.type = 'text/plain'
            return append(node)
        })
    })

    afterEach(() => {
        window.history.replaceState(null, '', '/')
        vi.restoreAllMocks()
        vi.unstubAllEnvs()
    })

    it.each([undefined, '', 'invalid', 'G-', 'G-TEST<script>'])('disables tracking for ID %s', async (id) => {
        vi.stubEnv('VITE_GA_MEASUREMENT_ID', id)
        const { initializeAnalytics, trackPageView, trackEvent } = await import('./analyticsService')
        initializeAnalytics()
        trackPageView('/', 'Portfolio')
        trackEvent('navbar_click', { label: 'work', destination: '#work' })
        expect(document.getElementById('ga4-script')).toBeNull()
        expect(commands()).toEqual([])
    })

    it('does not initialize in development even with a production ID', async () => {
        vi.stubEnv('PROD', false)
        const { initializeAnalytics } = await import('./analyticsService')
        initializeAnalytics()
        expect(document.getElementById('ga4-script')).toBeNull()
        expect(commands()).toEqual([])
    })

    it('uses the configured ID and the Google-supported arguments queue exactly once', async () => {
        const { initializeAnalytics } = await import('./analyticsService')
        initializeAnalytics()
        initializeAnalytics()
        expect(document.querySelectorAll('#ga4-script')).toHaveLength(1)
        expect((document.getElementById('ga4-script') as HTMLScriptElement).src).toBe(
            'https://www.googletagmanager.com/gtag/js?id=G-TEST123456'
        )
        expect(commands()).toEqual([
            ['js', expect.any(Date)],
            ['config', 'G-TEST123456', expect.objectContaining({ send_page_view: false })],
        ])
        expect(commands()[1][2]).not.toHaveProperty('debug_mode')
        expect(Object.prototype.toString.call(window.dataLayer?.[0])).toBe('[object Arguments]')
    })

    it('does not send events through another tag when this service is disabled', async () => {
        vi.stubEnv('VITE_GA_MEASUREMENT_ID', '')
        window.gtag = vi.fn()
        const { initializeAnalytics, trackEvent, trackPageView } = await import('./analyticsService')
        initializeAnalytics()
        trackEvent('chatbot_toggle', { is_open: true })
        trackPageView('/', 'Portfolio')
        expect(window.gtag).not.toHaveBeenCalled()
    })

    it('sends a single initial view with a query-free, fragment-free location', async () => {
        window.history.replaceState(null, '', '/?email=private@example.test#contact')
        const { initializeAnalytics, trackPageView } = await import('./analyticsService')
        initializeAnalytics()
        trackPageView('/', 'Portfolio')
        trackPageView('/', 'Portfolio')
        expect(commands().filter((entry) => entry[1] === 'page_view')).toEqual([
            [
                'event',
                'page_view',
                {
                    page_title: 'Portfolio',
                    page_path: '/',
                    page_location: `${window.location.origin}/`,
                    send_to: 'G-TEST123456',
                },
            ],
        ])
    })

    it('sends custom events to the configured stream without arbitrary text fields', async () => {
        const { initializeAnalytics, trackEvent } = await import('./analyticsService')
        initializeAnalytics()
        trackEvent('chatbot_message_submit', {
            message_length: 12,
            message: 'private message',
            email: 'private@example.test',
        })
        expect(commands().slice(-1)[0]).toEqual([
            'event',
            'chatbot_message_submit',
            { message_length: 12, send_to: 'G-TEST123456' },
        ])
    })

    it('ignores calls before initialization and after a blocked script without throwing', async () => {
        const { initializeAnalytics, trackEvent, trackPageView } = await import('./analyticsService')
        trackEvent('chatbot_toggle', { is_open: true })
        expect(commands()).toEqual([])
        initializeAnalytics()
        document.getElementById('ga4-script')?.dispatchEvent(new Event('error'))
        const count = commands().length
        expect(() => {
            trackEvent('chatbot_toggle', { is_open: true })
            trackPageView('/', 'Portfolio')
        }).not.toThrow()
        expect(commands()).toHaveLength(count)
    })
    it('queues navigation, project, and contact metadata without form contents', async () => {
        const { initializeAnalytics, trackEvent } = await import('./analyticsService')
        initializeAnalytics()
        trackEvent('navbar_click', { label: 'work', destination: '#work' })
        trackEvent('project_click', {
            project: 'MFK Lending',
            destination: 'https://github.com/frank-mendez/mfklending',
        })
        trackEvent('contact_submit_success', {
            form_provider: 'frank-bot',
            name: 'Private name',
            message: 'Private brief',
        })
        trackEvent('contact_submit_error', { form_provider: 'frank-bot', email: 'private@example.test' })
        expect(commands().slice(2)).toEqual([
            ['event', 'navbar_click', { label: 'work', destination: '#work', send_to: 'G-TEST123456' }],
            [
                'event',
                'project_click',
                {
                    project: 'MFK Lending',
                    destination: 'https://github.com/frank-mendez/mfklending',
                    send_to: 'G-TEST123456',
                },
            ],
            ['event', 'contact_submit_success', { form_provider: 'frank-bot', send_to: 'G-TEST123456' }],
            ['event', 'contact_submit_error', { form_provider: 'frank-bot', send_to: 'G-TEST123456' }],
        ])
    })

    it('enables DebugView only when explicitly requested', async () => {
        vi.stubEnv('VITE_GA_DEBUG', 'true')
        const { initializeAnalytics } = await import('./analyticsService')
        initializeAnalytics()
        expect(commands()[1]).toEqual(['config', 'G-TEST123456', expect.objectContaining({ debug_mode: true })])
    })
})
