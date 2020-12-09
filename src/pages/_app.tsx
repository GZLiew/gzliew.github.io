import { useEffect } from 'react'

import * as smoothscroll from 'smoothscroll-polyfill'

import '@/styles/base.css'
import '@brainhubeu/react-carousel/lib/style.css'

const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    smoothscroll.polyfill()
  }, [])

  return <Component {...pageProps} />
}

export default MyApp
