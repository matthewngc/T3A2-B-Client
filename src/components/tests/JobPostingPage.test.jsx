import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import JobPostingPage from './src/components/JobPostingPage'

const listing = {
  title: 'Software Engineer',
  location: 'Sydney',
  description: 'We are seeking a skilled software engineer to join our team.',
  education: 'Bachelor\'s degree in Computer Science or related field',
  experience: '3 years'
}

const submitApplication = jest.fn()

describe('JobPostingPage component', () => {
    // Tests that the component correclty displays values of job listing passed in as a prop
  test('renders title, location, description, requirements, and apply button', () => {
    render(
      <JobPostingPage
        listing={listing}
        submitApplication={submitApplication}
      />
    )

    const title = screen.getByText(/Software Engineer/i)
    const location = screen.getByText(/Sydney/i)
    const description = screen.getByText(/We are seeking a skilled software engineer to join our team./i)
    const education = screen.getByText(/Bachelor's degree in Computer Science or related field/i)
    const experience = screen.getByText(/3 years/i)
    const applyButton = screen.getByText(/Apply/i)

    expect(title).toBeDefined()
    expect(location).toBeDefined()
    expect(description).toBeDefined()
    expect(education).toBeDefined()
    expect(experience).toBeDefined()
    expect(applyButton).toBeDefined()
  })

            // Tests that clicking the apply button correctly triggers the 'submitApplication' function passed in as a prop and that it passes the correct joblisting to the function as an argument
  test('submitting the application calls submitApplication function', () => {
    render(
      <JobPostingPage
        listing={listing}
        submitApplication={submitApplication}
      />
    )

    const applyButton = screen.getByText(/Apply/i)
    fireEvent.click(applyButton)

    expect(submitApplication).toHaveBeenCalledWith(listing)
  })
})
