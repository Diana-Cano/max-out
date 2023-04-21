import { render, screen } from '@testing-library/react'
import App from './App'
import userEvent from '@testing-library/user-event'

test("header renders with correct text", () => {
  render(<App />)
  const headerEl = screen.getByRole("heading")
  expect(headerEl.textContent).toBe("Testing Playground")
})

describe("tests for the button", () => {
  test("button changes color when clicked", () =>{
    render(<App />)
    const buttonEl = screen.getByRole("button")
    userEvent.click(buttonEl)
    expect(buttonEl).toHaveStyle({ backgroundColor: "blue" })
    expect(buttonEl.textContent).toBe("Change button color to green")
  })

  test("checkbox disables and enables button", () => {
    render(<App />)
    const buttonEl = screen.getByRole("button")
    const checkboxEl = screen.getByRole("checkbox")
    userEvent.click(checkboxEl)
    expect(buttonEl).toBeDisabled
    userEvent.click(checkboxEl)
    expect(buttonEl).toBeEnabled
  })
})

test("paragraph text changes when button is enabled or disabled", () => {
  render(<App />)
  const paragraphEl = screen.getByRole("paragraph")
  const checkboxEl = screen.getByRole("checkbox")
  expect(paragraphEl.textContent).toBe('Button is enabled')
  userEvent.click(checkboxEl)
  expect(paragraphEl.textContent).toBe('Button is disabled')
})

