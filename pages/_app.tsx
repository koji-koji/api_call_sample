import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (<>
      <Header />
      <Component {...pageProps} />
      <Footer />
  </>)
}
export default MyApp
