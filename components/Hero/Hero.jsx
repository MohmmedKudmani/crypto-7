import { Button, Container, Grid, Text, useMantineTheme } from '@mantine/core'
import dark_hero from '../../public/assets/svg/dark_hero.svg'
import light_hero from '../../public/assets/svg/light_hero.svg'
import Image from 'next/image'
import useStyle from './homeStyle'
import { useMediaQuery } from '@mantine/hooks'
import { useRouter } from 'next/router'

function Hero(props) {
  const { scrollIntoViewNe, scrollIntoViewTr } = props
  const theme = useMantineTheme()
  const { classes } = useStyle()
  const MatchMd = useMediaQuery(`(max-width: ${theme.breakpoints.md}px)`)
  const router = useRouter()

  return (
    <>
      <Container size='1280px'>
        <Grid
          sx={{
            textAlign: MatchMd ? 'center' : 'left',
          }}
          justify='space-between'
          align='center'
          columns={24}
        >
          <Grid.Col md={12}>
            <Text
              sx={{
                marginBottom: '1rem',
              }}
              size='xl'
            >
              Welcome to Crypto-7
            </Text>
            <Text size='lg'>
              All you need to know about Crypto in one place
            </Text>
            <Text
              sx={{
                margin: '1rem 0 2rem 0',
              }}
              size='md'
            >
              This is your Crypto Home you can see the Trending Crypto, Tracker,
              Latest And Popular Crypto News, And The Latest Crypto Exchanges
              With The Most Trusted Sites
            </Text>
            <Button
              onClick={() => scrollIntoViewTr({ alignment: 'start' })}
              size='lg'
              className={classes.metaMaskButton}
              radius='xl'
            >
              C-7 Crypto Tracker
            </Button>
            <Button
              onClick={() => scrollIntoViewNe({ alignment: 'start' })}
              size='lg'
              className={classes.learnMoreButton}
              radius='xl'
            >
              C-7 News
            </Button>
          </Grid.Col>
          <Grid.Col md={12}>
            <Image
              alt='hero-image'
              src={theme.colorScheme === 'dark' ? dark_hero : light_hero}
              height={510}
              width={605}
            />
          </Grid.Col>
        </Grid>
      </Container>
    </>
  )
}

export default Hero
