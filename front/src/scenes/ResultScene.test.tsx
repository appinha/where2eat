import React from "react"
import { screen } from "@testing-library/react"
import { render } from "../test-utils"
import { ResultScene } from "./ResultScene"

test("renders ResultScene", () => {
  render(<ResultScene />)
  const scene = screen.getByTestId('ResultScene')

  expect(scene).toHaveTextContent(/Osteria Itália/i)
  expect(scene).toHaveTextContent(/Italiana/i)
  expect(scene).toHaveTextContent(/Horários: ter-sáb das 19h às 23h/i)
  expect(scene).toHaveTextContent(/Endereço: R. Gen. Osório, 63 - Vila Ema/i)
  expect(scene).toHaveTextContent(/Telefone: \(12\) 3308-0633/i)
})