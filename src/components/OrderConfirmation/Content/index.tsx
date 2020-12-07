import React from "react"
import SbEditable from "storyblok-react"

import Container from "@/components/Container"
import { HotelConfigContent } from "@/lib/types/hotelConfig"
import { HotelInfoContent } from "@/lib/types/hotelInfo"
import Button from "@/components/_common/Button"
import brandColors from "@/lib/theme/brandColors"
import ButtonToggle, { ToggleItem } from "@/components/_common/ButtonToggle"

import {
  StickyFooterWrapper,
  SummaryWrapper,
  Info,
  Title,
  Label,
  StickyContent,
  ThinText,
  TotalText,
  BoldText,
  MoreInfoWrapper,
  MoreInfo,
  OrderWrapper
} from "./Content.styles"
import NextIcon from "../../../assets/icons/ic-next.svg"
import Section from "@/components/_common/Section"

type OrderItem = {
  id: string
  TitleLabel: string
}

interface Props {
  blok: HotelInfoContent
  blokConfig: HotelConfigContent
  preview?: boolean
  setActiveButton: React.Dispatch<React.SetStateAction<string>>
  activeButton: string
  ToggleItems: ToggleItem[]
  OrderItems: OrderItem[]
}

const Content = ({ blok, blokConfig, setActiveButton, activeButton, ToggleItems, OrderItems }: Props) => {
  return (
    <SbEditable content={blok}>
      <Section style={{ padding: "0" }}>
        {OrderItems.map(({ id, TitleLabel }) => (
          <OrderWrapper>
            <Info>
              <Label>
                <BoldText>{TitleLabel}</BoldText>
                <ThinText>Fresh Grilled Heavy paneer slice</ThinText>
                <ThinText>Small (330ml) - $25</ThinText>
              </Label>
              <Label>
                <BoldText>$50</BoldText>
                <ThinText>-</ThinText>
                <ThinText>Quantity: 2</ThinText>
              </Label>
            </Info>
            <Button size="small" variant="flat" withIcon>
              Edit <span>&#9998;</span>
            </Button>
          </OrderWrapper>
        ))}
      </Section>

      <MoreInfoWrapper>
        <MoreInfo>
          <BoldText>How many people are in your party?</BoldText>
          <ThinText>
            Room service team can bring the correct number of cutlery and napkins etc to the hotel room
          </ThinText>
        </MoreInfo>
        <ButtonToggle
          onClick={(item) => setActiveButton(item.id)}
          activeItem={activeButton}
          items={ToggleItems}
          round
        />
      </MoreInfoWrapper>
      <SummaryWrapper>
        <Title>
          <BoldText>Price Details</BoldText>
        </Title>
        <Info>
          <Label>
            <ThinText>Price 4 Items</ThinText>
            <ThinText>Delivery Fee</ThinText>
            <BoldText>Total</BoldText>
          </Label>
          <Label>
            <ThinText>$430</ThinText>
            <ThinText>$5</ThinText>
            <TotalText>$ 430</TotalText>
          </Label>
        </Info>
      </SummaryWrapper>
      <StickyFooterWrapper>
        <StickyContent>
          <ThinText>4 Items</ThinText>
          <TotalText>$ 430</TotalText>
        </StickyContent>
        <Button withIcon size="medium" bgColor={brandColors.blue.primary}>
          View <NextIcon fill="currentColor" />
        </Button>
      </StickyFooterWrapper>
    </SbEditable>
  )
}

export default Content
