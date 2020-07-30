import { throttle } from "lodash"
import { useState, useEffect, useRef } from "react"
import { useSpring } from "react-spring"

import { useRouter } from "next/router"

import Navbar from "../Navbar"
import Button from "../Button"

import { LogoWrapper, HeaderContainer, HeaderBackground, Logo } from "./header.styles"

import HamburgerMenuIcon from "../../assets/icons/wt-ic-hamburger-menu.svg"
import BackIcon from "../../assets/icons/wt-ic-back.svg"
import NotificationIcon from "../../assets/icons/wt-ic-notification.svg"
import ShareIcon from "../../assets/icons/share.svg"

import { HotelLogo } from "@/lib/types/hotelConfig"
import { ILayoutNavigationLink } from "@/lib/types/commonLayout"

import useToggle from "@/lib/hooks/useToggle"

interface Props {
  hotelLogo?: HotelLogo
  navLinks?: ILayoutNavigationLink[]
  setHeaderHeight: (number) => void
}

const Header = ({ hotelLogo, navLinks, setHeaderHeight }: Props) => {
  const router = useRouter()
  const isHome = router.pathname === "/" || router.pathname === "/home" || router.pathname === "/editor"
  const [hasScrolled, setHasScrolled] = useState(false)
  const [isNavbarOpen, toggleNavbar] = useToggle(false)
  const ref = useRef<HTMLDivElement>()
  const headerRef = useRef<boolean>()
  headerRef.current = hasScrolled

  const [logoProps, setLogoProps] = useSpring(() => ({
    opacity: isHome ? 1 : 0
  }))

  useEffect(() => {
    if (ref.current) {
      setHeaderHeight(ref.current.offsetHeight)
    }
  }, [])

  // Listen to scroll event and toggle show flag when page has scrolled a certain amount
  useEffect(() => {
    const handleScroll = () => {
      const show = global.window.scrollY > 20
      if (headerRef.current !== show) {
        setHasScrolled(show)
        setLogoProps({ opacity: 1 })
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
      <Navbar
        navLinks={navLinks}
        isOpen={isNavbarOpen}
        guestPhoto={hotelLogo}
        handleNavbarClick={toggleNavbar}
      />
      <HeaderContainer ref={ref}>
        <HeaderBackground hasScrolled={hasScrolled} />
        <LogoWrapper>
          <Button onClick={isHome ? toggleNavbar : backToHome} bgColor="white" maxWith="40px" height="40px">
            {isHome ? <HamburgerMenuIcon /> : <BackIcon />}
          </Button>
          <Logo src={hotelLogo?.filename} title={hotelLogo?.name} style={logoProps} />
          <Button bgColor="white" maxWith="40px" height="40px">
            {isHome ? <NotificationIcon /> : <ShareIcon />}
          </Button>
        </LogoWrapper>
      </HeaderContainer>
    </>
  )
}

export default Header
