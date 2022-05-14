import { SimpleGrid, Container, Group, Box, Text, Card } from '@mantine/core'
import Image from 'next/image'
import { useQuery } from 'react-query'
import { getCryptoTrending } from '../../lib/requests'

function CryptoTrending() {
  const { data: cryptoTrending } = useQuery('cryptoTrending', getCryptoTrending)

  return (
    <Container px='lg' size='1280px'>
      <Text
        sx={(theme) => ({
          borderLeft: `5px ${
            theme.colorScheme === 'dark'
              ? theme.colors.darkPrimary[5]
              : theme.colors.lightPrimary[5]
          } solid`,
          borderRight: `5px ${
            theme.colorScheme === 'dark'
              ? theme.colors.orange[5]
              : theme.colors.pink[5]
          } solid`,
          width: 'fit-content',
          margin: '0 auto',
          padding: '0 1rem',
          marginBottom: '3rem',
        })}
        size='xl'
      >
        C-7 Trending
      </Text>
      <Card
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark' ? '#21325E' : '#EAF5FA',
        })}
        shadow='xl'
      >
        <SimpleGrid
          breakpoints={[{ maxWidth: 'md', cols: 2 }]}
          sx={{
            placeSelf: 'center',
          }}
          cols={7}
        >
          {cryptoTrending.coins.map((coin, idx) => (
            <Box sx={{ textAlign: 'center' }} key={coin.item.coin_id}>
              <Image
                width={50}
                height={50}
                alt={coin.item.name}
                src={coin.item.large}
              />
              <Text>{coin.item.name}</Text>
            </Box>
          ))}
        </SimpleGrid>
      </Card>
    </Container>
  )
}

export default CryptoTrending
