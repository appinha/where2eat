import * as React from "react"
import { Button, Grid, GridItem } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'
import { Logo } from "../components/Logo"

export const HomeScene = () => {
  const [isLogoSpinning, spinLogo] = React.useState(false);
  const navigate = useNavigate();

  const onButtonClick = () => {
    spinLogo(!isLogoSpinning);
    setTimeout(() => navigate('/result'), 2.5 * 1000)
  }

  return (
    <Grid data-testid="HomeScene" gap={10}>
      <GridItem>
        <Logo h="40vmin" isSpinning={isLogoSpinning} pointerEvents="none" />
      </GridItem>
      <GridItem>
          <Button onClick={onButtonClick} size="lg" colorScheme="purple" color="white">
            Onde comer?
          </Button>
      </GridItem>
    </Grid>
  )
}
