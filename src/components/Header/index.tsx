import { useRouter } from "next/router"

import Navbar from "../Navbar"
import Container from "../Container"
import Button from "../Button"

import { LogoWrapper } from "./header.styles"

import HamburgerMenuIcon from "../../assets/icons/wt-ic-hamburger-menu.svg"
import BackIcon from "../../assets/icons/wt-ic-back.svg"
import NotificationIcon from "../../assets/icons/wt-ic-notification.svg"

import { HotelLogo } from "@/lib/types/hotelConfig"
import { LinkItem } from "@/lib/types/linkItem"

import useToggle from "@/lib/hooks/useToggle"

interface Props {
  hotelLogo?: HotelLogo
  navLinks?: Array<LinkItem>
}

const Header = ({ hotelLogo, navLinks }: Props) => {
  const router = useRouter()
  const isHome = router.pathname === "/"
  const [isNavbarOpen, toggleNavbar] = useToggle(false)

  const backToHome = () => {
    router.push("/")
  }

  return (
    <>
      <Navbar
        navLinks={navLinks}
        isOpen={isNavbarOpen}
        guestPhoto={hotelLogo}
        handleNavbarClick={toggleNavbar}
      />
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
