import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { SWRConfig } from 'swr'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig 
    value={{
      fetcher: (url: string) => fetch(url).then(res => res.json())
    }}
  >
      <Head>
        <title>hi</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link rel='icon' href='/favicon.ico' />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link rel='shortcut icon' sizes='16x16' href='/favicon-16x16.png' />
        <link
          rel='shortcut icon'
          sizes='16x16 32x32'
          href='/favicon-32x32.png'
        />
        <link rel='manifest' href='/site.webmanifest'></link>
      </Head>
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
