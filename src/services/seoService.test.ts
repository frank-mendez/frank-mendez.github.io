import { describe, expect, it } from 'vitest'
import { applyRouteMetadata } from './seoService'

describe('seoService', () => {
    it('applies route metadata for about page', () => {
        applyRouteMetadata('/about')

        const description = document.querySelector('meta[name="description"]')
        const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
        const ogTitle = document.querySelector('meta[property="og:title"]')

        expect(document.title).toBe('About Frank Mendez | Frontend Engineer')
        expect(description).toHaveAttribute(
            'content',
            'Learn about Frank Mendez, a frontend-focused engineer with 10+ years of experience building modern web applications.'
        )
        expect(canonical?.href).toBe('https://frank-mendez.github.io/#/about')
        expect(ogTitle).toHaveAttribute('content', 'About Frank Mendez | Frontend Engineer')
    })
})
