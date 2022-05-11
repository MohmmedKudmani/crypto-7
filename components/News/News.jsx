import { Container, Paper, Group, Text, ActionIcon } from '@mantine/core'
import Carousel from 'react-elastic-carousel'
import Image from 'next/image'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons'

function News(props) {
  const { cryptoNewsPopular } = props

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
        C-7 Popular
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
                top: '7rem',
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
                top: '7rem',
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
        {cryptoNewsPopular.map((news) => {
          return (
            <Paper
              sx={(theme) => ({
                width: '95%',
                backgroundColor:
                  theme.colorScheme === 'dark' ? '#21325E' : '#EAF5FA',
                height: 230,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              })}
              key={news.id}
              shadow='xl'
              px='md'
              my='sm'
            >
              <Group align='flex-start' position='apart'>
                <Image
                  width={50}
                  height={50}
                  alt={news.title}
                  src={news.imageurl}
                />
                <div>
                  <Text color='green'>{news.upvotes}</Text>
                  <Text color='red'>{news.downvotes}</Text>
                </div>
              </Group>
              <Text mt='sm'>{news.title}</Text>
              <Text size='sm' lineClamp={2} mt='xs'>
                {news.body}
                ReadMore
              </Text>
              <Text
                sx={{
                  cursor: 'pointer',
                }}
                component='a'
                href={news.url}
                target='_blank'
                variant='link'
                size='sm'
              >
                Read More
              </Text>
            </Paper>
          )
        })}
      </Carousel>
    </Container>
  )
}

export default News
