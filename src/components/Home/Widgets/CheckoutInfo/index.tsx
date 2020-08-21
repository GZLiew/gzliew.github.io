import { RoomInfoWrapper, InfoWrapper, DateLabel, NightWrapper, InfoLabel } from "./checkoutInfo.styles"
import { WidgetContainer } from "../widget.styles"

import Button from "@/components/Button"

import NextIcon from "../../../../assets/icons/ic-next.svg"

const CheckOutInfo = () => {
  return (
    <WidgetContainer>
      <RoomInfoWrapper>
        <NightWrapper>
          <span>3</span>
          <InfoLabel>Nights</InfoLabel>
        </NightWrapper>
        <InfoWrapper>
          <InfoLabel>CHECK IN</InfoLabel>
          <DateLabel>13.02.2020</DateLabel>
        </InfoWrapper>
        <InfoWrapper>
          <InfoLabel>CHECK OUT</InfoLabel>
          <DateLabel>16.02.2020</DateLabel>
        </InfoWrapper>
      </RoomInfoWrapper>
      <Button height="40px" maxWidth={`100%`} variant="flat" withIcon={true}>
        Late Check Out is available
        <NextIcon fill="currentColor" />
      </Button>
    </WidgetContainer>
  )
}

export default CheckOutInfo
