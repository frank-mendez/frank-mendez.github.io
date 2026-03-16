import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'

describe('Router', () => {
    it('renders the home page content and chatbot trigger', async () => {
        await router.navigate('/')
        render(<RouterProvider router={router} />)

        expect(await screen.findByRole('heading', { name: 'Frank Mendez' })).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /open chat about frank/i })).toBeInTheDocument()
    })

    it.each([
        {
            path: '/about',
            assertion: () => screen.getByRole('heading', { name: 'Work Experience' }),
        },
        {
            path: '/contact',
            assertion: () => screen.getByRole('heading', { name: "Let's build something great" }),
        },
        {
            path: '/projects',
            assertion: () => screen.getByRole('heading', { name: 'Projects' }),
        },
    ])('renders chatbot trigger on $path route', async ({ path, assertion }) => {
        await router.navigate(path)
        render(<RouterProvider router={router} />)

        expect(assertion()).toBeInTheDocument()
        expect(screen.getByRole('button', { name: /open chat about frank/i })).toBeInTheDocument()
    })
})
