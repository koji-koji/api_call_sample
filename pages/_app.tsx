import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useState } from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  const [isSidemenuOpen, setIsSidemenuOpen] = useState(true);

  return (<>
      <Header isSidemenuOpen={isSidemenuOpen} setIsSidemenuOpen={setIsSidemenuOpen} >
        <Component {...pageProps} />
        <Footer />
      </Header>
  </>)
}
export default MyApp
