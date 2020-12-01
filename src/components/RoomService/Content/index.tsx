import React from "react"
import SbEditable from "storyblok-react"

import Container from "@/components/Container"
import ButtonTab, { TabItem } from "@/components/_common/ButtonTab"
import { HotelConfigContent } from "@/lib/types/hotelConfig"
import { HotelInfoContent } from "@/lib/types/hotelInfo"
import { ICategory } from "@/lib/types/roomService"
import Button from "@/components/_common/Button"
import ClientOnly from "@/components/ClientOnly"
import brandColors from "@/lib/theme/brandColors"

import Categories from "../Categories"
import {
  MenuWrapper,
  StickyFooterWrapper,
  Summary,
  TabWrapper,
  ThinText,
  TncWrapper,
  TotalText
} from "./Content.styles"
import NextIcon from "../../../assets/icons/ic-next.svg"

interface Props {
  blok: HotelInfoContent
  blokConfig: HotelConfigContent
  preview?: boolean
  setSelectedService: React.Dispatch<React.SetStateAction<string>>
  initialIndex: number
  TabItems: TabItem[]
  categories: ICategory[]
}

const Content = ({ blok, blokConfig, categories, setSelectedService, initialIndex, TabItems }: Props) => {
  return (
    <SbEditable content={blok}>
      <Container>
        <TabWrapper>
          <ClientOnly>
            <ButtonTab
              items={TabItems}
              initialIndex={initialIndex}
              onChange={(item) => setSelectedService(item.id)}
            />
          </ClientOnly>
        </TabWrapper>
        <TncWrapper>
          <strong>$5 </strong>delivery fee applies. <br />
          <strong>15% </strong>surcharge applies on public holidays.
        </TncWrapper>
      </Container>

      <MenuWrapper>
        <Categories categories={categories} />
      </MenuWrapper>
      <StickyFooterWrapper>
        <Summary>
          <ThinText>4 Items</ThinText>
          <TotalText>$ 430</TotalText>
        </Summary>
        <Button withIcon size="medium" bgColor={brandColors.blue.primary}>
          View Order <NextIcon fill="currentColor" />
        </Button>
      </StickyFooterWrapper>
    </SbEditable>
  )
}

export default Content
