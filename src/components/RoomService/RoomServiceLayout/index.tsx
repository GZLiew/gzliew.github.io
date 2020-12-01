import React from "react"

import Alert from "@/components/Alert"
import Header, { Title } from "@/components/Header"
import Layout from "@/components/Layout"
import { HotelConfigContent } from "@/lib/types/hotelConfig"

type Props = React.ComponentProps<typeof Layout> & {
  blokConfig: HotelConfigContent
  title?: Title
}

const RoomServiceLayout = ({ preview, blokConfig, children, navLinks, title }: Props) => {
  const links = navLinks?.length >= 0 ? navLinks[0]?.links : []
  return (
    <div className="min-h-screen">
      <Alert preview={preview} />
      <Header
        navLinks={links}
        hotelLogo={blokConfig?.hotelLogo}
        hotelLogoDark={blokConfig?.hotelLogoDark}
        title={title}
      />
      <main>{children}</main>
    </div>
  )
}

export default RoomServiceLayout
