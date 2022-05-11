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

      '&:hover': {
        backgroundColor: theme.fn.darken(
          dark ? theme.colors.orange[5] : theme.colors.pink[5],
          0.1
        ),
      },
    },
    learnMoreButton: {
      [theme.fn.smallerThan('xs')]: {
        marginTop: '1rem',
      },
    },
  }
})

export default useStyles
