import { Navbar as MantineNavbar } from '@mantine/core'
import Links from './Links'
import { useMediaQuery } from '@mantine/hooks'

function Navbar(props) {
  const { modelOpened, setModelOpened } = props
  const matchXs = useMediaQuery('(max-width: 511px)')

  return (
    <>
      <MantineNavbar
        p='md'
        sx={(theme) => ({
          backgroundColor: theme.colorScheme === 'dark' ? '#21325E' : '#EAF5FA',
          display: matchXs ? 'initial' : 'none',
        })}
        hidden={!modelOpened}
      >
        <MantineNavbar.Section grow>
          <Links isNavbar setModelOpened={setModelOpened} />
        </MantineNavbar.Section>
      </MantineNavbar>
    </>
  )
}

export default Navbar
