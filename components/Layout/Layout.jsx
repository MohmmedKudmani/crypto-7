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
        sx={{
          '.mantine-AppShell-main': {
            padding: '0',
          },
        }}
        header={
          <Header modelOpened={modelOpened} setModelOpened={setModelOpened} />
        }
        fixed
        navbar={<Navbar modelOpened={modelOpened} />}
      >
        {children}
        <GlobalStyles modelOpened={modelOpened} />
      </AppShell>
    </Theme>
  )
}

export default Layout
