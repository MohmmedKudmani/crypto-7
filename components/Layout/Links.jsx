import Link from 'next/link'
import { useRouter } from 'next/router'
import { Text, Group } from '@mantine/core'
import { useState } from 'react'
import useStyle from './headerStyle'

function Links(props) {
  const { isNavbar } = props
  const { classes, cx } = useStyle()

  const router = useRouter()

  const links = [{ id: 0, label: 'Home', href: '/' }]

  const currentTab = () => {
    if (router.route === '/') return 0
    else if (router.route === '/hello') return 1
    else if (router.route === '/world') return 2
  }

  const [active, setActive] = useState(currentTab)

  return (
    <Group align='left' spacing='5px' direction={isNavbar ? 'column' : 'row'}>
      {links.map((link) => (
        <Link passHref key={link.id} href={link.href}>
          <Text
            className={cx(classes.linkClass, {
              [classes.linkActiveClass]: active === link.id,
            })}
            px={isNavbar ? 'sm' : 'sm'}
            py={isNavbar ? 'sm' : '7px'}
            onClick={() => {
              setActive(link.id)
            }}
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
