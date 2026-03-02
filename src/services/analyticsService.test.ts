import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

describe('analyticsService', () => {
    beforeEach(() => {
        document.head.innerHTML = ''
        window.dataLayer = []
        window.gtag = undefined
        vi.resetModules()
    })

    afterEach(() => {
        vi.unstubAllEnvs()
    })

    it('initializes GA when measurement ID is set', async () => {
        vi.stubEnv('VITE_GA_MEASUREMENT_ID', 'G-WJNGK7ZYQF')

        const { initializeAnalytics } = await import('./analyticsService')
        initializeAnalytics()

        const script = document.getElementById('ga4-script') as HTMLScriptElement | null

        expect(script).toBeTruthy()
        expect(script?.src).toContain('https://www.googletagmanager.com/gtag/js?id=G-WJNGK7ZYQF')
        expect(window.dataLayer?.length).toBe(2)
    })

    it('tracks custom events after initialization', async () => {
        vi.stubEnv('VITE_GA_MEASUREMENT_ID', 'G-WJNGK7ZYQF')

        const { initializeAnalytics, trackEvent } = await import('./analyticsService')
        initializeAnalytics()
        trackEvent('theme_change', { theme: 'dark' })

        const latestEvent = window.dataLayer?.[window.dataLayer.length - 1] as unknown[]

        expect(latestEvent[0]).toBe('event')
        expect(latestEvent[1]).toBe('theme_change')
    })
})
