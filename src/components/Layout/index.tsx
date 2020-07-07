import React, { ReactNode } from "react"
import { ThemeProvider } from "@emotion/react"

import GlobalStyles from "./GlobalStyles"
import Alert from "../Alert"
import Meta from "../Meta"

import { light, dark } from "@/lib/theme"

interface Props {
  children?: ReactNode
  preview?: boolean
}

const Layout = ({ preview, children }: Props) => {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyles />
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
    </ThemeProvider>
  )
}

export default Layout
