import { ThemeProvider } from '@emotion/react'
import React, { ReactChild } from 'react'
import brandColors from '@/lib/theme/brandColors'

import { light } from './lib/theme'
import GlobalStyles from './components/Layout/GlobalStyles'

import '@/styles/base.css'
import '@brainhubeu/react-carousel/lib/style.css'

type Props = {
  children?: ReactChild
}

const StyleGuideWrapper = ({ children }: Props) => {
  const brandColor = 'blue'

  return (
    <ThemeProvider
      theme={{
        ...light,
        brandColors: {
          primary: brandColors[brandColor].primary,
          secondary: brandColors[brandColor].secondary
        }
      }}>
      <>
        <GlobalStyles />
        {children}
      </>
    </ThemeProvider>
  )
}

export default StyleGuideWrapper
