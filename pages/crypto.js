import Crypto from '../components/Crypto'
import { getCryptoCoins40 } from '../lib/requests'
import { dehydrate, QueryClient } from 'react-query'
import PriceTracker from '../components/PriceTracker'
import { useQuery } from 'react-query'
import { useState } from 'react'
import { Pagination } from '@mantine/core'
import Head from 'next/head'

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
      <Head>
        <title>C-7 Crypto</title>
      </Head>
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
        sx={(theme) => ({
          '.mantine-Pagination-item	': {
            backgroundColor:
              theme.colorScheme === 'dark' && theme.colors.darkPrimary[4],
          },
          '.mantine-Pagination-active': {
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.colors.orange[5]
                : theme.colors.pink[5],
          },
        })}
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

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default CryptoPage
