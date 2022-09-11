import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../test-utils"
import { HomeScene } from "./HomeScene"

test("renders HomeScene", () => {
  render(<HomeScene />)
  const scene = screen.getByTestId('HomeScene')

  expect(screen.getByLabelText(/logo/i)).toBeInTheDocument()
  expect(scene).toHaveTextContent(/Edit src\/App.tsx and save to reload./i)
  expect(scene).toHaveTextContent(/Learn Chakra/i)
})
