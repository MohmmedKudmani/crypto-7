import { Navbar as MantineNavbar } from '@mantine/core'
import Links from './Links'
import { useMediaQuery } from '@mantine/hooks'

function Navbar(props) {
  const { modelOpened } = props
  const matchXs = useMediaQuery('(min-width: 511px)')

  return (
    <>
      {!matchXs && (
        <MantineNavbar
          p='md'
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === 'dark' ? '#21325E' : '#EAF5FA',
          })}
          hidden={!modelOpened}
        >
          <MantineNavbar.Section grow>
            <Links isNavbar />
          </MantineNavbar.Section>
        </MantineNavbar>
      )}
    </>
  )
}

export default Navbar
