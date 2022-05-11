import Head from 'next/head'
import favicon from '../public/favicon.ico'

const CustomHead = ({ title }) => (
  <Head>
    <link rel='shortcut icon' href={favicon.src} type='image/x-icon' />
    <meta
      name='viewport'
      content='minimum-scale=1, initial-scale=1, width=device-width'
    />
    <title>{title}</title>
  </Head>
)

export default CustomHead
