import { Grid, GridItem, Heading, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react"

export const ResultScene = () => {
  const mockResult = {
    name: 'Osteria Itália',
    category: 'Italiana',
    openingHours: 'ter-sáb das 19h às 23h',
    address: 'R. Gen. Osório, 63 - Vila Ema',
    phone: '(12) 3308-0633'
  }

  return (
    <Grid data-testid="ResultScene" gap={10}>
      <GridItem>
        <Stack spacing={6}>
          <Heading as='h1' size='2xl' color="#6B46C1">{mockResult.name}</Heading>
          <Heading as='h2' size='lg' color="#0BC5EA" style={{textTransform: 'uppercase'}}>
            {mockResult.category}
          </Heading>
        </Stack>
      </GridItem>
      <GridItem textAlign="left">
        <UnorderedList>
          <Stack spacing={3}>
            <ListItem><Text as="b">Horários:</Text> {mockResult.openingHours}</ListItem>
            <ListItem><Text as="b">Endereço:</Text> {mockResult.address}</ListItem>
            <ListItem><Text as="b">Telefone:</Text> {mockResult.phone}</ListItem>
          </Stack>
        </UnorderedList>
      </GridItem>
    </Grid>
  )
}