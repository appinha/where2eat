import * as React from "react"
import { Button, VStack } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'
import { Logo } from "../components/Logo"

export const HomeScene = () => {
  const [isLogoSpinning, spinLogo] = React.useState(false);
  const navigate = useNavigate();

  const onButtonClick = () => {
    spinLogo(!isLogoSpinning);
    setTimeout(() => navigate('/result'), 2500)
  };

  return (
    <VStack data-testid="HomeScene" minH="100vh" spacing={20} pt={20}>
      <Logo h="40vmin" isSpinning={isLogoSpinning} pointerEvents="none" />
      <Button onClick={onButtonClick} size="lg" colorScheme="purple" color="white">
        Onde comer?
      </Button>
    </VStack>
  )
}
