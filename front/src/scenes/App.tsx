import * as React from "react"
import { ChakraProvider, Box, Grid, theme } from "@chakra-ui/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ColorModeSwitcher } from "../components/ColorModeSwitcher"
import { HomeScene } from "./HomeScene"
import { ResultScene } from "./ResultScene"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeScene />} />
            <Route path="/result" element={<ResultScene />} />
          </Routes>
        </BrowserRouter>
      </Grid>
    </Box>
  </ChakraProvider>
)
