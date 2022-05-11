import {
  Container,
  Paper,
  Group,
  Text,
  Button,
  ActionIcon,
} from '@mantine/core'
import { getCryptoExchanges } from '../../lib/requests'
import { useQuery } from 'react-query'
import Carousel from 'react-elastic-carousel'
import Image from 'next/image'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons'

function Crypto() {
  const { data } = useQuery('cryptoExchanges', getCryptoExchanges)

  const breakPoints = [
    { width: 350, itemsToShow: 1 },
    { width: 520, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },
  ]

  return (
    <Container mt='xl' size='1280px'>
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
          marginTop: '3rem',
        })}
        align='center'
        size='xl'
      >
        C-7 Exchange
      </Text>
      <Carousel
        breakPoints={breakPoints}
        renderArrow={({ type, onClick, isEdge }) =>
          type === 'PREV' ? (
            <ActionIcon
              onClick={onClick}
              disabled={isEdge}
              sx={(theme) => ({
                position: 'relative',
                top: '5.7rem',
                cursor: 'pointer',
                color:
                  theme.colorScheme === 'dark'
                    ? theme.colors.orange[5]
                    : theme.colors.pink[5],
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.colors.darkPrimary[6]
                    : theme.colors.lightPrimary[6],
                '&:hover': {
                  backgroundColor:
                    theme.colorScheme === 'dark'
                      ? theme.colors.darkPrimary[7]
                      : theme.colors.lightPrimary[7],
                },
                '&:disabled': {
                  backgroundColor: 'transparent',
                },
              })}
              radius='xl'
              variant='filled'
            >
              <IconArrowLeft size={18} />
            </ActionIcon>
          ) : (
            <ActionIcon
              onClick={onClick}
              disabled={isEdge}
              variant='filled'
              sx={(theme) => ({
                position: 'relative',
                top: '5.7rem',
                cursor: 'pointer',
                color:
                  theme.colorScheme === 'dark'
                    ? theme.colors.orange[5]
                    : theme.colors.pink[5],
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.colors.darkPrimary[6]
                    : theme.colors.lightPrimary[6],
                '&:hover': {
                  backgroundColor:
                    theme.colorScheme === 'dark'
                      ? theme.colors.darkPrimary[7]
                      : theme.colors.lightPrimary[7],
                },
                '&:disabled': {
                  backgroundColor: 'transparent',
                  border: 'none',
                },
              })}
              radius='xl'
            >
              <IconArrowRight size={18} />
            </ActionIcon>
          )
        }
        pagination={false}
        itemsToShow={3}
      >
        {data.map((exchanges) => {
          return (
            <Paper
              sx={(theme) => ({
                width: '95%',
                backgroundColor:
                  theme.colorScheme === 'dark' ? '#21325E' : '#EAF5FA',
              })}
              p='md'
              key={exchanges.trust_score_rank}
              shadow='xl'
              my='sm'
            >
              <Group align='flex-start' position='apart'>
                <Image
                  width={50}
                  height={50}
                  alt={exchanges.name}
                  src={exchanges.image}
                />
                <Text>Rank: {exchanges.trust_score_rank}</Text>
              </Group>
              <Text mt='sm'>{exchanges.name}</Text>
              <Group noWrap position='apart'>
                <Text mt='xs'>
                  24h(BTC){' '}
                  {exchanges.trade_volume_24h_btc
                    .toFixed()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </Text>
                <Button
                  sx={(theme) => ({
                    backgroundColor:
                      theme.colorScheme === 'dark'
                        ? theme.colors.orange[5]
                        : theme.colors.pink[5],
                    '&:hover': {
                      backgroundColor:
                        theme.colorScheme === 'dark'
                          ? theme.colors.orange[6]
                          : theme.colors.pink[6],
                    },
                  })}
                  mt='sm'
                >
                  Visit
                </Button>
              </Group>
            </Paper>
          )
        })}
      </Carousel>
    </Container>
  )
}

export default Crypto
