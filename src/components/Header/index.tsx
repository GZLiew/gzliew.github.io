import { useRouter } from "next/router"

import Navbar from "../Navbar"
import Container from "../Container"
import Button from "../Button"

import { LogoWrapper } from "./header.styles"

import HamburgerMenuIcon from "../../assets/icons/wt-ic-hamburger-menu.svg"
import BackIcon from "../../assets/icons/wt-ic-back.svg"
import NotificationIcon from "../../assets/icons/wt-ic-notification.svg"

import { HotelLogo } from "@/lib/types/hotelConfig"
import useToggle from "@/lib/hooks/useToggle"

interface Props {
  hotelLogo?: HotelLogo
}

const Header = ({ hotelLogo }: Props) => {
  const router = useRouter()
  const isHome = router.pathname === "/"
  const [isNavbarOpen, toggleNavbar] = useToggle(false)

  const backToHome = () => {
    router.push("/")
  }

  return (
    <>
      <Navbar isOpen={isNavbarOpen} handleNavbarClick={toggleNavbar} />
      <Container>
        <LogoWrapper>
          <Button onClick={isHome ? toggleNavbar : backToHome} bgColor="white" maxWith="40px" height="40px">
            {isHome ? <HamburgerMenuIcon /> : <BackIcon />}
          </Button>
          {isHome && <img src={hotelLogo?.filename} title={hotelLogo?.name} />}
          <Button bgColor="white" maxWith="40px" height="40px">
            <NotificationIcon />
          </Button>
        </LogoWrapper>
      </Container>
    </>
  )
}

export default Header
