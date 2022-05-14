import Link from 'next/link'
import { useRouter } from 'next/router'
import { Text, Group } from '@mantine/core'
import useStyle from './headerStyle'
import { useState } from 'react'

function Links(props) {
  const { isNavbar, setModelOpened } = props
  const { classes, cx } = useStyle()

  const router = useRouter()

  const links = [
    { id: 0, label: 'Home', href: '/' },
    { id: 1, label: 'Crypto', href: '/crypto' },
    { id: 2, label: 'News', href: '/news' },
  ]

  const currentTab = () => {
    if (router.route === '/') return 0
    else if (router.route === '/crypto') return 1
    else if (router.route === '/news') return 2
  }

  const [active, setActive] = useState(currentTab)

  return (
    <Group align='left' spacing='5px' direction={isNavbar ? 'column' : 'row'}>
      {links.map((link) => (
        <Link passHref key={link.id} href={link.href}>
          <Text
            className={cx(classes.linkClass, {
              [isNavbar
                ? classes.linkActiveClassNavbar
                : classes.linkActiveClass]: active === link.id,
            })}
            px={isNavbar ? 'sm' : 'sm'}
            py={isNavbar ? 'sm' : '7px'}
            onClick={() => {
              setActive(link.id)
              isNavbar && setModelOpened.close()
            }}
            size='lg'
            component='a'
          >
            {link.label}
          </Text>
        </Link>
      ))}
    </Group>
  )
}

export default Links
