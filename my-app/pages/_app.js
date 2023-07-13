import Layout from '@/components/layout/layout'
import Navbar from '@/components/Navbar/nav'
import apolloClient from '@/lib/apolloclient'
import '@/styles/globals.css'
import { ApolloProvider } from '@apollo/client'

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}
