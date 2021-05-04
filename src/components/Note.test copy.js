/* eslint-disable no-restricted-globals */
import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Note from './Note'

test('renders content', () => {
  const note = {
    content: 'This is a test',
    important: true,
  }
  const component = render(<Note note={note} />)

  const textContainer = component.getByText(note.content)

  // expect(textContainer).toBeInTheDocument()
  expect(textContainer).toHaveTextContent(note.content)
})

test('clicking the button calls event handler once', () => {
  const note = {
    content: 'This is a test',
    important: true,
  }

  render(<Note note={note} />)

  userEvent.click(screen.getByRole('button', { name: /show login/i }))

  screen.debug()

  // screen.getByRole('textbox')
})
