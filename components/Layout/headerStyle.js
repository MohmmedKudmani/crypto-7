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
        color: dark ? theme.colors.orange[5] : theme.colors.pink[5],
        borderRadius: '7px',
      },
    },

    linkActiveClassNavbar: {
      '&, &:hover': {
        backgroundColor: theme.fn.rgba(
          dark ? theme.colors.orange[5] : theme.colors.pink[5],
          0.1
        ),
        color: dark ? theme.colors.orange[5] : theme.colors.pink[5],
        borderRadius: '7px',
      },
    },

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
    toggleDarkMode: {
      backgroundColor: dark
        ? theme.colors.darkPrimary[6]
        : theme.colors.lightPrimary[6],
      color: dark ? theme.colors.orange[5] : theme.colors.pink[5],
      '&:hover': {
        backgroundColor: dark
          ? theme.colors.darkPrimary[7]
          : theme.colors.lightPrimary[7],
      },
    },
  }
})

export default useStyles
