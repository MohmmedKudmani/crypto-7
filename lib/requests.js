import axios from 'axios'

export async function getCryptoCoins() {
  const { data } = await axios.get(
    'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
  )
  return data
}

export async function getCryptoCoins40(page) {
  const key = page.queryKey[1]

  const { data } = await axios.get(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=30&page=${key}&sparkline=false`
  )
  return data
}

export async function getCryptoTrending() {
  const { data } = await axios.get(
    'https://api.coingecko.com/api/v3/search/trending'
  )
  return data
}

export async function getCryptoNews() {
  const { data } = await axios.get(
    `https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=${process.env.API_KEY}`
  )
  const limitData = data.Data.slice(0, 9)

  return limitData
}

export async function getCryptoNewsAll() {
  const { data } = await axios.get(
    `https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=${process.env.API_KEY}`
  )

  const limitData = data.Data.slice(0, 19)

  return limitData
}

export async function getCryptoNewsPopular() {
  const { data } = await axios.get(
    `https://min-api.cryptocompare.com/data/v2/news/?lang=EN&sortOrder=popular&api_key=${process.env.API_KEY}`
  )

  const limitData = data.Data.slice(0, 9)

  return limitData
}

export async function getCryptoExchanges() {
  const { data } = await axios.get(
    'https://api.coingecko.com/api/v3/exchanges?per_page=10&page=1'
  )
  return data
}
