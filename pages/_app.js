import Layout from '../components/Layout/Layout'
import Head from 'next/head'
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useState } from 'react'
import CustomHead from '../lib/CustomHead'

function MyApp({ Component, pageProps }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 5 * 1000,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
            cacheTime: 100 * 1000,
          },
        },
      })
  )

  return (
    <>
      <CustomHead title='Crypto-7' />
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <ReactQueryDevtools initialIsOpen={false} />
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}

export default MyApp
