import { MantineProvider, ColorSchemeProvider } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import { NotificationsProvider } from '@mantine/notifications'
import NextNProgress from 'nextjs-progressbar'

function Theme(props) {
  const { children } = props

  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  })

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  const dark = colorScheme === 'dark'

  const primary = [
    '#E8ECFD',
    '#BECAF9',
    '#94A8F4',
    '#6B86F0',
    '#4164EC',
    '#1742E8',
    '#1335B9',
    '#0E278B',
    '#091A5D',
    '#050D2E',
  ]

  const secondary = [
    '#FFFAF4',
    '#FFCD94',
    '#FFA643',
    '#FF8C32',
    '#FF6600',
    '#FF5400',
    '#D24500',
    '#AC3800',
    '#8D2E00',
    '#742600',
  ]

  const darkColors = [
    '#ffffff',
    '#A6A7AB',
    '#909296',
    '#5c5f66',
    '#373A40',
    '#2C2E33',
    '#25262b',
    '#1A1B1E',
    '#141517',
    '#101113',
  ]

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withNormalizeCSS
        withGlobalStyles
        theme={{
          colors: {
            primary,
            orange: secondary,
            dark: darkColors,
          },
          colorScheme,
          primaryColor: 'primary',
          breakpoints: {
            xs: 700,
            sm: 900,
            md: 1000,
            lg: 1200,
            xl: 1400,
          },
        }}
      >
        <NotificationsProvider position='bottom-left'>
          {children}
          <NextNProgress
            color={primary[6]}
            height={3}
            options={{ showSpinner: false }}
          />
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default Theme
