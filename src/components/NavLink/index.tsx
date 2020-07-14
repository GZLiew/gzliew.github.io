import React from "react"
import { StyledNavLink } from "./navLink.styles"

interface Props {
  url: string
  icon: any
  text: string
}

const NavLink = ({ url, icon: Icon, text }: Props) => {
  return (
    <StyledNavLink href={url}>
      {Icon && <Icon className="navlink-icon" />}
      <span>{text}</span>
    </StyledNavLink>
  )
}

export default NavLink
