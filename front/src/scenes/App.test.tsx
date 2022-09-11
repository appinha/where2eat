import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../test-utils"
import { App } from "./App"

test("renders ColorModeSwitcher", () => {
  render(<App />)
  const colorModeSwitcher = screen.getByLabelText(/switch to dark mode/i)
  expect(colorModeSwitcher).toBeInTheDocument()
})
