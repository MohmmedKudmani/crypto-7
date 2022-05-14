import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => {
  const dark = theme.colorScheme === 'dark'

  return {
    text: {
      color: '#333',
      fontSize: '2rem',
    },

    metaMaskButton: {
      backgroundColor: dark ? theme.colors.orange[5] : theme.colors.pink[5],
      marginRight: '1rem',
      transition: 'all 200ms ease',

      '&:hover': {
        backgroundColor: theme.fn.darken(
          dark ? theme.colors.orange[6] : theme.colors.pink[6],
          0.1
        ),
      },
    },
    learnMoreButton: {
      transition: 'all 200ms ease',
      [theme.fn.smallerThan('xs')]: {
        marginTop: '1rem',
      },
    },
  }
})

export default useStyles
