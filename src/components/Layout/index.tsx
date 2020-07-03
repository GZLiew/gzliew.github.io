import React, { ReactNode } from "react"
import Alert from "../Alert"
import Meta from "../Meta"

interface Props {
  children?: ReactNode
  preview?: boolean
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Alert preview={preview} />
        <main>{children}</main>
      </div>
    </>
  )
}

export default Layout
