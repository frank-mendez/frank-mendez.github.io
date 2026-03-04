import { ChatMessage, ChatSender } from '../types/chat'

export const FRANK_API_BASE = 'https://frank-bot.vercel.app'

export const FRANK_CHAT_API_ENDPOINT = `${FRANK_API_BASE}/api/chat`
export const FRANK_CONTACT_API_ENDPOINT = `${FRANK_API_BASE}/api/contact`

export const FRANK_NOT_ABOUT_MESSAGE =
    'I can only answer questions about Frank Mendez. Please ask about his background, experience, tech stack, or life.'

export const FRANK_LOADING_MESSAGE = 'Thinking about Frank...'

export const FRANK_FALLBACK_REPLY =
    "I'm having trouble getting a reply from Frank's chat service right now. Please try again in a moment."

export const FRANK_ERROR_MESSAGE =
    "Something went wrong while contacting Frank's chat service. Please try again shortly."

export const FRANK_INITIAL_MESSAGES: ChatMessage[] = [
    {
        id: 1,
        sender: ChatSender.Bot,
        text: "Hi, I'm Frank's personal chat bot. Ask me anything about Frank Mendez — his experience, tech stack, or life.",
    },
]

export const FRANK_GREETING_KEYWORDS = [
    'hi',
    'hello',
    'hey',
    'yo',
    'sup',
    'good morning',
    'good evening',
    'good afternoon',
] as const

export const FRANK_INTENT_KEYWORDS = [
    'frank',
    'mendez',
    'you',
    'your',
    'him',
    'his',
    'engineer',
    'developer',
    'experience',
    'career',
    'stack',
    'skills',
    'tech',
    'technology',
    'frontend',
    'backend',
    'devops',
    'testing',
    'family',
    'wife',
    'married',
    'baby',
    'daughter',
    'girl',
    'cats',
    'work',
    'job',
    'role',
    'projects',
    'background',
    'profile',
    'bio',
    'about you',
    'about frank',
] as const
