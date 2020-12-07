import React, { useState } from "react"
import SbEditable from "storyblok-react"

import { HotelConfigContent } from "@/lib/types/hotelConfig"
import Button from "@/components/_common/Button"
import RichTextField from "@/components/RichTextField"
import { RoomServiceItem, HotelInfoContent } from "@/lib/types/roomService"
import ReadMore from "@/components/_common/ReadMore"
import LoadingIndicator from "@/components/_common/LoadingIndicator"
import Overlay from "@/components/_common/Overlay"

import {
  StickyFooterWrapper,
  MenuWrapper,
  Image,
  QuantityWrapper,
  QuantitySelectorStyled,
  StyledTitle,
  AboutWrapper,
  ContainerStyled
} from "./Content.styles"
import Choice from "../Choice"

interface Props {
  blok: HotelInfoContent
  roomServiceItem: RoomServiceItem
  blokConfig: HotelConfigContent
  preview?: boolean
}

const Content = ({ blok, roomServiceItem }: Props) => {
  const [isLoading, setIsLoading] = useState(false)
  const { choices = [] } = roomServiceItem
  return (
    <SbEditable content={blok}>
      <Overlay isOpen={isLoading}>
        <LoadingIndicator size="lg" />
      </Overlay>
      <ContainerStyled>
        <Image backgroundImage={roomServiceItem?.image?.filename} />
        <AboutWrapper>
          <StyledTitle>{roomServiceItem.title}</StyledTitle>
          <ReadMore>
            <RichTextField data={roomServiceItem.description} />
          </ReadMore>
        </AboutWrapper>
      </ContainerStyled>

      <MenuWrapper>
        {choices.map((choice) => (
          <Choice key={choice._uid} choice={choice} />
        ))}
        <QuantityWrapper>
          How many would you like
          <QuantitySelectorStyled
            value={1}
            minValue={1}
            onDecrement={(v) => console.log(v)}
            onIncrement={(v) => console.log(v)}
            size="large"
          />
        </QuantityWrapper>
      </MenuWrapper>
      <StickyFooterWrapper>
        <Button onClick={() => setIsLoading(true)} size="large">
          Add 1 to Order $120
        </Button>
      </StickyFooterWrapper>
    </SbEditable>
  )
}

export default Content
