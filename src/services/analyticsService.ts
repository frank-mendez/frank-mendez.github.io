const GA_SCRIPT_ID = 'ga4-script'

const GA_MEASUREMENT_ID = 'G-WJNGK7ZYQF' // Replace with your actual GA4 Measurement ID

type AnalyticsEventName =
    | 'navbar_click'
    | 'project_click'
    | 'contact_submit_success'
    | 'contact_submit_error'
    | 'chatbot_toggle'
    | 'chatbot_message_submit'
    | 'chatbot_message_blocked'
    | 'chatbot_response_received'
    | 'theme_change'

let isInitialized = false

const ensureGtag = () => {
    if (!window.dataLayer) {
        window.dataLayer = []
    }

    if (!window.gtag) {
        window.gtag = (...args: unknown[]) => {
            window.dataLayer?.push(args)
        }
    }
}

const ensureScript = () => {
    if (document.getElementById(GA_SCRIPT_ID)) {
        return
    }

    const script = document.createElement('script')
    script.id = GA_SCRIPT_ID
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`
    document.head.appendChild(script)
}

export const initializeAnalytics = () => {
    if (!GA_MEASUREMENT_ID || isInitialized || typeof window === 'undefined') {
        return
    }

    ensureGtag()
    ensureScript()

    window.gtag?.('js', new Date())
    window.gtag?.('config', GA_MEASUREMENT_ID, { send_page_view: false })

    isInitialized = true
}

export const trackPageView = (pathname: string, title: string) => {
    if (!GA_MEASUREMENT_ID) {
        return
    }

    const normalizedPath = pathname === '/' ? '/' : `/#${pathname}`

    window.gtag?.('event', 'page_view', {
        page_title: title,
        page_path: normalizedPath,
        page_location: `${window.location.origin}${normalizedPath}`,
    })
}

export const trackEvent = (eventName: AnalyticsEventName, params?: Record<string, string | number | boolean>) => {
    if (!GA_MEASUREMENT_ID) {
        return
    }

    window.gtag?.('event', eventName, params)
}
