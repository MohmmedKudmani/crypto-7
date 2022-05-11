import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => {
  const dark = theme.colorScheme === 'dark'

  return {
    heading: {
      borderLeft: `5px ${
        dark ? theme.colors.darkPrimary[5] : theme.colors.lightPrimary[5]
      } solid`,
      borderRight: `5px ${
        dark ? theme.colors.orange[5] : theme.colors.pink[5]
      } solid`,
      width: 'fit-content',
      margin: '0 auto',
      padding: '0 1rem',
      marginBottom: '3rem',
      marginTop: '3rem',
    },
  }
})

export default useStyles
