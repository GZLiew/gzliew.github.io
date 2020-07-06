import React, { ReactNode } from "react"
import { ThemeProvider } from "@emotion/react"

import Alert from "../Alert"
import Meta from "../Meta"

import theme from "@/lib/theme"

interface Props {
  children?: ReactNode
  preview?: boolean
}

const Layout = ({ preview, children }: Props) => {
  return (
    <ThemeProvider theme={theme}>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
    </ThemeProvider>
  )
}

export default Layout
