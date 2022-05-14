import News from '../components/News'
import CryptoNews from '../components/CryptoNews'

import { getCryptoNewsAll, getCryptoNewsPopular } from '../lib/requests'
import { dehydrate, QueryClient, useQuery } from 'react-query'
import Head from 'next/head'

function NewsPage() {
  const { data: cryptoNewsAll } = useQuery('cryptoNewsAll', getCryptoNewsAll)
  const { data: cryptoNewsPopular } = useQuery(
    'cryptoNewsPopular',
    getCryptoNewsPopular
  )
  return (
    <>
      <Head>
        <title>C-7 Crypto</title>
      </Head>
      <News cryptoNewsPopular={cryptoNewsPopular} />
      <CryptoNews cryptoNews={cryptoNewsAll} />
    </>
  )
}

export const getStaticProps = async (ctx) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('cryptoNewsAll', getCryptoNewsAll)
  await queryClient.prefetchQuery('cryptoNewsPopular', getCryptoNewsPopular)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default NewsPage
