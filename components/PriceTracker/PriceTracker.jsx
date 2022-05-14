import { Table, Container, Text, Loader, useMantineTheme } from '@mantine/core'
import Image from 'next/image'
import useStyle from './priceTrackerStyle'
import { useMediaQuery } from '@mantine/hooks'

function PriceTracker(props) {
  const { cryptoCoins, cryptoCoinsStatus, targetRefTr } = props
  const { classes } = useStyle()
  const matchXs = useMediaQuery('(min-width: 500px)')
  const theme = useMantineTheme()

  const rows = cryptoCoins?.map((coin) => {
    const isDown = Math.sign(coin.price_change_percentage_24h)
    const UpperCase = coin.symbol.toUpperCase()
    const formatPercent = new Number(coin.price_change_percentage_24h).toFixed(
      2
    )
    const formatDollar = (number) =>
      new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'usd',
        minimumSignificantDigits: 2,
      }).format(number)

    return (
      <tr className={classes.hover} key={coin.id}>
        <td
          style={{
            borderColor: theme.colorScheme === 'dark' && theme.colors.gray[7],
          }}
        >
          <Image alt='coin' width={35} height={35} src={coin.image} />
          <Text
            sx={{
              position: 'relative',
              top: '3px',
            }}
          >
            {UpperCase}
          </Text>
        </td>
        <td
          style={{
            color: isDown === -1 ? 'red' : 'green',
            borderColor: theme.colorScheme === 'dark' && theme.colors.gray[7],
          }}
        >
          <Text>{formatPercent}%</Text>
        </td>
        {matchXs && (
          <td
            style={{
              borderColor: theme.colorScheme === 'dark' && theme.colors.gray[7],
            }}
          >
            <Text>{formatDollar(coin.current_price)}</Text>
          </td>
        )}
        <td
          style={{
            borderColor: theme.colorScheme === 'dark' && theme.colors.gray[7],
          }}
        >
          <Text>{formatDollar(coin.market_cap)}</Text>
        </td>
      </tr>
    )
  })

  return (
    <Container px='lg' padding='xl' size='1280px'>
      <Text
        ref={targetRefTr}
        size='xl'
        className={classes.heading}
        align='center'
      >
        C-7 Tracker
      </Text>
      {cryptoCoinsStatus === 'loading' ? (
        <Loader width='100%' mx='auto' />
      ) : (
        <Table className={classes.table} verticalSpacing='sm'>
          <thead>
            <tr>
              <th
                style={{
                  borderColor:
                    theme.colorScheme === 'dark' && theme.colors.gray[7],
                }}
                className={classes.th}
              >
                Symbol
              </th>
              {matchXs && (
                <th
                  style={{
                    borderColor:
                      theme.colorScheme === 'dark' && theme.colors.gray[7],
                  }}
                  className={classes.th}
                >
                  24H Change
                </th>
              )}
              <th
                style={{
                  borderColor:
                    theme.colorScheme === 'dark' && theme.colors.gray[7],
                }}
                className={classes.th}
              >
                Price
              </th>
              <th
                style={{
                  borderColor:
                    theme.colorScheme === 'dark' && theme.colors.gray[7],
                }}
                className={classes.th}
              >
                Market Cap
              </th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      )}
    </Container>
  )
}

export default PriceTracker
