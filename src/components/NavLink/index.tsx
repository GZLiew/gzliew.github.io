import { StyledLink } from "./navLink.styles"
import Link from "next/link"

import { LinkUrl, IconType } from "@/lib/types/linkItem"

interface Props {
  url: LinkUrl
  icon: IconType
  title: string
}

const NavLink = ({ url, icon, title }: Props) => {
  return (
    <Link href={url?.cached_url}>
      <StyledLink>
        {icon?.filename && <img className="navlink-icon" src={icon.filename} alt={icon?.name} />}
        <span>{title}</span>
      </StyledLink>
    </Link>
  )
}

export default NavLink
