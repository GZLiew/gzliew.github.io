import { useState, ReactNode } from "react"
import { ThemeProvider } from "@emotion/react"

import GlobalStyles from "./GlobalStyles"
import Alert from "../Alert"
import Header from "../Header"

import HeaderHeightContext from "@/lib/context/HeaderHeightContext"

import { light, dark } from "@/lib/theme"
import brandColors from "@/lib/theme/brandColors"
import { HotelConfigProps } from "@/lib/types/hotelConfig"
import { ILayoutNavigation } from "@/lib/types/commonLayout"

interface Props {
  children?: ReactNode
  preview?: boolean
  hotelConfig?: HotelConfigProps
  navLinks?: ILayoutNavigation[]
}

const Layout = ({ preview, children, hotelConfig, navLinks }: Props) => {
  const [headerHeight, setHeaderHeight] = useState(0)
  const links = navLinks?.length >= 0 ? navLinks[0]?.links : []
  const brandColor = hotelConfig?.content?.primaryColor

  return (
    <ThemeProvider
      theme={{
        ...(hotelConfig?.content?.theme === "light" ? light : dark),
        brandColors: {
          primary: brandColors[brandColor].primary,
          secondary: brandColors[brandColor].secondary
        }
      }}>
      <HeaderHeightContext.Provider value={headerHeight}>
        <GlobalStyles />
        <div className="min-h-screen">
          <Alert preview={preview} />
          <Header
            navLinks={links}
            hotelLogo={hotelConfig?.content?.hotelLogo}
            hotelLogoDark={hotelConfig?.content?.hotelLogoDark}
            setHeaderHeight={setHeaderHeight}
          />
          <main>{children}</main>
        </div>
      </HeaderHeightContext.Provider>
    </ThemeProvider>
  )
}

export default Layout
