import { FRANK_GREETING_KEYWORDS, FRANK_INTENT_KEYWORDS } from '../constants/chat'

export const normalizeText = (text: string) => text.toLowerCase().trim()

export const isAboutFrank = (raw: string) => {
    const text = normalizeText(raw)

    if (text.length === 0) return false

    if (FRANK_GREETING_KEYWORDS.some((g) => text === g || text.startsWith(g + ' '))) {
        return true
    }

    return FRANK_INTENT_KEYWORDS.some((kw) => text.includes(kw))
}
