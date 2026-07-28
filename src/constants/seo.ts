export const SITE_URL = 'https://frank-mendez.github.io'
export const DEFAULT_SOCIAL_IMAGE = `${SITE_URL}/images/frank.jpg`

export type RouteSeo = {
    title: string
    description: string
}

const HOME_SEO: RouteSeo = {
    title: 'Frank Mendez | Frontend Engineer',
    description:
        'Frontend engineer portfolio of Frank Mendez featuring React, TypeScript, and product-focused web projects.',
}

export const ROUTE_SEO: Record<string, RouteSeo> = {
    '/': HOME_SEO,
}

export const getSeoByPath = (pathname: string): RouteSeo => ROUTE_SEO[pathname] ?? HOME_SEO

export const getCanonicalUrl = (): string => `${SITE_URL}/`
