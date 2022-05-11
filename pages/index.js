import Hero from '../components/Hero'
import PriceTracker from '../components/PriceTracker'
import CryptoNews from '../components/CryptoNews'
import CryptoTrending from '../components/CryptoTrending'
import { dehydrate, QueryClient } from 'react-query'
import {
  getCryptoCoins,
  getCryptoNews,
  getCryptoTrending,
} from '../lib/requests'
import { useScrollIntoView } from '@mantine/hooks'
import Head from 'next/head'

import { useQuery } from 'react-query'

function HomePage() {
  const { data: cryptoCoins, status: cryptoCoinsStatus } = useQuery(
    'cryptoCoins',
    getCryptoCoins
  )
  const { data: cryptoNews } = useQuery('cryptoNews', getCryptoNews)
  const { scrollIntoView: scrollIntoViewTr, targetRef: targetRefTr } =
    useScrollIntoView({ offset: 100 })
  const { scrollIntoView: scrollIntoViewNe, targetRef: targetRefNe } =
    useScrollIntoView({ offset: 100 })

  return (
    <>
      <Hero
        scrollIntoViewNe={scrollIntoViewNe}
        scrollIntoViewTr={scrollIntoViewTr}
      />
      <CryptoTrending />
      <PriceTracker
        targetRefTr={targetRefTr}
        cryptoCoins={cryptoCoins}
        cryptoCoinsStatus={cryptoCoinsStatus}
      />
      <CryptoNews targetRefNe={targetRefNe} cryptoNews={cryptoNews} />
    </>
  )
}

export const getStaticProps = async (ctx) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('cryptoCoins', getCryptoCoins)
  await queryClient.prefetchQuery('cryptoNews', getCryptoNews)
  await queryClient.prefetchQuery('cryptoTrending', getCryptoTrending)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default HomePage
