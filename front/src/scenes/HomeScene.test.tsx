import React from "react"
import * as router from 'react-router'
import { screen, fireEvent } from "@testing-library/react"
import { render } from "../test-utils"
import { HomeScene } from "./HomeScene"

jest.useFakeTimers();

const navigate = jest.fn()

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
})

test("renders HomeScene", () => {
  render(<HomeScene />)
  const scene = screen.getByTestId('HomeScene')

  expect(screen.queryByLabelText(/logo/i)).toBeInTheDocument()
  expect(scene).toHaveTextContent(/Onde comer?/i)
})

test("logo spins when button is clicked", () => {
  render(<HomeScene />)

  expect(screen.queryByLabelText(/spinning logo/i)).not.toBeInTheDocument()
  const logo = screen.queryByLabelText(/logo/i)
  expect(logo).toBeInTheDocument()
  expect(logo).not.toHaveStyle(`transform: rotate(1080deg)`)
  expect(logo).not.toHaveStyle(`transition: transform 2.5s ease-in`)

  fireEvent.click(screen.getByText(/Onde comer?/i))

  const spinningLogo = screen.queryByLabelText(/spinning logo/i)
  expect(spinningLogo).toBeInTheDocument()
  expect(spinningLogo).toHaveStyle(`transform: rotate(1080deg)`)
  expect(spinningLogo).toHaveStyle(`transition: transform 2.5s ease-in`)
})

test("upon button click, redirects to ResultScene only after logo transition is finished", () => {
  render(<HomeScene />)

  expect(navigate).not.toHaveBeenCalledWith('/result')
  fireEvent.click(screen.getByText(/Onde comer?/i))
  expect(navigate).not.toHaveBeenCalledWith('/result')
  jest.runAllTimers();
  expect(navigate).toHaveBeenCalledWith('/result')
})
