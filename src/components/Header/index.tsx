import { throttle } from "lodash"
import { useState, useEffect, useRef } from "react"

import { useRouter } from "next/router"

import Navbar from "../Navbar"
import Button from "../Button"

import { LogoWrapper, HeaderContainer, HeaderBackground } from "./header.styles"

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
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isNavbarOpen, toggleNavbar] = useToggle(false)
  const headerRef = useRef<boolean>()
  headerRef.current = hasScrolled

  // Listen to scroll event and toggle show flag when page has scrolled a certain amount
  useEffect(() => {
    const handleScroll = () => {
      const show = global.window.scrollY > 40
      if (headerRef.current !== show) {
        setHasScrolled(show)
      }
    }
    // Throttle the event listener callback for better performance
    // See: https://css-tricks.com/debouncing-throttling-explained-examples/#throttle
    document.addEventListener("scroll", throttle(handleScroll, 100))
    return () => {
      document.removeEventListener("scroll", throttle(handleScroll, 100))
    }
  }, [])

  const backToHome = () => {
    router.push("/")
  }

  return (
    <>
      <Navbar navLinks={navLinks} isOpen={isNavbarOpen} guestPhoto={hotelLogo} handleNavbarClick={toggleNavbar} />
      <HeaderContainer>
        <HeaderBackground hasScrolled={hasScrolled} />
        <LogoWrapper>
          <Button onClick={isHome ? toggleNavbar : backToHome} bgColor="white" maxWith="40px" height="40px">
            {isHome ? <HamburgerMenuIcon /> : <BackIcon />}
          </Button>
          {isHome && <img src={hotelLogo?.filename} title={hotelLogo?.name} />}
          <Button bgColor="white" maxWith="40px" height="40px">
            <NotificationIcon />
          </Button>
        </LogoWrapper>
      </HeaderContainer>
    </>
  )
}

export default Header
