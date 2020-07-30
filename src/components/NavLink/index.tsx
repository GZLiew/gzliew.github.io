import Link from "next/link"
import SbEditable from "storyblok-react"

import { StyledLink, IconWrapper } from "./navLink.styles"

import { ILayoutNavigationLink } from "@/lib/types/commonLayout"

import NavIcons from "@/assets/icons/NavbarIcons"

interface Props {
  blok: ILayoutNavigationLink
}

const NavLink = ({ blok }: Props) => {
  return (
    <SbEditable content={blok}>
      <Link href={`/${blok?.url?.cached_url}${blok?.url?.anchor ? `#${blok?.url?.anchor}` : null}`} passHref>
        <StyledLink>
          {blok?.icon_name && <IconWrapper>{NavIcons[blok?.icon_name]}</IconWrapper>}
          <span>{blok?.title}</span>
        </StyledLink>
      </Link>
    </SbEditable>
  )
}

export default NavLink
