import { MantineProvider, ColorSchemeProvider } from '@mantine/core'
import { useLocalStorage, useMediaQuery } from '@mantine/hooks'
import { NotificationsProvider } from '@mantine/notifications'
import NextNProgress from 'nextjs-progressbar'

const darkPrimary = [
  '#EEF0F6',
  '#D0D4E7',
  '#B1B8D7',
  '#939DC8',
  '#7481B9',
  '#5665A9',
  '#455187',
  '#343D65',
  '#3E497A', // primary
  '#222844',
]

const lightPrimary = [
  '#EAF5FB',
  '#C4E3F2',
  '#9ED1EA',
  '#79BFE2',
  '#53ADDA',
  '#2D9BD2',
  '#2D9BD2', // primary
  '#247CA8',
  '#1B5D7E',
  '#123E54',
]

const pink = [
  '#FFE5F4',
  '#FFB8DF',
  '#FF8ACB',
  '#FF5CB7',
  '#FF2EA3',
  '#FF008E',
  '#CC0072',
  '#990055',
  '#660039',
  '#33001C',
]

// [
//   "#FFFAFD",
//   "#FF9ADE",
//   "#FF48C3",
//   "#FF02AC",
//   "#FF0691",
//   "#FF007E",
//   "#DB0067",
//   "#B40055",
//   "#940045",
//   "#790039",
//   "#63002F"
// ]

const orange = [
  '#FFF5E6',
  '#FEE4B8',
  '#FED28B',
  '#FDC15E',
  '#FCAF31',
  '#FC9E03',
  '#C97E03',
  '#975F02',
  '#653F01',
  '#322001',
]

// [
//   "#FFE9AA",
//   "#FFD456",
//   "#FFC112",
//   "#FCA311",
//   "#FF9500",
//   "#E27B00",
//   "#B96500",
//   "#985300",
//   "#7D4400",
//   "#663800"
// ]

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

function Theme(props) {
  const { children } = props
  const matchXs = useMediaQuery('(min-width: 500px)')

  const [colorScheme, setColorScheme] = useLocalStorage({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  })

  const toggleColorScheme = (value) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  const dark = colorScheme === 'dark'

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withNormalizeCSS
        withGlobalStyles
        theme={{
          colorScheme,
          colors: {
            darkPrimary,
            lightPrimary,
            pink,
            orange,
            dark: darkColors,
          },
          primaryColor: dark ? 'darkPrimary' : 'lightPrimary',
          breakpoints: {
            xs: 510,
            sm: 900,
            md: 1000,
            lg: 1200,
            xl: 1400,
          },
          fontSizes: {
            xl: matchXs ? '2.5rem' : '2rem',
          },
          shadows: {
            xl: '0px 0px 7px 2px rgba(0,0,0,0.1)',
          },
          primaryShade: { light: 6, dark: 6 },
        }}
      >
        <NotificationsProvider position='bottom-left'>
          {children}
          <NextNProgress
            color={dark ? '#FCA311' : '#FF0691'}
            height={3}
            options={{ showSpinner: false }}
          />
        </NotificationsProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default Theme
