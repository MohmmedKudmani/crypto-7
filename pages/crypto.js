import Crypto from '../components/Crypto'
import { getCryptoCoins40, getCryptoExchanges } from '../lib/requests'
import { dehydrate, QueryClient } from 'react-query'
import PriceTracker from '../components/PriceTracker'
import { useQuery } from 'react-query'
import { useState } from 'react'
import { Pagination } from '@mantine/core'

function CryptoPage() {
  const [page, setPage] = useState(1)
  const { data: cryptoCoins, status: cryptoCoinsStatus } = useQuery(
    ['cryptoCoins40', page],
    getCryptoCoins40,
    {
      keepPreviousData: true,
    }
  )

  return (
    <>
      <Crypto />
      <PriceTracker
        setPage={setPage}
        page={page}
        cryptoCoins={cryptoCoins}
        cryptoCoinsStatus={cryptoCoinsStatus}
      />
      <Pagination
        page={page}
        onChange={setPage}
        total={20}
        my='lg'
        position='center'
        radius='sm'
      />
    </>
  )
}

export const getStaticProps = async (ctx) => {
  const queryClient = new QueryClient()

  await queryClient.prefetchQuery('cryptoCoins40', getCryptoCoins40)
  await queryClient.prefetchQuery('cryptoExchanges', getCryptoExchanges)

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default CryptoPage
