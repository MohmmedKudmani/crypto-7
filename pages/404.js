import React from 'react'
import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  Group,
} from '@mantine/core'
import { useRouter } from 'next/router'

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  label: {
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[5]
        : theme.colors.gray[5],

    [theme.fn.smallerThan('sm')]: {
      fontSize: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: 'center',
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 500,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  },
}))

export function ErrorPage() {
  const { classes } = useStyles()
  const router = useRouter()
  return (
    <Container className={classes.root}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>Not Found Page</Title>
      <Text
        color='dimmed'
        size='lg'
        align='center'
        className={classes.description}
      >
        You may have mistyped the address, or the page has been moved to another
        URL.
      </Text>
      <Group position='center'>
        <Button
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.orange[5]
                : theme.colors.pink[5],
            '&:hover': {
              backgroundColor: theme.fn.darken(
                theme.colorScheme === 'dark'
                  ? theme.colors.orange[5]
                  : theme.colors.pink[5],
                0.1
              ),
            },
            transition: 'all 200ms ease',
          })}
          variant='filled'
          size='md'
          onClick={() => router.push('/')}
        >
          Take me back to home page
        </Button>
      </Group>
    </Container>
  )
}

export default ErrorPage
