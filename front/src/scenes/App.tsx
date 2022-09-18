import * as React from "react"
import { ChakraProvider, Box, theme } from "@chakra-ui/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ColorModeSwitcher } from "../components/ColorModeSwitcher"
import { HomeScene } from "./HomeScene"
import { ResultScene } from "./ResultScene"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl" p={3}>
      <Box textAlign="right" pb={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Box>
      <Box minH="100vh">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeScene />} />
            <Route path="/result" element={<ResultScene />} />
          </Routes>
        </BrowserRouter>
      </Box>
    </Box>
  </ChakraProvider>
)
