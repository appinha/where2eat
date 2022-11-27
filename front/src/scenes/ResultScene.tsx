import { useEffect, useState } from "react"
import { Grid, GridItem, Heading, ListItem, Stack, Text, UnorderedList } from "@chakra-ui/react"

type Result = {
  name: string;
  category: string;
  openingHours: string;
  address: string;
  phone: string;
} | null

const apiPath = 'http://localhost:8000'

export const ResultScene = () => {
  const [result, setResult] = useState<Result>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`${apiPath}/`, {
      headers: { 'Content-Type': 'application/json' },
      method: 'get',
    })
      .then(response => {
        if (!response.ok)
          throw new Error(`This is an HTTP error: The status is ${response.status}`);
        return response.json();
      })
      .then(data => {
        setResult(data);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
        setResult(null);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading)
    return <div data-testid="ResultScene"></div>

  if (error)
    return <div data-testid="ResultScene">error</div>

  return (
    <Grid data-testid="ResultScene" gap={10}>
      <GridItem>
        <Stack spacing={6}>
          <Heading as='h1' size='2xl' color="#6B46C1">{result!.name}</Heading>
          <Heading as='h2' size='lg' color="#0BC5EA" style={{textTransform: 'uppercase'}}>
            {result!.category}
          </Heading>
        </Stack>
      </GridItem>
      <GridItem textAlign="left">
        <UnorderedList>
          <Stack spacing={3}>
            <ListItem><Text as="b">Horários:</Text> {result!.openingHours}</ListItem>
            <ListItem><Text as="b">Endereço:</Text> {result!.address}</ListItem>
            <ListItem><Text as="b">Telefone:</Text> {result!.phone}</ListItem>
          </Stack>
        </UnorderedList>
      </GridItem>
    </Grid>
  )
}
