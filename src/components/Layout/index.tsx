import { ReactNode } from "react"
import { ThemeProvider } from "@emotion/react"

import GlobalStyles from "./GlobalStyles"
import Alert from "../Alert"
import Meta from "../Meta"
import Header from "../Header"

import { light, dark } from "@/lib/theme"

import { HotelConfigProps } from "@/lib/types/hotelConfig"

interface Props {
  children?: ReactNode
  preview?: boolean
  hotelConfig?: HotelConfigProps
}

const Layout = ({ preview, children, hotelConfig }: Props) => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <Header hotelLogo={hotelConfig?.content.hotel_logo} />
        <main>{children}</main>
      </div>
    </ThemeProvider>
  )
}

export default Layout
