import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useState } from 'react'
import Header from '../components/layouts/Header'
import Footer from '../components/layouts/Footer'
import {MuiThemeProvider} from '@material-ui/core/styles'

function MyApp({ Component, pageProps }: AppProps) {
    // 以下を追加する
    // React.useEffect(() => {
    //   const jssStyles = document.querySelector('#jss-server-side');
    //   if (jssStyles) {
    //     jssStyles.parentElement?.removeChild(jssStyles);
    //   }
    // }, []);

    React.useEffect(() => {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side')
      jssStyles?.parentElement?.removeChild(jssStyles)
    }, [])

  return (
    <>
        <Component {...pageProps} />
    </>
  )
}
export default MyApp
