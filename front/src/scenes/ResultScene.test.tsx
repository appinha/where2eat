import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../test-utils"
import { ResultScene } from "./ResultScene"

test("renders ResultScene", () => {
  render(<ResultScene />)
  const scene = screen.getByTestId('ResultScene')

  expect(scene).toHaveTextContent(/ResultScene/i)
})