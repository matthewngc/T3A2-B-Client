import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import NavBar from '../NavBar'

// Tests whether Login is present in the 'NavBar' Component. Verifies if the element is defined.

test('NavBar component', () => {
    render(
        <MemoryRouter>
        <NavBar />
        </MemoryRouter>
    )

    const loginLink = screen.getByText(/Login/i)

    expect(loginLink).toBeDefined()
})
