import {
  Header as MantineHeader,
  Text,
  ActionIcon,
  useMantineColorScheme,
  Burger,
  Container,
  Group,
} from '@mantine/core'
import useStyle from './headerStyle'
import { IconSun, IconMoon } from '@tabler/icons'
import Links from './Links'
import { useMediaQuery } from '@mantine/hooks'

function Header(props) {
  const { classes } = useStyle()
  const { modelOpened, setModelOpened } = props
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const matchXs = useMediaQuery('(min-width: 700px)')
  const dark = colorScheme === 'dark'

  return (
    <>
      <MantineHeader height={80}>
        <Container size='xl' className={classes.navbarContainer}>
          <Burger
            opened={modelOpened}
            onClick={() => setModelOpened.toggle()}
            className={classes.burger}
          />
          <Group>
            <Text>Logo</Text>
            {matchXs && <Links />}
          </Group>
          <LightDarkMode
            dark={dark}
            toggleColorScheme={toggleColorScheme}
            className={classes.toggleDarkMode}
          />
        </Container>
      </MantineHeader>
    </>
  )
}

function LightDarkMode({ className, toggleColorScheme, dark }) {
  return (
    <ActionIcon
      variant='filled'
      size='lg'
      radius='lg'
      onClick={() => toggleColorScheme()}
      title='Toggle Dark Mode'
      className={className}
    >
      {dark ? <IconSun size={18} /> : <IconMoon size={18} />}
    </ActionIcon>
  )
}

export default Header
