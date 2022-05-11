import { Text, Card, Container, SimpleGrid } from '@mantine/core'
import useStyles from './cryptoNewsStyle'
import Image from 'next/image'

function CryptoNews(props) {
  const { classes } = useStyles()
  const { cryptoNews, targetRefNe } = props

  return (
    <Container mb='xl' padding='xl' size='1280px'>
      <Text ref={targetRefNe} size='xl' className={classes.heading}>
        C-7 News
      </Text>
      <SimpleGrid
        breakpoints={[
          { maxWidth: 900, cols: 2, spacing: 'lg' },
          { maxWidth: 650, cols: 1, spacing: 'md' },
        ]}
        spacing='xl'
        cols={3}
      >
        {cryptoNews?.map((news) => (
          <Card
            sx={(theme) => ({
              backgroundColor:
                theme.colorScheme === 'dark' ? '#21325E' : '#EAF5FA',
            })}
            key={news.id}
            shadow='xl'
            padding='lg'
          >
            <Card.Section href={news.guid} target='_blank' component='a'>
              <Image
                src={news.imageurl}
                height={100}
                width={150}
                layout='responsive'
                alt='crypto-news'
              />
            </Card.Section>
            <Text weight={500} mt='sm'>
              {news.title}
            </Text>
            <Text size='sm' lineClamp={4} mt='sm'>
              {news.body}
            </Text>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default CryptoNews
