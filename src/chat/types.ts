export enum ChatSender {
    User = 'user',
    Bot = 'bot',
}

export type ChatMessage = {
    id: number
    sender: ChatSender
    text: string
}

export type ChatApiMessage = {
    role: 'user' | 'assistant'
    content: string
}

