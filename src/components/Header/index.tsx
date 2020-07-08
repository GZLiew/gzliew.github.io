import Container from "../Container"
import Button from "../Button"

import { LogoWrapper } from "./header.styles"

import { HotelLogo } from "@/lib/types/hotelConfig"

interface Props {
  hotelLogo?: HotelLogo
}

const Header = ({ hotelLogo }: Props) => {
  return (
    <Container>
      <LogoWrapper>
        <Button variant="white" maxWith="40px" height="40px">
          <img alt="Open sidenav" src="icons/wt-ic-hamburger-menu.svg" />
        </Button>
        <img src={hotelLogo?.filename} title={hotelLogo?.name} />
        <Button variant="white" maxWith="40px" height="40px">
          <img alt="View Notifications" src="icons/wt-ic-notification.svg" />
        </Button>
      </LogoWrapper>
    </Container>
  )
}

export default Header
