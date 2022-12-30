import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Open_Sans } from '@next/font/google'

const opensans = Open_Sans({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Chat Alone</title>
        <meta name="description" content="A useless website where you can chat with the best person you know!" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={opensans.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
