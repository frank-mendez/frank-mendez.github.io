import { FormEvent, useRef, useState } from 'react'
import { getFrankReply } from '../services/chatService'
import { isAboutFrank } from '../services/intentService'
import { FRANK_INITIAL_MESSAGES, FRANK_LOADING_MESSAGE, FRANK_NOT_ABOUT_MESSAGE } from '../constants/chat'
import { ChatMessage, ChatSender } from '../types/chat'
import { trackEvent } from '../services/analyticsService'

type UseFrankChatResult = {
    isOpen: boolean
    toggleOpen: () => void
    input: string
    setInput: (value: string) => void
    isLoading: boolean
    messages: ChatMessage[]
    handleSubmit: (event: FormEvent<HTMLFormElement>) => void
    loadingMessage: string
}

export const useFrankChat = (): UseFrankChatResult => {
    const [isOpen, setIsOpen] = useState(false)
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [messages, setMessages] = useState<ChatMessage[]>(FRANK_INITIAL_MESSAGES)

    const nextIdRef = useRef(
        FRANK_INITIAL_MESSAGES.length > 0 ? Math.max(...FRANK_INITIAL_MESSAGES.map((m) => m.id)) + 1 : 1
    )

    const getNextId = () => {
        const current = nextIdRef.current
        nextIdRef.current += 1
        return current
    }

    const toggleOpen = () => {
        setIsOpen((prev) => {
            const next = !prev

            trackEvent('chatbot_toggle', {
                is_open: next,
            })

            return next
        })
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const trimmed = input.trim()
        if (!trimmed) return

        trackEvent('chatbot_message_submit', {
            message_length: trimmed.length,
        })

        const userMessage: ChatMessage = {
            id: getNextId(),
            sender: ChatSender.User,
            text: trimmed,
        }

        const isFrankQuestion = isAboutFrank(trimmed)

        if (!isFrankQuestion) {
            const botMessage: ChatMessage = {
                id: getNextId(),
                sender: ChatSender.Bot,
                text: FRANK_NOT_ABOUT_MESSAGE,
            }

            trackEvent('chatbot_message_blocked', {
                reason: 'not_about_frank',
            })

            setMessages((prev) => [...prev, userMessage, botMessage])
            setInput('')
            return
        }

        const historyForApi = [...messages, userMessage]

        setMessages((prev) => [...prev, userMessage])
        setInput('')
        setIsLoading(true)

        void (async () => {
            const replyText = await getFrankReply(historyForApi)

            const botMessage: ChatMessage = {
                id: getNextId(),
                sender: ChatSender.Bot,
                text: replyText,
            }

            trackEvent('chatbot_response_received', {
                response_length: replyText.length,
            })

            setMessages((prev) => [...prev, botMessage])
            setIsLoading(false)
        })()
    }

    return {
        isOpen,
        toggleOpen,
        input,
        setInput,
        isLoading,
        messages,
        handleSubmit,
        loadingMessage: FRANK_LOADING_MESSAGE,
    }
}
