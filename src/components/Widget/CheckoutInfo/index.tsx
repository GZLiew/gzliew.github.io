import { WidgetContainer, RoomInfoWrapper, InfoWrapper, NightWrapper, InfoLabel } from "./checkoutInfo.styles"
import Button from "@/components/Button"

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
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M19.796 11.974l-4.464-4.756c-.272-.29-.714-.29-.986 0-.273.29-.273.76 0 1.05l3.273 3.489H5.697c-.385 0-.697.333-.697.743s.312.743.697.743H17.62l-3.273 3.488c-.273.29-.273.761 0 1.051.136.145.314.218.493.218.178 0 .357-.073.493-.218l4.464-4.756c.272-.29.272-.761 0-1.052z"
          />
        </svg>
      </Button>
    </WidgetContainer>
  )
}

export default CheckOutInfo
