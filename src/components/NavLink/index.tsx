import { StyledLink } from "./navLink.styles"
import Link from "next/link"

import { LinkUrl } from "@/lib/types/linkUrl"

interface Props {
  url: LinkUrl
  icon: any
  title: string
}

const NavLink = ({ url, icon: Icon, title }: Props) => {
  return (
    <Link href={url?.cached_url}>
      <StyledLink>
        {Icon?.filename ? (
          <img className="navlink-icon" src={Icon.filename} alt={Icon?.name} />
        ) : (
          <Icon className="navlink-icon" />
        )}
        <span>{title}</span>
      </StyledLink>
    </Link>
  )
}

export default NavLink
