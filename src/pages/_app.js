import Layout from '@/containers/Layout'
import Head from 'next/head'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  return (
      <Layout>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="viewport-fit=cover" />
        </Head>
        <Component {...pageProps} />
      </Layout>
  )
}
