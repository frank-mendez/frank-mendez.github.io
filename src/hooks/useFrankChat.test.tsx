import { StrictMode } from 'react'
import { act, renderHook } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { useFrankChat } from './useFrankChat'
import { trackEvent } from '../services/analyticsService'

vi.mock('../services/analyticsService', () => ({ trackEvent: vi.fn() }))

describe('chatbot analytics', () => {
    it('emits exactly one event for each toggle in StrictMode', () => {
        const { result } = renderHook(useFrankChat, { wrapper: StrictMode })
        act(() => result.current.toggleOpen())
        act(() => result.current.toggleOpen())
        act(() => result.current.toggleOpen())
        expect(trackEvent).toHaveBeenCalledTimes(3)
        expect(vi.mocked(trackEvent).mock.calls).toEqual([
            ['chatbot_toggle', { is_open: true }],
            ['chatbot_toggle', { is_open: false }],
            ['chatbot_toggle', { is_open: true }],
        ])
    })
})
