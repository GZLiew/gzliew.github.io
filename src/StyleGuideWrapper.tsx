import { ThemeProvider } from "@emotion/react"
import React, { ReactChild } from "react"
import brandColors from "@/lib/theme/brandColors"

import { light } from "./lib/theme"
import GlobalStyles from "./components/Layout/GlobalStyles"

type Props = {
  children?: ReactChild
}

const StyleGuideWrapper = ({ children }: Props) => {
  const brandColor = "pink"

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
