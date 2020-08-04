import Link from "next/link"
import SbEditable from "storyblok-react"

import { StyledLink, IconWrapper } from "./navLink.styles"

import getLink from "@/lib/utils/getLink"

import { ILayoutNavigationLink } from "@/lib/types/commonLayout"

import NavIcons from "@/assets/icons/NavbarIcons"

interface Props {
  blok: ILayoutNavigationLink
}

const NavLink = ({ blok }: Props) => {
  return (
    <SbEditable content={blok}>
      <Link href={getLink(blok?.url)} passHref>
        <StyledLink>
          {blok?.iconName && <IconWrapper>{NavIcons[blok?.iconName]}</IconWrapper>}
          <span>{blok?.title}</span>
        </StyledLink>
      </Link>
    </SbEditable>
  )
}

export default NavLink
