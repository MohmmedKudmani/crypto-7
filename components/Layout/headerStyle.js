import { createStyles } from '@mantine/core'

const useStyles = createStyles((theme) => {
  const dark = theme.colorScheme === 'dark'

  return {
    navbarContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '100%',
    },

    linkClass: {
      '&:hover': {
        opacity: '0.9',
      },
      fontWeight: 500,
      color: dark ? theme.white : theme.black,
    },

    linkActiveClass: {
      '&, &:hover': {
        backgroundColor: dark
          ? theme.fn.rgba(theme.colors.orange[9], 0.25)
          : theme.colors.orange[1],
        color: theme.colors.orange[dark ? 3 : 7],
        borderRadius: '7px',
      },
    },

    toggleDarkMode: {},

    menuToggleDarkMode: {
      position: 'absolute',
      right: '10px',
      top: '10px',
    },

    burger: {
      [theme.fn.largerThan('xs')]: {
        display: 'none',
      },
      zIndex: 999,
    },

    menuModal: {
      '.mantine-Modal-modal': {
        top: 20,
        padding: '1rem',
      },
    },
  }
})

export default useStyles
