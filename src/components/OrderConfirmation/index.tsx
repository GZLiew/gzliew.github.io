import React, { useEffect, useState } from "react"

import { HotelConfigContent } from "@/lib/types/hotelConfig"
import { HotelInfoContent } from "@/lib/types/hotelInfo"

import PageLayout from "@/components/_common/PageLayout"
import HeaderTitle from "@/components/_common/HeaderTitle"
import Overlay from "@/components/_common/Overlay"
import LoadingIndicator from "@/components/_common/LoadingIndicator"

import Content from "./Content"

interface Props {
  blok: HotelInfoContent
  blokConfig: HotelConfigContent
  preview?: boolean
}

const ToggleItems = [
  { id: "1", label: "1" },
  { id: "2", label: "2" },
  { id: "3", label: "3" },
  { id: "4+", label: "4+" }
]

const OrderItems = [
  { id: "1", TitleLabel: "Tasmanian Fillet" },
  { id: "2", TitleLabel: "Lagunitas IPA" }
]

const DEFAULT_LABEL = `View Orders(${OrderItems.length})`

const OrderConfirmation = ({ blok, blokConfig, preview }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const [activeButton, setActiveButton] = useState("1")
  return (
    <PageLayout preview={preview} blokConfig={blokConfig} title={() => <HeaderTitle label={DEFAULT_LABEL} />}>
      <Overlay isOpen={isLoading}>
        <LoadingIndicator size="lg" />
      </Overlay>
      <Content
        blok={blok}
        blokConfig={blokConfig}
        setActiveButton={setActiveButton}
        activeButton={activeButton}
        ToggleItems={ToggleItems}
        OrderItems={OrderItems}
      />
    </PageLayout>
  )
}

export default OrderConfirmation
