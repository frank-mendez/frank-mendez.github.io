import html from '../index.html?raw'
import { describe, expect, it } from 'vitest'
import { getSeoByPath } from './constants/seo'

describe('Static portfolio bootstrap', () => {
    it('sets a fixed light theme before scripts run, regardless of saved preferences', () => {
        expect(html).toContain('<html lang="en" data-theme="light">')
        expect(html).not.toContain('localStorage')
        expect(html).toContain('<meta name="theme-color" content="#f7f5ed"')
    })

    it('keeps static SEO aligned with runtime metadata', () => {
        const seo = getSeoByPath('/')
        expect(html).toContain(`<title>${seo.title}</title>`)
        expect(html).toContain(`content="${seo.description}"`)
        expect(html).toContain('"jobTitle": "Senior Software Engineer"')
    })
})
