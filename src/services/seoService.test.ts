import { describe, expect, it } from 'vitest'
import { applyRouteMetadata } from './seoService'

describe('seoService', () => {
    it('applies metadata for the single-page portfolio', () => {
        applyRouteMetadata('/')

        const description = document.querySelector('meta[name="description"]')
        const canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
        const ogTitle = document.querySelector('meta[property="og:title"]')

        expect(document.title).toBe('Frank Mendez | Senior Software Engineer')
        expect(description).toHaveAttribute(
            'content',
            'Senior software engineer Frank Mendez builds reliable products with React, TypeScript, Node.js, and thoughtful full-stack delivery.'
        )
        expect(canonical?.href).toBe('https://frank-mendez.github.io/')
        expect(ogTitle).toHaveAttribute('content', 'Frank Mendez | Senior Software Engineer')
    })
})
