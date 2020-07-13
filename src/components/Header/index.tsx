import { useRouter } from "next/router"

import Container from "../Container"
import Button from "../Button"

import { LogoWrapper } from "./header.styles"

import HamburgerMenuIcon from "../../assets/icons/wt-ic-hamburger-menu.svg"
import BackIcon from "../../assets/icons/wt-ic-back.svg"
import NotificationIcon from "../../assets/icons/wt-ic-notification.svg"

import { HotelLogo } from "@/lib/types/hotelConfig"
import { Fragment, useState } from "react"
import Navbar from "../Navbar"

interface Props {
  hotelLogo?: HotelLogo
}

const Header = ({ hotelLogo }: Props) => {
  const router = useRouter()
  const isHome = router.pathname === "/"
  const [isNavbarOpen, setIsNavbarOpen] = useState(false)

  const backToHome = () => {
    router.push("/")
  }

  const toggleNav = () => {
    setIsNavbarOpen(!isNavbarOpen)
  }

  return (
    <Fragment>
      <Navbar isOpen={isNavbarOpen} handleNavbarClick={toggleNav} />
      <Container>
        <LogoWrapper>
          <Button onClick={isHome ? toggleNav : backToHome} bgColor="white" maxWith="40px" height="40px">
            {isHome ? <HamburgerMenuIcon /> : <BackIcon />}
          </Button>
          {isHome && <img src={hotelLogo?.filename} title={hotelLogo?.name} />}
          <Button bgColor="white" maxWith="40px" height="40px">
            <NotificationIcon />
          </Button>
        </LogoWrapper>
      </Container>
    </Fragment>
  )
}

export default Header
