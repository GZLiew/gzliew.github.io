import { ReactNode } from "react"
import { ThemeProvider } from "@emotion/react"

import GlobalStyles from "./GlobalStyles"
import Alert from "../Alert"
import Header from "../Header"

import { light, dark } from "@/lib/theme"
import { HotelConfigProps } from "@/lib/types/hotelConfig"
import { ILayoutNavigation } from "@/lib/types/commonLayout"

interface Props {
  children?: ReactNode
  preview?: boolean
  hotelConfig?: HotelConfigProps
  navLinks?: ILayoutNavigation[]
}

const Layout = ({ preview, children, hotelConfig, navLinks }: Props) => {
  const links = navLinks?.length >= 0 ? navLinks[0]?.links : []
  return (
    <ThemeProvider theme={hotelConfig?.content?.theme === "light" ? light : dark}>
      <GlobalStyles />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <Header navLinks={links} hotelLogo={hotelConfig?.content?.hotel_logo} />
        <main>{children}</main>
      </div>
    </ThemeProvider>
  )
}

export default Layout
