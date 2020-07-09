import { RoomInfoWrapper, InfoWrapper, NightWrapper, InfoLabel } from "./checkoutInfo.styles"
import { WidgetContainer } from "../widget.styles"

import Button from "@/components/Button"

import NextIcon from "../../../assets/icons/ic-next.svg"

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
          <p>13.02.2020</p>
        </InfoWrapper>
        <InfoWrapper>
          <InfoLabel>CHECK OUT</InfoLabel>
          <p>16.02.2020</p>
        </InfoWrapper>
      </RoomInfoWrapper>
      <Button height="40px" variant="flat" withIcon={true}>
        Late Check Out is available
        <NextIcon fill="currentColor" />
      </Button>
    </WidgetContainer>
  )
}

export default CheckOutInfo
