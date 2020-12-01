import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import querystring from "querystring"

import TopNav from "@/components/_common/TopNav"
import { HotelConfigContent } from "@/lib/types/hotelConfig"
import { HotelInfoContent } from "@/lib/types/hotelInfo"
import ButtonTab from "@/components/_common/ButtonTab"
import { TabItem } from "@/components/_common/ButtonTab"
import HeaderTitle from "@/components/_common/HeaderTitle"
import LoadingIndicator from "@/components/_common/LoadingIndicator"
import Overlay from "@/components/_common/Overlay"
import ClientOnly from "@/components/ClientOnly"

import Content from "./Content"
import RoomServiceLayout from "./RoomServiceLayout"
import { NavWrapper, StyledHeaderTitle } from "./RoomServices.styles"
import { getCategoriesMock } from "./mock"

interface Props {
  blok: HotelInfoContent
  blokConfig: HotelConfigContent
  preview?: boolean
}

const DEFAULT_LABEL = "In-Room Dining"
const SERVICES: Record<string, TabItem> = {
  food: {
    id: "food",
    title: "Food"
  },
  beverages: {
    id: "beverages",
    title: "Beverages"
  }
}

const TabItems = Object.keys(SERVICES).map((k) => SERVICES[k])

const getServiceType = () => {
  const router = useRouter()
  const urlPath = router.asPath.split("?")
  if (urlPath.length < 2) {
    return SERVICES.food.id
  }
  const queries = querystring.parse(urlPath[1])
  if (!queries.type) {
    return SERVICES.food.id
  }
  if (typeof queries.type === "string" && !!SERVICES[queries.type]) {
    return queries.type
  }
  return SERVICES.food.id
}

const RoomService = ({ blok, blokConfig, preview }: Props) => {
  const queryType = getServiceType()
  const [isOpen, setIsOpen] = useState(false)
  const [selectedService, setSelectedService] = useState(queryType)
  const [isLoading, setIsLoading] = useState(false)
  const [categories, setCategories] = useState([])
  const initialIndex = TabItems.findIndex((x) => x.id === selectedService)

  useEffect(() => {
    setIsLoading(true)
    ;(async () => {
      const categoriesResult = await getCategoriesMock(selectedService)
      setCategories(categoriesResult)
      setIsLoading(false)
    })()
  }, [selectedService])

  return (
    <RoomServiceLayout
      preview={preview}
      blokConfig={blokConfig}
      title={({ hasScrolled }) => (
        <HeaderTitle
          clickable={hasScrolled}
          label={selectedService && hasScrolled ? SERVICES[selectedService].title : DEFAULT_LABEL}
          onClick={() => setIsOpen(true)}
        />
      )}>
      <TopNav isOpen={isOpen} handleNavbarClick={() => setIsOpen(false)}>
        <NavWrapper borderBottom>
          <StyledHeaderTitle label={DEFAULT_LABEL} />
        </NavWrapper>
        <NavWrapper>
          CHOOSE CATEGORY
          <ClientOnly>
            <ButtonTab
              initialIndex={initialIndex}
              items={TabItems}
              onChange={(item) => setSelectedService(item.id)}
            />
          </ClientOnly>
        </NavWrapper>
      </TopNav>
      <Overlay isOpen={isLoading}>
        <LoadingIndicator size="lg" />
      </Overlay>
      <Content
        categories={categories}
        blok={blok}
        blokConfig={blokConfig}
        setSelectedService={setSelectedService}
        initialIndex={initialIndex}
        TabItems={TabItems}
      />
    </RoomServiceLayout>
  )
}

export default RoomService
