import { useSwipeable } from "react-swipeable"
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from "body-scroll-lock"

import { NavbarWrapper, StyledNavbar, Nav } from "./navbar.styles"
import NavLink from "../NavLink"
import GuestDetails from "../GuestDetails"

import { HotelLogo } from "@/lib/types/hotelConfig"
import { LinkItem } from "@/lib/types/linkItem"
import { useRef, useEffect } from "react"

interface Props {
  isOpen: boolean
  guestPhoto: HotelLogo
  navLinks?: Array<LinkItem>
  handleNavbarClick: () => void
}

const Navbar = ({ isOpen, guestPhoto, navLinks, handleNavbarClick }: Props) => {
  const ref = useRef(null)
  useEffect(() => {
    // execute the body scroll lock side effect based on the isOpen props
    isOpen ? disableBodyScroll(ref.current) : enableBodyScroll(ref.current)
    return () => {
      // clear all body scroll locks on unmounting
      clearAllBodyScrollLocks(ref.current)
    }
  }, [isOpen])

  const handlers = useSwipeable({
    trackMouse: false,
    onSwipedLeft: handleNavbarClick
  })

  return (
    <NavbarWrapper isOpen={isOpen} {...handlers} onClick={handleNavbarClick}>
      <StyledNavbar isOpen={isOpen} ref={ref}>
        <GuestDetails guestPhoto={guestPhoto} />
        <Nav>
          {navLinks?.map((navLink, index) => (
            <NavLink blok={navLink} key={`${navLink?.title}-${index}`} />
          ))}
        </Nav>
      </StyledNavbar>
    </NavbarWrapper>
  )
}

export default Navbar
