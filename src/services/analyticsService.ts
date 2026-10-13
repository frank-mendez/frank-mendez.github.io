const GA_SCRIPT_ID = 'ga4-script'
const configuredId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim()
const measurementId =
    import.meta.env.PROD && configuredId && /^G-[A-Z0-9]+$/.test(configuredId) ? configuredId : undefined

// Only metadata belongs in analytics. Never add form fields or chat message text here.
const eventParameters = {
    navbar_click: ['label', 'destination'],
    project_click: ['project', 'destination', 'project_title', 'project_type', 'link_type', 'target_url'],
    contact_submit_success: ['form_provider'],
    contact_submit_error: ['form_provider'],
    chatbot_toggle: ['is_open'],
    chatbot_message_submit: ['message_length'],
    chatbot_message_blocked: ['reason'],
    chatbot_response_received: ['response_length'],
    theme_change: ['theme'],
} as const

type AnalyticsEventName = keyof typeof eventParameters
let isInitialized = false
let scriptFailed = false
let initialViewSent = false

const canTrack = () => Boolean(measurementId && isInitialized && !scriptFailed && typeof window !== 'undefined')

export const initializeAnalytics = () => {
    if (!measurementId || isInitialized || typeof window === 'undefined') return

    window.dataLayer ??= []
    window.gtag ??= function () {
        // gtag.js consumes Arguments objects, not arrays of command parameters.
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer?.push(arguments)
    }

    window.gtag('js', new Date())
    window.gtag('config', measurementId, {
        send_page_view: false,
        ...(import.meta.env.VITE_GA_DEBUG === 'true' ? { debug_mode: true } : {}),
        allow_google_signals: false,
        allow_ad_personalization_signals: false,
        page_location: `${window.location.origin}/`,
    })
    isInitialized = true

    if (!document.getElementById(GA_SCRIPT_ID)) {
        const script = document.createElement('script')
        script.id = GA_SCRIPT_ID
        script.async = true
        script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
        script.addEventListener(
            'error',
            () => {
                scriptFailed = true
            },
            { once: true }
        )
        document.head.appendChild(script)
    }
}

// This portfolio is one document: section navigation is an interaction, not a new page.
export const trackPageView = (_pathname: string, title: string) => {
    if (!canTrack() || initialViewSent) return
    initialViewSent = true
    window.gtag?.('event', 'page_view', {
        page_title: title,
        page_path: '/',
        page_location: `${window.location.origin}/`,
        send_to: measurementId,
    })
}

export const trackEvent = (eventName: AnalyticsEventName, params?: Record<string, string | number | boolean>) => {
    if (!canTrack()) return
    const allowed = eventParameters[eventName] as readonly string[]
    const safeParams = Object.fromEntries(Object.entries(params ?? {}).filter(([key]) => allowed.includes(key)))
    window.gtag?.('event', eventName, { ...safeParams, send_to: measurementId })
}
