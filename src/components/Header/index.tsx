import { useRouter } from "next/router"

import Container from "../Container"
import Button from "../Button"

import { LogoWrapper } from "./header.styles"

import { HotelLogo } from "@/lib/types/hotelConfig"

interface Props {
  hotelLogo?: HotelLogo
}

const Header = ({ hotelLogo }: Props) => {
  const router = useRouter()
  const isHome = router.pathname === "/"

  const backToHome = () => {
    router.push("/")
  }

  const openNav = () => {
    console.log("nav open")
  }

  return (
    <Container>
      <LogoWrapper>
        <Button onClick={isHome ? openNav : backToHome} bgColor="white" maxWith="40px" height="40px">
          <img
            alt={isHome ? "Open sidenav" : "Back to Home"}
            src={`icons/${isHome ? "wt-ic-hamburger-menu" : "wt-ic-back"}.svg`}
          />
        </Button>
        {isHome && <img src={hotelLogo?.filename} title={hotelLogo?.name} />}
        <Button bgColor="white" maxWith="40px" height="40px">
          <img alt="View Notifications" src="icons/wt-ic-notification.svg" />
        </Button>
      </LogoWrapper>
    </Container>
  )
}

export default Header
