import React, { useEffect, useRef, useState } from "react"

import TopNav from "@/components/_common/TopNav"
import { HotelConfigContent } from "@/lib/types/hotelConfig"
import { HotelInfoContent } from "@/lib/types/hotelInfo"
import ButtonTab from "@/components/_common/ButtonTab"
import { TabItem } from "@/components/_common/ButtonTab"
import HeaderTitle from "@/components/_common/HeaderTitle"
import LoadingIndicator from "@/components/_common/LoadingIndicator"
import Overlay from "@/components/_common/Overlay"
import ClientOnly from "@/components/ClientOnly"
import { replaceUrl } from "@/lib/utils/replaceUrl"

import Content from "./Content"
import PageLayout from "@/components/_common/PageLayout"
import { NavWrapper, StyledHeaderTitle } from "./RoomServices.styles"
import { getCategoriesMock } from "./mock"

interface Props {
  blok: HotelInfoContent
  blokConfig: HotelConfigContent
  preview?: boolean
  category?: string
}

const DEFAULT_LABEL = "In-Room Dining"
export const SERVICES: Record<string, TabItem> = {
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

const RoomService = ({ blok, blokConfig, preview, category }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState(category || SERVICES.food.id)
  const [isLoading, setIsLoading] = useState(false)
  const [categories, setCategories] = useState(blok.categories)
  const initialIndex = TabItems.findIndex((x) => x.id === selectedCategory)
  const mounted = useRef(false)

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true
      return
    }
    setIsLoading(true)
    ;(async () => {
      const pattern = Object.keys(SERVICES).join("|")
      const regx = new RegExp(pattern, "i")
      const newPath = window && window.location.pathname.replace(regx, selectedCategory)
      replaceUrl(newPath)
      const categoriesResult = await getCategoriesMock(selectedCategory)
      setCategories(categoriesResult)
      setIsLoading(false)
    })()
  }, [selectedCategory])

  return (
    <PageLayout
      preview={preview}
      blokConfig={blokConfig}
      title={({ hasScrolled }) => (
        <HeaderTitle
          clickable={hasScrolled}
          label={selectedCategory && hasScrolled ? SERVICES[selectedCategory].title : DEFAULT_LABEL}
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
              onChange={(item) => setSelectedCategory(item.id)}
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
        setSelectedCategory={setSelectedCategory}
        initialIndex={initialIndex}
        TabItems={TabItems}
      />
    </PageLayout>
  )
}

export default RoomService
