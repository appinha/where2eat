import * as React from "react"
import { Button, VStack } from "@chakra-ui/react"
import { Logo } from "../components/Logo"

export const HomeScene = () => {
  const [isLogoSpinning, spinLogo] = React.useState(false);

  const onButtonClick = () => spinLogo(!isLogoSpinning);

  return (
    <VStack data-testid="HomeScene" minH="100vh" spacing={20} pt={20}>
      <Logo h="40vmin" isSpinning={isLogoSpinning} pointerEvents="none" />
      <Button onClick={onButtonClick} size="lg" colorScheme="purple" color="white">
        Onde comer?
      </Button>
    </VStack>
  )
}
