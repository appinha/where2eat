import { useEffect, useRef, useState } from "react"
import { ChakraProvider, Box, Center, VStack, theme } from "@chakra-ui/react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ColorModeSwitcher } from "../components/ColorModeSwitcher"
import { HomeScene } from "./HomeScene"
import { ResultScene } from "./ResultScene"

export const App = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(document.createElement("div"));

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);
    handleResize();

    setHeaderHeight(headerRef.current.clientHeight);

    return () => window.removeEventListener("resize", handleResize);
  }, [headerRef])

  const contentHeight = windowHeight - headerHeight;

  const header = (
    <Box ref={headerRef} p={3} pb="0" textAlign="right">
      <ColorModeSwitcher justifySelf="flex-end" />
    </Box>
  )

  const content = (
    <Center h={contentHeight} p={3} pb={`${headerHeight}px`}>
      <VStack>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomeScene />} />
            <Route path="/result" element={<ResultScene />} />
          </Routes>
        </BrowserRouter>
      </VStack>
    </Center>
  )

  return (
    <ChakraProvider theme={theme}>
      <Box minH="100vh" textAlign="center" fontSize="xl">
        {header}
        {content}
      </Box>
    </ChakraProvider>
  )
}
