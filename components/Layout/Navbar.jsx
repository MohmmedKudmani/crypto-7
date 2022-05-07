import { Navbar as MantineNavbar, Text } from '@mantine/core'
import useStyle from './navbarStyle'
import Links from './Links'
import { useMediaQuery } from '@mantine/hooks'

function Navbar(props) {
  const { modelOpened } = props
  const { classes, cx } = useStyle()
  const matchXs = useMediaQuery('(min-width: 700px)')

  return (
    <>
      {!matchXs && (
        <MantineNavbar
          p='md'
          // sx={(theme) => ({
          //   [theme.fn.smallerThan('sm')]: {
          //     top: '5rem',
          //   },
          //   padding: '0 0.8rem',
          // })}
          hidden={!modelOpened}
        >
          <MantineNavbar.Section grow>
            <Links isNavbar />
          </MantineNavbar.Section>

          <MantineNavbar.Section className={classes.footer}>
            <Text>Hello</Text>
          </MantineNavbar.Section>
        </MantineNavbar>
      )}
    </>
  )
}

export default Navbar
