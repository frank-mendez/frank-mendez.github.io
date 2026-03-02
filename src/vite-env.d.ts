/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_GA_MEASUREMENT_ID?: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}

type Gtag = (...args: unknown[]) => void

interface Window {
    dataLayer?: unknown[]
    gtag?: Gtag
}
