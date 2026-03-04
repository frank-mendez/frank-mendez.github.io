import { FRANK_CONTACT_API_ENDPOINT } from '../constants/chat'

export type ContactPayload = {
    name: string
    email: string
    company?: string
    projectType: string
    message: string
    discoveryCall: boolean
}

export type ContactResponse = {
    ok: boolean
    id?: string
}

const getErrorMessage = (data: unknown, fallback: string): string => {
    if (typeof data === 'object' && data !== null && 'error' in data) {
        const error = (data as { error?: { message?: unknown } }).error
        if (typeof error?.message === 'string' && error.message.trim().length > 0) {
            return error.message
        }
    }

    return fallback
}

export const sendContact = async (payload: ContactPayload): Promise<ContactResponse> => {
    const response = await fetch(FRANK_CONTACT_API_ENDPOINT, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })

    const data: unknown = await response.json()

    if (!response.ok) {
        throw new Error(getErrorMessage(data, 'Contact request failed'))
    }

    return data as ContactResponse
}
