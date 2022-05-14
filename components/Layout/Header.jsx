import {
  Header as MantineHeader,
  ActionIcon,
  useMantineColorScheme,
  Burger,
  Container,
  Group,
} from '@mantine/core'
import useStyle from './headerStyle'
import { IconSun, IconMoon } from '@tabler/icons'
import Links from './Links'
import { useMediaQuery, useWindowScroll } from '@mantine/hooks'
import Image from 'next/image'
import light_logo from '../../public/assets/svg/light-logo.svg'
import dark_logo from '../../public/assets/svg/dark-logo.svg'

function Header(props) {
  const { classes } = useStyle()
  const { modelOpened, setModelOpened } = props
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const matchXs = useMediaQuery('(min-width: 511px)')
  const dark = colorScheme === 'dark'
  const [scroll, scrollTo] = useWindowScroll()

  return (
    <>
      <MantineHeader
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark' ? '#21325E' : '#EAF5FA',
          border: 'none',
          boxShadow: scroll.y > 50 && theme.shadows.sm,
        })}
        height={90}
      >
        <Container size='xl' className={classes.navbarContainer}>
          <Burger
            opened={modelOpened}
            onClick={() => setModelOpened.toggle()}
            className={classes.burger}
          />
          <Group spacing='10px'>
            {dark ? (
              <Image alt='dark_logo' src={dark_logo} width={60} height={55} />
            ) : (
              <Image alt='light_logo' src={light_logo} width={60} height={55} />
            )}
            {matchXs && <Links />}
          </Group>
          <LightDarkMode
            dark={dark}
            toggleColorScheme={toggleColorScheme}
            className={classes.toggleDarkMode}
            scroll={scroll}
          />
        </Container>
      </MantineHeader>
    </>
  )
}

function LightDarkMode({ className, toggleColorScheme, dark, scroll }) {
  return (
    <ActionIcon
      variant='filled'
      size='lg'
      radius='lg'
      onClick={() => toggleColorScheme()}
      title='Toggle Dark Mode'
      mr={scroll.y < 300 && '0.5rem'}
      className={className}
    >
      {dark ? <IconSun size={18} /> : <IconMoon size={18} />}
    </ActionIcon>
  )
}

export default Header
