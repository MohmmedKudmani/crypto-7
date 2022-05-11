import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => {
  const dark = theme.colorScheme === 'dark'

  return {
    table: {
      textAlign: 'center',
      boxShadow: '0px 0px 7px 2px rgba(0,0,0,0.1)',
      borderRadius: '0.3rem',
      color: dark ? theme.white : theme.black,
    },

    th: {
      textAlign: 'center !important',
      paddingTop: '1.5rem !important',
      paddingBottom: '1.5rem !important',
      width: '180px',
      color: `${dark ? theme.white : theme.black} !important`,
    },

    hover: {
      '&:hover': {
        backgroundColor: dark
          ? theme.colors.darkPrimary[3]
          : theme.colors.lightPrimary[3],
      },
      borderColor: '#324 !important',
      '& > *': {
        padding: '0',
      },
    },

    heading: {
      borderLeft: `5px ${
        dark ? theme.colors.darkPrimary[5] : theme.colors.lightPrimary[5]
      } solid`,
      borderRight: `5px ${
        dark ? theme.colors.orange[5] : theme.colors.pink[5]
      } solid`,
      width: 'fit-content',
      margin: '3rem auto',
      padding: '0 1rem',
    },
  }
})

export default useStyles
