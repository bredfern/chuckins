import Layout from '@/containers/Layout'
import Head from 'next/head'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {

  return (
      <Layout>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="keywords" content="Wisconsin Madison Green Bay Kenosha Insurance Insurance companies Auto insurance Life insurance Insurance quotes Home insurance Liability insurance Insurance broker Insurance agents Insurance agency Insurance policy" />
        </Head>
        <Component {...pageProps} />
      </Layout>
  )
}
