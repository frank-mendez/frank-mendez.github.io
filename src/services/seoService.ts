import { DEFAULT_SOCIAL_IMAGE, getCanonicalUrl, getSeoByPath } from '../constants/seo'

const setMetaByName = (name: string, content: string) => {
    let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null

    if (!element) {
        element = document.createElement('meta')
        element.setAttribute('name', name)
        document.head.appendChild(element)
    }

    element.setAttribute('content', content)
}

const setMetaByProperty = (property: string, content: string) => {
    let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement | null

    if (!element) {
        element = document.createElement('meta')
        element.setAttribute('property', property)
        document.head.appendChild(element)
    }

    element.setAttribute('content', content)
}

const setCanonicalLink = (href: string) => {
    let element = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null

    if (!element) {
        element = document.createElement('link')
        element.setAttribute('rel', 'canonical')
        document.head.appendChild(element)
    }

    element.setAttribute('href', href)
}

export const applyRouteMetadata = (pathname: string) => {
    const seo = getSeoByPath(pathname)
    const canonicalUrl = getCanonicalUrl(pathname)

    document.title = seo.title
    setMetaByName('description', seo.description)
    setMetaByName('robots', 'index, follow')
    setMetaByName('twitter:card', 'summary_large_image')
    setMetaByName('twitter:title', seo.title)
    setMetaByName('twitter:description', seo.description)
    setMetaByName('twitter:image', DEFAULT_SOCIAL_IMAGE)

    setMetaByProperty('og:type', 'website')
    setMetaByProperty('og:title', seo.title)
    setMetaByProperty('og:description', seo.description)
    setMetaByProperty('og:image', DEFAULT_SOCIAL_IMAGE)
    setMetaByProperty('og:url', canonicalUrl)

    setCanonicalLink(canonicalUrl)
}
