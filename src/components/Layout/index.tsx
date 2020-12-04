import React, { ReactNode } from "react"
import { ThemeProvider } from "@emotion/react"
import { isFunction } from "lodash"

import { light, dark } from "@/lib/theme"
import brandColors from "@/lib/theme/brandColors"
import { HotelConfigProps } from "@/lib/types/hotelConfig"
import { ILayoutNavigation } from "@/lib/types/commonLayout"
import HeaderHeightProvider from "@/components/Providers/HeaderHeightProvider"

import GlobalStyles from "./GlobalStyles"
import FallbackLoader from "../FallbackLoader"

type ChildrenProps = Omit<Props, "children">

interface Props {
  children?: JSX.Element | ((props: ChildrenProps) => ReactNode) | ReactNode
  preview?: boolean
  hotelConfig?: HotelConfigProps
  navLinks?: ILayoutNavigation[]
}

const Layout = (props: Props) => {
  const { children, ...childrenProps } = props
  const { hotelConfig } = childrenProps
  const brandColor = hotelConfig?.content?.primaryColor || "blue"

  return (
    <ThemeProvider
      theme={{
        ...(hotelConfig?.content?.theme === "light" ? light : dark),
        brandColors: {
          primary: brandColors[brandColor].primary,
          secondary: brandColors[brandColor].secondary
        }
      }}>
      <HeaderHeightProvider>
        <FallbackLoader>
          <GlobalStyles />
          {isFunction(children) ? children(childrenProps) : children}
        </FallbackLoader>
      </HeaderHeightProvider>
    </ThemeProvider>
  )
}

export default Layout
