import { FRANK_CHAT_API_ENDPOINT, FRANK_ERROR_MESSAGE, FRANK_FALLBACK_REPLY } from '../constants/chat'
import { ChatApiMessage, ChatMessage } from '../types/chat'

const mapToApiMessages = (messages: ChatMessage[]): ChatApiMessage[] =>
    messages.map((m) => ({
        role: m.sender === 'user' ? 'user' : 'assistant',
        content: m.text,
    }))

export const getFrankReply = async (history: ChatMessage[]): Promise<string> => {
    const apiMessages = mapToApiMessages(history)

    try {
        const response = await fetch(FRANK_CHAT_API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ messages: apiMessages }),
        })

        if (!response.ok) {
            return FRANK_ERROR_MESSAGE
        }

        const data: { reply?: string } = await response.json()
        return data.reply ?? FRANK_FALLBACK_REPLY
    } catch {
        return FRANK_ERROR_MESSAGE
    }
}
