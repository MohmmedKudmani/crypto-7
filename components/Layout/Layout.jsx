import Header from './Header'
import Theme from '../Theme'
import { AppShell } from '@mantine/core'
import Navbar from './Navbar'
import { useDisclosure } from '@mantine/hooks'
import GlobalStyles from '../GlobalStyles'

function Layout(props) {
  const { children } = props
  const [modelOpened, setModelOpened] = useDisclosure(false)

  return (
    <Theme>
      <AppShell
        sx={(theme) => ({
          '.mantine-AppShell-main': {
            padding: '0',
          },
          '.mantine-AppShell-body': {
            backgroundColor:
              theme.colorScheme === 'dark' ? '#21325E' : '#EAF5FA',
            color: theme.colorScheme === 'dark' ? '#fff' : '#000',
            // boxSizing: 'border-box',
            // margin: '0',
            paddingTop: '90px', // header height value
            overflow: modelOpened ? 'hidden' : 'overlay',
          },
        })}
        header={
          <Header modelOpened={modelOpened} setModelOpened={setModelOpened} />
        }
        fixed
        navbar={
          <Navbar modelOpened={modelOpened} setModelOpened={setModelOpened} />
        }
      >
        {children}
        <GlobalStyles />
      </AppShell>
    </Theme>
  )
}

export default Layout
