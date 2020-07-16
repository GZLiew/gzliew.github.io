import Link from "next/link"

import { StyledLink, IconWrapper } from "./navLink.styles"

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
        {icon?.filename && (
          <IconWrapper>
            <img src={icon.filename} alt={icon?.name} />
          </IconWrapper>
        )}
        <span>{title}</span>
      </StyledLink>
    </Link>
  )
}

export default NavLink
