import React from "react"
import { StyledLink } from "./navLink.styles"
import Link from "next/link"

interface Props {
  url: string
  icon: any
  text: string
}

const NavLink = ({ url, icon: Icon, text }: Props) => {
  return (
    <Link href={url}>
      <StyledLink>
        {Icon && <Icon className="navlink-icon" />}
        <span>{text}</span>
      </StyledLink>
    </Link>
  )
}

export default NavLink
