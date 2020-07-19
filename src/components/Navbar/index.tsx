import { useRef } from "react"
import { useSwipeable } from "react-swipeable"

import { NavbarWrapper, StyledNavbar, Nav } from "./navbar.styles"
import NavLink from "../NavLink"
import GuestDetails from "../GuestDetails"

import { HotelLogo } from "@/lib/types/hotelConfig"
import { LinkItem } from "@/lib/types/linkItem"

import useLockBodyScroll from "@/lib/hooks/useLockBodyScroll"

interface Props {
  isOpen: boolean
  guestPhoto: HotelLogo
  navLinks?: Array<LinkItem>
  handleNavbarClick: () => void
}

const actionLinks = [
  {
    icon: { filename: "/icons/ic-menu-reportaprob.svg" },
    url: { cached_url: "/hotel-information" },
    title: "Report a problem"
  },
  { icon: { filename: "/icons/ic-menu-weather.svg" }, url: { cached_url: "#!" }, title: "Feedback" },
  { icon: { filename: "/icons/ic-menu-logout.svg" }, url: { cached_url: "#!" }, title: "Logout" }
]

const Navbar = ({ isOpen, guestPhoto, navLinks, handleNavbarClick }: Props) => {
  const ref = useRef(null)
  useLockBodyScroll(isOpen, ref)

  const handlers = useSwipeable({
    trackMouse: false,
    onSwipedLeft: handleNavbarClick
  })
  const links = [...navLinks, ...actionLinks]
  return (
    <NavbarWrapper isOpen={isOpen} {...handlers} onClick={handleNavbarClick}>
      <StyledNavbar isOpen={isOpen} ref={ref}>
        <GuestDetails guestPhoto={guestPhoto} />
        <Nav>
          {links?.map((navLink, index) => (
            <NavLink {...navLink} key={`${navLink?.title}-${index}`} />
          ))}
        </Nav>
      </StyledNavbar>
    </NavbarWrapper>
  )
}

export default Navbar
