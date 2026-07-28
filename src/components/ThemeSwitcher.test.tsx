import { cleanup, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import ThemeSwitcher from './ThemeSwitcher'

afterEach(() => {
    cleanup()
    localStorage.clear()
    document.documentElement.dataset.theme = 'dark'
    vi.restoreAllMocks()
})

describe('ThemeSwitcher', () => {
    it('uses the dark presentation by default', async () => {
        localStorage.clear()
        document.documentElement.removeAttribute('data-theme')

        render(<ThemeSwitcher />)

        await waitFor(() => expect(document.documentElement.dataset.theme).toBe('dark'))
        expect(screen.getByRole('checkbox')).toBeChecked()
    })

    it('keeps working when browser storage is unavailable', async () => {
        vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => {
            throw new DOMException('Storage is blocked', 'SecurityError')
        })
        vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {
            throw new DOMException('Storage is blocked', 'SecurityError')
        })

        render(<ThemeSwitcher />)

        const themeToggle = screen.getByRole('checkbox')
        expect(themeToggle).toBeChecked()

        fireEvent.click(themeToggle)
        await waitFor(() => expect(document.documentElement.dataset.theme).toBe('light'))
    })
})
