import { NavbarWrapper, StyledNavbar, Nav } from "./navbar.styles"
import NavLink from "../NavLink"
import GuestDetails from "../GuestDetails"

import HomeIcon from "../../assets/icons/navbar/ic-menu-home.svg"
import FoodIcon from "../../assets/icons/navbar/ic-menu-food.svg"
import BeveragesIcon from "../../assets/icons/navbar/ic-menu-beverages.svg"
import LaundryIcon from "../../assets/icons/navbar/ic-menu-laundry.svg"
import HotelInformationIcon from "../../assets/icons/navbar/ic-menu-hotelinformation.svg"
import RoomServiceIcon from "../../assets/icons/navbar/ic-menu-roomservice.svg"
import MyOrderIcon from "../../assets/icons/navbar/ic-menu-myorder.svg"
import FacilitiesIcon from "../../assets/icons/navbar/ic-menu-facilities.svg"
import ReportAProbIcon from "../../assets/icons/navbar/ic-menu-reportaprob.svg"
import WeatherIcon from "../../assets/icons/navbar/ic-menu-weather.svg"
import LogoutIcon from "../../assets/icons/navbar/ic-menu-logout.svg"

import { HotelLogo } from "@/lib/types/hotelConfig"

interface Props {
  isOpen: boolean
  guestPhoto: HotelLogo
  handleNavbarClick: () => void
}

// this data should be fetched from Storyblok
const navLinks = [
  { icon: HomeIcon, url: "/", text: "Home" },
  { icon: FoodIcon, url: "#!", text: "Food" },
  { icon: BeveragesIcon, url: "#!", text: "Beverages" },
  { icon: LaundryIcon, url: "#!", text: "Guest Directory" },
  { icon: HotelInformationIcon, url: "#!", text: "Hotel Information" },
  { icon: RoomServiceIcon, url: "#!", text: "Guest Services" },
  { icon: MyOrderIcon, url: "#!", text: "My Orders" },
  { icon: FacilitiesIcon, url: "#!", text: "Facilities" },
  { icon: ReportAProbIcon, url: "/hotel-information", text: "Report a problem" },
  { icon: WeatherIcon, url: "#!", text: "Feedback" },
  { icon: LogoutIcon, url: "#!", text: "Logout" }
]

const Navbar = ({ isOpen, guestPhoto, handleNavbarClick }: Props) => {
  return (
    <NavbarWrapper isOpen={isOpen} onClick={handleNavbarClick}>
      <StyledNavbar isOpen={isOpen}>
        <GuestDetails guestPhoto={guestPhoto} />
        <Nav>
          {navLinks?.map((navLink, index) => (
            <NavLink {...navLink} key={`${navLink.text}-${index}`} />
          ))}
        </Nav>
      </StyledNavbar>
    </NavbarWrapper>
  )
}

export default Navbar
