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
    '/about': {
        title: 'About Frank Mendez | Frontend Engineer',
        description:
            'Learn about Frank Mendez, a frontend-focused engineer with 10+ years of experience building modern web applications.',
    },
    '/projects': {
        title: 'Projects | Frank Mendez',
        description:
            'Explore selected frontend and full-stack projects built by Frank Mendez using React, TypeScript, and modern tooling.',
    },
    '/contact': {
        title: 'Contact Frank Mendez',
        description:
            'Reach out to Frank Mendez for frontend engineering projects, collaborations, and consulting opportunities.',
    },
}

export const getSeoByPath = (pathname: string): RouteSeo => ROUTE_SEO[pathname] ?? HOME_SEO

export const getCanonicalUrl = (pathname: string): string => {
    if (pathname === '/') {
        return `${SITE_URL}/`
    }

    return `${SITE_URL}/#${pathname}`
}
