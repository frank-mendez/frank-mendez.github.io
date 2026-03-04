import { FRANK_CHAT_API_ENDPOINT, FRANK_ERROR_MESSAGE, FRANK_FALLBACK_REPLY } from '../constants/chat'
import { ChatApiMessage, ChatMessage } from '../types/chat'

const mapToApiMessages = (messages: ChatMessage[]): ChatApiMessage[] =>
    messages.map((m) => ({
        role: m.sender === 'user' ? 'user' : 'assistant',
        content: m.text,
    }))

const getErrorMessage = (data: unknown, fallback: string): string => {
    if (typeof data === 'object' && data !== null && 'error' in data) {
        const error = (data as { error?: { message?: unknown } }).error
        if (typeof error?.message === 'string' && error.message.trim().length > 0) {
            return error.message
        }
    }

    return fallback
}

export const askFrank = async (messages: ChatApiMessage[]): Promise<string> => {
    const response = await fetch(FRANK_CHAT_API_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages }),
    })

    const data: unknown = await response.json()

    if (!response.ok) {
        throw new Error(getErrorMessage(data, 'Chat request failed'))
    }

    const reply = (data as { reply?: unknown }).reply
    if (typeof reply !== 'string' || reply.trim().length === 0) {
        return FRANK_FALLBACK_REPLY
    }

    return reply
}

export const getFrankReply = async (history: ChatMessage[]): Promise<string> => {
    const apiMessages = mapToApiMessages(history)

    try {
        return await askFrank(apiMessages)
    } catch {
        return FRANK_ERROR_MESSAGE
    }
}
